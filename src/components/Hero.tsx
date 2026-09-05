import { site } from "../content";

export default function Hero() {
  return (
    <section id="top" className="hero">
      <div className="hero-text">
        <p className="kicker">{site.role}</p>
        <h1>{site.headline}</h1>
        <p className="lede">{site.sub}</p>
        <p className="status">{site.status}</p>
        <div className="cta-row">
          <a href="#work" className="btn btn-solid">See my work</a>
          <a href="#contact" className="btn btn-outline">Get in touch</a>
        </div>
        <div className="social">
          {site.socials.map((s) => (
            <a key={s.href} href={s.href} target="_blank" rel="noreferrer">{s.label}</a>
          ))}
        </div>
      </div>

      <div className="arch-wrap">
        <div className="arch">
          {site.archImage && <img src={site.archImage} alt="" />}
        </div>
      </div>
    </section>
  );
}
