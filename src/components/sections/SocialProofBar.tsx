const SIGNALS = [
  "AI Product Engineering", "Custom Software Development", "AI Integrations",
  "Internal Tools", "API Backends", "Senior Engineers", "Full Code Ownership",
  "Chennai to Global",
];

const DOT = (
  <span style={{ display: "inline-block", width: 3, height: 3, borderRadius: "50%", background: "rgba(99,102,241,0.4)", margin: "0 18px", verticalAlign: "middle", flexShrink: 0 }} />
);

function MarqueeItem({ label }: { label: string }) {
  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        fontFamily: "var(--mono)",
        fontSize: 12,
        color: "var(--text3)",
        whiteSpace: "nowrap",
        letterSpacing: "0.04em",
        flexShrink: 0,
      }}
    >
      {label}
      {DOT}
    </span>
  );
}

export default function SocialProofBar() {
  const items = [...SIGNALS, ...SIGNALS];

  return (
    <div
      style={{
        background: "var(--bg2)",
        borderTop: "1px solid var(--b)",
        borderBottom: "1px solid var(--b)",
        padding: "12px 0",
        overflow: "hidden",
        position: "relative",
      }}
    >
      {/* Left fade */}
      <div style={{ position: "absolute", left: 0, top: 0, bottom: 0, width: 80, background: "linear-gradient(to right, var(--bg2), transparent)", zIndex: 1, pointerEvents: "none" }} />
      {/* Right fade */}
      <div style={{ position: "absolute", right: 0, top: 0, bottom: 0, width: 80, background: "linear-gradient(to left, var(--bg2), transparent)", zIndex: 1, pointerEvents: "none" }} />

      <div className="marquee-track" style={{ alignItems: "center" }}>
        {items.map((label, i) => (
          <MarqueeItem key={`${label}-${i}`} label={label} />
        ))}
      </div>
    </div>
  );
}
