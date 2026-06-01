import { useState, useEffect } from 'react';
import { STATS } from '../constants';
import { useInView } from '../hooks/useInView';
import './StatsBar.css';

function Counter({ target, suffix, active }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!active) return;
    let start = 0;
    const duration = 1800;
    const step = Math.ceil(target / (duration / 16));
    const timer = setInterval(() => {
      start += step;
      if (start >= target) { setCount(target); clearInterval(timer); }
      else setCount(start);
    }, 16);
    return () => clearInterval(timer);
  }, [active, target]);

  return <span>{count}{suffix}</span>;
}

export default function StatsBar() {
  const [ref, inView] = useInView();

  return (
    <section className="stats-bar" ref={ref}>
      <div className="container stats-bar__grid">
        {STATS.map((s, i) => (
          <div key={i} className={`stat-item fade-in${inView ? ' visible' : ''}`} style={{ transitionDelay: `${i * 100}ms` }}>
            <div className="stat-item__number">
              <Counter target={s.value} suffix={s.suffix} active={inView} />
            </div>
            <div className="stat-item__label">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
