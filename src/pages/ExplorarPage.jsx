import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
// ⚠️ Evita importar el bundle JS de Bootstrap aquí si ya lo cargas globalmente
// import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "../css/explorar.css";
import { useNavigate } from "react-router-dom";

function ExplorarPage() {
  const navigate = useNavigate();

  // (Opcional) acción para volver al home; ahora no se usa en la UI
  const handleSalir = () => {
    navigate("/");
  };

  // Navega a la vista del curso. OJO: usa el MISMO casing que en tu <Route path="...">
  const handleAgregar = () => {
    navigate("/Curso"); // ← unificado con el botón de abajo
  };

  return (
    <div>
      {/* CURSOS */}
      <div className="container my-4">
        <div className="row row-cols-1 row-cols-md-2 g-4">
          {/* Tarjetas generadas a partir de un array estático */}
          {[
            {
              titulo: "Introducción a Java",
              texto:
                "Descubre los fundamentos de la programación orientada a objetos con Java. Aprende con ejemplos prácticos, proyectos guiados y ejercicios paso a paso.",
            },
            {
              titulo: "Fundamentos de Python",
              texto:
                "Aprende desde lo básico hasta lo esencial de Python, el lenguaje más popular y versátil. Desarrolla tus primeras aplicaciones, análisis de datos y automatizaciones.",
            },
            {
              titulo: "C#",
              texto:
                "Domina los fundamentos de C#, uno de los lenguajes más potentes. Aprende a crear aplicaciones, juegos con Unity y soluciones empresariales.",
            },
            {
              titulo: "C++",
              texto:
                "Aprende los fundamentos de C++, el lenguaje más rápido y eficiente. Desarrolla software, videojuegos y sistemas orientados a objetos.",
            },
            {
              titulo: "Go (Golang)",
              texto:
                "Descubre la potencia de Go, creado por Google para construir aplicaciones escalables y de alto rendimiento.",
            },
            {
              titulo: "Swift",
              texto:
                "Domina los fundamentos de Swift, el lenguaje oficial de Apple para desarrollar apps en iOS, macOS, watchOS y tvOS.",
            },
            {
              titulo: "PHP",
              texto:
                "Aprende PHP, uno de los lenguajes más usados para desarrollo backend. Crea sitios web interactivos y conectados a bases de datos.",
            },
            {
              titulo: "SQL",
              texto:
                "Aprende a manejar bases de datos con SQL. Crea tablas, realiza consultas y optimiza la información de tus proyectos.",
            },
            {
              titulo: "Ruby",
              texto:
                "Descubre la elegancia de Ruby y desarrolla aplicaciones web modernas con Ruby on Rails.",
            },
            {
              titulo: "Kubernetes",
              texto:
                "Aprende a administrar aplicaciones en contenedores con Kubernetes, la plataforma estándar de la industria.",
            },
          ].map((curso, index) => (
            <div className="col" key={index}>
              <div className="card custom-card shadow-sm">
                {/* Header con botones de acción (placeholders) */}
                <div className="card-header d-flex justify-content-between align-items-center">
                  <button
                    className="btn-icon add-btn"
                    title="Agregar a mis cursos"
                    onClick={handleAgregar} // ← usa la función unificada
                    type="button"
                  >
                    <i className="fas fa-plus"></i>
                  </button>

                  <span className="header-text">Agregar a mis cursos</span>

                  <button
                    className="btn-icon close-btn"
                    title="Cerrar"
                    type="button"
                    // TODO: definir acción (remover tarjeta/ocultar)
                  >
                    <i className="fas fa-times"></i>
                  </button>
                </div>

                {/* Cuerpo de la tarjeta */}
                <div className="card-body">
                  <h5 className="card-title">{curso.titulo}</h5>
                  <p className="card-text">{curso.texto}</p>
                </div>

                {/* Footer con precio y “compartir” */}
                <div className="card-footer d-flex justify-content-between">
                  <span>
                    <i className="fas fa-dollar-sign"></i> COP $50.000
                  </span>

                  {/* Evita href="#" para no hacer scroll al top; usa button */}
                  <button
                    className="btn btn-link p-0"
                    type="button"
                    onClick={() => {
                      // TODO: implementar “compartir” (navigator.share o copiar link)
                      // navigator.clipboard.writeText(window.location.href)
                    }}
                  >
                    <i className="fas fa-share-alt"></i> Compartir link del curso
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}

export default ExplorarPage;
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "../css/explorar.css";
import { useNavigate } from "react-router-dom";

function ExplorarPage() {
    const navigate = useNavigate();

    const handleSalir = () => {
        navigate("/");
    };

    const handleAgregar = () => {
        navigate("/curso");
    };

    return (
        <div>
            {/* CURSOS */}
            <div className="container my-4">
                <div className="row row-cols-1 row-cols-md-2 g-4">

                    {/* Tarjeta ejemplo */}
                    {[
                        {
                            titulo: "Introducción a Java",
                            texto:
                                "Descubre los fundamentos de la programación orientada a objetos con Java. Aprende con ejemplos prácticos, proyectos guiados y ejercicios paso a paso.",
                        },
                        {
                            titulo: "Fundamentos de Python",
                            texto:
                                "Aprende desde lo básico hasta lo esencial de Python, el lenguaje más popular y versátil. Desarrolla tus primeras aplicaciones, análisis de datos y automatizaciones.",
                        },
                        {
                            titulo: "C#",
                            texto:
                                "Domina los fundamentos de C#, uno de los lenguajes más potentes. Aprende a crear aplicaciones, juegos con Unity y soluciones empresariales.",
                        },
                        {
                            titulo: "C++",
                            texto:
                                "Aprende los fundamentos de C++, el lenguaje más rápido y eficiente. Desarrolla software, videojuegos y sistemas orientados a objetos.",
                        },
                        {
                            titulo: "Go (Golang)",
                            texto:
                                "Descubre la potencia de Go, creado por Google para construir aplicaciones escalables y de alto rendimiento.",
                        },
                        {
                            titulo: "Swift",
                            texto:
                                "Domina los fundamentos de Swift, el lenguaje oficial de Apple para desarrollar apps en iOS, macOS, watchOS y tvOS.",
                        },
                        {
                            titulo: "PHP",
                            texto:
                                "Aprende PHP, uno de los lenguajes más usados para desarrollo backend. Crea sitios web interactivos y conectados a bases de datos.",
                        },
                        {
                            titulo: "SQL",
                            texto:
                                "Aprende a manejar bases de datos con SQL. Crea tablas, realiza consultas y optimiza la información de tus proyectos.",
                        },
                        {
                            titulo: "Ruby",
                            texto:
                                "Descubre la elegancia de Ruby y desarrolla aplicaciones web modernas con Ruby on Rails.",
                        },
                        {
                            titulo: "Kubernetes",
                            texto:
                                "Aprende a administrar aplicaciones en contenedores con Kubernetes, la plataforma estándar de la industria.",
                        },
                    ].map((curso, index) => (
                        <div className="col" key={index}>
                            <div className="card custom-card shadow-sm">
                                <div className="card-header d-flex justify-content-between align-items-center">
                                    <button className="btn-icon add-btn" title="Agregar a mis cursos" onClick={() => navigate("/Curso")}>
                                        <i className="fas fa-plus"></i>
                                    </button>
                                    <span className="header-text">Agregar a mis cursos</span>
                                    <button className="btn-icon close-btn" title="Cerrar">
                                        <i className="fas fa-times"></i>
                                    </button>
                                </div>

                                <div className="card-body">
                                    <h5 className="card-title">{curso.titulo}</h5>
                                    <p className="card-text">{curso.texto}</p>
                                </div>

                                <div className="card-footer d-flex justify-content-between">
                                    <span>
                                        <i className="fas fa-dollar-sign"></i> COP $50.000
                                    </span>
                                    <a href="#">
                                        <i className="fas fa-share-alt"></i> Compartir link del curso
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

        </div>
    );
}

export default ExplorarPage;
