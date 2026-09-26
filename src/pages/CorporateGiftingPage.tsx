import CorporateGifting from '../components/CorporateGifting';
import { Reveal, Overline } from '../components/Reveal';
import { LogoBadge } from '../components/Logo';
import { waLink, WHATSAPP_DISPLAY } from '../lib/config';
import { MessageCircle, CheckCircle2 } from 'lucide-react';

export default function CorporateGiftingPage() {
  return (
    <div className="pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 mb-8">
        <Reveal className="max-w-3xl">
          <div className="flex items-center gap-3 mb-3">
            <LogoBadge size="sm" />
            <Overline>Roots by सातत्यम्</Overline>
          </div>
          <h1 className="font-serif font-light text-4xl sm:text-5xl lg:text-6xl text-ink leading-[1.05] tracking-tight">
            Corporate Green Gifting,{' '}
            <em className="italic text-terra">Reimagined</em>.
          </h1>
          <p className="text-inkbody text-base sm:text-lg mt-5 leading-relaxed font-light">
            Ditch disposable corporate swag. Offer your clients, leaders, and team members living botanical gifts that purify the workspace and grow stronger with every passing month.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href={waLink('Hello Roots by सातत्यम्! I would like to request your Corporate Gifting Catalogue on WhatsApp.')}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1EBE5D] text-white font-mono text-[11px] uppercase tracking-[0.2em] px-7 py-3.5 rounded-full font-semibold shadow-md shadow-[#25D366]/20 transition-all"
            >
              <MessageCircle size={16} /> WhatsApp Sales: {WHATSAPP_DISPLAY}
            </a>
          </div>
        </Reveal>
      </div>

      <CorporateGifting />
    </div>
  );
}
