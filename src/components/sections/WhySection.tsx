import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import SectionHeader from "@/components/common/SectionHeader";
import { COMPARISON_ROWS } from "@/constants";

export default function WhySection() {
  const wrapRef = useScrollReveal<HTMLDivElement>();

  return (
    <section
      id="why"
      style={{
        background: "var(--bg2)",
        borderTop: "1px solid var(--b)",
        padding: "90px 6vw",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div className="section-grid" />
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <SectionHeader
          eyebrow="Why Lyrnique"
          title={<>We work differently.<br />Here's exactly how.</>}
          sub="Every agency says the same thing. Here's the difference: same engineers, day one to launch. No bait-and-switch staffing. No ambiguous IP. No surprises."
        />

        <div
          ref={wrapRef}
          className="rev"
          style={{
            background: "var(--bg)",
            border: "1px solid var(--b)",
            borderRadius: 12,
            overflow: "hidden",
          }}
        >
          {/* Card title bar */}
          <div style={{ padding: "18px 24px", borderBottom: "1px solid var(--b)", display: "flex", alignItems: "center", gap: 10 }}>
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M7 1l1.4 2.8L12 4.3l-2.5 2.4.6 3.4L7 8.5 4 10.1l.6-3.4L2 4.3l3.6-.5L7 1z" stroke="#a855f7" strokeWidth="1" strokeLinejoin="round" />
            </svg>
            <span style={{ fontSize: 14, fontWeight: 600, color: "var(--text)" }}>Lyrnique vs a larger agency</span>
          </div>

          {/* Header row */}
          <div
            style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", background: "var(--bg3)", borderBottom: "1px solid var(--b)" }}
            className="max-nav:!grid-cols-2"
          >
            <div style={{ padding: "11px 22px", fontFamily: "var(--mono)", fontSize: 10, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--text2)" }}>
              Capability
            </div>
            <div style={{ padding: "11px 22px", fontFamily: "var(--mono)", fontSize: 10, letterSpacing: "0.1em", textTransform: "uppercase" }}>
              <span className="gt3">Lyrnique</span>
            </div>
            <div className="max-nav:hidden" style={{ padding: "11px 22px", fontFamily: "var(--mono)", fontSize: 10, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--text2)" }}>
              Typical agency
            </div>
          </div>

          {/* Data rows */}
          {COMPARISON_ROWS.map((r, i) => (
            <div
              key={r.topic}
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr 1fr",
                borderBottom: i < COMPARISON_ROWS.length - 1 ? "1px solid var(--b)" : "none",
              }}
              className="max-nav:!grid-cols-2"
            >
              <div style={{ padding: "13px 22px", fontSize: 13, color: "var(--text)", fontWeight: 400, display: "flex", alignItems: "flex-start" }}>
                {r.topic}
              </div>
              <div style={{ padding: "13px 22px", fontSize: 13, fontWeight: 400, background: "rgba(99,102,241,0.06)", display: "flex", alignItems: "flex-start", gap: 8 }}>
                <span style={{ color: "#22c55e", flexShrink: 0, marginTop: 1 }}>✓</span>
                <span className="gt3" style={{ lineHeight: 1.55 }}>{r.good}</span>
              </div>
              <div className="max-nav:hidden" style={{ padding: "13px 22px", fontSize: 13, color: "var(--text2)", fontWeight: 400, display: "flex", alignItems: "flex-start", gap: 8 }}>
                <span style={{ color: "var(--text3)", flexShrink: 0, marginTop: 1 }}>✗</span>
                <span style={{ lineHeight: 1.55 }}>{r.bad}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
