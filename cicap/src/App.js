import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Login } from './components/login/login'
import { MenuHeader } from './components/menu/menuHeader'
import { MenuFooter } from './components/menu/menuFooter'
import { Home } from './components/home/home'
import {FormIndividual} from './components/agendamentos/formIndividual'
import {FormColetivo} from './components/agendamentos/formColetivo'
import {RelatorioCompleto} from './components/relatorios/relatorioCompleto'
import {RelatorioWhats} from './components/relatorios/relatorioWhats'

function App() {

  return (
    

    <Router>

     <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/menuheader" element={<MenuHeader />} />
        <Route path="/menufooter" element={<MenuFooter />} />
        <Route path="/home" element={<Home />} />
        <Route path="/formIndividual" element={<FormIndividual />} />
        < Route path="/formColetivo" element={< FormColetivo />} />
        < Route path="/relatorioCompleto" element={< RelatorioCompleto />} />
        < Route path="/relatorioWhats" element={< RelatorioWhats />} />
      </Routes>
    </Router>

  )
}

export default App;
