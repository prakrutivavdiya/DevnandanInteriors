import { Link } from 'react-router-dom';
import { APP_NAME, ABOUT_SUMMARY } from '../constants';
import { ABOUT_IMAGE } from '../assets';
import { useInView } from '../hooks/useInView';
import './AboutSection.css';

export default function AboutSection() {
  const [imgRef, imgInView] = useInView();
  const [txtRef, txtInView] = useInView();

  return (
    <section className="about-section section-pad">
      <div className="container about-section__inner">
        <div
          ref={imgRef}
          className={`about-section__image fade-in${imgInView ? ' visible' : ''}`}
        >
          <img src={ABOUT_IMAGE} alt="Devnandan Interiors Studio" loading="lazy" />
          <div className="about-section__badge">
            <span className="badge-number">8+</span>
            <span className="badge-label">Years of Excellence</span>
          </div>
        </div>

        <div
          ref={txtRef}
          className={`about-section__text fade-in${txtInView ? ' visible' : ''}`}
          style={{ transitionDelay: '120ms' }}
        >
          <span className="section-label">Who We Are</span>
          <h2 className="section-title">Crafting Spaces That Tell Your Story</h2>
          <p className="about-section__summary">{ABOUT_SUMMARY}</p>

          <ul className="about-section__points">
            <li>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12"/></svg>
              Photorealistic 3D visualization before construction
            </li>
            <li>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12"/></svg>
              End-to-end residential & commercial design
            </li>
            <li>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12"/></svg>
              200+ successful projects across Gujarat
            </li>
          </ul>

          <div className="about-section__actions">
            <Link to="/about" className="btn btn-primary">About Us</Link>
            <Link to="/portfolio" className="btn btn-outline-dark">Our Work</Link>
          </div>
        </div>
      </div>
    </section>
  );
}
