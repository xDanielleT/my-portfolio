import { useRef, useState } from "react";
import { RevealOnScroll } from "../RevealOnScroll";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export const Contact = () => {
  const formRef = useRef(null);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState(null); // "sending" | "success" | "error"

  const isSending = status === "sending";

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isSending) return;
    setStatus("sending");

    // Netlify Forms: POST the encoded fields to the static skeleton path so the
    // request reaches Netlify's form-handling middleware. Posting to "/" would
    // be served the SPA shell and silently never reach form processing.
    try {
      const res = await fetch("/__forms.html", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(new FormData(formRef.current)).toString(),
      });

      if (!res.ok) throw new Error(`Submission failed with status ${res.status}`);

      setStatus("success");
      setFormData({ name: "", email: "", message: "" });
    } catch (err) {
      console.error("Contact form submission failed:", err);
      setStatus("error");
    }
  };

  return (
    <section
      id="contact"
      className="py-20 md:py-24 px-6 sm:px-8 md:px-16"
      style={{ backgroundColor: "var(--cream)" }}
    >
      <div className="max-w-2xl mx-auto text-center">
        <RevealOnScroll>
          <span className="section-label" style={{ display: "block", textAlign: "center" }}>
            Contact
          </span>
          <h2
            className="font-playfair mb-4"
            style={{ fontSize: "clamp(1.9rem, 6vw, 2.8rem)", color: "var(--ink)", lineHeight: 1.1 }}
          >
            Let's build something<br />worth talking about.
          </h2>
          <p
            className="mb-10 leading-relaxed"
            style={{ fontSize: "clamp(0.92rem, 3.4vw, 0.97rem)", color: "var(--light-ink)" }}
          >
            Whether it's a new project, a collaboration, or just a conversation
            about the best hidden-gem restaurant in KC — my inbox is open.
          </p>
        </RevealOnScroll>

        <RevealOnScroll>
          <form
            ref={formRef}
            name="contact"
            method="POST"
            action="/__forms.html"
            data-netlify="true"
            netlify-honeypot="bot-field"
            onSubmit={handleSubmit}
            className="space-y-4 text-left"
          >
            {/* Required by Netlify Forms for AJAX submissions */}
            <input type="hidden" name="form-name" value="contact" />
            {/* Honeypot field — hidden from humans, catches bots */}
            <p className="hidden">
              <label>
                Don't fill this out: <input name="bot-field" tabIndex={-1} />
              </label>
            </p>

            <label className="sr-only" htmlFor="contact-name">Your name</label>
            <input
              id="contact-name"
              type="text"
              name="name"
              placeholder="Your name"
              required
              autoComplete="name"
              disabled={isSending}
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="form-input"
            />

            <label className="sr-only" htmlFor="contact-email">Your email</label>
            <input
              id="contact-email"
              type="email"
              name="email"
              placeholder="your@email.com"
              required
              autoComplete="email"
              disabled={isSending}
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="form-input"
            />

            <label className="sr-only" htmlFor="contact-message">Your message</label>
            <textarea
              id="contact-message"
              name="message"
              placeholder="Tell me about your project..."
              required
              rows={5}
              disabled={isSending}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="form-input resize-none"
            />

            <button
              type="submit"
              disabled={isSending}
              className="btn-filled w-full text-center"
              style={{ opacity: isSending ? 0.7 : 1 }}
            >
              {isSending ? "Sending..." : "Send Message"}
            </button>

            {/* aria-live so screen readers announce the result */}
            <div aria-live="polite">
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
                  Something went wrong. Please try again, or email me directly.
                </p>
              )}
            </div>
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