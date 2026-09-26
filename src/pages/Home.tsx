import { useRef, MouseEvent } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform, useMotionValue } from 'framer-motion';
import {
  ArrowRight,
  MessageCircle,
  Building2,
  Sparkles,
  CheckCircle2,
  TreePine,
  Layers,
  ArrowUpRight
} from 'lucide-react';
import { MaskLines, Reveal, Overline, EASE } from '../components/Reveal';
import Marquee from '../components/Marquee';
import CorporateGifting from '../components/CorporateGifting';
import Logo, { LogoBadge } from '../components/Logo';
import { waLink, WHATSAPP_DISPLAY, INSTAGRAM_URL, INSTAGRAM_HANDLE } from '../lib/config';

const u = (id: string, w = 900) =>
  `https://images.unsplash.com/${id}?q=80&w=${w}&auto=format&fit=crop`;

const HERO_MAIN = u('photo-1700213040248-254e9267dd3e', 1000);
const HERO_SECONDARY =
  'https://static.prod-images.emergentagent.com/jobs/7d43d52a-b8cf-43ae-80b8-7084912e3d35/images/5e01b4b5267f10c928551404094bdfe91268b847e2c69665a21cf12210e127fb.jpeg';

const CURATION_PILLARS = [
  {
    title: 'Corporate Green Gifting',
    desc: 'Executive desk specimens, festival hampers, and bespoke employee kits with custom laser-engraved wooden medallions of your company logo.',
    image: HERO_SECONDARY,
    action: 'Order Corporate Gifts on WhatsApp',
    waText: 'Hello Roots by सातत्यम्! I would like to enquire about Corporate Green Gifting options.',
  },
  {
    title: 'Handcrafted Ceramic Planters',
    desc: 'Off-white ceramics, warm terracotta, and textured vessels designed to elevate workspaces and living rooms as interior décor.',
    image: u('photo-1588440691140-09155c1be58a', 800),
    action: 'Enquire About Planters on WhatsApp',
    waText: 'Hello Roots by सातत्यम्! I would like to see your artisanal planter collection.',
  },
  {
    title: 'Office & Commercial Greenery',
    desc: 'Curated low-maintenance, air-purifying plants tailored for meeting rooms, reception desks, and creative studios.',
    image: u('photo-1604762525953-2c80447cc4a6', 800),
    action: 'Consult on Workspace Plants',
    waText: 'Hello Roots by सातत्यम्! I am looking for plant styling for our office/workspace.',
  },
  {
    title: 'Bespoke Balcony & Living Spaces',
    desc: 'Climate-tested greens selected specifically for local weather conditions, accompanied by lifetime WhatsApp care guidance.',
    image: u('photo-1761618523171-cc2de902078c', 800),
    action: 'Get Personal Curation Advice',
    waText: 'Hello Roots by सातत्यम्! I would like recommendations for my balcony and home greens.',
  },
];

const VALUES = [
  {
    k: 'सातत्यम् — Continuity',
    v: 'Living plants represent continuous life, vitality, and lasting bonds — making them the most thoughtful gift an organization can offer.',
  },
  {
    k: 'Artisanal Wooden Seal Craft',
    v: 'Each signature gift features a custom laser-etched circular wooden medallion inspired by our brand seal with your recipient or company name.',
  },
  {
    k: 'Zero-Fuss Direct WhatsApp Sales',
    v: 'No confusing checkout carts or stockout surprises. Our botanical concierge assists you directly on WhatsApp with photos, advice, and delivery coordination.',
  },
  {
    k: 'Lifetime Plant Care Support',
    v: 'We remain alongside every recipient with dedicated WhatsApp care advice, ensuring every plant flourishes long after delivery.',
  },
];

const IG_SHOTS = [
  u('photo-1700213040197-d13ed110bfb9', 500),
  u('photo-1533038023143-de7a62a9d779', 500),
  u('photo-1513609487300-dec090d55d31', 500),
  u('photo-1569350080887-dd38c27caad0', 500),
  u('photo-1617214922084-5db8d3c3df5a', 500),
  u('photo-1588440691140-09155c1be58a', 500),
];

