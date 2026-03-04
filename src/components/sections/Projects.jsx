import { RevealOnScroll } from "../RevealOnScroll";
import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";

const projects = [
  {
    num: "01",
    title: "jQuery Font Sampler",
    flavor: "// the right tool, used precisely",
    desc: "Responsive web app letting users sample custom fonts with their own text, adjustable size, and color. Clean interface built to let the typography speak for itself.",
    tags: ["HTML", "jQuery"],
    github: "https://github.com/xDanielleT/font-sampler",
    demo: "https://xdaniellet.github.io/font-sampler/",
  },
  {
    num: "02",
    title: "WeCode KC Services Page",
    flavor: "// the signature dish",
    desc: "Collaborated on a professional services page for WeCode KC — dynamic, responsive, and built with a user experience that earns a second visit.",
    tags: ["React", "Tailwind CSS", "HTML"],
    demo: "https://www.wecodekc.org/services",
  },
  {
    num: "03",
    title: "PHP Todo List",
    flavor: "// mise en place for your day",
    desc: "PHP-based task manager using session storage — add, complete, and delete tasks without a database. Minimal, functional, no fuss.",
    tags: ["PHP", "HTML", "CSS"],
    github: "https://github.com/xDanielleT/PHP-Todo-List",
  },
  {
    num: "04",
    title: "AI Image Classifier",
    flavor: "// teaching machines to taste",
    desc: "Browser-based image classifier using TensorFlow.js and MobileNet to identify objects from the ImageNet 1000 class list. No server required.",
    tags: ["HTML", "CSS", "JavaScript", "TensorFlow.js"],
    github: "https://github.com/xDanielleT/image-classifier",
    demo: "https://xdaniellet.github.io/image-classifier/",
  },
  {
    num: "05",
    title: "KC People's Fund Website",
    flavor: "// feeding the community",
    desc: "Collaborated to design and build a full nonprofit website using WordPress and Bricks Builder — responsive, accessible, and easy for the client to manage.",
    tags: ["WordPress", "Bricks Builder", "CSS", "JavaScript"],
    demo: "https://kcpeoplesfund.org/",
  },
  {
    num: "06",
    title: "Real-Time Chat App",
    flavor: "// the table where conversation happens",
    desc: "Full-stack chat application with real-time messaging, typing indicators, and chat history. Built with WebSockets and deployed live on Vercel + Render.",
    tags: ["React", "Vite", "Node.js", "Socket.io", "Vercel"],
    github: "https://github.com/xDanielleT/chat-app",
    demo: "https://chat-app-alpha-virid-53.vercel.app/",
  },
  {
    num: "07",
    title: "Memory Card Game",
    flavor: "// pattern recognition is a skill",
    desc: "A clean memory card matching game built with vanilla HTML, CSS, and JavaScript. Simple premise, satisfying to play.",
    tags: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/xDanielleT/memory-card?tab=readme-ov-file",
    demo: "https://xdaniellet.github.io/memory-card/",
  },
  {
    num: "08",
    title: "CodePen Collection",
    flavor: "// the tasting menu",
    desc: "A growing collection of front-end experiments — responsive layouts, micro-interactions, and creative CSS. My lab bench for new ideas.",
    tags: ["HTML", "CSS", "JavaScript"],
    demo: "https://codepen.io/10Danii01/live/rNZPqNQ",
  },
];

export const Projects = () => {
  return (
    <section
      id="projects"
      className="py-24 px-8 md:px-16"
      style={{ backgroundColor: "var(--paper)" }}
    >
      <div className="max-w-6xl mx-auto">
        <RevealOnScroll>
          <span className="section-label">Projects</span>
          <h2
            className="font-playfair mb-14"
            style={{ fontSize: "clamp(2rem, 4vw, 2.8rem)", color: "var(--ink)", lineHeight: 1.1 }}
          >
            The work on the plate.
          </h2>
        </RevealOnScroll>

        {/* Grid — separated by 1px border lines */}
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
          style={{ gap: "1px", backgroundColor: "var(--border)" }}
        >
          {projects.map((p) => (
            <RevealOnScroll key={p.num}>
              <div className="project-card p-8 h-full flex flex-col">
                <p
                  className="font-mono-dm mb-3"
                  style={{ fontSize: "0.62rem", letterSpacing: "0.15em", color: "var(--rust)" }}
                >
                  {p.num} —
                </p>

                <h3
                  className="font-playfair mb-1"
                  style={{ fontSize: "1.25rem", fontWeight: 700, color: "var(--ink)" }}
                >
                  {p.title}
                </h3>

                <p
                  className="font-mono-dm mb-4"
                  style={{ fontSize: "0.65rem", letterSpacing: "0.08em", color: "var(--rust)", fontStyle: "italic" }}
                >
                  {p.flavor}
                </p>

                <p
                  className="leading-relaxed mb-5 flex-1"
                  style={{ fontSize: "0.88rem", color: "var(--light-ink)" }}
                >
                  {p.desc}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="font-mono-dm"
                      style={{
                        fontSize: "0.6rem",
                        letterSpacing: "0.06em",
                        padding: "0.2rem 0.55rem",
                        border: "1px solid var(--border)",
                        color: "var(--light-ink)",
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-4">
                  {p.github && (
                    <a
                      href={p.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 font-mono-dm"
                      style={{ fontSize: "0.65rem", letterSpacing: "0.08em", color: "var(--rust)", cursor: "none", textDecoration: "none" }}
                    >
                      <FaGithub /> GitHub →
                    </a>
                  )}
                  {p.demo && (
                    <a
                      href={p.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 font-mono-dm"
                      style={{ fontSize: "0.65rem", letterSpacing: "0.08em", color: "var(--rust)", cursor: "none", textDecoration: "none" }}
                    >
                      <FiExternalLink /> Live Demo →
                    </a>
                  )}
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
};