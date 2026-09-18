export const Home = () => {
  const nodes = [
    {
      label: "React",
      type: "tech",
      x: 50,
      y: 8,
    },
    {
      label: "Soul Food",
      type: "food",
      x: 78,
      y: 23,
    },
    {
      label: "Continuous Learning",
      type: "curiosity",
      x: 88,
      y: 52,
    },
    {
      label: "GitHub",
      type: "tech",
      x: 67,
      y: 82,
    },
    {
      label: "Korean BBQ",
      type: "food",
      x: 32,
      y: 86,
    },
    {
      label: "Next.js",
      type: "tech",
      x: 10,
      y: 64,
    },
    {
      label: "Street Tacos",
      type: "food",
      x: 13,
      y: 32,
    },
  ];

  // Main connections around the constellation
  const mainConnections = [
    [0, 1],
    [1, 2],
    [2, 3],
    [3, 4],
    [4, 5],
    [5, 6],
    [6, 0],
  ];

  // Secondary connections across the constellation
  const crossConnections = [
    [0, 3],
    [1, 5],
    [3, 6],
  ];

  const getNodeColor = (type) => {
    if (type === "food") {
      return "var(--gold)";
    }

    return "var(--rust)";
  };

  return (
    <section
      id="home"
      className="pt-16"
      style={{
        backgroundColor: "var(--paper)",
      }}
    >
      {/* ==================================================
          HERO CONTAINER
      ================================================== */}

      <div
        className="
          max-w-[1200px]
          mx-auto
          px-6
          sm:px-8
          lg:px-12
          pt-8
          pb-10
          md:pt-10
          md:pb-12
        "
      >
        <div
          className="
            grid
            grid-cols-1
            lg:grid-cols-[0.95fr_1.05fr]
            gap-10
            lg:gap-16
            items-start
          "
        >
          {/* ==================================================
              LEFT — INTRO
          ================================================== */}

          <div className="relative z-10">
            <span className="section-label afu-1">
              Web Developer
            </span>

            <h1
              className="font-playfair afu-2 mt-3"
              style={{
                fontSize: "clamp(3rem, 5vw, 5rem)",
                lineHeight: 0.98,
                fontWeight: 700,
                color: "var(--ink)",
              }}
            >
              I build
              <br />
              things.
              <br />

              I find joy
              <br />

              <em
                style={{
                  fontStyle: "italic",
                  color: "var(--rust)",
                  fontWeight: 600,
                }}
              >
                everywhere.
              </em>
            </h1>

            <p
              className="
                afu-3
                mt-7
                leading-relaxed
                max-w-[500px]
              "
              style={{
                fontSize: "clamp(0.95rem, 1.5vw, 1.05rem)",
                color: "var(--light-ink)",
              }}
            >
              <strong
                style={{
                  color: "var(--ink)",
                  fontWeight: 500,
                }}
              >
                Frontend developer
              </strong>{" "}
              specializing in React, Tailwind CSS &amp; responsive design,
              driven by the same curiosity that takes me to new restaurants.
              Code and cuisine, same philosophy:{" "}
              <strong
                style={{
                  color: "var(--ink)",
                  fontWeight: 500,
                }}
              >
                the details make it unforgettable.
              </strong>
            </p>

            {/* Buttons */}

            <div className="afu-4 flex flex-wrap gap-3 mt-8">
              <a href="#projects" className="btn-filled">
                View my work
              </a>

              <a href="#contact" className="btn-outline">
                Let's connect
              </a>
            </div>
          </div>

          {/* ==================================================
              RIGHT — CONSTELLATION AREA
          ================================================== */}

          <div
            className="
              relative
              w-full
              max-w-[580px]
              mx-auto
              lg:ml-auto
            "
          >
            {/* ==================================================
                RIGHT HEADING

                This now sits OUTSIDE the cream panel so
                CODE × CUISINE aligns with WEB DEVELOPER.
            ================================================== */}

            <div
              className="
                flex
                items-center
                justify-between
                gap-4
                mb-3
              "
            >
              <span
                className="font-mono-dm uppercase"
                style={{
                  fontSize: "0.7rem",
                  letterSpacing: "0.18em",
                  color: "var(--rust)",
                  fontWeight: 600,
                }}
              >
                Code × Cuisine
              </span>

              <span
                className="font-mono-dm uppercase"
                style={{
                  fontSize: "0.62rem",
                  letterSpacing: "0.14em",
                  color: "var(--light-ink)",
                  fontWeight: 500,
                }}
              >
                Things I Enjoy
              </span>
            </div>

            {/* ==================================================
                CREAM CONSTELLATION PANEL
            ================================================== */}

            <div
              className="
                px-5
                sm:px-7
                py-5
                sm:py-6
              "
              style={{
                backgroundColor: "var(--cream)",
                border: "1px solid var(--border)",
              }}
            >
              {/* ==================================================
                  CONSTELLATION
              ================================================== */}

              <div
                className="
                  relative
                  w-full
                  aspect-square
                  max-h-[500px]
                "
              >
                {/* Outer circle */}

                <div
                  className="absolute rounded-full"
                  style={{
                    width: "78%",
                    height: "78%",
                    left: "11%",
                    top: "11%",
                    border: "1px solid rgba(92,82,74,0.38)",
                  }}
                />

                {/* Inner circle */}

                <div
                  className="absolute rounded-full"
                  style={{
                    width: "48%",
                    height: "48%",
                    left: "26%",
                    top: "26%",
                    border: "1px dashed rgba(92,82,74,0.32)",
                  }}
                />

                {/* ==================================================
                    CONNECTOR LINES
                ================================================== */}

                <svg
                  className="
                    absolute
                    inset-0
                    w-full
                    h-full
                    pointer-events-none
                  "
                  viewBox="0 0 100 100"
                  preserveAspectRatio="none"
                  aria-hidden="true"
                >
                  {/* Main connections */}

                  {mainConnections.map(
                    ([startIndex, endIndex], index) => {
                      const start = nodes[startIndex];
                      const end = nodes[endIndex];

                      return (
                        <line
                          key={`main-${index}`}
                          x1={start.x}
                          y1={start.y}
                          x2={end.x}
                          y2={end.y}
                          stroke="var(--light-ink)"
                          strokeWidth="1"
                          vectorEffect="non-scaling-stroke"
                          opacity="0.58"
                        />
                      );
                    }
                  )}

                  {/* Cross connections */}

                  {crossConnections.map(
                    ([startIndex, endIndex], index) => {
                      const start = nodes[startIndex];
                      const end = nodes[endIndex];

                      return (
                        <line
                          key={`cross-${index}`}
                          x1={start.x}
                          y1={start.y}
                          x2={end.x}
                          y2={end.y}
                          stroke="var(--rust)"
                          strokeWidth="0.8"
                          strokeDasharray="3 3"
                          vectorEffect="non-scaling-stroke"
                          opacity="0.5"
                        />
                      );
                    }
                  )}
                </svg>

                {/* ==================================================
                    CENTER
                ================================================== */}

                <div
                  className="
                    absolute
                    left-1/2
                    top-1/2
                    -translate-x-1/2
                    -translate-y-1/2
                    text-center
                    z-10
                    w-[200px]
                    sm:w-[230px]
                  "
                >
                  {/* Center node */}

                  <div
                    className="
                      mx-auto
                      mb-4
                      w-3
                      h-3
                      rounded-full
                    "
                    style={{
                      backgroundColor: "var(--rust)",
                      boxShadow:
                        "0 0 0 8px rgba(47,107,79,0.12)",
                    }}
                  />

                  <span
                    className="
                      font-mono-dm
                      uppercase
                      block
                    "
                    style={{
                      fontSize: "0.62rem",
                      letterSpacing: "0.16em",
                      color: "var(--rust)",
                      fontWeight: 600,
                    }}
                  >
                    Curiosity connects it all
                  </span>

                  <p
                    className="
                      font-playfair
                      italic
                      mt-3
                    "
                    style={{
                      fontSize:
                        "clamp(1.25rem, 2vw, 1.6rem)",
                      lineHeight: 1.25,
                      color: "var(--ink)",
                    }}
                  >
                    Clean code
                    <br />
                    &amp; bold flavors
                  </p>
                </div>

                {/* ==================================================
                    NODES
                ================================================== */}

                {nodes.map((node) => {
                  const nodeColor = getNodeColor(node.type);

                  return (
                    <div
                      key={node.label}
                      className="absolute z-20"
                      style={{
                        left: `${node.x}%`,
                        top: `${node.y}%`,
                        transform:
                          "translate(-50%, -50%)",
                      }}
                    >
                      <div
                        className="
                          flex
                          flex-col
                          items-center
                          text-center
                        "
                      >
                        {/* TECH */}

                        {node.type === "tech" && (
                          <div
                            className="
                              rounded-full
                              w-[11px]
                              h-[11px]
                            "
                            style={{
                              backgroundColor: nodeColor,
                              boxShadow:
                                "0 0 0 6px rgba(47,107,79,0.10)",
                            }}
                          />
                        )}

                        {/* FOOD */}

                        {node.type === "food" && (
                          <div
                            className="
                              rounded-full
                              w-[10px]
                              h-[10px]
                            "
                            style={{
                              backgroundColor: nodeColor,
                            }}
                          />
                        )}

                        {/* CURIOSITY */}

                        {node.type === "curiosity" && (
                          <div
                            className="
                              flex
                              items-center
                              justify-center
                              rounded-full
                              w-[20px]
                              h-[20px]
                            "
                            style={{
                              border:
                                "2px solid var(--rust)",
                              backgroundColor:
                                "var(--cream)",
                            }}
                          >
                            <span
                              className="
                                block
                                rounded-full
                                w-[6px]
                                h-[6px]
                              "
                              style={{
                                backgroundColor:
                                  "var(--rust)",
                              }}
                            />
                          </div>
                        )}

                        {/* Node name */}

                        <span
                          className="
                            font-mono-dm
                            uppercase
                            whitespace-nowrap
                            mt-2
                          "
                          style={{
                            fontSize:
                              "clamp(0.62rem, 1vw, 0.72rem)",
                            letterSpacing: "0.08em",
                            color: "var(--ink)",
                            fontWeight: 600,
                          }}
                        >
                          {node.label}
                        </span>

                        {/* Node category */}

                        <span
                          className="
                            font-mono-dm
                            uppercase
                            mt-1
                          "
                          style={{
                            fontSize: "0.6rem",
                            letterSpacing: "0.1em",
                            color: "var(--light-ink)",
                            fontWeight: 500,
                          }}
                        >
                          {node.type}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* ==================================================
                  LEGEND
              ================================================== */}

              <div
                className="
                  flex
                  flex-col
                  sm:flex-row
                  items-center
                  sm:justify-between
                  gap-4
                  pt-5
                  mt-3
                "
                style={{
                  borderTop: "1px solid var(--border)",
                }}
              >
                <div
                  className="
                    flex
                    flex-wrap
                    justify-center
                    items-center
                    gap-5
                  "
                >
                  {/* Tech */}

                  <div className="flex items-center gap-2">
                    <span
                      className="w-2 h-2 rounded-full"
                      style={{
                        backgroundColor: "var(--rust)",
                      }}
                    />

                    <span
                      className="font-mono-dm uppercase"
                      style={{
                        fontSize: "0.55rem",
                        letterSpacing: "0.12em",
                        color: "var(--light-ink)",
                        fontWeight: 500,
                      }}
                    >
                      Tech
                    </span>
                  </div>

                  {/* Food */}

                  <div className="flex items-center gap-2">
                    <span
                      className="w-2 h-2 rounded-full"
                      style={{
                        backgroundColor: "var(--gold)",
                      }}
                    />

                    <span
                      className="font-mono-dm uppercase"
                      style={{
                        fontSize: "0.55rem",
                        letterSpacing: "0.12em",
                        color: "var(--light-ink)",
                        fontWeight: 500,
                      }}
                    >
                      Food
                    </span>
                  </div>

                  {/* Curiosity */}

                  <div className="flex items-center gap-2">
                    <span
                      className="
                        flex
                        items-center
                        justify-center
                        w-3
                        h-3
                        rounded-full
                      "
                      style={{
                        border: "1px solid var(--rust)",
                      }}
                    >
                      <span
                        className="w-1 h-1 rounded-full"
                        style={{
                          backgroundColor: "var(--rust)",
                        }}
                      />
                    </span>

                    <span
                      className="font-mono-dm uppercase"
                      style={{
                        fontSize: "0.55rem",
                        letterSpacing: "0.12em",
                        color: "var(--light-ink)",
                        fontWeight: 500,
                      }}
                    >
                      Curiosity
                    </span>
                  </div>
                </div>

                <span
                  className="
                    font-mono-dm
                    uppercase
                    text-center
                  "
                  style={{
                    fontSize: "0.55rem",
                    letterSpacing: "0.12em",
                    color: "var(--light-ink)",
                    fontWeight: 500,
                  }}
                >
                   Exploring what's next
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};