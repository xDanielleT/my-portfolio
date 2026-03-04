import { useEffect } from "react";

export const Navbar = ({ menuOpen, setMenuOpen }) => {
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  return (
    <nav
      className="fixed top-0 w-full z-40 backdrop-blur-md"
      style={{
        backgroundColor: "rgba(248,244,238,0.92)",
        borderBottom: "1px solid var(--border)",
      }}
    >
      <div className="max-w-6xl mx-auto px-6 md:px-16">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <a
            href="#home"
            className="font-mono-dm text-xs tracking-widest uppercase"
            style={{ color: "var(--rust)", cursor: "none" }}
          >
            Danielle T.
          </a>

          {/* Mobile hamburger */}
          <button
            className="md:hidden flex flex-col gap-1.5 z-40 p-1"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label="Toggle Menu"
            style={{ cursor: "none" }}
          >
            <span
              className="block w-6 h-px transition-all duration-300"
              style={{
                backgroundColor: "var(--ink)",
                transform: menuOpen ? "rotate(45deg) translate(4px, 4px)" : "",
              }}
            />
            <span
              className="block w-6 h-px transition-all duration-300"
              style={{
                backgroundColor: "var(--ink)",
                opacity: menuOpen ? 0 : 1,
              }}
            />
            <span
              className="block w-6 h-px transition-all duration-300"
              style={{
                backgroundColor: "var(--ink)",
                transform: menuOpen ? "rotate(-45deg) translate(4px, -4px)" : "",
              }}
            />
          </button>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-10">
            {["home", "about", "projects", "taste", "contact"].map((item) => (
              <a key={item} href={`#${item}`} className="nav-link">
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};