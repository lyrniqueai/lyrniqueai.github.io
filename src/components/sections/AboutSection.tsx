import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { ExternalLink } from "lucide-react";
import { FOUNDER_BIO, WHY_LYRNIQUE } from "@/constants";

export default function AboutSection() {
  const bioRef = useScrollReveal<HTMLDivElement>();
  const whyRef = useScrollReveal<HTMLDivElement>();

  return (
    <section
      id="about"
      style={{ background: "var(--bg2)", borderTop: "1px solid var(--b)", padding: "90px 6vw" }}
    >
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <div style={{ marginBottom: 40 }}>
          <div className="gt3" style={{ fontFamily: "var(--mono)", fontSize: 11, letterSpacing: "0.1em", marginBottom: 10 }}>
            About
          </div>
          <h2 className="font-display" style={{ fontSize: "clamp(28px, 4vw, 48px)", fontWeight: 700, letterSpacing: "-1.2px", lineHeight: 1.08, color: "var(--text)", marginBottom: 36 }}>
            Built by Product-Minded Engineers
          </h2>

          <div
            ref={bioRef}
            className="rev max-nav:!grid-cols-1"
            style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48, alignItems: "start" }}
          >
            {/* Left — bio card */}
            <div
              className="glass-card"
              style={{ borderRadius: 12, padding: "24px 26px", position: "relative", overflow: "hidden" }}
            >
              <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 1, background: "var(--g3)" }} />

              {/* Quote mark */}
              <div style={{ fontSize: 28, color: "rgba(99,102,241,0.35)", fontFamily: "Georgia, serif", lineHeight: 1, marginBottom: 10 }}>"</div>

              {FOUNDER_BIO.paragraphs.map((para, i) => (
                <p
                  key={i}
                  style={{
                    fontSize: 15,
                    color: "var(--text2)",
                    lineHeight: 1.78,
                    fontWeight: 400,
                    marginBottom: i < FOUNDER_BIO.paragraphs.length - 1 ? 12 : 18,
                  }}
                >
                  {para}
                </p>
              ))}

              {/* Dual founder attribution */}
              <div style={{ display: "flex", alignItems: "center", gap: 14, paddingTop: 16, borderTop: "1px solid var(--b)" }}>
                {/* Avatar stack */}
                <div style={{ display: "flex", flexShrink: 0 }}>
                  {FOUNDER_BIO.founders.map((f, i) => (
                    <div
                      key={f.initials}
                      style={{
                        width: 38,
                        height: 38,
                        borderRadius: "50%",
                        background: i === 0 ? "var(--g2)" : "linear-gradient(135deg, #a855f7, #06b6d4)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: 12,
                        fontWeight: 700,
                        color: "#fff",
                        boxShadow: "0 0 12px rgba(99,102,241,0.3)",
                        marginLeft: i > 0 ? -10 : 0,
                        border: "2px solid var(--bg2)",
                        position: "relative",
                        zIndex: FOUNDER_BIO.founders.length - i,
                      }}
                    >
                      {f.initials}
                    </div>
                  ))}
                </div>

                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: 13, fontWeight: 600, color: "var(--text)", lineHeight: 1.3 }}>
                    {FOUNDER_BIO.founders.map((f, i) => (
                      <span key={f.name}>
                        {f.name}
                        {i < FOUNDER_BIO.founders.length - 1 && <span style={{ color: "var(--text3)", margin: "0 6px" }}>&</span>}
                      </span>
                    ))}
                  </div>
                  <div style={{ fontFamily: "var(--mono)", fontSize: 10, color: "var(--text3)", letterSpacing: "0.04em", marginTop: 2 }}>
                    {FOUNDER_BIO.role}
                  </div>
                  <div style={{ display: "flex", gap: 10, marginTop: 8 }}>
                    {FOUNDER_BIO.founders.map((f) => (
                      <a
                        key={f.name}
                        href={f.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ display: "inline-flex", alignItems: "center", gap: 4, fontFamily: "var(--mono)", fontSize: 10, color: "var(--text3)", textDecoration: "none", transition: "color 0.2s" }}
                        onMouseEnter={(e) => (e.currentTarget.style.color = "#8b8ff7")}
                        onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text3)")}
                      >
                        <ExternalLink size={10} />
                        {f.name.split(" ")[0]}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Right — Why Lyrnique */}
            <div ref={whyRef} className="rev rd1">
              <div className="gt3" style={{ fontFamily: "var(--mono)", fontSize: 11, letterSpacing: "0.1em", marginBottom: 20 }}>
                What You Get
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
                {WHY_LYRNIQUE.map((p) => {
                  const Icon = p.icon;
                  return (
                    <div key={p.title} style={{ display: "flex", gap: 14, alignItems: "flex-start" }}>
                      <div
                        style={{
                          width: 36,
                          height: 36,
                          borderRadius: 8,
                          background: "linear-gradient(135deg, rgba(99,102,241,0.12), rgba(168,85,247,0.10))",
                          border: "1px solid rgba(99,102,241,0.18)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          flexShrink: 0,
                          marginTop: 2,
                        }}
                      >
                        <Icon size={16} color="#6366f1" strokeWidth={1.8} />
                      </div>
                      <div>
                        <div style={{ fontSize: 14, fontWeight: 600, color: "var(--text)", marginBottom: 4 }}>
                          {p.title}
                        </div>
                        <div style={{ fontSize: 13, color: "var(--text2)", lineHeight: 1.6, fontWeight: 400 }}>
                          {p.body}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
