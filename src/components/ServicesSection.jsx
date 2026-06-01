import { Link } from 'react-router-dom';
import { SERVICES } from '../constants';
import { useInView } from '../hooks/useInView';
import './ServicesSection.css';

const icons = {
  '3d-visualization': <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/></svg>,
  'interior-design': <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>,
  'space-planning': <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 21V9"/></svg>,
  'walkthrough': <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><polygon points="23 7 16 12 23 17 23 7"/><rect x="1" y="5" width="15" height="14" rx="2"/></svg>,
  'modular-design': <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="2" y="3" width="7" height="7"/><rect x="15" y="3" width="7" height="7"/><rect x="2" y="14" width="7" height="7"/><rect x="15" y="14" width="7" height="7"/></svg>,
  'renovation': <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z"/></svg>,
};

export default function ServicesSection() {
  const [ref, inView] = useInView();

  return (
    <section className="services-section section-pad">
      <div className="container">
        <div className={`text-center fade-in${inView ? ' visible' : ''}`} ref={ref}>
          <span className="section-label">What We Do</span>
          <h2 className="section-title">Our Services</h2>
          <p className="section-sub">
            From concept to photorealistic render — we offer end-to-end design solutions for every space.
          </p>
        </div>

        <div className="services-grid">
          {SERVICES.map((s, i) => (
            <ServiceCard key={s.id} service={s} delay={i * 80} />
          ))}
        </div>

        <div className="text-center" style={{ marginTop: '48px' }}>
          <Link to="/services" className="btn btn-outline-dark">Explore All Services</Link>
        </div>
      </div>
    </section>
  );
}

function ServiceCard({ service, delay }) {
  const [ref, inView] = useInView();
  return (
    <div
      ref={ref}
      className={`service-card fade-in${inView ? ' visible' : ''}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="service-card__icon">{icons[service.id]}</div>
      <h3>{service.title}</h3>
      <p>{service.description}</p>
      <Link to="/services" className="service-card__link">
        Learn More
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
      </Link>
    </div>
  );
}
