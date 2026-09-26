import { useState, ChangeEvent, FormEvent } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { toast } from 'sonner';
import { ChevronDown, MessageCircle, Phone, MapPin, Send, CheckCircle2 } from 'lucide-react';
import { createEnquiry } from '../lib/api';
import { waLink, WHATSAPP_DISPLAY } from '../lib/config';
import { Reveal, Overline } from '../components/Reveal';
import { LogoBadge } from '../components/Logo';

const INTERESTS = [
  'Corporate Gifting (Bulk / Employee / Clients)',
  'Custom Wooden Medallions & Logo Etching',
  'Office & Commercial Plant Styling',
  'Handcrafted Ceramic Planters',
  'Balcony & Home Greenery',
  'Other Bespoke Enquiry',
];

const FAQS = [
  {
    q: 'How are sales and orders processed?',
    a: 'All sales, consultations, and custom inquiries are handled directly on WhatsApp. This allows us to share live photographs of available plant specimens, show sample mockups with your corporate logo, and coordinate seamless delivery without impersonal checkout carts.',
  },
  {
    q: 'Can you engrave our company logo on the wooden medallions?',
    a: 'Yes! We craft custom laser-engraved circular wooden seals and copper plaques with your company insignia, employee names, or event titles — just like our signature Roots by सातत्यम् medallion.',
  },
  {
    q: 'What is the minimum order quantity for corporate gifting?',
    a: 'We accommodate orders starting from 25 units up to 2,000+ units. We also provide single customized sample pieces so your leadership team can inspect the quality beforehand.',
  },
  {
    q: 'Do you deliver outside Jaipur?',
    a: 'Yes. While our primary design studio is located in Jaipur, we dispatch carefully packaged living corporate gift hampers and event tokens to corporate offices and individual addresses across India.',
  },
  {
    q: 'Do recipients get plant care support after receiving the gift?',
    a: 'Absolutely. Every gift includes a QR-linked care guide, and recipients are welcome to message our botanical WhatsApp helpline anytime for free lifetime advice.',
  },
];

