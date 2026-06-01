import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import './App.css';
import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import Services from './pages/Services';
import About from './pages/About';
import Contact from './pages/Contact';

function ScrollReset() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
}

function AppLayout() {
  return (
    <>
      <ScrollReset />
      <Navbar />
      <main>
        <Routes>
          <Route path="/"          element={<Home />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/services"  element={<Services />} />
          <Route path="/about"     element={<About />} />
          <Route path="/contact"   element={<Contact />} />
        </Routes>
      </main>
      <Footer />
      <WhatsAppButton />
      <ScrollToTop />
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppLayout />
    </BrowserRouter>
  );
}
