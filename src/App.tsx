import { useEffect, Component, ReactNode } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Lenis from 'lenis';
import { Toaster } from 'sonner';
import { scrollTop } from './lib/scroll';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import WhatsAppFab from './components/WhatsAppFab';
import Home from './pages/Home';
import CorporateGiftingPage from './pages/CorporateGiftingPage';
import Curation from './pages/Curation';
import About from './pages/About';
import Contact from './pages/Contact';

interface ErrorBoundaryProps {
  children: ReactNode;
}

interface ErrorBoundaryState {
  err: boolean;
}

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { err: false };
  }

  static getDerivedStateFromError() {
    return { err: true };
  }

  render() {
    if (this.state.err) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-cream text-ink font-serif text-2xl">
          Something went wrong — please refresh.
        </div>
      );
    }
    return this.props.children;
  }
}

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    scrollTop();
  }, [pathname]);
  return null;
};

export default function App() {
  useEffect(() => {
    const lenis = new Lenis({ lerp: 0.09, smoothWheel: true });
    window.__lenis = lenis;
    let raf: number;
    const loop = (t: number) => {
      lenis.raf(t);
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(raf);
      lenis.destroy();
      window.__lenis = undefined;
    };
  }, []);

  return (
    <ErrorBoundary>
      <BrowserRouter>
        <ScrollToTop />
        <div className="relative bg-cream min-h-screen text-ink selection:bg-[#1B3B2B] selection:text-cream">
          <Navbar />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/corporate-gifting" element={<CorporateGiftingPage />} />
              <Route path="/curation" element={<Curation />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              {/* Fallback old paths gracefully to new relevant pages */}
              <Route path="/collection" element={<CorporateGiftingPage />} />
              <Route path="*" element={<Home />} />
            </Routes>
          </main>
          <Footer />
          <WhatsAppFab />
        </div>
      </BrowserRouter>
      <Toaster richColors position="bottom-left" />
    </ErrorBoundary>
  );
}
