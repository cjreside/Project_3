# Load libraries
from flask import Flask, jsonify, render_template, request
import numpy as np
import pandas as pd
import tensorflow as tf
from tensorflow.keras.models import load_model

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

    # REturn the resulting prediciton
    return predicted

# Run the app
if __name__ == '__main__':
    app.run(debug=True)


