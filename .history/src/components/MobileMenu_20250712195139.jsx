export const MobileMenu = ({menuOpen, setMenuOpen}) => {


    return (
        <div className={`fixed top-0 left-0 w-full bg-[rgba(10,10,10,0.8)] z-40 flex flex-col items-center justify-center
                         transition-all duration-300 ease-in-out
                         ${menuOpen 
                            ? "h-screen opacity-100 pointer-events-auto" 
                            : "h-0 opacity-0 pointer-events-none"
                         }
                        `}
        >
            <button 
                onClick={() => setMenuOpen(false)} 
                className="absolute top-6 right-6 text-white text-3xl focus:outline-none cursor-pointer"
                aria-label="Close Menu"
                >
                &times;
            </button>

                <a href="#home" className="font-mono text-xl font-bold text-white">
                    {" "}
                    Beatriz <span className="text-blue-500">Mujica</span>{" "}
                </a>
                <div className="w-7 h-5 relative cursor-pointer z-40 md:hidden" onClick={()=> setMenuOpen((prev => !prev))}>
                    &#9776;
                </div>
                <div className="hidden md:flex items-center space-x-8">
                    <a 
                        href="#home" 
                        className="text-gray-300 hove:text-white transition-colors"
                    >
                        {" "}
                        Home{" "}
                    </a>
                    <a 
                        href="#about" 
                        className="text-gray-300 hove:text-white transition-colors"
                    >
                        {" "}
                        About{" "} 
                    </a>
                    <a 
                        href="#projects" 
                        className="text-gray-300 hove:text-white transition-colors"
                    >
                        {" "}
                        Projects{" "} 
                    </a>
                    <a 
                        href="contact" 
                        className="text-gray-300 hove:text-white transition-colors"
                    >
                        {" "}
                        Contact{" "} 
                    </a>
        </div>
    );
}