import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import '../css/formulario.css'


function RegistrarPage() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    nombre: "",
    correo: "",
    contrasena: "",
    confirmarContrasena: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.contrasena !== formData.confirmarContrasena) {
      alert("Las contraseñas no coinciden ❌");
      return;
    }

    console.log("Datos registrados:", formData);
    alert("Registro exitoso ✅");

    // 🔹 Redirigir a la página de inicio
    navigate("/inicio");
  };

  return (
    <section id="registro" className="registro-section" style={{ padding: "40px", textAlign: "center" }}>
      <form
        id="registroForm"
        onSubmit={handleSubmit}
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

        <div className="campo" style={{ marginBottom: "15px", textAlign: "left" }}>
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

        <div className="campo" style={{ marginBottom: "15px", textAlign: "left" }}>
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

        <div className="campo" style={{ marginBottom: "15px", textAlign: "left" }}>
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

        <div className="campo" style={{ marginBottom: "15px", textAlign: "left" }}>
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

        <button
          id="registrar"
          type="submit"
          className="btn btn-success w-100"
          style={{ marginTop: "10px" }}
          Ingresar
          onClick={() => navigate("/ExplorarPage")}
        >
          Registrar
        </button>
      </form>
    </section>
  );
}

export default RegistrarPage;
