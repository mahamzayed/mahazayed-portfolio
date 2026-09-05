import { experience, site } from "../content";

export default function Experience() {
  return (
    <section id="experience" className="wrap section">
      <h2 className="section-title">Experience</h2>
      <ol className="timeline">
        {experience.map((e, i) => (
          <li key={i} className="timeline-item">
            <div className="timeline-head">
              <strong>{e.title}</strong> · {e.company}
              <span className="dates">{e.dates}</span>
            </div>
            <p>{e.impact}</p>
          </li>
        ))}
      </ol>
      <a href={site.resumeUrl} className="btn btn-outline">Download resume</a>
    </section>
  );
}
