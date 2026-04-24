// AboutPete.jsx — Pete + team, AI advantage positioning
const AboutPete = () => (
  <section id="about" className="pld-section pld-section--surface">
    <div className="pld-container">
      <div className="pld-about">
        <div className="pld-about__photo">
          <div className="pld-about__ring" />
          <img src="../../assets/pete-selfie.png" alt="Pete Luke" />
        </div>
        <div className="pld-about__body">
          <div className="pld-eyebrow"><span className="pld-eyebrow__dot"/>About the team</div>
          <h2 className="pld-section__title pld-section__title--left">Led by Pete.<br/>Powered by an AI-native team.</h2>
          <p className="pld-about__bio">
            Pete Luke leads a small, senior team of designers, SEO engineers, and content strategists. We built Peter Luke Digital around a simple idea: businesses deserve websites that perform like infrastructure, not brochures.
          </p>
          <p className="pld-about__bio">
            Our edge is how we work. Pete is deeply involved in AI tooling and has rebuilt our process around it — letting our team create, iterate, optimize, and ship in days where legacy agencies take quarters. That speed is how we can offer a free build and still drive measurable results.
          </p>
        </div>
      </div>
      <div className="pld-about__stats">
        <div><div className="pld-about__stat">40+</div><div className="pld-about__lbl">Sites launched</div></div>
        <div><div className="pld-about__stat">Days</div><div className="pld-about__lbl">From kickoff to live</div></div>
        <div><div className="pld-about__stat">AI-native</div><div className="pld-about__lbl">Workflow advantage</div></div>
      </div>
    </div>
  </section>
);

window.AboutPete = AboutPete;
