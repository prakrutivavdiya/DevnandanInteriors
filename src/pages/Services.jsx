import { Link } from 'react-router-dom';
import { SERVICES, SOCIAL_LINKS } from '../constants';
import { useInView } from '../hooks/useInView';
import './Services.css';

function ServiceDetail({ service, index }) {
  const [ref, inView] = useInView();
  const isEven = index % 2 === 0;

  return (
    <div
      ref={ref}
      className={`service-detail fade-in${inView ? ' visible' : ''} ${isEven ? 'service-detail--normal' : 'service-detail--reversed'}`}
    >
      <div className="service-detail__image">
        <img src={service.image} alt={service.title} loading="lazy" />
      </div>
      <div className="service-detail__text">
        <span className="section-label">Our Service</span>
        <h2>{service.title}</h2>
        <p>{service.longDescription}</p>
        <ul className="service-detail__features">
          {service.features.map(f => (
            <li key={f}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="20 6 9 17 4 12"/>
              </svg>
              {f}
            </li>
          ))}
        </ul>
        <a href={SOCIAL_LINKS.whatsapp} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
          Enquire Now
        </a>
      </div>
    </div>
  );
}

export default function Services() {
  return (
    <>
      <div className="page-hero">
        <div className="container">
          <h1>Our Services</h1>
          <p>End-to-end 3D design and interior solutions for every space and vision.</p>
          <div className="breadcrumb">
            <Link to="/">Home</Link><span>›</span><span>Services</span>
          </div>
        </div>
      </div>

      <section className="services-page section-pad">
        <div className="container">
          {SERVICES.map((s, i) => (
            <ServiceDetail key={s.id} service={s} index={i} />
          ))}
        </div>
      </section>
    </>
  );
}
