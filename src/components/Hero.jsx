import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import { Link } from 'react-router-dom';
import { HERO_SLIDES } from '../assets';
import 'swiper/css';
import 'swiper/css/pagination';
import './Hero.css';

export default function Hero() {
  return (
    <section className="hero">
      <Swiper
        modules={[Autoplay, Pagination]}
        autoplay={{ delay: 6000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        loop
        className="hero__swiper"
      >
        {HERO_SLIDES.map((slide, i) => (
          <SwiperSlide
            key={i}
            className="hero__slide"
            style={{ backgroundImage: `url("${slide.src}")` }}
          >
            <div className="hero__overlay" />
            <div className="hero__content container">
              <span className="section-label" style={{ color: 'var(--color-accent)' }}>
                Devnandan Interiors
              </span>
              <h1 className="hero__heading">{slide.heading}</h1>
              <p className="hero__sub">{slide.sub}</p>
              <div className="hero__actions">
                <Link to="/portfolio" className="btn btn-primary">View Portfolio</Link>
                <Link to="/contact" className="btn btn-outline">Get a Quote</Link>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
