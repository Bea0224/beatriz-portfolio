export const About = () => {

    const frontendSkills = [
        "HTML5",
        "CSS3",
        "JavaScript",
        "React",
        // "Next.js",
        "Tailwind CSS",
        "TypeScript",
    ];

    const backendSkills = [
        "Node.js",
        "Python",
        "Java",
        "Django",
        // "PHP",
        // "SQL",
        // "Express.js",
        // "MongoDB",
        // "PostgreSQL", 
    ];

    const salesforceSkills = [
        "Aura",
        "LWC",
        "Apex",
        "Visualforce",
        "SOQL / SOSL",
        "Flows"
    ]


    return(
        <section 
            id="about" 
            className="min-h-screen flex items-center justify-center py-20"
        >
            <div className="max-w-3xl mx-auto px-4">
                <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
                    {" "}
                    About Me
                </h2>
                <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-l transition-all">
                    <p className="text-gray-300 mb-6">
                        Desarrolladora apasionada con experiencia en crear aplicaciones web escalables y en desarrollar soluciones innovadoras
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="rounded-xl p-6 hover:-translate-y-l transition-all">
                            <h3 className="text-xl font-bold mb-4">Frontend</h3>
                            <div className="flex flex-wrap gap-2">
                                {frontendSkills.map((tech, key) => (
                                    <span 
                                        key={key}
                                        className="bg-blue-500/10 text-blue-500 py-1 px-2 rounded-full text-sm hover:bg-blue-500/20
                                        hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                        <div className="rounded-xl p-6 hover:-translate-y-l transition-all">
                            <h3 className="text-xl font-bold mb-4">Backend</h3>
                            <div className="flex flex-wrap gap-2">
                                {backendSkills.map((tech, key) => (
                                    <span 
                                        key={key}
                                        className="bg-blue-500/10 text-blue-500 py-1 px-2 rounded-full text-sm hover:bg-blue-500/20
                                        hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                        <div className="rounded-xl p-6 hover:-translate-y-l transition-all">
                            <h3 className="text-xl font-bold mb-4">Salesforce CRM</h3>
                            <div className="flex flex-wrap gap-2">
                                {salesforceSkills.map((tech, key) => (
                                    <span 
                                        key={key}
                                        className="bg-blue-500/10 text-blue-500 py-1 px-2 rounded-full text-sm hover:bg-blue-500/20
                                        hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                    <div className="flex flex-col items-start justify-center p-6 rounded-xl border-white/10 border hover:-translate-y-l transition-all gap-4">
                        <h3 className="text-xl font-bold mb-3"> Educación </h3>
                        <div>
                            <h4 className="mb-2 font-bold">Formación Académica</h4>
                            <ul className="list-disc list-inside text-gray-300 space-y-2">
                                <li>
                                    <strong>Grado en Ingeniería en Diseño Indutrial y Desarrollo del Producto</strong> - Universidad Las Palmas de Gran Canaria, Junio 2019.
                                </li>
                            </ul>
                        </div>

                        <div>
                            <h4 className="mb-2 font-bold">Formación Complementaria</h4>
                            <ul className="list-disc list-inside text-gray-300 space-y-2">
                                <li className="mb-2">
                                    <strong>SCRUM MASTER CERTIFIED</strong> - EIGP. 150PDAs. Junio 2025.
                                </li>
                                <li className="mb-2">
                                    <strong> Curso de Python y Django </strong> - Nascor Formación. 40 horas Diciembre 2023.
                                </li>
                                <li className="mb-2">
                                    <strong> Curso Gestión del Marketing y comunicación (COMM0112) </strong> - Grupo Aspasia. 800 horas. Agosto 2020.
                                </li>
                                <li className="mb-2">
                                    <strong>Curso Wordpress, HTML y CSS, UX Marketing online, SEO Y SEM</strong> - Escuela de Organización Industrial. 147,50 horas, Julio 2020.
                                </li>
                                <li className="mb-2">
                                    <strong>Curso Creación, programación y diseño de páginas web</strong> - Instituto Focan. 60 horas, Febrero 2020.
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-l transition-all">
                        <h3 className="text-xl font-bold mb-4"> Experiencia Laboral </h3>
                        <div className="space-y-4 text-gray-300">
                            <div>
                                <h4 className="font-semibold">
                                    {" "}
                                    Software Developer en Italtel S.A. (11 de Dic. 2023 - Actualmente).
                                </h4>
                                <p>
                                    Proyecto Heracles para TDE: Desarrollo, mantenimiento y mejora de funcionalidades de la aplicación.
                                </p>
                            </div>
                            <div>
                                <h4 className="font-semibold">
                                    {" "}
                                    Salesforce Developer en Italtel S.A. (12 de May. 2023 - 11 de Dic. 2023).
                                </h4>
                                <p>
                                    Desarrollo, mantenimiento y mejora de las funcionalidades del portal clientes CRM 360 TGS.
                                </p>
                            </div>
                            <div>
                                <h4 className="font-semibold">
                                    {" "}
                                    Salesforce Developer en Between Technology. (14 de Nov. 2022 - 12 de May. 2023).
                                </h4>
                                <p>
                                    Desarrollo, mantenimiento y mejora de las funcionalidades del portal clientes CRM 360 TGS.
                                </p>
                            </div>
                            <div>
                                <h4>Salesforce Developer en Beca Telefónica Talentum. (11 de Nov. 2021 - 11 de Nov. 2022).</h4>
                                <p>
                                    Desarrollo, mantenimiento y mejora de las funcionalidades del portal clientes CRM 360 TGS.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
    
}