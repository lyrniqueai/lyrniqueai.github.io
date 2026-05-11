import { Lock, Rocket, Zap, Users } from "lucide-react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import GradientOrbs from "@/components/layout/GradientOrbs";
import HeroCockpit from "@/components/sections/HeroCockpit";
import { VALUE_PROPS } from "@/constants";

const PROP_ICONS = [Rocket, Zap, Users] as const;

export default function HeroSection() {
  const stripRef = useScrollReveal<HTMLDivElement>();

  return (
    <section
      id="home"
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "110px 6vw 80px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <GradientOrbs variant="hero" />
      <div className="hero-grid" />

      <div style={{ maxWidth: 1200, margin: "0 auto", width: "100%", position: "relative", zIndex: 1 }}>
        {/* Two-column layout: text left, cockpit right */}
        <div
          className="max-nav:!grid-cols-1"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 56,
            alignItems: "center",
            marginBottom: 56,
          }}
        >
          <div>
            <div
              className="grad-border-anim hero-in"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                fontFamily: "var(--mono)",
                fontSize: 12,
                color: "var(--text2)",
                borderRadius: 4,
                padding: "5px 12px",
                marginBottom: 28,
                letterSpacing: "0.05em",
                animationDelay: "0ms",
              }}
            >
              <span
                style={{
                  width: 5,
                  height: 5,
                  borderRadius: "50%",
                  background: "var(--g2)",
                  animation: "pulse-dot 2s infinite",
                  flexShrink: 0,
                }}
              />
              AI-Native Product Engineering
            </div>

            <h1
              className="font-display"
              style={{
                fontSize: "clamp(34px, 5.5vw, 66px)",
                fontWeight: 700,
                lineHeight: 1.12,
                letterSpacing: "-2px",
                color: "var(--text)",
                marginBottom: 22,
              }}
            >
              {["AI-Native", "Product", "Engineering"].map((word, i) => (
                <span
                  key={word}
                  className="word-in"
                  style={{ animationDelay: `${150 + i * 65}ms`, marginRight: "0.25em" }}
                >
                  {word}
                </span>
              ))}
              <br />
              <span className="gt-anim word-in" style={{ animationDelay: "480ms" }}>
                For Fast-Moving Teams
              </span>
            </h1>

            <p
              className="hero-in"
              style={{
                fontSize: 17,
                color: "var(--text)",
                maxWidth: 520,
                lineHeight: 1.7,
                marginBottom: 10,
                fontWeight: 400,
                opacity: 0.88,
                animationDelay: "600ms",
              }}
            >
              Lyrnique helps startups and growing businesses turn validated ideas into production-ready software with senior engineering, clear architecture, and full code ownership.
            </p>
            <p className="hero-in" style={{ fontSize: 14, color: "var(--text2)", marginBottom: 32, fontWeight: 400, animationDelay: "650ms" }}>
              Built in Chennai. Serving teams globally.
            </p>

            <div className="hero-in" style={{ display: "flex", alignItems: "center", gap: 12, flexWrap: "wrap", marginBottom: 10, animationDelay: "720ms" }}>
              <a href="#contact" className="btn-hero">
                Book a Discovery Call{" "}
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M3 7h8M8 4l3 3-3 3" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
              <a href="#process" className="btn-hero-o">
                See Our Process →
              </a>
            </div>
            <div className="hero-in" style={{ display: "flex", flexDirection: "column", gap: 6, animationDelay: "780ms" }}>
              <p style={{ fontSize: 12, color: "var(--text3)", fontWeight: 400, fontFamily: "var(--mono)", margin: 0 }}>
                Discovery call is free · We'll tell you honestly if we're the right fit
              </p>
              <div style={{ display: "inline-flex", alignItems: "center", gap: 6 }}>
                <Lock size={11} color="#22c55e" strokeWidth={2} />
                <span style={{ fontFamily: "var(--mono)", fontSize: 12, color: "#22c55e", letterSpacing: "0.02em" }}>
                  Enterprise-grade security · No model training on your data
                </span>
              </div>
            </div>
          </div>

          <div className="hero-in" style={{ animationDelay: "850ms" }}>
            <HeroCockpit />
          </div>

        </div>

        {/* Value-prop strip */}
        <div
          ref={stripRef}
          className="rev hero-value-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            border: "1px solid var(--b)",
            borderRadius: 12,
            overflow: "hidden",
            background: "var(--b)",
            gap: 1,
          }}
        >
          {VALUE_PROPS.map((s, i) => {
            const Icon = PROP_ICONS[i];
            return (
              <div key={s.n} style={{ background: "var(--bg2)", padding: "20px 22px", display: "flex", flexDirection: "column", gap: 8 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                  <div style={{ width: 28, height: 28, borderRadius: 6, background: "linear-gradient(135deg, rgba(99,102,241,0.14), rgba(168,85,247,0.10))", border: "1px solid rgba(99,102,241,0.2)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <Icon size={13} color="#8b8ff7" strokeWidth={1.8} />
                  </div>
                  <div className="gt3" style={{ fontSize: 13, fontWeight: 700, letterSpacing: -0.3, lineHeight: 1.2 }}>
                    {s.n}
                  </div>
                </div>
                <div style={{ fontSize: 12, color: "var(--text2)", lineHeight: 1.5, fontWeight: 400 }}>
                  {s.l}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
