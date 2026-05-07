import { ShieldCheck, Check } from "lucide-react";

const TRUST_POINTS = [
  "Your data never trains any model",
  "No public LLM calls — private endpoints only",
  "Data stays in your infrastructure",
  "Fully isolated processing available for sensitive workloads",
];

export default function SecurityTrustBar() {
  return (
    <div
      style={{
        background: "var(--bg2)",
        borderTop: "2px solid rgba(34,197,94,0.35)",
        borderBottom: "1px solid var(--b)",
        padding: "18px 6vw",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Subtle green wash */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "radial-gradient(ellipse 50% 120% at 10% 50%, rgba(34,197,94,0.06) 0%, transparent 60%)",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          maxWidth: 1100,
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "auto 1fr",
          gap: "0 40px",
          alignItems: "center",
          position: "relative",
          zIndex: 1,
        }}
        className="max-nav:!grid-cols-1 max-nav:gap-y-4"
      >
        {/* Left anchor */}
        <div style={{ display: "flex", alignItems: "center", gap: 14, flexShrink: 0 }}>
          <div
            style={{
              width: 40,
              height: 40,
              borderRadius: 10,
              background: "rgba(34,197,94,0.1)",
              border: "1px solid rgba(34,197,94,0.25)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0,
            }}
          >
            <ShieldCheck size={20} color="#22c55e" strokeWidth={1.8} />
          </div>
          <div>
            <div style={{ fontSize: 13, fontWeight: 600, color: "var(--text)", lineHeight: 1.2, marginBottom: 2 }}>
              Your data stays yours
            </div>
            <div style={{ fontFamily: "var(--mono)", fontSize: 10, color: "#16a34a", letterSpacing: "0.06em" }}>
              AI SECURITY &amp; PRIVACY
            </div>
          </div>
        </div>

        {/* Divider */}
        <div
          style={{
            display: "contents",
          }}
        />

        {/* 2×2 grid of trust points */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "6px 24px",
          }}
          className="max-nav:grid-cols-1"
        >
          {TRUST_POINTS.map((point) => (
            <div key={point} style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <Check size={12} color="#22c55e" strokeWidth={2.5} style={{ flexShrink: 0 }} />
              <span style={{ fontFamily: "var(--mono)", fontSize: 11, color: "var(--text2)", lineHeight: 1.4 }}>
                {point}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
