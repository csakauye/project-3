# Project-3
Project 3 Group 1

Amber Aeschbach, Layla Burgan and Clare Sakauye

# Summary 
For our project we focused on UFO sightings across the United States and Canada in 2016. We found this [dataset](https://www.kaggle.com/datasets/utkarshx27/ufo-sights-2016-us-and-canada) on Kaggle and it includes over 5,000 sightings. We wanted to focus on the location of sightings, their descriptions, and other trends found in the data. 

# Methods Used 
First we cleaned the data in Python using the Pandas library. The date strings were inconsistent in format and we wanted them to be in datetime format. Using the tips we found from this [link](https://stackoverflow.com/questions/31152414/formatting-really-inconsistent-dates-with-python), we converted the dates (Resources/data_cleaning.ipynb).

Then, we imported the data into a Postgres SQL database (Resources/ufo_database.sql). Using SQLAlchemy we accessed this database to create a Flaskapp. On this app we hosted an API containing our Jsonified data (app.py). 

Using our API, we called the data into our Javascript file through the D3 library. We used Leaflet to display the sightings on an interactive map (logic.js), and the Chart.js library to create a dashboard detailing popular trends in our data (graphs.js). 

Finally, we created a webpage to display our results using css styling aiming to capture the retro-charm of websites from the 90s!

# Results/Conclusion 
Based on the data we were able to answer the following questions. 

Where did the majority of UFO sightings take place in 2016 across the US and Canada? 
    
    California, Florida, Arizona, Washington state and North Carolina were the top five states. This makes sense as these are some of the most populous states and more people equals more UFO sightings. 

What state/province saw the most UFO sightings? 
   
    California had the most UFO sightings at 544, which makes sense because it has the biggest population. Additionally, we expected New York to have more UFO sightings due to its population size but light pollution in New York City may prevent possible UFO sightings. 

What shape UFOs were seen the most? 

    Light was the most popular UFO sighting followed by circles. 

What month had the most UFO sightings? 

    July had the most UFO sightings and December had the least. Based on weather, it makes sense that more people are out in July at night versus December. 
