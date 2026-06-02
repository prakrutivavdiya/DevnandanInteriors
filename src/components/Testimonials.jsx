import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import { TESTIMONIALS } from '../constants';
import { useInView } from '../hooks/useInView';
import 'swiper/css';
import 'swiper/css/pagination';
import './Testimonials.css';

const Stars = ({ count }) => (
  <div className="stars">
    {Array.from({ length: count }, (_, i) => (
      <svg key={i} viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
      </svg>
    ))}
  </div>
);

export default function Testimonials() {
  const [ref, inView] = useInView();

  return (
    <section className="testimonials section-pad">
      <div className="container">
        <div className={`text-center fade-in${inView ? ' visible' : ''}`} ref={ref}>
          <span className="section-label">Client Love</span>
          <h2 className="section-title">What Our Clients Say</h2>
          <p className="section-sub">Real experiences from homeowners and businesses we've worked with.</p>
        </div>

        <Swiper
          modules={[Autoplay, Pagination]}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          slidesPerView={1}
          spaceBetween={28}
          breakpoints={{ 768: { slidesPerView: 2 }, 1024: { slidesPerView: 3 } }}
          loop
          className="testimonials__swiper"
        >
          {TESTIMONIALS.map(t => (
            <SwiperSlide key={t.id}>
              <div className="testimonial-card">
                <Stars count={t.rating} />
                {t.text && <p className="testimonial-card__text">"{t.text}"</p>}
                <div className="testimonial-card__author">
                  <div className="testimonial-card__avatar">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <strong>{t.name}</strong>
                    <span>{t.location}</span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
