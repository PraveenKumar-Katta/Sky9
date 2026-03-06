import { useState } from "react";
import { forwardRef } from "react";
import FadeIn from "../ui/FadeIn";
import SectionHeader from "../ui/SectionHeader";
import { PROGRAMS } from "../../data";

const S = {
  section: { padding: "110px 60px", background: "var(--bg)" },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: 2,
    marginTop: 56,
  },
  card: {
    background: "var(--card)",
    border: "1px solid var(--border)",
    overflow: "hidden",
    cursor: "pointer",
    position: "relative",
    transition: "transform 0.3s, border-color 0.3s",
  },
  cardTop: {
    height: 240,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: 64,
    background: "var(--bg2)",
    position: "relative",
    overflow: "hidden",
    transition: "background 0.3s",
  },
  cardTopOverlay: {
    position: "absolute",
    inset: 0,
    background: "linear-gradient(to bottom, transparent 50%, rgba(0,0,0,0.5))",
  },
  body: { padding: 22 },
  tag: {
    fontFamily: "'Barlow Condensed', sans-serif",
    fontSize: 10,
    letterSpacing: 3,
    color: "var(--gold)",
    textTransform: "uppercase",
    marginBottom: 6,
  },
  name: {
    fontFamily: "'Bebas Neue', cursive",
    fontSize: 26,
    letterSpacing: 2,
    marginBottom: 8,
  },
  desc: { fontSize: 13, color: "var(--text2)", lineHeight: 1.6 },
  explore: {
    display: "inline-flex",
    alignItems: "center",
    gap: 6,
    marginTop: 14,
    fontFamily: "'Barlow Condensed', sans-serif",
    fontSize: 11,
    letterSpacing: 2,
    color: "var(--gold)",
    textTransform: "uppercase",
    transition: "opacity 0.3s, transform 0.3s",
  },
};

function ProgramCard({ emoji, tag, name, desc }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      style={{
        ...S.card,
        transform: hovered ? "translateY(-5px)" : "translateY(0)",
        borderColor: hovered ? "var(--gold)" : "var(--border)",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div
        style={{
          ...S.cardTop,
          background: hovered ? "var(--bg3)" : "var(--bg2)",
        }}
      >
        {emoji}
        <div style={S.cardTopOverlay} />
      </div>
      <div style={S.body}>
        <div style={S.tag}>{tag}</div>
        <div style={S.name}>{name}</div>
        <div style={S.desc}>{desc}</div>
        <div
          style={{
            ...S.explore,
            opacity: hovered ? 1 : 0,
            transform: hovered ? "translateY(0)" : "translateY(6px)",
          }}
        >
          Explore Program →
        </div>
      </div>
    </div>
  );
}

/**
 * ProgramsSection
 * 3-column card grid showcasing all 6 training programs.
 */
const ProgramsSection = forwardRef((_, ref) => (
  <section ref={ref} id="programs" style={S.section}>
    <FadeIn>
      <SectionHeader tag="What We Offer" title="OUR" accent="PROGRAMS" />
    </FadeIn>

    <div style={S.grid} className="programs-grid">
      {PROGRAMS.map((p, i) => (
        <FadeIn key={i} delay={i * 0.07}>
          <ProgramCard {...p} />
        </FadeIn>
      ))}
    </div>
  </section>
));

ProgramsSection.displayName = "ProgramsSection";
export default ProgramsSection;
