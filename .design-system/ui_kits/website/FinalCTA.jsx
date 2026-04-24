// FinalCTA.jsx + Footer.jsx
const FinalCTA = () => (
  <section id="cta" className="pld-final">
    <div className="pld-final__glow pld-final__glow--left" />
    <div className="pld-final__glow pld-final__glow--right" />
    <div className="pld-container pld-final__inner">
      <img src="../../assets/logo-icon.png" alt="" className="pld-final__logo"/>
      <h2 className="pld-final__title">Your website shouldn&rsquo;t<br/>cost you <span className="pld-gradient-text">$5,000 upfront.</span></h2>
      <p className="pld-final__sub">We build it free. You pay $800/month for the content that fills it with patients.</p>
      <a href="#" className="pld-btn pld-btn--primary pld-btn--lg">Claim Your Free Website</a>
      <div className="pld-final__fine">$0 upfront · 6-month minimum · No lock-in after that</div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="pld-footer">
    <div className="pld-footer__grad" />
    <div className="pld-container">
      <div className="pld-footer__grid">
        <div className="pld-footer__brand">
          <img src="../../assets/logo-icon.png" alt="" />
          <div className="pld-footer__name">Peter Luke Digital</div>
          <div className="pld-footer__tag">High-performance websites, SEO & social — built for businesses that want results.</div>
        </div>
        <div className="pld-footer__col">
          <h4>What we do</h4>
          <a>Website Design & Build</a>
          <a>Logo & Brand Design</a>
          <a>SEO & Content</a>
          <a>Social Media Management</a>
          <a>Free Audit</a>
        </div>
        <div className="pld-footer__col">
          <h4>Company</h4>
          <a>About Pete</a><a>Case Studies</a><a>Contact</a>
        </div>
        <div className="pld-footer__col">
          <h4>Contact</h4>
          <a href="mailto:peter@peterlukedigital.com">peter@peterlukedigital.com</a>
          <a>Book a call →</a>
        </div>
      </div>
      <div className="pld-footer__copy">
        <span>© 2026 Peter Luke Digital. All rights reserved.</span>
        <span>Privacy · Terms</span>
      </div>
    </div>
  </footer>
);

window.FinalCTA = FinalCTA;
window.Footer = Footer;
