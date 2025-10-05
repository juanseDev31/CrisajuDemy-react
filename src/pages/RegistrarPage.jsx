import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../css/formulario.css"; // Estilos personalizados del formulario de registro

function RegistrarPage() {
  const navigate = useNavigate(); // Hook para navegar entre rutas

  // Estado local que almacena los valores del formulario
  const [formData, setFormData] = useState({
    nombre: "",
    correo: "",
    contrasena: "",
    confirmarContrasena: "",
  });

  // Maneja los cambios en los campos de entrada
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value }); // Actualiza el estado con los valores nuevos
  };

  // Maneja el envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault(); // Evita el comportamiento por defecto (recargar la página)

    // Validación simple de contraseñas
    if (formData.contrasena !== formData.confirmarContrasena) {
      alert("Las contraseñas no coinciden ❌");
      return;
    }

    // Simula registro correcto (por ahora sin backend)
    console.log("Datos registrados:", formData);
    alert("Registro exitoso ✅");

    // Redirige al usuario a la página principal o de inicio de sesión
    navigate("/InicioPage");
  };

  return (
    // Sección principal del formulario de registro
    <section
      id="registro"
      className="registro-section"
      style={{ padding: "40px", textAlign: "center" }}
    >
      {/* Formulario con estilos embebidos */}
      <form
        id="registroForm"
        onSubmit={handleSubmit} // Asocia el envío al manejador
        style={{
          maxWidth: "400px",
          margin: "0 auto",
          background: "#fff",
          padding: "30px",
          borderRadius: "12px",
          boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
        }}
      >
        <h2>Registro de Usuario</h2>

        {/* Campo: nombre completo */}
        <div
          className="campo"
          style={{ marginBottom: "15px", textAlign: "left" }}
        >
          <label htmlFor="nombre">Nombre completo:</label>
          <input
            type="text"
            id="nombre"
            name="nombre"
            value={formData.nombre}
            onChange={handleChange}
            required
            className="form-control"
          />
        </div>

        {/* Campo: correo electrónico */}
        <div
          className="campo"
          style={{ marginBottom: "15px", textAlign: "left" }}
        >
          <label htmlFor="correo">Correo electrónico:</label>
          <input
            type="email"
            id="correo"
            name="correo"
            value={formData.correo}
            onChange={handleChange}
            required
            className="form-control"
          />
        </div>

        {/* Campo: contraseña */}
        <div
          className="campo"
          style={{ marginBottom: "15px", textAlign: "left" }}
        >
          <label htmlFor="contrasena">Contraseña:</label>
          <input
            type="password"
            id="contrasena"
            name="contrasena"
            value={formData.contrasena}
            onChange={handleChange}
            required
            className="form-control"
          />
        </div>

        {/* Campo: confirmar contraseña */}
        <div
          className="campo"
          style={{ marginBottom: "15px", textAlign: "left" }}
        >
          <label htmlFor="confirmarContrasena">Confirmar contraseña:</label>
          <input
            type="password"
            id="confirmarContrasena"
            name="confirmarContrasena"
            value={formData.confirmarContrasena}
            onChange={handleChange}
            required
            className="form-control"
          />
        </div>

        {/* Botón principal para registrar usuario */}
        <button
          id="registrar"
          type="submit"
          className="btn btn-success w-100"
          style={{ marginTop: "10px" }}
        >
          Registrar
        </button>
      </form>
    </section>
  );
}

export default RegistrarPage;
