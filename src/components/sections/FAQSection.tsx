import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import SectionHeader from "@/components/common/SectionHeader";
import { FAQ_ITEMS } from "@/constants";
import type { FAQItem } from "@/types";

function FAQRow({ item, index }: { item: FAQItem; index: number }) {
  const [open, setOpen] = useState(false);

  return (
    <div
      style={{
        borderBottom: "1px solid var(--b)",
        overflow: "hidden",
        transition: "background 0.2s",
        borderRadius: open ? 8 : 0,
        background: open ? "rgba(99,102,241,0.03)" : "transparent",
      }}
    >
      <button
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        style={{
          width: "100%",
          background: "none",
          border: "none",
          padding: "20px 12px 20px 0",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 16,
          cursor: "pointer",
          textAlign: "left",
        }}
      >
        <span style={{ fontSize: 15, fontWeight: 600, color: open ? "var(--text)" : "var(--text)", lineHeight: 1.45, fontFamily: "'Inter', sans-serif", display: "flex", alignItems: "baseline", gap: 10 }}>
          <span className="gt3" style={{ fontFamily: "var(--mono)", fontSize: 10, flexShrink: 0, opacity: 0.6 }}>
            {String(index + 1).padStart(2, "0")}
          </span>
          {item.q}
        </span>
        <div
          style={{
            width: 24,
            height: 24,
            borderRadius: "50%",
            border: `1px solid ${open ? "rgba(99,102,241,0.4)" : "var(--b2)"}`,
            background: open ? "rgba(99,102,241,0.12)" : "transparent",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexShrink: 0,
            transition: "all 0.25s",
          }}
        >
          <ChevronDown
            style={{
              width: 13,
              height: 13,
              color: open ? "#8b8ff7" : "var(--text3)",
              transform: open ? "rotate(180deg)" : "rotate(0deg)",
              transition: "transform 0.25s, color 0.25s",
            }}
          />
        </div>
      </button>

      <div
        style={{
          maxHeight: open ? 500 : 0,
          overflow: "hidden",
          transition: "max-height 0.35s cubic-bezier(0.4, 0, 0.2, 1)",
        }}
      >
        <p
          style={{
            fontSize: 14,
            color: "var(--text2)",
            lineHeight: 1.8,
            fontWeight: 400,
            padding: "0 12px 20px 28px",
            margin: 0,
          }}
        >
          {item.a}
        </p>
      </div>
    </div>
  );
}

const MID = Math.ceil(FAQ_ITEMS.length / 2);

export default function FAQSection() {
  const ref = useScrollReveal<HTMLDivElement>();

  return (
    <section
      id="faq"
      style={{ background: "var(--bg2)", borderTop: "1px solid var(--b)", padding: "90px 6vw", position: "relative", overflow: "hidden" }}
    >
      {/* Depth orb */}
      <div style={{ position: "absolute", width: 500, height: 500, top: "10%", right: "-10%", borderRadius: "50%", background: "radial-gradient(circle, rgba(168,85,247,0.06) 0%, transparent 65%)", filter: "blur(80px)", pointerEvents: "none" }} />

      <div style={{ maxWidth: 1100, margin: "0 auto", position: "relative", zIndex: 1 }}>
        <SectionHeader
          eyebrow="FAQ"
          title={<>Common Questions</>}
          sub="Everything you need to know before we start. Direct answers, no sales spin."
        />

        <div
          ref={ref}
          className="rev max-nav:!grid-cols-1"
          style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0 72px" }}
        >
          <div>
            {FAQ_ITEMS.slice(0, MID).map((item, i) => (
              <FAQRow key={item.q} item={item} index={i} />
            ))}
          </div>
          <div>
            {FAQ_ITEMS.slice(MID).map((item, i) => (
              <FAQRow key={item.q} item={item} index={MID + i} />
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div
          style={{
            marginTop: 52,
            paddingTop: 36,
            borderTop: "1px solid var(--b)",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: 16,
          }}
        >
          <div>
            <div style={{ fontSize: 16, fontWeight: 600, color: "var(--text)", marginBottom: 4 }}>
              Still have questions?
            </div>
            <div style={{ fontSize: 14, color: "var(--text2)", fontWeight: 400 }}>
              Ask them in the first call — no NDAs required before we talk.
            </div>
          </div>
          <a href="#contact" className="btn-hero" style={{ fontSize: 14, padding: "11px 24px" }}>
            Book a discovery call →
          </a>
        </div>
      </div>
    </section>
  );
}
