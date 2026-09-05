export default function About() {
  return (
    <section id="about" className="wrap section about">
      <div className="about-text">
        <h2 className="section-title">About</h2>
        <p>Two or three sentences of substance — what you build, what you care
          about, the frameworks you love. Get specific about your craft.</p>
        <p>One personal line keeps it human.</p>
      </div>
      <img className="portrait" src="/portrait.jpg" alt="Portrait" loading="lazy" />
    </section>
  );
}
