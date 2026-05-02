import { ExternalLink } from "lucide-react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import SectionHeader from "@/components/common/SectionHeader";
import { FOUNDERS, PRINCIPLES } from "@/constants";
import type { Founder } from "@/types";

// ── FounderCard ───────────────────────────────────────────────────────────────

function FounderCard({ f }: { f: Founder }) {
  return (
    <div
      className="glass-card"
      style={{
        borderRadius: 12,
        padding: "24px 22px",
        position: "relative",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        gap: 14,
      }}
    >
      {/* Top gradient line */}
      <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 1, background: "var(--g3)" }} />

      {/* Avatar + name */}
      <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
        <div
          style={{
            width: 48,
            height: 48,
            borderRadius: "50%",
            background: "var(--g2)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: 14,
            fontWeight: 700,
            color: "#fff",
            flexShrink: 0,
            boxShadow: "0 0 18px rgba(99,102,241,0.35)",
          }}
        >
          {f.initials}
        </div>
        <div>
          <div style={{ fontSize: 14, fontWeight: 600, color: "var(--text)", marginBottom: 2 }}>{f.name}</div>
          <div style={{ fontFamily: "var(--mono)", fontSize: 10, color: "var(--text2)", letterSpacing: "0.04em" }}>
            {f.role} · Lyrnique
          </div>
        </div>
      </div>

      {/* Role tag */}
      <div
        style={{
          fontFamily: "var(--mono)",
          fontSize: 10,
          color: "var(--text2)",
          background: "rgba(99,102,241,0.08)",
          border: "1px solid rgba(99,102,241,0.15)",
          borderRadius: 4,
          padding: "4px 10px",
          display: "inline-block",
          width: "fit-content",
        }}
      >
        {f.tag}
      </div>

      {/* Bullets */}
      <ul style={{ margin: 0, padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: 6 }}>
        {f.bullets.map((b) => (
          <li key={b} style={{ display: "flex", alignItems: "flex-start", gap: 8 }}>
            <span style={{ color: "var(--lyr-indigo, #6366f1)", marginTop: 2, flexShrink: 0, fontSize: 12 }}>›</span>
            <span style={{ fontSize: 12, color: "var(--text2)", lineHeight: 1.55, fontWeight: 400 }}>{b}</span>
          </li>
        ))}
      </ul>

      {/* LinkedIn */}
      <a
        href={f.linkedin}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: 6,
          fontSize: 12,
          color: "var(--text2)",
          textDecoration: "none",
          marginTop: 4,
          transition: "color 0.2s",
        }}
        onMouseEnter={(e) => (e.currentTarget.style.color = "var(--text)")}
        onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text2)")}
      >
        <ExternalLink size={12} />
        Connect on LinkedIn
      </a>
    </div>
  );
}

// ── AboutSection ──────────────────────────────────────────────────────────────

export default function AboutSection() {
  const foundersRef = useScrollReveal<HTMLDivElement>();
  const principlesRef = useScrollReveal<HTMLDivElement>();

  return (
    <section
      id="about"
      style={{ background: "var(--bg2)", borderTop: "1px solid var(--b)", padding: "90px 6vw" }}
    >
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <SectionHeader
          eyebrow="About"
          title={<>Built by practitioners.<br />Delivered with conviction.</>}
          sub=""
          mb={0}
        />
        <p style={{ fontSize: 16, color: "var(--text2)", maxWidth: 620, lineHeight: 1.75, marginBottom: 48, fontWeight: 400 }}>
          <strong style={{ color: "var(--text)", fontWeight: 600 }}>Two founders. 24+ combined years. Production AI across healthcare, finance, e-commerce, and logistics.</strong> No subcontractors. No team rotations. No bench headcount billed to you.{" "}
          <strong style={{ color: "var(--text)", fontWeight: 600 }}>The engineers on day one are the engineers on launch day.</strong>{" "}
          Based in <strong style={{ color: "var(--text)", fontWeight: 500 }}>Chennai, India</strong> · US · UK · UAE · Global.
        </p>

        {/* Founder cards */}
        <div
          ref={foundersRef}
          className="rev"
          style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 48 }}
        >
          {FOUNDERS.map((f) => (
            <FounderCard key={f.initials} f={f} />
          ))}
        </div>

        {/* Principles */}
        <div ref={principlesRef} className="rev rd1">
          <div className="gt3" style={{ fontFamily: "var(--mono)", fontSize: 12, letterSpacing: "0.1em", marginBottom: 16 }}>
            Our principles
          </div>
          <div
            style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 10 }}
            className="max-nav:grid-cols-2"
          >
            {PRINCIPLES.map((p, i) => {
              const Icon = p.icon;
              return (
                <div
                  key={p.title}
                  className="glass-card"
                  style={{
                    borderRadius: 8,
                    padding: 18,
                    position: "relative",
                    overflow: "hidden",
                    transition: "transform 0.2s, box-shadow 0.2s",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLDivElement).style.transform = "translateY(-3px)";
                    (e.currentTarget as HTMLDivElement).style.boxShadow = "0 8px 32px rgba(99,102,241,0.15)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLDivElement).style.transform = "none";
                    (e.currentTarget as HTMLDivElement).style.boxShadow = "none";
                  }}
                >
                  <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 1, background: "var(--g3)", opacity: 0.5 }} />
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 12 }}>
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
                      }}
                    >
                      <Icon size={16} color="var(--lyr-indigo, #6366f1)" strokeWidth={1.8} />
                    </div>
                    <div className="gt3" style={{ fontFamily: "var(--mono)", fontSize: 11, fontWeight: 700, opacity: 0.4 }}>
                      {String(i + 1).padStart(2, "0")}
                    </div>
                  </div>
                  <div style={{ fontSize: 13, fontWeight: 600, color: "var(--text)", marginBottom: 6 }}>{p.title}</div>
                  <div style={{ fontSize: 13, color: "var(--text2)", lineHeight: 1.6, fontWeight: 400 }}>{p.body}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
