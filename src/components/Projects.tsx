import { projects } from "../content";

interface ProjectType {
  image: string;
  title: string;
  blurb: string;
  role: string;
  outcome: string;
  tech: string[];
  live: string;
  code: string;
}

function ProjectCard({ p }: { p: ProjectType }) {
  return (
    <article className="card">
      {p.image && <img className="card-img" src={p.image} alt={p.title} loading="lazy" />}
      <h3>{p.title}</h3>
      <p className="card-blurb">{p.blurb}</p>
      <p className="card-meta">{p.role} · {p.outcome}</p>
      <ul className="badges">{p.tech.map((t: string) => <li key={t}>{t}</li>)}</ul>
      <div className="card-links">
        {p.live && <a href={p.live} target="_blank" rel="noreferrer">Live ↗</a>}
        {p.code && <a href={p.code} target="_blank" rel="noreferrer">Code ↗</a>}
      </div>
    </article>
  );
}

export default function Work() {
  return (
    <section id="work" className="wrap section">
      <h2 className="section-title">Selected work</h2>
      <div className="work-grid">
        {projects.map((p) => <ProjectCard key={p.slug} p={p} />)}
      </div>
    </section>
  );
}
