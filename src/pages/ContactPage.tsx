import React, { useState } from 'react';
import {
  Phone,
  MessageCircle,
  MapPin,
  Clock,
  Send,
  Calendar,
  User,
  Car,
  MessageSquare,
  ExternalLink,
  Info,
  CheckCircle2,
  Copy,
  Check,
} from 'lucide-react';
import { BUSINESS_INFO } from '../constants/business';
import { BookingFormData } from '../types';

export const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState<BookingFormData>({
    fullName: '',
    phone: '',
    occasionType: 'Wedding Transport',
    travelDate: '',
    pickupLocation: 'Dera Ghazi Khan',
    destination: '',
    vehiclePreference: 'Luxury Executive Sedan',
    notes: '',
  });

  const [copied, setCopied] = useState(false);
  const [submittedWhatsApp, setSubmittedWhatsApp] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const formattedMessage = [
    `*Ammar Wedding & Special Tours Booking Enquiry*`,
    `• *Client Name:* ${formData.fullName || 'Not specified'}`,
    `• *Phone:* ${formData.phone || 'Not specified'}`,
    `• *Occasion:* ${formData.occasionType}`,
    `• *Travel Date:* ${formData.travelDate || 'Date to be confirmed'}`,
    `• *Pickup Location:* ${formData.pickupLocation}`,
    `• *Destination / Venue:* ${formData.destination || 'Within Dera Ghazi Khan'}`,
    `• *Vehicle Preference:* ${formData.vehiclePreference}`,
    formData.notes ? `• *Special Notes:* ${formData.notes}` : '',
    ``,
    `_Hello, please verify vehicle availability and share your quotation._`,
  ]
    .filter(Boolean)
    .join('\n');

  const handleSendWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    const url = `https://wa.me/${BUSINESS_INFO.whatsAppDigits}?text=${encodeURIComponent(
      formattedMessage
    )}`;
    window.open(url, '_blank', 'noopener,noreferrer');
    setSubmittedWhatsApp(true);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(formattedMessage);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="py-12 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
      {/* Page Title & Intro */}
      <section className="text-center max-w-3xl mx-auto space-y-4">
        <p className="text-xs font-semibold uppercase tracking-widest text-[#D4AF37]">
          Get in Touch
        </p>
        <h1 className="font-serif-luxury text-4xl sm:text-5xl font-bold text-[#F8F5ED] leading-tight text-balance">
          Contact & Booking Enquiries
        </h1>
        <p className="text-base sm:text-lg text-[#A9ADB5] leading-relaxed text-pretty">
          Reach out to Ammar Wedding & Special Tours to discuss your wedding schedule, planned journey, or car rental requirements in Dera Ghazi Khan.
        </p>
      </section>

      {/* Contact Information & Interactive Form */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left: Contact Cards & Location */}
        <div className="lg:col-span-5 space-y-6">
          <div className="rounded-xl border border-[#D4AF37]/30 bg-[#0A0E17] p-6 sm:p-8 space-y-6 shadow-xl">
            <h2 className="font-serif-luxury text-xl font-bold text-[#F8F5ED] border-b border-[#D4AF37]/20 pb-3">
              Direct Contact Details
            </h2>

            <div className="space-y-5 text-xs text-[#A9ADB5]">
              {/* Phone */}
              <div className="flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-lg bg-[#101A2B] border border-[#D4AF37]/30 flex items-center justify-center text-[#D4AF37] shrink-0">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[#A9ADB5] block text-[11px] uppercase tracking-wider">
                    Telephone Call
                  </span>
                  <a
                    href={BUSINESS_INFO.phoneTel}
                    className="text-base font-semibold text-[#F8F5ED] hover:text-[#D4AF37] transition-colors"
                  >
                    {BUSINESS_INFO.phone}
                  </a>
                  <p className="text-[11px] text-[#A9ADB5] mt-0.5">
                    Direct voice calls for bookings and questions.
                  </p>
                </div>
              </div>

              {/* WhatsApp */}
              <div className="flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-lg bg-[#101A2B] border border-[#D4AF37]/30 flex items-center justify-center text-[#D4AF37] shrink-0">
                  <MessageCircle className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[#A9ADB5] block text-[11px] uppercase tracking-wider">
                    WhatsApp Chat
                  </span>
                  <a
                    href={BUSINESS_INFO.whatsAppUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-base font-semibold text-[#F8F5ED] hover:text-[#D4AF37] transition-colors"
                  >
                    +92 318 0838667
                  </a>
                  <p className="text-[11px] text-[#A9ADB5] mt-0.5">
                    Fast response for wedding and route enquiries.
                  </p>
                </div>
              </div>

              {/* Physical Address */}
              <div className="flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-lg bg-[#101A2B] border border-[#D4AF37]/30 flex items-center justify-center text-[#D4AF37] shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[#A9ADB5] block text-[11px] uppercase tracking-wider">
                    Location & Office Base
                  </span>
                  <span className="text-sm font-medium text-[#F8F5ED] block leading-snug">
                    {BUSINESS_INFO.address}
                  </span>
                  <a
                    href={BUSINESS_INFO.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-[11px] text-[#D4AF37] hover:underline mt-1.5"
                  >
                    <span>View on Google Maps</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>

            {/* Note on availability */}
            <div className="p-3.5 rounded-lg bg-[#101A2B]/70 border border-[#D4AF37]/20 text-xs text-[#A9ADB5] leading-relaxed">
              <span className="text-[#D4AF37] font-semibold block mb-0.5">Availability Policy:</span>
              Vehicle availability, rental rates, and booking arrangements are confirmed directly with the owner upon initial enquiry.
            </div>
          </div>

          {/* Quick Call Out Banner */}
          <div className="rounded-xl border border-[#D4AF37]/20 bg-gradient-to-r from-[#101A2B] to-[#0A0E17] p-6 text-xs text-[#A9ADB5] space-y-3">
            <h3 className="font-serif-luxury text-base font-bold text-[#F8F5ED]">
              Fastest Way to Enquire
            </h3>
            <p className="leading-relaxed">
              If your event or travel departure is approaching soon, we recommend messaging us directly on WhatsApp with your date and venue.
            </p>
            <a
              href={BUSINESS_INFO.whatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold tracking-wider uppercase text-[#080B10] bg-[#D4AF37] hover:bg-[#E9D9A7] rounded transition-colors"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>Launch WhatsApp Chat</span>
            </a>
          </div>
        </div>

        {/* Right: Booking Enquiry Form */}
        <div className="lg:col-span-7">
          <div className="rounded-xl border border-[#D4AF37]/30 bg-[#0A0E17] p-6 sm:p-8 space-y-6 shadow-xl relative">
            <div className="border-b border-[#D4AF37]/20 pb-4">
              <h2 className="font-serif-luxury text-2xl font-bold text-[#F8F5ED]">
                Send a Booking Enquiry
              </h2>
              <p className="text-xs text-[#A9ADB5] mt-1">
                Fill in your requirements below. Your message will be formatted and opened in WhatsApp for immediate direct confirmation with our team.
              </p>
            </div>

            {/* Crucial transparent notice */}
            <div className="p-3 bg-[#101A2B]/70 border border-[#D4AF37]/25 rounded text-xs text-[#A9ADB5] flex items-start gap-2.5">
              <Info className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
              <span>
                Submitting this form prepares a detailed enquiry for WhatsApp. Bookings are not automatically finalized online; confirmation is agreed directly with the business.
              </span>
            </div>

            <form onSubmit={handleSendWhatsApp} className="space-y-4 text-xs">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[#A9ADB5] mb-1 font-medium flex items-center gap-1.5">
                    <User className="w-3.5 h-3.5 text-[#D4AF37]" />
                    <span>Your Full Name *</span>
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    required
                    placeholder="e.g. Tariq Khan"
                    value={formData.fullName}
                    onChange={handleChange}
                    className="w-full px-3.5 py-2.5 bg-[#080B10] border border-[#D4AF37]/25 rounded text-[#F8F5ED] placeholder-[#A9ADB5]/50 focus:outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] text-xs"
                  />
                </div>

                <div>
                  <label className="block text-[#A9ADB5] mb-1 font-medium flex items-center gap-1.5">
                    <Phone className="w-3.5 h-3.5 text-[#D4AF37]" />
                    <span>Contact Number *</span>
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    placeholder="e.g. +92 300 1234567"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-3.5 py-2.5 bg-[#080B10] border border-[#D4AF37]/25 rounded text-[#F8F5ED] placeholder-[#A9ADB5]/50 focus:outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] text-xs"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[#A9ADB5] mb-1 font-medium flex items-center gap-1.5">
                    <Car className="w-3.5 h-3.5 text-[#D4AF37]" />
                    <span>Occasion Type *</span>
                  </label>
                  <select
                    name="occasionType"
                    value={formData.occasionType}
                    onChange={handleChange}
                    className="w-full px-3.5 py-2.5 bg-[#080B10] border border-[#D4AF37]/25 rounded text-[#F8F5ED] focus:outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] text-xs"
                  >
                    <option value="Wedding Transport">Wedding Transport</option>
                    <option value="Special Occasion / Family Event">Special Occasion / Family Event</option>
                    <option value="Tour & Planned Journey">Tour & Planned Journey</option>
                    <option value="General Car Rental Discussion">General Car Rental Discussion</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[#A9ADB5] mb-1 font-medium flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-[#D4AF37]" />
                    <span>Planned Travel Date</span>
                  </label>
                  <input
                    type="date"
                    name="travelDate"
                    value={formData.travelDate}
                    onChange={handleChange}
                    className="w-full px-3.5 py-2.5 bg-[#080B10] border border-[#D4AF37]/25 rounded text-[#F8F5ED] focus:outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] text-xs"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[#A9ADB5] mb-1 font-medium flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-[#D4AF37]" />
                    <span>Pickup Location (DG Khan)</span>
                  </label>
                  <input
                    type="text"
                    name="pickupLocation"
                    placeholder="e.g. Royal Defense View / City Center"
                    value={formData.pickupLocation}
                    onChange={handleChange}
                    className="w-full px-3.5 py-2.5 bg-[#080B10] border border-[#D4AF37]/25 rounded text-[#F8F5ED] placeholder-[#A9ADB5]/50 focus:outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] text-xs"
                  />
                </div>

                <div>
                  <label className="block text-[#A9ADB5] mb-1 font-medium flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-[#D4AF37]" />
                    <span>Destination / Marriage Hall</span>
                  </label>
                  <input
                    type="text"
                    name="destination"
                    placeholder="e.g. Wedding Hall or Route Destination"
                    value={formData.destination}
                    onChange={handleChange}
                    className="w-full px-3.5 py-2.5 bg-[#080B10] border border-[#D4AF37]/25 rounded text-[#F8F5ED] placeholder-[#A9ADB5]/50 focus:outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] text-xs"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[#A9ADB5] mb-1 font-medium flex items-center gap-1.5">
                  <Car className="w-3.5 h-3.5 text-[#D4AF37]" />
                  <span>Vehicle Preference</span>
                </label>
                <select
                  name="vehiclePreference"
                  value={formData.vehiclePreference}
                  onChange={handleChange}
                  className="w-full px-3.5 py-2.5 bg-[#080B10] border border-[#D4AF37]/25 rounded text-[#F8F5ED] focus:outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] text-xs"
                >
                  <option value="Luxury Executive Sedan">Luxury Executive Sedan</option>
                  <option value="Spacious Family Transport">Spacious Family Transport</option>
                  <option value="Tour & Highway Vehicle">Tour & Highway Vehicle</option>
                  <option value="Discuss Best Fit with Business">Discuss Best Fit with Business</option>
                </select>
              </div>

              <div>
                <label className="block text-[#A9ADB5] mb-1 font-medium flex items-center gap-1.5">
                  <MessageSquare className="w-3.5 h-3.5 text-[#D4AF37]" />
                  <span>Additional Details or Timing Requirements</span>
                </label>
                <textarea
                  name="notes"
                  rows={3}
                  placeholder="Share expected rental duration (e.g. 6 hours), specific pickup timings, or multi-day event details..."
                  value={formData.notes}
                  onChange={handleChange}
                  className="w-full px-3.5 py-2.5 bg-[#080B10] border border-[#D4AF37]/25 rounded text-[#F8F5ED] placeholder-[#A9ADB5]/50 focus:outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] text-xs resize-none"
                />
              </div>

              <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                <button
                  type="button"
                  onClick={handleCopy}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded border border-[#D4AF37]/30 text-[#A9ADB5] hover:text-[#F8F5ED] hover:bg-[#101A2B] transition-colors"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400">Message Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-[#D4AF37]" />
                      <span>Copy Enquiry Text</span>
                    </>
                  )}
                </button>

                <button
                  type="submit"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3 text-xs font-semibold tracking-wider uppercase text-[#080B10] bg-gradient-to-r from-[#D4AF37] via-[#F3E5AB] to-[#C59B27] rounded hover:brightness-110 active:scale-95 transition-all shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37]"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Send Enquiry via WhatsApp</span>
                </button>
              </div>

              {submittedWhatsApp && (
                <div className="mt-4 p-4 rounded bg-[#101A2B] border border-[#D4AF37]/40 text-xs text-[#E9D9A7] flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-[#F8F5ED] mb-0.5">Enquiry Transferred to WhatsApp</strong>
                    Your booking request has been transferred to WhatsApp. Please hit send in the chat to discuss your dates and confirm vehicle availability.
                  </div>
                </div>
              )}
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};
