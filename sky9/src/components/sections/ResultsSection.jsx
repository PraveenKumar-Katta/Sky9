import { useState } from "react";
import FadeIn from "../ui/FadeIn";
import SectionHeader from "../ui/SectionHeader";
import { REVIEWS } from "../../data";

const S = {
  section: { padding: "110px 60px", background: "var(--bg)" },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: 2, marginTop: 56,
  },
  card: {
    background: "var(--card)", border: "1px solid var(--border)",
    padding: 30, transition: "border-color 0.3s, transform 0.3s", cursor: "default",
  },
  quote: {
    fontSize: 36, color: "var(--border)", lineHeight: 1, marginBottom: 4,
    fontFamily: "Georgia, serif",
  },
  stars: { color: "var(--gold)", fontSize: 14, marginBottom: 14, letterSpacing: 2 },
  text: {
    fontSize: 14, color: "var(--text2)", lineHeight: 1.8,
    marginBottom: 22, fontStyle: "italic",
  },
  reviewer: { display: "flex", alignItems: "center", gap: 12 },
  avatar: {
    width: 40, height: 40, borderRadius: "50%",
    background: "var(--gold)", display: "flex", alignItems: "center", justifyContent: "center",
    fontFamily: "'Bebas Neue', cursive", fontSize: 16, color: "#000", flexShrink: 0,
  },
  reviewerName: {
    fontFamily: "'Barlow Condensed', sans-serif",
    fontSize: 14, fontWeight: 700, letterSpacing: 1,
  },
  reviewerSince: {
    fontFamily: "'Barlow Condensed', sans-serif",
    fontSize: 11, color: "var(--text3)", letterSpacing: 1,
  },
};

function ReviewCard({ text, name, since, initials }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      style={{
        ...S.card,
        borderColor: hovered ? "var(--gold)" : "var(--border)",
        transform: hovered ? "translateY(-4px)" : "none",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div style={S.quote}>"</div>
      <div style={S.stars}>★★★★★</div>
      <p style={S.text}>{text}</p>
      <div style={S.reviewer}>
        <div style={S.avatar}>{initials}</div>
        <div>
          <div style={S.reviewerName}>{name}</div>
          <div style={S.reviewerSince}>{since}</div>
        </div>
      </div>
    </div>
  );
}

/**
 * ResultsSection
 * Member testimonials shown as 3-column review cards.
 */
export default function ResultsSection() {
  return (
    <section style={S.section}>
      <FadeIn>
        <SectionHeader tag="Real Stories" title="MEMBER" accent="RESULTS" />
      </FadeIn>

      <div style={S.grid} className="results-grid">
        {REVIEWS.map((r, i) => (
          <FadeIn key={i} delay={i * 0.1}>
            <ReviewCard {...r} />
          </FadeIn>
        ))}
      </div>
    </section>
  );
}