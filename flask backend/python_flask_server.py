##### pip install Flask #####

import os
from datetime import datetime
from flask import Flask, request

req = {}

app = Flask(__name__)

@app.route('/data')
def send_data():
    return {"data": "OCEAN results"}
print("1")
@app.route('/send', methods=['GET', 'POST'])
def get_data():
    global req
    if request.method == 'POST':
        print("2")
        req = request.files['file']
        print("3")
        file_path = os.path.join('VIDEO :', (req.secure_filename))
        req.save(file_path)
        print("4")
        print(req)
        return req
    else:
        return "Data received in server"


print("5")
app.run( host="127.0.0.1", port=80)
