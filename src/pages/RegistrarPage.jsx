import React, { useState } from "react"; // Importa React y el hook useState para manejar estado local
import { useNavigate } from "react-router-dom"; // Hook para navegación entre rutas
import '../css/formulario.css'; // Estilos personalizados para el formulario

function RegistrarPage() {
  const navigate = useNavigate(); // Permite redirigir a otras páginas del sitio

  // Estado del formulario con los campos del usuario
  const [formData, setFormData] = useState({
    nombre: "",
    correo: "",
    contrasena: "",
    confirmarContrasena: "",
  });

  // Maneja los cambios de cada campo del formulario
  const handleChange = (e) => {
    const { name, value } = e.target; // Extrae el nombre y valor del campo modificado
    setFormData({ ...formData, [name]: value }); // Actualiza el estado manteniendo los demás valores
  };

  // Maneja el envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault(); // Evita que la página se recargue al enviar el formulario

    // Verifica que las contraseñas coincidan antes de continuar
    if (formData.contrasena !== formData.confirmarContrasena) {
      alert("Las contraseñas no coinciden ❌");
      return;
    }

    // Muestra los datos en consola (simulación de registro)
    console.log("Datos registrados:", formData);
    alert("Registro exitoso ✅");

    // Redirige al usuario a la página de inicio
    navigate("/inicio");
  };

  return (
    // Sección principal que contiene el formulario
    <section
      id="registro"
      className="registro-section"
      style={{ padding: "40px", textAlign: "center" }}
    >
      {/* Formulario de registro */}
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

        {/* Campo de nombre completo */}
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

        {/* Campo de correo electrónico */}
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

        {/* Campo de contraseña */}
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

        {/* Campo de confirmación de contraseña */}
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

        {/* Botón para registrar usuario */}
        <button
          id="registrar"
          type="submit"
          className="btn btn-success w-100"
          style={{ marginTop: "10px" }}
          Ingresar
          onClick={() => navigate("/ExplorarPage")} // Redirige a la página de exploración
        >
          Registrar
        </button>
      </form>
    </section>
  );
}

export default RegistrarPage; // Exporta el componente para su uso en la aplicación
