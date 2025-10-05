import React from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/curso.css";

function Curso() {
    const navigate = useNavigate();

    const handleSalir = () => {
        navigate("/");
    };

    return (
        <>

            {/* CONTENIDO PRINCIPAL */}
            <main className="curso-container">
                {/* ENCABEZADO DEL CURSO */}
                <section className="curso-header">
                    <div className="curso-info">
                        <h1>Kubernetes</h1>
                        <br />
                        <p>
                            <strong>Administrador certificado de Kubernetes (CKA)</strong>
                        </p>
                        <p>
                            <strong>Cupos disponibles:</strong> 5
                        </p>
                        <p>
                            <strong>Instructor:</strong> Ing. Alejandro Torres - MBA Programming
                            Engineering - UBA
                        </p>
                    </div>

                    <div className="curso-video">
                        <video controls>
                            <source src="/videos/intro.mp4" type="video/mp4" />
                            Tu navegador no soporta video.
                        </video>
                    </div>
                </section>

                {/* DESCRIPCIÓN GENERAL */}
                <section className="curso-descripcion">
                    <h2>Descripción general</h2>
                    <p>
                        Este curso está diseñado para cualquier persona interesada en dominar
                        Kubernetes, la plataforma líder en orquestación de contenedores. A lo
                        largo del programa, los estudiantes pasarán de los fundamentos básicos
                        hasta escenarios avanzados de despliegue y administración en entornos
                        empresariales.
                    </p>

                    <p>
                        El curso combina teoría clara y concisa con ejercicios prácticos y
                        laboratorios reales, permitiendo a los participantes adquirir
                        competencias sólidas en la gestión de contenedores, automatización de
                        despliegues, monitoreo y escalabilidad de aplicaciones.
                    </p>

                    <h3>Lo que aprenderás</h3>
                    <ul>
                        <li>
                            Comprender la arquitectura y los componentes principales de Kubernetes.
                        </li>
                        <li>Instalar y configurar clústeres en diferentes entornos.</li>
                        <li>
                            Desplegar aplicaciones en contenedores de manera automatizada y segura.
                        </li>
                        <li>
                            Gestionar volúmenes, almacenamiento persistente y configuraciones
                            secretas.
                        </li>
                    </ul>

                    <h3>Intensidad horaria</h3>
                    <p>
                        <strong>Duración total:</strong> 60 horas
                    </p>
                    <p>
                        <strong>Modalidad:</strong> Virtual con sesiones en vivo + laboratorios
                        prácticos
                    </p>
                    <ul>
                        <li>20 horas de teoría explicada con ejemplos.</li>
                        <li>30 horas de práctica en laboratorios guiados.</li>
                        <li>10 horas de proyecto final aplicando lo aprendido.</li>
                    </ul>

                    <h3>Profesor</h3>
                    <p>
                        Instructor: <strong>Ing. Alejandro Torres</strong>
                        <br />
                        Arquitecto de soluciones en la nube con más de 10 años de experiencia en
                        desarrollo de software y administración de infraestructuras modernas.
                    </p>

                    <h3>Proyecto final</h3>
                    <p>
                        Al terminar el curso, los participantes desplegarán una aplicación
                        completa en un clúster de Kubernetes, implementando balanceo de carga,
                        escalado automático y monitoreo.
                    </p>
                    <p>
                        <em>
                            Ideal para desarrolladores, administradores de sistemas e ingenieros
                            DevOps que deseen llevar sus habilidades al siguiente nivel.
                        </em>
                    </p>
                </section>

                {/* COMPONENTES DE FORMACIÓN */}
                <section className="componentes">
                    <h2>Componentes de formación</h2>
                    <br />
                    <div className="componentes-grid">
                        <div>
                            <h4>1. Fundamentos teóricos</h4>
                            <ul>
                                <li>Introducción a la virtualización y contenedores.</li>
                                <li>Arquitectura de Kubernetes y sus componentes.</li>
                                <li>Conceptos clave: imágenes, despliegues, servicios, etc.</li>
                            </ul>
                        </div>

                        <div>
                            <h4>2. Laboratorios prácticos</h4>
                            <ul>
                                <li>Instalación de Kubernetes en entornos locales.</li>
                                <li>Configuración de clústeres en la nube.</li>
                                <li>Creación y despliegue de pods, deployments y servicios.</li>
                            </ul>
                        </div>

                        <div>
                            <h4>3. Herramientas complementarias</h4>
                            <ul>
                                <li>Integración con Docker y contenedores OCI.</li>
                                <li>Uso de kubectl y archivos YAML.</li>
                                <li>Helm charts para la gestión de aplicaciones.</li>
                            </ul>
                        </div>

                        <div>
                            <h4>4. Buenas prácticas y seguridad</h4>
                            <ul>
                                <li>Políticas de seguridad en Kubernetes.</li>
                                <li>Gestión de roles y usuarios.</li>
                                <li>Hardening del clúster.</li>
                            </ul>
                        </div>

                        <div>
                            <h4>5. Proyecto integrador</h4>
                            <ul>
                                <li>Despliegue de una aplicación completa en Kubernetes.</li>
                                <li>Implementación de microservicios con escalado automático.</li>
                                <li>Configuración de almacenamiento persistente.</li>
                            </ul>
                        </div>

                        <div>
                            <h4>6. Evaluación y cierre</h4>
                            <ul>
                                <li>Cuestionarios teóricos por módulo.</li>
                                <li>Retos prácticos de laboratorio.</li>
                                <li>Evaluación del proyecto final.</li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* OFERTA */}
                <section className="oferta">
                    <img src="/images/oferta.png" alt="Oferta Kubernetes" />
                    <button id="btnInscribirse">¡Inscríbete ahora!</button>
                </section>
            </main>

        </>
    );
}

export default Curso;
