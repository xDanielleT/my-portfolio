import { navItems } from "../data/content";

export const MobileMenu = ({ menuOpen, setMenuOpen }) => {
  return (
    <div
      className={`fixed inset-0 z-30 flex flex-col items-center justify-center bg-white/95 backdrop-blur-lg transition-all duration-300 lg:hidden
        ${menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
    >
      {navItems.map(({ label, href }, i) => (
        <a
          key={href}
          href={href}
          onClick={() => setMenuOpen(false)}
          className={`font-display text-3xl font-semibold text-[var(--navy)] my-3 transition-all duration-300 ${
            menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
          style={{ transitionDelay: `${i * 50}ms` }}
        >
          {label}
        </a>
      ))}
      <a href="#contact" onClick={() => setMenuOpen(false)} className="btn btn-primary mt-6">
        Let's Connect
      </a>
    </div>
  );
};
