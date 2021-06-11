import React, { useState } from "react";
import Dropdown from "./Dropdown";
import { Button } from "./Button";
import "./styles/Home.css";

const Home = () => {
  const [selectedUbication, setSelectedUbication] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const barrios = ["Villa Urquiza", "Villa Crespo", "Chacarita"];
  const categorias = ["Verduleria", "Carniceria", "Tecnología"];
  return (
    <div>
      <h1>Apoyá a tus negocios locales!</h1>

      <label htmlFor="ubicacion">Ingresá tu barrio</label>
      <Dropdown
        id="ubicacion"
        classname="dropdown-home"
        options={barrios}
        selected={selectedUbication}
        setSelected={setSelectedUbication}
      />

      <input
        type="text"
        id="negocio"
        onChange={(ev) => ev.target.value}
      ></input>

      <label htmlFor="categoria">Qué estás buscando?</label>

      <Dropdown
        id="ubicacion"
        classname="dropdown-home"
        options={categorias}
        selected={selectedCategory}
        setSelected={setSelectedCategory}
      />

      <Button linkTo="Registro" buttonStyle="">
        Buscar
      </Button>
    </div>
  );
};

export default Home;
