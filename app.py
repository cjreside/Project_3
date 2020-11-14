# Load libraries
from flask import Flask, jsonify, render_template, request
import numpy as np
import pandas as pd
import tensorflow as tf
from tensorflow.keras.models import load_model
from sqlalchemy import create_engine, func
from sqlalchemy.ext.automap import automap_base
from sqlalchemy.orm import Session
from config import db_login_info

# Connect to database
# Schema for config file: 'postgresql://<USERNAME>:<PASSWORD>@<HOST>:<PORT>/<DATABASE_NAME>'
engine = create_engine(f'{db_login_info}')
Base = automap_base()
Base.prepare(engine, reflect=True)

# Table references
Games = Base.classes.weekly_nfl_games

# Instantiate flask 
app = Flask(__name__)

# Load the saved model
russell_loaded_model = load_model('russell_deep_trained_790.h5')

#########
# 
# Create home route
#
#########
@app.route('/')
def index():
    return render_template("index.html")

#########
# 
# Create visualizations route
#
#########
@app.route('/visualizations')
def viz():
    return render_template("visualizations.html")

#########
# 
# Create data route
#
#########
@app.route('/data', methods=["GET","POST"])
def games():
    
    # Create the session (link) from Python to the DB
    session = Session(engine)
    
    results = session.query(Games.week, Games.winner, Games.loser, Games.points_winner, Games.points_loser, Games.yards_won,
                           Games.yards_lost, Games.passes, Games.complete, Games.incomplete, Games.intercepted, Games.sack, 
                           Games.traditional, Games.designed_rollout_right, Games.designed_rollout_left, Games.scramble, 
                           Games.scramble_rollout_right, Games.scramble_rollout_left, Games.unknown, Games.i_form, Games.empty, 
                           Games.shotgun, Games.singleback, Games.jumbo, Games.pistol).all()
    session.close()

    all_games = []
    
    for week, winner, loser, points_winner, points_loser, yards_won, yards_lost, passes, complete, incomplete, intercepted, sack, traditional, designed_rollout_right, designed_rollout_left, scramble, scramble_rollout_right, scramble_rollout_left, unknown, i_form, empty, shotgun, singleback, jumbo, pistol in results:
        
        games_dict = {}
        games_dict["week"] = week
        games_dict["winner"] = winner
        games_dict["loser"] = loser
        games_dict["points_winner"] = points_winner
        games_dict["points_loser"] = points_loser
        games_dict["yards_won"] = yards_won
        games_dict["yards_lost"] = yards_lost
        games_dict["yards_won"] = yards_won
        games_dict["passes"] = passes
        games_dict["complete"] = complete
        games_dict["incomplete"] = incomplete
        games_dict["intercepted"] = intercepted
        games_dict["sack"] = sack
        games_dict["traditional"] = traditional
        games_dict["designed_rollout_right"] = designed_rollout_right
        games_dict["designed_rollout_left"] = designed_rollout_left
        games_dict["scramble"] = scramble
        games_dict["scramble_rollout_right"] = scramble_rollout_right
        games_dict["scramble_rollout_left"] = scramble_rollout_left
        games_dict["unknwon"] = unknown
        games_dict["i_form"] = i_form
        games_dict["empty"] = empty
        games_dict["shotgun"] = shotgun
        games_dict["singleback"] = singleback
        games_dict["jumbo"] = jumbo
        games_dict["pistol"] = pistol

        all_games.append(games_dict)

    return jsonify(all_games)

#########
# 
# Create predict route
#
######### 
@app.route('/predict/<int:quarter>/<int:down>/<int:defenders>/<int:rushers>/<int:play_dir>/<int:route>/<int:formation>/<int:dropback>', methods=["GET","POST"])
def predict(quarter,down,defenders,rushers,play_dir,route,formation,dropback):

    # Structure data to make dataframe
    data = [[quarter,down,defenders,rushers,play_dir,route,formation,dropback]]

    # Create the pandas DataFrame 
    user_entry = pd.DataFrame(data, columns = ['quarter','down','defendersInTheBox',
                                            'numberOfPassRushers','playDirection',
                                            'route','offenseFormation','typeDropback'])

    # Run the test against our saved model
    outcome = np.argmax(russell_loaded_model.predict(user_entry), axis=-1)
    
    # Change the array to a string to pass back
    predicted = np.array2string(outcome[0])

    # Return the resulting prediciton
    return predicted

# Run the app
if __name__ == '__main__':
    app.run(debug=True)


