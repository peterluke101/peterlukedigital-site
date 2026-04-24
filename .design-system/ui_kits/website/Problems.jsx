// Problems.jsx — 3 problems aligned to SEO + conversion + speed
const Problems = () => {
  const items = [
    {
      icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/></svg>,
      title: "A beautiful site buried on page 8",
      text: 'Design without SEO is decoration. If you don\u2019t rank, qualified buyers never see you in the moment they\u2019re searching.'
    },
    {
      icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="14" rx="2"/><path d="M3 8h18M7 12h6"/></svg>,
      title: 'Slow, dated, hourly billing',
      text: 'Hourly retainers and quarterly redesigns are how legacy agencies stay busy. We ship in days, not quarters, and we don\u2019t bill by the hour.'
    },
    {
      icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92V20a2 2 0 0 1-2.18 2 19.86 19.86 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.86 19.86 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3.08a2 2 0 0 1 2 1.72c.12.91.33 1.8.63 2.66a2 2 0 0 1-.45 2.11L8.09 9.77a16 16 0 0 0 6 6l1.28-1.27a2 2 0 0 1 2.11-.45c.86.3 1.75.51 2.66.63a2 2 0 0 1 1.72 2.01z"/><path d="m15 6 3-3"/><path d="M18 3v3h-3"/></svg>,
      title: 'Traffic in, customers out the door',
      text: 'A site that can\u2019t convert qualified visitors into booked calls or sales is an expensive business card.'
    }
  ];

  return (
    <section className="pld-section">
      <div className="pld-container">
        <div className="pld-section__head">
          <div className="pld-eyebrow"><span className="pld-eyebrow__dot"/>The problem</div>
          <h2 className="pld-section__title">If any of these sound familiar,<br/>your website is costing you customers.</h2>
        </div>
        <div className="pld-grid pld-grid--3">
          {items.map((it, i) => (
            <article key={i} className="pld-card">
              <div className="pld-card__icon">{it.icon}</div>
              <h3 className="pld-card__title">{it.title}</h3>
              <p className="pld-card__text">{it.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

window.Problems = Problems;
