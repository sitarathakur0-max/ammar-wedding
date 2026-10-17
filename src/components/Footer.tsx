import React from 'react';
import { Phone, MessageCircle, MapPin, ArrowRight } from 'lucide-react';
import { BUSINESS_INFO, NAV_ITEMS } from '../constants/business';
import { PageId } from '../types';

interface FooterProps {
  onNavigate: (page: PageId) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const currentYear = new Date().getFullYear();

  const handleLinkClick = (pageId: PageId) => {
    onNavigate(pageId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#05070A] border-t border-[#D4AF37]/25 text-[#A9ADB5] pt-16 pb-12 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-14 border-b border-[#D4AF37]/15">
          {/* Brand & Emblem */}
          <div className="lg:col-span-5 space-y-5">
            <div className="flex items-center gap-4">
              <img
                src={BUSINESS_INFO.logoPath}
                alt="Ammar Wedding & Special Tours Logo"
                className="w-16 h-16 object-contain rounded-full border border-[#D4AF37]/40 shadow-md"
                referrerPolicy="no-referrer"
              />
              <div>
                <h3 className="font-brand-display text-lg font-bold tracking-wider text-[#F8F5ED] uppercase">
                  AMMAR
                </h3>
                <p className="text-xs tracking-widest text-[#D4AF37] uppercase font-medium">
                  Wedding & Special Tours · Rent A Car Services
                </p>
              </div>
            </div>

            <p className="text-sm leading-relaxed text-[#A9ADB5] max-w-md">
              Ammar Wedding & Special Tours is a premier car rental agency serving clients from Dera Ghazi Khan.
              We assist customers in coordinating vehicles for wedding celebrations, family milestones, and planned personal journeys.
            </p>

            <div className="pt-2">
              <a
                href={BUSINESS_INFO.whatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-4 py-2 text-xs font-semibold tracking-wider uppercase text-[#080B10] bg-gradient-to-r from-[#D4AF37] to-[#E9D9A7] rounded hover:brightness-110 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37]"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>Message on WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-semibold uppercase tracking-widest text-[#D4AF37]">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-sm">
              {NAV_ITEMS.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => handleLinkClick(item.id)}
                    className="flex items-center gap-2 text-[#A9ADB5] hover:text-[#F8F5ED] hover:translate-x-1 transition-all focus:outline-none focus-visible:ring-1 focus-visible:ring-[#D4AF37]"
                  >
                    <ArrowRight className="w-3 h-3 text-[#D4AF37]/70" />
                    <span>{item.label}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Direct Contact & Location */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="text-xs font-semibold uppercase tracking-widest text-[#D4AF37]">
              Location & Contact
            </h4>
            <ul className="space-y-3.5 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                <span className="text-[#F8F5ED]/90 leading-snug">
                  {BUSINESS_INFO.address}
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#D4AF37] shrink-0" />
                <a
                  href={BUSINESS_INFO.phoneTel}
                  className="text-[#F8F5ED]/90 hover:text-[#D4AF37] transition-colors"
                >
                  {BUSINESS_INFO.phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <MessageCircle className="w-4 h-4 text-[#D4AF37] shrink-0" />
                <a
                  href={BUSINESS_INFO.whatsAppUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#F8F5ED]/90 hover:text-[#D4AF37] transition-colors"
                >
                  WhatsApp: +92 318 0838667
                </a>
              </li>
            </ul>

            <div className="pt-2 p-3 bg-[#101A2B]/70 border border-[#D4AF37]/20 rounded text-xs text-[#A9ADB5] leading-relaxed">
              <span className="text-[#D4AF37] font-semibold block mb-0.5">Booking Availability:</span>
              Vehicle availability and rental pricing are confirmed upon direct enquiry with the business owner.
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#A9ADB5]/80 gap-4">
          <p>
            © {currentYear} {BUSINESS_INFO.name}. All rights reserved.
          </p>
          <p className="flex items-center gap-2">
            <span>Dera Ghazi Khan, Punjab, Pakistan</span>
            <span aria-hidden="true">·</span>
            <span>Postal Code 32200</span>
          </p>
        </div>
      </div>
    </footer>
  );
};
