import { Link } from 'react-router-dom';
import ContactSection from '../components/ContactSection';

export default function Contact() {
  return (
    <>
      <div className="page-hero">
        <div className="container">
          <h1>Contact Us</h1>
          <p>Have a project in mind? Let's bring your vision to life.</p>
          <div className="breadcrumb">
            <Link to="/">Home</Link><span>›</span><span>Contact</span>
          </div>
        </div>
      </div>
      <ContactSection />
    </>
  );
}
