import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { NAV_LINKS, SOCIAL_LINKS } from '../constants';
import { LOGO } from '../assets';
import './Navbar.css';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { pathname } = useLocation();

  const isHome = pathname === '/';

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
  }, [menuOpen]);

  const navClass = [
    'navbar',
    scrolled || !isHome ? 'navbar--solid' : 'navbar--transparent',
    menuOpen ? 'navbar--open' : '',
  ].join(' ');

  return (
    <header className={navClass}>
      <div className="container navbar__inner">
        <Link to="/" className="navbar__logo">
          <img src={LOGO} alt="Devnandan Interiors" />
        </Link>

        <nav className="navbar__links">
          {NAV_LINKS.map(({ label, path }) => (
            <Link
              key={path}
              to={path}
              className={`navbar__link${pathname === path ? ' active' : ''}`}
            >
              {label}
            </Link>
          ))}
          <a
            href={SOCIAL_LINKS.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary navbar__cta"
          >
            Get a Quote
          </a>
        </nav>

        <button
          className="navbar__hamburger"
          onClick={() => setMenuOpen(v => !v)}
          aria-label="Toggle menu"
        >
          <span /><span /><span />
        </button>
      </div>

      {/* Mobile menu */}
      <div className={`navbar__mobile${menuOpen ? ' navbar__mobile--open' : ''}`}>
        <nav>
          {NAV_LINKS.map(({ label, path }) => (
            <Link
              key={path}
              to={path}
              className={`navbar__mobile-link${pathname === path ? ' active' : ''}`}
            >
              {label}
            </Link>
          ))}
          <a
            href={SOCIAL_LINKS.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
            style={{ marginTop: '24px', alignSelf: 'flex-start' }}
          >
            Get a Quote
          </a>
        </nav>
      </div>
    </header>
  );
}
