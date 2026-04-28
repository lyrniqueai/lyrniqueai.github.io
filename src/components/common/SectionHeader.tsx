import type { ReactNode } from "react";

interface SectionHeaderProps {
  /** Small all-caps eyebrow label above the heading */
  eyebrow: string;
  /** Main h2 heading — accepts ReactNode for embedded spans/breaks */
  title: ReactNode;
  /** Supporting paragraph below the heading */
  sub: string;
  /** max-width applied to the sub paragraph (default: 560) */
  subMaxWidth?: number;
  /** Bottom margin below the sub paragraph in px (default: 52) */
  mb?: number;
}

export default function SectionHeader({
  eyebrow,
  title,
  sub,
  subMaxWidth = 560,
  mb = 52,
}: SectionHeaderProps) {
  return (
    <>
      <div
        className="gt3"
        style={{
          fontFamily: "var(--mono)",
          fontSize: 12,
          letterSpacing: "0.1em",
          marginBottom: 10,
        }}
      >
        {eyebrow}
      </div>

      <h2
        className="font-display"
        style={{
          fontSize: "clamp(28px, 4vw, 48px)",
          fontWeight: 700,
          letterSpacing: "-1.2px",
          lineHeight: 1.08,
          color: "var(--text)",
          marginBottom: 14,
        }}
      >
        {title}
      </h2>

      <p
        style={{
          fontSize: 16,
          color: "var(--text2)",
          maxWidth: subMaxWidth,
          lineHeight: 1.7,
          fontWeight: 400,
          marginBottom: mb,
        }}
      >
        {sub}
      </p>
    </>
  );
}
