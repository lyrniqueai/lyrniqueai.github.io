import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import SectionHeader from "@/components/common/SectionHeader";
import { FAQ_ITEMS } from "@/constants";
import type { FAQItem } from "@/types";

// ── FAQItem ───────────────────────────────────────────────────────────────────

function FAQRow({ item, index }: { item: FAQItem; index: number }) {
  const [open, setOpen] = useState(false);

  return (
    <div style={{ borderBottom: "1px solid var(--b)", overflow: "hidden" }}>
      <button
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        style={{
          width: "100%",
          background: "none",
          border: "none",
          padding: "20px 0",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 16,
          cursor: "pointer",
          textAlign: "left",
        }}
      >
        <span style={{ fontSize: 15, fontWeight: 600, color: "var(--text)", lineHeight: 1.4, fontFamily: "'Inter', sans-serif" }}>
          <span className="gt3" style={{ fontFamily: "var(--mono)", fontSize: 11, marginRight: 12, opacity: 0.7 }}>
            {String(index + 1).padStart(2, "0")}
          </span>
          {item.q}
        </span>
        <ChevronDown
          style={{
            width: 18,
            height: 18,
            color: "var(--text3)",
            flexShrink: 0,
            transform: open ? "rotate(180deg)" : "rotate(0deg)",
            transition: "transform 0.25s",
          }}
        />
      </button>

      <div style={{ maxHeight: open ? 400 : 0, overflow: "hidden", transition: "max-height 0.3s ease" }}>
        <p
          style={{
            fontSize: 15,
            color: "var(--text2)",
            lineHeight: 1.75,
            fontWeight: 400,
            paddingBottom: 20,
            paddingLeft: 30,
            margin: 0,
          }}
        >
          {item.a}
        </p>
      </div>
    </div>
  );
}

// ── FAQSection ────────────────────────────────────────────────────────────────

const MID = Math.ceil(FAQ_ITEMS.length / 2);

export default function FAQSection() {
  const ref = useScrollReveal<HTMLDivElement>();

  return (
    <section
      id="faq"
      style={{ background: "var(--bg2)", borderTop: "1px solid var(--b)", padding: "90px 6vw" }}
    >
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <SectionHeader
          eyebrow="FAQ"
          title={<>Questions we hear<br />before every project.</>}
          sub="We'd rather answer the hard ones upfront than have you discover the answers mid-project."
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
              Ask them in the first call — no question about data, accuracy, or timelines is too basic, and no NDAs required before we talk.
            </div>
          </div>
          <a href="#contact" className="btn-grad" style={{ fontSize: 14, padding: "10px 22px" }}>
            Book discovery call →
          </a>
        </div>
      </div>
    </section>
  );
}
