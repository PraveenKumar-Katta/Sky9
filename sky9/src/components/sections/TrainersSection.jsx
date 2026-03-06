import { useState, forwardRef } from "react";
import FadeIn from "../ui/FadeIn";
import SectionHeader from "../ui/SectionHeader";
import { TRAINERS } from "../../data";

const S = {
  section: { padding: "110px 60px", background: "var(--bg2)" },
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
    transition: "transform 0.3s, border-color 0.3s",
  },
  top: {
    height: 300,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: 80,
    position: "relative",
    transition: "background 0.3s",
  },
  num: {
    position: "absolute",
    top: 16,
    right: 20,
    fontFamily: "'Bebas Neue', cursive",
    fontSize: 36,
    lineHeight: 1,
    transition: "color 0.3s",
  },
  body: { padding: 22 },
  name: {
    fontFamily: "'Bebas Neue', cursive",
    fontSize: 24,
    letterSpacing: 2,
    marginBottom: 4,
  },
  role: {
    fontFamily: "'Barlow Condensed', sans-serif",
    fontSize: 11,
    letterSpacing: 3,
    color: "var(--gold)",
    textTransform: "uppercase",
    marginBottom: 12,
  },
  bio: { fontSize: 13, color: "var(--text2)", lineHeight: 1.6 },
};

function TrainerCard({ num, emoji, name, role, bio }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      style={{
        ...S.card,
        transform: hovered ? "translateY(-5px)" : "none",
        borderColor: hovered ? "var(--gold)" : "var(--border)",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div
        style={{ ...S.top, background: hovered ? "var(--bg3)" : "var(--bg2)" }}
      >
        {emoji}
        <div
          style={{
            ...S.num,
            color: hovered ? "rgba(245,166,35,0.3)" : "var(--border)",
          }}
        >
          {num}
        </div>
      </div>
      <div style={S.body}>
        <div style={S.name}>{name}</div>
        <div style={S.role}>{role}</div>
        <div style={S.bio}>{bio}</div>
      </div>
    </div>
  );
}

/**
 * TrainersSection
 * 3-column grid of expert trainer profile cards.
 */
const TrainersSection = forwardRef((_, ref) => (
  <section ref={ref} id="trainers" style={S.section} className="section--alt">
    <FadeIn>
      <SectionHeader tag="Our Team" title="EXPERT" accent="TRAINERS" />
    </FadeIn>

    <div style={S.grid} className="trainers-grid">
      {TRAINERS.map((t, i) => (
        <FadeIn key={i} delay={i * 0.1}>
          <TrainerCard {...t} />
        </FadeIn>
      ))}
    </div>
  </section>
));

TrainersSection.displayName = "TrainersSection";
export default TrainersSection;
