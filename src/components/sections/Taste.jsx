import { RevealOnScroll } from "../RevealOnScroll";

const foods = [
  {
    icon: "🫙",
    type: "Current obsession",
    name: "Soul Food",
    note: "The communal nature of it. Everything designed to be shared, torn apart, and rebuilt. Great UX principle, honestly.",
  },
  {
    icon: "🌮",
    type: "Weekly must-have",
    name: "Authentic Street Tacos",
    note: "Three ingredients, done perfectly, beats a 20-ingredient mess every time. Same rule applies to clean CSS.",
  },
  {
    icon: "🔥",
    type: "The deep dive",
    name: "Korean BBQ",
    note: "Interactive, collaborative, and you're building something in real time. Sounds like good pair programming to me.",
  },
  {
    icon: "🫕",
    type: "Exploring next",
    name: "West African Cuisine",
    note: "Jollof rice is a whole debate. I'm doing the research. Thoroughly. Multiple sources required.",
  },
];

export const Taste = () => {
  return (
    <section
      id="taste"
      className="py-24 px-8 md:px-16"
      style={{ backgroundColor: "var(--ink)", color: "var(--paper)" }}
    >
      <div className="max-w-6xl mx-auto">
        <RevealOnScroll>
          <span
            className="section-label"
            style={{ color: "var(--gold)" }}
          >
            A side of me
          </span>
          <h2
            className="font-playfair mb-6"
            style={{
              fontSize: "clamp(2rem, 4vw, 2.8rem)",
              color: "var(--paper)",
              lineHeight: 1.1,
            }}
          >
            Beyond the terminal,<br />
            there's a table.
          </h2>
          <p
            className="mb-14 leading-relaxed max-w-xl"
            style={{ fontSize: "0.97rem", color: "rgba(248,244,238,0.6)" }}
          >
            I'm a foodie the same way I'm a developer curious, deliberate, always
            chasing the next thing that makes me think{" "}
            <em style={{ fontStyle: "italic", color: "rgba(248,244,238,0.85)" }}>
              "how did they do that?"
            </em>{" "}
            Here's what's on rotation.
          </p>
        </RevealOnScroll>

        {/* Food grid */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
          style={{ gap: "1px", backgroundColor: "rgba(255,255,255,0.08)" }}
        >
          {foods.map((f) => (
            <RevealOnScroll key={f.name}>
              <div className="food-card h-full">
                <span className="text-2xl mb-4 block">{f.icon}</span>
                <p
                  className="font-mono-dm mb-2"
                  style={{
                    fontSize: "0.62rem",
                    letterSpacing: "0.15em",
                    textTransform: "uppercase",
                    color: "var(--gold)",
                  }}
                >
                  {f.type}
                </p>
                <p
                  className="font-playfair mb-3"
                  style={{ fontSize: "1rem", color: "var(--paper)" }}
                >
                  {f.name}
                </p>
                <p
                  className="leading-relaxed"
                  style={{ fontSize: "0.82rem", color: "rgba(248,244,238,0.5)" }}
                >
                  {f.note}
                </p>
              </div>
            </RevealOnScroll>
          ))}
        </div>

        {/* Quote */}
        <RevealOnScroll>
          <div
            className="mt-14 p-8 max-w-2xl"
            style={{ border: "1px solid rgba(255,255,255,0.1)" }}
          >
            <p
              className="font-playfair leading-relaxed"
              style={{ fontStyle: "italic", fontSize: "1.15rem", color: "rgba(248,244,238,0.85)" }}
            >
              "The best developers I know treat their craft the way a chef treats
              a kitchen with total ownership, constant curiosity, and a
              zero-tolerance policy for mediocre output."
            </p>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
};