import { useState, useEffect, useRef } from "react";

/**
 * useScrollReveal
 * Observes an element and returns [ref, isVisible].
 * Once visible, stays visible (observer disconnects).
 *
 * @param {number} threshold - 0–1, fraction of element visible before triggering
 * @returns {[React.RefObject, boolean]}
 */
export function useScrollReveal(threshold = 0.12) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return [ref, visible];
}
