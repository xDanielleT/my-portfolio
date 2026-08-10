import { useEffect } from "react";

export const MobileMenu = ({ menuOpen, setMenuOpen }) => {
  const links = ["home", "about", "projects", "taste", "contact"];

  // Escape closes the menu — otherwise a keyboard user can get stuck behind it
  useEffect(() => {
    if (!menuOpen) return;
    const onKeyDown = (e) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [menuOpen, setMenuOpen]);

  return (
    <div
      className={`fixed inset-0 z-30 flex flex-col items-center justify-center px-6 transition-all duration-300
        ${menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
      style={{ backgroundColor: "rgba(26,23,20,0.97)" }}
      aria-hidden={!menuOpen}
    >
      {links.map((item, i) => (
        <a
          key={item}
          href={`#${item}`}
          onClick={() => setMenuOpen(false)}
          tabIndex={menuOpen ? 0 : -1}
          className={`mobile-link my-4 sm:my-5 transition-all duration-300 ${
            menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
          style={{ transitionDelay: `${i * 60}ms` }}
        >
          {item}
        </a>
      ))}
    </div>
  );
};
