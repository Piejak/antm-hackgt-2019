import pandas as pd

from flask import request
from datetime import datetime
from dateutil.relativedelta import relativedelta

from . import api_blueprint
from ..util import get_normalized_prices, get_optimized_allocations, get_performance_data


@api_blueprint.route('/', methods=['GET'])
def get_allocation():
    time_horizon = int(request.args.get('time'))
    risk_tolerance = request.args.get('risk')

    start_date = str(datetime.today() + relativedelta(years=-1*time_horizon)).split(" ")[0].replace('-', '')

    if risk_tolerance == 'low':
        tickers = ['SPY', 'VT', 'EFA', 'QQQ', 'XLI', 'XLF', 'XLE', 'XLV', 'XLP', 'IWM', 'MDY']
        sharpe_ratio_samples = 12
    else:
        tickers = ['MSFT', 'AAPL', 'AMZN', 'JPM', 'JNJ', 'PG', 'BA', 'MCD', 'MA', 'UNH', 'XOM', 'WMT']
        sharpe_ratio_samples = 252

    normalized_prices_df = get_normalized_prices(start_date, tickers)
    optimized_allocations = get_optimized_allocations(tickers, normalized_prices_df, sharpe_ratio_samples)

    allocations = pd.DataFrame(optimized_allocations, index=tickers)
    return allocations.to_json()


@api_blueprint.route('/performance', methods=['GET'])
def get_performance():
    portfolio = request.args.get('positions')
    return get_performance_data(portfolio)
