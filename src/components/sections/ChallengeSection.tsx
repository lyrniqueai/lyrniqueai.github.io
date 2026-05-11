import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const PAIN_POINTS = [
  "Weeks pass before there is anything real to evaluate",
  "Budget goes into coordination before product proof",
  "Ownership gets split across too many handoffs",
  "Early shortcuts make the next version harder",
];

export default function ChallengeSection() {
  const ref = useScrollReveal<HTMLDivElement>();

  return (
    <section
      id="challenge"
      style={{
        background: "var(--bg2)",
        borderTop: "1px solid var(--b)",
        padding: "70px 6vw",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div className="section-grid" />
      <div style={{ maxWidth: 1100, margin: "0 auto", position: "relative", zIndex: 1 }}>
        <div
          ref={ref}
          className="rev max-nav:!grid-cols-1"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 72,
            alignItems: "start",
          }}
        >
          <div>
            <div className="gt3" style={{ fontFamily: "var(--mono)", fontSize: 11, letterSpacing: "0.1em", marginBottom: 10 }}>
              The Challenge
            </div>
            <h2 className="font-display" style={{ fontSize: "clamp(26px, 3.5vw, 42px)", fontWeight: 700, letterSpacing: "-1.2px", lineHeight: 1.1, color: "var(--text)", marginBottom: 20 }}>
              Execution Usually Fails Before the Product Does
            </h2>
            <p style={{ fontSize: 15, color: "var(--text2)", lineHeight: 1.75, fontWeight: 400, marginBottom: 28 }}>
              When the direction is clear, the risk is often the build process itself:
            </p>
            <ul style={{ listStyle: "none", padding: 0, margin: "0 0 28px" }}>
              {PAIN_POINTS.map((p) => (
                <li
                  key={p}
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: 12,
                    padding: "10px 0",
                    borderBottom: "1px solid var(--b)",
                    fontSize: 14,
                    color: "var(--text2)",
                    lineHeight: 1.5,
                    fontWeight: 400,
                  }}
                >
                  <span style={{ color: "#a5b4fc", flexShrink: 0, marginTop: 3, fontSize: 12 }}>•</span>
                  {p}
                </li>
              ))}
            </ul>
            <p style={{ fontSize: 15, color: "var(--text2)", lineHeight: 1.75, fontWeight: 400 }}>
              By the time the first version lands, the original opportunity can already feel stale.
            </p>
          </div>

          <div style={{ paddingTop: 8 }}>
            <div
              className="artifact-panel"
              style={{
                borderRadius: 12,
                padding: "32px 28px",
                position: "relative",
                overflow: "hidden",
              }}
            >
              <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 1, background: "var(--g3)" }} />
              <div className="gt3" style={{ fontFamily: "var(--mono)", fontSize: 10, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 16 }}>
                What you need
              </div>
              <p style={{ fontSize: 15, color: "var(--text)", fontWeight: 500, lineHeight: 1.7, marginBottom: 0 }}>
                A small senior team that can clarify scope, make the right technical calls, and leave your team with software it can actually own.
              </p>
            </div>

            <a
              href="#differentiator"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                marginTop: 24,
                fontFamily: "var(--mono)",
                fontSize: 12,
                textDecoration: "none",
                transition: "gap 0.2s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.gap = "12px")}
              onMouseLeave={(e) => (e.currentTarget.style.gap = "8px")}
            >
              <span className="gt3" style={{ fontWeight: 600 }}>See how we solve this →</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
