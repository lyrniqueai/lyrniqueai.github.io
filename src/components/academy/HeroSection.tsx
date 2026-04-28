import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ACADEMY_HERO_STATS, TRUST_PILLS } from "@/constants/academy";

export default function AcademyHeroSection() {
  return (
    <section
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        overflow: "hidden",
        padding: "110px 6vw 80px",
        background: "hsl(var(--background))",
      }}
    >
      {/* Ambient orbs */}
      <div style={{ position: "absolute", width: 700, height: 700, top: "-15%", left: "-10%", borderRadius: "50%", filter: "blur(90px)", pointerEvents: "none", background: "radial-gradient(circle, rgba(0,136,255,0.22), transparent 65%)", animation: "float-a 14s ease-in-out infinite" }} />
      <div style={{ position: "absolute", width: 520, height: 520, top: "5%", right: "-8%", borderRadius: "50%", filter: "blur(90px)", pointerEvents: "none", background: "radial-gradient(circle, rgba(0,220,255,0.16), transparent 65%)", animation: "float-b 18s ease-in-out infinite" }} />
      <div style={{ position: "absolute", width: 400, height: 400, bottom: "-8%", left: "32%", borderRadius: "50%", filter: "blur(90px)", pointerEvents: "none", background: "radial-gradient(circle, rgba(139,92,246,0.14), transparent 65%)", animation: "float-c 22s ease-in-out infinite" }} />
      <div className="acad-grid" />

      {/* Content */}
      <div style={{ maxWidth: 900, width: "100%", textAlign: "center", position: "relative", zIndex: 1 }}>
        {/* Eyebrow */}
        <div style={{ display: "flex", justifyContent: "center", marginBottom: 36 }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 8, fontFamily: "var(--mono)", fontSize: 11, color: "hsl(var(--muted-foreground))", border: "1px solid rgba(0,136,255,0.22)", borderRadius: 4, padding: "5px 14px", letterSpacing: "0.06em" }}>
            <span style={{ width: 6, height: 6, borderRadius: "50%", background: "hsl(var(--primary))", display: "inline-block", animation: "pulse-dot 2s infinite", flexShrink: 0 }} />
            Lyrnique Academy · Generative AI
          </div>
        </div>

        {/* Headline */}
        <h1
          className="font-display"
          style={{ fontSize: "clamp(40px, 7vw, 82px)", fontWeight: 700, lineHeight: 1.05, letterSpacing: "-2.5px", marginBottom: 24 }}
        >
          <span className="acad-shimmer-text">Generative AI Courses</span>
          <br />
          <span style={{ color: "hsl(var(--foreground))" }}>for the Real World</span>
        </h1>

        {/* Sub */}
        <p style={{ fontSize: 18, color: "hsl(var(--muted-foreground))", maxWidth: 520, margin: "0 auto 36px", lineHeight: 1.7, fontWeight: 400 }}>
          Learn hands-on GenAI skills with real projects, expert mentors, and industry-recognised certification.
        </p>

        {/* CTAs */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: 12, justifyContent: "center", marginBottom: 36 }}>
          <Link to="/academy/courses">
            <Button
              size="lg"
              className="bg-gradient-primary border-0 text-foreground font-semibold text-base px-8 py-6 hover:opacity-90 transition-all hover:-translate-y-0.5"
              onMouseEnter={(e) => (e.currentTarget.style.boxShadow = "0 0 24px 4px rgba(0,136,255,0.3)")}
              onMouseLeave={(e) => (e.currentTarget.style.boxShadow = "none")}
            >
              Explore Courses
            </Button>
          </Link>
          <Link to="/academy/courses">
            <Button variant="outline" size="lg" className="border-primary/40 text-primary hover:bg-primary/10 font-semibold text-base px-8 py-6">
              View Learning Paths
            </Button>
          </Link>
        </div>

        {/* Trust pills */}
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 10, marginBottom: 72 }}>
          {TRUST_PILLS.map((t) => (
            <div
              key={t.text}
              style={{ display: "flex", alignItems: "center", gap: 8, borderRadius: 999, border: "1px solid rgba(0,136,255,0.15)", background: "rgba(0,8,24,0.4)", backdropFilter: "blur(8px)", padding: "7px 16px", fontSize: 13, color: "hsl(var(--muted-foreground))" }}
            >
              <t.icon style={{ width: 14, height: 14, color: "#0088ff", flexShrink: 0 }} />
              <span>{t.text}</span>
            </div>
          ))}
        </div>

        {/* Stat strip */}
        <div style={{ maxWidth: 560, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(3, 1fr)", border: "1px solid rgba(0,136,255,0.14)", borderRadius: 12, overflow: "hidden", background: "rgba(0,8,24,0.4)", gap: 1 }}>
          {ACADEMY_HERO_STATS.map((s, i) => (
            <div
              key={s.n}
              style={{ background: "rgba(0,10,28,0.6)", padding: "18px 12px", textAlign: "center", borderRight: i < ACADEMY_HERO_STATS.length - 1 ? "1px solid rgba(0,136,255,0.10)" : "none" }}
            >
              <div className="gradient-text acad-stat-glow font-display" style={{ fontSize: 26, fontWeight: 700, letterSpacing: -1, lineHeight: 1, marginBottom: 4 }}>
                {s.n}
              </div>
              <div style={{ fontSize: 11, color: "hsl(var(--muted-foreground))", lineHeight: 1.35 }}>
                {s.l}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
