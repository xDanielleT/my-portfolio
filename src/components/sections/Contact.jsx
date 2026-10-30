import { useRef, useState } from "react";
import { FaGithub, FaLinkedin, FaCodepen } from "react-icons/fa";
import { FiArrowRight, FiMapPin } from "react-icons/fi";
import { RevealOnScroll } from "../RevealOnScroll";
import { links } from "../../data/content";

// Subject choices. The value is what you receive in Netlify; the label is what visitors see.
const subjects = [
  { value: "Project inquiry", label: "Project" },
  { value: "Collaboration", label: "Collaboration" },
  { value: "Job opportunity", label: "Job opportunity" },
  { value: "Just saying hello", label: "Just saying hi" },
];

const contactItems = [
    { icon: <FiMapPin />, label: "Remote" },
  { icon: <FaLinkedin />, label: "linkedin.com/in/danielle-turner680-", href: links.linkedin },
  { icon: <FaGithub />, label: "github.com/xDanielleT", href: links.github },
  // { icon: <FaCodepen />, label: "codepen.io/10Danii01", href: links.codepen },
];

const emptyForm = { name: "", email: "", subject: "", message: "" };

export const Contact = () => {
  const formRef = useRef(null);
  const [formData, setFormData] = useState(emptyForm);
  const [status, setStatus] = useState(null); // "sending" | "success" | "error"

  const update = (field) => (e) => setFormData({ ...formData, [field]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("sending");

    // Netlify Forms: POST the encoded fields to the static skeleton path so the
    // request reaches Netlify's form-handling middleware.
    fetch("/__forms.html", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(new FormData(formRef.current)).toString(),
    })
      .then((res) => {
        if (!res.ok) throw new Error("Submission failed");
        setStatus("success");
        setFormData(emptyForm);
      })
      .catch(() => setStatus("error"));
  };

  return (
    <section id="contact" className="sheet py-14 lg:py-16">
      <div className="container-x grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-10 lg:gap-16 items-start lg:items-center">
        <RevealOnScroll>
          {/* <p className="eyebrow mb-3">Would love to hear from you!</p> */}
          <h2 className="section-title">Get in Touch</h2>
          <p className="mt-4 leading-relaxed text-[var(--muted)] max-w-sm">
            Have a project, opportunity, or just want to connect? I'd love to
            hear from you.
          </p>

          <ul className="contact-list mt-8 space-y-4">
            {contactItems.map(({ icon, label, href }) => (
              <li key={label} className="flex items-center gap-4 text-[0.95rem]">
                <span className="contact-icon">{icon}</span>
                {href ? (
                  <a href={href} target="_blank" rel="noopener noreferrer" className="text-[var(--ink)] hover:text-[var(--primary)] break-all">
                    {label}
                  </a>
                ) : (
                  <span>{label}</span>
                )}
              </li>
            ))}
          </ul>
        </RevealOnScroll>

        <RevealOnScroll>
          {/* The form is styled like a "New Message" window on a computer */}
          <div className="mail-window">
            <div className="mail-titlebar" aria-hidden="true">
              <span className="mail-dot" style={{ background: "#ff5f57" }} />
              <span className="mail-dot" style={{ background: "#febc2e" }} />
              <span className="mail-dot" style={{ background: "#28c840" }} />
              <span className="mail-title">New Message · DaniBytes</span>
            </div>

            <form
              ref={formRef}
              name="contact"
              method="POST"
              data-netlify="true"
              netlify-honeypot="bot-field"
              onSubmit={handleSubmit}
              className="mail-body"
              aria-label="Send me a message"
            >
              {/* Required by Netlify Forms for AJAX submissions */}
              <input type="hidden" name="form-name" value="contact" />
              {/* Honeypot field — hidden from humans, catches bots */}
              <p className="hidden">
                <label>
                  Don't fill this out: <input name="bot-field" />
                </label>
              </p>

              <div className="mail-row">
                <span className="mail-label">To</span>
                <span className="mail-to">
                  <span className="mail-to-logo" aria-hidden="true"><span>//</span>D</span>
                  Danielle Turner
                </span>
              </div>

              <div className="mail-row">
                <label className="mail-label" htmlFor="name">From</label>
                <input id="name" type="text" name="name" placeholder="Your name" required maxLength={100} autoComplete="name" value={formData.name} onChange={update("name")} className="mail-input" />
              </div>

              <div className="mail-row">
                <label className="mail-label" htmlFor="email">Reply to</label>
                <input id="email" type="email" name="email" placeholder="you@example.com" required maxLength={254} autoComplete="email" value={formData.email} onChange={update("email")} className="mail-input" />
              </div>

              <div className="mail-row" role="radiogroup" aria-labelledby="subject-label" aria-required="true">
                <span id="subject-label" className="mail-label">Subject</span>
                <div className="mail-chips">
                  {subjects.map((s) => (
                    <label key={s.value} className="mail-chip">
                      <input type="radio" name="subject" value={s.value} required checked={formData.subject === s.value} onChange={update("subject")} />
                      <span>{s.label}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="mail-message">
                <label className="mail-label" htmlFor="message">Message</label>
                <textarea id="message" name="message" placeholder="Tell me about your project, opportunity, or just say hello…" required maxLength={5000} rows={5} value={formData.message} onChange={update("message")} className="mail-input mail-textarea" />
              </div>

              <div className="mail-footer">
                <p className="mail-status" role="status">
                  {status === "success" && <span className="text-emerald-700">Message sent! Thanks for reaching out.</span>}
                  {status === "error" && <span className="text-red-700">Something went wrong. Please try again, or reach me on LinkedIn.</span>}
                  {!status && <span>All fields are required.</span>}
                </p>
                <button type="submit" disabled={status === "sending"} className="btn btn-primary justify-center disabled:opacity-70">
                  {status === "sending" ? "Sending..." : "Send Message"} <FiArrowRight />
                </button>
              </div>
            </form>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
};
