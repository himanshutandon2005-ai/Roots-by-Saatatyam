import { Reveal, Overline } from '../components/Reveal';
import { LogoBadge } from '../components/Logo';
import { waLink, WHATSAPP_DISPLAY } from '../lib/config';
import { MessageCircle, ArrowRight, Sun, Droplets, Wind, Sparkles } from 'lucide-react';

const SPECIMENS = [
  {
    name: 'Peace Lily (Spathiphyllum)',
    quality: 'White sculptural spathes, air-purifying, indicates watering need gently.',
    light: 'Medium to bright indirect',
    vessel: 'Artisanal off-white ribbed ceramic',
    image: 'https://images.unsplash.com/photo-1646297670075-f2097a5281e7?q=80&w=900&auto=format&fit=crop',
    use: 'Executive desks, quiet corners, reception salons',
  },
  {
    name: 'Monstera Deliciosa (Swiss Cheese)',
    quality: 'Iconic fenestrated split leaves, tropical grandeur, architectural silhouette.',
    light: 'Bright indirect',
    vessel: 'Floor-standing handcrafted ceramic cylinder',
    image: 'https://images.unsplash.com/photo-1614594975525-e45190c55d0b?q=80&w=900&auto=format&fit=crop',
    use: 'Conference halls, lounge corners, statement foyer pieces',
  },
  {
    name: 'ZZ Plant (Zamioculcas Zamiifolia)',
    quality: 'Waxen deep-emerald foliage, thrives in low light, virtually indestructible.',
    light: 'Low to medium indirect',
    vessel: 'Warm speckled stone ceramic',
    image: 'https://images.unsplash.com/photo-1552248524-10d9a7e4841c?q=80&w=900&auto=format&fit=crop',
    use: 'Commercial office desks, corridors, shaded balconies',
  },
  {
    name: 'Adenium (Desert Rose)',
    quality: 'Sculptural caudex bonsai form with brilliant pink trumpet blooms.',
    light: 'Full direct sunlight',
    vessel: 'Terracotta shallow bowl with drainage dish',
    image: 'https://static.prod-images.emergentagent.com/jobs/7d43d52a-b8cf-43ae-80b8-7084912e3d35/images/2b5a7b2e24d427b89f574d49433ab0be220a324443641ee3d21956b5728ea172.jpeg',
    use: 'Sun-drenched terraces, balconies, outdoor entryways',
  },
  {
    name: 'Haworthia Zebra & Succulent Clusters',
    quality: 'Compact architectural ridges, minimal water requirements, shelf-ready.',
    light: 'Bright windowsill',
    vessel: 'Handmade miniature matte pot with wooden base',
    image: 'https://images.unsplash.com/photo-1621274220348-41dc235ff439?q=80&w=900&auto=format&fit=crop',
    use: 'Workstations, bookshelf ledges, corporate gifts',
  },
  {
    name: 'Golden Pothos (Money Plant)',
    quality: 'Graceful trailing vines, rapid growth, forgiving and lush.',
    light: 'Low to bright indirect',
    vessel: 'Glazed hanging or pedestal planter',
    image: 'https://images.unsplash.com/photo-1786541380430-e669b8d523e8?q=80&w=900&auto=format&fit=crop',
    use: 'High shelving, partition dividers, green walls',
  },
];

