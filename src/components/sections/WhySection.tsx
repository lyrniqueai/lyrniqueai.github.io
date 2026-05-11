import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { ENGINEERING_PRINCIPLES } from "@/constants";

export default function WhySection() {
  const wrapRef = useScrollReveal<HTMLDivElement>();

  return (
    <section
      id="engineering-principles"
      style={{
        background: "var(--bg2)",
        borderTop: "1px solid var(--b)",
        padding: "90px 6vw",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div className="section-grid" />
      <div style={{ position: "absolute", width: 500, height: 500, top: "-5%", left: "-10%", borderRadius: "50%", background: "radial-gradient(circle, rgba(99,102,241,0.08) 0%, transparent 65%)", filter: "blur(80px)", pointerEvents: "none" }} />
      <div style={{ maxWidth: 1100, margin: "0 auto", position: "relative", zIndex: 1 }}>
        <div style={{ marginBottom: 44 }}>
          <div className="gt3 eyebrow-chapter">
            Why Lyrnique
          </div>
          <h2 className="font-display" style={{ fontSize: "clamp(28px, 4vw, 48px)", fontWeight: 700, letterSpacing: "-1.2px", lineHeight: 1.08, color: "var(--text)", marginBottom: 14 }}>
            Why Teams Choose Lyrnique
          </h2>
          <p style={{ fontSize: 16, color: "var(--text2)", maxWidth: 480, lineHeight: 1.7, fontWeight: 400 }}>
            Faster delivery, senior execution, and a clean handoff your team can trust.
          </p>
        </div>

        <div
          ref={wrapRef}
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
          {ENGINEERING_PRINCIPLES.map((p, i) => {
            const Icon = p.icon;
            const delay = ["", "rd1", "rd2", "rd3"][i] ?? "";
            return (
              <div
                key={p.title}
                className="glass-card"
                style={{ padding: "32px 30px", borderRadius: 0, transitionDelay: delay === "rd1" ? "0.1s" : delay === "rd2" ? "0.2s" : delay === "rd3" ? "0.3s" : "0s" }}
              >
                <div
                  style={{
                    width: 44,
                    height: 44,
                    borderRadius: 10,
                    background: "linear-gradient(135deg, rgba(99,102,241,0.14), rgba(168,85,247,0.10))",
                    border: "1px solid rgba(99,102,241,0.2)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: 18,
                  }}
                >
                  <Icon size={20} color="#8b8ff7" strokeWidth={1.6} />
                </div>
                <div style={{ fontSize: 16, fontWeight: 600, color: "var(--text)", marginBottom: 10, letterSpacing: "-0.3px" }}>
                  {p.title}
                </div>
                <div style={{ fontSize: 14, color: "var(--text2)", lineHeight: 1.6, fontWeight: 400 }}>
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
