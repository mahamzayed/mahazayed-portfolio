import { site } from "../content";

export default function Contact() {
  return (
    <section id="contact" className="wrap section contact">
      <h2 className="contact-title">Let’s build something.</h2>
      <a className="btn btn-solid btn-lg" href={`mailto:${site.email}`}>Say hello →</a>
      <div className="social">
        {site.socials.map((s) => (
          <a key={s.href} href={s.href} target="_blank" rel="noreferrer">{s.label}</a>
        ))}
      </div>
    </section>
  );
}
