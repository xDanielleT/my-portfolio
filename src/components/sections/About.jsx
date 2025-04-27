import { RevealOnScroll } from "../RevealOnScroll";


export const About = () => {
    const frontendSkills = [
        "HTML",
        "CSS",
        "JavaScript",
        "React",
        "TailwindCSS",
        "Figma"
    ];

    const backendSkills = [
        "Node.js",
        "Python",
        "MongoDB",
        "Express",
    ];

    return (
        <section id="about" className="min-h-screen flex items-center justify-center py-20">
<RevealOnScroll>
            <div className="max-w-3xl mx-auto px-4">
                <h2 className="text-center text-3xl font-bold mb-8 bg-gradient-to-r from-cyan-300 to-purple-600 bg-clip-text text-transparent leading-right">
                    About Me
                </h2>

                <div className="rounded-xl p-8 border-white/10 border hover:translate-y-1 transition-all ">
                    <p className="text-gray-300 mb-6">
                    I'm a self-motivated and detail-oriented web developer with a passion for creating engaging and responsive digital experiences. I thrive in collaborative environments, enjoy solving problems, and am always eager to learn new technologies to grow my skills. My dedication to continuous improvement drives me to craft clean, user-friendly designs that make an impact. Explore my projects below to see my work in action!
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                            <h3 className="text-xl font-bold mb-4"> Frontend</h3>
                            <div className="flex flex-wrap gap-2">
                                {frontendSkills.map((tech, key) => (
                                    <span
                                        key={key}
                                        className="bg-blue-500/10 text-purple-500 py-1 px-3 rounded-full text-sm hover:bg-purple-500/20 
                                    hover:shadow-[0_0_15px_rgba(147,51,234,0.4)] transition
                    "
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                            <h3 className="text-xl font-bold mb-4"> Backend</h3>
                            <div className="flex flex-wrap gap-2">
                                {backendSkills.map((tech, key) => (
                                    <span
                                        key={key}
                                        className="bg-purple-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-purple-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)]transition
                    "
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                    <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
                        <h3 className="text-xl font-bold mb-4"> 📘 Education </h3>
                        <ul className="list-disc list-inside text-gray-300 space-y-2">
                            <li>
                                <strong> Front-End Web Developer Nanodegree, </strong> - Udacity
                                (2024)
                            </li>
                            <li>
                            Intensive training in HTML5, CSS3, and JavaScript with focus on responsive design, web APIs, and React. Developed practical skills in front-end optimization, Git version control, and testing through hands-on projects.
                            </li>
                        
                            <li>
                                <strong> Full Stack Web Development Certificate, </strong> - Johnson-County Community College
                                (2024)
                            </li>
                            <li>
                            Training in full-stack development spanning front-end frameworks, back-end programming, database management, API design, and deployment practices.
                            </li>
                        </ul>
                    </div>
                    <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
                        <h3 className="text-xl font-bold mb-4"> 💻 Work Experience </h3>
                        <div className="space-y-4 text-gray-300">
                            <div>
                                <h4 className="font-semibold">
                                Volunteer at WeCodeKC (2023 - Present)
                                </h4>
                                <p>
                                Provided technical guidance for students through code troubleshooting, debugging, and project impediment removal. Contributed to curriculum review and classroom preparation. Developed web solutions for local clients using Figma, React, Tailwind, TypeScript, JavaScript, and GitHub, while managing projects with Jira and optimizing performance with Dev Tools.
                                </p>
                            </div>

                            
                        </div>
                    </div>
                </div>
            </div>
            </RevealOnScroll>
        </section>
    );
};