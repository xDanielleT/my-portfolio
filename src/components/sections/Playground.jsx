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

// Resting tilt for each note, like paper pinned up by hand
const tilts = [-2.5, -1.5, 1.5, -1];

// Sticky note color and push pin color for each card, in order
const noteStyles = ["note-yellow pin-red", "note-mint pin-green", "note-pink pin-blue", "note-blue pin-gold"];

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
  const [showAllSkills, setShowAllSkills] = useState(false);
  // Stacking order: the last note you moved sits on top of the others
  const [stack, setStack] = useState([0, 1, 2, 3]);
  const drag = useRef(null);

  const startDrag = (i) => (e) => {
    // Mouse can grab anywhere on a note; touch only from the move handle so
    // the page still scrolls normally on phones.
    const fromHandle = e.target.closest(".pg-handle");
    if (e.pointerType !== "mouse" && !fromHandle) {
      // A tap on a note brings it to the front, so a covered note's handle
      // is always one tap away
      setStack((prev) => [...prev.filter((n) => n !== i), i]);
      return;
    }
    if (!fromHandle && e.target.closest("a, button, summary, input")) return;

    e.preventDefault();
    // Notes can move anywhere in the section, but stop at its edges so they
    // never slide out of view. The extra top space keeps the push pin visible.
    const card = e.currentTarget.getBoundingClientRect();
    const board = e.currentTarget.closest("section").getBoundingClientRect();
    const edge = 8;
    const pinSpace = 30;
    const limits = {
      left: board.left + edge - card.left,
      right: board.right - edge - card.right,
      top: board.top + pinSpace - card.top,
      bottom: board.bottom - edge - card.bottom,
    };
    drag.current = { i, startX: e.clientX, startY: e.clientY, base: offsets[i], limits };
    // Stop the page's text from getting highlighted while a note is being dragged
    document.body.style.userSelect = "none";
    setDragging(i);
    setStack((prev) => [...prev.filter((n) => n !== i), i]);
    // Keep receiving moves even if the finger slides off the note
    try {
      e.currentTarget.setPointerCapture?.(e.pointerId);
    } catch {
      // Some browsers refuse capture; dragging still works without it
    }
  };

  const onMove = (e) => {
    if (!drag.current) return;
    const { i, startX, startY, base, limits } = drag.current;
    const clamp = (value, min, max) => Math.min(Math.max(value, min), max);
    const dx = clamp(e.clientX - startX, limits.left, limits.right);
    const dy = clamp(e.clientY - startY, limits.top, limits.bottom);
    const next = { ...base, x: base.x + dx, y: base.y + dy, r: 0 };
    setOffsets((prev) => prev.map((o, j) => (j === i ? next : o)));
  };

  const endDrag = () => {
    drag.current = null;
    document.body.style.userSelect = "";
    setDragging(null);
  };

  const shuffle = () => {
    // On phones the notes sit in one column, so only re-tilt them in place
    // instead of sliding them on top of each other
    const phone = window.matchMedia("(max-width: 639px)").matches;
    setOffsets(tilts.map(() => ({
      x: phone ? 0 : Math.round((Math.random() - 0.5) * 60),
      y: phone ? 0 : Math.round((Math.random() - 0.5) * 40),
      r: Math.round((Math.random() - 0.5) * (phone ? 6 : 8)),
    })));
  };

  // Put every note back in its original spot
  const tidyUp = () => {
    setOffsets(tilts.map((r) => ({ x: 0, y: 0, r })));
    setStack([0, 1, 2, 3]);
  };

  const cardProps = (i) => ({
    className: `glass pg-card note ${noteStyles[i]} ${dragging === i ? "dragging" : ""}`,
    style: {
      transform: `translate(${offsets[i].x}px, ${offsets[i].y}px) rotate(${offsets[i].r}deg)`,
      transition: dragging === i ? "none" : "transform 0.4s cubic-bezier(.2,.8,.2,1)",
      position: "relative",
      zIndex: dragging === i ? 30 : 10 + stack.indexOf(i),
    },
    onPointerDown: startDrag(i),
    onPointerMove: onMove,
    onPointerUp: endDrag,
    onPointerCancel: endDrag,
  });

  return (
    <section id="playground" className="corkboard py-16 lg:py-20 overflow-hidden">
      <div className="container-x grid grid-cols-1 lg:grid-cols-[300px_1fr] gap-10 items-start">
        <RevealOnScroll>
          <div className="note note-peach pin-gold note-heading">
            {/* <p className="eyebrow mb-3">Pinned comments from DaniBytes</p> */}
            <h2 className="section-title">
              <span className="title-slashes" aria-hidden="true">//</span> Notes to Self
            </h2>
            <p className="mt-5 leading-relaxed text-[var(--muted)]">
              My skills, what I'm learning, and a bit about me, pinned up like notes. Drag them around and make the board your own.
            </p>
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 mt-7">
              <button className="btn btn-primary" onClick={shuffle}>
                Shuffle the Notes <FiArrowRight />
              </button>
              <button type="button" className="tidy-btn" onClick={tidyUp}>
                Tidy up
              </button>
            </div>
            <p className="drag-tip text-xs text-[var(--soft)] mt-3">
              Tip: drag a note by its <FiMove className="inline" /> handle.
            </p>
          </div>
        </RevealOnScroll>

        <RevealOnScroll>
          <div className="playground grid grid-cols-1 sm:grid-cols-2 gap-x-5 gap-y-8">
            {/* My Skills */}
            <div id="skills" {...cardProps(0)}>
              <CardHeader icon={<FiCode />} title="My Skills" onHandle={startDrag(0)} />
              <ul className="grid grid-cols-3 gap-x-2 gap-y-4 text-center">
                {featuredSkills.map((s) => (
                  <li key={s} className="flex flex-col items-center gap-1.5 text-[0.75rem] text-[var(--ink)]">
                    <span className="text-[1.7rem]" aria-hidden="true">{skillIcons[s]}</span>
                    {s}
                  </li>
                ))}
              </ul>
              <button
                type="button"
                className="mt-4 text-[0.8rem] font-medium text-[var(--primary)] hover:underline cursor-pointer"
                aria-expanded={showAllSkills}
                aria-controls="all-skills"
                onClick={() => setShowAllSkills((open) => !open)}
              >
                {showAllSkills ? "Hide tools" : `See all ${allSkills.length} tools`}
              </button>
              {showAllSkills && (
                <ul id="all-skills" className="flex flex-wrap gap-1.5 mt-3">
                  {allSkills.map((s) => (
                    <li key={s} className="tag">{s}</li>
                  ))}
                </ul>
              )}
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
              <CardHeader
                icon={<img src="images/projects/avatar.png" alt="" className="w-full h-full rounded-full object-cover" style={{ objectPosition: "57% 30%" }} />}
                title="About Me"
                onHandle={startDrag(2)}
              />
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