export default function Curation() {
  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <Reveal className="max-w-3xl">
          <div className="flex items-center gap-3 mb-3">
            <LogoBadge size="sm" />
            <Overline>Roots by सातत्यम् · Botanical Curation</Overline>
          </div>
          <h1 className="font-serif font-light text-4xl sm:text-5xl lg:text-6xl text-ink leading-[1.05] tracking-tight">
            Curated greens, paired with{' '}
            <em className="italic text-terra">tasteful vessels</em>.
          </h1>
          <p className="text-inkbody text-base sm:text-lg mt-5 leading-relaxed font-light">
            We don't sell random plants in plastic nursery pots. Every specimen at Roots by सातत्यम् is selected for root vigor and architectural beauty, then hand-potted in premium ceramic or terracotta planters with nutrient-balanced organic potting mix.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href={waLink('Hello Roots by सातत्यम्! I would like botanical advice and recommendations for my space on WhatsApp.')}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1EBE5D] text-white font-mono text-[11px] uppercase tracking-[0.2em] px-7 py-3.5 rounded-full font-semibold shadow-md shadow-[#25D366]/20 transition-all"
            >
              <MessageCircle size={16} /> Request Custom Recommendations on WhatsApp
            </a>
          </div>
        </Reveal>

        {/* Specimen Showcase Grid */}
        <div className="mt-20">
          <div className="flex items-center justify-between mb-8 pb-4 border-b border-line">
            <h2 className="font-serif text-3xl text-ink">Signature Curated Varieties</h2>
            <span className="font-mono text-xs text-inkmuted">All orders handled direct on WhatsApp</span>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SPECIMENS.map((specimen, idx) => (
              <Reveal key={specimen.name} delay={idx * 0.07}>
                <div className="bg-creamcard border border-line rounded-3xl overflow-hidden hover:border-linehover transition-all flex flex-col h-full group">
                  <div className="relative aspect-[4/3] overflow-hidden bg-warm">
                    <img
                      src={specimen.image}
                      alt={specimen.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-5">
                      <span className="text-cream text-xs font-mono">Tap below to enquire on WhatsApp</span>
                    </div>
                  </div>

                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="font-serif text-2xl text-ink leading-snug">
                        {specimen.name}
                      </h3>
                      <p className="text-xs text-inkbody leading-relaxed mt-2.5">
                        {specimen.quality}
                      </p>

                      <div className="mt-4 pt-4 border-t border-line/70 space-y-1.5 text-xs text-inkmuted font-mono">
                        <p><span className="text-ink font-sans font-medium">Light:</span> {specimen.light}</p>
                        <p><span className="text-ink font-sans font-medium">Pot:</span> {specimen.vessel}</p>
                        <p><span className="text-ink font-sans font-medium">Ideal:</span> {specimen.use}</p>
                      </div>
                    </div>

                    <div className="mt-6 pt-4 border-t border-line">
                      <a
                        href={waLink(
                          `Hello Roots by सातत्यम्! I am interested in ordering or enquiring about the ${specimen.name}. Is it available?`
                        )}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center justify-center w-full gap-2 bg-moss text-cream font-mono text-[10px] uppercase tracking-[0.2em] py-3 rounded-full hover:bg-mosshover transition-colors"
                      >
                        <MessageCircle size={14} className="text-[#25D366]" /> Order / Enquire on WhatsApp
                      </a>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Consulting workflow */}
        <section className="mt-24 bg-warm/60 border border-line rounded-3xl p-8 sm:p-14">
          <div className="max-w-2xl">
            <Overline>Our Consulting Process</Overline>
            <h2 className="font-serif font-light text-3xl sm:text-4xl text-ink mt-3">
              How WhatsApp Direct Ordering Works
            </h2>
            <div className="mt-8 space-y-6">
              {[
                {
                  step: '01',
                  title: 'Send us photos of your space or gifting brief',
                  desc: 'Snap a picture of your desk, living room corner, or share your corporate headcount and budget on WhatsApp.',
                },
                {
                  step: '02',
                  title: 'Receive live studio photos & curated proposals',
                  desc: 'We send you pictures of the exact healthy specimens in our studio, paired with different artisanal ceramic planters.',
                },
                {
                  step: '03',
                  title: 'Confirm & receive doorstep delivery with care notes',
                  desc: 'No confusing web payments. Confirm on chat, pay securely, and receive doorstep delivery across Jaipur and nationwide shipping for bulk gifting.',
                },
              ].map((item) => (
                <div key={item.step} className="flex gap-4">
                  <span className="font-mono text-sm text-terra font-semibold shrink-0 pt-0.5">{item.step}.</span>
                  <div>
                    <h4 className="font-serif text-lg text-ink">{item.title}</h4>
                    <p className="text-xs sm:text-sm text-inkbody mt-1 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10">
              <a
                href={waLink('Hello Roots by सातत्यम्! I would like to start a plant consultation on WhatsApp.')}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1EBE5D] text-white font-mono text-xs uppercase tracking-[0.2em] px-8 py-4 rounded-full font-semibold shadow-lg shadow-[#25D366]/20 transition-all"
              >
                <MessageCircle size={16} /> Start WhatsApp Consultation ({WHATSAPP_DISPLAY})
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
