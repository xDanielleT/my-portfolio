import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FiArrowUp } from "react-icons/fi";
import { Logo } from "./Logo";
import { links, navItems } from "../data/content";

export const Footer = () => (
  <footer className="bg-white/80 border-t border-[var(--line)] py-8">
    <div className="container-x">
      <div className="flex flex-col lg:flex-row lg:items-center gap-6">
        <Logo />

        <nav className="flex flex-wrap gap-x-7 gap-y-2 lg:border-l lg:border-r lg:border-[var(--line)] lg:px-8 lg:mx-auto" aria-label="Footer">
          {navItems.map(({ label, href }) => (
            <a key={href} href={href} className="text-sm text-[var(--ink)] hover:text-[var(--primary)]">
              {label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-5 text-2xl text-[var(--navy)]">
          <a href={links.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-[var(--primary)]">
            <FaLinkedin />
          </a>
          <a href={links.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="hover:text-[var(--primary)]">
            <FaGithub />
          </a>
          <a href="#home" className="circle-btn text-base" aria-label="Back to top">
            <FiArrowUp />
          </a>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row sm:justify-between gap-2 mt-6 text-xs text-[var(--soft)]">
        <p>© {new Date().getFullYear()} DaniBytes. Built with purpose, curiosity, and a love for the web.</p>
        <p>Part Developer · Part Creator · Part Problem-Solver · All Purpose ♡</p>
      </div>
    </div>
  </footer>
);
