// Labels are placed by angle rather than by hard-coded pixel offsets, so they
// stay evenly spaced on the ring at every screen size. 0deg points right and
// angles run clockwise (y grows downward, as in CSS).
const orbitItems = [
  { label: "React · Next.js", angle: 270 },
  { label: "Soul Food", angle: 330 },
  { label: "Tailwind CSS", angle: 30 },
  { label: "Street tacos", angle: 90 },
  { label: "GitHub · DevOps", angle: 150 },
  { label: "Korean BBQ", angle: 210 },
];

const round = (n) => String(Math.round(n * 10000) / 10000);

export const Home = () => {
  return (
    <section
      id="home"
      className="min-h-svh md:min-h-screen grid md:grid-cols-2 pt-16"
      style={{ backgroundColor: "var(--paper)" }}
    >
      {/* ── Left: text ── */}
      <div className="flex flex-col justify-center items-center text-center md:items-start md:text-left px-6 sm:px-8 md:px-16 py-16 md:py-20">
        <span className="section-label afu-1">Web Developer</span>

        <h1
          className="font-playfair afu-2"
          style={{
            fontSize: "clamp(2.25rem, 8.5vw, 5rem)",
            lineHeight: 1.05,
            fontWeight: 700,
            color: "var(--ink)",
            textWrap: "balance",
          }}
        >
          I build things.<br />
          I find joy{" "}
          <em style={{ fontStyle: "italic", color: "var(--rust)" }}>
            everywhere.
          </em>
        </h1>

        <p
          className="afu-3 mt-6 leading-relaxed max-w-md"
          style={{ fontSize: "clamp(0.95rem, 3.6vw, 1.05rem)", color: "var(--light-ink)" }}
        >
          <strong style={{ color: "var(--ink)", fontWeight: 500 }}>
            Frontend developer
          </strong>{" "}
          specializing in React, Tailwind CSS &amp; responsive design
          driven by the same curiosity that takes me to new restaurants. Code and cuisine, same philosophy:{" "}
          <strong style={{ color: "var(--ink)", fontWeight: 500 }}>
            the details make it unforgettable.
          </strong>
        </p>

        <div className="afu-4 flex flex-wrap justify-center md:justify-start gap-3 mt-8">
          <a href="#projects" className="btn-filled">View my work</a>
          <a href="#contact"  className="btn-outline">Let's connect</a>
        </div>
      </div>

      {/* ── Right: dark visual ── */}
      <div
        className="orbit-panel relative flex items-center justify-center overflow-hidden min-h-[20rem] md:min-h-0 py-14 md:py-0"
        style={{ backgroundColor: "var(--ink)" }}
      >
        {/* dot-grid background */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle, rgba(255,255,255,0.04) 1px, transparent 1px)",
            backgroundSize: "30px 30px",
          }}
        />

        {/* orbit ring + items */}
        <div className="orbit">
          <div className="orbit-ring" />

          {/* center text */}
          <div
            className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 sm:px-6"
            style={{ zIndex: 2 }}
          >
            <span
              className="font-mono-dm block mb-3"
              style={{
                fontSize: "0.6rem",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "var(--rust)",
              }}
            >
              My two obsessions
            </span>
            <p
              className="font-playfair"
              style={{
                fontSize: "clamp(1rem, 3.5vw, 1.15rem)",
                fontStyle: "italic",
                color: "rgba(248,244,238,0.85)",
                lineHeight: 1.6,
              }}
            >
              Clean code<br />&amp; bold flavors
            </p>
          </div>

          {/* orbit labels */}
          {orbitItems.map(({ label, angle }) => {
            const radians = (angle * Math.PI) / 180;
            return (
              <span
                key={label}
                className="orbit-label"
                style={{
                  "--x": round(Math.cos(radians)),
                  "--y": round(Math.sin(radians)),
                }}
              >
                {label}
              </span>
            );
          })}
        </div>
      </div>
    </section>
  );
};
