/**
 * SectionHeader
 * Renders the standard "tag + title" header used across all sections.
 *
 * Props:
 *  - tag     {string}  Small uppercase label (e.g. "About Us")
 *  - title   {string}  Main heading, supports <br />
 *  - accent  {string}  Highlighted word(s) rendered in gold
 */
export default function SectionHeader({ tag, title, accent }) {
  return (
    <div style={{ marginBottom: 8 }}>
      <div className="section-tag">{tag}</div>
      <h2 className="section-title">
        {title}
        {accent && (
          <>
            <br />
            <span className="accent">{accent}</span>
          </>
        )}
      </h2>
    </div>
  );
}
