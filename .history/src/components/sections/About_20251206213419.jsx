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
                    <div className="rounded-xl">

                    </div>
                </div>
            </div>
        </section>
    );
    
}