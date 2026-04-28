import { ExternalLink } from "lucide-react";

interface MentorCardProps {
  name: string;
  experience: string;
  projects: string;
  highlights: string;
  linkedin?: string;
  company?: string;
}

const MentorCard = ({ name, experience, projects, highlights, linkedin, company }: MentorCardProps) => {
  const initials = name.split(" ").map((w) => w[0]).join("").slice(0, 2).toUpperCase();

  return (
    <div
      className="acad-glass"
      style={{ borderRadius: 12, padding: 24, position: "relative", overflow: "hidden" }}
    >
      {/* Top gradient line */}
      <div style={{
        position: "absolute", top: 0, left: 0, right: 0, height: 1,
        background: "linear-gradient(90deg, #0088ff, #00ccff)",
      }} />

      <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: 16 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
          {/* Avatar */}
          <div style={{
            width: 48, height: 48, borderRadius: "50%", flexShrink: 0,
            background: "linear-gradient(135deg, #0088ff, #00ccff)",
            display: "flex", alignItems: "center", justifyContent: "center",
            fontSize: 15, fontWeight: 700, color: "#fff",
            boxShadow: "0 0 16px rgba(0,136,255,0.35)",
          }}>
            {initials}
          </div>
          <div>
            <h3 className="font-display" style={{ fontSize: 16, fontWeight: 700, marginBottom: 2 }}>{name}</h3>
            <p style={{ fontSize: 12, color: "hsl(var(--primary))", fontFamily: "var(--mono)" }}>{experience}</p>
          </div>
        </div>
        {linkedin && (
          <a
            href={`https://${linkedin}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            <ExternalLink className="h-4 w-4" />
          </a>
        )}
      </div>

      {company && (
        <div style={{
          fontFamily: "var(--mono)", fontSize: 11, letterSpacing: "0.05em",
          color: "hsl(var(--muted-foreground))",
          background: "rgba(0,136,255,0.08)",
          border: "1px solid rgba(0,136,255,0.14)",
          borderRadius: 4, padding: "3px 10px",
          display: "inline-block", marginBottom: 14,
        }}>
          @ {company}
        </div>
      )}

      <div style={{ display: "flex", flexDirection: "column", gap: 8, fontSize: 13 }}>
        <p style={{ color: "hsl(var(--muted-foreground))", lineHeight: 1.55 }}>
          <span style={{ fontWeight: 600, color: "hsl(var(--foreground))" }}>Projects: </span>
          {projects}
        </p>
        <p style={{ color: "hsl(var(--muted-foreground))", lineHeight: 1.55 }}>
          <span style={{ fontWeight: 600, color: "hsl(var(--foreground))" }}>Highlights: </span>
          {highlights}
        </p>
      </div>
    </div>
  );
};

export default MentorCard;
