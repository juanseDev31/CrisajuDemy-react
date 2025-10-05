import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // Importa los estilos principales de Bootstrap
import "@fortawesome/fontawesome-free/css/all.min.css"; // Importa los íconos de FontAwesome
import { useNavigate } from "react-router-dom"; // Hook para navegar entre rutas
import "../css/formulario.css"; // Estilos personalizados del formulario de inicio de sesión

function InicioPage() {
  const navigate = useNavigate(); // Permite redirigir a otras rutas del sitio

  return (
    // Formulario principal de inicio de sesión
    <form id="loginForm" className="p-4">
      {/* Título del formulario */}
      <h2>Iniciar sesión</h2>

      {/* Campo de correo electrónico */}
      <div className="campo">
        <label htmlFor="correo">Correo electrónico:</label>
        <input
          type="email"
          id="correo"
          name="correo"
          required // Campo obligatorio
        />
      </div>

      {/* Campo de contraseña */}
      <div className="campo">
        <label htmlFor="contrasena">Contraseña:</label>
        <input
          type="password"
          id="contrasena"
          name="contrasena"
          required // Campo obligatorio
        />
      </div>

      {/* Separador visual con la palabra “OR” */}
      <div className="text-center mb-3">
        <hr className="my-3" /> {/* Línea superior */}
        <span className="text-muted fw-bold">OR</span> {/* Texto “OR” */}
        <hr className="my-3" /> {/* Línea inferior */}
      </div>

      {/* Botones para iniciar sesión con proveedores externos */}
      <div className="d-grid gap-2">
        {/* Opción de inicio con Google */}
        <button
          className="btn btn-outline-dark d-flex align-items-center justify-content-center"
          type="button" // Previene el envío automático del formulario
        >
          <i className="fab fa-google me-2"></i> Continue with Google
        </button>

        {/* Opción de inicio con Microsoft */}
        <button
          className="btn btn-outline-dark d-flex align-items-center justify-content-center"
          type="button"
        >
          <i className="fab fa-windows me-2"></i> Continue with Microsoft Account
        </button>

        {/* Opción de inicio con Apple */}
        <button
          className="btn btn-outline-dark d-flex align-items-center justify-content-center"
          type="button"
        >
          <i className="fab fa-apple me-2"></i> Continue with Apple
        </button>
      </div>

      <br />

      {/* Botón principal de ingreso */}
      <button
        id="entrar"
        type="submit"
        className="btn btn-primary w-100"
        onClick={(e) => {
          e.preventDefault(); // Evita el refresco del formulario
          navigate("/AdminPage"); // Redirige a la página del administrador
        }}
      >
        Ingresar
      </button>
    </form>
  );
}

export default InicioPage; // Exporta el componente para su uso en otras partes de la app
