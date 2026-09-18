import { RevealOnScroll } from "../RevealOnScroll";

const tools = [
  { name: "React", size: "1.15rem", weight: 700 },
  { name: "Next.js", size: "0.92rem", weight: 600 },
  { name: "Tailwind CSS", size: "1rem", weight: 700 },
  { name: "JavaScript", size: "0.82rem", weight: 500 },
  { name: "HTML / CSS", size: "0.72rem", weight: 500 },
  { name: "GitHub", size: "0.9rem", weight: 600 },
  { name: "Responsive Design", size: "0.78rem", weight: 500 },
  { name: "Git", size: "0.68rem", weight: 500 },
  { name: "REST APIs", size: "0.72rem", weight: 500 },
  { name: "Shopify", size: "1rem", weight: 700 },
  { name: "Liquid", size: "0.78rem", weight: 600 },
  { name: "Cloudinary", size: "0.68rem", weight: 500 },
  { name: "Vercel", size: "0.72rem", weight: 500 },
  { name: "WordPress", size: "0.92rem", weight: 600 },
  { name: "Squarespace", size: "0.7rem", weight: 500 },
  { name: "Node.js", size: "0.82rem", weight: 600 },
  { name: "PHP", size: "0.68rem", weight: 500 },
  { name: "Socket.io", size: "0.7rem", weight: 500 },
  { name: "Figma", size: "0.82rem", weight: 600 },
];

