import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Login from "./components/Login";
import Navbar from "./components/Navbar.jsx";
import Registro from "./components/Registro";
import RegistroNegocio from "./components/RegistroNegocio";

const App = () => {
  const [showNav, setShowNav] = useState(true);

  const toggleNav = (options) => {
    setShowNav(options);
  };

  //Hide or Show navbar

  /* document.addEventListener("DOMContentLoaded", function (event) {
		
	}); */

  useEffect(() => {
    const navbar = document.getElementById("navbar");
    if (!showNav) {
      if (!navbar.classList.contains("navbar-hide")) {
        navbar.classList.add("navbar-hide");
      }
    } else {
      if (navbar.classList.contains("navbar-hide")) {
        navbar.classList.remove("navbar-hide");
      }
    }
  });

  return (
    <Router>
      {/* Si showNav es true renderiza <Navbar /> sino null (no muestra nada) */}
      <Navbar showNav={(state) => toggleNav(state)} />
      <Switch>
      <Route exact path="/">
          <Home />
        </Route>
        <Route path="/Login">
          <Login />
        </Route>
        <Route path="/Registro">
          <Registro />
        </Route>
        <Route path="/RegistroNegocio">
          <RegistroNegocio />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
