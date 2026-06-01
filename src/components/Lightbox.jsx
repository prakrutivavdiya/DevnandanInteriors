import { useEffect, useCallback } from 'react';
import './Lightbox.css';

export default function Lightbox({ images, index, onClose, onPrev, onNext }) {
  const handleKey = useCallback(e => {
    if (e.key === 'Escape') onClose();
    if (e.key === 'ArrowRight') onNext();
    if (e.key === 'ArrowLeft') onPrev();
  }, [onClose, onNext, onPrev]);

  useEffect(() => {
    document.addEventListener('keydown', handleKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleKey);
      document.body.style.overflow = '';
    };
  }, [handleKey]);

  const img = images[index];
  if (!img) return null;

  return (
    <div className="lightbox" onClick={onClose}>
      <button className="lightbox__close" onClick={onClose} aria-label="Close">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
        </svg>
      </button>

      <button className="lightbox__arrow lightbox__arrow--prev" onClick={e => { e.stopPropagation(); onPrev(); }} aria-label="Previous">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M15 18l-6-6 6-6"/></svg>
      </button>

      <div className="lightbox__img-wrap" onClick={e => e.stopPropagation()}>
        <img src={img.image} alt={img.title} />
        <div className="lightbox__caption">
          <span className="lightbox__cat">{img.category}</span>
          <h4>{img.title}</h4>
          {img.description && <p>{img.description}</p>}
        </div>
      </div>

      <button className="lightbox__arrow lightbox__arrow--next" onClick={e => { e.stopPropagation(); onNext(); }} aria-label="Next">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 18l6-6-6-6"/></svg>
      </button>

      <div className="lightbox__counter">{index + 1} / {images.length}</div>
    </div>
  );
}
