// HowItWorks.jsx — 3 steps, AI-velocity positioning
const HowItWorks = () => {
  const steps = [
    { n: '01', t: 'Free 20-min audit', d: 'We review your site, search visibility, and conversion gaps. You walk away with a plan, no pitch deck.' },
    { n: '02', t: 'We build, ship, optimize', d: 'Our team uses AI-accelerated workflows to design, copywrite, and launch in days — built around SEO from the ground up.' },
    { n: '03', t: 'We drive trackable traffic', d: 'Monthly content, social, and on-page SEO run on autopilot. You see leads and rankings in transparent reporting.' }
  ];
  return (
    <section id="how" className="pld-section">
      <div className="pld-container">
        <div className="pld-section__head">
          <div className="pld-eyebrow"><span className="pld-eyebrow__dot"/>How it works</div>
          <h2 className="pld-section__title">Three steps.<br/>Zero upfront cost.</h2>
        </div>
        <div className="pld-steps">
          {steps.map((s, i) => (
            <div key={i} className="pld-step">
              <div className="pld-step__n">{s.n}</div>
              <h3 className="pld-step__t">{s.t}</h3>
              <p className="pld-step__d" dangerouslySetInnerHTML={{__html: s.d}} />
              {i < steps.length - 1 && <div className="pld-step__line"/>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

window.HowItWorks = HowItWorks;
