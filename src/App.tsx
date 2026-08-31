import './App.css'

function App() {

  return (
    <>
      <section id="center">
        <div>
          <h1>Maha Zayed</h1>
          <h2>Frontend Engineer & Digital Artist</h2>
          <p>Frontend Engineer · React · TypeScript · Full-Stack</p>
          <p>
            I'm a frontend engineer and digital artist with a passion for creating functional web applications and digital art
          </p>
          <p>I'm on the hunt for a new challenge. Let's chat!</p>
        </div>
        <div>
          <p>Recent highlights from Alma:</p>
          <ul>
            <li>Drove adoption by 4,500+ providers within 30 days by leading technical scope and implementation of a new appointment cancellation workflow spanning provider and client experiences, built in React and TypeScript</li>
            <li>Spearheaded voluntary multi-factor authentication enrollment past 14,000 providers via a phased launch across the React/TypeScript frontend and Python backend</li>
            <li>Reduced complexity in the Provider Calendar, one of the hardest areas of the codebase, through targeted refactoring of reusable React components rather than an open-ended rewrite</li>
            <li>Anchored a newly formed greenfield team as its only experienced Alma engineer, building the core React frontend for a payer billing system from early discovery through development</li>
            <li>Enabled Alma's transition off its third-party billing vendor (Kareo) by building claim forms and validation in React for its replacement native system, streamlining work for Insurance Operations teams</li>
            <li>Onboarded four frontend engineers, authored a Frontend Architecture Rubric used for standard onboarding documentation, and founded a monthly cross-team "Munch and Learn" series</li>
          </ul>
        </div>
      </section>

      <div className="ticks"></div>
      <section id="next-steps">
        <div id="social">
          <h2>Get in touch with me:</h2>
          <ul>
            <li>
              <a href="mailto:mahamzayed@gmail.comv" target="_blank">
                Email
              </a>
            </li>
            <li>
              <a href="https://github.com/mahamzayed" target="_blank">
                GitHub
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/mahamzayed/" target="_blank">
                LinkedIn
              </a>
            </li>
          </ul>
        </div>
      </section>

      <div className="ticks"></div>
      <section id="spacer"></section>
    </>
  )
}

export default App
