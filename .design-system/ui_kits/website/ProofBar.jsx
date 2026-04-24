// ProofBar.jsx — 3-stat strip
const ProofBar = () => {
  const stats = [
    { v: '< 72 hrs', l: 'Website delivered' },
    { v: '24 hrs', l: 'First inbound lead' },
    { v: '0', l: 'Long-term contracts' },
  ];
  return (
    <section className="pld-proof">
      <div className="pld-proof__inner pld-proof__inner--three">
        {stats.map((s, i) => (
          <div key={i} className="pld-proof__item">
            <div className="pld-proof__v">{s.v}</div>
            <div className="pld-proof__l">{s.l}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

window.ProofBar = ProofBar;
