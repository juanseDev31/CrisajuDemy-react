import React from "react";

function AdminPage() {
  return (
    // Contenedor principal con Bootstrap; d-flex para layout horizontal
    <div className="container d-flex" style={{ padding: "20px" }}>
      {/* Panel lateral izquierdo (sidebar) */}
      <div
        className="sidebar"
        style={{
          width: "250px",
          backgroundColor: "#f8f9fa",
          padding: "20px",
          borderRadius: "12px",
          boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
          height: "fit-content", // Ajusta la altura al contenido
        }}
      >
        <h3>General</h3>

        {/* Lista de secciones de administración (no interactiva aún) */}
        <ul style={{ listStyle: "none", padding: 0 }}>
          <li>Front page settings</li>
          <li>My profile settings</li>
          <li>Site Administration</li>
          <li>Notifications</li>
          <li>Registration</li>
          <li>Advanced features</li>
          <li>Users</li>
          <li>Courses</li>
          <li>Grades</li>
          <li>Location</li>
          <li>Language</li>
          <li>Plugins</li>
          <li>Security</li>
          <li>Appearance</li>
          <li>Front page</li>
          <li>Server</li>
          <li>Networking</li>
          <li>Reports</li>
          <li>Development</li>
        </ul>

        {/* Buscador simple en la sidebar */}
        <div className="search-box mt-3">
          <input
            type="text"
            placeholder="Buscar..."
            className="form-control"
            // TODO: onChange para filtrar opciones en la lista
          />
        </div>
      </div>

      {/* Panel central: administración de cursos */}
      <div
        className="course-panel mx-4"
        style={{
          flex: 1, // Ocupa el espacio disponible
          backgroundColor: "#fff",
          padding: "20px",
          borderRadius: "12px",
          boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
        }}
      >
        <h3>📚 Course Administration</h3>

        {/* Lista de acciones de curso (placeholder, no enlazadas aún) */}
        <ul style={{ listStyle: "none", padding: 0 }}>
          <li>🔧 Turn editing on</li>
          <li>✏️ Edit settings</li>
          <li>✅ Completion tracking</li>
          <li>👥 Users</li>
          <li>🔍 Filters</li>
          <li>📊 Grades</li>
          <li>➕ Create</li>
          <li>💾 Backup</li>
          <li>🔄 Update</li>
          <li>📥 Import</li>
          <li>🌐 Publish</li>
          <li>❌ Delete</li>
          <li>📝 Question bank</li>
        </ul>

        {/* Buscador dentro del panel central */}
        <div className="search-box mt-3">
          <input
            type="text"
            placeholder="Buscar en cursos..."
            className="form-control"
            // TODO: onChange + estado para búsqueda de cursos
          />
        </div>
      </div>

      {/* Área de contenido principal (placeholder) */}
      <div
        className="content"
        style={{
          flex: 1,
          backgroundColor: "#f4f6f8",
          padding: "20px",
          borderRadius: "12px",
          boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
        }}
      >
        <p>Selecciona una opción de la izquierda para administrar tu curso.</p>
        {/* TODO: Aquí puedes renderizar contenido según la opción seleccionada */}
      </div>
    </div>
  );
}

export default AdminPage;
