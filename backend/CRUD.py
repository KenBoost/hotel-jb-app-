from flask import Flask, jsonify, request
from pymongo import MongoClient, errors
from bson import ObjectId
from flask_cors import CORS
import smtplib

import bcrypt #Modulo para encriptar y desencriptar

# Conexión a la BD
app = Flask(__name__)

# Configuracion de la base de datos en MongoDB
client = MongoClient("mongodb://127.0.0.1:27017/")
db = client['hotel-junglebreeze']



#------------ENVIO DE CORREOS-------------------------------------------
#-----------------------------------------------------------------------
@app.route('/', methods=['POST'])
def contact_form():
    if request.method == 'POST':
        nombre = request.form.get('nombre')
        correo = request.form.get('correo')
        mensaje = request.form.get('mensaje')

        # Configura el envío de correo electrónico
        server = smtplib.SMTP('smtp.gmail.com', 587)
        server.starttls()
        server.login('kennethmiranda56@gmail.com', 'kennethmcr16')

        subject = 'Nuevo mensaje de Jungle Breeze'
        body = f'Nombre: {nombre}\nCorreo: {correo}\nMensaje: {mensaje}'
        msg = f'Subject: {subject}\n\n{body}'

        server.sendmail('tucorreogmail@gmail.com', 'tudirecciondestino@gmail.com', msg)

        server.quit()

        # Devuelve una respuesta JSON de éxito
        response = {'message': 'El mensaje se envió con éxito'}
        return jsonify(response), 200




#-----------------------------------------------------------------------
#CROSS ORIGINS-----------------------------------------------------------
cors = CORS(app, resources={r"*": {"origins": "http://localhost:3000"}})


#------------------------------------------------------------------------
#Correr la app-----------------------------------------------------------

if __name__ == '__main__':
    app.run(debug=True)