function Faq() {
  const [open, setOpen] = useState(0);

  return (
    <div className="divide-y divide-line border-y border-line">
      {FAQS.map((f, i) => (
        <div key={i} data-testid={`faq-item-${i}`}>
          <button
            type="button"
            onClick={() => setOpen(open === i ? -1 : i)}
            data-testid={`faq-toggle-${i}`}
            className="w-full flex items-center justify-between gap-6 py-5 text-left cursor-pointer"
          >
            <span className="font-serif text-lg sm:text-xl text-ink">
              {f.q}
            </span>
            <ChevronDown
              size={17}
              className={`shrink-0 text-terra transition-transform duration-300 ${
                open === i ? 'rotate-180' : ''
              }`}
            />
          </button>
          <AnimatePresence initial={false}>
            {open === i && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <p className="pb-5 text-sm text-inkbody leading-relaxed max-w-2xl font-light">
                  {f.a}
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
}

export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    interest: INTERESTS[0],
    message: '',
  });
  const [sent, setSent] = useState(false);
  const [busy, setBusy] = useState(false);

  const update = (k: keyof typeof form) => (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => setForm((f) => ({ ...f, [k]: e.target.value }));

  const submit = async (e: FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.phone.trim()) {
      toast.error('Please share your name and phone number.');
      return;
    }
    setBusy(true);
    try {
      await createEnquiry(form);
      setSent(true);
      toast.success("Enquiry noted! Redirecting to WhatsApp...");
      
      // Also open WhatsApp directly
      const waMsg = `Hello Roots by सातत्यम्! I am ${form.name}. Interested in: ${form.interest}. Notes: ${form.message || 'Please provide details.'}`;
      window.open(waLink(waMsg), '_blank');
    } catch {
      toast.error('Opening WhatsApp directly...');
    } finally {
      setBusy(false);
    }
  };

  const field =
    'w-full bg-creamcard border border-line rounded-xl px-4 py-3.5 text-sm text-ink placeholder:text-inkmuted focus:outline-none focus:border-moss/50';

  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <Reveal className="max-w-2xl">
          <div className="flex items-center gap-3 mb-3">
            <LogoBadge size="sm" />
            <Overline>Connect with सातत्यम्</Overline>
          </div>
          <h1 className="font-serif font-light text-4xl sm:text-5xl lg:text-6xl text-ink mt-3 tracking-tight leading-[1.05]">
            Direct Botanical <em className="italic text-terra">Concierge</em>.
          </h1>
          <p className="text-inkbody text-base sm:text-lg mt-4 leading-relaxed font-light">
            All orders, custom corporate proposals, and horticultural consultations are coordinated directly with our team on WhatsApp for fast, personalized service.
          </p>
        </Reveal>

        <div className="grid lg:grid-cols-12 gap-10 mt-14">
          {/* Main Direct Form */}
          <div className="lg:col-span-7">
            <AnimatePresence mode="wait">
              {sent ? (
                <motion.div
                  key="ok"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-sagelight border border-sage/40 rounded-3xl p-10 text-center shadow-sm"
                  data-testid="enquiry-success-card"
                >
                  <div className="w-14 h-14 bg-moss text-cream rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 size={26} />
                  </div>
                  <p className="font-serif text-3xl text-moss">
                    Thank you, {form.name.split(' ')[0]}.
                  </p>
                  <p className="text-sm text-inkbody mt-3 max-w-md mx-auto">
                    Your request has been initiated. Continue directly on WhatsApp to chat live with our botanical lead.
                  </p>
                  <div className="mt-8 flex flex-wrap justify-center gap-3">
                    <a
                      href={waLink(
                        `Hello Roots by सातत्यम्! I'm ${form.name}. ${form.interest}: ${form.message}`
                      )}
                      target="_blank"
                      rel="noreferrer"
                      data-testid="enquiry-success-whatsapp"
                      className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1EBE5D] text-white font-mono text-[11px] uppercase tracking-[0.18em] px-7 py-3.5 rounded-full font-semibold shadow-md shadow-[#25D366]/20 transition-all"
                    >
                      <MessageCircle size={16} /> Continue on WhatsApp
                    </a>
                    <button
                      type="button"
                      onClick={() => {
                        setSent(false);
                        setForm({
                          name: '',
                          phone: '',
                          interest: INTERESTS[0],
                          message: '',
                        });
                      }}
                      className="border border-moss/30 text-moss font-mono text-[11px] uppercase tracking-[0.18em] px-7 py-3.5 rounded-full hover:bg-cream transition-colors cursor-pointer"
                    >
                      Send Another Inquiry
                    </button>
                  </div>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  onSubmit={submit}
                  className="bg-creamcard border border-line rounded-3xl p-7 sm:p-10 space-y-5 shadow-xs"
                  data-testid="enquiry-form"
                >
                  <div className="border-b border-line pb-4 mb-2">
                    <h3 className="font-serif text-2xl text-ink">Inquire or Order</h3>
                    <p className="text-xs text-inkmuted font-mono mt-1">
                      Direct WhatsApp routing · Instant response
                    </p>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="font-mono text-[10px] uppercase tracking-[0.2em] text-inkmuted block mb-2">
                        Your Name / Organization
                      </label>
                      <input
                        value={form.name}
                        onChange={update('name')}
                        placeholder="e.g. Dr. Raghav Mehta"
                        data-testid="enquiry-name-input"
                        className={field}
                        required
                      />
                    </div>
                    <div>
                      <label className="font-mono text-[10px] uppercase tracking-[0.2em] text-inkmuted block mb-2">
                        Phone / WhatsApp Number
                      </label>
                      <input
                        value={form.phone}
                        onChange={update('phone')}
                        placeholder="+91 …"
                        data-testid="enquiry-phone-input"
                        className={field}
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="font-mono text-[10px] uppercase tracking-[0.2em] text-inkmuted block mb-2">
                      I Am Inquiring About
                    </label>
                    <select
                      value={form.interest}
                      onChange={update('interest')}
                      data-testid="enquiry-interest-select"
                      className={field}
                    >
                      {INTERESTS.map((i) => (
                        <option key={i}>{i}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="font-mono text-[10px] uppercase tracking-[0.2em] text-inkmuted block mb-2">
                      Requirement Details, Occasion or Headcount
                    </label>
                    <textarea
                      value={form.message}
                      onChange={update('message')}
                      rows={4}
                      placeholder="e.g. We require 120 client gift hampers for Diwali with our custom company logo engraved on the wooden seal..."
                      data-testid="enquiry-message-input"
                      className={`${field} resize-none`}
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={busy}
                    data-testid="enquiry-submit-button"
                    className="w-full flex justify-center items-center gap-2.5 bg-[#25D366] hover:bg-[#1EBE5D] text-white font-mono text-xs uppercase tracking-[0.2em] py-4 rounded-full transition-all shadow-md shadow-[#25D366]/20 disabled:opacity-60 cursor-pointer font-semibold"
                  >
                    <MessageCircle size={17} />
                    {busy ? 'Preparing WhatsApp...' : 'Submit & Open on WhatsApp'}
                  </button>
                </motion.form>
              )}
            </AnimatePresence>
          </div>

          {/* Right Direct WhatsApp Channels */}
          <div className="lg:col-span-5 space-y-5">
            <Reveal>
              <a
                href={waLink('Hello Roots by सातत्यम्! I would like to place an order or enquire about plants.')}
                target="_blank"
                rel="noreferrer"
                data-testid="contact-whatsapp-card"
                className="block bg-[#1B3B2B] text-cream rounded-3xl p-8 hover:bg-[#152F22] transition-colors relative overflow-hidden group shadow-lg"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-[#C86D51]">
                    Primary Sales Channel
                  </span>
                  <MessageCircle size={22} className="text-[#25D366]" />
                </div>
                <p className="font-serif text-3xl font-light">WhatsApp Us Directly</p>
                <p className="text-xl font-mono text-[#25D366] mt-2 font-medium">
                  {WHATSAPP_DISPLAY}
                </p>
                <p className="text-cream/70 text-xs sm:text-sm mt-3 leading-relaxed font-light">
                  Orders, corporate gifting catalogues, custom logo mockups, and plant care queries answered in real-time.
                </p>
                <div className="mt-6 inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.2em] text-cream bg-cream/10 px-4 py-2 rounded-full group-hover:bg-[#25D366] group-hover:text-white transition-all">
                  Chat Now →
                </div>
              </a>
            </Reveal>

            <Reveal delay={0.08}>
              <div className="bg-creamcard border border-line rounded-3xl p-8">
                <div className="flex items-center gap-3 mb-3">
                  <LogoBadge size="sm" />
                  <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-inkmuted">
                    Jaipur Studio
                  </p>
                </div>
                <h4 className="font-serif text-2xl text-ink">
                  Rooted in Jaipur, Delivered Pan-India
                </h4>
                <p className="text-xs sm:text-sm text-inkbody mt-3 leading-relaxed font-light">
                  Our plants are curated and conditioned in Jaipur. Studio visits and private corporate walkthroughs are available by appointment. For events across India, we arrange white-glove boxed logistics.
                </p>
              </div>
            </Reveal>
          </div>
        </div>

        <section className="mt-24">
          <Reveal className="mb-10">
            <Overline>Frequently Asked</Overline>
            <h2 className="font-serif font-light text-3xl sm:text-4xl lg:text-5xl text-ink mt-3 tracking-tight">
              Corporate Gifting & Ordering Questions
            </h2>
          </Reveal>
          <Faq />
        </section>
      </div>
    </div>
  );
}
