import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { ShieldCheck, GitBranch, Layers } from "lucide-react";

const PRACTICES = [
  {
    icon: Layers,
    label: "Architecture",
    headline: "Clear before code",
    body: "Scope, data models, API contracts, and service boundaries are agreed before the build starts.",
  },
  {
    icon: GitBranch,
    label: "Handoff",
    headline: "Code your team can own",
    body: "Typed APIs, clean structure, documentation, and deployment access come with every delivery.",
  },
  {
    icon: ShieldCheck,
    label: "Production",
    headline: "Built beyond the demo",
    body: "Security, automated checks, monitoring, and launch readiness are included from day one.",
  },
];

export default function InsideBuildSection() {
  const ref = useScrollReveal<HTMLDivElement>();

  return (
    <section
      id="inside-build"
      style={{
        background: "var(--bg2)",
        borderTop: "1px solid var(--b)",
        padding: "90px 6vw",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div className="section-grid" />
      <div style={{ maxWidth: 1100, margin: "0 auto", position: "relative", zIndex: 1 }}>

        <div style={{ marginBottom: 44 }}>
          <div className="gt3 eyebrow-chapter">
            Built Properly
          </div>
          <h2 className="font-display" style={{ fontSize: "clamp(28px, 4vw, 48px)", fontWeight: 700, letterSpacing: "-1.2px", lineHeight: 1.08, color: "var(--text)", marginBottom: 14 }}>
            Built for Production, Not Demos
          </h2>
          <p style={{ fontSize: 16, color: "var(--text2)", maxWidth: 500, lineHeight: 1.7, fontWeight: 400 }}>
            The essential engineering discipline stays in place, even when the timeline is tight.
          </p>
        </div>

        <div
          ref={ref}
          className="rev max-nav:!grid-cols-1"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 1,
            background: "var(--b)",
            border: "1px solid var(--b)",
            borderRadius: 12,
            overflow: "hidden",
          }}
        >
          {PRACTICES.map((p, i) => {
            const Icon = p.icon;
            const delay = ["", "rd1", "rd2", "rd3"][i] ?? "";
            return (
              <div
                key={p.label}
                className="glass-card"
                style={{ padding: "28px 24px", borderRadius: 0, display: "flex", flexDirection: "column", gap: 14, transitionDelay: delay === "rd1" ? "0.1s" : delay === "rd2" ? "0.2s" : delay === "rd3" ? "0.3s" : "0s" }}
              >
                {/* Icon */}
                <div
                  style={{
                    width: 36,
                    height: 36,
                    borderRadius: 8,
                    background: "linear-gradient(135deg, rgba(99,102,241,0.14), rgba(168,85,247,0.10))",
                    border: "1px solid rgba(99,102,241,0.2)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <Icon size={16} color="#8b8ff7" strokeWidth={1.6} />
                </div>

                {/* Label + Headline */}
                <div>
                  <div style={{ fontFamily: "var(--mono)", fontSize: 10, color: "var(--text3)", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 6 }}>
                    {p.label}
                  </div>
                  <div style={{ fontSize: 14, fontWeight: 600, color: "var(--text)", letterSpacing: "-0.2px", lineHeight: 1.3 }}>
                    {p.headline}
                  </div>
                </div>

                {/* Body */}
                <div style={{ fontSize: 13, color: "var(--text2)", lineHeight: 1.6, fontWeight: 400 }}>
                  {p.body}
                </div>

              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
