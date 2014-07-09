from flask import Flask
from flask.ext.sqlalchemy import SQLAlchemy
from app.routes.api import api

app = Flask(__name__, static_url_path='')
app.register_blueprint(api,url_prefix="/api")

app.config.from_object('config')
db = SQLAlchemy(app)


from app.routes import index

