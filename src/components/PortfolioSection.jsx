import { useState } from 'react';
import { Link } from 'react-router-dom';
import { PORTFOLIO_ITEMS } from '../constants';
import { useInView } from '../hooks/useInView';
import PanoramaViewer, { PANORAMAS } from './PanoramaViewer';
import './PortfolioSection.css';
import './PanoramaViewer.css';

export default function PortfolioSection() {
  const [ref, inView] = useInView();
  const [activePano, setActivePano] = useState(null);
  const featured = PORTFOLIO_ITEMS.slice(0, 6);

  return (
    <section className="portfolio-section section-pad">
      <div className="container">
        <div className={`text-center fade-in${inView ? ' visible' : ''}`} ref={ref}>
          <span className="section-label">Our Work</span>
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-sub">
            A glimpse of spaces we've transformed — from luxury residences to commercial landmarks.
          </p>
        </div>

        <div className="portfolio-grid">
          {featured.map((item, i) => (
            <PortfolioCard key={item.id} item={item} delay={i * 70} />
          ))}
        </div>

        <div className="text-center" style={{ marginTop: '52px' }}>
          <Link to="/portfolio" className="btn btn-primary">View All Projects</Link>
        </div>

        {/* 360° Virtual Tour */}
        <div className="pano-section">
          <div className="pano-section-header">
            <span className="section-label">Immersive Experience</span>
            <h3>360° Virtual Room Tours</h3>
            <p>Step inside our designs — click any room to explore in full 360°</p>
          </div>
          <div className="pano-cards">
            {PANORAMAS.map(pano => (
              <div key={pano.id} className="pano-card" onClick={() => setActivePano(pano)}>
                <img src={pano.src} alt={pano.label} />
                <div className="pano-card__icon">⟳</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <PanoramaViewer active={activePano} onClose={() => setActivePano(null)} />
    </section>
  );
}

function PortfolioCard({ item, delay }) {
  const [ref, inView] = useInView();
  return (
    <Link
      to="/portfolio"
      ref={ref}
      className={`portfolio-card fade-in${inView ? ' visible' : ''}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <img src={item.image} alt={item.title} loading="lazy" />
      <div className="portfolio-card__overlay">
        <span className="portfolio-card__cat">{item.category}</span>
        <h4>{item.title}</h4>
      </div>
    </Link>
  );
}
