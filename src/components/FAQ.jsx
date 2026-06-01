import { useState } from 'react';
import { FAQ_ITEMS } from '../constants';
import { useInView } from '../hooks/useInView';
import './FAQ.css';

function FAQItem({ item }) {
  const [open, setOpen] = useState(false);
  return (
    <div className={`faq-item${open ? ' faq-item--open' : ''}`}>
      <button className="faq-item__q" onClick={() => setOpen(v => !v)}>
        <span>{item.question}</span>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M6 9l6 6 6-6" />
        </svg>
      </button>
      <div className="faq-item__body">
        <p>{item.answer}</p>
      </div>
    </div>
  );
}

export default function FAQ() {
  const [ref, inView] = useInView();
  return (
    <section className="faq-section section-pad">
      <div className="container">
        <div className={`text-center fade-in${inView ? ' visible' : ''}`} ref={ref}>
          <span className="section-label">Got Questions?</span>
          <h2 className="section-title">Frequently Asked Questions</h2>
          <p className="section-sub">Answers to the most common questions from our clients.</p>
        </div>
        <div className="faq-list">
          {FAQ_ITEMS.map(item => <FAQItem key={item.id} item={item} />)}
        </div>
      </div>
    </section>
  );
}
