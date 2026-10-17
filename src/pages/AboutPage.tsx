import React from 'react';
import { ShieldCheck, MessageCircle, Phone, MapPin, CheckCircle2, Clock, Calendar, ArrowRight } from 'lucide-react';
import { BUSINESS_INFO } from '../constants/business';
import { PageId } from '../types';

interface AboutPageProps {
  onNavigate: (page: PageId) => void;
  onOpenEnquiry: (defaultOccasion?: string) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate, onOpenEnquiry }) => {
  return (
    <div className="py-12 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
      {/* Header section with Logo */}
      <section className="text-center max-w-3xl mx-auto space-y-6">
        <div className="inline-block p-2 rounded-full border border-[#D4AF37]/40 bg-[#101A2B]/60 shadow-xl mb-2">
          <img
            src={BUSINESS_INFO.logoPath}
            alt="Ammar Wedding & Special Tours Emblem"
            className="w-24 h-24 sm:w-28 sm:h-28 object-contain rounded-full"
            referrerPolicy="no-referrer"
          />
        </div>

        <p className="text-xs font-semibold uppercase tracking-widest text-[#D4AF37]">
          About Our Service
        </p>

        <h1 className="font-serif-luxury text-4xl sm:text-5xl font-bold text-[#F8F5ED] leading-tight text-balance">
          Ammar Wedding & Special Tours Car Rental
        </h1>

        <p className="text-base sm:text-lg text-[#A9ADB5] leading-relaxed text-pretty">
          Providing specialized car rental and travel transportation coordination for clients in Dera Ghazi Khan and surrounding regions.
        </p>
      </section>

      {/* Narrative grid */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7 space-y-6 text-[#A9ADB5] leading-relaxed text-sm sm:text-base">
          <h2 className="font-serif-luxury text-2xl sm:text-3xl font-bold text-[#F8F5ED]">
            Our Identity & Purpose
          </h2>

          <p>
            Ammar Wedding & Special Tours is a localized car rental agency established to meet the transportation needs of private clients, celebrating families, and travelers departing from Dera Ghazi Khan.
          </p>

          <p>
            We focus on two key areas of service: helping families arrange dignified, punctual transportation for wedding celebrations and milestone events, and assisting travelers who require well-coordinated car rental for personal and long-distance journeys.
          </p>

          <p>
            We believe in honest, direct customer service. Rather than navigating generic automated systems, our clients converse directly with our team to discuss dates, vehicle styles, schedules, and pricing.
          </p>

          <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs text-[#F8F5ED]">
            <div className="p-4 rounded bg-[#0A0E17] border border-[#D4AF37]/20 flex items-start gap-3">
              <CheckCircle2 className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
              <div>
                <strong className="block text-[#D4AF37] mb-0.5">Weddings & Celebrations</strong>
                Dedicated vehicle scheduling for Barat, Walima, and family occasions.
              </div>
            </div>

            <div className="p-4 rounded bg-[#0A0E17] border border-[#D4AF37]/20 flex items-start gap-3">
              <CheckCircle2 className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
              <div>
                <strong className="block text-[#D4AF37] mb-0.5">Tours & Road Journeys</strong>
                Route discussions and personalized vehicle matching for travel itineraries.
              </div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-5">
          <div className="rounded-xl border border-[#D4AF37]/30 bg-[#0A0E17] p-8 space-y-6 shadow-xl">
            <h3 className="font-serif-luxury text-xl font-bold text-[#F8F5ED] border-b border-[#D4AF37]/20 pb-3">
              Business Registry & Location
            </h3>

            <div className="space-y-4 text-xs text-[#A9ADB5]">
              <div>
                <span className="text-[#D4AF37] font-semibold block uppercase tracking-wider mb-1">
                  Registered Business Name
                </span>
                <span className="text-[#F8F5ED] text-sm font-medium">
                  {BUSINESS_INFO.name}
                </span>
              </div>

              <div>
                <span className="text-[#D4AF37] font-semibold block uppercase tracking-wider mb-1">
                  Category
                </span>
                <span className="text-[#F8F5ED] text-sm">
                  {BUSINESS_INFO.category}
                </span>
              </div>

              <div>
                <span className="text-[#D4AF37] font-semibold block uppercase tracking-wider mb-1">
                  Headquarters & Base
                </span>
                <span className="text-[#F8F5ED] text-sm leading-snug">
                  {BUSINESS_INFO.address}
                </span>
              </div>

              <div>
                <span className="text-[#D4AF37] font-semibold block uppercase tracking-wider mb-1">
                  Direct Inquiries
                </span>
                <span className="text-[#F8F5ED] text-sm font-semibold">
                  {BUSINESS_INFO.phone} (Phone & WhatsApp)
                </span>
              </div>
            </div>

            <div className="pt-2">
              <a
                href={BUSINESS_INFO.whatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-3 text-xs font-semibold tracking-wider uppercase text-[#080B10] bg-[#D4AF37] hover:bg-[#E9D9A7] rounded transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Contact Via WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Clear booking communication process */}
      <section className="rounded-2xl border border-[#D4AF37]/20 bg-[#101A2B]/40 p-8 sm:p-12 space-y-8">
        <div className="max-w-2xl space-y-3">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#D4AF37]">
            How We Operate
          </p>
          <h2 className="font-serif-luxury text-2xl sm:text-3xl font-bold text-[#F8F5ED]">
            Direct, Transparent Communication
          </h2>
          <p className="text-sm text-[#A9ADB5]">
            We keep our booking process straightforward and centered around direct contact with the business owner:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs text-[#A9ADB5]">
          <div className="p-5 rounded-lg bg-[#080B10] border border-[#D4AF37]/15 space-y-2">
            <span className="text-[#D4AF37] font-bold font-serif-luxury text-base">Step 1</span>
            <h4 className="font-serif-luxury text-sm font-semibold text-[#F8F5ED]">
              Initial Conversation
            </h4>
            <p>
              Message or call us with your travel dates, occasion type, passenger numbers, and vehicle style preference.
            </p>
          </div>

          <div className="p-5 rounded-lg bg-[#080B10] border border-[#D4AF37]/15 space-y-2">
            <span className="text-[#D4AF37] font-bold font-serif-luxury text-base">Step 2</span>
            <h4 className="font-serif-luxury text-sm font-semibold text-[#F8F5ED]">
              Quote & Availability
            </h4>
            <p>
              We confirm whether a suitable vehicle is open for your requested schedule and provide clear, upfront rental terms.
            </p>
          </div>

          <div className="p-5 rounded-lg bg-[#080B10] border border-[#D4AF37]/15 space-y-2">
            <span className="text-[#D4AF37] font-bold font-serif-luxury text-base">Step 3</span>
            <h4 className="font-serif-luxury text-sm font-semibold text-[#F8F5ED]">
              Confirmed Reservation
            </h4>
            <p>
              Your booking is finalized with an agreed schedule once mutually confirmed, ensuring dependable timing on your travel day.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Box */}
      <section className="text-center py-8 space-y-6 border-t border-[#D4AF37]/20">
        <h3 className="font-serif-luxury text-2xl sm:text-3xl font-bold text-[#F8F5ED]">
          Have an upcoming occasion in Dera Ghazi Khan?
        </h3>
        <p className="text-sm text-[#A9ADB5] max-w-xl mx-auto">
          Contact Ammar Wedding & Special Tours today to discuss your travel timetable and vehicle availability.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <a
            href={BUSINESS_INFO.whatsAppUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-7 py-3 text-xs font-semibold tracking-wider uppercase text-[#080B10] bg-gradient-to-r from-[#D4AF37] via-[#F3E5AB] to-[#C59B27] rounded hover:brightness-110 transition-all shadow-md"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Enquire on WhatsApp</span>
          </a>
          <button
            onClick={() => onNavigate('wedding')}
            className="px-6 py-3 text-xs font-medium uppercase tracking-wider text-[#F8F5ED] hover:text-[#D4AF37] border border-[#D4AF37]/30 rounded transition-colors"
          >
            Wedding Transportation Guide
          </button>
        </div>
      </section>
    </div>
  );
};
