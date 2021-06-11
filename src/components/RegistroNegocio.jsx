import React from "react";
import { useHistory } from "react-router";
import "./styles/RegistroNegocio.css";
const RegistroNegocio = () => {
  let history = useHistory();
  return (
    <div className="grid-container">
      <div className="derecha">
        <button onClick={() => history.goBack()}>Back</button>

        <div className="registronegocio-container">
          <h1>Registro de tu negocio</h1>
          <label htmlFor="negocio">Nombre del negocio</label>
          <input type="text" id="negocio" />


          <label htmlFor="tipo-negocio">Tipo de negocio</label>
          <input type="text" id="tipo-negocio" />

          <label htmlFor="email">Correo electrónico del negocio</label>
          <input type="text" id="email-negocio" />

          <button type="submit">Siguiente</button>
        </div>
      </div>

      <div className="izquierda"></div>
    </div>
  );
};

export default RegistroNegocio;
