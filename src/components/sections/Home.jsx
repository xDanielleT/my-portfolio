export const Home = () => {
  // All six labels sit on the ring itself: each is placed at radius 150 (the
  // ring's radius) at its own angle. The orbit stage scales these offsets down
  // on narrow screens via --orbit-scale so nothing gets clipped.
  const orbitItems = [
    { label: "React · Next.js",  x: -59,  y: -138 },
    { label: "Soul Food",        x: 117,  y: -94  },
    { label: "Tailwind CSS",     x: 125,  y: 83   },
    { label: "Street tacos",     x: -60,  y: 137  },
    { label: "GitHub · DevOps",  x: -132, y: 70   },
    { label: "Korean BBQ",       x: -125, y: -83  },
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
        className="relative flex items-center justify-center min-h-[360px] md:min-h-0 overflow-hidden"
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
        <div className="orbit-stage">
          <div className="orbit-ring" />

          {/* center text */}
          <div
            className="orbit-center absolute inset-0 flex flex-col items-center justify-center text-center"
            style={{ zIndex: 2 }}
          >
            <span
              className="orbit-eyebrow font-mono-dm block"
              style={{
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "var(--rust)",
              }}
            >
              Things I enjoy
            </span>
            <p
              className="orbit-title font-playfair"
              style={{
                fontStyle: "italic",
                color: "rgba(248,244,238,0.85)",
              }}
            >
              Clean code<br />&amp; bold flavors
            </p>
          </div>

          {/* orbit labels */}
          {orbitItems.map(({ label, x, y }) => (
            <span
              key={label}
              className="orbit-label font-mono-dm absolute whitespace-nowrap"
              style={{
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                color: "rgba(255,255,255,0.45)",
                top: "50%",
                left: "50%",
                transform: "translate(-50%,-50%)",
                marginTop: `calc(${y}px * var(--orbit-scale))`,
                marginLeft: `calc(${x}px * var(--orbit-scale))`,
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