function Hero() {
  const heroRef = useRef<HTMLElement>(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rx = useTransform(my, [-0.5, 0.5], [5, -5]);
  const ry = useTransform(mx, [-0.5, 0.5], [-7, 7]);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });

  const yImg = useTransform(scrollYProgress, [0, 1], [0, 80]);

  const onMove = (e: MouseEvent<HTMLElement>) => {
    const r = heroRef.current?.getBoundingClientRect();
    if (!r) return;
    mx.set((e.clientX - r.left) / r.width - 0.5);
    my.set((e.clientY - r.top) / r.height - 0.5);
  };

  return (
    <section
      ref={heroRef}
      onMouseMove={onMove}
      onMouseLeave={() => {
        mx.set(0);
        my.set(0);
      }}
      className="relative min-h-[92vh] flex items-center overflow-hidden pt-28 pb-16"
      data-testid="hero-section"
    >
      <div
        className="absolute -top-40 -right-40 w-[580px] h-[580px] rounded-full bg-sagelight blur-3xl opacity-70"
        aria-hidden
      />
      <div
        className="absolute top-1/2 -left-40 w-[420px] h-[420px] rounded-full bg-[#C86D51]/10 blur-3xl"
        aria-hidden
      />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 grid lg:grid-cols-12 gap-12 lg:gap-8 items-center w-full relative z-10">
        <div className="lg:col-span-7">
          <div className="inline-flex items-center gap-2.5 bg-warm border border-line px-4 py-1.5 rounded-full mb-6 shadow-xs">
            <LogoBadge size="sm" />
            <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-moss font-semibold">
              Roots by सातत्यम् · Nature Curated
            </span>
          </div>

          <h1 className="font-serif font-light text-5xl sm:text-6xl lg:text-7xl xl:text-[5.1rem] leading-[1.03] tracking-tight text-ink">
            <MaskLines
              delay={0.1}
              lines={[
                'Living gifts that',
                'grow with your',
                <span key="g" className="italic text-terra">
                  relationships.
                </span>,
              ]}
            />
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8, ease: EASE as any }}
            className="mt-7 max-w-xl text-inkbody text-base sm:text-lg leading-relaxed font-light"
          >
            Sustainable corporate green gifting, bespoke artisanal planters, and climate-right botanical curation. We pair healthy, sculptural plants with custom laser-engraved wooden branding for corporate milestones, client appreciation, and modern workspaces.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8, ease: EASE as any }}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <a
              href={waLink(
                'Hello Roots by सातत्यम्! I would like to discuss Corporate Gifting & get your catalogue on WhatsApp.'
              )}
              target="_blank"
              rel="noreferrer"
              data-testid="hero-corporate-whatsapp"
              className="inline-flex items-center gap-2.5 bg-[#25D366] hover:bg-[#1EBE5D] text-white font-mono text-[11px] uppercase tracking-[0.2em] px-8 py-4 rounded-full shadow-lg shadow-[#25D366]/25 transition-all font-semibold"
            >
              <MessageCircle size={17} /> Plan Corporate Gifts on WhatsApp
            </a>

            <a
              href="#corporate-gifting"
              data-testid="hero-explore-suites"
              className="inline-flex items-center gap-2 border border-moss/30 hover:border-moss text-moss font-mono text-[11px] uppercase tracking-[0.2em] px-7 py-4 rounded-full hover:bg-sagelight/60 transition-colors"
            >
              Explore Gifting Editions <ArrowRight size={14} />
            </a>
          </motion.div>

          <div className="mt-10 pt-6 border-t border-line/70 flex flex-wrap items-center gap-6 text-xs text-inkbody font-mono">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 size={14} className="text-terra" /> Direct WhatsApp Concierge
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 size={14} className="text-terra" /> Custom Laser Wooden Seals
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 size={14} className="text-terra" /> Pan-India Safe Delivery
            </span>
          </div>
        </div>

        {/* Hero Visual Presentation */}
        <div className="lg:col-span-5 relative h-[460px] sm:h-[540px] flex items-center justify-center [perspective:1200px]">
          <motion.div
            style={{
              y: yImg,
              rotateX: rx,
              rotateY: ry,
              transformStyle: 'preserve-3d',
            }}
            className="relative w-[85%] h-[90%] rounded-t-[999px] rounded-b-3xl overflow-hidden shadow-2xl shadow-moss/20 ring-1 ring-line bg-warm"
          >
            <img
              src={HERO_MAIN}
              alt="Monstera plant in ceramic planter"
              className="w-full h-full object-cover scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-transparent to-transparent" />
            <div className="absolute bottom-6 inset-x-6 text-cream">
              <p className="font-devanagari text-lg text-terra">सातत्यम्</p>
              <p className="font-serif text-xl sm:text-2xl mt-0.5">Enduring Botanical Curation</p>
            </div>
          </motion.div>

          {/* Floating Brand Medallion Badge */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.5, type: 'spring' }}
            className="absolute -bottom-2 -left-4 sm:left-0 z-20 bg-cream p-2 rounded-full shadow-2xl ring-2 ring-[#C86D51]/50 flex items-center justify-center animate-floaty"
          >
            <LogoBadge size="lg" className="shadow-inner" />
          </motion.div>

          {/* Secondary Floating Gift Card */}
          <div className="absolute top-8 -right-4 w-44 rounded-2xl overflow-hidden shadow-xl border-2 border-cream hidden sm:block">
            <img src={HERO_SECONDARY} alt="Gift wrapped plant set" className="w-full h-32 object-cover" />
            <div className="bg-creamcard p-2.5 text-center">
              <span className="font-mono text-[9px] uppercase tracking-widest text-terra block">Ready To Gift</span>
              <span className="font-serif text-xs text-ink">Bespoke Kraft Wrap</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function PillarsSection() {
  return (
    <section className="py-20 sm:py-28 max-w-7xl mx-auto px-5 sm:px-8">
      <Reveal className="flex flex-wrap items-end justify-between gap-6 mb-12">
        <div>
          <Overline>Our Services & Offerings</Overline>
          <h2 className="font-serif font-light text-3xl sm:text-4xl lg:text-5xl text-ink mt-3 tracking-tight">
            How We Bring Nature Into Your Space
          </h2>
        </div>
        <a
          href={waLink('Hello Roots by सातत्यम्! I would like to consult with you about plants for my space/event.')}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.2em] text-moss border-b border-moss/40 pb-1 hover:border-moss transition-colors"
        >
          Consult on WhatsApp <ArrowUpRight size={14} />
        </a>
      </Reveal>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {CURATION_PILLARS.map((pillar, i) => (
          <Reveal key={pillar.title} delay={i * 0.08}>
            <div className="bg-creamcard border border-line rounded-3xl overflow-hidden hover:border-linehover transition-all flex flex-col sm:flex-row h-full">
              <div className="sm:w-2/5 aspect-[4/3] sm:aspect-auto overflow-hidden bg-warm shrink-0">
                <img
                  src={pillar.image}
                  alt={pillar.title}
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-serif text-2xl text-ink leading-snug">
                    {pillar.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-inkbody leading-relaxed mt-3">
                    {pillar.desc}
                  </p>
                </div>
                <div className="mt-6 pt-5 border-t border-line/70">
                  <a
                    href={waLink(pillar.waText)}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 text-[#1B3B2B] hover:text-terra font-mono text-[10px] uppercase tracking-[0.2em] font-medium transition-colors"
                  >
                    <MessageCircle size={14} className="text-[#25D366]" /> {pillar.action} <ArrowRight size={12} />
                  </a>
                </div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function Philosophy() {
  return (
    <section className="bg-warm/60 border-y border-line my-12">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 py-20 sm:py-28 grid lg:grid-cols-2 gap-14 items-center">
        <Reveal>
          <div className="flex items-center gap-3 mb-4">
            <LogoBadge size="sm" />
            <Overline>The सातत्यम् Ethos</Overline>
          </div>
          <h2 className="font-serif font-light text-3xl sm:text-4xl lg:text-5xl text-ink leading-[1.1] tracking-tight">
            <span className="font-devanagari text-terra">सातत्यम्</span> — Sanskrit for <em className="italic">enduring continuity</em>.
          </h2>
          <p className="text-inkbody leading-relaxed mt-6 max-w-lg font-light">
            In ancient philosophy, <em>सातत्यम्</em> embodies that which continues steadily without cessation. Our signature handcrafted wooden medallion, framed by copper, reflects this spirit.
          </p>
          <p className="text-inkbody leading-relaxed mt-4 max-w-lg font-light">
            A plant is not a disposable gift; it is a living commitment. It purifies the air, softens sterile office desks, and silently reminds your partners and staff of your enduring partnership every morning.
          </p>

          <div className="mt-8 flex items-center gap-4">
            <a
              href={waLink('Hello Roots by सातत्यम्! I would like to know more about your philosophy and gifting.')}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 bg-moss text-cream font-mono text-[11px] uppercase tracking-[0.2em] px-7 py-3.5 rounded-full hover:bg-mosshover transition-colors"
            >
              Connect with Founder <ArrowRight size={13} />
            </a>
          </div>
        </Reveal>

        <div>
          {VALUES.map((v, i) => (
            <Reveal key={v.k} delay={i * 0.07}>
              <div className="py-6 border-b border-line first:pt-0 last:pb-0 flex gap-6">
                <span className="font-mono text-xs text-terra pt-1 shrink-0">
                  0{i + 1}
                </span>
                <div>
                  <h3 className="font-serif text-xl text-ink">{v.k}</h3>
                  <p className="text-sm text-inkbody mt-1.5 leading-relaxed font-light">
                    {v.v}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function DirectWhatsAppSalesBanner() {
  return (
    <section className="max-w-7xl mx-auto px-5 sm:px-8 py-20">
      <Reveal>
        <div className="bg-[#1B3B2B] text-cream rounded-3xl p-8 sm:p-16 relative overflow-hidden grain shadow-xl">
          <div className="max-w-3xl mx-auto text-center relative z-10">
            <div className="flex justify-center mb-6">
              <LogoBadge size="lg" className="ring-2 ring-[#C86D51]/70 shadow-2xl" />
            </div>
            <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-sage">
              Direct Botanical Concierge · WhatsApp Sales
            </p>
            <h2 className="font-serif font-light text-4xl sm:text-5xl lg:text-6xl text-cream mt-4 leading-tight tracking-tight">
              Order directly via WhatsApp with our{' '}
              <em className="italic text-terra">plant experts</em>.
            </h2>
            <p className="text-cream/80 text-base sm:text-lg mt-6 max-w-xl mx-auto font-light leading-relaxed">
              No generic checkout carts. Tell us what you envision — whether 50 corporate executive sets with your logo, or desk greenery for your new workspace — and we’ll prepare live photos and customized proposals instantly.
            </p>

            <div className="mt-10 flex flex-wrap justify-center items-center gap-4">
              <a
                href={waLink('Hello Roots by सातत्यम्! I would like to place an order or discuss custom curation.')}
                target="_blank"
                rel="noreferrer"
                data-testid="banner-whatsapp-cta"
                className="inline-flex items-center gap-2.5 bg-[#25D366] hover:bg-[#1EBE5D] text-white font-mono text-xs uppercase tracking-[0.2em] px-8 py-4 rounded-full shadow-lg shadow-[#25D366]/30 transition-all font-semibold"
              >
                <MessageCircle size={18} /> Chat on WhatsApp ({WHATSAPP_DISPLAY})
              </a>

              <a
                href="#corporate-gifting"
                className="inline-flex items-center gap-2 border border-cream/30 text-cream font-mono text-xs uppercase tracking-[0.2em] px-8 py-4 rounded-full hover:bg-cream/10 transition-colors"
              >
                Corporate Quote Estimator
              </a>
            </div>

            <p className="font-mono text-[10px] text-cream/50 tracking-[0.2em] uppercase mt-8">
              Available 7 Days A Week · Jaipur Studio & Pan-India Deliveries
            </p>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

function InstagramStrip() {
  return (
    <section className="max-w-7xl mx-auto px-5 sm:px-8 pb-20">
      <Reveal className="flex flex-wrap items-end justify-between gap-4 mb-8">
        <div>
          <Overline>Social Proof & Botanical Life</Overline>
          <h2 className="font-serif font-light text-3xl sm:text-4xl text-ink mt-3 tracking-tight">
            Follow Our Green Journey
          </h2>
        </div>
        <a
          href={INSTAGRAM_URL}
          target="_blank"
          rel="noreferrer"
          data-testid="instagram-follow-link"
          className="group inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.2em] text-moss border-b border-moss/30 pb-1 hover:border-moss transition-colors"
        >
          Follow {INSTAGRAM_HANDLE}
          <ArrowUpRight
            size={14}
            className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          />
        </a>
      </Reveal>

      <div className="grid grid-cols-3 sm:grid-cols-6 gap-2 sm:gap-3">
        {IG_SHOTS.map((src, i) => (
          <Reveal key={src} delay={i * 0.05}>
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noreferrer"
              data-testid={`instagram-tile-${i}`}
              className="group relative block overflow-hidden rounded-xl aspect-square bg-warm"
            >
              <img
                src={src}
                alt="Roots by सातत्यम् Instagram moment"
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <span className="absolute inset-0 bg-moss/0 group-hover:bg-moss/40 transition-colors flex items-center justify-center">
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#FBF9F5"
                  strokeWidth="1.8"
                  className="opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  <rect x="3" y="3" width="18" height="18" rx="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.2" cy="6.8" r="0.9" fill="#FBF9F5" stroke="none" />
                </svg>
              </span>
            </a>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <>
      <Hero />
      <Marquee />
      <CorporateGifting />
      <PillarsSection />
      <Philosophy />
      <DirectWhatsAppSalesBanner />
      <InstagramStrip />
    </>
  );
}
