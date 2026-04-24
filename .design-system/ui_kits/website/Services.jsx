// Services.jsx — 3 cards. Website featured. SEO + AI + handled-for-you positioning.
const Services = () => {
  const items = [
    {
      featured: true,
      price: 'FREE BUILD',
      icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="14" rx="2"/><path d="M8 21h8M12 18v3M7 9h4M7 13h7"/></svg>,
      title: 'High-Performance Website',
      bullets: [
        'Custom-designed, mobile-first, lightning-fast',
        'SEO-engineered from the foundation up',
        'Built and shipped in days, not quarters',
        'Yours to keep after 6 months'
      ]
    },
    {
      price: '$400/mo value',
      icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>,
      title: 'SEO &amp; Content',
      bullets: [
        '2 SEO-optimized blog posts every month',
        'Targeted to the keywords your buyers actually search',
        'Built to rank, drive organic traffic, and convert'
      ]
    },
    {
      price: '$600/mo value',
      icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="5" y="2" width="14" height="20" rx="3"/><path d="M11 18h2"/></svg>,
      title: 'Social Media, Handled',
      bullets: [
        '30 strategic posts/month across your active platforms',
        'We write, design, schedule, and report',
        'Trackable traffic driven back to your site'
      ]
    }
  ];

  return (
    <section id="services" className="pld-section pld-section--surface">
      <div className="pld-container">
        <div className="pld-section__head">
          <div className="pld-eyebrow"><span className="pld-eyebrow__dot"/>What $800/month gets you</div>
          <h2 className="pld-section__title">Built for businesses ready to <span className="pld-gradient-text">grow on the web.</span></h2>
        </div>
        <div className="pld-grid pld-grid--3">
          {items.map((s, i) => (
            <article key={i} className={`pld-card pld-card--service ${s.featured ? 'pld-card--featured' : ''}`}>
              {s.featured && <span className="pld-card__flag">Included Free</span>}
              <div className="pld-card__icon">{s.icon}</div>
              <div className="pld-card__price">{s.price}</div>
              <h3 className="pld-card__title" dangerouslySetInnerHTML={{__html: s.title}}/>
              <ul className="pld-card__list">
                {s.bullets.map((b, j) => (
                  <li key={j}><span className="pld-bullet"/><span dangerouslySetInnerHTML={{__html: b}}/></li>
                ))}
              </ul>
            </article>
          ))}
        </div>
        <p className="pld-services__fine">
          $800/month flat. 6-month minimum, then month-to-month. No hourly billing. No long-term contracts.
        </p>
      </div>
    </section>
  );
};

window.Services = Services;
