import { useEffect, useState } from "react";
import { FiArrowRight, FiMenu, FiX } from "react-icons/fi";
import { Logo } from "./Logo";
import { navItems } from "../data/content";

export const Navbar = ({ menuOpen, setMenuOpen }) => {
  const [active, setActive] = useState("#home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  // Highlight the nav link for the section currently in view
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 10);
      // A section becomes "current" once its top passes the upper third of the screen
      let current = navItems[0].href;
      for (const { href } of navItems) {
        const el = document.querySelector(href);
        if (el && el.getBoundingClientRect().top < window.innerHeight * 0.35) current = href;
      }
      // At the very bottom of the page the last section is current, even if it's
      // too short for its top to reach that point
      const atBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2;
      if (atBottom) current = navItems[navItems.length - 1].href;
      setActive(current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 inset-x-0 z-40 transition-all duration-300 ${scrolled ? "bg-white/80 backdrop-blur-md shadow-sm" : ""
        }`}
    >
      <div className="container-x flex items-center justify-between h-20">
        <Logo />

        <div className="hidden lg:flex items-center gap-9">
          {navItems.map(({ label, href }) => (
            <a
              key={href}
              href={href}
              className={`nav-link ${active === href ? "active" : ""}`}
            >
              {label}
            </a>
          ))}
        </div>

        <a href="#contact" className="btn btn-primary hidden lg:inline-flex">
          Let's Connect <FiArrowRight />
        </a>

        <button
          className="lg:hidden circle-btn relative z-50"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>
    </nav>
  );
};
