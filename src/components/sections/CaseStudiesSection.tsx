import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import SectionHeader from "@/components/common/SectionHeader";
import { CASE_STUDIES } from "@/constants";

export default function CaseStudiesSection() {
  const ref1 = useScrollReveal<HTMLDivElement>();
  const ref2 = useScrollReveal<HTMLDivElement>();
  const revRefs = [ref1, ref2];

  return (
    <section
      id="work"
      style={{
        background: "var(--bg)",
        borderTop: "1px solid var(--b)",
        padding: "90px 6vw",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div className="section-grid" />
      {/* Ambient orb */}
      <div
        style={{
          position: "absolute",
          top: -120,
          right: -80,
          width: 400,
          height: 400,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(168,85,247,0.08) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div style={{ maxWidth: 1100, margin: "0 auto", position: "relative", zIndex: 1 }}>
        <SectionHeader
          eyebrow="Our work"
          title={<>AI/ML systems in production.<br />Real problems. Real outcomes.</>}
          sub="Client names are confidential. Outcomes, timelines, and technical depth are not. Real projects. Real results."
        />

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 1,
            background: "var(--b)",
            border: "1px solid var(--b)",
            borderRadius: 12,
            overflow: "hidden",
          }}
        >
          {CASE_STUDIES.map((c, idx) => (
            <div
              key={c.title}
              ref={revRefs[idx]}
              className={`rev ${c.delay} max-nav:!grid-cols-1`}
              style={{
                background: "var(--bg2)",
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                transition: "background 0.3s",
              }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.background = "var(--bg3)")}
              onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.background = "var(--bg2)")}
            >
              {/* Left — title + description */}
              <div
                style={{ padding: "40px 36px", borderRight: "1px solid var(--b)" }}
                className="max-nav:border-r-0 max-nav:border-b max-nav:border-[var(--b)]"
              >
                <div className="gt3" style={{ fontFamily: "var(--mono)", fontSize: 10, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 14 }}>
                  {c.ind}
                </div>
                <div
                  className="gt2"
                  style={{ fontSize: "clamp(36px, 4vw, 52px)", fontWeight: 700, letterSpacing: "-1.5px", lineHeight: 1, marginBottom: 8 }}
                >
                  {c.outcome}
                </div>
                <div style={{ fontSize: 13, color: "var(--text2)", fontFamily: "var(--mono)", marginBottom: 20 }}>
                  {c.outcomeSub}
                </div>
                <div style={{ fontSize: 18, fontWeight: 600, color: "var(--text)", letterSpacing: "-0.3px", lineHeight: 1.25, marginBottom: 12 }}>
                  {c.title}
                </div>
                <div style={{ fontSize: 13, color: "var(--text2)", lineHeight: 1.65, fontWeight: 400 }}>
                  {c.desc}
                </div>
              </div>

              {/* Right — bullets + metrics */}
              <div style={{ padding: "40px 36px", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                <ul style={{ listStyle: "none", padding: 0, margin: 0, flex: 1, marginBottom: 24 }}>
                  {c.bullets.map((b) => (
                    <li
                      key={b}
                      style={{
                        fontSize: 13,
                        color: "var(--text2)",
                        padding: "6px 0",
                        borderBottom: "1px solid var(--b)",
                        display: "flex",
                        alignItems: "flex-start",
                        gap: 10,
                        fontWeight: 400,
                        lineHeight: 1.5,
                      }}
                    >
                      <span style={{ color: "#6366f1", fontSize: 11, flexShrink: 0, marginTop: 3 }}>→</span>
                      {b}
                    </li>
                  ))}
                </ul>

                {/* Metrics strip */}
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(3, 1fr)",
                    gap: 1,
                    background: "var(--b)",
                    border: "1px solid var(--b)",
                    borderRadius: 8,
                    overflow: "hidden",
                  }}
                >
                  {c.metrics.map((m) => (
                    <div key={m.l} style={{ background: "var(--bg)", padding: "14px 10px", textAlign: "center" }}>
                      <div
                        className="gt3"
                        style={{ fontSize: 17, fontWeight: 700, letterSpacing: "-0.5px", lineHeight: 1, marginBottom: 3 }}
                      >
                        {m.n}
                      </div>
                      <div style={{ fontSize: 11, color: "var(--text2)", lineHeight: 1.3 }}>{m.l}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
