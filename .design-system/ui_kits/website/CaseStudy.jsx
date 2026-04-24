// CaseStudy.jsx — testimonial-driven
const CaseStudy = () => (
  <section id="case" className="pld-section pld-section--surface">
    <div className="pld-container">
      <div className="pld-section__head">
        <div className="pld-eyebrow"><span className="pld-eyebrow__dot"/>Case study</div>
        <h2 className="pld-section__title">Juvenis Medical — launched to first lead<br/>in under 24 hours.</h2>
      </div>

      <figure className="pld-quote">
        <svg className="pld-quote__mark" width="44" height="32" viewBox="0 0 56 40" fill="none" aria-hidden="true">
          <defs><linearGradient id="pld-q-grad" x1="0" x2="56" y1="0" y2="40" gradientUnits="userSpaceOnUse"><stop offset="0" stopColor="#00D4FF"/><stop offset="0.55" stopColor="#8A2BFF"/><stop offset="1" stopColor="#FF00E0"/></linearGradient></defs>
          <path fill="url(#pld-q-grad)" d="M0 40V22C0 10 8 2 22 0v8c-7 2-11 7-11 14h11v18H0zm34 0V22C34 10 42 2 56 0v8c-7 2-11 7-11 14h11v18H34z"/>
        </svg>
        <blockquote className="pld-quote__body">
          Pete put together a brand-new, aesthetically pleasing, and technically superior site for me in less than 72 hours. I have never worked with any web firm that is this responsive, this fast, this proficient and this professional.
        </blockquote>
        <figcaption className="pld-quote__cite">
          <div className="pld-quote__avatar" aria-hidden="true">PG</div>
          <div className="pld-quote__meta">
            <div className="pld-quote__name">Dr. Paul Goodkin, DC</div>
            <div className="pld-quote__role">CEO, Juvenis Medical LLC</div>
          </div>
          <a href="#cta" className="pld-quote__link">See the Juvenis case study →</a>
        </figcaption>
      </figure>
    </div>
  </section>
);

window.CaseStudy = CaseStudy;
