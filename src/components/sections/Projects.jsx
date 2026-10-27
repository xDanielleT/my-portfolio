import { useEffect, useRef, useState } from "react";
import { FaGithub } from "react-icons/fa";
import { FiArrowLeft, FiArrowRight, FiExternalLink, FiX } from "react-icons/fi";
import { RevealOnScroll } from "../RevealOnScroll";
import { projectFilters, projects } from "../../data/content";

const Thumb = ({ project }) => (
  <div
    className="thumb"
    style={{
      background: `linear-gradient(135deg, ${project.accent[0]}, ${project.accent[1]})`,
    }}
  >
    {project.image ? (
      <img src={project.image} alt={`Screenshot of ${project.title}`} loading="lazy" />
    ) : (
      <>
        <div className="thumb-bar"><i /><i /><i /></div>
        <div className="thumb-body">{project.short}</div>
      </>
    )}
  </div>
);

const ProjectModal = ({ project, onClose }) => {
  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div
        className="modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="project-title"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-3 pb-0">
          <Thumb project={project} />
        </div>
        <div className="p-6">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="eyebrow mb-1">{project.type}</p>
              <h3 id="project-title" className="text-2xl font-semibold text-[var(--navy)]">
                {project.title}
              </h3>
            </div>
            <button className="circle-btn" onClick={onClose} aria-label="Close" autoFocus>
              <FiX />
            </button>
          </div>

          <p className="mt-4 leading-relaxed text-[var(--muted)]">{project.desc}</p>

          <div className="flex flex-wrap gap-2 mt-5">
            {project.tags.map((t) => (
              <span key={t} className="tag">{t}</span>
            ))}
          </div>

          <div className="flex flex-wrap gap-3 mt-6">
            {project.demo && (
              <a href={project.demo} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                Visit Site <FiExternalLink />
              </a>
            )}
            {project.github && (
              <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn btn-outline">
                <FaGithub /> View Code
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export const Projects = () => {
  const [filter, setFilter] = useState("All");
  const [selected, setSelected] = useState(null);
  const rowRef = useRef(null);

  const visible = filter === "All" ? projects : projects.filter((p) => p.category === filter);

  const scroll = (dir) => {
    rowRef.current?.scrollBy({ left: dir * 432, behavior: "smooth" });
  };

  const changeFilter = (f) => {
    setFilter(f);
    rowRef.current?.scrollTo({ left: 0 });
  };

  return (
    <section id="projects" className="sheet py-14 lg:py-16">
      <div className="container-x grid grid-cols-1 lg:grid-cols-[330px_1fr] gap-10">
        <RevealOnScroll>
          <p className="eyebrow mb-3">Real Websites · Real Impact</p>
          <h2 className="section-title">The Living Archive</h2>
          <p className="mt-5 leading-relaxed text-[var(--muted)]">
            A collection of real websites, creative projects, and technical work.
            Click a project to see the website, my contributions, and the
            technologies used.
          </p>
          <button className="btn btn-primary mt-7" onClick={() => changeFilter("All")}>
            Explore All Projects <FiArrowRight />
          </button>
        </RevealOnScroll>

        <RevealOnScroll>
          <div className="flex items-center justify-between gap-4 mb-4">
            <div className="flex flex-wrap gap-2" role="group" aria-label="Filter projects">
              {projectFilters.map((f) => (
                <button
                  key={f}
                  className={`filter-pill ${filter === f ? "active" : ""}`}
                  aria-pressed={filter === f}
                  onClick={() => changeFilter(f)}
                >
                  {f}
                </button>
              ))}
            </div>
            <div className="hidden sm:flex gap-2">
              <button className="circle-btn" onClick={() => scroll(-1)} aria-label="Previous projects">
                <FiArrowLeft />
              </button>
              <button className="circle-btn" onClick={() => scroll(1)} aria-label="Next projects">
                <FiArrowRight />
              </button>
            </div>
          </div>

          <div className="project-row" ref={rowRef}>
            {visible.map((p) => (
              <button key={p.title} className="project-card" onClick={() => setSelected(p)}>
                <Thumb project={p} />
                <div className="flex items-start justify-between gap-2 px-1.5 pt-3 pb-1">
                  <div>
                    <p className="font-semibold text-[0.92rem] text-[var(--navy)]">{p.short}</p>
                    <p className="text-[0.75rem] text-[var(--soft)] mt-0.5">{p.type}</p>
                  </div>
                  <span className="circle-btn w-7 h-7 text-xs shrink-0" aria-hidden="true">
                    <FiArrowRight />
                  </span>
                </div>
              </button>
            ))}
          </div>
        </RevealOnScroll>
      </div>

      {selected && <ProjectModal project={selected} onClose={() => setSelected(null)} />}
    </section>
  );
};
