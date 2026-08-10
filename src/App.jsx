import { useState, useEffect, useRef } from "react";
import "./App.css";
import { LoadingScreen } from "./components/LoadingScreen";
import { Navbar } from "./components/Navbar";
import { MobileMenu } from "./components/MobileMenu";
import { Home } from "./components/sections/Home";
import { About } from "./components/sections/About";
import { Projects } from "./components/sections/Projects";
import { Taste } from "./components/sections/Taste";
import { Contact } from "./components/sections/Contact";
import "./index.css";

function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // The custom cursor only makes sense where there is a real cursor to replace.
  // On touch devices `mousemove` never fires, so the dot and ring would sit
  // stranded in the top-left corner — skip them (and their rAF loop) entirely.
  const [hasFinePointer, setHasFinePointer] = useState(false);

  useEffect(() => {
    const query = window.matchMedia("(hover: hover) and (pointer: fine)");
    const update = () => setHasFinePointer(query.matches);
    update();
    query.addEventListener("change", update);
    return () => query.removeEventListener("change", update);
  }, []);

  // Custom cursor
  const dotRef  = useRef(null);
  const ringRef = useRef(null);
  const mouse   = useRef({ x: 0, y: 0 });
  const ring    = useRef({ x: 0, y: 0 });
  const raf     = useRef(null);

  useEffect(() => {
    if (!hasFinePointer) return;

    const onMove = (e) => {
      mouse.current = { x: e.clientX, y: e.clientY };
      if (dotRef.current) {
        dotRef.current.style.left = e.clientX + "px";
        dotRef.current.style.top  = e.clientY + "px";
      }
    };
    window.addEventListener("mousemove", onMove);

    const animate = () => {
      ring.current.x += (mouse.current.x - ring.current.x) * 0.12;
      ring.current.y += (mouse.current.y - ring.current.y) * 0.12;
      if (ringRef.current) {
        ringRef.current.style.left = ring.current.x + "px";
        ringRef.current.style.top  = ring.current.y + "px";
      }
      raf.current = requestAnimationFrame(animate);
    };
    raf.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf.current);
    };
  }, [hasFinePointer]);

  return (
    <>
      {/* Custom cursor — pointer devices only */}
      {hasFinePointer && (
        <>
          <div ref={dotRef}  className="cursor-dot"  />
          <div ref={ringRef} className="cursor-ring" />
        </>
      )}

      {!isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)} />}

      <div
        className={`min-h-screen transition-opacity duration-700 ${
          isLoaded ? "opacity-100" : "opacity-0"
        }`}
        style={{ backgroundColor: "var(--paper)", color: "var(--ink)" }}
      >
        <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <Home />
        <About />
        <Projects />
        <Taste />
        <Contact />

        {/* Footer */}
        <footer
          className="flex flex-col md:flex-row justify-between items-center gap-3 md:gap-8 px-6 sm:px-8 md:px-16 py-8 md:py-6"
          style={{ backgroundColor: "var(--ink)" }}
        >
          <p
            className="font-mono-dm text-[0.65rem] sm:text-xs tracking-widest uppercase text-center md:text-left"
            style={{ color: "rgba(248,244,238,0.35)" }}
          >
            © 2025 Danielle Turner — Built with intention.
          </p>
          <p
            className="font-mono-dm text-[0.65rem] sm:text-xs tracking-widest uppercase text-center md:text-right"
            style={{ color: "rgba(248,244,238,0.35)" }}
          >
            Inspired by chefs, bakers, and makers who sweat the details.
          </p>
        </footer>
      </div>
    </>
  );
}

export default App;