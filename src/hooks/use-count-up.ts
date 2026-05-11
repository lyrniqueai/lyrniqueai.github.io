import { useEffect, useRef, useState } from "react";

/**
 * Animates a numeric string from 0 to its target value when the element
 * enters the viewport. Handles strings like "94%", "12 days", "200ms".
 */
export function useCountUp<T extends HTMLElement>(
  value: string,
  duration = 1400,
) {
  const ref = useRef<T>(null);
  const [displayed, setDisplayed] = useState("0");
  const [triggered, setTriggered] = useState(false);

  // Extract leading number and suffix (e.g. "94%" → [94, "%"])
  const match = value.match(/^([\d.]+)(.*)/);
  const target = match ? parseFloat(match[1]) : null;
  const suffix = match ? match[2] : value;

  useEffect(() => {
    if (triggered || target === null) return;

    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTriggered(true);
          observer.disconnect();
        }
      },
      { threshold: 0.4 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [triggered, target]);

  useEffect(() => {
    if (!triggered || target === null) return;

    const targetValue = target;
    const start = performance.now();
    let raf: number;

    function step(now: number) {
      const progress = Math.min((now - start) / duration, 1);
      // Ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = targetValue * eased;

      const formatted =
        Number.isInteger(targetValue)
          ? Math.round(current).toString()
          : current.toFixed(1);

      setDisplayed(formatted + suffix);

      if (progress < 1) {
        raf = requestAnimationFrame(step);
      }
    }

    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [triggered, target, suffix, duration]);

  // If no numeric part, just display as-is immediately
  if (target === null) return { ref, displayed: value };

  return { ref, displayed: triggered ? displayed : "0" + suffix };
}
