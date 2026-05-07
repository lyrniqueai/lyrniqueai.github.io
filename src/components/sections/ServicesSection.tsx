import { useState } from "react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import SectionHeader from "@/components/common/SectionHeader";
import { SERVICES, DELIVERABLES } from "@/constants";
import type { Service } from "@/types";

// ── ServiceCard ───────────────────────────────────────────────────────────────

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
      <div style={{ fontSize: 14, color: "var(--text2)", lineHeight: 1.55, marginBottom: 22, fontWeight: 400 }}>
        {svc.line}
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

// ── ServicesSection ───────────────────────────────────────────────────────────

export default function ServicesSection() {
  return (
    <section
      id="services"
      style={{
        background: "var(--bg)",
        borderTop: "1px solid var(--b)",
        padding: "90px 6vw",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div className="section-grid" />
      <div style={{ maxWidth: 1100, margin: "0 auto", position: "relative", zIndex: 1 }}>
        <SectionHeader
          eyebrow="Services"
          title={<>Custom Software Development,<br />AI Integration & Product Discovery.</>}
          sub="Three focused services. AI embedded at every stage — not bolted on at the end. Faster delivery, fewer errors, software that scales."
        />

        {/* Service cards grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
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

        {/* What we deliver — icon card grid */}
        <div style={{ marginTop: 40, paddingTop: 32, borderTop: "1px solid var(--b)" }}>
          <div className="gt3" style={{ fontFamily: "var(--mono)", fontSize: 11, letterSpacing: "0.1em", marginBottom: 20 }}>
            // what we deliver
          </div>
          <div
            style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: 10 }}
            className="max-nav:!grid-cols-2"
          >
            {DELIVERABLES.map(({ icon: Icon, label }) => (
              <div
                key={label}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: 10,
                  padding: "18px 12px",
                  background: "rgba(99,102,241,0.03)",
                  border: "1px solid rgba(99,102,241,0.12)",
                  borderRadius: 10,
                  cursor: "default",
                  transition: "all 0.2s",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLDivElement;
                  el.style.background = "rgba(99,102,241,0.08)";
                  el.style.borderColor = "rgba(99,102,241,0.28)";
                  el.style.transform = "translateY(-2px)";
                  el.style.boxShadow = "0 6px 20px rgba(99,102,241,0.12)";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLDivElement;
                  el.style.background = "rgba(99,102,241,0.03)";
                  el.style.borderColor = "rgba(99,102,241,0.12)";
                  el.style.transform = "none";
                  el.style.boxShadow = "none";
                }}
              >
                <div
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: 10,
                    background: "linear-gradient(135deg, rgba(99,102,241,0.14), rgba(168,85,247,0.10))",
                    border: "1px solid rgba(99,102,241,0.2)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Icon size={18} color="#7c7fef" strokeWidth={1.6} />
                </div>
                <span
                  style={{
                    fontSize: 11,
                    fontWeight: 500,
                    color: "var(--text2)",
                    textAlign: "center",
                    lineHeight: 1.35,
                    fontFamily: "'Inter', sans-serif",
                  }}
                >
                  {label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
