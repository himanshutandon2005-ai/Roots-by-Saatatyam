import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Sparkles,
  CheckCircle2,
  Package,
  Layers,
  HeartHandshake,
  MessageCircle,
  Building2,
  ArrowRight,
  ShieldCheck,
  Truck,
  Leaf,
  Award
} from 'lucide-react';
import { Reveal, Overline } from './Reveal';
import { LogoBadge } from './Logo';
import { waCorporateQuoteLink, waLink, WHATSAPP_DISPLAY } from '../lib/config';

const GIFT_IMG_1 =
  'https://static.prod-images.emergentagent.com/jobs/7d43d52a-b8cf-43ae-80b8-7084912e3d35/images/5e01b4b5267f10c928551404094bdfe91268b847e2c69665a21cf12210e127fb.jpeg';
const GIFT_IMG_2 =
  'https://images.unsplash.com/photo-1588440691140-09155c1be58a?q=80&w=900&auto=format&fit=crop';
const GIFT_IMG_3 =
  'https://images.unsplash.com/photo-1771817778067-1dd38dfa56dd?q=80&w=900&auto=format&fit=crop';
const GIFT_IMG_4 =
  'https://images.unsplash.com/photo-1646297670075-f2097a5281e7?q=80&w=900&auto=format&fit=crop';

const SUITES = [
  {
    id: 'executive',
    title: 'The Executive Desk Sanctuary',
    tagline: 'Refined elegance for corner offices & boardrooms',
    image: GIFT_IMG_2,
    badge: 'Popular for VIPs',
    idealFor: 'CXO Gifting, Key Account Appreciation, Board Milestones',
    highlights: [
      'Sculptural indoor specimen (ZZ Plant, Peace Lily or Ficus Elastica)',
      'Hand-cast ceramic planter in warm matte off-white or deep moss',
      'Laser-engraved solid walnut emblem with your corporate insignia',
      'Care passport & personalized executive letterhead card',
    ],
    startingAt: 'Starting from ₹799 / unit',
  },
  {
    id: 'onboarding',
    title: 'Employee Onboarding & Culture Kits',
    tagline: 'A living welcome that takes root from Day 1',
    image: GIFT_IMG_1,
    badge: 'Team Favourite',
    idealFor: 'New Hire Kits, Work Anniversaries, Wellness Initiatives',
    highlights: [
      'Thriving, resilient desk greens (Money Plant, Haworthia or Jade)',
      'Compact windowsill ceramic with drainage & saucer',
      'Custom printed band with company mission statement',
      'Interactive QR plant care helpline on WhatsApp',
    ],
    startingAt: 'Starting from ₹449 / unit (Volume Tiers)',
  },
  {
    id: 'festive',
    title: 'The Festive & Founder’s Day Hamper',
    tagline: 'Celebrate milestones with sustainable grandeur',
    image: GIFT_IMG_3,
    badge: 'Diwali & Annual Events',
    idealFor: 'Diwali, New Year, Annual Galas, Investor Deliverables',
    highlights: [
      'Duo ceramic planter pairing with complementary textures',
      'Artisanal plant nourishment tonic bottle & brass misting bottle',
      'Handcrafted keepsake kraft gift box with silk botanical ribbon',
      'Custom branded brass or wooden medallion with your logo',
    ],
    startingAt: 'Starting from ₹1,299 / unit',
  },
  {
    id: 'event',
    title: 'Conference & Event Green Tokens',
    tagline: 'Zero-waste eco-souvenirs guests cherish for years',
    image: GIFT_IMG_4,
    badge: 'Bulk Scale (50–2000+)',
    idealFor: 'Summits, Green Conclaves, Press Meets, Retreats',
    highlights: [
      'Miniature drought-tolerant succulents in minimalist pots',
      'Co-branded seed paper thank-you card that sprouts into herbs',
      'Travel-safe protective packaging ready for delegate bags',
      'Guaranteed pan-India doorstep and venue logistics',
    ],
    startingAt: 'Starting from ₹299 / unit in volume',
  },
];

