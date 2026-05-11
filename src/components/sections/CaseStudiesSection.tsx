import { useState } from "react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { CASE_STUDIES, PROJECT_ACCENTS } from "@/constants";

export default function CaseStudiesSection() {
  const [active, setActive] = useState(0);
  const ref = useScrollReveal<HTMLDivElement>();
  const activeProject = CASE_STUDIES[active];
  const accent = PROJECT_ACCENTS[active % PROJECT_ACCENTS.length];

  return (
    <section
      id="projects"
      style={{
        background: "var(--bg)",
        borderTop: "1px solid var(--b)",
        padding: "90px 6vw",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div className="section-grid" />
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
        <div style={{ marginBottom: 28 }}>
          <div className="gt3" style={{ fontFamily: "var(--mono)", fontSize: 11, letterSpacing: "0.1em", marginBottom: 10 }}>
            Selected Builds
          </div>
          <h2 className="font-display" style={{ fontSize: "clamp(28px, 4vw, 48px)", fontWeight: 700, letterSpacing: "-1.2px", lineHeight: 1.08, color: "var(--text)", marginBottom: 14 }}>
            The Kind of Systems We Build
          </h2>
          <p style={{ fontSize: 16, color: "var(--text2)", maxWidth: 560, lineHeight: 1.7, fontWeight: 400 }}>
            Representative builds that show how we think about architecture, delivery, and handoff.
          </p>
        </div>

        <div
          style={{
            background: "rgba(99,102,241,0.05)",
            border: "1px solid rgba(99,102,241,0.18)",
            borderRadius: 10,
            padding: "16px 22px",
            marginBottom: 36,
            fontSize: 13,
            color: "var(--text2)",
            lineHeight: 1.6,
          }}
        >
          <span style={{ color: "var(--text)", fontWeight: 500 }}>Note:</span> These are anonymized examples of common build patterns, not public client case studies.
        </div>

        <div
          ref={ref}
          className="rev max-nav:!grid-cols-1"
          style={{
            display: "grid",
            gridTemplateColumns: "0.78fr 1.22fr",
            gap: 1,
            background: "var(--b)",
            border: "1px solid var(--b)",
            borderRadius: 18,
            overflow: "hidden",
          }}
        >
          <div style={{ background: "var(--bg2)", padding: 14 }}>
            {CASE_STUDIES.map((project, idx) => {
              const projectAccent = PROJECT_ACCENTS[idx % PROJECT_ACCENTS.length];
              const isActive = idx === active;
              return (
                <button
                  key={project.title}
                  type="button"
                  onClick={() => setActive(idx)}
                  style={{
                    width: "100%",
                    textAlign: "left",
                    border: `1px solid ${isActive ? projectAccent.color : "transparent"}`,
                    background: isActive ? projectAccent.bg : "transparent",
                    borderRadius: 14,
                    padding: "16px 15px",
                    marginBottom: 8,
                    cursor: "pointer",
                    transition: "background 0.2s, border-color 0.2s",
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 12, marginBottom: 9 }}>
                    <span className="gt3" style={{ fontFamily: "var(--mono)", fontSize: 10, letterSpacing: "0.1em", textTransform: "uppercase" }}>
                      {project.ind}
                    </span>
                    <span style={{ fontFamily: "var(--mono)", fontSize: 10, color: isActive ? projectAccent.color : "var(--text3)" }}>
                      {project.timeline}
                    </span>
                  </div>
                  <div style={{ fontSize: 15, color: "var(--text)", fontWeight: 650, letterSpacing: "-0.2px", lineHeight: 1.25 }}>
                    {project.title}
                  </div>
                </button>
              );
            })}
          </div>

          <div style={{ background: "var(--bg2)", padding: "34px 34px 30px", position: "relative", overflow: "hidden" }}>
            <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 2, background: `linear-gradient(90deg, ${accent.color}, transparent)`, opacity: 0.75 }} />

            <div className="gt3" style={{ fontFamily: "var(--mono)", fontSize: 10, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 12 }}>
              {activeProject.ind}
            </div>
            <h3 className="font-display" style={{ fontSize: "clamp(25px, 3vw, 38px)", fontWeight: 700, letterSpacing: "-1px", lineHeight: 1.08, color: "var(--text)", marginBottom: 12 }}>
              {activeProject.title}
            </h3>
            <p style={{ fontSize: 14, color: "var(--text2)", lineHeight: 1.7, fontWeight: 400, marginBottom: 24, maxWidth: 620 }}>
              {activeProject.desc}
            </p>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 0.8fr", gap: 18, marginBottom: 22 }} className="max-nav:!grid-cols-1">
              <div className="artifact-panel" style={{ borderRadius: 14, padding: 18 }}>
                <div style={{ fontFamily: "var(--mono)", fontSize: 10, color: "var(--text3)", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 12 }}>
                  Engineering approach
                </div>
                <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                  {activeProject.approach.map((item) => (
                    <li key={item} style={{ fontSize: 13, color: "var(--text2)", padding: "8px 0", borderBottom: "1px solid var(--b)", display: "flex", alignItems: "flex-start", gap: 10, fontWeight: 400, lineHeight: 1.5 }}>
                      <span style={{ color: accent.color, fontSize: 11, flexShrink: 0, marginTop: 3 }}>→</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="artifact-panel" style={{ borderRadius: 14, padding: 18 }}>
                <div style={{ fontFamily: "var(--mono)", fontSize: 10, color: "var(--text3)", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 12 }}>
                  Build signals
                </div>
                <div style={{ display: "grid", gap: 10 }}>
                  {activeProject.metrics.map((metric) => (
                    <div key={metric.l} style={{ display: "grid", gridTemplateColumns: "auto 1fr", gap: 10, alignItems: "baseline" }}>
                      <span style={{ color: accent.color, fontFamily: "var(--mono)", fontSize: 13, fontWeight: 700 }}>{metric.n}</span>
                      <span style={{ color: "var(--text2)", fontSize: 12, lineHeight: 1.35 }}>{metric.l}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
              {activeProject.stack.map((item) => (
                <span key={item} style={{ fontFamily: "var(--mono)", fontSize: 10, color: "var(--text2)", background: "rgba(99,102,241,0.07)", border: "1px solid rgba(99,102,241,0.15)", borderRadius: 999, padding: "4px 9px" }}>
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
