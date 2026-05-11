import GradientOrbs from "@/components/layout/GradientOrbs";

export default function DifferentiatorSection() {
  return (
    <section
      id="differentiator"
      style={{
        background: "var(--bg)",
        borderTop: "1px solid var(--b)",
        padding: "60px 6vw",
        textAlign: "center",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <GradientOrbs variant="cta" />

      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          pointerEvents: "none",
          zIndex: 0,
          overflow: "hidden",
        }}
      >
        <span
          className="font-display"
          style={{
            fontSize: "clamp(90px, 18vw, 200px)",
            fontWeight: 800,
            letterSpacing: "-6px",
            lineHeight: 1,
            color: "transparent",
            WebkitTextStroke: "1px rgba(99,102,241,0.08)",
            whiteSpace: "nowrap",
            userSelect: "none",
          }}
        >
          BUILT FAST
        </span>
      </div>

      <div style={{ position: "relative", zIndex: 1, maxWidth: 820, margin: "0 auto" }}>
        <div style={{ display: "flex", justifyContent: "center", marginBottom: 24 }}>
          <div
            className="grad-border-anim"
            style={{
              display: "inline-flex", alignItems: "center", gap: 7,
              fontFamily: "var(--mono)", fontSize: 11, color: "var(--text2)",
              borderRadius: 999, padding: "5px 16px", letterSpacing: "0.07em",
            }}
          >
            <span className="gt3">◆</span>
            Our Approach
          </div>
        </div>

        <h2
          className="font-display"
          style={{
            fontSize: "clamp(36px, 6vw, 72px)",
            fontWeight: 700,
            letterSpacing: "-2px",
            lineHeight: 1.05,
            marginBottom: 28,
          }}
        >
          <span className="gt-anim">Built Fast.</span>
          <br />
          <span style={{ color: "var(--text)" }}>Engineered Properly.</span>
        </h2>

        <div
          style={{
            width: 80,
            height: 2,
            background: "var(--g3)",
            margin: "0 auto 28px",
            borderRadius: 2,
            boxShadow: "0 0 16px rgba(99,102,241,0.6), 0 0 32px rgba(168,85,247,0.3)",
          }}
        />

        <p style={{ fontSize: 17, color: "var(--text2)", lineHeight: 1.8, fontWeight: 400, marginBottom: 24 }}>
          Speed matters when the product can keep evolving after launch. We combine AI-native workflows with senior engineering judgment, so the first version does not become the thing you need to rebuild.
        </p>

        <p style={{ fontSize: 16, color: "var(--text)", fontWeight: 500, lineHeight: 1.7 }}>
          The output is working software, clear ownership, and a codebase ready for the next stage.
        </p>
      </div>
    </section>
  );
}
