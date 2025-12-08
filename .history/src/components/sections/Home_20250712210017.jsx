

export const Home = () => { 
    return (
        <section 
            id="home" 
            className="min-h-screen flex items-center justify-center relative">
                <div className="text-center z-10 px-4">
                    <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent leading-right">
                        Hola, me llamo Beatriz
                    </h1>
                    <p className="text-gray-400 text-lg mb-8 max-w-lg w- mx-auto">
                        ¡Hola! Soy desarrolladora web Frontend, y me especializo en crear aplicaciones limpias y escalables con JavaScript, React, HTML y CSS. Mi pasión es que no solo rindan de maravilla, sino que también ofrezcan una experiencia de usuario (UX) realmente cautivadora.
                        Mi formación en Ingeniería de Diseño Industrial me aporta una visión muy particular: me encanta fusionar la estética y la funcionalidad en cada proyecto.
                        He tenido la oportunidad de trabajar en proyectos importantes para Telefónica (incluyendo desarrollos en la plataforma Salesforce), y además, cuento con buenos conocimientos en backend con Python (Django) y familiaridad con herramientas como Docker.
                    </p>
                </div>
        </section>
    )
}