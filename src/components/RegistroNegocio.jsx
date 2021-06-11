import React, { useState } from "react";
import { useHistory } from "react-router";
import "./styles/RegistroNegocio.css";
import Dropdown from "./Dropdown";

const RegistroNegocio = () => {
  let history = useHistory();

  const [selectedDropdown, setSelectedDropdown] = useState("");
  const options = ["Carniceria", "Verduleria", "Mercado"];

  const [negocio, setNegocio] = useState();
  const [emailNegocio, setEmailNegocio] = useState();
  const tipoNegocio = selectedDropdown

  console.log(tipoNegocio, negocio, emailNegocio)


  return (
    <div className="grid-container">
      <div className="derecha">
        <button onClick={() => history.goBack()}>Back</button>

        <div className="registronegocio-container">
          <h1>Registro de tu negocio</h1>

          <label htmlFor="negocio">Nombre del negocio</label>

          <input
            type="text"
            id="negocio"
            onChange={(ev) => setNegocio(ev.target.value)}
          ></input>

          <label htmlFor="tipo-negocio">Tipo de negocio</label>
          <Dropdown
            id="tipo-negocio"
            classname="dropdown"
            options={options}
            selected={selectedDropdown}
            setSelected={setSelectedDropdown}
          />

          <label htmlFor="email">Correo electrónico del negocio</label>
          <input
            type="text"
            id="email-negocio"
            onChange={(ev) => setEmailNegocio(ev.target.value)}
          />

          <button type="submit">Siguiente</button>
        </div>
      </div>

      <div className="izquierda"></div>
    </div>
  );
};

export default RegistroNegocio;