const ADVANTAGES = [
  {
    icon: Leaf,
    title: 'A Gift That Actually Grows',
    desc: 'Unlike disposable sweets, calendars, or plastic swag that get discarded, a living plant sits on the recipient’s desk for years — creating daily positive brand recall.',
  },
  {
    icon: Award,
    title: 'Custom Laser-Branded Seals',
    desc: 'We craft bespoke wooden medals and copper plaques matching our signature seal, tastefully etched with your company emblem and message.',
  },
  {
    icon: ShieldCheck,
    title: 'Jaipur Acclimatized & Robust',
    desc: 'Each plant is conditioned to thrive in air-conditioned workspaces and local climatic variations, with foolproof care instructions included.',
  },
  {
    icon: Truck,
    title: 'White-Glove Safe Delivery',
    desc: 'Engineered protective unboxing experience. Deliveries available directly to single corporate offices or dispatched individually to employees’ home addresses.',
  },
];

export default function CorporateGifting() {
  const [purpose, setPurpose] = useState('Client Appreciation');
  const [quantity, setQuantity] = useState('50 – 150 units');
  const [packageStyle, setPackageStyle] = useState('Artisanal Off-White Ceramic');
  const [brandingOptions, setBrandingOptions] = useState<string[]>([
    'Laser-etched wooden logo medal',
    'Personalized greeting card',
  ]);
  const [companyName, setCompanyName] = useState('');
  const [notes, setNotes] = useState('');

  const toggleBranding = (opt: string) => {
    setBrandingOptions((prev) =>
      prev.includes(opt) ? prev.filter((o) => o !== opt) : [...prev, opt]
    );
  };

  const handleWhatsAppInquiry = () => {
    const link = waCorporateQuoteLink({
      purpose,
      quantity,
      packageStyle,
      brandingOptions,
      companyName,
      notes,
    });
    window.open(link, '_blank');
  };

  return (
    <section id="corporate-gifting" className="py-24 sm:py-32 relative">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        {/* Section Header */}
        <div className="grid lg:grid-cols-12 gap-10 items-end border-b border-line pb-16">
          <div className="lg:col-span-8">
            <Reveal>
              <div className="flex items-center gap-3 mb-4">
                <LogoBadge size="sm" />
                <Overline>Roots by सातत्यम् · Corporate Botanical Gifting</Overline>
              </div>
              <h2 className="font-serif font-light text-4xl sm:text-5xl lg:text-6xl text-ink leading-[1.08] tracking-tight">
                Gifts that breathe, inspire, and{' '}
                <em className="italic text-terra">endure</em>.
              </h2>
              <p className="mt-6 text-lg text-inkbody leading-relaxed max-w-2xl font-light">
                In Sanskrit, <span className="font-devanagari text-terra font-normal">सातत्यम्</span> represents
                unbroken continuity. We help forward-looking organizations celebrate milestones, welcome talent, and
                honor valued clients with sustainable, living plant gifts that strengthen business relationships.
              </p>
            </Reveal>
          </div>

          <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-4">
            <a
              href={waLink(
                'Hello Roots by सातत्यम्! I would like to request your Corporate Gifting Catalogue and volume pricing for my company.'
              )}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-moss text-cream font-mono text-[11px] uppercase tracking-[0.2em] px-8 py-4 rounded-full hover:bg-mosshover transition-all shadow-lg shadow-moss/10"
            >
              <MessageCircle size={16} /> Request Catalogue on WhatsApp
            </a>
            <p className="text-xs text-inkmuted text-center font-mono">
              Fastest corporate turnaround · WhatsApp: {WHATSAPP_DISPLAY}
            </p>
          </div>
        </div>

        {/* Why Corporate Plants Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 my-20">
          {ADVANTAGES.map((adv, idx) => {
            const Icon = adv.icon;
            return (
              <Reveal key={adv.title} delay={idx * 0.08}>
                <div className="bg-creamcard border border-line rounded-2xl p-7 h-full flex flex-col justify-between hover:border-linehover transition-colors">
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-warm flex items-center justify-center text-terra mb-5 border border-line/60">
                      <Icon size={22} />
                    </div>
                    <h3 className="font-serif text-2xl text-ink leading-snug">
                      {adv.title}
                    </h3>
                    <p className="text-sm text-inkbody mt-3 leading-relaxed">
                      {adv.desc}
                    </p>
                  </div>
                  <div className="pt-6 mt-6 border-t border-line/60 flex items-center gap-2 text-moss text-xs font-mono">
                    <CheckCircle2 size={14} className="text-terra" />
                    <span>सातत्यम् standard</span>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>

        {/* Corporate Suites Presentation */}
        <div className="mb-24">
          <Reveal className="mb-12">
            <Overline>Curated Collections</Overline>
            <h3 className="font-serif font-light text-3xl sm:text-4xl text-ink mt-3">
              Corporate Gifting Editions
            </h3>
            <p className="text-inkbody text-sm mt-2 max-w-xl">
              Each edition is tailored with selected low-maintenance species, artisanal ceramic planters, and bespoke company branding.
            </p>
          </Reveal>

          <div className="grid md:grid-cols-2 gap-8">
            {SUITES.map((suite, idx) => (
              <Reveal key={suite.id} delay={idx * 0.1}>
                <div className="bg-creamcard border border-line rounded-3xl overflow-hidden hover:border-linehover transition-all group flex flex-col h-full">
                  <div className="relative aspect-[16/10] overflow-hidden bg-warm">
                    <img
                      src={suite.image}
                      alt={suite.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute top-4 left-4 bg-cream/95 backdrop-blur-md border border-line px-3.5 py-1.5 rounded-full font-mono text-[10px] uppercase tracking-[0.2em] text-moss">
                      {suite.badge}
                    </div>
                    <div className="absolute bottom-4 right-4 bg-moss/90 backdrop-blur-md text-cream px-3.5 py-1.5 rounded-full font-mono text-[10px] tracking-wider">
                      {suite.startingAt}
                    </div>
                  </div>

                  <div className="p-7 sm:p-9 flex-1 flex flex-col justify-between">
                    <div>
                      <h4 className="font-serif text-2xl sm:text-3xl text-ink leading-tight">
                        {suite.title}
                      </h4>
                      <p className="font-mono text-xs text-terra uppercase tracking-wider mt-1.5">
                        {suite.tagline}
                      </p>

                      <div className="mt-4 p-3 rounded-xl bg-warm/60 border border-line text-xs text-inkbody">
                        <span className="font-semibold text-ink">Ideal for: </span>
                        {suite.idealFor}
                      </div>

                      <div className="mt-6 space-y-2.5">
                        {suite.highlights.map((h, i) => (
                          <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-inkbody">
                            <span className="text-terra mt-0.5">•</span>
                            <span>{h}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="mt-8 pt-6 border-t border-line flex flex-wrap items-center justify-between gap-3">
                      <a
                        href={waLink(
                          `Hello Roots by सातत्यम्! I am interested in ordering or receiving a sample of "${suite.title}" for my company. Please guide me.`
                        )}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 bg-moss text-cream font-mono text-[10px] uppercase tracking-[0.2em] px-6 py-3 rounded-full hover:bg-mosshover transition-colors"
                      >
                        Enquire on WhatsApp <ArrowRight size={13} />
                      </a>
                      <span className="font-mono text-[11px] text-inkmuted">
                        Custom logo branding included
                      </span>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Brand Customization Showcase Feature */}
        <Reveal>
          <div className="bg-[#1C2C23] text-cream rounded-3xl p-8 sm:p-14 mb-24 relative overflow-hidden">
            <div className="absolute -right-20 -bottom-20 w-96 h-96 rounded-full bg-[#C86D51]/10 blur-3xl" />
            <div className="grid lg:grid-cols-12 gap-10 items-center relative z-10">
              <div className="lg:col-span-7">
                <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-[#C86D51] block mb-3">
                  Signature Craftsmanship
                </span>
                <h3 className="font-serif font-light text-3xl sm:text-4xl lg:text-5xl leading-tight">
                  Laser-Carved Wooden Seals & Custom Corporate Identity
                </h3>
                <p className="text-cream/80 text-sm sm:text-base leading-relaxed mt-5 max-w-xl">
                  Just like our own medallion seal, we laser-engrave premium walnut wood medals, polished brass tags,
                  or foil-stamped cotton bands with your brand's insignia. Your clients and partners receive an
                  artisan keepsake that looks magnificent on any executive desk.
                </p>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-8 pt-8 border-t border-cream/15">
                  <div>
                    <p className="font-mono text-xs text-[#C86D51] uppercase">01. Engraving</p>
                    <p className="text-xs text-cream/80 mt-1">Laser etched logo on natural wood</p>
                  </div>
                  <div>
                    <p className="font-mono text-xs text-[#C86D51] uppercase">02. Packaging</p>
                    <p className="text-xs text-cream/80 mt-1">Bespoke kraft gift sleeve & ribbon</p>
                  </div>
                  <div>
                    <p className="font-mono text-xs text-[#C86D51] uppercase">03. Support</p>
                    <p className="text-xs text-cream/80 mt-1">Free WhatsApp plant care for all</p>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-5 flex flex-col items-center justify-center p-6 bg-cream/5 rounded-2xl border border-cream/10 text-center">
                <LogoBadge size="hero" className="ring-2 ring-[#C86D51]/60 shadow-2xl mb-4" />
                <h4 className="font-serif text-2xl text-cream">The सातत्यम् Seal</h4>
                <p className="text-xs text-cream/70 mt-2 max-w-xs">
                  Symbol of enduring quality and nature curated with care. We create identical tailored medallions for your brand.
                </p>
                <a
                  href={waLink(
                    'Hello Roots by सातत्यम्! I would like to see examples of custom logo branding on your planters & wooden medals.'
                  )}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-6 inline-flex items-center gap-2 bg-[#C86D51] text-cream font-mono text-[10px] uppercase tracking-[0.2em] px-6 py-3 rounded-full hover:bg-[#B55B3F] transition-colors"
                >
                  <MessageCircle size={14} /> See Branding Samples on WhatsApp
                </a>
              </div>
            </div>
          </div>
        </Reveal>

        {/* WhatsApp Corporate Quote Estimator / Direct Sales Launcher */}
        <Reveal>
          <div className="bg-warm/70 border border-line rounded-3xl p-7 sm:p-12 relative overflow-hidden">
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-10">
                <Overline>Instant WhatsApp Proposal</Overline>
                <h3 className="font-serif font-light text-3xl sm:text-4xl text-ink mt-3">
                  Design Your Corporate Gifting Plan
                </h3>
                <p className="text-inkbody text-sm mt-3">
                  Select your preferences below. Our direct sales concierge on WhatsApp will confirm live sample availability, customized logo mockups, and tiered bulk discounting.
                </p>
              </div>

              <div className="bg-creamcard border border-line rounded-2xl p-6 sm:p-8 space-y-6 shadow-sm">
                <div>
                  <label className="font-mono text-[11px] uppercase tracking-[0.18em] text-inkmuted block mb-2">
                    Company / Organization Name
                  </label>
                  <div className="relative">
                    <Building2 size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-inkmuted" />
                    <input
                      type="text"
                      value={companyName}
                      onChange={(e) => setCompanyName(e.target.value)}
                      placeholder="e.g. Acme Corporation / Jaipur Studio"
                      className="w-full bg-cream border border-line rounded-xl pl-11 pr-4 py-3.5 text-sm text-ink placeholder:text-inkmuted focus:outline-none focus:border-moss/50"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="font-mono text-[11px] uppercase tracking-[0.18em] text-inkmuted block mb-2">
                      Occasion / Purpose
                    </label>
                    <select
                      value={purpose}
                      onChange={(e) => setPurpose(e.target.value)}
                      className="w-full bg-cream border border-line rounded-xl px-4 py-3.5 text-sm text-ink focus:outline-none focus:border-moss/50 cursor-pointer"
                    >
                      <option>Client Appreciation</option>
                      <option>Employee Onboarding / Welcome Kits</option>
                      <option>Festive & Diwali Gifting</option>
                      <option>Annual Gala & Conference Souvenirs</option>
                      <option>Executive / Board Milestones</option>
                      <option>Custom Architectural Styling</option>
                    </select>
                  </div>

                  <div>
                    <label className="font-mono text-[11px] uppercase tracking-[0.18em] text-inkmuted block mb-2">
                      Estimated Quantity
                    </label>
                    <select
                      value={quantity}
                      onChange={(e) => setQuantity(e.target.value)}
                      className="w-full bg-cream border border-line rounded-xl px-4 py-3.5 text-sm text-ink focus:outline-none focus:border-moss/50 cursor-pointer"
                    >
                      <option>25 – 50 units</option>
                      <option>51 – 150 units</option>
                      <option>151 – 500 units</option>
                      <option>500 – 1,000+ units</option>
                      <option>Single bespoke sample unit</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="font-mono text-[11px] uppercase tracking-[0.18em] text-inkmuted block mb-2">
                    Planter & Presentation Style
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {[
                      'Artisanal Off-White Ceramic',
                      'Walnut Wood & Terracotta',
                      'Signature Hamper Gift Box',
                    ].map((style) => (
                      <button
                        type="button"
                        key={style}
                        onClick={() => setPackageStyle(style)}
                        className={`p-3.5 rounded-xl border text-left text-xs transition-all cursor-pointer ${
                          packageStyle === style
                            ? 'bg-moss text-cream border-moss font-medium shadow-sm'
                            : 'bg-cream border-line text-ink hover:border-linehover'
                        }`}
                      >
                        {style}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="font-mono text-[11px] uppercase tracking-[0.18em] text-inkmuted block mb-2">
                    Custom Branding & Touches (Select all required)
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {[
                      'Laser-etched wooden logo medal',
                      'Personalized greeting card',
                      'Custom branded box sleeve',
                      'Direct delivery to multiple addresses',
                    ].map((opt) => {
                      const isChecked = brandingOptions.includes(opt);
                      return (
                        <div
                          key={opt}
                          onClick={() => toggleBranding(opt)}
                          className={`p-3 rounded-xl border text-xs flex items-center gap-3 cursor-pointer transition-colors ${
                            isChecked
                              ? 'border-terra/60 bg-warm/80 text-ink font-medium'
                              : 'border-line bg-cream text-inkbody hover:border-linehover'
                          }`}
                        >
                          <span
                            className={`w-4 h-4 rounded flex items-center justify-center text-[10px] ${
                              isChecked
                                ? 'bg-terra text-white'
                                : 'border border-inkmuted/40'
                            }`}
                          >
                            {isChecked ? '✓' : ''}
                          </span>
                          <span>{opt}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>

                <div>
                  <label className="font-mono text-[11px] uppercase tracking-[0.18em] text-inkmuted block mb-2">
                    Specific Notes or Budget Guideline (Optional)
                  </label>
                  <textarea
                    rows={2}
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    placeholder="e.g. Delivery needed by mid-month in Jaipur and Bengaluru offices..."
                    className="w-full bg-cream border border-line rounded-xl px-4 py-3 text-sm text-ink placeholder:text-inkmuted focus:outline-none focus:border-moss/50 resize-none"
                  />
                </div>

                {/* Direct WhatsApp Call to Action */}
                <div className="pt-4 border-t border-line">
                  <button
                    type="button"
                    onClick={handleWhatsAppInquiry}
                    className="w-full flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#1EBE5D] text-white font-mono text-xs uppercase tracking-[0.2em] py-4 rounded-full transition-all shadow-lg shadow-[#25D366]/25 cursor-pointer font-semibold"
                  >
                    <MessageCircle size={18} /> Send Inquiry Directly to WhatsApp ({WHATSAPP_DISPLAY})
                  </button>
                  <p className="text-center text-xs text-inkmuted mt-3">
                    Opens WhatsApp with your pre-filled custom requirements. Direct personal attention, no automated bots.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
