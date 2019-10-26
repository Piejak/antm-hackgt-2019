from . import api_blueprint


@api_blueprint.route('/')
def hello_world():
    return 'Hello, World!'
