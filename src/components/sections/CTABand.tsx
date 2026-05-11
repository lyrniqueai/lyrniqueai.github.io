import { useScrollReveal } from "@/hooks/use-scroll-reveal";

export default function CTABand() {
  const ref = useScrollReveal<HTMLDivElement>();

  return (
    <div
      style={{
        padding: "100px 6vw",
        position: "relative",
        overflow: "hidden",
        textAlign: "center",
        background: "var(--bg)",
      }}
    >
      {/* Mesh gradient background */}
      <div style={{ position: "absolute", inset: 0, pointerEvents: "none" }}>
        {/* Primary glow — center */}
        <div style={{
          position: "absolute", inset: 0,
          background: "radial-gradient(ellipse 80% 60% at 50% 50%, rgba(99,102,241,0.18) 0%, transparent 70%)",
        }} />
        {/* Violet burst — top left */}
        <div style={{
          position: "absolute", width: 500, height: 500, top: -100, left: -80, borderRadius: "50%",
          background: "radial-gradient(circle, rgba(168,85,247,0.12) 0%, transparent 65%)",
          filter: "blur(60px)", animation: "float-a 16s ease-in-out infinite",
        }} />
        {/* Cyan accent — bottom right */}
        <div style={{
          position: "absolute", width: 400, height: 400, bottom: -80, right: -60, borderRadius: "50%",
          background: "radial-gradient(circle, rgba(6,182,212,0.10) 0%, transparent 65%)",
          filter: "blur(60px)", animation: "float-b 20s ease-in-out infinite",
        }} />
        {/* Grid overlay */}
        <div style={{
          position: "absolute", inset: 0,
          backgroundImage: "radial-gradient(circle, rgba(99,102,241,0.12) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
          opacity: 0.5,
        }} />
        {/* Horizontal beam */}
        <div style={{
          position: "absolute", top: "50%", left: 0, right: 0, height: 1,
          background: "linear-gradient(90deg, transparent 0%, rgba(99,102,241,0.3) 20%, rgba(168,85,247,0.3) 50%, rgba(6,182,212,0.2) 80%, transparent 100%)",
          transform: "translateY(-50%)",
          boxShadow: "0 0 20px rgba(99,102,241,0.3)",
        }} />
      </div>

      <div ref={ref} className="rev" style={{ position: "relative", zIndex: 1 }}>
        {/* Pill badge */}
        <div style={{ display: "flex", justifyContent: "center", marginBottom: 20 }}>
          <div
            className="grad-border-anim"
            style={{
              display: "inline-flex", alignItems: "center", gap: 7,
              fontFamily: "var(--mono)", fontSize: 11, color: "var(--text2)",
              borderRadius: 999, padding: "5px 14px", letterSpacing: "0.06em",
            }}
          >
            <span style={{ width: 6, height: 6, borderRadius: "50%", background: "var(--g2)", animation: "pulse-dot 2s infinite", flexShrink: 0 }} />
            Ready to build?
          </div>
        </div>

        <h2
          className="font-display"
          style={{
            fontSize: "clamp(32px, 5vw, 64px)",
            fontWeight: 700,
            letterSpacing: "-2px",
            lineHeight: 1.06,
            color: "var(--text)",
            marginBottom: 18,
          }}
        >
          Let's Discuss<br />
          <span className="gt-anim">Your Product</span>
        </h2>

        <p style={{ fontSize: 18, color: "var(--text2)", fontWeight: 400, maxWidth: 500, margin: "0 auto 8px" }}>
          Book a 30-minute technical scoping call and leave with a clear view of scope, timeline, and fit.
        </p>
        <p style={{ fontSize: 13, color: "var(--text3)", marginBottom: 40, fontWeight: 400, fontFamily: "var(--mono)" }}>
          Direct access to the engineering team · No salespeople
        </p>

        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 12, flexWrap: "wrap" }}>
          <a
            href="#contact"
            className="btn-hero"
            style={{ fontSize: 16, padding: "15px 36px" }}
          >
            Book Your Discovery Call{" "}
            <svg width="16" height="16" viewBox="0 0 14 14" fill="none">
              <path d="M3 7h8M8 4l3 3-3 3" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>

        {/* Trust row */}
        <div
          style={{
            display: "flex", justifyContent: "center", flexWrap: "wrap", gap: 20,
            marginTop: 32, fontFamily: "var(--mono)", fontSize: 11, color: "var(--text3)",
          }}
        >
          {["Free discovery call", "Fixed-scope proposal", "100% IP ownership", "No commitment required"].map((t, i) => (
            <span key={t} style={{ display: "flex", alignItems: "center", gap: 8 }}>
              {i > 0 && <span style={{ width: 3, height: 3, borderRadius: "50%", background: "var(--text3)" }} />}
              {t}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
