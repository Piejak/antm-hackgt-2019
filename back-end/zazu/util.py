import requests
import numpy as np
import pandas as pd
from scipy.optimize import minimize


def get_normalized_prices(start_date: str, tickers: list) -> pd.DataFrame:
    identifiers = ",".join(tickers)
    response = requests.get(
        'https://www.blackrock.com/tools/hackathon/performance',
        params={
            "identifiers": identifiers,
            "betaPortfolios": "SNP500",
            "riskFreeRatePortfolio": "LTBILL1-3M",
            "startDate": start_date
        }
    )
    json_response = response.json()

    returns = json_response['resultMap']['RETURNS']
    dates = list(returns[0]['returnsMap'])
    normalized_prices_df = pd.DataFrame(index=dates)
    for stock in returns:
        returns_dict = stock['returnsMap']
        normalized_prices = []
        for date in returns_dict:
            # Only record return data for days in which the stock traded
            if returns_dict[date]['oneDay'] != 0.:
                price = returns_dict[date]['level']
                normalized_prices.append(price)
            else:
                normalized_prices.append(np.nan)
        temp_df = pd.DataFrame(normalized_prices, index=list(returns_dict), columns=[stock['ticker']])
        normalized_prices_df = normalized_prices_df.join(temp_df)
        if returns_dict == returns[0]['returnsMap']:
            normalized_prices_df = normalized_prices_df.dropna()
    normalized_prices_df.fillna(method='ffill', inplace=True)
    normalized_prices_df.fillna(method='bfill', inplace=True)
    # Create a row of ones to append to the top on the normalized_prices_df
    ones_df = pd.DataFrame(columns=tickers)
    ones_df.loc[0] = 1.
    return pd.concat([ones_df, normalized_prices_df])


def get_optimized_allocations(tickers: list, normalized_prices: pd.DataFrame, samples: int):
    # Optimize allocations
    initial_allocations = np.empty(len(tickers), )
    initial_allocations[:] = 1 / len(tickers)

    bounds = [(0.0, 1.0)] * len(tickers)
    # fun specifies a function that returns 0 only when the input satisfies the constraint
    constraints = ({'type': 'eq', 'fun': lambda inputs: 1.0 - np.sum(inputs)})

    optimization_result = minimize(sharpe_ratio, initial_allocations, args=(normalized_prices, samples),
                                   bounds=bounds, constraints=constraints)
    optimized_allocations = optimization_result.x
    return optimized_allocations


def sharpe_ratio(allocations, normalized_prices, samples, risk_free_return=0.0):
    daily_return = calculate_daily_return(normalized_prices, allocations)
    sr = np.mean(daily_return - risk_free_return) / np.std(daily_return)
    return -1 * np.sqrt(samples) * sr


def calculate_daily_return(normalized_prices, allocations):
    daily_portfolio_val = (normalized_prices * allocations).sum(axis=1)  # axis=1 indicates sum across each row
    daily_return = daily_portfolio_val / daily_portfolio_val.shift(1) - 1
    return daily_return[1:]

def get_performance_data(portfolio):
    resp = requests.get('https://www.blackrock.com/tools/hackathon/portfolio-analysis?calculatePerformance=true&positions=' + portfolio)
    return resp.content