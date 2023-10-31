import React, { useState } from "react"; // Importa useState
import "./index.scss";
import Map from "../../components/Map";
import Axios from "axios";
import swal from 'sweetalert2'; // Importa SweetAlert


const Contact = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    correo: "",
    mensaje: "",
  });
  
  const clearForm = () => {
    setFormData({
      nombre: "",
      correo: "",
      mensaje: "",
    });
  };

  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    Axios.post("http://localhost:5000/mail", formData)
      .then((response) => {
        if (response.status === 200) {
          swal.fire('Mensaje enviado', 'Pronto recibirás una respuesta!', 'success');
          clearForm();
        } else {
          swal.fire('Error', 'Ocurrió un error al enviar el mensaje', 'error');
        }
      })
      .catch((error) => {
        console.error("Error en la solicitud POST", error);
        swal.fire('Error', 'Ocurrió un error al enviar el mensaje', 'error');
      });
  };

  return (
    <div className="contenedorcontacto">
      <div className="cont1">
        <h3>Contact us for any information</h3>
        <form onSubmit={handleSubmit} className="formulario">
          <div className="form-group">
            <label htmlFor="nombre">Name</label>
            <input
              type="text"
              id="nombre"
              name="nombre"
              value={formData.nombre}
              onChange={handleChange}
              required
              placeholder="Enter your full name.."
            />
          </div>
          <div className="form-group">
            <label htmlFor="correo">Email</label>
            <input
              type="email"
              id="correo"
              name="correo"
              value={formData.correo}
              onChange={handleChange}
              required
              placeholder="Enter your email address.."
            />
          </div>
          <div className="form-group">
            <label htmlFor="mensaje">What's your question?</label>
            <textarea
              id="mensaje"
              name="mensaje"
              value={formData.mensaje}
              onChange={handleChange}
              rows="4"
              required
              placeholder="Type your message here.."
              style={{ resize: "none" }}
            ></textarea>
          </div>
          <div className="form-group">
            <button type="submit">Send</button>
          </div>
        </form>
      </div>
      <div className="cont2">
        <Map></Map>
      </div>
    </div>
  );
};

export default Contact;
