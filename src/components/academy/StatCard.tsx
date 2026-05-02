interface StatCardProps {
  number: string;
  label: string;
}

const StatCard = ({ number, label }: StatCardProps) => {
  return (
    <div
      className="acad-glass"
      style={{
        borderRadius: 12,
        padding: "36px 24px",
        textAlign: "center",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Top gradient line */}
      <div style={{
        position: "absolute", top: 0, left: 0, right: 0, height: 1,
        background: "linear-gradient(90deg, #0088ff, #00ccff, #8b5cf6)",
      }} />
      <div
        className="gradient-text acad-stat-glow font-display"
        style={{ fontSize: 52, fontWeight: 700, letterSpacing: -2, lineHeight: 1, marginBottom: 10 }}
      >
        {number}
      </div>
      <div style={{ color: "hsl(var(--muted-foreground))", fontSize: 14, lineHeight: 1.5 }}>
        {label}
      </div>
    </div>
  );
};

export default StatCard;
