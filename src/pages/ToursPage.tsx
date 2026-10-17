import React, { useState } from 'react';
import {
  Compass,
  MessageCircle,
  MapPin,
  Calendar,
  Users,
  Clock,
  ChevronDown,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  FileText,
} from 'lucide-react';
import { BUSINESS_INFO, TOURS_FAQS } from '../constants/business';
import { PageId } from '../types';

interface ToursPageProps {
  onNavigate: (page: PageId) => void;
  onOpenEnquiry: (defaultOccasion?: string) => void;
}

export const ToursPage: React.FC<ToursPageProps> = ({ onNavigate, onOpenEnquiry }) => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const toursWhatsAppUrl = `https://wa.me/${BUSINESS_INFO.whatsAppDigits}?text=${encodeURIComponent(
    'Hello Ammar Wedding & Special Tours, I would like to discuss a travel plan and check car rental options departing from Dera Ghazi Khan.'
  )}`;

  return (
    <div className="py-12 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
      {/* Hero Section */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7 space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#101A2B]/80 border border-[#D4AF37]/30 text-xs font-medium text-[#E9D9A7]">
            <Compass className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>Planned Travel & Journeys</span>
          </div>

          <h1 className="font-serif-luxury text-4xl sm:text-5xl lg:text-6xl font-bold text-[#F8F5ED] leading-tight text-balance">
            Car Rental & Special Tours
          </h1>

          <p className="text-base sm:text-lg text-[#A9ADB5] leading-relaxed text-pretty">
            Plan your upcoming journey with Ammar Wedding & Special Tours. Discuss your departure schedule, destination, passenger group size, and vehicle preferences directly with our local Dera Ghazi Khan agency.
          </p>

          <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <a
              href={toursWhatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 text-xs font-semibold tracking-wider uppercase text-[#080B10] bg-gradient-to-r from-[#D4AF37] via-[#F3E5AB] to-[#C59B27] rounded hover:brightness-110 active:scale-95 transition-all shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37]"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Discuss Travel Plan on WhatsApp</span>
            </a>

            <button
              onClick={() => onOpenEnquiry('Tour & Planned Journey')}
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-xs font-medium tracking-wider uppercase text-[#F8F5ED] hover:text-[#D4AF37] border border-[#D4AF37]/30 hover:border-[#D4AF37] rounded transition-colors"
            >
              <span>Booking Request Form</span>
            </button>
          </div>
        </div>

        <div className="lg:col-span-5">
          <div className="relative rounded-2xl overflow-hidden border border-[#D4AF37]/30 shadow-2xl bg-[#0A0E17]">
            <img
              src="/scenic_tour_editorial.jpg"
              alt="Road travel presentation"
              className="w-full h-80 sm:h-96 object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#080B10] via-black/30 to-transparent" />
            <div className="absolute bottom-5 left-5 right-5 p-4 rounded bg-[#080B10]/90 backdrop-blur-sm border border-[#D4AF37]/25 text-xs text-[#A9ADB5]">
              <span className="text-[#D4AF37] font-semibold block mb-0.5">Custom Travel Consultation:</span>
              Share your travel timetable with us to confirm vehicle options and distance-based quotations.
            </div>
          </div>
        </div>
      </section>

      {/* Service Introduction */}
      <section className="rounded-2xl border border-[#D4AF37]/25 bg-[#0A0E17] p-8 sm:p-12 space-y-6">
        <div className="max-w-3xl space-y-4">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#D4AF37]">
            Tailored Journey Planning
          </p>
          <h2 className="font-serif-luxury text-2xl sm:text-3xl font-bold text-[#F8F5ED]">
            Thoughtful Travel Scheduling From Dera Ghazi Khan
          </h2>
          <p className="text-sm sm:text-base text-[#A9ADB5] leading-relaxed">
            Planning a private excursion, family road trip, or scheduled journey requires vehicle reliability, transparent terms, and clear timing. We consult with you regarding your departure point in DG Khan, route requirements, and intended stops.
          </p>
          <p className="text-sm text-[#A9ADB5] leading-relaxed">
            Vehicle availability and rental pricing vary according to the travel route, total distance, required days, and passenger seating. Contact us directly to review the vehicles available for your specific itinerary.
          </p>
        </div>
      </section>

      {/* Travel Planning Checklist */}
      <section className="space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#D4AF37]">
            Travel-Planning Checklist
          </p>
          <h2 className="font-serif-luxury text-3xl font-bold text-[#F8F5ED]">
            Information to Share for Tour Enquiries
          </h2>
          <p className="text-sm text-[#A9ADB5]">
            Having these trip parameters ready enables us to assist you quickly:
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-6 rounded-xl bg-[#0A0E17] border border-[#D4AF37]/20 space-y-3">
            <div className="w-10 h-10 rounded-lg bg-[#101A2B] border border-[#D4AF37]/30 flex items-center justify-center text-[#D4AF37]">
              <MapPin className="w-5 h-5" />
            </div>
            <h3 className="font-serif-luxury text-base font-bold text-[#F8F5ED]">
              Starting Point & Route
            </h3>
            <p className="text-xs text-[#A9ADB5] leading-relaxed">
              Your exact pickup address in Dera Ghazi Khan and target destination or intermediate stops.
            </p>
          </div>

          <div className="p-6 rounded-xl bg-[#0A0E17] border border-[#D4AF37]/20 space-y-3">
            <div className="w-10 h-10 rounded-lg bg-[#101A2B] border border-[#D4AF37]/30 flex items-center justify-center text-[#D4AF37]">
              <Calendar className="w-5 h-5" />
            </div>
            <h3 className="font-serif-luxury text-base font-bold text-[#F8F5ED]">
              Dates & Duration
            </h3>
            <p className="text-xs text-[#A9ADB5] leading-relaxed">
              Planned departure date and expected return date, including any single-day or multi-day itinerary.
            </p>
          </div>

          <div className="p-6 rounded-xl bg-[#0A0E17] border border-[#D4AF37]/20 space-y-3">
            <div className="w-10 h-10 rounded-lg bg-[#101A2B] border border-[#D4AF37]/30 flex items-center justify-center text-[#D4AF37]">
              <Users className="w-5 h-5" />
            </div>
            <h3 className="font-serif-luxury text-base font-bold text-[#F8F5ED]">
              Passenger Capacity
            </h3>
            <p className="text-xs text-[#A9ADB5] leading-relaxed">
              Number of travelers and estimated luggage volume to ensure passenger comfort.
            </p>
          </div>

          <div className="p-6 rounded-xl bg-[#0A0E17] border border-[#D4AF37]/20 space-y-3">
            <div className="w-10 h-10 rounded-lg bg-[#101A2B] border border-[#D4AF37]/30 flex items-center justify-center text-[#D4AF37]">
              <Clock className="w-5 h-5" />
            </div>
            <h3 className="font-serif-luxury text-base font-bold text-[#F8F5ED]">
              Schedule Flexibility
            </h3>
            <p className="text-xs text-[#A9ADB5] leading-relaxed">
              Any required pickup hours, early morning departure preferences, or return schedules.
            </p>
          </div>
        </div>
      </section>

      {/* Booking Confirmation Process */}
      <section className="rounded-2xl border border-[#D4AF37]/25 bg-gradient-to-br from-[#101A2B]/40 to-[#0A0E17] p-8 sm:p-12 space-y-6">
        <h3 className="font-serif-luxury text-2xl font-bold text-[#F8F5ED]">
          Booking Confirmation Process
        </h3>
        <div className="space-y-4 text-xs sm:text-sm text-[#A9ADB5] leading-relaxed max-w-3xl">
          <p>
            1. <strong className="text-[#F8F5ED]">Enquiry:</strong> You contact us via WhatsApp (+92 318 0838667) or telephone call with your travel details.
          </p>
          <p>
            2. <strong className="text-[#F8F5ED]">Consultation & Quote:</strong> We evaluate vehicle availability matching your dates and provide a direct rental quotation based on your route.
          </p>
          <p>
            3. <strong className="text-[#F8F5ED]">Confirmation:</strong> Once the terms and dates are mutually accepted, your booking is confirmed by the business owner.
          </p>
        </div>
      </section>

      {/* FAQs */}
      <section className="max-w-3xl mx-auto space-y-6">
        <div className="text-center space-y-3">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#D4AF37]">
            Answers for Travelers
          </p>
          <h2 className="font-serif-luxury text-2xl sm:text-3xl font-bold text-[#F8F5ED]">
            Tours & Travel FAQs
          </h2>
        </div>

        <div className="space-y-3">
          {TOURS_FAQS.map((faq, index) => {
            const isOpen = openFaqIndex === index;
            return (
              <div
                key={index}
                className="rounded-lg border border-[#D4AF37]/20 bg-[#0A0E17] overflow-hidden"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full text-left px-5 py-4 flex items-center justify-between gap-4 focus:outline-none focus-visible:ring-1 focus-visible:ring-[#D4AF37]"
                >
                  <span className="font-serif-luxury text-sm font-semibold text-[#F8F5ED]">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 text-[#D4AF37] shrink-0 transition-transform ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-5 pb-4 text-xs text-[#A9ADB5] leading-relaxed border-t border-[#D4AF37]/10 pt-3">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="text-center rounded-2xl border border-[#D4AF37]/30 bg-gradient-to-b from-[#101A2B] to-[#080B10] p-8 sm:p-12 space-y-6">
        <h3 className="font-serif-luxury text-2xl sm:text-3xl font-bold text-[#F8F5ED]">
          Discuss Your Travel Requirements
        </h3>
        <p className="text-sm text-[#A9ADB5] max-w-xl mx-auto">
          Contact Ammar Wedding & Special Tours to discuss your planned journey, vehicle options, and rental terms.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <a
            href={toursWhatsAppUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3.5 text-xs font-semibold tracking-wider uppercase text-[#080B10] bg-gradient-to-r from-[#D4AF37] via-[#F3E5AB] to-[#C59B27] rounded hover:brightness-110 transition-all shadow-lg"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Chat on WhatsApp (+92 318 0838667)</span>
          </a>
          <button
            onClick={() => onNavigate('contact')}
            className="px-6 py-3.5 text-xs font-medium uppercase tracking-wider text-[#F8F5ED] hover:text-[#D4AF37] border border-[#D4AF37]/30 rounded transition-colors"
          >
            Contact Page
          </button>
        </div>
      </section>
    </div>
  );
};
