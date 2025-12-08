export const About = () => {

    const frontendSkills = [
        "HTML",
        "CSS",
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
                                {frontendSkills.map((tech) => (
                                    <span
                                        key={tech} 
                                    >

                                    </span>
                                )
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
    
}