import { skillGroups } from "../content";

export default function Skills() {
  return (
    <section id="skills" className="wrap section">
      <h2 className="section-title">Skills &amp; stack</h2>
      <div className="skill-groups">
        {skillGroups.map((g) => (
          <div key={g.label} className="skill-group">
            <h4>{g.label}</h4>
            <ul className="badges">{g.items.map((i) => <li key={i}>{i}</li>)}</ul>
          </div>
        ))}
      </div>
    </section>
  );
}
