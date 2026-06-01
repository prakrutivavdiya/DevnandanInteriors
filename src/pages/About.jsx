import { Link } from 'react-router-dom';
import { APP_NAME, ABOUT_STORY, COMPANY_VALUES, STATS, SOCIAL_LINKS } from '../constants';
import { ABOUT_IMAGE } from '../assets';
import StatsBar from '../components/StatsBar';
import { useInView } from '../hooks/useInView';
import './About.css';

function ValueCard({ val, delay }) {
  const [ref, inView] = useInView();
  return (
    <div ref={ref} className={`value-card fade-in${inView ? ' visible' : ''}`} style={{ transitionDelay: `${delay}ms` }}>
      <h3>{val.title}</h3>
      <p>{val.description}</p>
    </div>
  );
}

export default function About() {
  const [imgRef, imgInView] = useInView();
  const [txtRef, txtInView] = useInView();

  return (
    <>
      <div className="page-hero">
        <div className="container">
          <h1>About Us</h1>
          <p>Passionate designers turning ideas into photorealistic reality since 2016.</p>
          <div className="breadcrumb">
            <Link to="/">Home</Link><span>›</span><span>About</span>
          </div>
        </div>
      </div>

      {/* Story */}
      <section className="about-page section-pad">
        <div className="container about-page__inner">
          <div ref={imgRef} className={`about-page__image fade-in${imgInView ? ' visible' : ''}`}>
            <img src={ABOUT_IMAGE} alt={APP_NAME} loading="lazy" />
          </div>
          <div ref={txtRef} className={`about-page__text fade-in${txtInView ? ' visible' : ''}`} style={{ transitionDelay: '100ms' }}>
            <span className="section-label">Our Story</span>
            <h2>Where Vision Meets Precision</h2>
            <p>{ABOUT_STORY}</p>
            <div className="about-page__actions">
              <Link to="/portfolio" className="btn btn-primary">View Our Work</Link>
              <a href={SOCIAL_LINKS.whatsapp} target="_blank" rel="noopener noreferrer" className="btn btn-outline-dark">
                Get in Touch
              </a>
            </div>
          </div>
        </div>
      </section>

      <StatsBar />

      {/* Values */}
      <section className="values-section section-pad">
        <div className="container">
          <div className="text-center" style={{ marginBottom: '52px' }}>
            <span className="section-label">What Drives Us</span>
            <h2>Our Core Values</h2>
          </div>
          <div className="values-grid">
            {COMPANY_VALUES.map((v, i) => (
              <ValueCard key={v.title} val={v} delay={i * 80} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