export const About = () => {
  return (
    <section
      id="about"
      className="px-6 sm:px-8 md:px-16 py-14 md:py-16 overflow-hidden"
      style={{ backgroundColor: "var(--cream)" }}
    >
      <div className="max-w-6xl mx-auto">
        <RevealOnScroll>
          {/* =========================================
              TOP LABEL
          ========================================= */}
          <div
            className="flex items-center justify-between gap-4 pb-4"
            style={{
              borderBottom: "1px solid var(--border)",
            }}
          >
            <span className="section-label">About</span>

            <span
              className="hidden sm:block font-mono-dm uppercase"
              style={{
                fontSize: "0.52rem",
                letterSpacing: "0.16em",
                color: "var(--light-ink)",
              }}
            >
              Developer · Explorer · Always Curious
            </span>
          </div>

          {/* =========================================
              HERO COMPOSITION
          ========================================= */}
          <div
            className="
              relative
              grid
              grid-cols-1
              lg:grid-cols-[1.12fr_0.88fr]
              gap-8
              lg:gap-16
              pt-8
              pb-9
            "
          >
            {/* LEFT — TYPOGRAPHIC HEADLINE */}
            <div className="relative">
              {/* Top micro labels */}
              <div className="flex items-center justify-between gap-6 mb-5">
                <span
                  className="font-mono-dm uppercase"
                  style={{
                    fontSize: "0.55rem",
                    letterSpacing: "0.18em",
                    color: "var(--rust)",
                  }}
                >
                  Create · Explore · Repeat
                </span>

                <span
                  className="font-mono-dm uppercase"
                  style={{
                    fontSize: "0.5rem",
                    letterSpacing: "0.12em",
                    color: "var(--light-ink)",
                  }}
                >
                  {"// always"}
                </span>
              </div>

              {/* Main word */}
              <h2
                className="font-playfair"
                style={{
                  fontSize: "clamp(4rem, 8vw, 7rem)",
                  lineHeight: 0.82,
                  letterSpacing: "-0.055em",
                  color: "var(--ink)",
                  fontWeight: 700,
                }}
              >
                BECOMING
              </h2>

              {/* Supporting phrase */}
              <div className="mt-5 ml-6 sm:ml-16">
                <span
                  className="font-playfair"
                  style={{
                    fontSize: "clamp(1.4rem, 3vw, 2.2rem)",
                    color: "var(--light-ink)",
                  }}
                >
                  always learning,
                </span>

                <div className="ml-8 sm:ml-20 -mt-1">
                  <span
                    className="font-playfair"
                    style={{
                      fontSize: "clamp(1.25rem, 2.7vw, 2rem)",
                      color: "var(--light-ink)",
                    }}
                  >
                    never done{" "}
                  </span>

                  <em
                    className="font-playfair"
                    style={{
                      fontSize: "clamp(1.5rem, 3vw, 2.3rem)",
                      color: "var(--rust)",
                    }}
                  >
                    growing.
                  </em>
                </div>
              </div>
            </div>

            {/* RIGHT — NOTE ON CRAFT */}
            <div className="lg:pt-2">
              <div
                className="relative px-6 py-5"
                style={{
                  backgroundColor: "var(--paper)",
                  borderLeft: "3px solid var(--rust)",
                }}
              >
                <span
                  className="font-mono-dm uppercase block mb-3"
                  style={{
                    fontSize: "0.55rem",
                    letterSpacing: "0.16em",
                    color: "var(--rust)",
                  }}
                >
                  A Note on Craft
                </span>

                <blockquote
                  className="font-playfair"
                  style={{
                    fontSize: "clamp(1.05rem, 2vw, 1.35rem)",
                    lineHeight: 1.5,
                    fontStyle: "italic",
                    color: "var(--ink)",
                  }}
                >
                  “Great software and great food both start the same way: an
                  idea, a set of constraints, and the willingness to iterate
                  until it sings.”
                </blockquote>

                <cite
                  className="font-mono-dm block mt-3"
                  style={{
                    fontSize: "0.52rem",
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    color: "var(--light-ink)",
                    fontStyle: "normal",
                  }}
                >
                  — Danielle's dev philosophy
                </cite>
              </div>
            </div>
          </div>

          {/* =========================================
              BIO / CRAFT COMPOSITION
          ========================================= */}
          <div
            className="
              relative
              grid
              grid-cols-1
              lg:grid-cols-[0.22fr_0.78fr]
              gap-5
              lg:gap-10
              py-8
            "
            style={{
              borderTop: "1px solid var(--border)",
            }}
          >
            {/* Margin annotation */}
            <div>
              <span
                className="font-mono-dm uppercase"
                style={{
                  fontSize: "0.55rem",
                  letterSpacing: "0.16em",
                  color: "var(--rust)",
                }}
              >
                Frontend →
              </span>
            </div>

            {/* Bio */}
            <div className="relative">
              {/* Giant background word */}
              <div
                className="
                  absolute
                  hidden
                  md:block
                  pointer-events-none
                  select-none
                  -top-7
                  right-0
                  font-playfair
                "
                aria-hidden="true"
                style={{
                  fontSize: "clamp(5rem, 10vw, 9rem)",
                  fontWeight: 700,
                  letterSpacing: "-0.04em",
                  color: "var(--ink)",
                  opacity: 0.035,
                  lineHeight: 1,
                }}
              >
                CRAFT
              </div>

              {/* Bio paragraphs */}
              <div
                className="
                  relative
                  z-10
                  grid
                  grid-cols-1
                  md:grid-cols-3
                  gap-5
                  md:gap-7
                "
              >
                <p
                  className="leading-relaxed"
                  style={{
                    color: "var(--light-ink)",
                    fontSize: "0.9rem",
                  }}
                >
                  I'm a{" "}
                  <strong
                    style={{
                      color: "var(--ink)",
                      fontWeight: 500,
                    }}
                  >
                    frontend developer
                  </strong>{" "}
                  specializing in{" "}
                  <strong
                    style={{
                      color: "var(--ink)",
                      fontWeight: 500,
                    }}
                  >
                    React, Tailwind CSS, and responsive design
                  </strong>
                  . I thrive in collaborative workflows and love building
                  things that are precise, accessible, and when it counts —
                  beautiful.
                </p>

                <p
                  className="leading-relaxed"
                  style={{
                    color: "var(--light-ink)",
                    fontSize: "0.9rem",
                  }}
                >
                  The same obsession with craft that makes me debug a
                  misaligned layout is what sends me across town to try a new
                  spot someone mentioned once in passing.
                </p>

                <p
                  className="leading-relaxed"
                  style={{
                    color: "var(--light-ink)",
                    fontSize: "0.9rem",
                  }}
                >
                  Whether it's a complex UI component or a plate of{" "}
                  <strong
                    style={{
                      color: "var(--ink)",
                      fontWeight: 500,
                    }}
                  >
                    Kansas City BBQ
                  </strong>
                  , the best experiences come from people who care deeply
                  about what they're making.
                </p>
              </div>

              {/* Small annotations */}
              <div className="flex flex-wrap items-center gap-x-6 gap-y-2 mt-5">
                <span
                  className="font-mono-dm"
                  style={{
                    fontSize: "0.5rem",
                    letterSpacing: "0.1em",
                    color: "var(--rust)",
                  }}
                >
                  PRECISION ↗
                </span>

                <span
                  className="font-mono-dm"
                  style={{
                    fontSize: "0.5rem",
                    letterSpacing: "0.1em",
                    color: "var(--gold)",
                  }}
                >
                  CURIOSITY ↗
                </span>

                <span
                  className="font-mono-dm"
                  style={{
                    fontSize: "0.5rem",
                    letterSpacing: "0.1em",
                    color: "var(--rust)",
                  }}
                >
                  EXPERIENCE ↗
                </span>
              </div>
            </div>
          </div>

          {/* =========================================
              TECH CLOUD
          ========================================= */}
          <div
            className="py-7"
            style={{
              borderTop: "1px solid var(--border)",
            }}
          >
            <div className="flex items-center justify-between gap-4 mb-5">
              <span
                className="font-mono-dm uppercase"
                style={{
                  fontSize: "0.55rem",
                  letterSpacing: "0.16em",
                  color: "var(--rust)",
                }}
              >
                {"{ tools I reach for }"}
              </span>

              <span
                className="font-mono-dm"
                style={{
                  fontSize: "0.5rem",
                  letterSpacing: "0.1em",
                  color: "var(--light-ink)",
                }}
              >
                19 / AND GROWING
              </span>
            </div>

            <div
              className="
                flex
                flex-wrap
                items-baseline
                justify-center
                gap-x-7
                gap-y-3
                px-2
                sm:px-8
                md:px-14
                py-5
              "
              style={{
                backgroundColor: "var(--paper)",
                border: "1px solid var(--border)",
              }}
            >
              {tools.map((tool, index) => (
                <span
                  key={tool.name}
                  className="
                    font-mono-dm
                    transition-transform
                    duration-200
                    hover:-translate-y-1
                  "
                  style={{
                    fontSize: tool.size,
                    fontWeight: tool.weight,
                    letterSpacing: "0.03em",
                    color:
                      index === 0 ||
                      index === 2 ||
                      index === 9 ||
                      index === 13
                        ? "var(--rust)"
                        : "var(--ink)",
                  }}
                >
                  {tool.name}
                </span>
              ))}
            </div>
          </div>

          {/* =========================================
              EDUCATION / CURRENT PATH
          ========================================= */}
          <div
            className="
              grid
              grid-cols-1
              md:grid-cols-3
              gap-8
              md:gap-10
              pt-7
            "
            style={{
              borderTop: "1px solid var(--border)",
            }}
          >
            {/* UDACITY */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span
                  className="w-1.5 h-1.5 rounded-full"
                  style={{
                    backgroundColor: "var(--rust)",
                  }}
                />

                <span
                  className="font-mono-dm"
                  style={{
                    fontSize: "0.55rem",
                    letterSpacing: "0.12em",
                    color: "var(--rust)",
                  }}
                >
                  2024 / UDACITY
                </span>
              </div>

              <p
                className="font-playfair"
                style={{
                  fontSize: "1.05rem",
                  color: "var(--ink)",
                }}
              >
                Front-End Web Developer Nanodegree
              </p>

              <p
                className="text-xs mt-1 leading-relaxed"
                style={{
                  color: "var(--light-ink)",
                }}
              >
                HTML5, CSS3, JavaScript, React, responsive design
              </p>
            </div>

            {/* JCCC */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span
                  className="w-1.5 h-1.5 rounded-full"
                  style={{
                    backgroundColor: "var(--rust)",
                  }}
                />

                <span
                  className="font-mono-dm"
                  style={{
                    fontSize: "0.55rem",
                    letterSpacing: "0.12em",
                    color: "var(--rust)",
                  }}
                >
                  2024 / JCCC
                </span>
              </div>

              <p
                className="font-playfair"
                style={{
                  fontSize: "1.05rem",
                  color: "var(--ink)",
                }}
              >
                Full Stack Web Development Certificate
              </p>

              <p
                className="text-xs mt-1 leading-relaxed"
                style={{
                  color: "var(--light-ink)",
                }}
              >
                Front-end, back-end, databases, APIs
              </p>
            </div>

            {/* CYBERSECURITY */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span
                  className="font-mono-dm mr-1"
                  style={{
                    fontSize: "0.65rem",
                    color: "var(--gold)",
                  }}
                >
                  →
                </span>

                <span
                  className="w-1.5 h-1.5 rounded-full"
                  style={{
                    backgroundColor: "var(--gold)",
                  }}
                />

                <span
                  className="font-mono-dm"
                  style={{
                    fontSize: "0.55rem",
                    letterSpacing: "0.12em",
                    color: "var(--rust)",
                  }}
                >
                  2026 / EXPLORING
                </span>
              </div>

              <p
                className="font-playfair"
                style={{
                  fontSize: "1.05rem",
                  color: "var(--ink)",
                }}
              >
                Expanding into Cybersecurity
              </p>

              <p
                className="text-xs mt-1 leading-relaxed"
                style={{
                  color: "var(--light-ink)",
                }}
              >
                Channeling a builder's eye for detail into breaking and
                defending systems — studying network security, secure coding,
                threat analysis, and Linux fundamentals.
              </p>
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
};