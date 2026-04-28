import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import GradientOrbs from "@/components/layout/GradientOrbs";
import { HERO_STATS } from "@/constants";

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

      <div style={{ maxWidth: 1100, margin: "0 auto", width: "100%", position: "relative", zIndex: 1 }}>
        {/* Eyebrow badge */}
        <div
          className="grad-border-anim"
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
          Chennai, India &nbsp;·&nbsp; AI-native software agency
        </div>

        {/* Headline */}
        <h1
          className="font-display"
          style={{
            fontSize: "clamp(44px, 6.5vw, 80px)",
            fontWeight: 700,
            lineHeight: 1.04,
            letterSpacing: "-2px",
            color: "var(--text)",
            marginBottom: 22,
          }}
        >
          Software that ships.<br />
          <span className="gt-anim">Twice as fast.</span>
        </h1>

        {/* Sub-headline */}
        <p
          style={{
            fontSize: 18,
            color: "var(--text)",
            maxWidth: 540,
            lineHeight: 1.7,
            marginBottom: 10,
            fontWeight: 400,
            opacity: 0.88,
          }}
        >
          Custom software and AI integration — built by the same engineers from kickoff to launch. No account managers. No subcontractors. No surprises.
        </p>
        <p style={{ fontSize: 14, color: "var(--text2)", marginBottom: 36, fontWeight: 400 }}>
          Based in Chennai, India · Serving startups and scaleups globally
        </p>

        {/* CTAs */}
        <div style={{ display: "flex", alignItems: "center", gap: 12, flexWrap: "wrap", marginBottom: 10 }}>
          <a href="#contact" className="btn-hero">
            Book a Free Discovery Call{" "}
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M3 7h8M8 4l3 3-3 3" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
          <a href="#work" className="btn-hero-o">
            See what we've built
          </a>
        </div>
        <p style={{ fontSize: 12, color: "var(--text3)", marginBottom: 54, fontWeight: 400, fontFamily: "var(--mono)" }}>
          No NDAs for the first call · We'll tell you honestly if AI is right for your project
        </p>

        {/* Stat strip */}
        <div
          ref={stripRef}
          className="rev"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            border: "1px solid var(--b)",
            borderRadius: 12,
            overflow: "hidden",
            background: "var(--b)",
            gap: 1,
          }}
        >
          {HERO_STATS.map((s) => (
            <div key={s.n} style={{ background: "var(--bg2)", padding: "20px 22px" }}>
              <div
                className="gt3 stat-glow"
                style={{ fontSize: 28, fontWeight: 700, letterSpacing: -1, lineHeight: 1, marginBottom: 4 }}
              >
                {s.n}
              </div>
              <div style={{ fontSize: 13, color: "var(--text2)", lineHeight: 1.35, fontWeight: 400 }}>
                {s.l}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
