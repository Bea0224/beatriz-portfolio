import { RevealOnScroll } from "./RevealOnScroll"

export const Projects = () => {    
    return(
        <section 
            id="projects" 
            className="min-h-screen flex items-center justify-center py-20"
        >
            <RevealOnScroll>
            <

            <div className="max-w-5xl mx-auto px-4">
                <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
                    {" "}
                    Featured Projects
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-l hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
                        <h3 className="text-xl font-bold mb-2"> Heracles - Plataforma Interna de Automatización y Gestión de Red</h3>
                        <p className="text-gray-400 mb-4">
                            Heracles es una plataforma interna diseñada para automatizar procesos operativos, 
                            gestionar dispositivos de red y optimizar flujos técnicos dentro del ecosistema corporativo. 
                            Su objetivo principal es centralizar información, facilitar diagnósticos, estandarizar configuraciones y 
                            mejorar la eficiencia en tareas de ingeniería.

                            {/* <ul className="list-disc list-inside text-gray-300 space-y-2">
                                En este proyecto trabajé con un ecosistema técnico moderno:
                                <li>
                                     <strong>Frontend:</strong> React, HTML, CSS, JavaScript
                                </li>
                                <li>
                                    <strong>Backend:</strong> Django (Python)
                                </li>
                                <li>
                                    <strong>Base de datos:</strong> PostgreSQL
                                </li>
                                <li>
                                    <strong>Integración y despliegue:</strong> GitLab CI/CD y Docker
                                </li>
                                <li>
                                    <strong>Otros elementos del entorno:</strong> Integraciones internas propias de la compañía y herramientas de automatización.
                                </li>

                            </ul> */}
                        </p>
                        <div className="flex flex-wrap gap-2 mb-4">
                            {["React", "CSS", "JavaScript", "Django", "PostgreSQL", "GitLab CI/CD", "Docker"].map((tech, key)=>(
                                <span 
                                    key={key}
                                    className="bg-blue-500/10 text-blue-500 py-1 px-2 rounded-full text-sm hover:bg-blue-500/20
                                    hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition">
                                    {tech}
                                </span>
                            ))}
                        </div>
                        <div className="flex justify-between items-center">
                            <a href="#" className="text-blue-400 hover:text-blue-300 transition-colors my-4">
                                View Project {" "}
                            </a>
                        </div>
                    </div>
                    <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-l hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
                        <h3 className="text-xl font-bold mb-2"> Portal Clientes CRM 360 TGS - Salesforce CRM</h3>
                        <p className="text-gray-400 mb-4">
                            El Portal Clientes CRM 360 (TGS) es una plataforma interna orientada a unificar y simplificar la gestión integral de clientes. 
                            Centraliza en un único entorno la información clave del usuario, permitiendo gestionar servicios, incidencias, solicitudes y tickets de forma más rápida y eficiente.
                            Su objetivo es optimizar los procesos operativos, mejorar la visibilidad sobre cada cliente y facilitar el trabajo de los equipos gracias a una visión 360° totalmente integrada.
                        </p>
                        <div className="flex flex-wrap gap-2 mb-4">
                            {["Aura", "LWC", "Apex", "Visualforce", "SOQL / SOSL", "Flows, CSS", "JavaScript"].map((tech, key)=>(
                                <span 
                                    key={key}
                                    className="bg-blue-500/10 text-blue-500 py-1 px-2 rounded-full text-sm hover:bg-blue-500/20
                                    hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition">
                                    {tech}
                                </span>
                            ))}
                        </div>
                        <div className="flex justify-between items-center">
                            <a href="#" className="text-blue-400 hover:text-blue-300 transition-colors my-4">
                                View Project {" "}
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}