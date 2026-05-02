import { useRef, useEffect } from "react";

/**
 * Attaches an IntersectionObserver to the returned ref.
 * Adds the CSS class "on" once the element enters the viewport,
 * then disconnects — intentionally fires only once per mount.
 */
export function useScrollReveal<T extends HTMLElement>(
  opts?: IntersectionObserverInit,
) {
  const ref = useRef<T>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("on");
          observer.disconnect();
        }
      },
      { threshold: 0.1, ...opts },
    );

    observer.observe(el);
    return () => observer.disconnect();
    // opts is intentionally omitted from deps — the observer is created once
    // per mount. Callers should not pass a new object reference every render.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return ref;
}
