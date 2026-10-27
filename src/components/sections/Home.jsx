import { FiArrowRight, FiBox, FiMonitor, FiSettings } from "react-icons/fi";
import { IoColorPaletteOutline } from "react-icons/io5";
import { PiCursorFill } from "react-icons/pi";

// Floating labels around the hero illustration
const chips = [
  { label: "Design", icon: <IoColorPaletteOutline />, style: { top: "6%", left: "6%" }, delay: "0s" },
  { label: "Navigation", icon: <PiCursorFill />, style: { top: "38%", left: "0%" }, delay: "1.2s" },
  { label: "Responsive", icon: <FiMonitor />, style: { top: "64%", left: "3%" }, delay: "2.4s" },
  { label: "Components", icon: <FiBox />, style: { top: "16%", right: "0%" }, delay: "0.6s" },
  { label: "Functionality", icon: <FiSettings />, style: { top: "40%", right: "0%" }, delay: "1.8s" },
];

// Back panes of the layered "browser windows" illustration
const panes = [
  { top: "0%", left: "46%", width: "36%", height: "62%", opacity: 0.85 },
  { top: "12%", left: "60%", width: "34%", height: "64%", opacity: 0.95 },
  { top: "18%", left: "22%", width: "30%", height: "52%", opacity: 0.75 },
];

const HeroVisual = () => (
  <div className="hero-stage" aria-hidden="true">
    {panes.map((p, i) => (
      <div key={i} className="pane" style={p}>
        <div className="pane-dots"><i /><i /><i /></div>
      </div>
    ))}

    <div className="laptop">
      <div className="laptop-screen">
        {/* A tiny abstract web page */}
        <div className="h-full flex flex-col">
          <div className="flex items-center gap-1.5 px-3 py-2 border-b border-slate-100">
            <span className="w-8 h-2 rounded bg-indigo-500" />
            <span className="ml-auto w-6 h-1.5 rounded bg-slate-200" />
            <span className="w-6 h-1.5 rounded bg-slate-200" />
            <span className="w-6 h-1.5 rounded bg-slate-200" />
          </div>
          <div className="flex-1 grid grid-cols-2 gap-3 p-3">
            <div className="flex flex-col gap-1.5 justify-center">
              <span className="w-4/5 h-2.5 rounded bg-slate-800" />
              <span className="w-3/5 h-2.5 rounded bg-violet-600" />
              <span className="w-full h-1.5 rounded bg-slate-200 mt-1" />
              <span className="w-5/6 h-1.5 rounded bg-slate-200" />
              <span className="w-10 h-3 rounded-full bg-indigo-500 mt-1.5" />
            </div>
            <div className="rounded-md bg-gradient-to-br from-indigo-400 via-violet-400 to-sky-300" />
            <div className="col-span-2 grid grid-cols-3 gap-2">
              <span className="h-6 rounded bg-indigo-100" />
              <span className="h-6 rounded bg-violet-100" />
              <span className="h-6 rounded bg-sky-100" />
            </div>
          </div>
        </div>
      </div>
      <div className="laptop-base" />
    </div>

    {chips.map((c) => (
      <div key={c.label} className="chip" style={{ ...c.style, animationDelay: c.delay }}>
        {c.icon}
        {c.label}
      </div>
    ))}
  </div>
);

export const Home = () => {
  return (
    <section id="home" className="pt-28 pb-14 lg:pt-32 lg:pb-16 overflow-hidden">
      <div className="container-x grid grid-cols-1 lg:grid-cols-[1fr_1.05fr] gap-10 items-center">
        <div>
          <p className="eyebrow mb-5">Web Developer · Creative · Problem-Solver</p>

          <h1 className="font-semibold tracking-tight text-[var(--navy)] leading-[1.02] text-[clamp(2.6rem,6vw,4.1rem)]">
            Modern Websites
            <br />
            <span className="gradient-text">Real Solutions.</span>
          </h1>

          <p className="mt-6 max-w-[480px] text-[1.08rem] leading-relaxed text-[var(--muted)]">
            I build modern, responsive websites, solve technical problems, and
            explore new technologies with a passion for creating accessible and
            engaging experiences.
          </p>

          <div className="flex flex-wrap gap-4 mt-8">
            <a href="#projects" className="btn btn-primary">
              Explore My Work <FiArrowRight />
            </a>
            <a href="#playground" className="btn btn-outline">
              See How I Build
            </a>
          </div>
        </div>

        <div className="hidden sm:block">
          <HeroVisual />
        </div>
      </div>
    </section>
  );
};
