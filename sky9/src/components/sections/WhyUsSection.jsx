import { useState } from "react";
import FadeIn from "../ui/FadeIn";
import SectionHeader from "../ui/SectionHeader";
import { WHY_FEATURES } from "../../data";

const S = {
  section: { padding: "110px 60px", background: "var(--bg2)" },
  grid: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: 80,
    alignItems: "center",
    marginTop: 40,
  },
  visual: {
    aspectRatio: "1",
    background: "var(--bg3)",
    border: "1px solid var(--border)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    overflow: "hidden",
  },
  visualGlow: {
    position: "absolute",
    inset: 0,
    background:
      "radial-gradient(circle at 50% 50%, rgba(245,166,35,0.1) 0%, transparent 70%)",
    pointerEvents: "none",
  },
  emoji: { fontSize: 90, position: "relative", zIndex: 1 },
  visualLabel: {
    fontFamily: "'Bebas Neue', cursive",
    fontSize: 20,
    letterSpacing: 6,
    color: "var(--gold)",
    position: "absolute",
    bottom: 28,
    textAlign: "center",
  },
  desc: {
    fontSize: 15,
    color: "var(--text2)",
    lineHeight: 1.8,
    marginBottom: 32,
  },
  featureList: { display: "flex", flexDirection: "column" },
  feat: {
    display: "flex",
    gap: 16,
    alignItems: "flex-start",
    padding: "20px 0",
    borderBottom: "1px solid var(--border)",
    transition: "padding-left 0.25s",
    cursor: "default",
  },
  featIcon: {
    width: 44,
    height: 44,
    flexShrink: 0,
    background: "var(--bg3)",
    border: "1px solid var(--border)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: 18,
    transition: "border-color 0.2s, background 0.2s",
  },
  featTitle: {
    fontFamily: "'Barlow Condensed', sans-serif",
    fontSize: 15,
    fontWeight: 700,
    letterSpacing: 1,
    marginBottom: 4,
  },
  featDesc: { fontSize: 13, color: "var(--text2)", lineHeight: 1.6 },
};

function FeatureItem({ icon, title, desc }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      style={{ ...S.feat, paddingLeft: hovered ? 8 : 0 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div
        style={{
          ...S.featIcon,
          borderColor: hovered ? "var(--gold)" : "var(--border)",
          background: hovered ? "rgba(245,166,35,0.1)" : "var(--bg3)",
        }}
      >
        {icon}
      </div>
      <div>
        <div style={S.featTitle}>{title}</div>
        <div style={S.featDesc}>{desc}</div>
      </div>
    </div>
  );
}

/**
 * WhyUsSection
 * Two-column layout: animated visual left, feature list right.
 */
export default function WhyUsSection() {
  return (
    <section style={S.section} className="section--alt">
      <FadeIn>
        <SectionHeader tag="About Us" title="WHY CHOOSE" accent="SKY9?" />
      </FadeIn>

      <div style={S.grid} className="whyus-grid">
        {/* Visual */}
        <FadeIn delay={0.1}>
          <div style={S.visual}>
            <div style={S.visualGlow} />
            <div style={S.emoji}>🏆</div>
            <div style={S.visualLabel}>Elevate Your Fitness</div>
          </div>
        </FadeIn>

        {/* Features */}
        <FadeIn delay={0.2}>
          <p style={S.desc}>
            Located in the heart of Siddipet, SKY9 Fitness Studio is built for
            those who refuse to settle. We combine world-class equipment,
            certified trainers, and a relentless community to help you break
            through every limit.
          </p>
          <div style={S.featureList}>
            {WHY_FEATURES.map((f, i) => (
              <FeatureItem key={i} {...f} />
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
