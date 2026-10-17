import React from 'react';
import { MessageCircle } from 'lucide-react';
import { BUSINESS_INFO } from '../constants/business';

export const FloatingWhatsApp: React.FC = () => {
  return (
    <aside
      aria-label="WhatsApp quick contact"
      className="fixed left-5 sm:left-6 bottom-5 sm:bottom-6 z-50 pointer-events-auto"
    >
      <a
        href={BUSINESS_INFO.whatsAppUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Enquire with Ammar Wedding & Special Tours on WhatsApp"
        className="group relative flex items-center justify-center w-14 h-14 bg-[#25D366] hover:bg-[#20ba5a] text-white rounded-full shadow-[0_4px_20px_rgba(37,211,102,0.4)] border-2 border-white/20 transition-all duration-300 hover:scale-110 active:scale-95 focus:outline-none focus-visible:ring-4 focus-visible:ring-[#25D366]/50 focus-visible:ring-offset-2 focus-visible:ring-offset-[#080B10]"
      >
        <MessageCircle className="w-7 h-7 fill-white stroke-none" />

        {/* Accessible tooltip on hover / focus */}
        <span
          role="tooltip"
          className="absolute left-16 top-1/2 -translate-y-1/2 px-3 py-1.5 bg-[#080B10]/95 border border-[#D4AF37]/40 text-[#F8F5ED] text-xs font-medium rounded-md shadow-xl whitespace-nowrap opacity-0 pointer-events-none group-hover:opacity-100 group-focus:opacity-100 transition-opacity duration-200"
        >
          Enquire on WhatsApp
        </span>
      </a>
    </aside>
  );
};
