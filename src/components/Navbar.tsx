import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { Menu, X, MessageCircle } from 'lucide-react';
import Logo from './Logo';
import { waLink, WHATSAPP_DISPLAY } from '../lib/config';

const LINKS = [
  { to: '/', label: 'Home' },
  { to: '/corporate-gifting', label: 'Corporate Gifting' },
  { to: '/curation', label: 'Bespoke Curation' },
  { to: '/about', label: 'About सातत्यम्' },
  { to: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => setMenuOpen(false), [location.pathname]);

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-40 transition-all duration-300 ${
          scrolled
            ? 'backdrop-blur-md bg-cream/90 border-b border-line shadow-sm'
            : 'bg-transparent'
        }`}
        data-testid="site-header"
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-8 h-20 flex items-center justify-between py-3">
          <Link to="/" data-testid="nav-logo-link" aria-label="Roots by सातत्यम्">
            <Logo />
          </Link>

          <nav className="hidden lg:flex items-center gap-7">
            {LINKS.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                className={({ isActive }) =>
                  `font-mono text-[11px] uppercase tracking-[0.2em] transition-colors ${
                    isActive ? 'text-terra font-semibold' : 'text-inkbody hover:text-moss'
                  }`
                }
              >
                {l.label}
              </NavLink>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href={waLink('Hello Roots by सातत्यम्! I would like to enquire about your plant curation & gifting services.')}
              target="_blank"
              rel="noreferrer"
              data-testid="nav-whatsapp-cta"
              className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1EBE5D] text-white font-mono text-[11px] uppercase tracking-[0.18em] px-5 py-2.5 rounded-full transition-all shadow-md shadow-[#25D366]/20 font-medium"
            >
              <MessageCircle size={15} />
              <span className="hidden sm:inline">WhatsApp:</span> {WHATSAPP_DISPLAY}
            </a>

            <button
              type="button"
              className="lg:hidden p-2.5 rounded-full border border-line bg-creamcard cursor-pointer"
              onClick={() => setMenuOpen((v) => !v)}
              data-testid="nav-mobile-toggle"
              aria-label="Toggle menu"
            >
              {menuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-30 bg-cream flex flex-col items-center justify-center gap-7 lg:hidden px-6"
            data-testid="nav-mobile-menu"
          >
            {LINKS.map((l, i) => (
              <motion.div
                key={l.to}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.06 * i, duration: 0.4 }}
              >
                <NavLink
                  to={l.to}
                  className="font-serif text-3xl sm:text-4xl text-ink hover:text-terra transition-colors"
                  onClick={() => setMenuOpen(false)}
                >
                  {l.label}
                </NavLink>
              </motion.div>
            ))}

            <motion.a
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.4 }}
              href={waLink('Hello Roots by सातत्यम्! I would like to place an order / enquiry on WhatsApp.')}
              target="_blank"
              rel="noreferrer"
              className="mt-6 flex items-center gap-2 bg-[#25D366] text-white font-mono text-xs uppercase tracking-[0.18em] px-8 py-4 rounded-full shadow-lg shadow-[#25D366]/30 font-semibold"
            >
              <MessageCircle size={17} /> Direct Order on WhatsApp
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
