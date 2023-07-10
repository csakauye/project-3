
import pandas as pd
import datetime as dt
import numpy as np

import sqlalchemy
from sqlalchemy.ext.automap import automap_base
from sqlalchemy.orm import Session
from sqlalchemy import create_engine,func, desc
from flask import Flask,jsonify


engine = create_engine("postgresql+psycopg2://postgres:postgres@localhost:5432/ufo")

Base = automap_base()
Base.prepare(autoload_with=engine)

ufo = Base.classes.ufo

app = Flask(__name__)

@app.route("/")
def home():
    return(
        "This is running"
    )

if __name__ == '__main__':
    app.run(debug=True)