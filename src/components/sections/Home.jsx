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
                I love bringing ideas to life through modern, responsive websites that are both visually appealing and user-friendly. Every project is a new opportunity to learn, grow, and create something impactful. I'm committed to continuously improving my skills and building experiences that make a difference. Check out my work below!
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