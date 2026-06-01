import { useState } from 'react';
import emailjs from '@emailjs/browser';
import { SERVICES, CONTACT_EMAIL, CONTACT_PHONE, ADDRESS, GOOGLE_MAPS_LINK, WORKING_HOURS } from '../constants';
import { useInView } from '../hooks/useInView';
import './ContactSection.css';

const EMAILJS_SERVICE_ID = 'service_wcmvzcd';
const EMAILJS_TEMPLATE_ID = 'template_c5xn6zc';
const EMAILJS_PUBLIC_KEY = 'M6KUTFvqWtlly4skd';

export default function ContactSection() {
  const [ref, inView] = useInView();
  const [form, setForm] = useState({ name: '', phone: '', email: '', service: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState('');
  const [fieldErrors, setFieldErrors] = useState({});

  const validateField = (name, value) => {
    if (name === 'name')
      return /^[a-zA-Z\s]{2,}$/.test(value.trim()) ? '' : 'Enter a valid name (letters only, min 2 chars)';
    if (name === 'phone')
      return /^[6-9]\d{9}$/.test(value.replace(/\s+/g, '').replace(/^\+91/, '')) ? '' : 'Enter a valid 10-digit Indian mobile number';
    if (name === 'email')
      return !value || /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) ? '' : 'Enter a valid email address';
    return '';
  };

  const hasErrors = Object.values(fieldErrors).some(e => e) ||
    !form.name || !form.phone;

  const handleChange = e => {
    const { name, value } = e.target;
    setForm(f => ({ ...f, [name]: value }));
    if (fieldErrors[name]) setFieldErrors(fe => ({ ...fe, [name]: validateField(name, value) }));
  };

  const handleBlur = e => {
    const { name, value } = e.target;
    setFieldErrors(fe => ({ ...fe, [name]: validateField(name, value) }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    setSending(true);
    setError('');
    emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID,
      {
        from_name: form.name,
        phone: form.phone,
        reply_to: form.email,
        service: form.service,
        message: form.message,
      },
      EMAILJS_PUBLIC_KEY
    ).then(() => {
      setSubmitted(true);
      setForm({ name: '', phone: '', email: '', service: '', message: '' });
    }).catch(() => {
      setError('Something went wrong. Please try again.');
    }).finally(() => {
      setSending(false);
    });
  };

  return (
    <section className="contact-section section-pad" id="contact">
      <div className="container">
        <div className={`text-center fade-in${inView ? ' visible' : ''}`} ref={ref}>
          <span className="section-label">Let's Talk</span>
          <h2 className="section-title">Get a Free Quote</h2>
          <p className="section-sub">Tell us about your project and we'll get back to you within 24 hours.</p>
        </div>

        <div className="contact-inner">
          {/* Form */}
          <div className="contact-form-wrap">
            {submitted ? (
              <div className="contact-success">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 11.08V12a10 10 0 11-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/>
                </svg>
                <h3>Message Sent!</h3>
                <p>Thank you for reaching out. We'll contact you shortly.</p>
                <button className="btn btn-primary" onClick={() => setSubmitted(false)}>Send Another</button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-row">
                  <div className="form-group">
                    <label>Full Name *</label>
                    <input name="name" value={form.name} onChange={handleChange} onBlur={handleBlur} placeholder="Your name" />
                    {fieldErrors.name && <span className="field-error">{fieldErrors.name}</span>}
                  </div>
                  <div className="form-group">
                    <label>Phone *</label>
                    <input name="phone" value={form.phone} onChange={handleChange} onBlur={handleBlur} placeholder="+91 xxxxx xxxxx" />
                    {fieldErrors.phone && <span className="field-error">{fieldErrors.phone}</span>}
                  </div>
                </div>
                <div className="form-group">
                  <label>Email</label>
                  <input name="email" type="text" value={form.email} onChange={handleChange} onBlur={handleBlur} placeholder="your@email.com" />
                  {fieldErrors.email && <span className="field-error">{fieldErrors.email}</span>}
                </div>
                <div className="form-group">
                  <label>Service Required</label>
                  <select name="service" value={form.service} onChange={handleChange}>
                    <option value="">Select a service...</option>
                    {SERVICES.map(s => <option key={s.id} value={s.id}>{s.title}</option>)}
                  </select>
                </div>
                <div className="form-group">
                  <label>Message</label>
                  <textarea name="message" value={form.message} onChange={handleChange} placeholder="Tell us about your project..." rows={4} />
                </div>
                {error && <p style={{ color: 'red', marginBottom: '0.5rem' }}>{error}</p>}
                <button type="submit" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }} disabled={sending || hasErrors}>
                  {sending ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            )}
          </div>

          {/* Info + Map */}
          <div className="contact-info">
            <div className="contact-details">
              <div className="contact-detail-item">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
                <div><strong>Phone</strong><a href={`tel:${CONTACT_PHONE}`}>{CONTACT_PHONE}</a></div>
              </div>
              <div className="contact-detail-item">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
                <div><strong>Email</strong><a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a></div>
              </div>
              <div className="contact-detail-item">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
                <div><strong>Studio</strong><span>{ADDRESS}</span></div>
              </div>
              <div className="contact-detail-item">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                <div><strong>Hours</strong><span>{WORKING_HOURS}</span></div>
              </div>
            </div>

            <div className="contact-map">
              <iframe
                title="Devnandan Interiors Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.8!2d72.47!3d23.03!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDAyJzI0LjAiTiA3MsKwMjgnMTIuMCJF!5e0!3m2!1sen!2sin!4v1234567890"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              <a href={GOOGLE_MAPS_LINK} target="_blank" rel="noopener noreferrer" className="map-link">
                Open in Google Maps →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
