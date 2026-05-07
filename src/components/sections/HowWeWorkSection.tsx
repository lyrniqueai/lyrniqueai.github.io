import { useState, useEffect, useRef } from "react";
import { PHASES } from "@/constants";

// ── HowWeWorkSection ──────────────────────────────────────────────────────────

export default function HowWeWorkSection() {
  const [current, setCurrent] = useState(0);
  const [visible, setVisible] = useState(true);
  const clickTimeoutRef = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);

  // Auto-advance phases every 5 s — cleanup both interval and pending timeout.
  useEffect(() => {
    let fadeTimeout: ReturnType<typeof setTimeout>;

    const interval = setInterval(() => {
      setVisible(false);
      fadeTimeout = setTimeout(() => {
        setCurrent((c) => (c + 1) % PHASES.length);
        setVisible(true);
      }, 280);
    }, 5000);

    return () => {
      clearInterval(interval);
      clearTimeout(fadeTimeout);
    };
  }, []);

  // Cleanup any pending click-initiated fade on unmount.
  useEffect(() => () => clearTimeout(clickTimeoutRef.current), []);

  const handlePhaseClick = (i: number) => {
    if (i === current) return;
    setVisible(false);
    clearTimeout(clickTimeoutRef.current);
    clickTimeoutRef.current = setTimeout(() => {
      setCurrent(i);
      setVisible(true);
    }, 200);
  };

  const phase = PHASES[current];

  return (
    <section
      id="how"
      style={{ background: "var(--bg2)", borderTop: "1px solid var(--b)", padding: "90px 6vw" }}
    >
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>

        {/* Section header */}
        <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", flexWrap: "wrap", gap: 16, marginBottom: 36 }}>
          <div>
            <div className="gt3" style={{ fontFamily: "var(--mono)", fontSize: 11, letterSpacing: "0.1em", marginBottom: 8 }}>
              How we work
            </div>
            <h2 className="font-display" style={{ fontSize: "clamp(26px, 3.5vw, 44px)", fontWeight: 700, letterSpacing: "-1.2px", lineHeight: 1.08, color: "var(--text)", margin: 0 }}>
              AI runs through every handoff.
            </h2>
          </div>
          <p style={{ fontSize: 14, color: "var(--text2)", maxWidth: 340, lineHeight: 1.6, fontWeight: 400, margin: 0 }}>
            We embed AI across every phase — not just the build. See what you receive at each stage and how fast.
          </p>
        </div>

        {/* Phase tab strip */}
        <div style={{ display: "flex", borderBottom: "1px solid var(--b)", marginBottom: 24 }}>
          {PHASES.map((p, i) => {
            const Icon = p.icon;
            const isActive = current === i;
            return (
              <button
                key={p.label}
                onClick={() => handlePhaseClick(i)}
                aria-selected={isActive}
                style={{
                  flex: 1,
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 6,
                  padding: "11px 6px",
                  background: "transparent",
                  border: "none",
                  cursor: "pointer",
                  transition: "all 0.2s",
                  position: "relative",
                  marginBottom: -1,
                }}
              >
                <Icon
                  size={14}
                  color={isActive ? "#a855f7" : "var(--text3)"}
                  strokeWidth={isActive ? 2 : 1.5}
                  style={{ transition: "all 0.2s", flexShrink: 0 }}
                />
                <span
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: 12,
                    fontWeight: isActive ? 600 : 400,
                    color: isActive ? "var(--text)" : "var(--text3)",
                    transition: "all 0.2s",
                  }}
                >
                  {p.short}
                </span>
                {isActive && (
                  <span
                    style={{
                      position: "absolute",
                      bottom: -1,
                      left: 0,
                      right: 0,
                      height: 2,
                      background: "linear-gradient(90deg, #6366f1, #a855f7)",
                      borderRadius: "2px 2px 0 0",
                    }}
                  />
                )}
              </button>
            );
          })}
        </div>

        {/* Content card */}
        <div
          style={{
            borderRadius: 14,
            overflow: "hidden",
            border: "1px solid rgba(99,102,241,0.18)",
            boxShadow: "0 0 40px rgba(99,102,241,0.07), 0 4px 24px rgba(0,0,0,0.08)",
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(6px)",
            transition: "opacity 0.28s ease, transform 0.28s ease",
          }}
        >
          {/* Card header */}
          <div
            style={{
              padding: "18px 28px",
              background: "linear-gradient(135deg, rgba(99,102,241,0.07) 0%, rgba(168,85,247,0.05) 100%)",
              borderBottom: "1px solid var(--b)",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              flexWrap: "wrap",
              gap: 12,
            }}
          >
            <div>
              <div style={{ fontFamily: "var(--mono)", fontSize: 10, color: "var(--text3)", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 4 }}>
                // {phase.eyebrow}
              </div>
              <div style={{ fontSize: 20, fontWeight: 700, color: "var(--text)", letterSpacing: "-0.5px", lineHeight: 1.2 }}>
                {phase.title}
              </div>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
              <div
                style={{
                  width: 6,
                  height: 6,
                  borderRadius: "50%",
                  background: "#22c55e",
                  boxShadow: "0 0 8px rgba(34,197,94,0.7)",
                }}
              />
              <span style={{ fontFamily: "var(--mono)", fontSize: 10, color: "var(--text3)", letterSpacing: "0.1em" }}>
                AI-ENHANCED
              </span>
            </div>
          </div>

          {/* Two-column body */}
          <div
            style={{ display: "grid", gridTemplateColumns: "1fr 1fr", background: "var(--bg)" }}
            className="max-nav:!grid-cols-1"
          >
            {/* Left — deliverables */}
            <div style={{ padding: "24px 28px", borderRight: "1px solid var(--b)" }} className="max-nav:border-r-0 max-nav:border-b max-nav:border-[var(--b)]">
              <div style={{ fontFamily: "var(--mono)", fontSize: 9, color: "var(--text3)", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 16 }}>
                What you receive
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                {phase.deliverables.map((d) => (
                  <div key={d} style={{ display: "flex", alignItems: "center", gap: 12 }}>
                    <div
                      style={{
                        width: 20,
                        height: 20,
                        borderRadius: "50%",
                        background: "linear-gradient(135deg, rgba(99,102,241,0.15), rgba(168,85,247,0.15))",
                        border: "1px solid rgba(99,102,241,0.25)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                      }}
                    >
                      <span style={{ fontSize: 9, fontWeight: 800, color: "#6366f1" }}>✓</span>
                    </div>
                    <span style={{ fontSize: 14, color: "var(--text)", lineHeight: 1.4, fontWeight: 400 }}>
                      {d}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right — speed comparison */}
            <div style={{ padding: "24px 28px" }}>
              <div style={{ fontFamily: "var(--mono)", fontSize: 9, color: "var(--text3)", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 16 }}>
                Speed comparison
              </div>

              <div style={{ marginBottom: 20 }}>
                <div
                  className="gt"
                  style={{ fontSize: 40, fontWeight: 800, fontFamily: "var(--mono)", letterSpacing: "-1px", lineHeight: 1, marginBottom: 4 }}
                >
                  {phase.withLyrnique}
                </div>
                <div style={{ fontSize: 12, color: "var(--text3)", fontFamily: "var(--mono)" }}>
                  with Lyrnique · vs {phase.traditional} traditionally
                </div>
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                {/* Traditional bar */}
                <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                  <div style={{ fontSize: 11, color: "var(--text3)", fontFamily: "var(--mono)", width: 72, flexShrink: 0 }}>
                    Traditional
                  </div>
                  <div style={{ flex: 1, height: 5, borderRadius: 3, background: "rgba(120,120,140,0.12)", overflow: "hidden" }}>
                    <div
                      style={{
                        height: "100%",
                        width: `${phase.tBar}%`,
                        borderRadius: 3,
                        background: "rgba(156,163,175,0.35)",
                        transition: "width 0.55s cubic-bezier(0.4,0,0.2,1)",
                      }}
                    />
                  </div>
                </div>
                {/* Lyrnique bar */}
                <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                  <div className="gt3" style={{ fontSize: 11, fontFamily: "var(--mono)", fontWeight: 600, width: 72, flexShrink: 0 }}>
                    Lyrnique
                  </div>
                  <div style={{ flex: 1, height: 5, borderRadius: 3, background: "rgba(120,120,140,0.12)", overflow: "hidden" }}>
                    <div
                      style={{
                        height: "100%",
                        width: `${phase.lBar}%`,
                        borderRadius: 3,
                        background: "linear-gradient(90deg, #6366f1, #a855f7)",
                        boxShadow: "0 0 8px rgba(99,102,241,0.55)",
                        transition: "width 0.55s cubic-bezier(0.4,0,0.2,1)",
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
