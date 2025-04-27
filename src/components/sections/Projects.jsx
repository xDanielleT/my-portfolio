


import { RevealOnScroll } from "../RevealOnScroll";
import { FaGithub } from "react-icons/fa";
import { FaPenNib } from "react-icons/fa";


export const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-cyan-500 to-purple-400 bg-clip-text text-transparent text-center">
            {" "}
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-purple-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
              <h3 className="text-xl font-bold mb-2"> jQuery Font Sampler</h3>
              <p className="text-gray-400 mb-4">
                Responsive web application that allows users to sample different custom fonts with their own text, adjustable font size, and color. The application provides a user-friendly interface to visualize how text appears in various custom fonts.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["HTML", "jQuery"].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-purple-500/10 text-purple-500 py-1 px-3 rounded-full text-sm hover:bg-purple-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all
                    "
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex justify-between items-center">
                <a
                  href="https://github.com/xDanielleT/font-sampler"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors my-4"
                >
                  <FaGithub className="text-lg" />
                  View Project →
                </a>
                <a
                  href="https://xdaniellet.github.io/font-sampler/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors"
                >
                  🌐
                  View Demo →
                </a>
              </div>
            </div>
            <div
              className="
              glass p-6 rounded-xl border border-white/10 
              hover:-translate-y-1 hover:border-purple-500/30
              hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)]
              transition-all
            "
            >
              <h3 className="text-xl font-bold mb-2">Development Services Webpage</h3>
              <p className="text-gray-400 mb-4">
                Collaborated on the development of a professional services page for a local company to create a dynamic and responsive user experience.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["HTML", "React", "TailwindCSS"].map((tech, key) => (
                  <span
                    key={key}
                    className="
                      bg-purple-500/10 text-purple-500 py-1 px-3 
                      rounded-full text-sm
                      transition
                      hover:bg-purple-500/20 hover:-translate-y-0.5
                      hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]
                    "
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center">
                <a
                  href="https://www.wecodekc.org/services"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-purple-400 hover:text-purple-300 transition-colors my-4"
                >
                  🌐
                  View Demo →
                </a>
              </div>
            </div>

            <div
              className="
              glass p-6 rounded-xl border border-white/10 
              hover:-translate-y-1 hover:border-purple-500/30
              hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)]
              transition-all
            "
            >
              <h3 className="text-xl font-bold mb-2">Todo List</h3>
              <p className="text-gray-400 mb-4">
                PHP-based to-do list application that allows users to add, complete, and delete tasks using session storage without a database.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["PHP", "HTML", "CSS"].map(
                  (tech) => (
                    <span
                      key={tech}
                      className="
                      bg-purple-500/10 text-purple-500 py-1 px-3 
                      rounded-full text-sm
                      transition
                      hover:bg-purple-500/20 hover:-translate-y-0.5
                      hover:shadow-[0_0_15px_rgba(147,51,234,0.4)]
                    "
                    >
                      {tech}
                    </span>
                  )
                )}
              </div>
              <div className="flex justify-between items-center">
                <a
                  href="https://github.com/xDanielleT/PHP-Todo-List"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors my-4"
                >
                  <FaGithub className="text-lg" />
                  View Project →
                </a>
              </div>
            </div>


            <div
              className="
              glass p-6 rounded-xl border border-white/10 
              hover:-translate-y-1 hover:border-purple-500/30
              hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)]
              transition-all
            "
            >
              <h3 className="text-xl font-bold mb-2">AI Image Classifier</h3>
              <p className="text-gray-400 mb-4">
                A browser-based image classifier that uses TensorFlow.js and MobileNet to identify objects in images using the ImageNet 1000 class list.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["HTML", "CSS", "JavaScript"].map(
                  (tech) => (
                    <span
                      key={tech}
                      className="
                      bg-purple-500/10 text-purple-500 py-1 px-3 
                      rounded-full text-sm
                      transition
                      hover:bg-purple-500/20 hover:-translate-y-0.5
                      hover:shadow-[0_0_15px_rgba(147,51,234,0.4)]
                    "
                    >
                      {tech}
                    </span>
                  )
                )}
              </div>
              <div className="flex justify-between items-center">
                <a
                  href="https://github.com/xDanielleT/image-classifier"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors my-4"
                >
                  <FaGithub className="text-lg" />
                  View Project →
                </a>

                <a
                  href="https://xdaniellet.github.io/image-classifier/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors"
                >
                  🌐
                  View Demo →
                </a>
              </div>
            </div>

            <div
              className="
              glass p-6 rounded-xl border border-white/10 
              hover:-translate-y-1 hover:border-purple-500/30
              hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)]
              transition-all
            "
            >
              <h3 className="text-xl font-bold mb-2">Codepen Projects</h3>
              <p className="text-gray-400 mb-4">
                This is a collection of front-end projects I built to strengthen my skills in HTML, CSS, and JavaScript. Each project demonstrates my focus on responsive design, clean code practices, and creativity. I continue to use CodePen as a space to experiment with new ideas and improve my web development skills.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {[].map(
                  (tech) => (
                    <span
                      key={tech}
                      className="
                      bg-purple-500/10 text-purple-500 py-1 px-3 
                      rounded-full text-sm
                      transition
                      hover:bg-purple-500/20 hover:-translate-y-0.5
                      hover:shadow-[0_0_15px_rgba(147,51,234,0.4)]
                    "
                    >
                      {tech}
                    </span>
                  )
                )}
              </div>
              <div className="flex justify-between items-center">
                <a
                  href="https://codepen.io/10Danii01/live/rNZPqNQ"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors my-4"
                >
                  🌐
                  View Demo →
                </a>

              </div>
            </div>

            <div
              className="
              glass p-6 rounded-xl border border-white/10 
              hover:-translate-y-1 hover:border-purple-500/30
              hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)]
              transition-all
            "
            >
              <h3 className="text-xl font-bold mb-2">KC People's Fund Website</h3>
              <p className="text-gray-400 mb-4">
                I collaborated with colleagues to design and build the KC People's Fund website using WordPress and Bricks Builder. I contributed to creating a clean, user-friendly layout, ensuring mobile responsiveness, and implementing dynamic features to make content easy for the client to manage. The project focused on accessibility, modern design, and delivering a professional online presence for the organization.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["Wordpress", "Bricks Builder", "Plugins", "CSS", "JavaScript",].map(
                  (tech) => (
                    <span
                      key={tech}
                      className="
                      bg-purple-500/10 text-purple-500 py-1 px-3 
                      rounded-full text-sm
                      transition
                      hover:bg-purple-500/20 hover:-translate-y-0.5
                      hover:shadow-[0_0_15px_rgba(147,51,234,0.4)]
                    "
                    >
                      {tech}
                    </span>
                  )
                )}
              </div>
              <div className="flex justify-between items-center">
                <a
                  href="https://kcpeoplesfund.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors my-4"
                >

                  🌐
                  View Demo →
                </a>

              </div>
            </div>


            <div
              className="
              glass p-6 rounded-xl border border-white/10 
              hover:-translate-y-1 hover:border-purple-500/30
              hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)]
              transition-all
            "
            >
              <h3 className="text-xl font-bold mb-2">Chat App</h3>
              <p className="text-gray-400 mb-4">
                A full-stack chat application featuring real-time messaging, typing indicators, and chat history. Built with WebSockets and deployed for live use.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["React", "Vite", "Node.js", "Express", "Socket.io", "Websockets", "Vercel", "Render"].map(
                  (tech) => (
                    <span
                      key={tech}
                      className="
                      bg-purple-500/10 text-purple-500 py-1 px-3 
                      rounded-full text-sm
                      transition
                      hover:bg-purple-500/20 hover:-translate-y-0.5
                      hover:shadow-[0_0_15px_rgba(147,51,234,0.4)]
                    "
                    >
                      {tech}
                    </span>
                  )
                )}
              </div>
              <div className="flex justify-between items-center">
                <a
                  href="https://github.com/xDanielleT/chat-app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors my-4"
                >
                  <FaGithub className="text-lg" />
                  View Project →
                </a>

                <a
                  href="https://chat-app-alpha-virid-53.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors"
                >
                  🌐
                  View Demo →
                </a>
              </div>
            </div>

            <div
              className="
              glass p-6 rounded-xl border border-white/10 
              hover:-translate-y-1 hover:border-purple-500/30
              hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)]
              transition-all
            "
            >
              <h3 className="text-xl font-bold mb-2">Memory Card Game</h3>
              <p className="text-gray-400 mb-4">
                A simple, fun memory card matching game built with HTML, CSS, and JavaScript.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["HTML", "CSS", "JavaScript"].map((tech, key) => (
                  <span
                    key={key}
                    className="
                      bg-purple-500/10 text-purple-500 py-1 px-3 
                      rounded-full text-sm
                      transition
                      hover:bg-purple-500/20 hover:-translate-y-0.5
                      hover:shadow-[0_0_15px_rgba(147,51,234,0.4)]
                    "
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center ">
                <a
                  href="https://github.com/xDanielleT/memory-card?tab=readme-ov-file"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors my-4"
                >
                  <FaGithub className="text-lg" />
                  View Project →
                </a>
                <a
                  href="https://xdaniellet.github.io/memory-card/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors"
                >
                  🌐
                  View Demo →
                </a>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};