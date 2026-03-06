import { HERO_STATS } from "../../data";

const S = {
  section: {
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
    padding: "120px 60px 90px",
    position: "relative",
    overflow: "hidden",
    background: "var(--bg)",
  },
  gridOverlay: {
    position: "absolute",
    inset: 0,
    pointerEvents: "none",
    backgroundImage: `
      linear-gradient(rgba(245,166,35,0.04) 1px, transparent 1px),
      linear-gradient(90deg, rgba(245,166,35,0.04) 1px, transparent 1px)
    `,
    backgroundSize: "70px 70px",
  },
  glow: {
    position: "absolute",
    top: "20%",
    right: "10%",
    width: 600,
    height: 600,
    background:
      "radial-gradient(circle, rgba(245,166,35,0.07) 0%, transparent 65%)",
    pointerEvents: "none",
  },
  content: { position: "relative", zIndex: 1 },
  tag: {
    fontFamily: "'Barlow Condensed', sans-serif",
    fontSize: 11,
    letterSpacing: "5px",
    color: "var(--gold)",
    textTransform: "uppercase",
    marginBottom: 20,
    display: "flex",
    alignItems: "center",
    gap: 12,
  },
  tagLine: { width: 28, height: 1, background: "var(--gold)" },
  h1: { lineHeight: 0.9, marginBottom: 30 },
  line: {
    display: "block",
    fontFamily: "'Bebas Neue', cursive",
    fontSize: "clamp(80px, 13vw, 160px)",
  },
  studioLabel: {
    fontFamily: "'Bebas Neue', cursive",
    fontSize: 17,
    letterSpacing: 10,
    color: "var(--gold)",
    marginBottom: 44,
    display: "flex",
    alignItems: "center",
    gap: 14,
  },
  dash: { color: "var(--text3)" },
  btns: { display: "flex", gap: 14, flexWrap: "wrap" },
  btnPrimary: {
    fontFamily: "'Barlow Condensed', sans-serif",
    fontSize: 12,
    letterSpacing: "2.5px",
    background: "var(--gold)",
    color: "#000",
    padding: "14px 32px",
    border: "none",
    cursor: "pointer",
    textTransform: "uppercase",
    fontWeight: 700,
    transition: "background 0.2s, transform 0.15s",
  },
  btnOutline: {
    fontFamily: "'Barlow Condensed', sans-serif",
    fontSize: 12,
    letterSpacing: "2.5px",
    background: "transparent",
    color: "var(--text)",
    padding: "14px 28px",
    border: "1px solid var(--border)",
    cursor: "pointer",
    textTransform: "uppercase",
    fontWeight: 700,
    transition: "border-color 0.2s, color 0.2s",
  },
  stats: {
    position: "absolute",
    bottom: 90,
    right: 60,
    zIndex: 1,
    display: "flex",
    gap: 44,
  },
  statNum: {
    fontFamily: "'Bebas Neue', cursive",
    fontSize: 44,
    color: "var(--gold)",
    lineHeight: 1,
  },
  statLbl: {
    fontFamily: "'Barlow Condensed', sans-serif",
    fontSize: 9,
    letterSpacing: 3,
    color: "var(--text3)",
    textTransform: "uppercase",
    marginTop: 4,
  },
  scrollCue: {
    position: "absolute",
    bottom: 28,
    left: "50%",
    transform: "translateX(-50%)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: 8,
    zIndex: 1,
    fontFamily: "'Barlow Condensed', sans-serif",
    fontSize: 9,
    letterSpacing: 4,
    color: "var(--text3)",
    textTransform: "uppercase",
  },
};

const scrollLineStyle = `
  @keyframes scrollPulse {
    0%,100% { opacity: 0.3; transform: scaleY(1); }
    50%      { opacity: 1;   transform: scaleY(1.4); }
  }
  .scroll-line {
    width: 1px; height: 40px;
    background: var(--border);
    animation: scrollPulse 1.8s ease-in-out infinite;
  }
`;

/**
 * HeroSection
 * Full-viewport landing section with headline, stats, CTA buttons, and scroll cue.
 *
 * Props:
 *  - scrollTo {function} Callback: scrollTo(sectionKey)
 */
export default function HeroSection({ scrollTo }) {
  return (
    <section id="hero" style={S.section}>
      <style>{scrollLineStyle}</style>

      {/* Background decorations */}
      <div style={S.gridOverlay} />
      <div style={S.glow} />

      {/* Main content */}
      <div style={S.content}>
        <div style={S.tag}>
          <span style={S.tagLine} />
          Siddipet's Premier Fitness Destination
        </div>

        <h1 style={S.h1}>
          <span style={{ ...S.line, color: "var(--text)" }}>ELEVATE</span>
          <span style={{ ...S.line, color: "var(--gold)" }}>YOUR</span>
          <span
            style={{
              ...S.line,
              WebkitTextStroke: "2px var(--text)",
              WebkitTextFillColor: "transparent",
            }}
          >
            FITNESS
          </span>
        </h1>

        <div style={S.studioLabel}>
          <span style={S.dash}>—</span>
          SKY9 FITNESS STUDIO
          <span style={S.dash}>—</span>
        </div>

        <div style={S.btns}>
          <button
            style={S.btnPrimary}
            onClick={() => scrollTo("pricing")}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "var(--gold-dark)";
              e.currentTarget.style.transform = "translateY(-1px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "var(--gold)";
              e.currentTarget.style.transform = "translateY(0)";
            }}
          >
            Start Free Trial
          </button>
          <button
            style={S.btnOutline}
            onClick={() => scrollTo("programs")}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "var(--gold)";
              e.currentTarget.style.color = "var(--gold)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "var(--border)";
              e.currentTarget.style.color = "var(--text)";
            }}
          >
            Explore Programs
          </button>
        </div>
      </div>

      {/* Stats */}
      <div style={S.stats} className="hero-stats">
        {HERO_STATS.map((s) => (
          <div key={s.label}>
            <div style={S.statNum}>{s.num}</div>
            <div style={S.statLbl}>{s.label}</div>
          </div>
        ))}
      </div>

      {/* Scroll cue */}
      <div style={S.scrollCue}>
        <div className="scroll-line" />
        <span>Scroll</span>
      </div>
    </section>
  );
}
