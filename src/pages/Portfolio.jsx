import { useState } from 'react';
import { Link } from 'react-router-dom';
import { PORTFOLIO_ITEMS, PORTFOLIO_CATEGORIES } from '../constants';
import Lightbox from '../components/Lightbox';
import './Portfolio.css';

const INITIAL_COUNT = 12;

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [lightboxIndex, setLightboxIndex] = useState(null);
  const [visible, setVisible] = useState(INITIAL_COUNT);

  const filtered = activeCategory === 'all'
    ? PORTFOLIO_ITEMS
    : PORTFOLIO_ITEMS.filter(i => i.category === activeCategory);

  const shown = filtered.slice(0, visible);
  const hasMore = visible < filtered.length;

  const handleCatChange = (id) => {
    setActiveCategory(id);
    setVisible(INITIAL_COUNT);
    setLightboxIndex(null);
  };

  return (
    <>
      <div className="page-hero">
        <div className="container">
          <h1>Our Portfolio</h1>
          <p>Explore our collection of 3D design projects across residential and commercial spaces.</p>
          <div className="breadcrumb">
            <Link to="/">Home</Link><span>›</span><span>Portfolio</span>
          </div>
        </div>
      </div>

      <section className="portfolio-page section-pad">
        <div className="container">
          {/* Filter tabs */}
          <div className="filter-tabs">
            {PORTFOLIO_CATEGORIES.map(cat => (
              <button
                key={cat.id}
                className={`filter-tab${activeCategory === cat.id ? ' active' : ''}`}
                onClick={() => handleCatChange(cat.id)}
              >
                {cat.label}
                <span className="filter-tab__count">
                  {cat.id === 'all' ? PORTFOLIO_ITEMS.length : PORTFOLIO_ITEMS.filter(i => i.category === cat.id).length}
                </span>
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="portfolio-page__grid">
            {shown.map((item, i) => (
              <button
                key={item.id}
                className="portfolio-page__card"
                onClick={() => setLightboxIndex(i)}
              >
                <img src={item.image} alt={item.title} loading="lazy" />
                <div className="portfolio-page__overlay">
                  <span className="portfolio-card__cat">{item.category}</span>
                  <h4>{item.title}</h4>
                  <p>{item.description}</p>
                  <span className="portfolio-page__view">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7"/></svg>
                    View
                  </span>
                </div>
              </button>
            ))}
          </div>

          {hasMore && (
            <div className="text-center" style={{ marginTop: '48px' }}>
              <button className="btn btn-outline-dark" onClick={() => setVisible(v => v + INITIAL_COUNT)}>
                Load More Projects
              </button>
            </div>
          )}
        </div>
      </section>

      {lightboxIndex !== null && (
        <Lightbox
          images={shown}
          index={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
          onPrev={() => setLightboxIndex(i => (i - 1 + shown.length) % shown.length)}
          onNext={() => setLightboxIndex(i => (i + 1) % shown.length)}
        />
      )}
    </>
  );
}
