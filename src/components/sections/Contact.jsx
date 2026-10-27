import { useRef, useState } from "react";
import { FaGithub, FaLinkedin, FaCodepen } from "react-icons/fa";
import { FiArrowRight, FiMapPin } from "react-icons/fi";
import { RevealOnScroll } from "../RevealOnScroll";
import { links } from "../../data/content";

const subjects = ["Project inquiry", "Collaboration", "Job opportunity", "Just saying hello"];

const contactItems = [
  { icon: <FiMapPin />, label: "Kansas City, MO" },
  { icon: <FaLinkedin />, label: "linkedin.com/in/danielle-turner680-", href: links.linkedin },
  { icon: <FaGithub />, label: "github.com/xDanielleT", href: links.github },
  { icon: <FaCodepen />, label: "codepen.io/10Danii01", href: links.codepen },
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
      <div className="container-x grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-10 lg:gap-16 items-start">
        <RevealOnScroll>
          <p className="eyebrow mb-3">Let's Connect</p>
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
          <form
            ref={formRef}
            name="contact"
            method="POST"
            data-netlify="true"
            netlify-honeypot="bot-field"
            onSubmit={handleSubmit}
            className="glass p-4 sm:p-5 grid grid-cols-1 sm:grid-cols-2 gap-3"
          >
            {/* Required by Netlify Forms for AJAX submissions */}
            <input type="hidden" name="form-name" value="contact" />
            {/* Honeypot field — hidden from humans, catches bots */}
            <p className="hidden">
              <label>
                Don't fill this out: <input name="bot-field" />
              </label>
            </p>

            <label className="sr-only" htmlFor="name">Name</label>
            <input id="name" type="text" name="name" placeholder="Name *" required value={formData.name} onChange={update("name")} className="field" />

            <label className="sr-only" htmlFor="email">Email</label>
            <input id="email" type="email" name="email" placeholder="Email *" required value={formData.email} onChange={update("email")} className="field" />

            <label className="sr-only" htmlFor="subject">Subject</label>
            <select id="subject" name="subject" required value={formData.subject} onChange={update("subject")} className="field sm:col-span-2">
              <option value="" disabled>Subject *</option>
              {subjects.map((s) => (
                <option key={s} value={s}>{s}</option>
              ))}
            </select>

            <label className="sr-only" htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              placeholder="Your message * — tell me about your project, opportunity, or just say hello..."
              required
              rows={4}
              value={formData.message}
              onChange={update("message")}
              className="field sm:col-span-2 resize-y"
            />

            <div className="sm:col-span-2 flex flex-col-reverse sm:flex-row sm:items-center sm:justify-between gap-3">
              <p className="text-sm" role="status">
                {status === "success" && <span className="text-emerald-700">Message sent! I'll be in touch soon.</span>}
                {status === "error" && <span className="text-red-600">Something went wrong. Please try again.</span>}
              </p>
              <button type="submit" disabled={status === "sending"} className="btn btn-primary justify-center disabled:opacity-70">
                {status === "sending" ? "Sending..." : "Send Message"} <FiArrowRight />
              </button>
            </div>
          </form>
        </RevealOnScroll>
      </div>
    </section>
  );
};
