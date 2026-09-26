const ITEMS = [
  'Roots by सातत्यम् — Nature Curated',
  'Corporate Botanical Gifting & Executive Suites',
  'Custom Laser-Engraved Wooden Medallions',
  'Direct Orders & Consultations on WhatsApp',
  'Handcrafted Ceramic & Terracotta Planters',
  'Zero-Waste Eco-Positive Living Gifts',
  'Lifetime WhatsApp Horticultural Support',
];

const Strip = ({ hidden = false }: { hidden?: boolean }) => (
  <div aria-hidden={hidden} className="flex shrink-0 items-center">
    {ITEMS.map((item, i) => (
      <span key={i} className="flex items-center">
        <span className="font-serif italic text-lg sm:text-xl text-moss/80 px-8 whitespace-nowrap">
          {item}
        </span>
        <svg width="14" height="14" viewBox="0 0 14 14" className="shrink-0">
          <circle cx="7" cy="7" r="3.5" fill="#C86D51" />
        </svg>
      </span>
    ))}
  </div>
);

export default function Marquee() {
  return (
    <div
      className="relative overflow-hidden border-y border-line bg-warm/80 py-4.5"
      data-testid="editorial-marquee"
    >
      <div className="flex w-max animate-marquee">
        <Strip />
        <Strip hidden />
      </div>
    </div>
  );
}
