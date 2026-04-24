// Hero.jsx — dark hero with logo ring halo
const Hero = () => (
  <section id="top" className="pld-hero">
    <div className="pld-hero__glow pld-hero__glow--cyan" />
    <div className="pld-hero__glow pld-hero__glow--purple" />
    <div className="pld-hero__inner">
      <div className="pld-hero__copy">
        <div className="pld-eyebrow">
          <span className="pld-eyebrow__dot" />
          Digital partner for growing businesses
        </div>
        <h1 className="pld-hero__title">
          We build your website.<br/>
          You pay for the <span className="pld-gradient-text">traffic.</span>
        </h1>
        <p className="pld-hero__sub">
          We design, build, and grow websites that rank on Google, convert visitors into customers, and run on autopilot. No contracts. No fluff.
        </p>
        <div className="pld-hero__ctas">
          <a href="#cta" className="pld-btn pld-btn--primary">Get Your Free Website</a>
          <a href="#case" className="pld-btn pld-btn--ghost">See the Juvenis case study →</a>
        </div>
        <p className="pld-hero__trust">
          No contracts. No retainer lock-in. First lead usually within 30 days.
        </p>
      </div>
      <div className="pld-hero__visual">
        <div className="pld-hero__ring-halo" />
        <img src="../../assets/logo-primary.png" alt="Peter Luke Digital" className="pld-hero__logo" />
      </div>
    </div>
  </section>
);

window.Hero = Hero;
