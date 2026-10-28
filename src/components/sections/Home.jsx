import { useEffect, useRef, useState } from "react";
import { FiArrowRight, FiBox, FiMonitor, FiSettings } from "react-icons/fi";
import { IoColorPaletteOutline } from "react-icons/io5";
import { PiCursorFill } from "react-icons/pi";

// The hero shows a laptop whose screen "explodes" backwards into the layers
// that make up a website. Each floating label points at its layer.
const layers = [
  { key: "functionality", body: <LayerCode /> },
  { key: "components", body: <LayerCards /> },
  { key: "design", body: <LayerDesign /> },
  { key: "navigation", body: <LayerNav /> },
  { key: "responsive", body: <LayerGrid /> },
];

// `anchor` says which side of the label the connector leaves from; `at` is the
// point on the layer it lands on, as fractions of the layer's width/height.
const chips = [
  { label: "Design", layer: "design", anchor: "left", at: [0.3, 0.02], icon: <IoColorPaletteOutline />, style: { top: "6%", left: "2%" }, delay: "0s" },
  { label: "Navigation", layer: "navigation", anchor: "left", at: [0.2, 0.04], icon: <PiCursorFill />, style: { top: "34%", left: "0%" }, delay: "1.2s" },
  { label: "Responsive", layer: "screen", anchor: "left", at: [0.02, 0.5], icon: <FiMonitor />, style: { top: "76%", left: "0%" }, delay: "2.4s" },
  { label: "Components", layer: "components", anchor: "above", at: [0.8, 0.02], icon: <FiBox />, style: { top: "4%", right: "0%" }, delay: "0.6s" },
  { label: "Functionality", layer: "functionality", anchor: "below", at: [0.98, 0.55], icon: <FiSettings />, style: { top: "78%", right: "0%" }, delay: "1.8s" },
];

// Measures where each label and its layer ended up on screen, then returns a
// curved connector path between them.
const useConnectors = (stageRef, chipRefs, layerRefs) => {
  const [paths, setPaths] = useState([]);

  useEffect(() => {
    const measure = () => {
      const stage = stageRef.current?.getBoundingClientRect();
      if (!stage) return;
      const next = chips.map((c) => {
        const chip = chipRefs.current[c.layer]?.getBoundingClientRect();
        const layer = layerRefs.current[c.layer]?.getBoundingClientRect();
        if (!chip || !layer) return null;
        const x2 = layer.left + layer.width * c.at[0] - stage.left;
        const y2 = layer.top + layer.height * c.at[1] - stage.top;
        let x1, y1, d;
        if (c.anchor === "left") {
          x1 = chip.right - stage.left;
          y1 = chip.top + chip.height / 2 - stage.top;
          const mid = (x1 + x2) / 2;
          d = `M${x1},${y1} C${mid},${y1} ${mid},${y2} ${x2},${y2}`;
        } else {
          x1 = chip.left + chip.width / 2 - stage.left;
          y1 = (c.anchor === "above" ? chip.bottom : chip.top) - stage.top;
          const mid = (y1 + y2) / 2;
          d = `M${x1},${y1} C${x1},${mid} ${x2},${mid} ${x2},${y2}`;
        }
        return { key: c.layer, d, x2, y2 };
      });
      setPaths(next.filter(Boolean));
    };

    // Wait for the layers to finish spreading out before measuring
    const timer = setTimeout(measure, 1500);
    measure();
    window.addEventListener("resize", measure);
    return () => {
      clearTimeout(timer);
      window.removeEventListener("resize", measure);
    };
  }, [stageRef, chipRefs, layerRefs]);

  return paths;
};

function LayerCode() {
  const widths = ["55%", "70%", "40%", "62%", "48%", "75%", "35%", "58%"];
  return (
    <div className="flex flex-col gap-1.5 p-3 pt-6">
      {widths.map((w, i) => (
        <span key={i} className="h-1.5 rounded" style={{ width: w, marginLeft: `${(i % 3) * 8}%`, background: i % 2 ? "rgba(125,211,252,.55)" : "rgba(196,181,253,.55)" }} />
      ))}
    </div>
  );
}

