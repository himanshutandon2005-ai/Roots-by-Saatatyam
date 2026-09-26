import { motion } from 'framer-motion';
import { waLink, WHATSAPP_DISPLAY } from '../lib/config';

export default function WhatsAppFab() {
  return (
    <motion.a
      initial={{ opacity: 0, scale: 0.6 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.8, type: 'spring', stiffness: 200, damping: 18 }}
      href={waLink('Hello Roots by सातत्यम्! I would like to enquire about your corporate gifting & plant collection.')}
      target="_blank"
      rel="noreferrer"
      data-testid="whatsapp-fab"
      aria-label="Order or Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-3 bg-[#25D366] hover:bg-[#1EBE5D] text-white p-3.5 pr-5 rounded-full shadow-2xl shadow-[#25D366]/40 hover:scale-105 transition-all group"
    >
      <div className="relative">
        <svg width="26" height="26" viewBox="0 0 24 24" fill="#fff">
          <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38a9.9 9.9 0 0 0 4.79 1.22h.01c5.46 0 9.9-4.45 9.9-9.91 0-2.65-1.03-5.14-2.9-7.01A9.83 9.83 0 0 0 12.04 2Zm5.8 14.06c-.25.69-1.45 1.32-2 1.36-.55.06-1.05.25-3.53-.74-2.99-1.18-4.86-4.25-5.01-4.45-.15-.2-1.19-1.59-1.19-3.03 0-1.44.75-2.15 1.02-2.44.27-.3.59-.37.79-.37h.57c.18 0 .43-.07.67.51.25.6.84 2.06.92 2.21.07.15.12.32.02.52-.1.2-.15.32-.3.5-.15.17-.31.39-.45.52-.15.15-.3.31-.13.6.17.3.76 1.25 1.63 2.03 1.12 1 2.06 1.31 2.36 1.46.3.15.47.12.65-.08.17-.2.75-.87.94-1.17.2-.3.4-.25.67-.15.27.1 1.72.81 2.02.96.3.15.5.22.57.35.07.12.07.72-.18 1.41Z" />
        </svg>
        <span className="absolute -top-1 -right-1 w-3 h-3 bg-white rounded-full animate-ping" />
      </div>
      <div className="flex flex-col text-left leading-tight hidden sm:flex">
        <span className="font-mono text-[9px] uppercase tracking-wider text-white/90">
          Order on WhatsApp
        </span>
        <span className="font-mono text-xs font-bold text-white tracking-tight">
          {WHATSAPP_DISPLAY}
        </span>
      </div>
    </motion.a>
  );
}
