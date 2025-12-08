export const Projects = () => {    
    return(
        <section 
            id="projects" 
            className="min-h-screen flex items-center justify-center py-20"
        >
            <div className="max-w-5xl mx-auto px-4">
                <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
                    {" "}
                    Featured Projects
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="rounded-xl p-6 hover:-translate-y-l transition-all">
                        <h3> Heracles - Plataforma Interna de Automatización y Gestión de Red</h3>
                        <p>
                            Heracles es una plataforma interna diseñada para automatizar procesos operativos, 
                            gestionar dispositivos de red y optimizar flujos técnicos dentro del ecosistema corporativo. 
                            Su objetivo principal es centralizar información, facilitar diagnósticos, estandarizar configuraciones y 
                            mejorar la eficiencia en tareas de ingeniería.

                            <ul className="list-disc list-inside text-gray-300 space-y-2">
                                En este proyecto trabajé con un ecosistema técnico moderno:
                                <li>
                                     <strong>Frontend:</strong>React, HTML, CSS, JavaScript
                                </li>
                                <li>
                                    <strong>Backend:</strong>Django (Python)
                                </li>
                                <li>
                                    <strong>Base de datos:</strong>PostgreSQL
                                </li>
                                <li>
                                    <strong>Integración y despliegue:</strong>GitLab CI/CD y Docker
                                </li>
                                <li>
                                    Otros elementos del entorno: Integraciones internas propias de la compañía y herramientas de automatización.
                                </li>

                            </ul>
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}