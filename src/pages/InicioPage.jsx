import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { useNavigate } from "react-router-dom";
import '../css/formulario.css'

function InicioPage() {
  const navigate = useNavigate();
  return (
    <form id="loginForm" className="p-4">
      <h2>Iniciar sesión</h2>

      <div className="campo">
        <label htmlFor="correo">Correo electrónico:</label>
        <input type="email" id="correo" name="correo" required />
      </div>

      <div className="campo">
        <label htmlFor="contrasena">Contraseña:</label>
        <input type="password" id="contrasena" name="contrasena" required />
      </div>

      <div className="text-center mb-3">
        <hr className="my-3" />
        <span className="text-muted fw-bold">OR</span>
        <hr className="my-3" />
      </div>

      <div className="d-grid gap-2">
        <button className="btn btn-outline-dark d-flex align-items-center justify-content-center">
          <i className="fab fa-google me-2"></i> Continue with Google
        </button>

        <button className="btn btn-outline-dark d-flex align-items-center justify-content-center">
          <i className="fab fa-windows me-2"></i> Continue with Microsoft Account
        </button>

        <button className="btn btn-outline-dark d-flex align-items-center justify-content-center">
          <i className="fab fa-apple me-2"></i> Continue with Apple
        </button>
      </div>

      <br />
      <button id="entrar" type="submit" className="btn btn-primary w-100" onClick={() => navigate("/AdminPage")}>
        Ingresar
      </button>
    </form>
  )
}

export default InicioPage
