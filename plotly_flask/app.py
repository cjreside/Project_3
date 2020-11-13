import psycopg2
import sys
from flask import Flask, jsonify
from sqlalchemy import create_engine, func
from sqlalchemy.ext.automap import automap_base
from sqlalchemy.orm import Session
from flask import render_template

# Connect to Local database.
rds_connection_string = 'postgres:ab1cd2ef3@localhost:5433/Russell_Wilson'
engine = create_engine(f'postgresql://{rds_connection_string}')

Base = automap_base()
Base.prepare(engine, reflect=True)

# Table references
Games = Base.classes.weekly_nfl_games

# Flask setup
app = Flask(__name__)

# Create home route
@app.route('/')
def index():
    return render_template("index.html")

# Create API base route
@app.route('/api/v1.0/')
def api():
    return render_template("api_routes.html")

@app.route("/api/v1.0/data")
def games():
    con = psycopg2.connect("host='ec2-3-224-38-18.compute-1.amazonaws.com:5432' dbname='dc2ijfppnbv3ds' user= 'jwsdkbyzrgpsrx'  password='0ba2ed5c66584de26eeac9a86efe7bfbbe1b59d915d7b2694b8b7251e68ac6af'")  
    cur = con.cursor()
    cur.execute("""select * from weekly_nfl_games""")
    data = [col for col in cur]
    cur.close()
    return jsonify(data)

    # Create the session (link) from Python to the DB
    session = Session(engine)

    #Return all game fields

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

# Error message
def bad_request(message):
    response = jsonify({'Error': message})
    response.status_code = 400
    return response

# Run the app
if __name__ == '__main__':
    app.run(debug=True)