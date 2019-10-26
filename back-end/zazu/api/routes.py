import pandas as pd

from flask import request

from . import api_blueprint
from ..util import get_normalized_prices, get_optimized_allocations


@api_blueprint.route('/', methods=['GET'])
def get_allocation():
    time_horizon = request.args.get('time')
    risk_tolerance = request.args.get('risk')

    # TODO: DETERMINE PORTFOLIO COMPOSITION BASED ON USER PROFILE
    tickers = ['AAPL', 'MSFT']

    normalized_prices_df = get_normalized_prices(tickers)
    optimized_allocations = get_optimized_allocations(tickers, normalized_prices_df)

    return optimized_allocations
