import { RevealOnScroll } from "../RevealOnScroll";

const skills = [
  "React", "Next.js", "Tailwind CSS", "JavaScript",
  "HTML / CSS", "GitHub", "Responsive Design", "Git / Codespaces",
  "REST APIs", "Cloudinary", "Vercel", "WordPress",
  "Node.js", "PHP", "Socket.io", "Figma",
];

export const About = () => {
  return (
    <section
      id="about"
      className="py-24 px-8 md:px-16"
      style={{ backgroundColor: "var(--cream)" }}
    >
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-start">

        {/* ── Left: bio ── */}
        <div>
          <RevealOnScroll>
            <span className="section-label">About</span>
            <h2
              className="font-playfair mb-6"
              style={{
                fontSize: "clamp(2rem, 4vw, 2.8rem)",
                lineHeight: 1.1,
                color: "var(--ink)",
              }}
            >
              Curious by design,<br />
              adventurous by{" "}
              <em style={{ fontStyle: "italic", color: "var(--rust)" }}>
                appetite.
              </em>
            </h2>

            <p className="mb-4 leading-relaxed" style={{ color: "var(--light-ink)", fontSize: "0.97rem" }}>
              I'm a <strong style={{ color: "var(--ink)", fontWeight: 500 }}>frontend developer</strong> specializing in{" "}
              <strong style={{ color: "var(--ink)", fontWeight: 500 }}>React, Tailwind CSS, and responsive design</strong>. I thrive
              in collaborative workflows and love building things that are precise, accessible, and when it counts — beautiful.
            </p>

            <p className="mb-4 leading-relaxed" style={{ color: "var(--light-ink)", fontSize: "0.97rem" }}>
              The same obsession with craft that makes me debug a misaligned layout at 11pm
              is what sends me across town to try a new spot someone mentioned once in passing.
            </p>

            <p className="mb-8 leading-relaxed" style={{ color: "var(--light-ink)", fontSize: "0.97rem" }}>
              Whether it's a complex UI component or a plate of{" "}
              <strong style={{ color: "var(--ink)", fontWeight: 500 }}>Kansas City BBQ</strong>, the best
              experiences come from people who care deeply about what they're making.
            </p>

            {/* Analogy card */}
            <div
              className="p-5"
              style={{ borderLeft: "3px solid var(--rust)", backgroundColor: "var(--paper)" }}
            >
              <p
                className="font-playfair"
                style={{ fontStyle: "italic", fontSize: "0.97rem", lineHeight: 1.7, color: "var(--light-ink)" }}
              >
                "Great software and great food both start the same way: an idea, a set of
                constraints, and the willingness to iterate until it sings."
              </p>
              <cite
                className="font-mono-dm block mt-3"
                style={{ fontSize: "0.62rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--rust)", fontStyle: "normal" }}
              >
                — Danielle's dev philosophy
              </cite>
            </div>
          </RevealOnScroll>
        </div>

        {/* ── Right: skills + education + experience ── */}
        <div>
          <RevealOnScroll>
            <span className="section-label">Tech Stack</span>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 mb-10">
              {skills.map((s) => (
                <div key={s} className="skill-pill">{s}</div>
              ))}
            </div>

            {/* Divider */}
            <div className="flex items-center gap-3 my-8">
              <div className="flex-1 h-px" style={{ backgroundColor: "var(--border)" }} />
              <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: "var(--rust)" }} />
              <div className="flex-1 h-px" style={{ backgroundColor: "var(--border)" }} />
            </div>

            {/* Education */}
            <span className="section-label">Education</span>
            <div className="space-y-4 mb-10">
              <div>
                <p className="font-mono-dm text-xs tracking-wider mb-1" style={{ color: "var(--rust)" }}>2024</p>
                <p className="font-semibold text-sm" style={{ color: "var(--ink)" }}>Front-End Web Developer Nanodegree</p>
                <p className="text-xs mt-0.5" style={{ color: "var(--light-ink)" }}>Udacity — HTML5, CSS3, JavaScript, React, responsive design</p>
              </div>
              <div>
                <p className="font-mono-dm text-xs tracking-wider mb-1" style={{ color: "var(--rust)" }}>2024</p>
                <p className="font-semibold text-sm" style={{ color: "var(--ink)" }}>Full Stack Web Development Certificate</p>
                <p className="text-xs mt-0.5" style={{ color: "var(--light-ink)" }}>Johnson County Community College — front-end, back-end, databases, APIs</p>
              </div>
            </div>

            {/* Experience */}
            <span className="section-label">Experience</span>
            <div>
              <p className="font-mono-dm text-xs tracking-wider mb-1" style={{ color: "var(--rust)" }}>2023 – Present</p>
              <p className="font-semibold text-sm" style={{ color: "var(--ink)" }}>Developer — WeCode KC</p>
              <p className="text-xs mt-1 leading-relaxed" style={{ color: "var(--light-ink)" }}>
                Building responsive web solutions with React, Tailwind, and TypeScript.
                Technical mentorship, curriculum review, GitHub workflow management,
                and client project delivery.
              </p>
            </div>
          </RevealOnScroll>
        </div>

      </div>
    </section>
  );
};