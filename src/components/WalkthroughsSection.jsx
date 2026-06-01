import { useState, useRef } from 'react';
import { WALKTHROUGHS } from '../constants';
import { useInView } from '../hooks/useInView';
import VideoLightbox from './VideoLightbox';
import './WalkthroughsSection.css';

function VideoCard({ video, index, onClick }) {
  const [ref, inView] = useInView();
  const videoRef = useRef(null);
  const [hovering, setHovering] = useState(false);

  const handleMouseEnter = () => {
    setHovering(true);
    videoRef.current?.play().catch(() => {});
  };

  const handleMouseLeave = () => {
    setHovering(false);
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  return (
    <button
      ref={ref}
      className={`wt-card fade-in${inView ? ' visible' : ''}`}
      style={{ transitionDelay: `${index * 90}ms` }}
      onClick={onClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      aria-label={`Play ${video.title}`}
    >
      <div className="wt-card__thumb">
        <video
          ref={videoRef}
          src={`${video.src}#t=0.5`}
          preload="metadata"
          muted
          playsInline
          loop
        />

        {/* Overlay fades out on hover to show the video preview clearly */}
        <div className={`wt-card__overlay${hovering ? ' wt-card__overlay--preview' : ''}`}>
          <div className={`wt-card__play${hovering ? ' wt-card__play--hidden' : ''}`}>
            <svg viewBox="0 0 24 24" fill="currentColor">
              <polygon points="5 3 19 12 5 21 5 3" />
            </svg>
          </div>
          {/* "Click to watch" hint appears on hover */}
          {hovering && (
            <div className="wt-card__hint">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" />
              </svg>
              Click to watch fullscreen
            </div>
          )}
        </div>
      </div>

      <div className="wt-card__info">
        <span className="wt-card__cat">{video.category}</span>
        <h4>{video.title}</h4>
        <p>{video.description}</p>
      </div>
    </button>
  );
}

export default function WalkthroughsSection() {
  const [ref, inView] = useInView();
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <section className="walkthroughs section-pad">
      <div className="container">
        <div className={`text-center fade-in${inView ? ' visible' : ''}`} ref={ref}>
          <span className="section-label">Immersive Experience</span>
          <h2 className="section-title walkthroughs__title">3D Walkthroughs</h2>
          <p className="section-sub walkthroughs__sub">
            Hover to preview — click to watch fullscreen. Step inside our designs before they're built.
          </p>
        </div>

        <div className="walkthroughs__grid">
          {WALKTHROUGHS.map((video, i) => (
            <VideoCard
              key={video.id}
              video={video}
              index={i}
              onClick={() => setActiveIndex(i)}
            />
          ))}
        </div>
      </div>

      {activeIndex !== null && (
        <VideoLightbox
          videos={WALKTHROUGHS}
          index={activeIndex}
          onClose={() => setActiveIndex(null)}
          onPrev={() => setActiveIndex(i => (i - 1 + WALKTHROUGHS.length) % WALKTHROUGHS.length)}
          onNext={() => setActiveIndex(i => (i + 1) % WALKTHROUGHS.length)}
        />
      )}
    </section>
  );
}
