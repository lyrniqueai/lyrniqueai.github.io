import { AUDIENCE_TIERS } from "@/constants/academy";

export default function AudienceSection() {
  return (
    <section
      style={{
        padding: "64px 6vw",
        borderTop: "1px solid hsl(var(--border))",
        borderBottom: "1px solid hsl(var(--border))",
        background: "hsl(var(--card) / 0.3)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 40 }}>
          <div style={{ fontFamily: "var(--mono)", fontSize: 11, letterSpacing: "0.1em", color: "hsl(var(--primary))", marginBottom: 10 }}>
            Who is Lyrnique for?
          </div>
          <h2 className="font-display" style={{ fontSize: "clamp(24px, 3vw, 36px)", fontWeight: 700, letterSpacing: "-0.8px", color: "hsl(var(--foreground))" }}>
            Designed for every stage of learning
          </h2>
        </div>

        <div
          style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16, maxWidth: 860, margin: "0 auto" }}
          className="max-nav:grid-cols-1"
        >
          {AUDIENCE_TIERS.map((a) => (
            <div
              key={a.title}
              className="acad-glass"
              style={{ borderRadius: 12, padding: "28px 22px", textAlign: "center", position: "relative", overflow: "hidden" }}
            >
              <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 1, background: `linear-gradient(90deg, transparent, ${a.border}, transparent)` }} />
              <div style={{ width: 56, height: 56, borderRadius: "50%", background: a.color, border: `1px solid ${a.border}`, display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 16px" }}>
                <a.icon style={{ width: 26, height: 26, color: "hsl(var(--primary))" }} />
              </div>
              <h3 className="font-display" style={{ fontSize: 15, fontWeight: 600, marginBottom: 8, color: "hsl(var(--foreground))" }}>
                {a.title}
              </h3>
              <p style={{ fontSize: 13, color: "hsl(var(--muted-foreground))", lineHeight: 1.55 }}>
                {a.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
