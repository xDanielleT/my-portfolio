import { RevealOnScroll } from "../RevealOnScroll";


export const Home = () => {
    return (
        <section id="home" className="min-h-screen flex items-center justify-center relative">
            <RevealOnScroll>
            <div className="text-center z-10 px-4">
                <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-500 to-purple-400 bg-clip-text text-transparent leading-right">
                    Hi, I'm Danielle
                </h1>

                <p className="tex-gray-400 text-lg mb-8 max-w-lg mx-auto">
                    I'm a passionate web developer with a keen eye for detail and a love for creating engaging digital experiences. My dedication to growth and improvement drives me to expand my capabilities as a developer.
                </p>
                <div className="flex justify-center space-x-4">
                    <a
                        href="#projects"
                        className="bg-purple-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[hover:shadow-[0_0_15px_rgba(147,51,234,0.4+)]"
                    >
                        View Projects
                    </a>

                    <a
                        href="#contact"
                        className="border border-purple-500/50 text-purple-500 py-3 px-6 rounded font-medium transition-all duration-200 
            hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.2)] hover:bg-purple-500/10"
                    >
                        Contact Me
                    </a>
                </div>
            </div>
            </RevealOnScroll>
        </section>

    );
};