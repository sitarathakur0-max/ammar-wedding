import React, { useState } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { BUSINESS_INFO, NAV_ITEMS } from '../constants/business';
import { PageId } from '../types';

interface HeaderProps {
  currentPage: PageId;
  onNavigate: (page: PageId) => void;
  onOpenEnquiry: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentPage,
  onNavigate,
  onOpenEnquiry,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleLinkClick = (pageId: PageId) => {
    onNavigate(pageId);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-[#080B10]/95 backdrop-blur-md border-b border-[#D4AF37]/20 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 gap-8">
          {/* Zone 1: Brand Wordmark & Official Emblem */}
          <button
            onClick={() => handleLinkClick('home')}
            className="flex items-center gap-3.5 text-left group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37] rounded-lg p-1 transition-opacity"
            aria-label="Ammar Wedding & Special Tours Car Rental - Home"
          >
            <img
              src={BUSINESS_INFO.logoPath}
              alt="Ammar Wedding & Special Tours Emblem Logo"
              className="w-12 h-12 object-contain rounded-full border border-[#D4AF37]/40 shadow-sm transition-transform duration-300 group-hover:scale-105"
              referrerPolicy="no-referrer"
            />
            <div className="flex flex-col">
              <span className="font-brand-display text-base sm:text-lg font-bold tracking-wider text-[#F8F5ED] uppercase whitespace-nowrap">
                AMMAR
              </span>
              <span className="text-[10px] sm:text-[11px] tracking-widest text-[#D4AF37] uppercase whitespace-nowrap font-medium">
                Wedding & Special Tours
              </span>
            </div>
          </button>

          {/* Zone 2: Navigation Links (Single-Line, 4-5 links) */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-medium tracking-wide">
            {NAV_ITEMS.map((item) => {
              const isActive = currentPage === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleLinkClick(item.id)}
                  className={`relative py-1 whitespace-nowrap transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37] rounded ${
                    isActive
                      ? 'text-[#D4AF37] font-semibold'
                      : 'text-[#A9ADB5] hover:text-[#F8F5ED]'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#D4AF37] rounded-full" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Zone 3: 1 Primary CTA Action */}
          <div className="hidden lg:flex items-center gap-4 shrink-0">
            <button
              onClick={onOpenEnquiry}
              className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold tracking-wider uppercase text-[#080B10] bg-gradient-to-r from-[#D4AF37] via-[#F3E5AB] to-[#C59B27] rounded-md hover:brightness-110 active:scale-95 transition-all shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#D4AF37] whitespace-nowrap"
            >
              <span>Enquire About a Booking</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile Menu Hamburger */}
          <div className="flex lg:hidden items-center gap-3">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#F8F5ED] hover:text-[#D4AF37] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37] rounded-md transition-colors"
              aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-[#D4AF37]/20 bg-[#080B10]/98 px-6 pt-5 pb-8 space-y-4 shadow-2xl animate-in fade-in slide-in-from-top-2 duration-200">
          <div className="flex flex-col space-y-3">
            {NAV_ITEMS.map((item) => {
              const isActive = currentPage === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleLinkClick(item.id)}
                  className={`text-left text-base font-medium py-2 px-3 rounded-md transition-colors ${
                    isActive
                      ? 'bg-[#101A2B] text-[#D4AF37] font-semibold border-l-2 border-[#D4AF37]'
                      : 'text-[#A9ADB5] hover:text-[#F8F5ED] hover:bg-[#101A2B]/50'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </div>

          <div className="pt-4 border-t border-[#D4AF37]/20 flex flex-col gap-3">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenEnquiry();
              }}
              className="w-full inline-flex items-center justify-center gap-2 py-3 text-xs font-semibold tracking-wider uppercase text-[#080B10] bg-gradient-to-r from-[#D4AF37] via-[#F3E5AB] to-[#C59B27] rounded-md hover:brightness-110 active:scale-95 transition-all shadow-md"
            >
              <span>Enquire About a Booking</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>

            <a
              href={BUSINESS_INFO.phoneTel}
              className="text-center text-xs text-[#A9ADB5] hover:text-[#D4AF37] py-1 transition-colors"
            >
              Call direct: {BUSINESS_INFO.phone}
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
