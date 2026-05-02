import GradientOrbs from "@/components/layout/GradientOrbs";

export default function CTABand() {
  return (
    <div
      style={{
        padding: "90px 6vw",
        background: "var(--bg)",
        borderTop: "1px solid var(--b)",
        textAlign: "center",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <GradientOrbs variant="cta" />
      <div style={{ position: "relative", zIndex: 1 }}>
        <div
          className="gt3"
          style={{
            fontFamily: "var(--mono)",
            fontSize: 11,
            letterSpacing: "0.1em",
            marginBottom: 10,
            display: "flex",
            justifyContent: "center",
          }}
        >
          Ready?
        </div>
        <h2
          className="font-display"
          style={{
            fontSize: "clamp(28px, 4vw, 48px)",
            fontWeight: 700,
            letterSpacing: "-1.2px",
            lineHeight: 1.08,
            color: "var(--text)",
            marginBottom: 10,
          }}
        >
          Tell us the problem.<br />
          <span className="gt">We'll scope the solution.</span>
        </h2>
        <p style={{ fontSize: 16, color: "var(--text2)", marginBottom: 6, fontWeight: 400, maxWidth: 560, margin: "0 auto 6px" }}>
          Limited projects per quarter. If you have a deadline, a competitor breathing down your neck, or an AI idea that needs to ship — this is where it starts.
        </p>
        <p style={{ fontSize: 13, color: "var(--text3)", marginBottom: 32, fontWeight: 400, fontFamily: "var(--mono)" }}>
          No pitch deck · No pressure · We'll tell you honestly if we're the right fit
        </p>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 12, flexWrap: "wrap" }}>
          <a href="#contact" className="btn-hero">
            Start a project{" "}
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M3 7h8M8 4l3 3-3 3" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
          <a href="#contact" className="btn-hero-o">
            Book a free 30-min scoping call
          </a>
        </div>
      </div>
    </div>
  );
}