function LayerCards() {
  return (
    <div className="grid grid-cols-3 gap-2 p-3 pt-7 h-full">
      {[0, 1, 2, 3, 4, 5].map((i) => (
        <span key={i} className="rounded-md border border-indigo-200/50 bg-white/15" />
      ))}
    </div>
  );
}

function LayerDesign() {
  return (
    <div className="flex flex-col gap-2 p-3 pt-6">
      <div className="flex gap-1.5">
        {["#818cf8", "#a78bfa", "#38bdf8", "#f0abfc", "#fff"].map((c) => (
          <span key={c} className="w-5 h-5 rounded-full border border-white/40" style={{ background: c }} />
        ))}
      </div>
      <span className="w-3/5 h-3 rounded bg-white/60" />
      <span className="w-2/5 h-2 rounded bg-white/35" />
    </div>
  );
}

function LayerNav() {
  return (
    <div className="flex items-center gap-2 px-3 pt-6">
      <span className="w-8 h-2.5 rounded bg-indigo-300/80" />
      <span className="ml-auto w-6 h-1.5 rounded bg-white/50" />
      <span className="w-6 h-1.5 rounded bg-white/50" />
      <span className="w-6 h-1.5 rounded bg-white/50" />
      <span className="w-9 h-3 rounded-full bg-violet-400/80" />
    </div>
  );
}

function LayerGrid() {
  return (
    <div className="grid grid-cols-4 gap-1.5 p-3 pt-6 h-full">
      {[0, 1, 2, 3].map((i) => (
        <span key={i} className="rounded-sm border border-dashed border-sky-200/60 bg-sky-300/10" />
      ))}
    </div>
  );
}

const HeroVisual = () => {
  const stageRef = useRef(null);
  const chipRefs = useRef({});
  const layerRefs = useRef({});
  const paths = useConnectors(stageRef, chipRefs, layerRefs);

  return (
  <div className="hero-stage" ref={stageRef} aria-hidden="true">
    <svg className="connectors">
      {paths.map((p) => (
        <g key={p.key}>
          <path d={p.d} />
          <circle cx={p.x2} cy={p.y2} r="3.5" />
        </g>
      ))}
    </svg>

    <div className="stack">
      {layers.map((layer, i) => (
        <div
          key={layer.key}
          ref={(el) => (layerRefs.current[layer.key] = el)}
          className="layer"
          style={{ "--depth": layers.length - i, animationDelay: `${0.15 * i}s` }}
        >
          <div className="pane-dots"><i /><i /><i /></div>
          {layer.body}
        </div>
      ))}

      {/* Front layer: a real site I built, scrolling on the laptop screen */}
      <div className="laptop-screen" ref={(el) => (layerRefs.current.screen = el)}>
        <img className="screen-site" src="images/projects/hero-screen.webp" alt="" decoding="async" />
      </div>
      <div className="laptop-deck" />
    </div>

    {chips.map((c) => (
      <div
        key={c.label}
        ref={(el) => (chipRefs.current[c.layer] = el)}
        className="chip"
        style={{ ...c.style, animationDelay: c.delay }}
      >
        {c.icon}
        {c.label}
      </div>
    ))}
  </div>
  );
};

export const Home = () => {
  return (
    <section id="home" className="pt-28 pb-14 lg:pt-32 lg:pb-16 overflow-hidden">
      <div className="container-x grid grid-cols-1 lg:grid-cols-[1fr_1.05fr] gap-10 items-center">
        <div>
          <p className="eyebrow mb-5">Danielle Turner · Frontend Developer</p>
          {/* <p className="eyebrow mb-5">Web Developer · Creative · Problem-Solver</p> */}

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
