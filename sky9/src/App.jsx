import { useRef } from "react";
import { useTheme } from "./hooks/useTheme";

// Layout
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

// Sections
import HeroSection from "./components/sections/HeroSection";
import WhyUsSection from "./components/sections/WhyUsSection";
import ProgramsSection from "./components/sections/ProgramsSection";
import PricingSection from "./components/sections/PricingSection";
import ScheduleSection from "./components/sections/ScheduleSection";
import TrainersSection from "./components/sections/TrainersSection";
import ResultsSection from "./components/sections/ResultsSection";
import LocationSection from "./components/sections/LocationSection";
import CTABanner from "./components/sections/CTABanner";

// Styles (globals + CSS variables)
// In a real Vite/CRA project: import "./styles/globals.css";
// For the artifact preview, we inject them inline below.

const GLOBAL_CSS = `
  @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Barlow+Condensed:wght@400;600;700;800&family=Barlow:wght@300;400;500&display=swap');
  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
  html { scroll-behavior: smooth; }
  body { overflow-x: hidden; }
  :root { --gold: #F5A623; --gold-dark: #D4891A; }
  .theme-dark  { --bg:#0C0C0C;--bg2:#131313;--bg3:#1A1A1A;--card:#181818;--border:#252525;--text:#F0EDE8;--text2:#9A9690;--text3:#4A4844; }
  .theme-light { --bg:#F2EDE5;--bg2:#EAE4DB;--bg3:#E0D9CF;--card:#FFFFFF;--border:#D5CEC5;--text:#111010;--text2:#6B6560;--text3:#A09890; }
  .sky9-app { transition: background 0.4s ease, color 0.4s ease; min-height: 100vh; }

  /* Responsive grid helpers */
  @media (max-width: 1024px) {
    .whyus-grid    { grid-template-columns: 1fr !important; gap: 40px !important; }
    .programs-grid { grid-template-columns: repeat(2,1fr) !important; }
    .pricing-grid  { grid-template-columns: 1fr !important; gap: 16px !important; }
    .trainers-grid { grid-template-columns: repeat(2,1fr) !important; }
    .results-grid  { grid-template-columns: 1fr !important; }
    .location-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
    .footer-grid   { grid-template-columns: 1fr 1fr !important; gap: 40px !important; }
    .hero-stats    { position: relative !important; bottom: auto !important; right: auto !important; margin-top: 40px; flex-wrap: wrap; gap: 20px !important; }
    .nav-desktop-links { display: none !important; }
    .hamburger-btn { display: flex !important; }
  }
  @media (max-width: 640px) {
    .programs-grid { grid-template-columns: 1fr !important; }
    .trainers-grid { grid-template-columns: 1fr !important; }
    .footer-grid   { grid-template-columns: 1fr !important; }
  }

  /* Scroll pulse animation */
  @keyframes scrollPulse {
    0%,100% { opacity:.3; transform:scaleY(1); }
    50%      { opacity:1;  transform:scaleY(1.4); }
  }
  .scroll-line { width:1px; height:40px; background:var(--border); animation:scrollPulse 1.8s ease-in-out infinite; }

  /* Hide hamburger on desktop by default */
  .hamburger-btn { display: none; }
`;

/**
 * App
 * Root component. Manages theme + section refs + scroll logic.
 * All layout and section components are composed here.
 */
export default function App() {
  const { dark, toggleTheme } = useTheme();

  // One ref per scrollable section
  const refs = {
    programs: useRef(null),
    pricing: useRef(null),
    schedule: useRef(null),
    trainers: useRef(null),
    location: useRef(null),
  };

  /** Smooth-scroll to a section by key */
  const scrollTo = (key) => {
    refs[key]?.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div
      className={`sky9-app ${dark ? "theme-dark" : "theme-light"}`}
      style={{ background: "var(--bg)", color: "var(--text)" }}
    >
      {/* Inject global CSS */}
      <style>{GLOBAL_CSS}</style>

      {/* ── Layout ───────────────────────────────────────── */}
      <Navbar
        dark={dark}
        toggleTheme={toggleTheme}
        scrollTo={scrollTo}
        isDarkBg={dark}
      />

      {/* ── Sections (order = page flow) ─────────────────── */}
      <HeroSection scrollTo={scrollTo} />
      <WhyUsSection />
      <ProgramsSection ref={refs.programs} />
      <PricingSection ref={refs.pricing} />
      <ScheduleSection ref={refs.schedule} />
      <TrainersSection ref={refs.trainers} />
      <ResultsSection />
      <LocationSection ref={refs.location} />

      {/* ── CTA + Footer ─────────────────────────────────── */}
      <CTABanner scrollTo={scrollTo} />
      <Footer scrollTo={scrollTo} />
    </div>
  );
}
