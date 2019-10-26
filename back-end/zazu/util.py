import requests
import numpy as np
import pandas as pd
from scipy.optimize import minimize


def get_normalized_prices(tickers: list) -> pd.DataFrame:
    identifiers = ",".join(tickers)
    response = requests.get(
        'https://www.blackrock.com/tools/hackathon/performance',
        params={
            "identifiers": identifiers,
            "betaPortfolios": "SNP500",
            "riskFreeRatePortfolio": "LTBILL1-3M",
            "startDate": "20191014"
        }
    )
    json_response = response.json()

    returns = json_response['resultMap']['RETURNS']
    normalized_prices_df = pd.DataFrame()
    for stock in returns:
        returns_dict = stock['returnsMap']
        normalized_prices = [1]
        for date in returns_dict:
            if returns_dict[date]['oneDay'] != 0:  # Skip days when the stock did not trade
                price = returns_dict[date]['level']
                normalized_prices.append(price)

        normalized_prices_df[stock['ticker']] = normalized_prices
    return normalized_prices_df


def get_optimized_allocations(tickers: list, normalized_prices: pd.DataFrame):
    # Optimize allocations
    initial_allocations = np.empty(len(tickers), )
    initial_allocations[:] = 1 / len(tickers)

    bounds = [(0.0, 1.0)] * len(tickers)
    # fun specifies a function that returns 0 only when the input satisfies the constraint
    constraints = ({'type': 'eq', 'fun': lambda inputs: 1.0 - np.sum(inputs)})

    optimization_result = minimize(sharpe_ratio, initial_allocations, args=normalized_prices,
                                   bounds=bounds, constraints=constraints)
    optimized_allocations = optimization_result.x
    optimized_sharpe_ratio = -1 * optimization_result.fun

    return optimized_allocations


def sharpe_ratio(allocations, normalized_prices, risk_free_return=0.0, number_of_samples=252):
    daily_return = calculate_daily_return(normalized_prices, allocations)
    sr = np.mean(daily_return - risk_free_return) / np.std(daily_return)
    # Return annualized sharpe ratio
    return -1 * np.sqrt(number_of_samples) * sr


def calculate_daily_return(normalized_prices, allocations):
    daily_portfolio_val = (normalized_prices * allocations).sum(axis=1)  # axis=1 indicates sum across each row
    daily_return = daily_portfolio_val / daily_portfolio_val.shift(1) - 1
    return daily_return[1:]
