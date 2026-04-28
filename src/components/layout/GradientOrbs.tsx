interface GradientOrbsProps {
  variant?: "hero" | "cta";
}

export default function GradientOrbs({ variant = "hero" }: GradientOrbsProps) {
  if (variant === "cta") {
    return (
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 800,
          height: 400,
          background:
            "radial-gradient(ellipse, rgba(99,102,241,0.18) 0%, rgba(168,85,247,0.12) 40%, transparent 70%)",
          pointerEvents: "none",
          animation: "float-a 10s ease-in-out infinite",
        }}
      />
    );
  }
  return (
    <>
      {/* Primary indigo orb — top left */}
      <div
        style={{
          position: "absolute",
          width: 700,
          height: 700,
          top: -200,
          left: -150,
          borderRadius: "50%",
          filter: "blur(90px)",
          pointerEvents: "none",
          background: "radial-gradient(circle, rgba(99,102,241,0.28), transparent 65%)",
          animation: "float-a 14s ease-in-out infinite",
        }}
      />
      {/* Violet orb — top right */}
      <div
        style={{
          position: "absolute",
          width: 550,
          height: 550,
          top: 50,
          right: -120,
          borderRadius: "50%",
          filter: "blur(90px)",
          pointerEvents: "none",
          background: "radial-gradient(circle, rgba(168,85,247,0.22), transparent 65%)",
          animation: "float-b 18s ease-in-out infinite",
        }}
      />
      {/* Cyan orb — bottom center */}
      <div
        style={{
          position: "absolute",
          width: 420,
          height: 420,
          bottom: -80,
          left: "35%",
          borderRadius: "50%",
          filter: "blur(90px)",
          pointerEvents: "none",
          background: "radial-gradient(circle, rgba(6,182,212,0.16), transparent 65%)",
          animation: "float-c 22s ease-in-out infinite",
        }}
      />
    </>
  );
}
