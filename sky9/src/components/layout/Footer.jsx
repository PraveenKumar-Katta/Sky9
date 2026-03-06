import { FOOTER_COLUMNS } from "../../data";

const S = {
  footer: {
    background: "var(--bg2)",
    padding: "60px 60px 40px",
  },
  top: {
    display: "grid",
    gridTemplateColumns: "1.5fr 1fr 1fr 1fr",
    gap: 60,
    marginBottom: 50,
  },
  brandName: {
    fontFamily: "'Bebas Neue', cursive",
    fontSize: 28,
    letterSpacing: 4,
    color: "var(--text)",
  },
  brandTagline: {
    fontSize: 14,
    color: "var(--text2)",
    lineHeight: 1.7,
    marginTop: 10,
    maxWidth: 240,
  },
  socials: { display: "flex", gap: 10, marginTop: 20 },
  socialBtn: {
    width: 34,
    height: 34,
    border: "1px solid var(--border)",
    background: "transparent",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    fontSize: 13,
    color: "var(--text2)",
    transition: "all 0.2s",
  },
  colTitle: {
    fontFamily: "'Barlow Condensed', sans-serif",
    fontSize: 10,
    letterSpacing: 4,
    color: "var(--gold)",
    textTransform: "uppercase",
    marginBottom: 18,
  },
  linkList: { display: "flex", flexDirection: "column", gap: 10 },
  link: {
    fontSize: 13,
    color: "var(--text2)",
    background: "none",
    border: "none",
    cursor: "pointer",
    textAlign: "left",
    transition: "color 0.2s",
    padding: 0,
    fontFamily: "'Barlow', sans-serif",
  },
  bottom: {
    borderTop: "1px solid var(--border)",
    paddingTop: 24,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexWrap: "wrap",
    gap: 12,
  },
  copy: {
    fontFamily: "'Barlow Condensed', sans-serif",
    fontSize: 12,
    letterSpacing: 1,
    color: "var(--text3)",
  },
  motto: {
    fontFamily: "'Bebas Neue', cursive",
    fontSize: 13,
    letterSpacing: 4,
    color: "var(--text3)",
  },
};

const SOCIALS = [
  { icon: "𝕗", label: "Facebook" },
  { icon: "in", label: "LinkedIn" },
  { icon: "𝕏", label: "X / Twitter" },
  { icon: "▶", label: "YouTube" },
];

/**
 * Footer
 * Full-width site footer with brand, nav columns, socials, and copyright.
 *
 * Props:
 *  - scrollTo {function} Callback: scrollTo(sectionKey)
 */
export default function Footer({ scrollTo }) {
  return (
    <footer style={S.footer}>
      <div style={S.top} className="footer-grid">
        {/* Brand Column */}
        <div>
          <div style={S.brandName}>SKY9</div>
          <div style={S.brandTagline}>
            Elevate Your Fitness. Siddipet's premier fitness studio designed to
            transform your body and mind.
          </div>
          <div style={S.socials}>
            {SOCIALS.map((s) => (
              <button
                key={s.label}
                style={S.socialBtn}
                title={s.label}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "var(--gold)";
                  e.currentTarget.style.color = "var(--gold)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "var(--border)";
                  e.currentTarget.style.color = "var(--text2)";
                }}
              >
                {s.icon}
              </button>
            ))}
          </div>
        </div>

        {/* Nav Columns */}
        {FOOTER_COLUMNS.map((col) => (
          <div key={col.title}>
            <div style={S.colTitle}>{col.title}</div>
            <div style={S.linkList}>
              {col.links.map((link) => (
                <button
                  key={link.label}
                  style={S.link}
                  onClick={() =>
                    link.key
                      ? scrollTo(link.key)
                      : window.scrollTo({ top: 0, behavior: "smooth" })
                  }
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = "var(--text)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = "var(--text2)";
                  }}
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div style={S.bottom}>
        <div style={S.copy}>
          © 2025{" "}
          <span style={{ color: "var(--gold)" }}>SKY9 Fitness Studio</span>. All
          rights reserved. Siddipet, Telangana.
        </div>
        <div style={S.motto}>— Elevate Your Fitness —</div>
      </div>
    </footer>
  );
}
