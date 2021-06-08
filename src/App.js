import React from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import "./App.css"
import Login from './components/Login'
import Navbar from './components/Navbar'
import Registro from './components/Registro'
import RegistroNegocio from './components/RegistroNegocio'

const App = () => {
  return (
    <Router>
      <Navbar/>
      <Switch>
        <Route path="/Login"> <Login/> </Route>
        <Route path="/Registro"> <Registro/> </Route>
        <Route path="/RegistroNegocio"> <RegistroNegocio/> </Route>
      </Switch>
    </Router>
  )
}

export default App
  
