import React, { useEffect, useState } from 'react'
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import "./App.css"
import Login from './components/Login'
import Navbar from './components/Navbar'
import Registro from './components/Registro'
import RegistroNegocio from './components/RegistroNegocio'

const App = () => {
  const [showNav, setShowNav] = useState( true )

  return(
    <Router>
      {/* Si showNav es true renderiza <Navbar /> sino null (no muestra nada) */}
      { showNav ? <Navbar showNav = {(state) => setShowNav(state)}/> : false} 
      <Switch>
        <Route path="/Login"> <Login/> </Route>
        <Route path="/Registro"> <Registro/> </Route>
        <Route path="/RegistroNegocio"> <RegistroNegocio/> </Route>
      </Switch>
    </Router>
  )
}

export default App
  
