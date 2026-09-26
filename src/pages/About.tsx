import { Reveal, Overline } from '../components/Reveal';
import { LogoBadge } from '../components/Logo';
import { waLink, WHATSAPP_DISPLAY } from '../lib/config';
import { MessageCircle, ArrowRight, CheckCircle2 } from 'lucide-react';

const u = (id: string, w = 900) =>
  `https://images.unsplash.com/${id}?q=80&w=${w}&auto=format&fit=crop`;

const STANDARD = [
  {
    n: '01',
    t: 'Specimens With Root Vigour',
    d: 'We select every plant personally — inspecting root health, leaf symmetry, and adaptability so it thrives for years in homes and offices.',
  },
  {
    n: '02',
    t: 'Handcrafted Vessels & Wooden Seals',
    d: 'Paired with off-white ceramics, warm terracotta, and custom laser-engraved walnut wood medallions inspired by our signature seal.',
  },
  {
    n: '03',
    t: 'Direct WhatsApp Concierge',
    d: 'Every sale and consultation happens directly on WhatsApp. Personal, attentive, responsive, and grounded in authentic human care.',
  },
];

export default function About() {
  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <Reveal className="max-w-3xl">
          <div className="flex items-center gap-3 mb-3">
            <LogoBadge size="sm" />
            <Overline>Roots by सातत्यम्</Overline>
          </div>
          <h1 className="font-serif font-light text-4xl sm:text-5xl lg:text-6xl text-ink mt-3 tracking-tight leading-[1.05]">
            <span className="font-devanagari text-terra">सातत्यम्</span> means
            continuity — and so do <em className="italic">living roots</em>.
          </h1>
        </Reveal>

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 mt-14 items-center">
          <Reveal>
            <div className="relative rounded-3xl overflow-hidden aspect-[4/3] bg-warm shadow-xl">
              <img
                src={u('photo-1700213040248-254e9267dd3e', 1100)}
                alt="A healthy Monstera plant in soft studio lighting"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-4 right-4 bg-cream/90 backdrop-blur-md p-2 rounded-full shadow-lg">
                <LogoBadge size="md" />
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="font-serif text-2xl sm:text-3xl text-ink leading-snug font-light">
              Roots by सातत्यम् is a curated botanical studio and corporate gifting brand dedicated to bringing the enduring grace of nature into workspaces and homes.
            </p>
            <p className="text-inkbody text-sm sm:text-base leading-relaxed mt-6 font-light">
              In Sanskrit, <span className="font-devanagari text-terra font-normal">सातत्यम्</span> represents continuity, uninterrupted rhythm, and sustainable persistence. We believe corporate gifting shouldn’t consist of disposable plastic novelties or ephemeral boxes of sweets. A healthy plant in an artisanal planter grows alongside your business partnerships.
            </p>
            <p className="text-inkbody text-sm sm:text-base leading-relaxed mt-4 font-light">
              Our signature emblem — carved in warm walnut wood with an embossed copper rim — reflects our commitment to organic permanence and timeless craftsmanship. Every plant is acclimatized for indoor desks, balconies, and executive suites.
            </p>

            <div className="mt-8">
              <a
                href={waLink('Hello Roots by सातत्यम्! I would like to learn more about your brand and discuss an order.')}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1EBE5D] text-white font-mono text-xs uppercase tracking-[0.2em] px-7 py-3.5 rounded-full font-semibold shadow-md shadow-[#25D366]/20 transition-all"
              >
                <MessageCircle size={16} /> Chat on WhatsApp ({WHATSAPP_DISPLAY})
              </a>
            </div>
          </Reveal>
        </div>

        {/* The Curation Standard */}
        <section className="mt-28">
          <Reveal className="mb-12">
            <Overline>The Curation Standard</Overline>
            <h2 className="font-serif font-light text-3xl sm:text-4xl lg:text-5xl text-ink mt-3 tracking-tight">
              Three Guiding Promises
            </h2>
          </Reveal>
          <div className="grid md:grid-cols-3 gap-6">
            {STANDARD.map((s, i) => (
              <Reveal key={s.n} delay={i * 0.08}>
                <div className="bg-creamcard border border-line rounded-2xl p-8 h-full hover:border-linehover transition-colors flex flex-col justify-between">
                  <div>
                    <p className="font-mono text-xs text-terra font-semibold">{s.n}</p>
                    <h3 className="font-serif text-2xl text-ink mt-3">{s.t}</h3>
                    <p className="text-sm text-inkbody leading-relaxed mt-3 font-light">
                      {s.d}
                    </p>
                  </div>
                  <div className="mt-6 pt-4 border-t border-line/60 flex items-center gap-2 text-xs font-mono text-moss">
                    <CheckCircle2 size={13} className="text-terra" /> सातत्यम् Promise
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* Studio & Medallion Banner */}
        <section className="mt-28 bg-[#1B3B2B] text-cream rounded-3xl p-8 sm:p-14 overflow-hidden relative shadow-xl">
          <div className="grid lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-8">
              <Overline className="text-sage">Jaipur Studio & Beyond</Overline>
              <h2 className="font-serif font-light text-3xl sm:text-4xl lg:text-5xl text-cream mt-4 leading-tight">
                Not a mass nursery. An artisanal botanical label that crafts living keepsakes.
              </h2>
              <p className="text-cream/80 text-sm sm:text-base leading-relaxed mt-5 max-w-xl font-light">
                Whether you need 200 laser-etched customized planters for an annual corporate summit, or a single statement Monstera for your private terrace, we handle every order with personal attention directly over WhatsApp.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href={waLink('Hello Roots by सातत्यम्! I would like to enquire about your corporate and personal plant curation.')}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1EBE5D] text-white font-mono text-xs uppercase tracking-[0.2em] px-8 py-4 rounded-full font-semibold shadow-lg shadow-[#25D366]/20 transition-all"
                >
                  <MessageCircle size={16} /> Talk to Us on WhatsApp
                </a>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col items-center text-center">
              <LogoBadge size="hero" className="ring-4 ring-[#C86D51]/70 shadow-2xl mb-4" />
              <p className="font-devanagari text-2xl text-cream">सातत्यम्</p>
              <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-sage mt-1">Nature Curated</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
