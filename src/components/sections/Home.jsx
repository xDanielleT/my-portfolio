export const Home = () => {
  const orbitItems = [
    { label: "React · Next.js",   style: { top: "-175px", left: "-75px"  } },
    { label: "Soul Food",  style: { top: "-85px",  left: "105px"  } },
    { label: "Tailwind CSS",       style: { top: "80px",   left: "120px"  } },
    { label: "Street tacos",       style: { top: "148px",  left: "-65px"  } },
    { label: "GitHub · DevOps",    style: { top: "38px",   left: "-195px" } },
    { label: "Korean BBQ",         style: { top: "-112px", left: "-170px" } },
  ];

  return (
    <section
      id="home"
      className="min-h-screen grid md:grid-cols-2 pt-16"
      style={{ backgroundColor: "var(--paper)" }}
    >
      {/* ── Left: text ── */}
      <div className="flex flex-col justify-center px-8 md:px-16 py-20">
        <span className="section-label afu-1">Web Developer</span>

        <h1
          className="font-playfair afu-2"
          style={{
            fontSize: "clamp(3rem, 6vw, 5rem)",
            lineHeight: 1.05,
            fontWeight: 700,
            color: "var(--ink)",
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
          style={{ fontSize: "1.05rem", color: "var(--light-ink)" }}
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

        <div className="afu-4 flex flex-wrap gap-3 mt-8">
          <a href="#projects" className="btn-filled">View my work</a>
          <a href="#contact"  className="btn-outline">Let's connect</a>
        </div>
      </div>

      {/* ── Right: dark visual ── */}
      <div
        className="relative flex items-center justify-center min-h-64 md:min-h-0 overflow-hidden"
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
        <div className="relative" style={{ width: 300, height: 300 }}>
          <div className="orbit-ring" />

          {/* center text */}
          <div
            className="absolute inset-0 flex flex-col items-center justify-center text-center px-6"
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
                fontSize: "1.15rem",
                fontStyle: "italic",
                color: "rgba(248,244,238,0.85)",
                lineHeight: 1.6,
              }}
            >
              Clean code<br />&amp; bold flavors
            </p>
          </div>

          {/* orbit labels */}
          {orbitItems.map(({ label, style }) => (
            <span
              key={label}
              className="font-mono-dm absolute whitespace-nowrap"
              style={{
                fontSize: "0.62rem",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                color: "rgba(255,255,255,0.45)",
                top: "50%",
                left: "50%",
                transform: "translate(-50%,-50%)",
                marginTop: style.top,
                marginLeft: style.left,
              }}
            >
              {label}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};