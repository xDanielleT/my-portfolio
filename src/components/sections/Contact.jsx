import { useRef, useState } from "react";
import { RevealOnScroll } from "../RevealOnScroll";
import emailjs from "@emailjs/browser";
import { FaGithub, FaLinkedin } from "react-icons/fa";

emailjs.init(import.meta.env.VITE_PUBLIC_KEY);

export const Contact = () => {
  const formRef = useRef(null);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState(null); // "sending" | "success" | "error"

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("sending");

    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_PUBLIC_KEY
      )
      .then(() => {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
      })
      .catch(() => setStatus("error"));
  };

  return (
    <section
      id="contact"
      className="py-24 px-8 md:px-16"
      style={{ backgroundColor: "var(--cream)" }}
    >
      <div className="max-w-2xl mx-auto text-center">
        <RevealOnScroll>
          <span className="section-label" style={{ display: "block", textAlign: "center" }}>
            Contact
          </span>
          <h2
            className="font-playfair mb-4"
            style={{ fontSize: "clamp(2rem, 4vw, 2.8rem)", color: "var(--ink)", lineHeight: 1.1 }}
          >
            Let's build something<br />worth talking about.
          </h2>
          <p
            className="mb-10 leading-relaxed"
            style={{ fontSize: "0.97rem", color: "var(--light-ink)" }}
          >
            Whether it's a new project, a collaboration, or just a conversation
            about the best hidden-gem restaurant in KC — my inbox is open.
          </p>
        </RevealOnScroll>

        <RevealOnScroll>
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="space-y-4 text-left"
          >
            <input
              type="text"
              name="name"
              placeholder="Your name"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="form-input"
            />
            <input
              type="email"
              name="email"
              placeholder="your@email.com"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="form-input"
            />
            <textarea
              name="message"
              placeholder="Tell me about your project..."
              required
              rows={5}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="form-input resize-none"
            />

            <button
              type="submit"
              disabled={status === "sending"}
              className="btn-filled w-full text-center"
              style={{ opacity: status === "sending" ? 0.7 : 1 }}
            >
              {status === "sending" ? "Sending..." : "Send Message"}
            </button>

            {status === "success" && (
              <p
                className="font-mono-dm text-center text-xs tracking-wider mt-2"
                style={{ color: "#5a7a5e" }}
              >
                Message sent! I'll be in touch soon.
              </p>
            )}
            {status === "error" && (
              <p
                className="font-mono-dm text-center text-xs tracking-wider mt-2"
                style={{ color: "var(--rust)" }}
              >
                Something went wrong. Please try again.
              </p>
            )}
          </form>

          {/* Social links */}
          <div className="flex justify-center gap-6 mt-10">
            <a
              href="https://github.com/xDanielleT"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "var(--light-ink)", fontSize: "1.5rem", cursor: "none", transition: "color 0.2s" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "var(--rust)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "var(--light-ink)")}
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/danielle-turner680-/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "var(--light-ink)", fontSize: "1.5rem", cursor: "none", transition: "color 0.2s" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "var(--rust)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "var(--light-ink)")}
            >
              <FaLinkedin />
            </a>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
};