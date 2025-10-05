import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import InicioPage from './pages/InicioPage'
import RegistrarPage from './pages/RegistrarPage'
import AdminPage from './pages/AdminPage'
import ExplorarPage from './pages/ExplorarPage'
import Curso from './pages/Curso'

function App() {
  return (
    <>
      <Navbar />
      <div className="container mt-4 mb-5">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/inicioPage" element={<InicioPage />} />
          <Route path="/registrarPage" element={<RegistrarPage />} />
          <Route path="/adminPage" element={<AdminPage />} />
          <Route path="/explorarPage" element={<ExplorarPage />} />
          <Route path="/curso" element={<Curso />} />

        </Routes>
      </div>
      <Footer />
    </>
  )
}

export default App
