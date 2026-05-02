import { INDUSTRIES, GEOS } from "@/constants";

export default function SocialProofBar() {
  return (
    <div
      style={{
        background: "var(--bg2)",
        borderTop: "1px solid var(--b)",
        borderBottom: "1px solid var(--b)",
        padding: "18px 6vw",
      }}
    >
      <div
        style={{
          maxWidth: 1100,
          margin: "0 auto",
          display: "flex",
          alignItems: "center",
          gap: 20,
          flexWrap: "wrap",
        }}
      >
        {/* Label */}
        <span
          style={{
            fontFamily: "var(--mono)",
            fontSize: 11,
            color: "var(--text3)",
            letterSpacing: "0.08em",
            whiteSpace: "nowrap",
            flexShrink: 0,
          }}
        >
          Built for teams in
        </span>

        <div style={{ width: 1, height: 16, background: "var(--b2)", flexShrink: 0 }} />

        {/* Industry badges */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: 8, flex: 1 }}>
          {INDUSTRIES.map(({ label, icon: Icon }) => (
            <span
              key={label}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 5,
                fontFamily: "var(--mono)",
                fontSize: 11,
                color: "var(--text2)",
                background: "rgba(99,102,241,0.06)",
                border: "1px solid rgba(99,102,241,0.14)",
                borderRadius: 4,
                padding: "3px 10px",
                whiteSpace: "nowrap",
              }}
            >
              <Icon size={11} color="var(--text2)" strokeWidth={1.6} />
              {label}
            </span>
          ))}
        </div>

        <div style={{ width: 1, height: 16, background: "var(--b2)", flexShrink: 0 }} className="hidden nav:block" />

        {/* Geo list */}
        <div className="hidden nav:flex" style={{ gap: 8, alignItems: "center", flexShrink: 0 }}>
          <span style={{ fontFamily: "var(--mono)", fontSize: 11, color: "var(--text3)", letterSpacing: "0.06em" }}>
            Clients in
          </span>
          {GEOS.map((g, i) => (
            <span key={g} style={{ fontSize: 11, color: "var(--text2)", fontFamily: "var(--mono)" }}>
              {g}
              {i < GEOS.length - 1 && (
                <span style={{ color: "var(--text3)", margin: "0 4px" }}>·</span>
              )}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
