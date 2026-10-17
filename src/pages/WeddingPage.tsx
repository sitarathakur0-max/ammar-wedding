import React, { useState } from 'react';
import {
  Sparkles,
  MessageCircle,
  Calendar,
  Clock,
  MapPin,
  Car,
  ChevronDown,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Heart,
} from 'lucide-react';
import { BUSINESS_INFO, WEDDING_FAQS } from '../constants/business';
import { PageId } from '../types';

interface WeddingPageProps {
  onNavigate: (page: PageId) => void;
  onOpenEnquiry: (defaultOccasion?: string) => void;
}

export const WeddingPage: React.FC<WeddingPageProps> = ({ onNavigate, onOpenEnquiry }) => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const weddingWhatsAppUrl = `https://wa.me/${BUSINESS_INFO.whatsAppDigits}?text=${encodeURIComponent(
    'Hello Ammar Wedding & Special Tours, I would like to enquire about wedding car rental availability in Dera Ghazi Khan.'
  )}`;

  return (
    <div className="py-12 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
      {/* Hero Section */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7 space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#101A2B]/80 border border-[#D4AF37]/30 text-xs font-medium text-[#E9D9A7]">
            <Heart className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>Dedicated Wedding Transportation</span>
          </div>

          <h1 className="font-serif-luxury text-4xl sm:text-5xl lg:text-6xl font-bold text-[#F8F5ED] leading-tight text-balance">
            Wedding Car Rental in Dera Ghazi Khan
          </h1>

          <p className="text-base sm:text-lg text-[#A9ADB5] leading-relaxed text-pretty">
            Coordinate graceful, dependable wedding transportation for your most cherished celebration. Discuss your wedding dates, schedule, and vehicle preferences directly with Ammar Wedding & Special Tours.
          </p>

          <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <a
              href={weddingWhatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 text-xs font-semibold tracking-wider uppercase text-[#080B10] bg-gradient-to-r from-[#D4AF37] via-[#F3E5AB] to-[#C59B27] rounded hover:brightness-110 active:scale-95 transition-all shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37]"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Enquire for Wedding on WhatsApp</span>
            </a>

            <button
              onClick={() => onOpenEnquiry('Wedding Transport')}
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-xs font-medium tracking-wider uppercase text-[#F8F5ED] hover:text-[#D4AF37] border border-[#D4AF37]/30 hover:border-[#D4AF37] rounded transition-colors"
            >
              <span>Fill Booking Request</span>
            </button>
          </div>
        </div>

        <div className="lg:col-span-5">
          <div className="relative rounded-2xl overflow-hidden border border-[#D4AF37]/30 shadow-2xl bg-[#0A0E17]">
            <img
              src="/wedding_car_editorial.jpg"
              alt="Luxury wedding car presentation"
              className="w-full h-80 sm:h-96 object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#080B10] via-black/30 to-transparent" />
            <div className="absolute bottom-5 left-5 right-5 p-4 rounded bg-[#080B10]/90 backdrop-blur-sm border border-[#D4AF37]/25 text-xs text-[#A9ADB5]">
              <span className="text-[#D4AF37] font-semibold block mb-0.5">Wedding Coordination:</span>
              Contact us in advance with your date and venue to verify vehicle availability in DG Khan.
            </div>
          </div>
        </div>
      </section>

      {/* Wedding Coordination Explanation */}
      <section className="rounded-2xl border border-[#D4AF37]/25 bg-[#0A0E17] p-8 sm:p-12 space-y-6">
        <div className="max-w-3xl space-y-4">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#D4AF37]">
            Planning & Logistics
          </p>
          <h2 className="font-serif-luxury text-2xl sm:text-3xl font-bold text-[#F8F5ED]">
            Thoughtful Coordination for Your Special Day
          </h2>
          <p className="text-sm sm:text-base text-[#A9ADB5] leading-relaxed">
            Weddings in Dera Ghazi Khan often involve tight itineraries between family homes, photography sessions, marriage halls, and reception venues. Arranging your car rental ahead of time ensures that timings are respected and your family experiences seamless travel throughout each ceremony.
          </p>
          <p className="text-sm text-[#A9ADB5] leading-relaxed">
            Whether you require a car dedicated for the bride and groom, family transit for the Barat procession, or transport for the Walima reception, discussing your exact itinerary with us allows us to advise on the most suitable vehicle availability.
          </p>
        </div>
      </section>

      {/* Details Customers Should Share */}
      <section className="space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#D4AF37]">
            Enquiry Checklist
          </p>
          <h2 className="font-serif-luxury text-3xl font-bold text-[#F8F5ED]">
            Information to Share When Enquiring
          </h2>
          <p className="text-sm text-[#A9ADB5]">
            To help us provide an accurate quotation and verify availability, please prepare the following details:
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="p-6 rounded-xl bg-[#0A0E17] border border-[#D4AF37]/20 space-y-3">
            <div className="w-10 h-10 rounded-lg bg-[#101A2B] border border-[#D4AF37]/30 flex items-center justify-center text-[#D4AF37]">
              <Calendar className="w-5 h-5" />
            </div>
            <h3 className="font-serif-luxury text-base font-bold text-[#F8F5ED]">
              1. Wedding Date
            </h3>
            <p className="text-xs text-[#A9ADB5] leading-relaxed">
              Confirm your planned ceremony or reception date. If booking for multi-day festivities (Barat and Walima), please specify all dates.
            </p>
          </div>

          <div className="p-6 rounded-xl bg-[#0A0E17] border border-[#D4AF37]/20 space-y-3">
            <div className="w-10 h-10 rounded-lg bg-[#101A2B] border border-[#D4AF37]/30 flex items-center justify-center text-[#D4AF37]">
              <MapPin className="w-5 h-5" />
            </div>
            <h3 className="font-serif-luxury text-base font-bold text-[#F8F5ED]">
              2. Venue & Route
            </h3>
            <p className="text-xs text-[#A9ADB5] leading-relaxed">
              Provide pickup address in Dera Ghazi Khan, photography stops if planned, and final wedding hall or destination venue details.
            </p>
          </div>

          <div className="p-6 rounded-xl bg-[#0A0E17] border border-[#D4AF37]/20 space-y-3">
            <div className="w-10 h-10 rounded-lg bg-[#101A2B] border border-[#D4AF37]/30 flex items-center justify-center text-[#D4AF37]">
              <Clock className="w-5 h-5" />
            </div>
            <h3 className="font-serif-luxury text-base font-bold text-[#F8F5ED]">
              3. Required Pickup Time
            </h3>
            <p className="text-xs text-[#A9ADB5] leading-relaxed">
              State the exact time the vehicle should arrive at the initial pickup location to prevent rushing or event delays.
            </p>
          </div>

          <div className="p-6 rounded-xl bg-[#0A0E17] border border-[#D4AF37]/20 space-y-3">
            <div className="w-10 h-10 rounded-lg bg-[#101A2B] border border-[#D4AF37]/30 flex items-center justify-center text-[#D4AF37]">
              <Car className="w-5 h-5" />
            </div>
            <h3 className="font-serif-luxury text-base font-bold text-[#F8F5ED]">
              4. Desired Vehicle Type
            </h3>
            <p className="text-xs text-[#A9ADB5] leading-relaxed">
              Mention your preference for vehicle category (e.g. executive sedan, spacious family vehicle) to match your occasion's tone.
            </p>
          </div>

          <div className="p-6 rounded-xl bg-[#0A0E17] border border-[#D4AF37]/20 space-y-3 sm:col-span-2 lg:col-span-2">
            <div className="w-10 h-10 rounded-lg bg-[#101A2B] border border-[#D4AF37]/30 flex items-center justify-center text-[#D4AF37]">
              <Clock className="w-5 h-5" />
            </div>
            <h3 className="font-serif-luxury text-base font-bold text-[#F8F5ED]">
              5. Expected Rental Duration
            </h3>
            <p className="text-xs text-[#A9ADB5] leading-relaxed">
              Indicate whether you require the car for a 4-hour window, full-day event, or evening function to receive an accurate, customized rental quote.
            </p>
          </div>
        </div>
      </section>

      {/* Wedding FAQs */}
      <section className="max-w-3xl mx-auto space-y-6">
        <div className="text-center space-y-3">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#D4AF37]">
            Common Inquiries
          </p>
          <h2 className="font-serif-luxury text-2xl sm:text-3xl font-bold text-[#F8F5ED]">
            Wedding Car Rental FAQs
          </h2>
        </div>

        <div className="space-y-3">
          {WEDDING_FAQS.map((faq, index) => {
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

      {/* Wedding WhatsApp CTA */}
      <section className="text-center rounded-2xl border border-[#D4AF37]/30 bg-gradient-to-b from-[#101A2B] to-[#080B10] p-8 sm:p-12 space-y-6">
        <h3 className="font-serif-luxury text-2xl sm:text-3xl font-bold text-[#F8F5ED]">
          Ready to Discuss Your Wedding Transportation?
        </h3>
        <p className="text-sm text-[#A9ADB5] max-w-xl mx-auto">
          Send us your wedding date and venue details on WhatsApp. We will discuss current vehicle availability and rental rates directly with you.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <a
            href={weddingWhatsAppUrl}
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
            Go to Contact Form
          </button>
        </div>
      </section>
    </div>
  );
};
