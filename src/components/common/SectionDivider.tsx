export default function SectionDivider() {
  return (
    <div
      aria-hidden="true"
      style={{
        height: 1,
        background:
          "linear-gradient(90deg, transparent 0%, rgba(99,102,241,0.5) 25%, rgba(168,85,247,0.5) 60%, rgba(6,182,212,0.3) 80%, transparent 100%)",
        margin: 0,
        padding: 0,
        border: "none",
        boxShadow: "0 0 12px rgba(99,102,241,0.25)",
      }}
    />
  );
}
