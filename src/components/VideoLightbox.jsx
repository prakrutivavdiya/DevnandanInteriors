import { useEffect, useCallback, useRef } from 'react';
import './VideoLightbox.css';

export default function VideoLightbox({ videos, index, onClose, onPrev, onNext }) {
  const videoRef = useRef(null);
  const video = videos[index];

  const handleKey = useCallback(e => {
    if (e.key === 'Escape')      onClose();
    if (e.key === 'ArrowRight')  onNext();
    if (e.key === 'ArrowLeft')   onPrev();
  }, [onClose, onNext, onPrev]);

  useEffect(() => {
    document.addEventListener('keydown', handleKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleKey);
      document.body.style.overflow = '';
    };
  }, [handleKey]);

  // Reload + autoplay whenever the video index changes
  useEffect(() => {
    const el = videoRef.current;
    if (!el) return;
    el.load();
    el.play().catch(() => {});
  }, [index]);

  if (!video) return null;

  return (
    <div className="vlb" onClick={onClose}>
      {/* Close */}
      <button className="vlb__close" onClick={onClose} aria-label="Close">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
        </svg>
      </button>

      {/* Prev */}
      <button className="vlb__arrow vlb__arrow--prev" onClick={e => { e.stopPropagation(); onPrev(); }} aria-label="Previous">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M15 18l-6-6 6-6"/></svg>
      </button>

      {/* Player */}
      <div className="vlb__content" onClick={e => e.stopPropagation()}>
        <video
          key={video.id}
          ref={videoRef}
          src={video.src}
          controls
          autoPlay
          playsInline
          className="vlb__video"
        />
        <div className="vlb__caption">
          <h4>{video.title}</h4>
          <p>{video.description}</p>
        </div>
      </div>

      {/* Next */}
      <button className="vlb__arrow vlb__arrow--next" onClick={e => { e.stopPropagation(); onNext(); }} aria-label="Next">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 18l6-6-6-6"/></svg>
      </button>

      <div className="vlb__counter">{index + 1} / {videos.length}</div>
    </div>
  );
}
