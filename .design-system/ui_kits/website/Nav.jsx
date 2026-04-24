// Nav.jsx — sticky navigation with blur backdrop
const Nav = () => {
  const [scrolled, setScrolled] = React.useState(false);
  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`pld-nav ${scrolled ? 'pld-nav--scrolled' : ''}`}>
      <div className="pld-nav__inner">
        <a href="#top" className="pld-nav__brand">
          <img src="../../assets/logo-icon.png" alt="" className="pld-nav__logo" />
          <span className="pld-nav__name">Peter Luke Digital</span>
        </a>
        <nav className="pld-nav__links">
          <a href="#services">Services</a>
          <a href="#how">How It Works</a>
          <a href="#case">Case Study</a>
          <a href="#who">Who We Help</a>
          <a href="#about">About</a>
        </nav>
        <a href="#cta" className="pld-btn pld-btn--primary pld-btn--sm">Get Free Website</a>
      </div>
    </header>
  );
};

window.Nav = Nav;
