import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';





import { Login } from './components/login/login'
import { MenuHeader } from './components/menu/menuHeader'
import { MenuFooter } from './components/menu/menuFooter'
import { Home } from './components/home/home'


function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/menuheader" element={<MenuHeader />} />
        <Route path="/menufooter" element={<MenuFooter />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </Router>



  )
}

export default App;
