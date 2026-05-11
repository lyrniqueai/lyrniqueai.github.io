import { useEffect, useRef } from "react";

// Only render on pointer-fine (mouse) devices
const isPointerFine =
  typeof window !== "undefined" &&
  window.matchMedia("(pointer: fine)").matches;

export default function CursorGlow() {
  if (!isPointerFine) return null;
  const glowRef = useRef<HTMLDivElement>(null);
  const pos = useRef({ x: -200, y: -200 });
  const cur = useRef({ x: -200, y: -200 });
  const raf = useRef<number>(0);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      pos.current = { x: e.clientX, y: e.clientY };
    };
    window.addEventListener("mousemove", onMove, { passive: true });

    const loop = () => {
      // Lerp toward target with 8% ease per frame
      cur.current.x += (pos.current.x - cur.current.x) * 0.08;
      cur.current.y += (pos.current.y - cur.current.y) * 0.08;

      if (glowRef.current) {
        glowRef.current.style.transform =
          `translate(${cur.current.x - 200}px, ${cur.current.y - 200}px)`;
      }
      raf.current = requestAnimationFrame(loop);
    };
    raf.current = requestAnimationFrame(loop);

    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf.current);
    };
  }, []);

  return (
    <div
      ref={glowRef}
      aria-hidden="true"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: 400,
        height: 400,
        borderRadius: "50%",
        background:
          "radial-gradient(circle, rgba(99,102,241,0.10) 0%, rgba(168,85,247,0.05) 40%, transparent 70%)",
        pointerEvents: "none",
        zIndex: 9998,
        willChange: "transform",
        mixBlendMode: "screen",
      }}
    />
  );
}
