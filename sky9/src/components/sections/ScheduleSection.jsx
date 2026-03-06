import { forwardRef } from "react";
import FadeIn from "../ui/FadeIn";
import SectionHeader from "../ui/SectionHeader";
import {
  SCHEDULE_DAYS,
  SCHEDULE_KEYS,
  SCHEDULE_ROWS,
  GOLD_CLASSES,
} from "../../data";

const S = {
  section: { padding: "110px 60px", background: "var(--bg)" },
  tableWrap: { overflowX: "auto", marginTop: 56 },
  table: { width: "100%", borderCollapse: "collapse", minWidth: 720 },
  th: {
    fontFamily: "'Barlow Condensed', sans-serif",
    fontSize: 11,
    letterSpacing: "2.5px",
    textTransform: "uppercase",
    padding: "14px 18px",
    textAlign: "left",
    color: "#000",
    fontWeight: 800,
    background: "var(--gold)",
  },
  td: {
    padding: "14px 18px",
    fontFamily: "'Barlow Condensed', sans-serif",
    fontSize: 13,
    color: "var(--text2)",
    borderBottom: "1px solid var(--border)",
  },
  tdTime: {
    padding: "14px 18px",
    fontFamily: "'Barlow Condensed', sans-serif",
    fontSize: 13,
    fontWeight: 700,
    color: "var(--gold)",
    borderBottom: "1px solid var(--border)",
  },
  pill: {
    display: "inline-block",
    padding: "4px 10px",
    fontSize: 10,
    letterSpacing: "1.5px",
    textTransform: "uppercase",
    fontWeight: 700,
    fontFamily: "'Barlow Condensed', sans-serif",
    border: "1px solid var(--border)",
    whiteSpace: "nowrap",
  },
  pillGold: {
    borderColor: "var(--gold)",
    color: "var(--gold)",
    background: "rgba(245,166,35,0.08)",
  },
  pillDefault: {
    color: "var(--text)",
    background: "var(--bg3)",
  },
  empty: { color: "var(--text3)" },
};

function ClassPill({ label }) {
  if (label === "—") return <span style={S.empty}>—</span>;

  const isGold = GOLD_CLASSES.some((g) => label.toLowerCase().includes(g));
  return (
    <span style={{ ...S.pill, ...(isGold ? S.pillGold : S.pillDefault) }}>
      {label}
    </span>
  );
}

/**
 * ScheduleSection
 * Weekly class timetable with color-coded class pills.
 */
const ScheduleSection = forwardRef((_, ref) => (
  <section ref={ref} id="schedule" style={S.section}>
    <FadeIn>
      <SectionHeader tag="Weekly Timetable" title="CLASS" accent="SCHEDULE" />
    </FadeIn>

    <FadeIn delay={0.15}>
      <div style={S.tableWrap}>
        <table style={S.table}>
          <thead>
            <tr>
              {SCHEDULE_DAYS.map((day) => (
                <th key={day} style={S.th}>
                  {day}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {SCHEDULE_ROWS.map((row, i) => (
              <tr
                key={i}
                style={{ transition: "background 0.15s" }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "var(--bg2)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "transparent";
                }}
              >
                {SCHEDULE_KEYS.map((key) => (
                  <td key={key} style={key === "time" ? S.tdTime : S.td}>
                    {key === "time" ? row[key] : <ClassPill label={row[key]} />}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </FadeIn>
  </section>
));

ScheduleSection.displayName = "ScheduleSection";
export default ScheduleSection;
