// WhoWeHelp.jsx — broadened to growing businesses
const WhoWeHelp = () => {
  const items = [
    'Want a website revamp without paying by the hour',
    'Need a high-performance site that\u2019s powerful under the hood',
    'Refuse to be buried on page 8 of Google',
    'Want SEO and on-page optimization done right',
    'Need social media posting handled strategically',
    'Want trackable traffic driven back to the business',
    'Are tired of legacy agencies and quarterly redesigns',
    'Value speed, clarity, and measurable results'
  ];
  return (
    <section id="who" className="pld-section">
      <div className="pld-container">
        <div className="pld-who">
          <div>
            <div className="pld-eyebrow"><span className="pld-eyebrow__dot"/>Who we help</div>
            <h2 className="pld-section__title pld-section__title--left">Built for businesses that<br/>want results, not retainers.</h2>
            <p className="pld-section__lede">If you want a fast, high-converting, search-optimized site — and a team that ships at modern speed — you\u2019re in the right place.</p>
          </div>
          <ul className="pld-checklist">
            {items.map((t, i) => (
              <li key={i}>
                <span className="pld-check">
                  <svg viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m3 7 3 3 5-6"/></svg>
                </span>
                <span>{t}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

window.WhoWeHelp = WhoWeHelp;
