import { useState } from "react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { SERVICES } from "@/constants";
import type { Service } from "@/types";

function ServiceCard({ svc }: { svc: Service }) {
  const [hovered, setHovered] = useState(false);
  const ref = useScrollReveal<HTMLDivElement>();

  return (
    <div
      ref={ref}
      className={`rev ${svc.delay} glass-card`}
      onMouseEnter={(e) => {
        setHovered(true);
        (e.currentTarget as HTMLDivElement).style.boxShadow =
          "0 0 40px rgba(99,102,241,0.18), 0 8px 32px rgba(0,0,0,0.12)";
      }}
      onMouseLeave={(e) => {
        setHovered(false);
        (e.currentTarget as HTMLDivElement).style.boxShadow = "none";
      }}
      style={{ padding: "32px 28px", position: "relative", overflow: "hidden", borderRadius: 12 }}
    >
      <div
        style={{
          height: 1,
          background: "var(--g3)",
          marginBottom: 24,
          opacity: hovered ? 1 : 0.5,
          transition: "opacity 0.3s",
        }}
      />
      <div className="gt3" style={{ fontFamily: "var(--mono)", fontSize: 10, letterSpacing: "0.1em", marginBottom: 12 }}>
        {svc.num}
      </div>
      <div style={{ fontSize: 17, fontWeight: 600, color: "var(--text)", marginBottom: 10, letterSpacing: "-0.3px", lineHeight: 1.2 }}>
        {svc.name}
      </div>
      <div style={{ fontSize: 14, color: "var(--text2)", lineHeight: 1.55, marginBottom: 16, fontWeight: 400 }}>
        {svc.line}
      </div>
      {/* Outcome line */}
      <div
        style={{
          fontSize: 12,
          color: "var(--text3)",
          fontFamily: "var(--mono)",
          borderTop: "1px solid var(--b)",
          paddingTop: 12,
          marginBottom: 14,
        }}
      >
        <span className="gt3" style={{ fontWeight: 600, fontSize: 11 }}>Outcome: </span>
        {svc.outcome}
      </div>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 5 }}>
        {svc.stack.map((t) => (
          <span
            key={t}
            style={{
              fontFamily: "var(--mono)",
              fontSize: 10,
              color: "var(--text2)",
              background: "rgba(99,102,241,0.07)",
              border: "1px solid rgba(99,102,241,0.15)",
              borderRadius: 3,
              padding: "2px 7px",
            }}
          >
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function ServicesSection() {
  return (
    <section
      id="what-we-build"
      style={{
        background: "var(--bg)",
        borderTop: "1px solid var(--b)",
        padding: "90px 6vw",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div className="section-grid" />
      {/* Depth orb */}
      <div style={{ position: "absolute", width: 600, height: 600, top: "20%", right: "-10%", borderRadius: "50%", background: "radial-gradient(circle, rgba(168,85,247,0.07) 0%, transparent 65%)", filter: "blur(80px)", pointerEvents: "none" }} />
      <div style={{ maxWidth: 1100, margin: "0 auto", position: "relative", zIndex: 1 }}>
        <div style={{ marginBottom: 44 }}>
          <div className="gt3" style={{ fontFamily: "var(--mono)", fontSize: 11, letterSpacing: "0.1em", marginBottom: 10 }}>
            What We Build
          </div>
          <h2 className="font-display" style={{ fontSize: "clamp(28px, 4vw, 48px)", fontWeight: 700, letterSpacing: "-1.2px", lineHeight: 1.08, color: "var(--text)", marginBottom: 14 }}>
            Focused Product Engineering
          </h2>
          <p style={{ fontSize: 16, color: "var(--text2)", maxWidth: 500, lineHeight: 1.7, fontWeight: 400 }}>
            We take on scoped builds where product thinking, architecture, and delivery speed all matter.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: 1,
            background: "var(--b)",
            border: "1px solid var(--b)",
            borderRadius: 12,
            overflow: "hidden",
          }}
          className="max-nav:!grid-cols-1"
        >
          {SERVICES.map((s) => (
            <ServiceCard key={s.num} svc={s} />
          ))}
        </div>
      </div>
    </section>
  );
}
