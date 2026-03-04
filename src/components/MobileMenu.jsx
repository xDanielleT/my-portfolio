export const MobileMenu = ({ menuOpen, setMenuOpen }) => {
  const links = ["home", "about", "projects", "taste", "contact"];

  return (
    <div
      className={`fixed inset-0 z-30 flex flex-col items-center justify-center transition-all duration-300
        ${menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
      style={{ backgroundColor: "rgba(26,23,20,0.97)" }}
    >
      {links.map((item, i) => (
        <a
          key={item}
          href={`#${item}`}
          onClick={() => setMenuOpen(false)}
          className={`mobile-link my-5 transition-all duration-300 ${
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