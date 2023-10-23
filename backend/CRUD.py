from flask import Flask, jsonify, request
from pymongo import MongoClient, errors
from bson import ObjectId
from flask_cors import CORS

import bcrypt #Modulo para encriptar y desencriptar

# Conexión a la BD
app = Flask(__name__)

# Configuracion de la base de datos en MongoDB
client = MongoClient("mongodb://127.0.0.1:27017/")
db = client['hotel-junglebreeze']

#-----------------------------------------------------------------------
#CROSS ORIGINS-----------------------------------------------------------
cors = CORS(app, resources={r"*": {"origins": "http://localhost:3000"}})


#------------------------------------------------------------------------
#Correr la app-----------------------------------------------------------

if __name__ == '__main__':
    app.run(debug=True)
