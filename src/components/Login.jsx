import React, { useState } from "react";
// import { Link } from "react-router-dom";
import { Button } from "./Button";
import "./styles/Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submit = () => {
    return console.log(email, password);
  };

  return (
    <div className="form-container">
      <h1>Iniciar Sesión</h1>

      <label htmlFor="email"> Correo Electrónico</label>

      <input
        type="email"
        id="email"
        onChange={(ev) => setEmail(ev.target.value)}
      />

      <label htmlFor="password">Contraseña</label>

      <input
        type="password"
        id="password"
        onChange={(ev) => setPassword(ev.target.value)}
      />
    
        {/* <p className="soswachin"><Link>Has olvidado tu contraseña?</Link></p> */}

      <Button
        onClick={submit}
        linkTo=""
        buttonStyle="btnToLogin"
        buttonSize="btnSizeLogin"
      >
        INICIAR SESIÓN
      </Button>

    </div>
  );
};

export default Login;
