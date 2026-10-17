import React, { useState } from 'react';
import {
  MessageCircle,
  Phone,
  Calendar,
  Clock,
  MapPin,
  ChevronDown,
  ArrowRight,
  ShieldCheck,
  Sparkles,
  Compass,
  CheckCircle2,
  ExternalLink,
} from 'lucide-react';
import { BUSINESS_INFO, GENERAL_FAQS } from '../constants/business';
import { PageId } from '../types';

interface HomePageProps {
  onNavigate: (page: PageId) => void;
  onOpenEnquiry: (defaultOccasion?: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate, onOpenEnquiry }) => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <div className="space-y-24 sm:space-y-32">
      {/* SECTION A: HERO */}
      <section className="relative min-h-[90vh] flex items-center justify-center pt-8 pb-16 overflow-hidden">
        {/* Subtle radial atmosphere */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(16,26,43,0.85),#080B10)] pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Column: Editorial Copy */}
            <div className="lg:col-span-7 space-y-7 text-left">
              {/* Location trust marker */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#101A2B]/80 border border-[#D4AF37]/30 text-xs font-medium text-[#E9D9A7]">
                <MapPin className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span>Dera Ghazi Khan, Pakistan</span>
              </div>

              {/* Main Headline */}
              <h1 className="font-serif-luxury text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#F8F5ED] leading-[1.12] text-balance">
                Make Every Journey Memorable
              </h1>

              {/* Supporting Headline */}
              <p className="text-lg sm:text-xl font-medium text-[#D4AF37] tracking-wide">
                Wedding Car Rental & Special Tours in Dera Ghazi Khan
              </p>

              {/* Supporting Copy */}
              <p className="text-base sm:text-lg text-[#A9ADB5] leading-relaxed max-w-2xl text-pretty">
                Whether you're planning wedding transportation, a special occasion, or a journey that deserves careful planning, contact Ammar Wedding & Special Tours to discuss your travel requirements and available vehicle options.
              </p>

              {/* Primary & Secondary Actions */}
              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <a
                  href={`https://wa.me/${BUSINESS_INFO.whatsAppDigits}?text=${encodeURIComponent(
                    'Hello Ammar Wedding & Special Tours, I would like to enquire about car rental options in Dera Ghazi Khan.'
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 text-xs font-semibold tracking-wider uppercase text-[#080B10] bg-gradient-to-r from-[#D4AF37] via-[#F3E5AB] to-[#C59B27] rounded hover:brightness-110 active:scale-95 transition-all shadow-[0_4px_25px_rgba(212,175,55,0.25)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37]"
                >
                  <MessageCircle className="w-4 h-4 fill-[#080B10]" />
                  <span>Enquire on WhatsApp</span>
                </a>

                <button
                  onClick={() => {
                    const servicesEl = document.getElementById('services-section');
                    if (servicesEl) {
                      servicesEl.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-xs font-medium tracking-wider uppercase text-[#F8F5ED] hover:text-[#D4AF37] border border-[#D4AF37]/30 hover:border-[#D4AF37] bg-[#101A2B]/40 hover:bg-[#101A2B] rounded transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37]"
                >
                  <span>Explore Our Services</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

              {/* Direct call pill */}
              <div className="pt-2 flex items-center gap-3 text-xs text-[#A9ADB5]">
                <Phone className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span>Direct telephone bookings:</span>
                <a
                  href={BUSINESS_INFO.phoneTel}
                  className="text-[#F8F5ED] font-semibold hover:text-[#D4AF37] transition-colors"
                >
                  {BUSINESS_INFO.phone}
                </a>
              </div>
            </div>

            {/* Right Column: Hero Visual Asset & Official Emblem */}
            <div className="lg:col-span-5 relative flex flex-col items-center">
              <div className="relative w-full max-w-md lg:max-w-none group">
                {/* Decorative gold backdrop glow */}
                <div className="absolute -inset-1.5 bg-gradient-to-tr from-[#D4AF37]/20 via-transparent to-[#101A2B] rounded-2xl blur-lg opacity-70 group-hover:opacity-90 transition-opacity" />

                <div className="relative overflow-hidden rounded-xl border border-[#D4AF37]/30 bg-[#0A0E17] shadow-2xl">
                  <img
                    src="/wedding_car_editorial.jpg"
                    alt="Luxury wedding chauffeur car conceptual presentation"
                    className="w-full h-80 object-cover object-center transition-transform duration-700 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  
                  {/* Subtle contrast scrim */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#080B10] via-black/40 to-transparent" />

                  {/* Logo overlay seal in top right */}
                  <div className="absolute top-4 right-4 bg-[#080B10]/90 backdrop-blur-md p-1.5 rounded-full border border-[#D4AF37]/40 shadow-xl">
                    <img
                      src={BUSINESS_INFO.logoPath}
                      alt="Ammar Emblem"
                      className="w-14 h-14 object-contain rounded-full"
                      referrerPolicy="no-referrer"
                    />
                  </div>

                  {/* Bottom caption */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="p-3 rounded bg-[#080B10]/85 backdrop-blur-sm border border-[#D4AF37]/25 text-xs text-[#A9ADB5]">
                      <span className="font-semibold text-[#D4AF37] block">Ammar Chauffeur & Tour Advisory:</span>
                      Discuss your wedding date or route directly with us to check available vehicles in Dera Ghazi Khan.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION B: BRAND INTRODUCTION */}
      <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-[#D4AF37]/25 bg-gradient-to-br from-[#101A2B]/60 via-[#0A0E17] to-[#080B10] p-8 sm:p-12 lg:p-16">
          <div className="max-w-3xl space-y-6">
            <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#D4AF37] font-semibold">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Ammar Wedding & Special Tours Car Rental</span>
            </div>

            <h2 className="font-serif-luxury text-3xl sm:text-4xl font-bold text-[#F8F5ED] leading-tight">
              Travel With Style and Purpose
            </h2>

            <p className="text-base sm:text-lg text-[#A9ADB5] leading-relaxed">
              Ammar Wedding & Special Tours is a dedicated local car rental agency based in Dera Ghazi Khan. We believe that critical milestones—from joyous wedding ceremonies to meaningful family reunions and long-distance personal journeys—deserve attentive coordination and respectful service.
            </p>

            <p className="text-sm sm:text-base text-[#A9ADB5] leading-relaxed">
              Rather than standard car transactions, we facilitate transparent discussions regarding your schedule, route, and passenger preferences. By contacting us in advance, you can coordinate suitable transport arrangements that align with the dignity of your occasion.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-6 text-xs text-[#E9D9A7]">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#D4AF37]" />
                Direct Owner Communication
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#D4AF37]" />
                Dera Ghazi Khan Local Base
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#D4AF37]" />
                Advance Schedule Coordination
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION C: OUR SERVICES */}
      <section id="services-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#D4AF37]">
            Core Specializations
          </p>
          <h2 className="font-serif-luxury text-3xl sm:text-4xl font-bold text-[#F8F5ED]">
            Our Transportation Services
          </h2>
          <p className="text-sm sm:text-base text-[#A9ADB5]">
            Explore the three primary transportation requirements we accommodate for clients in Dera Ghazi Khan.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Service 1: Wedding Car Rental */}
          <div className="group rounded-xl bg-[#0A0E17] border border-[#D4AF37]/25 p-8 flex flex-col justify-between hover:border-[#D4AF37]/60 transition-all duration-300 hover:-translate-y-1 shadow-lg">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-lg bg-[#101A2B] border border-[#D4AF37]/30 flex items-center justify-center text-[#D4AF37]">
                <Sparkles className="w-6 h-6" />
              </div>
              <h3 className="font-serif-luxury text-xl font-bold text-[#F8F5ED] group-hover:text-[#D4AF37] transition-colors">
                Wedding Car Rental
              </h3>
              <p className="text-sm text-[#A9ADB5] leading-relaxed">
                Arrange memorable transportation for wedding days, bride & groom arrivals, Barat processions, and Walima celebrations. Coordinate schedules and discuss vehicle styling preferences in advance with our team.
              </p>
            </div>

            <div className="pt-8 border-t border-[#D4AF37]/15 mt-8 flex flex-col gap-3">
              <button
                onClick={() => onOpenEnquiry('Wedding Transport')}
                className="w-full inline-flex items-center justify-center gap-2 py-2.5 text-xs font-semibold tracking-wider uppercase text-[#080B10] bg-[#D4AF37] hover:bg-[#E9D9A7] rounded transition-colors"
              >
                <span>Discuss Your Requirements</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={() => onNavigate('wedding')}
                className="text-center text-xs text-[#A9ADB5] hover:text-[#F8F5ED] py-1 transition-colors"
              >
                View Wedding Details & Checklist
              </button>
            </div>
          </div>

          {/* Service 2: Special Occasion Transport */}
          <div className="group rounded-xl bg-[#0A0E17] border border-[#D4AF37]/25 p-8 flex flex-col justify-between hover:border-[#D4AF37]/60 transition-all duration-300 hover:-translate-y-1 shadow-lg">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-lg bg-[#101A2B] border border-[#D4AF37]/30 flex items-center justify-center text-[#D4AF37]">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="font-serif-luxury text-xl font-bold text-[#F8F5ED] group-hover:text-[#D4AF37] transition-colors">
                Special Occasion Transport
              </h3>
              <p className="text-sm text-[#A9ADB5] leading-relaxed">
                Dedicated travel for festive family gatherings, VIP guest hosting, anniversaries, and ceremonial milestones. Communicate your timing requirements to ensure smooth arrivals without unnecessary stress.
              </p>
            </div>

            <div className="pt-8 border-t border-[#D4AF37]/15 mt-8 flex flex-col gap-3">
              <button
                onClick={() => onOpenEnquiry('Special Occasion / Family Event')}
                className="w-full inline-flex items-center justify-center gap-2 py-2.5 text-xs font-semibold tracking-wider uppercase text-[#080B10] bg-[#D4AF37] hover:bg-[#E9D9A7] rounded transition-colors"
              >
                <span>Discuss Your Requirements</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={() => onNavigate('contact')}
                className="text-center text-xs text-[#A9ADB5] hover:text-[#F8F5ED] py-1 transition-colors"
              >
                Contact & Booking Page
              </button>
            </div>
          </div>

          {/* Service 3: Car Rental & Tours */}
          <div className="group rounded-xl bg-[#0A0E17] border border-[#D4AF37]/25 p-8 flex flex-col justify-between hover:border-[#D4AF37]/60 transition-all duration-300 hover:-translate-y-1 shadow-lg">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-lg bg-[#101A2B] border border-[#D4AF37]/30 flex items-center justify-center text-[#D4AF37]">
                <Compass className="w-6 h-6" />
              </div>
              <h3 className="font-serif-luxury text-xl font-bold text-[#F8F5ED] group-hover:text-[#D4AF37] transition-colors">
                Car Rental & Tours
              </h3>
              <p className="text-sm text-[#A9ADB5] leading-relaxed">
                Discuss personal trip plans, planned destinations, travel dates, and vehicle availability. We review your route specifications to determine the most suitable vehicle options for your group.
              </p>
            </div>

            <div className="pt-8 border-t border-[#D4AF37]/15 mt-8 flex flex-col gap-3">
              <button
                onClick={() => onOpenEnquiry('Tour & Planned Journey')}
                className="w-full inline-flex items-center justify-center gap-2 py-2.5 text-xs font-semibold tracking-wider uppercase text-[#080B10] bg-[#D4AF37] hover:bg-[#E9D9A7] rounded transition-colors"
              >
                <span>Discuss Your Requirements</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={() => onNavigate('tours')}
                className="text-center text-xs text-[#A9ADB5] hover:text-[#F8F5ED] py-1 transition-colors"
              >
                View Tours & Travel Planning
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION D: THE BOOKING EXPERIENCE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-[#D4AF37]/20 bg-[#0A0E17] p-8 sm:p-12 lg:p-16">
          <div className="text-center max-w-2xl mx-auto space-y-3 mb-12">
            <p className="text-xs font-semibold uppercase tracking-widest text-[#D4AF37]">
              The Booking Experience
            </p>
            <h2 className="font-serif-luxury text-3xl sm:text-4xl font-bold text-[#F8F5ED]">
              Simple Planning. Clear Communication.
            </h2>
            <p className="text-sm text-[#A9ADB5]">
              Four practical steps to coordinate your vehicle requirements with complete peace of mind.
            </p>
          </div>

          {/* Desktop Horizontal Process, Mobile Vertical Timeline */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
            {/* Step 1 */}
            <div className="space-y-3 relative">
              <div className="w-10 h-10 rounded-full bg-[#101A2B] border border-[#D4AF37] flex items-center justify-center text-[#D4AF37] font-bold text-sm">
                01
              </div>
              <h3 className="font-serif-luxury text-base font-bold text-[#F8F5ED]">
                Share Requirements
              </h3>
              <p className="text-xs text-[#A9ADB5] leading-relaxed">
                Contact us via WhatsApp or call to share your occasion type, passenger requirements, and preferred vehicle style.
              </p>
            </div>

            {/* Step 2 */}
            <div className="space-y-3 relative">
              <div className="w-10 h-10 rounded-full bg-[#101A2B] border border-[#D4AF37] flex items-center justify-center text-[#D4AF37] font-bold text-sm">
                02
              </div>
              <h3 className="font-serif-luxury text-base font-bold text-[#F8F5ED]">
                Discuss Date & Route
              </h3>
              <p className="text-xs text-[#A9ADB5] leading-relaxed">
                Review your specific calendar dates, pickup location in DG Khan, destination venue, and expected hours.
              </p>
            </div>

            {/* Step 3 */}
            <div className="space-y-3 relative">
              <div className="w-10 h-10 rounded-full bg-[#101A2B] border border-[#D4AF37] flex items-center justify-center text-[#D4AF37] font-bold text-sm">
                03
              </div>
              <h3 className="font-serif-luxury text-base font-bold text-[#F8F5ED]">
                Confirm Availability & Terms
              </h3>
              <p className="text-xs text-[#A9ADB5] leading-relaxed">
                Confirm vehicle availability and the quoted rental terms directly with the business owner.
              </p>
            </div>

            {/* Step 4 */}
            <div className="space-y-3 relative">
              <div className="w-10 h-10 rounded-full bg-[#101A2B] border border-[#D4AF37] flex items-center justify-center text-[#D4AF37] font-bold text-sm">
                04
              </div>
              <h3 className="font-serif-luxury text-base font-bold text-[#F8F5ED]">
                Finalize Booking
              </h3>
              <p className="text-xs text-[#A9ADB5] leading-relaxed">
                Finalize your reservation schedule once direct confirmation is received from Ammar Wedding & Special Tours.
              </p>
            </div>
          </div>

          {/* Mandatory clarification notice */}
          <div className="mt-12 p-4 rounded-lg bg-[#101A2B]/80 border border-[#D4AF37]/30 text-xs text-[#E9D9A7] leading-relaxed flex items-center gap-3">
            <span className="font-bold text-[#D4AF37] shrink-0">Important Notice:</span>
            <span>
              A WhatsApp enquiry does not automatically guarantee a reservation. Your booking is officially finalized only once vehicle availability, rental pricing, and scheduling terms are mutually confirmed.
            </span>
          </div>
        </div>
      </section>

      {/* SECTION E: WEDDING TRANSPORTATION EDITORIAL */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <p className="text-xs font-semibold uppercase tracking-widest text-[#D4AF37]">
              Wedding Specialists
            </p>
            <h2 className="font-serif-luxury text-3xl sm:text-4xl font-bold text-[#F8F5ED] leading-tight">
              Arrive in Style on Your Special Day
            </h2>
            <p className="text-base text-[#A9ADB5] leading-relaxed">
              Your wedding day is one of life's defining celebrations. Coordinating transportation well in advance ensures that bride, groom, and immediate families travel in comfort and punctuality.
            </p>

            <div className="space-y-3 pt-2">
              <p className="text-xs font-semibold uppercase tracking-wider text-[#F8F5ED]">
                When enquiring, we invite you to discuss:
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#A9ADB5]">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />
                  Wedding Date & Event Timeline
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />
                  Pickup & Ceremony Venues
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />
                  Required Pickup Time
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />
                  Desired Vehicle Style
                </li>
                <li className="flex items-center gap-2 sm:col-span-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />
                  Expected Total Rental Duration
                </li>
              </ul>
            </div>

            <div className="pt-4 flex items-center gap-4">
              <button
                onClick={() => onOpenEnquiry('Wedding Transport')}
                className="inline-flex items-center gap-2 px-6 py-3 text-xs font-semibold tracking-wider uppercase text-[#080B10] bg-[#D4AF37] hover:bg-[#E9D9A7] rounded transition-colors"
              >
                <span>Discuss Wedding Vehicle</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={() => onNavigate('wedding')}
                className="text-xs text-[#A9ADB5] hover:text-[#D4AF37] transition-colors"
              >
                Read Wedding Guide →
              </button>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="relative rounded-xl overflow-hidden border border-[#D4AF37]/30 shadow-xl bg-[#0A0E17]">
              <img
                src="/wedding_car_editorial.jpg"
                alt="Wedding chauffeur service presentation"
                className="w-full h-80 sm:h-96 object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#080B10] via-black/30 to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 text-xs text-[#F8F5ED]/90 bg-[#080B10]/85 p-3.5 rounded border border-[#D4AF37]/20">
                <span className="text-[#D4AF37] font-semibold block mb-0.5">Advance Booking Advisable:</span>
                Peak marriage season in Dera Ghazi Khan requires early booking to ensure availability for your chosen date.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION F: TOURS AND TRAVEL PLANNING */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-[#D4AF37]/20 bg-gradient-to-br from-[#101A2B]/40 to-[#0A0E17] p-8 sm:p-12 lg:p-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-6 space-y-5">
              <p className="text-xs font-semibold uppercase tracking-widest text-[#D4AF37]">
                Journeys & Special Tours
              </p>
              <h2 className="font-serif-luxury text-3xl sm:text-4xl font-bold text-[#F8F5ED]">
                Plan Your Next Journey
              </h2>
              <p className="text-sm sm:text-base text-[#A9ADB5] leading-relaxed">
                Whether you have an upcoming family visit, an intercity engagement, or a pre-planned road route starting from Dera Ghazi Khan, you can discuss your travel schedule with Ammar Wedding & Special Tours.
              </p>
              <p className="text-sm text-[#A9ADB5] leading-relaxed">
                We review passenger group size, route conditions, luggage requirements, and departure timing so you can select the vehicle best matched to your journey.
              </p>
              <div className="pt-2">
                <button
                  onClick={() => onOpenEnquiry('Tour & Planned Journey')}
                  className="inline-flex items-center gap-2 px-6 py-3 text-xs font-semibold tracking-wider uppercase text-[#080B10] bg-[#D4AF37] hover:bg-[#E9D9A7] rounded transition-colors"
                >
                  <span>Discuss Your Travel Route</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="relative rounded-xl overflow-hidden border border-[#D4AF37]/25 shadow-lg bg-[#080B10]">
                <img
                  src="/scenic_tour_editorial.jpg"
                  alt="Scenic tour travel road journey presentation"
                  className="w-full h-72 sm:h-80 object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#080B10] via-black/25 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-xs text-[#F8F5ED]/90 bg-[#080B10]/85 p-3 rounded border border-[#D4AF37]/20">
                  <span className="text-[#D4AF37] font-semibold block mb-0.5">Route Consultation:</span>
                  Share your origin, destination, and travel timetable with us to confirm vehicle options and rates.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION G: WHY PLAN IN ADVANCE? */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-12">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#D4AF37]">
            Guidance & Best Practices
          </p>
          <h2 className="font-serif-luxury text-3xl sm:text-4xl font-bold text-[#F8F5ED]">
            Why Plan in Advance?
          </h2>
          <p className="text-sm text-[#A9ADB5]">
            Practical advice to ensure your transportation arrangements in Dera Ghazi Khan proceed effortlessly.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="p-6 rounded-xl bg-[#0A0E17] border border-[#D4AF37]/20 space-y-3">
            <div className="text-[#D4AF37] font-bold text-lg font-serif-luxury">01.</div>
            <h3 className="font-serif-luxury text-base font-semibold text-[#F8F5ED]">
              Confirm Vehicle Availability Early
            </h3>
            <p className="text-xs text-[#A9ADB5] leading-relaxed">
              Reserving early guarantees that a suitable car is dedicated to your schedule, especially during high-demand dates.
            </p>
          </div>

          <div className="p-6 rounded-xl bg-[#0A0E17] border border-[#D4AF37]/20 space-y-3">
            <div className="text-[#D4AF37] font-bold text-lg font-serif-luxury">02.</div>
            <h3 className="font-serif-luxury text-base font-semibold text-[#F8F5ED]">
              Share Accurate Dates & Venues
            </h3>
            <p className="text-xs text-[#A9ADB5] leading-relaxed">
              Providing exact pickup spots and destination halls enables clear routing and punctual timing.
            </p>
          </div>

          <div className="p-6 rounded-xl bg-[#0A0E17] border border-[#D4AF37]/20 space-y-3">
            <div className="text-[#D4AF37] font-bold text-lg font-serif-luxury">03.</div>
            <h3 className="font-serif-luxury text-base font-semibold text-[#F8F5ED]">
              Discuss Pickup Times & Duration
            </h3>
            <p className="text-xs text-[#A9ADB5] leading-relaxed">
              Establishing arrival times and total expected rental hours avoids delays during busy event schedules.
            </p>
          </div>

          <div className="p-6 rounded-xl bg-[#0A0E17] border border-[#D4AF37]/20 space-y-3">
            <div className="text-[#D4AF37] font-bold text-lg font-serif-luxury">04.</div>
            <h3 className="font-serif-luxury text-base font-semibold text-[#F8F5ED]">
              Confirm Total Price Upfront
            </h3>
            <p className="text-xs text-[#A9ADB5] leading-relaxed">
              Agree on total rental rates and clarify any additional charges before final confirmation for transparent planning.
            </p>
          </div>

          <div className="p-6 rounded-xl bg-[#0A0E17] border border-[#D4AF37]/20 space-y-3 sm:col-span-2 lg:col-span-2">
            <div className="text-[#D4AF37] font-bold text-lg font-serif-luxury">05.</div>
            <h3 className="font-serif-luxury text-base font-semibold text-[#F8F5ED]">
              Clarify Rescheduling & Terms
            </h3>
            <p className="text-xs text-[#A9ADB5] leading-relaxed">
              Confirm rescheduling and cancellation expectations directly with the owner before payment so you know exactly how date adjustments are handled.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION H: FREQUENTLY ASKED QUESTIONS */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-3 mb-10">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#D4AF37]">
            Answers to Common Queries
          </p>
          <h2 className="font-serif-luxury text-3xl sm:text-4xl font-bold text-[#F8F5ED]">
            Frequently Asked Questions
          </h2>
          <p className="text-sm text-[#A9ADB5]">
            Transparent information regarding car rental, weddings, and travel in Dera Ghazi Khan.
          </p>
        </div>

        <div className="space-y-3">
          {GENERAL_FAQS.map((faq, index) => {
            const isOpen = openFaqIndex === index;
            return (
              <div
                key={index}
                className="rounded-lg border border-[#D4AF37]/20 bg-[#0A0E17] overflow-hidden transition-colors"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full text-left px-5 py-4 flex items-center justify-between gap-4 focus:outline-none focus-visible:ring-1 focus-visible:ring-[#D4AF37]"
                  aria-expanded={isOpen}
                >
                  <span className="font-serif-luxury text-sm sm:text-base font-semibold text-[#F8F5ED]">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 text-[#D4AF37] shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-5 pb-4 text-xs sm:text-sm text-[#A9ADB5] leading-relaxed border-t border-[#D4AF37]/10 pt-3">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* SECTION I: CONTACT AND BOOKING CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <div className="rounded-2xl border-2 border-[#D4AF37]/35 bg-gradient-to-b from-[#101A2B] to-[#080B10] p-8 sm:p-12 lg:p-16 text-center space-y-7 shadow-2xl relative overflow-hidden">
          <div className="max-w-2xl mx-auto space-y-4">
            <h2 className="font-serif-luxury text-3xl sm:text-4xl lg:text-5xl font-bold text-[#F8F5ED]">
              Let's Plan Your Next Journey
            </h2>
            <p className="text-sm sm:text-base text-[#A9ADB5] leading-relaxed">
              Share your occasion, travel dates, and requirements with Ammar Wedding & Special Tours. Contact us to discuss available vehicles and booking details.
            </p>
          </div>

          {/* Verified Contact Details Grid */}
          <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 pt-2 text-xs">
            <div className="p-4 rounded bg-[#080B10]/80 border border-[#D4AF37]/20 flex flex-col items-center text-center space-y-1.5">
              <Phone className="w-4 h-4 text-[#D4AF37]" />
              <span className="text-[#A9ADB5]">Call Us</span>
              <a href={BUSINESS_INFO.phoneTel} className="text-[#F8F5ED] font-semibold hover:text-[#D4AF37]">
                {BUSINESS_INFO.phone}
              </a>
            </div>

            <div className="p-4 rounded bg-[#080B10]/80 border border-[#D4AF37]/20 flex flex-col items-center text-center space-y-1.5">
              <MessageCircle className="w-4 h-4 text-[#D4AF37]" />
              <span className="text-[#A9ADB5]">WhatsApp</span>
              <a
                href={BUSINESS_INFO.whatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#F8F5ED] font-semibold hover:text-[#D4AF37]"
              >
                +92 318 0838667
              </a>
            </div>

            <div className="p-4 rounded bg-[#080B10]/80 border border-[#D4AF37]/20 flex flex-col items-center text-center space-y-1.5">
              <MapPin className="w-4 h-4 text-[#D4AF37]" />
              <span className="text-[#A9ADB5]">Address</span>
              <span className="text-[#F8F5ED] font-medium leading-tight">
                Royal Defense View, DG Khan
              </span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
            <a
              href={BUSINESS_INFO.phoneTel}
              className="inline-flex items-center gap-2 px-6 py-3 text-xs font-semibold tracking-wider uppercase text-[#F8F5ED] bg-[#101A2B] hover:bg-[#101A2B]/80 border border-[#D4AF37]/40 rounded transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span>Call Now</span>
            </a>

            <a
              href={BUSINESS_INFO.whatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-7 py-3 text-xs font-semibold tracking-wider uppercase text-[#080B10] bg-gradient-to-r from-[#D4AF37] via-[#F3E5AB] to-[#C59B27] rounded hover:brightness-110 active:scale-95 transition-all shadow-lg"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Enquire on WhatsApp</span>
            </a>

            <a
              href={BUSINESS_INFO.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 text-xs font-semibold tracking-wider uppercase text-[#F8F5ED] hover:text-[#D4AF37] border border-[#D4AF37]/20 hover:border-[#D4AF37]/50 rounded transition-colors"
            >
              <ExternalLink className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span>Get Location Information</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
