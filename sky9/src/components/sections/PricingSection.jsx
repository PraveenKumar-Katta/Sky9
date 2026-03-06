import { useState, forwardRef } from "react";
import FadeIn from "../ui/FadeIn";
import SectionHeader from "../ui/SectionHeader";
import { PLANS } from "../../data";

const S = {
  section: { padding: "110px 60px", background: "var(--bg2)" },
  subtitle: {
    fontFamily: "'Barlow Condensed', sans-serif",
    fontSize: 13,
    letterSpacing: 2,
    color: "var(--text3)",
    marginBottom: 56,
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: 2,
  },
  card: {
    background: "var(--card)",
    border: "1px solid var(--border)",
    padding: 36,
    position: "relative",
    transition: "transform 0.3s, border-color 0.3s",
  },
  cardPopular: {
    borderColor: "var(--gold)",
    transform: "scale(1.03)",
    background: "linear-gradient(160deg, var(--card), rgba(245,166,35,0.04))",
  },
  badge: {
    position: "absolute",
    top: 0,
    right: 0,
    background: "var(--gold)",
    color: "#000",
    fontFamily: "'Barlow Condensed', sans-serif",
    fontSize: 9,
    letterSpacing: 3,
    padding: "6px 14px",
    textTransform: "uppercase",
    fontWeight: 800,
  },
  tier: {
    fontFamily: "'Barlow Condensed', sans-serif",
    fontSize: 10,
    letterSpacing: 4,
    color: "var(--gold)",
    textTransform: "uppercase",
    marginBottom: 6,
  },
  name: {
    fontFamily: "'Bebas Neue', cursive",
    fontSize: 36,
    letterSpacing: 2,
    marginBottom: 18,
  },
  priceRow: {
    display: "flex",
    alignItems: "flex-start",
    gap: 2,
    marginBottom: 6,
  },
  currency: {
    fontFamily: "'Barlow Condensed', sans-serif",
    fontSize: 18,
    color: "var(--gold)",
    marginTop: 8,
    fontWeight: 700,
  },
  amount: {
    fontFamily: "'Bebas Neue', cursive",
    fontSize: 56,
    color: "var(--gold)",
    lineHeight: 1,
  },
  period: {
    fontFamily: "'Barlow Condensed', sans-serif",
    fontSize: 12,
    color: "var(--text3)",
    alignSelf: "flex-end",
    paddingBottom: 8,
  },
  divider: { height: 1, background: "var(--border)", margin: "20px 0" },
  features: {
    display: "flex",
    flexDirection: "column",
    gap: 11,
    marginBottom: 28,
  },
  feature: {
    display: "flex",
    alignItems: "center",
    gap: 9,
    fontFamily: "'Barlow Condensed', sans-serif",
    fontSize: 14,
    letterSpacing: "0.5px",
  },
  btnBase: {
    width: "100%",
    fontFamily: "'Barlow Condensed', sans-serif",
    fontSize: 12,
    letterSpacing: "2.5px",
    padding: 13,
    cursor: "pointer",
    textTransform: "uppercase",
    fontWeight: 700,
    transition: "all 0.2s",
  },
  btnNormal: {
    background: "transparent",
    color: "var(--text)",
    border: "1px solid var(--border)",
  },
  btnPopular: {
    background: "var(--gold)",
    color: "#000",
    border: "1px solid var(--gold)",
  },
};

function PlanCard({ plan }) {
  const [hovered, setHovered] = useState(false);
  const { tier, name, price, popular, btn, features } = plan;

  return (
    <div
      style={{
        ...S.card,
        ...(popular ? S.cardPopular : {}),
        borderColor:
          hovered && !popular
            ? "var(--gold)"
            : popular
              ? "var(--gold)"
              : "var(--border)",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {popular && <div style={S.badge}>Popular</div>}
      <div style={S.tier}>{tier}</div>
      <div style={S.name}>{name}</div>
      <div style={S.priceRow}>
        <div style={S.currency}>₹</div>
        <div style={S.amount}>{price}</div>
        <div style={S.period}>/ month</div>
      </div>
      <div style={S.divider} />
      <div style={S.features}>
        {features.map((f, i) => (
          <div
            key={i}
            style={{
              ...S.feature,
              color: f.on ? "var(--text)" : "var(--text3)",
            }}
          >
            <span
              style={{
                fontSize: 11,
                color: f.on ? "var(--gold)" : "var(--text3)",
              }}
            >
              {f.on ? "✓" : "✕"}
            </span>
            {f.text}
          </div>
        ))}
      </div>
      <button
        style={{
          ...S.btnBase,
          ...(popular ? S.btnPopular : S.btnNormal),
        }}
        onMouseEnter={(e) => {
          if (!popular) {
            e.currentTarget.style.borderColor = "var(--gold)";
            e.currentTarget.style.color = "var(--gold)";
          } else {
            e.currentTarget.style.background = "var(--gold-dark)";
          }
        }}
        onMouseLeave={(e) => {
          if (!popular) {
            e.currentTarget.style.borderColor = "var(--border)";
            e.currentTarget.style.color = "var(--text)";
          } else {
            e.currentTarget.style.background = "var(--gold)";
          }
        }}
      >
        {btn}
      </button>
    </div>
  );
}

/**
 * PricingSection
 * Three membership plan cards: Basic, Pro (featured), Elite.
 */
const PricingSection = forwardRef((_, ref) => (
  <section ref={ref} id="pricing" style={S.section} className="section--alt">
    <FadeIn>
      <SectionHeader tag="Membership" title="CHOOSE YOUR" accent="PLAN" />
      <p style={S.subtitle}>
        No hidden fees. No lock-ins. Cancel anytime. Just results.
      </p>
    </FadeIn>

    <div style={S.grid} className="pricing-grid">
      {PLANS.map((plan, i) => (
        <FadeIn key={i} delay={i * 0.1}>
          <PlanCard plan={plan} />
        </FadeIn>
      ))}
    </div>
  </section>
));

PricingSection.displayName = "PricingSection";
export default PricingSection;
