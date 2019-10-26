from flask import request
from datetime import datetime
from dateutil.relativedelta import relativedelta

from . import api_blueprint
from ..util import get_normalized_prices, get_optimized_allocations


@api_blueprint.route('/', methods=['GET'])
def get_allocation():
    # time_horizon = request.args.get('time')
    time_horizon = 1
    risk_tolerance = request.args.get('risk')

    start_date = str(datetime.today() + relativedelta(years=-1*time_horizon)).split(" ")[0].replace('-', '')

    # TODO: DETERMINE PORTFOLIO COMPOSITION BASED ON USER PROFILE
    tickers = ['AAPL', 'MSFT']

    normalized_prices_df = get_normalized_prices(start_date, tickers)
    optimized_allocations = get_optimized_allocations(tickers, normalized_prices_df)

    return optimized_allocations
