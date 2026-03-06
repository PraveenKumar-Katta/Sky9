import FadeIn from "../ui/FadeIn";

const S = {
  banner: {
    background: "var(--gold)",
    padding: "90px 60px",
    textAlign: "center",
    position: "relative",
    overflow: "hidden",
  },
  stripes: {
    position: "absolute",
    inset: 0,
    background:
      "repeating-linear-gradient(45deg, rgba(0,0,0,0.04) 0px, rgba(0,0,0,0.04) 1px, transparent 1px, transparent 10px)",
    pointerEvents: "none",
  },
  title: {
    fontFamily: "'Bebas Neue', cursive",
    fontSize: "clamp(50px, 7vw, 90px)",
    color: "#000",
    lineHeight: 0.95,
    marginBottom: 16,
    position: "relative",
    zIndex: 1,
  },
  sub: {
    fontFamily: "'Barlow Condensed', sans-serif",
    fontSize: 15,
    letterSpacing: 1,
    color: "rgba(0,0,0,0.6)",
    marginBottom: 36,
    position: "relative",
    zIndex: 1,
  },
  btn: {
    fontFamily: "'Barlow Condensed', sans-serif",
    fontSize: 13,
    letterSpacing: 3,
    background: "#000",
    color: "#fff",
    padding: "16px 40px",
    border: "none",
    cursor: "pointer",
    textTransform: "uppercase",
    fontWeight: 700,
    position: "relative",
    zIndex: 1,
    transition: "background 0.2s, transform 0.15s",
  },
};

/**
 * CTABanner
 * Full-width gold "Start Your Journey" call-to-action strip.
 *
 * Props:
 *  - scrollTo {function} Callback: scrollTo(sectionKey)
 */
export default function CTABanner({ scrollTo }) {
  return (
    <div style={S.banner}>
      <div style={S.stripes} />
      <FadeIn>
        <div style={S.title}>
          START YOUR
          <br />
          JOURNEY TODAY
        </div>
        <div style={S.sub}>
          Join 500+ members in Siddipet already elevating their fitness. First 3
          days are completely free — no card required.
        </div>
        <button
          style={S.btn}
          onClick={() => scrollTo("pricing")}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = "#222";
            e.currentTarget.style.transform = "translateY(-2px)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = "#000";
            e.currentTarget.style.transform = "translateY(0)";
          }}
        >
          Claim Free Trial →
        </button>
      </FadeIn>
    </div>
  );
}
