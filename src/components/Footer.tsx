import { Link } from 'react-router-dom';
import Logo, { LogoBadge } from './Logo';
import { BRAND, waLink, WHATSAPP_DISPLAY, INSTAGRAM_URL, INSTAGRAM_HANDLE } from '../lib/config';
import { MessageCircle } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#1B3B2B] text-cream" data-testid="site-footer">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 py-16 sm:py-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
          <div className="md:col-span-6">
            <Logo dark size="lg" />
            <p className="font-serif italic text-lg sm:text-xl text-cream/80 mt-6 max-w-sm leading-relaxed font-light">
              Living green gifts and botanical curation that grow with your relationships.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a
                href={waLink('Hello Roots by सातत्यम्! I have an order or corporate enquiry.')}
                target="_blank"
                rel="noreferrer"
                data-testid="footer-whatsapp-link"
                className="inline-flex items-center gap-2.5 bg-[#25D366] hover:bg-[#1EBE5D] text-white rounded-full px-6 py-3 font-mono text-[11px] uppercase tracking-[0.18em] font-semibold transition-all shadow-md shadow-[#25D366]/20"
              >
                <MessageCircle size={16} /> WhatsApp: {WHATSAPP_DISPLAY}
              </a>
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noreferrer"
                data-testid="footer-instagram-link"
                className="inline-flex items-center gap-2 border border-cream/25 hover:border-cream/60 transition-colors rounded-full px-6 py-3 font-mono text-[11px] uppercase tracking-[0.18em] text-cream/90"
              >
                Instagram: {INSTAGRAM_HANDLE}
              </a>
            </div>
          </div>

          <div className="md:col-span-3">
            <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-sage mb-5">
              Explore
            </p>
            <ul className="space-y-3">
              {[
                { to: '/', label: 'Home' },
                { to: '/corporate-gifting', label: 'Corporate Gifting' },
                { to: '/curation', label: 'Bespoke Curation' },
                { to: '/about', label: 'About सातत्यम्' },
                { to: '/contact', label: 'Contact & WhatsApp' },
              ].map((item) => (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    className="text-cream/80 hover:text-cream transition-colors text-sm"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-3">
            <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-sage mb-5">
              Corporate & Studio Services
            </p>
            <ul className="space-y-3 text-sm text-cream/80 font-light">
              <li>• Executive & VIP Green Gifting</li>
              <li>• Custom Laser-Etched Wooden Seals</li>
              <li>• New Hire & Employee Welcome Kits</li>
              <li>• Festival & Diwali Corporate Hampers</li>
              <li>• Office & Terrace Botanical Styling</li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-cream/15 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3 opacity-90">
            <LogoBadge size="sm" />
            <span className="font-devanagari text-base text-terra font-medium">सातत्यम्</span>
            <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-cream/70">
              — Continuity in Green
            </span>
          </div>
          <p className="font-mono text-[10px] text-cream/50 tracking-[0.15em]">
            © {new Date().getFullYear()} Roots by सातत्यम् · Nature Curated · All Sales Directed to WhatsApp
          </p>
        </div>
      </div>
    </footer>
  );
}
