export const About = () => {
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
                <div className="glass rounded-xl p-8 border-white/10 border hover:-translate">
                    <p>
                        Desarrolladora apasionada con experiencia en crear aplicaciones web escalables y en desarrollar soluciones innovadoras
                    </p>
                </div>
            </div>
        </section>
    );
    
}