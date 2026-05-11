import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const TESTIMONIALS = [
  {
    quote:
      "They shipped our AI workflow MVP in four weeks without handing us throwaway code.",
    name: "Head of Product",
    context: "B2B SaaS · Series A",
    type: "AI workflow build",
    initials: "HP",
    delay: "",
  },
  {
    quote:
      "The codebase was clean enough for our team to own immediately. The handoff took one call.",
    name: "CTO",
    context: "HealthTech · Chennai",
    type: "Internal platform",
    initials: "CT",
    delay: "rd1",
  },
  {
    quote:
      "They were direct about tradeoffs, scoped the build clearly, and delivered what we agreed.",
    name: "Founder",
    context: "Fintech · UAE",
    type: "Product rebuild",
    initials: "FO",
    delay: "rd2",
  },
];

export default function TestimonialsSection() {
  const ref = useScrollReveal<HTMLDivElement>();

  return (
    <section
      style={{
        background: "var(--bg)",
        borderTop: "1px solid var(--b)",
        padding: "90px 6vw",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Depth orb */}
      <div style={{ position: "absolute", width: 600, height: 400, top: "50%", left: "50%", transform: "translate(-50%,-50%)", borderRadius: "50%", background: "radial-gradient(ellipse, rgba(99,102,241,0.07) 0%, transparent 65%)", filter: "blur(80px)", pointerEvents: "none" }} />

      <div style={{ maxWidth: 1100, margin: "0 auto", position: "relative", zIndex: 1 }}>
        <div style={{ marginBottom: 44, textAlign: "center" }}>
          <div className="gt3" style={{ fontFamily: "var(--mono)", fontSize: 11, letterSpacing: "0.1em", marginBottom: 10 }}>
            Client Feedback
          </div>
          <h2 className="font-display" style={{ fontSize: "clamp(26px, 3.5vw, 42px)", fontWeight: 700, letterSpacing: "-1.2px", lineHeight: 1.08, color: "var(--text)" }}>
            What Clients Say
          </h2>
        </div>

        <div
          ref={ref}
          className="rev max-nav:!grid-cols-1"
          style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16 }}
        >
          {TESTIMONIALS.map((t) => (
            <div
              key={t.name}
              className="glass-card"
              style={{ borderRadius: 12, padding: "28px 24px", display: "flex", flexDirection: "column", gap: 20, position: "relative", overflow: "hidden" }}
            >
              {/* Top gradient line */}
              <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 1, background: "var(--g3)", opacity: 0.5 }} />

              {/* Quote */}
              <div style={{ fontSize: 22, color: "rgba(99,102,241,0.35)", fontFamily: "Georgia, serif", lineHeight: 1 }}>"</div>
              <p style={{ fontSize: 14, color: "var(--text2)", lineHeight: 1.65, fontWeight: 400, flex: 1, margin: 0, marginTop: -12 }}>
                {t.quote}
              </p>
              <div style={{ fontFamily: "var(--mono)", fontSize: 10, color: "#a5b4fc", background: "rgba(99,102,241,0.08)", border: "1px solid rgba(99,102,241,0.16)", borderRadius: 999, padding: "5px 9px", alignSelf: "flex-start" }}>
                {t.type}
              </div>

              {/* Attribution */}
              <div style={{ display: "flex", alignItems: "center", gap: 12, paddingTop: 16, borderTop: "1px solid var(--b)" }}>
                <div
                  style={{
                    width: 36,
                    height: 36,
                    borderRadius: "50%",
                    background: "linear-gradient(135deg, rgba(99,102,241,0.25), rgba(168,85,247,0.20))",
                    border: "1px solid rgba(99,102,241,0.25)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontFamily: "var(--mono)",
                    fontSize: 11,
                    fontWeight: 700,
                    color: "#8b8ff7",
                    flexShrink: 0,
                  }}
                >
                  {t.initials}
                </div>
                <div>
                  <div style={{ fontSize: 13, fontWeight: 600, color: "var(--text)" }}>{t.name}</div>
                  <div style={{ fontFamily: "var(--mono)", fontSize: 10, color: "var(--text3)", letterSpacing: "0.04em", marginTop: 2 }}>
                    {t.context}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
