from flask import request

from . import api_blueprint
from ..util import get_normalized_data


@api_blueprint.route('/', methods=['GET'])
def get_allocation():
    # time_horizon = request.args.get('time')
    # risk_tolerance = request.args.get('risk')

    # get_normalized_data()

    return {
        "SPY": 50,
        "EFA": 25,
        "VT": 25
    }
