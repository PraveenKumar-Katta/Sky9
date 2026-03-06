import { useScrollReveal } from "../../hooks/useScrollReveal";

/**
 * FadeIn
 * Wraps children with a scroll-triggered fade + slide-up animation.
 *
 * Props:
 *  - delay   {number}  CSS transition delay in seconds (default 0)
 *  - style   {object}  Extra inline styles on wrapper
 *  - className {string}
 */
export default function FadeIn({
  children,
  delay = 0,
  style = {},
  className = "",
}) {
  const [ref, visible] = useScrollReveal();

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(28px)",
        transition: `opacity 0.7s ease ${delay}s, transform 0.7s ease ${delay}s`,
        ...style,
      }}
    >
      {children}
    </div>
  );
}
