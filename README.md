# What Should Russell Wilson Do?
For our final project, we built an interactive ML dashboard that used in 2018 NFL data and predicts how a Russell Wilson passing play could turn out based on 8 criteria. The possible results are: completion, incompletion, and interception.

## Team members:

Alyssa Pech, Colby Hoke, Connor Reside, 

## Data source:

https://www.kaggle.com/c/nfl-big-data-bowl-2021/data

## See it live:

https://russell-wilson-predictor.herokuapp.com/

## Additional files:
* Data cleaning notebook:
  https://colab.research.google.com/drive/1iPqv48xJ45dbr3chT95bxT9c5LZJkEz2?usp=sharing

* ML notebook:
  https://colab.research.google.com/drive/1mBA_vjN-HK3LD_jCPpkZSNtYUCI-vXJ4#scrollTo=rJ__YTNwtn9F

## Files in this repository:
static folder:
  
  js folder:
    
    app.js - Builds the dropdowns and interacts with the ML model
    
    bideo.js - Builds the Russell bobblehead video background
    
    logic.js - Builds the graph visualization

  
  style folder:
    
    Russell_bobblehead.gif - Used as background
    
    bootstrap.min.css - Bootstrap style
    
    style.css - CSS styles

  videos folder:
    
    All of the .gifs
    
  templates folder:

    favicon.ico - Russell favicon

    index.html - Page loaded at /

    visualizations.html - Page loaded at /visualizations

weekly_nfl folder:
  
    Jupyter notebook and data used to build visualizations and the API
  
    Loads cleaned data to a postgres database

app.py
  
    Flask app
  
    Builds the home route (/)

    Builds the visualization route (/visualizations)
  
    Builds the prediciton route, to test against the ML model (/predict)
  
    Builds the API route (/data)

russell_deep_trained_790.h5
  
    ML model

heroku_files:
  
    All of the same files, but rebuilt to Heroku's app standards

## Technologies used:
    python
      pandas
      spark
      numpy
      flask
      tensorflow
        keras
      sqlalchemy
    javascript
      d3
    html
    css
