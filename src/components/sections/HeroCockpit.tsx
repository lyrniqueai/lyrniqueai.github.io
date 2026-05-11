import { CheckCircle2, Code2, GitBranch, ShieldCheck } from "lucide-react";

const MODULES = [
  { label: "Scope", value: "Product clarity", icon: GitBranch },
  { label: "Build", value: "Senior engineering", icon: Code2 },
  { label: "Launch", value: "Clean handoff", icon: ShieldCheck },
] as const;

const SIGNALS = ["Architecture mapped", "Core product built", "Quality checks included", "Code ownership transferred"];

export default function HeroCockpit() {
  return (
    <div className="ai-cockpit glass-card" style={{ position: "relative", borderRadius: 20, overflow: "hidden", background: "linear-gradient(180deg, rgba(15,18,30,0.96), rgba(8,10,16,0.94))", boxShadow: "0 28px 90px rgba(0,0,0,0.34)" }}>
      <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 2, background: "linear-gradient(90deg, transparent, rgba(129,140,248,0.9), rgba(168,85,247,0.8), transparent)" }} />
      <div style={{ position: "relative", padding: 24 }}>
        <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 18, marginBottom: 24 }}>
          <div>
            <div style={{ fontSize: "clamp(22px, 2.4vw, 30px)", color: "#f8fafc", fontWeight: 750, letterSpacing: "-0.8px", lineHeight: 1.12, marginBottom: 10 }}>
              From validated idea to production-ready software.
            </div>
            <div style={{ fontSize: 15, color: "#cbd5e1", lineHeight: 1.65, maxWidth: 390 }}>
              Lyrnique brings product thinking, AI-native workflows, and senior engineering into one focused build process.
            </div>
          </div>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 7, border: "1px solid rgba(34,197,94,0.25)", background: "rgba(34,197,94,0.08)", borderRadius: 999, padding: "7px 10px", color: "#bbf7d0", fontFamily: "var(--mono)", fontSize: 11, whiteSpace: "nowrap" }}>
            <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#22c55e", boxShadow: "0 0 18px rgba(34,197,94,0.7)" }} />
            Build-ready
          </div>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, minmax(0, 1fr))", gap: 10, marginBottom: 16 }}>
          {MODULES.map(({ label, value, icon: Icon }) => (
            <div
              key={label}
              style={{
                borderRadius: 14,
                padding: "15px 13px",
                minHeight: 116,
                background: "rgba(15,18,30,0.88)",
                border: "1px solid rgba(99,102,241,0.24)",
                boxShadow: "inset 0 1px 0 rgba(255,255,255,0.05)",
              }}
            >
              <div style={{ width: 30, height: 30, borderRadius: 10, background: "rgba(99,102,241,0.12)", border: "1px solid rgba(165,180,252,0.18)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 16 }}>
                <Icon size={15} color="#a5b4fc" strokeWidth={1.8} />
              </div>
              <div style={{ fontSize: 15, color: "#f8fafc", fontWeight: 700, marginBottom: 6, letterSpacing: "-0.2px" }}>{label}</div>
              <div style={{ fontSize: 13, color: "#cbd5e1", lineHeight: 1.45 }}>{value}</div>
            </div>
          ))}
        </div>

        <div
          style={{
            borderRadius: 16,
            padding: 18,
            marginBottom: 14,
            background: "rgba(15,18,30,0.88)",
            border: "1px solid rgba(99,102,241,0.24)",
            boxShadow: "inset 0 1px 0 rgba(255,255,255,0.05)",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 14 }}>
            <CheckCircle2 size={16} color="#86efac" strokeWidth={1.8} />
            <div style={{ fontSize: 15, color: "#f8fafc", fontWeight: 700 }}>What stays connected</div>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 8 }} className="max-nav:!grid-cols-1">
            {SIGNALS.map((signal) => (
              <div key={signal} style={{ display: "flex", alignItems: "center", gap: 8, color: "#dbe4ef", fontSize: 13.5, lineHeight: 1.45 }}>
                <span style={{ width: 5, height: 5, borderRadius: "50%", background: "#818cf8", flexShrink: 0 }} />
                {signal}
              </div>
            ))}
          </div>
        </div>

        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 12, color: "#94a3b8", fontFamily: "var(--mono)", fontSize: 11 }}>
          <span>Discovery → Build → Launch</span>
          <span style={{ color: "#c4b5fd" }}>code ownership included</span>
        </div>
      </div>
    </div>
  );
}
