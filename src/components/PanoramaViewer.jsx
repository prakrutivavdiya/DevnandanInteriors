import { useEffect, useRef } from 'react';
import { ReactPhotoSphereViewer } from 'react-photo-sphere-viewer';
import './PanoramaViewer.css';

const PANORAMAS = [
  { id: 1, label: 'Living Room',            src: '/panorama/living room panorama.png' },
  { id: 2, label: 'Kitchen & Dining',       src: '/panorama/kitchen and dining area panorama.png' },
  { id: 3, label: 'Bedroom',               src: '/panorama/bedroom panorama.png' },
  { id: 4, label: 'Bedroom 2',             src: '/panorama/bedroom 2 panorama.png' },
  { id: 5, label: 'Bedroom with Study',    src: '/panorama/bedroom with study table panorama.png' },
];

export default function PanoramaViewer({ active, onClose }) {
  const containerRef = useRef();

  useEffect(() => {
    if (active) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = '';
    return () => { document.body.style.overflow = ''; };
  }, [active]);

  useEffect(() => {
    const onKey = e => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [onClose]);

  if (!active) return null;

  return (
    <div className="pano-overlay" onClick={e => { if (e.target === e.currentTarget) onClose(); }}>
      <div className="pano-modal" ref={containerRef}>
        <button className="pano-close" onClick={onClose} aria-label="Close">✕</button>
        <div className="pano-viewer-wrap">
          <ReactPhotoSphereViewer
            src={active.src}
            height="100%"
            width="100%"
            defaultZoomLvl={0}
            navbar={['zoom', 'fullscreen']}
          />
        </div>
      </div>
    </div>
  );
}

export { PANORAMAS };
