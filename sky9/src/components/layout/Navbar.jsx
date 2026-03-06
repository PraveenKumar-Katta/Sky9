import { useState } from "react";
import { NAV_ITEMS } from "../../data";

const S = {
  nav: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    zIndex: 200,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "0 48px",
    height: 66,
    backdropFilter: "blur(16px)",
    borderBottom: "1px solid var(--border)",
    transition: "background 0.4s",
  },
  logo: {
    display: "flex",
    alignItems: "center",
    gap: 10,
    cursor: "pointer",
    textDecoration: "none",
  },
  logoBox: {
    width: 38,
    height: 38,
    border: "2px solid var(--gold)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontFamily: "'Bebas Neue', cursive",
    fontSize: 18,
    color: "var(--gold)",
    letterSpacing: 1,
  },
  logoName: {
    fontFamily: "'Bebas Neue', cursive",
    fontSize: 22,
    letterSpacing: 4,
    color: "var(--text)",
    lineHeight: 1,
  },
  logoSub: {
    fontFamily: "'Barlow Condensed', sans-serif",
    fontSize: 9,
    letterSpacing: 4,
    color: "var(--gold)",
    textTransform: "uppercase",
  },
  links: { display: "flex", gap: 32 },
  link: {
    fontFamily: "'Barlow Condensed', sans-serif",
    fontSize: 12,
    letterSpacing: "2.5px",
    color: "var(--text2)",
    textDecoration: "none",
    textTransform: "uppercase",
    background: "none",
    border: "none",
    cursor: "pointer",
    padding: "4px 0",
    transition: "color 0.2s",
  },
  right: { display: "flex", alignItems: "center", gap: 12 },
  joinBtn: {
    fontFamily: "'Barlow Condensed', sans-serif",
    fontSize: 12,
    letterSpacing: "2.5px",
    background: "var(--gold)",
    color: "#000",
    padding: "10px 24px",
    border: "none",
    cursor: "pointer",
    textTransform: "uppercase",
    fontWeight: 700,
    transition: "background 0.2s, transform 0.15s",
  },
  themeBtn: {
    width: 36,
    height: 36,
    border: "1px solid var(--border)",
    background: "transparent",
    color: "var(--text2)",
    cursor: "pointer",
    fontSize: 15,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    transition: "border-color 0.2s, color 0.2s",
  },
  hamburger: {
    display: "none",
    flexDirection: "column",
    gap: 5,
    background: "none",
    border: "none",
    cursor: "pointer",
    padding: 4,
  },
  mobileMenu: {
    position: "fixed",
    top: 66,
    left: 0,
    right: 0,
    zIndex: 199,
    background: "var(--bg)",
    borderBottom: "1px solid var(--border)",
    padding: "20px 32px 28px",
    flexDirection: "column",
  },
  mobileLink: {
    fontFamily: "'Barlow Condensed', sans-serif",
    fontSize: 15,
    letterSpacing: "2px",
    color: "var(--text2)",
    textTransform: "uppercase",
    padding: "13px 0",
    borderBottom: "1px solid var(--border)",
    background: "none",
    borderLeft: "none",
    borderRight: "none",
    borderTop: "none",
    cursor: "pointer",
    textAlign: "left",
    transition: "color 0.2s",
  },
};

/**
 * Navbar
 * Fixed top navigation with logo, nav links, theme toggle, join button, and hamburger.
 *
 * Props:
 *  - dark         {boolean}   Current theme state
 *  - toggleTheme  {function}  Callback to switch theme
 *  - scrollTo     {function}  Callback: scrollTo(sectionKey)
 *  - isDarkBg     {boolean}   Whether to use dark nav background
 */
export default function Navbar({
  dark,
  toggleTheme,
  scrollTo,
  isDarkBg = true,
}) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [hovered, setHovered] = useState(null);

  const navBg = isDarkBg ? "rgba(12,12,12,0.92)" : "rgba(242,237,229,0.95)";

  return (
    <>
      <nav style={{ ...S.nav, background: navBg }}>
        {/* Logo */}
        <div
          style={S.logo}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <div style={S.logoBox}>S9</div>
          <div>
            <div style={S.logoName}>SKY9</div>
            <div style={S.logoSub}>Fitness Studio</div>
          </div>
        </div>

        {/* Desktop Links */}
        <div style={S.links} className="nav-desktop-links">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.key}
              style={{
                ...S.link,
                color: hovered === item.key ? "var(--text)" : "var(--text2)",
              }}
              onClick={() => scrollTo(item.key)}
              onMouseEnter={() => setHovered(item.key)}
              onMouseLeave={() => setHovered(null)}
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* Right actions */}
        <div style={S.right}>
          <button
            style={S.themeBtn}
            onClick={toggleTheme}
            title="Toggle theme"
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "var(--gold)";
              e.currentTarget.style.color = "var(--gold)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "var(--border)";
              e.currentTarget.style.color = "var(--text2)";
            }}
          >
            {dark ? "☀️" : "🌑"}
          </button>

          <button
            style={S.joinBtn}
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
            Join Now
          </button>

          {/* Hamburger — shown via media query in CSS */}
          <button
            style={S.hamburger}
            className="hamburger-btn"
            onClick={() => setMenuOpen((o) => !o)}
            aria-label="Toggle menu"
          >
            <span
              style={{
                display: "block",
                width: 22,
                height: 2,
                background: "var(--text)",
                transition: "all 0.3s",
                transform: menuOpen ? "rotate(45deg) translateY(7px)" : "none",
              }}
            />
            <span
              style={{
                display: "block",
                width: 22,
                height: 2,
                background: "var(--text)",
                transition: "all 0.3s",
                opacity: menuOpen ? 0 : 1,
              }}
            />
            <span
              style={{
                display: "block",
                width: 22,
                height: 2,
                background: "var(--text)",
                transition: "all 0.3s",
                transform: menuOpen
                  ? "rotate(-45deg) translateY(-7px)"
                  : "none",
              }}
            />
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div style={{ ...S.mobileMenu, display: "flex" }}>
          {NAV_ITEMS.map((item) => (
            <button
              key={item.key}
              style={S.mobileLink}
              onClick={() => {
                scrollTo(item.key);
                setMenuOpen(false);
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = "var(--gold)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = "var(--text2)";
              }}
            >
              {item.label}
            </button>
          ))}
          <button
            style={{ ...S.joinBtn, marginTop: 12, textAlign: "center" }}
            onClick={() => {
              scrollTo("pricing");
              setMenuOpen(false);
            }}
          >
            Join Now
          </button>
        </div>
      )}
    </>
  );
}
