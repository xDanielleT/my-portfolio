import { useRef, useState } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FiArrowRight, FiCode, FiMove } from "react-icons/fi";
import { SiCss3, SiGit, SiJavascript, SiNextdotjs, SiReact, SiTailwindcss } from "react-icons/si";
import { MdOutlineSecurity, MdLan, MdTerminal, MdShield } from "react-icons/md";
import { RevealOnScroll } from "../RevealOnScroll";
import { about, allSkills, education, exploring, featuredSkills, links } from "../../data/content";

const skillIcons = {
  React: <SiReact className="text-sky-500" />,
  "Next.js": <SiNextdotjs className="text-black" />,
  "Tailwind CSS": <SiTailwindcss className="text-cyan-500" />,
  JavaScript: <SiJavascript className="text-yellow-400 bg-black rounded-sm" />,
  "HTML / CSS": <SiCss3 className="text-blue-600" />,
  Git: <SiGit className="text-orange-600" />,
};

const topicIcons = [<MdLan />, <MdShield />, <MdOutlineSecurity />, <MdTerminal />];

// Resting tilt for each card, like a desk of loose notes
const tilts = [-2.5, -1.5, 1.5, -1];

const CardHeader = ({ icon, title, onHandle }) => (
  <div className="flex items-center justify-between mb-4">
    <h3 className="flex items-center gap-2 font-semibold text-[var(--navy)]">
      <span className="grid place-items-center w-6 h-6 rounded-full bg-[var(--navy)] text-white text-xs">
        {icon}
      </span>
      {title}
    </h3>
    <span className="pg-handle" style={{ touchAction: "none" }} onPointerDown={onHandle} aria-hidden="true">
      <FiMove />
    </span>
  </div>
);

export const Playground = () => {
  const [offsets, setOffsets] = useState(() => tilts.map((r) => ({ x: 0, y: 0, r })));
  const [dragging, setDragging] = useState(null);
  const drag = useRef(null);

  const startDrag = (i) => (e) => {
    // Mouse can grab anywhere on a card; touch only from the move handle so
    // the page still scrolls normally on phones.
    const fromHandle = e.target.closest(".pg-handle");
    if (e.pointerType !== "mouse" && !fromHandle) return;
    if (!fromHandle && e.target.closest("a, button")) return;

    e.preventDefault();
    drag.current = { i, startX: e.clientX, startY: e.clientY, base: offsets[i] };
    setDragging(i);
    e.currentTarget.setPointerCapture?.(e.pointerId);
  };

  const onMove = (e) => {
    if (!drag.current) return;
    const { i, startX, startY, base } = drag.current;
    const next = { ...base, x: base.x + e.clientX - startX, y: base.y + e.clientY - startY, r: 0 };
    setOffsets((prev) => prev.map((o, j) => (j === i ? next : o)));
  };

  const endDrag = () => {
    drag.current = null;
    setDragging(null);
  };

  const shuffle = () => {
    setOffsets(tilts.map(() => ({
      x: Math.round((Math.random() - 0.5) * 60),
      y: Math.round((Math.random() - 0.5) * 40),
      r: Math.round((Math.random() - 0.5) * 8),
    })));
  };

  const cardProps = (i) => ({
    className: `glass pg-card ${dragging === i ? "dragging" : ""}`,
    style: {
      transform: `translate(${offsets[i].x}px, ${offsets[i].y}px) rotate(${offsets[i].r}deg)`,
      transition: dragging === i ? "none" : "transform 0.4s cubic-bezier(.2,.8,.2,1)",
      position: "relative",
      zIndex: dragging === i ? 20 : 1,
    },
    onPointerDown: startDrag(i),
    onPointerMove: onMove,
    onPointerUp: endDrag,
    onPointerCancel: endDrag,
  });

  return (
    <section id="playground" className="py-16 lg:py-20 overflow-hidden">
      <div className="container-x grid grid-cols-1 lg:grid-cols-[300px_1fr] gap-10 items-start">
        <RevealOnScroll>
          <p className="eyebrow mb-3">Explore · Arrange · Learn</p>
          <h2 className="section-title">The Modular Playground</h2>
          <p className="mt-5 leading-relaxed text-[var(--muted)]">
            Explore my skills, current learning journey, move, drag, and discover.
          </p>
          <button className="btn btn-primary mt-7" onClick={shuffle}>
            Shuffle the Playground <FiArrowRight />
          </button>
          <p className="text-xs text-[var(--soft)] mt-3">
            Tip: drag a card by its <FiMove className="inline" /> handle.
          </p>
        </RevealOnScroll>

        <RevealOnScroll>
          <div className="playground grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div className="dots-grid" aria-hidden="true" />

            {/* My Skills */}
            <div id="skills" {...cardProps(0)}>
              <CardHeader icon={<FiCode />} title="My Skills" onHandle={startDrag(0)} />
              <ul className="grid grid-cols-3 gap-x-2 gap-y-4 text-center">
                {featuredSkills.map((s) => (
                  <li key={s} className="flex flex-col items-center gap-1.5 text-[0.75rem] text-[var(--ink)]">
                    <span className="text-[1.7rem]">{skillIcons[s]}</span>
                    {s}
                  </li>
                ))}
              </ul>
              <details className="mt-4 text-[0.78rem] text-[var(--muted)]">
                <summary className="cursor-pointer font-medium text-[var(--primary)]">
                  All {allSkills.length} tools
                </summary>
                <p className="mt-2 leading-relaxed">{allSkills.join(" · ")}</p>
              </details>
            </div>

            {/* Currently Exploring */}
            <div {...cardProps(1)}>
              <CardHeader icon={<MdOutlineSecurity />} title="Currently Exploring" onHandle={startDrag(1)} />
              <p className="text-[0.85rem] font-semibold text-[var(--navy)]">{exploring.title}</p>
              <p className="text-[0.78rem] text-[var(--muted)] mt-1 mb-3 leading-snug">{exploring.note}</p>
              <ul className="space-y-2.5">
                {exploring.topics.map((t, i) => (
                  <li key={t} className="flex items-center gap-3 text-[0.82rem] text-[var(--ink)]">
                    <span className="text-[var(--navy)] text-lg">{topicIcons[i]}</span>
                    {t}
                  </li>
                ))}
              </ul>
            </div>

            {/* About Me */}
            <div id="about" {...cardProps(2)}>
              <CardHeader icon="D" title="About Me" onHandle={startDrag(2)} />
              <p className="text-[0.84rem] leading-relaxed text-[var(--muted)]">{about}</p>
              <ul className="mt-4 space-y-2">
                {education.map((e) => (
                  <li key={e.title} className="text-[0.78rem]">
                    <span className="font-semibold text-[var(--primary)]">{e.year} / {e.school}</span>
                    <br />
                    <span className="text-[var(--ink)]">{e.title}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div {...cardProps(3)}>
              <CardHeader icon="@" title="Contact" onHandle={startDrag(3)} />
              <div className="grid grid-cols-2 gap-3 text-center text-[0.75rem]">
                <a href={links.linkedin} target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-1.5 text-[var(--ink)] hover:text-[var(--primary)]">
                  <FaLinkedin className="text-3xl text-[var(--navy)]" /> LinkedIn
                </a>
                <a href={links.github} target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-1.5 text-[var(--ink)] hover:text-[var(--primary)]">
                  <FaGithub className="text-3xl text-[var(--navy)]" /> GitHub
                </a>
              </div>
              <a href="#contact" className="btn btn-primary w-full justify-center mt-5 py-2.5 text-sm">
                Send a Message <FiArrowRight />
              </a>
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
};
