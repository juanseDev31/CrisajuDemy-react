import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";
import "../css/index.css";

function Home() {
  const navigate = useNavigate();
  const base = import.meta.env.BASE_URL; // ← clave para Pages

  return (
    <section id="tranding">
      <div className="container">
        <Swiper className="tranding-slider">
          <SwiperSlide className="tranding-slide">
            <div className="tranding-slide-img">
              <img src={`${base}images/uno.jpeg`} alt="Trending 1" />
            </div>
          </SwiperSlide>

          <SwiperSlide className="tranding-slide">
            <div className="tranding-slide-img">
              <img src={`${base}images/dos.jpeg`} alt="Trending 2" />
            </div>
          </SwiperSlide>

          <SwiperSlide className="tranding-slide">
            <div className="tranding-slide-img">
              <img src={`${base}images/tres.jpg`} alt="Trending 3" />
            </div>
          </SwiperSlide>

          <SwiperSlide className="tranding-slide">
            <div className="tranding-slide-img">
              <img src={`${base}images/cuatro.png`} alt="Trending 4" />
            </div>
          </SwiperSlide>

          <SwiperSlide className="tranding-slide">
            <div className="tranding-slide-img">
              <img src={`${base}images/cinco.jpeg`} alt="Trending 5" />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>

      {/* TEXTO */}
      <div className="texto-inicio mt-5">
        <p className="fs-5">Bienvenido/a a tu nuevo trabajo, emprendimiento o ascenso.</p>
        <p>
          Tu puerta de entrada al mundo de la programación. Aquí encontrarás cursos prácticos,
          guiados por expertos, diseñados para llevarte desde los fundamentos hasta los proyectos avanzados.
        </p>
        <p>
          Inicia sesión para retomar tu aprendizaje, seguir tu progreso y desbloquear nuevas
          oportunidades en desarrollo web, inteligencia artificial, ciberseguridad,
          ciencia de datos y mucho más.
        </p>
      </div>

      {/* BOTONES */}
      <div className="botones-container text-center mt-4 mb-5">
        <button
          id="iniciarSesion"
          type="button"
          className="btn btn-outline-success m-2"
          onClick={() => navigate("/InicioPage")}
        >
          Inicia sesión
        </button>
        <button
          id="usuarioNuevo"
          type="button"
          className="btn btn-outline-primary m-2"
          onClick={() => navigate("/RegistrarPage")}
        >
          Usuario nuevo
        </button>
      </div>
    </section>
  );
}

export default Home;
