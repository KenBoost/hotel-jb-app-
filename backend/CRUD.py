from flask import Flask, jsonify, request
from pymongo import MongoClient, errors
from bson import ObjectId
from flask_cors import CORS

import bcrypt #Modulo para encriptar y desencriptar

# Conexión a la BD
app = Flask(__name__)

# Configuracion de la base de datos en MongoDB