import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const STACK = [
  {
    name: "Frontend",
    desc: "Interfaces users interact with",
    items: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
    color: "#6366f1",
    glow: "rgba(99,102,241,0.18)",
    border: "rgba(99,102,241,0.25)",
    bg: "rgba(99,102,241,0.06)",
  },
  {
    name: "Backend",
    desc: "APIs, services, and data layers",
    items: ["Node.js", "Python", "FastAPI", "PostgreSQL"],
    color: "#10b981",
    glow: "rgba(16,185,129,0.14)",
    border: "rgba(16,185,129,0.22)",
    bg: "rgba(16,185,129,0.05)",
  },
  {
    name: "AI & Automation",
    desc: "Intelligence embedded in your product",
    items: ["OpenAI", "Anthropic Claude", "LangChain", "Pinecone"],
    color: "#a855f7",
    glow: "rgba(168,85,247,0.18)",
    border: "rgba(168,85,247,0.25)",
    bg: "rgba(168,85,247,0.06)",
  },
  {
    name: "Infrastructure",
    desc: "Deployment, scaling, and monitoring",
    items: ["Vercel", "AWS", "Supabase", "Docker"],
    color: "#f59e0b",
    glow: "rgba(245,158,11,0.14)",
    border: "rgba(245,158,11,0.22)",
    bg: "rgba(245,158,11,0.05)",
  },
  {
    name: "Mobile",
    desc: "Cross-platform native applications",
    items: ["React Native", "Expo"],
    color: "#06b6d4",
    glow: "rgba(6,182,212,0.14)",
    border: "rgba(6,182,212,0.22)",
    bg: "rgba(6,182,212,0.05)",
  },
];

export default function TechStackSection() {
  const ref = useScrollReveal<HTMLDivElement>();

  return (
    <section
      id="tech-stack"
      style={{
        background: "var(--bg2)",
        borderTop: "1px solid var(--b)",
        padding: "70px 6vw",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>

        {/* Header row */}
        <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", flexWrap: "wrap", gap: 16, marginBottom: 36 }}>
          <div>
            <div className="gt3" style={{ fontFamily: "var(--mono)", fontSize: 11, letterSpacing: "0.1em", marginBottom: 10 }}>
              Tech Stack
            </div>
            <h2 className="font-display" style={{ fontSize: "clamp(26px, 3.5vw, 44px)", fontWeight: 700, letterSpacing: "-1.2px", lineHeight: 1.08, color: "var(--text)", margin: 0 }}>
              Technologies We Work With
            </h2>
          </div>
          <p style={{ fontSize: 14, color: "var(--text2)", maxWidth: 320, lineHeight: 1.6, fontWeight: 400, margin: 0 }}>
            We recommend the right stack for your project — not what we're most comfortable with.
          </p>
        </div>

        {/* Top row — 3 primary categories */}
        <div
          ref={ref}
          className="rev max-nav:!grid-cols-1"
          style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 12, marginBottom: 12 }}
        >
          {STACK.slice(0, 3).map((cat, i) => (
            <div
              key={cat.name}
              className="glass-card"
              style={{
                borderRadius: 10,
                padding: "24px 22px",
                position: "relative",
                overflow: "hidden",
                transitionDelay: `${i * 0.08}s`,
              }}
            >
              {/* Colored top bar */}
              <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 2, background: cat.color, boxShadow: `0 0 10px ${cat.glow}` }} />

              {/* Category header */}
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 6 }}>
                <div style={{ width: 8, height: 8, borderRadius: "50%", background: cat.color, boxShadow: `0 0 8px ${cat.glow}`, flexShrink: 0 }} />
                <span style={{ fontFamily: "var(--mono)", fontSize: 11, fontWeight: 700, color: cat.color, letterSpacing: "0.08em", textTransform: "uppercase" }}>
                  {cat.name}
                </span>
              </div>
              <p style={{ fontSize: 12, color: "var(--text3)", fontWeight: 400, marginBottom: 18, marginLeft: 18 }}>
                {cat.desc}
              </p>

              {/* Tech items */}
              <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                {cat.items.map((item) => (
                  <span
                    key={item}
                    style={{
                      fontSize: 12,
                      fontWeight: 500,
                      color: "var(--text)",
                      background: cat.bg,
                      border: `1px solid ${cat.border}`,
                      borderRadius: 5,
                      padding: "4px 10px",
                      fontFamily: "var(--mono)",
                      letterSpacing: "0.02em",
                    }}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom row — 2 secondary categories */}
        <div
          className="max-nav:!grid-cols-1"
          style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 12 }}
        >
          {STACK.slice(3).map((cat, i) => (
            <div
              key={cat.name}
              className="glass-card"
              style={{
                borderRadius: 10,
                padding: "22px 22px",
                position: "relative",
                overflow: "hidden",
                transitionDelay: `${(i + 3) * 0.08}s`,
              }}
            >
              <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 2, background: cat.color, boxShadow: `0 0 10px ${cat.glow}` }} />

              <div style={{ display: "flex", alignItems: "center", gap: 24, flexWrap: "wrap" }}>
                <div style={{ minWidth: 160 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 4 }}>
                    <div style={{ width: 8, height: 8, borderRadius: "50%", background: cat.color, boxShadow: `0 0 8px ${cat.glow}`, flexShrink: 0 }} />
                    <span style={{ fontFamily: "var(--mono)", fontSize: 11, fontWeight: 700, color: cat.color, letterSpacing: "0.08em", textTransform: "uppercase" }}>
                      {cat.name}
                    </span>
                  </div>
                  <p style={{ fontSize: 12, color: "var(--text3)", fontWeight: 400, margin: 0, marginLeft: 16 }}>
                    {cat.desc}
                  </p>
                </div>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                  {cat.items.map((item) => (
                    <span
                      key={item}
                      style={{
                        fontSize: 12,
                        fontWeight: 500,
                        color: "var(--text)",
                        background: cat.bg,
                        border: `1px solid ${cat.border}`,
                        borderRadius: 5,
                        padding: "4px 10px",
                        fontFamily: "var(--mono)",
                        letterSpacing: "0.02em",
                      }}
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer note */}
        <p style={{ fontSize: 12, color: "var(--text3)", fontFamily: "var(--mono)", textAlign: "center", marginTop: 20, letterSpacing: "0.04em" }}>
          Stack is project-dependent. We'll recommend what's right — not what's familiar.
        </p>
      </div>
    </section>
  );
}
