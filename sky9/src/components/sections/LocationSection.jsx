import { forwardRef } from "react";
import FadeIn from "../ui/FadeIn";
import SectionHeader from "../ui/SectionHeader";
import { LOCATION } from "../../data";

const S = {
  section: { padding: "110px 60px", background: "var(--bg2)" },
  grid: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: 80,
    alignItems: "center",
    marginTop: 32,
  },
  desc: {
    fontSize: 15,
    color: "var(--text2)",
    lineHeight: 1.8,
    marginBottom: 28,
  },
  infoList: { display: "flex", flexDirection: "column", gap: 20 },
  infoItem: { display: "flex", gap: 16, alignItems: "flex-start" },
  infoIcon: {
    width: 44,
    height: 44,
    flexShrink: 0,
    border: "1px solid var(--border)",
    background: "var(--bg3)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: 18,
  },
  infoLabel: {
    fontFamily: "'Barlow Condensed', sans-serif",
    fontSize: 10,
    letterSpacing: 3,
    color: "var(--gold)",
    textTransform: "uppercase",
    marginBottom: 4,
  },
  infoVal: { fontSize: 15, color: "var(--text)", lineHeight: 1.6 },
  hoursRow: {
    display: "flex",
    justifyContent: "space-between",
    fontSize: 14,
    color: "var(--text2)",
    padding: "8px 0",
    borderBottom: "1px solid var(--border)",
  },
  hoursTime: { color: "var(--gold)", fontWeight: 600 },
  mapBox: {
    background: "var(--bg3)",
    border: "1px solid var(--border)",
    aspectRatio: "1",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: 16,
    position: "relative",
    overflow: "hidden",
  },
  mapGlow: {
    position: "absolute",
    inset: 0,
    background:
      "radial-gradient(circle at 60% 40%, rgba(245,166,35,0.12) 0%, transparent 60%)",
    pointerEvents: "none",
  },
  mapPin: { fontSize: 56, position: "relative", zIndex: 1 },
  mapCity: {
    fontFamily: "'Bebas Neue', cursive",
    fontSize: 26,
    letterSpacing: 6,
    color: "var(--text)",
    position: "relative",
    zIndex: 1,
    textAlign: "center",
  },
  mapState: {
    fontFamily: "'Barlow Condensed', sans-serif",
    fontSize: 11,
    letterSpacing: 4,
    color: "var(--text3)",
    textTransform: "uppercase",
    position: "relative",
    zIndex: 1,
  },
  mapBtn: {
    position: "relative",
    zIndex: 1,
    fontFamily: "'Barlow Condensed', sans-serif",
    fontSize: 11,
    letterSpacing: 2,
    color: "var(--text2)",
    background: "transparent",
    border: "1px solid var(--border)",
    padding: "10px 20px",
    cursor: "pointer",
    textTransform: "uppercase",
    transition: "all 0.2s",
    marginTop: 8,
  },
};

/**
 * LocationSection
 * Two-column: address/hours/phone info + decorative map box.
 */
const LocationSection = forwardRef((_, ref) => (
  <section ref={ref} id="location" style={S.section} className="section--alt">
    <FadeIn>
      <SectionHeader tag="Find Us" title="VISIT" accent="SKY9" />
    </FadeIn>

    <div style={S.grid} className="location-grid">
      {/* Info column */}
      <FadeIn delay={0.1}>
        <p style={S.desc}>
          Conveniently located in the heart of Siddipet. Come in for a free tour
          and trial session — no commitment needed.
        </p>
        <div style={S.infoList}>
          {/* Address */}
          <div style={S.infoItem}>
            <div style={S.infoIcon}>📍</div>
            <div>
              <div style={S.infoLabel}>Address</div>
              <div style={S.infoVal}>{LOCATION.address}</div>
            </div>
          </div>

          {/* Phone */}
          <div style={S.infoItem}>
            <div style={S.infoIcon}>📞</div>
            <div>
              <div style={S.infoLabel}>Phone</div>
              <div style={S.infoVal}>{LOCATION.phone}</div>
            </div>
          </div>

          {/* Hours */}
          <div style={S.infoItem}>
            <div style={S.infoIcon}>🕐</div>
            <div style={{ flex: 1 }}>
              <div style={S.infoLabel}>Hours</div>
              <div style={{ marginTop: 6 }}>
                {LOCATION.hours.map(({ day, time }) => (
                  <div key={day} style={S.hoursRow}>
                    <span>{day}</span>
                    <strong style={S.hoursTime}>{time}</strong>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </FadeIn>

      {/* Map box */}
      <FadeIn delay={0.2}>
        <div style={S.mapBox}>
          <div style={S.mapGlow} />
          <div style={S.mapPin}>📍</div>
          <div style={S.mapCity}>SIDDIPET</div>
          <div style={S.mapState}>Telangana, India</div>
          <button
            style={S.mapBtn}
            onClick={() => window.open(LOCATION.mapsUrl, "_blank")}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "var(--gold)";
              e.currentTarget.style.color = "var(--gold)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "var(--border)";
              e.currentTarget.style.color = "var(--text2)";
            }}
          >
            Open in Maps →
          </button>
        </div>
      </FadeIn>
    </div>
  </section>
));

LocationSection.displayName = "LocationSection";
export default LocationSection;
