import React from 'react' // Importa la librería principal de React
import { Routes, Route } from 'react-router-dom' // Importa los componentes necesarios para definir las rutas
import Navbar from './components/Navbar' // Componente de navegación superior, presente en todas las páginas
import Footer from './components/Footer' // Componente de pie de página, presente en todas las páginas
import Home from './pages/Home' // Página principal de la aplicación
import InicioPage from './pages/InicioPage' // Página de inicio de sesión
import RegistrarPage from './pages/RegistrarPage' // Página de registro de nuevos usuarios
import AdminPage from './pages/AdminPage' // Panel de administración general
import ExplorarPage from './pages/ExplorarPage' // Página para explorar los cursos disponibles
import Curso from './pages/Curso' // Página con los detalles de un curso específico

function App() {
  return (
    <>
      {/* El componente Navbar se renderiza en la parte superior de todas las vistas */}
      <Navbar />

      {/* Contenedor principal donde se renderizan las diferentes páginas.
          Se aplica margen superior e inferior con las clases de Bootstrap. */}
      <div className="container mt-4 mb-5">
        {/* Sistema de enrutamiento: define qué componente mostrar según la URL actual */}
        <Routes>
          {/* Ruta raíz ("/") que carga la página principal */}
          <Route path="/" element={<Home />} />

          {/* Ruta para la página de inicio de sesión */}
          <Route path="/inicioPage" element={<InicioPage />} />

          {/* Ruta para la página de registro de usuario */}
          <Route path="/registrarPage" element={<RegistrarPage />} />

          {/* Ruta para la página de administración */}
          <Route path="/adminPage" element={<AdminPage />} />

          {/* Ruta para la página de exploración de cursos */}
          <Route path="/explorarPage" element={<ExplorarPage />} />

          {/* Ruta para la página que muestra la información de un curso */}
          <Route path="/curso" element={<Curso />} />
        </Routes>
      </div>

      {/* El componente Footer se muestra en la parte inferior de todas las páginas */}
      <Footer />
    </>
  )
}

export default App // Exporta el componente principal para que sea usado en la aplicación
