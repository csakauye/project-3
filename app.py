
import pandas as pd
import datetime as dt
import numpy as np

import sqlalchemy
from sqlalchemy.ext.automap import automap_base
from sqlalchemy.orm import Session
from sqlalchemy import create_engine,func, desc
from flask import Flask,jsonify


engine = create_engine("postgresql+psycopg2://postgres:postgres@localhost:5432/ufo")

session = Session(engine)
Base = automap_base()
Base.prepare(autoload_with=engine)

ufo = Base.classes.ufo
############################################
# Flask Setup
############################################
app = Flask(__name__)


###########################################
# Flask Routes
##########################################
@app.route("/")
def home():
    return(
        f"Available Routes:<br/>"
        f"/api/ufo"
    )

###############
@app.route("/api/ufo")
def ufos():
    results= session.query(ufo.Country,ufo.City,ufo.State,ufo.Shape,ufo.Summary,ufo.lat,ufo.lng,ufo.Clean_Date)
    session.close()
    all_ufos = []
    for country,city,state,shape,summary,lat,lng, clean_date in results:
        ufo_dict = {}
        ufo_dict["Country"] = country
        ufo_dict["City"] = city
        ufo_dict["State"] = state
        ufo_dict["Shape"] = shape
        ufo_dict["Summary"] = summary
        ufo_dict["lat"] = lat
        ufo_dict["lng"] = lng
        ufo_dict["Clean_Date"] = clean_date
        all_ufos.append(ufo_dict)
    return jsonify(all_ufos)



if __name__ == '__main__':
    app.run(debug=True)