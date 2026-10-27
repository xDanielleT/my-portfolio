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
      let current = "#home";
      for (const { href } of navItems) {
        const el = document.querySelector(href);
        if (el && el.getBoundingClientRect().top < 140) current = href;
      }
      setActive(current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 inset-x-0 z-40 transition-all duration-300 ${
        scrolled ? "bg-white/80 backdrop-blur-md shadow-sm" : ""
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

        <a href="#contact" className="btn btn-dark hidden lg:inline-flex">
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
