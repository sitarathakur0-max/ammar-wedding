import React, { useState } from 'react';
import { X, Send, Phone, Calendar, MapPin, User, Car, MessageSquare, Info } from 'lucide-react';
import { BUSINESS_INFO } from '../constants/business';
import { BookingFormData } from '../types';

interface EnquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultOccasion?: string;
}

export const EnquiryModal: React.FC<EnquiryModalProps> = ({
  isOpen,
  onClose,
  defaultOccasion = 'Wedding',
}) => {
  const [formData, setFormData] = useState<BookingFormData>({
    fullName: '',
    phone: '',
    occasionType: defaultOccasion,
    travelDate: '',
    pickupLocation: 'Dera Ghazi Khan',
    destination: '',
    vehiclePreference: 'Luxury Executive Sedan',
    notes: '',
  });

  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const generateWhatsAppMessage = () => {
    const lines = [
      `*Ammar Wedding & Special Tours Booking Enquiry*`,
      `• *Client Name:* ${formData.fullName || 'Not specified'}`,
      `• *Contact Number:* ${formData.phone || 'Not specified'}`,
      `• *Occasion:* ${formData.occasionType}`,
      `• *Travel Date:* ${formData.travelDate || 'Pending discussion'}`,
      `• *Pickup Location:* ${formData.pickupLocation}`,
      `• *Destination / Venue:* ${formData.destination || 'Within Dera Ghazi Khan'}`,
      `• *Vehicle Preference:* ${formData.vehiclePreference}`,
      formData.notes ? `• *Notes / Requirements:* ${formData.notes}` : '',
      ``,
      `_I would like to check vehicle availability and receive a quotation._`,
    ].filter(Boolean);

    return encodeURIComponent(lines.join('\n'));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const encoded = generateWhatsAppMessage();
    const url = `https://wa.me/${BUSINESS_INFO.whatsAppDigits}?text=${encoded}`;
    
    // Open WhatsApp
    window.open(url, '_blank', 'noopener,noreferrer');
    setSubmitted(true);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-headline"
      className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6"
    >
      <div className="relative w-full max-w-xl bg-[#0A0E17] border border-[#D4AF37]/30 rounded-xl shadow-2xl p-6 sm:p-8 text-[#F8F5ED] overflow-hidden">
        {/* Subtle decorative gold line */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent" />

        <div className="flex items-start justify-between gap-4 pb-4 border-b border-[#D4AF37]/20">
          <div>
            <h2 id="modal-headline" className="font-serif-luxury text-xl sm:text-2xl font-bold text-[#F8F5ED]">
              Enquire About a Booking
            </h2>
            <p className="text-xs text-[#D4AF37] tracking-wider uppercase mt-0.5">
              Ammar Wedding & Special Tours · Dera Ghazi Khan
            </p>
          </div>
          <button
            onClick={onClose}
            aria-label="Close modal"
            className="p-1.5 text-[#A9ADB5] hover:text-[#F8F5ED] hover:bg-[#101A2B] rounded-lg transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37]"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {submitted ? (
          <div className="py-8 text-center space-y-4">
            <div className="w-12 h-12 mx-auto rounded-full bg-[#101A2B] border border-[#D4AF37]/40 flex items-center justify-center text-[#D4AF37]">
              <Send className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-serif-luxury font-semibold text-[#F8F5ED]">
              Enquiry Prepared for WhatsApp
            </h3>
            <p className="text-sm text-[#A9ADB5] max-w-md mx-auto leading-relaxed">
              Your booking details have been directed to our official WhatsApp chat. You can send the message directly to discuss vehicle availability, scheduling, and exact terms.
            </p>
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href={`https://wa.me/${BUSINESS_INFO.whatsAppDigits}?text=${generateWhatsAppMessage()}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-5 py-2.5 text-xs font-semibold tracking-wider uppercase text-[#080B10] bg-[#D4AF37] hover:bg-[#E9D9A7] rounded transition-colors"
              >
                Open WhatsApp Again
              </a>
              <button
                type="button"
                onClick={() => {
                  setSubmitted(false);
                  onClose();
                }}
                className="w-full sm:w-auto px-5 py-2.5 text-xs font-semibold tracking-wider uppercase text-[#F8F5ED] bg-[#101A2B] hover:bg-[#101A2B]/80 border border-[#D4AF37]/30 rounded transition-colors"
              >
                Close Window
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="mt-5 space-y-4 text-xs">
            {/* Note about confirmation */}
            <div className="p-3 bg-[#101A2B]/60 border border-[#D4AF37]/20 rounded-md flex items-start gap-2.5 text-[#A9ADB5] leading-relaxed">
              <Info className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
              <span>
                Please note: Enquiries do not constitute an automatic reservation. Booking confirmation and quoted terms are finalized directly with the business.
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-[#A9ADB5] mb-1 font-medium flex items-center gap-1.5">
                  <User className="w-3.5 h-3.5 text-[#D4AF37]" />
                  <span>Full Name</span>
                </label>
                <input
                  type="text"
                  name="fullName"
                  required
                  placeholder="e.g. Tariq Khan"
                  value={formData.fullName}
                  onChange={handleChange}
                  className="w-full px-3 py-2 bg-[#080B10] border border-[#D4AF37]/25 rounded text-[#F8F5ED] placeholder-[#A9ADB5]/50 focus:outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] text-xs"
                />
              </div>

              <div>
                <label className="block text-[#A9ADB5] mb-1 font-medium flex items-center gap-1.5">
                  <Phone className="w-3.5 h-3.5 text-[#D4AF37]" />
                  <span>Contact Number</span>
                </label>
                <input
                  type="tel"
                  name="phone"
                  required
                  placeholder="e.g. +92 300 1234567"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-3 py-2 bg-[#080B10] border border-[#D4AF37]/25 rounded text-[#F8F5ED] placeholder-[#A9ADB5]/50 focus:outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] text-xs"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-[#A9ADB5] mb-1 font-medium flex items-center gap-1.5">
                  <Car className="w-3.5 h-3.5 text-[#D4AF37]" />
                  <span>Occasion Type</span>
                </label>
                <select
                  name="occasionType"
                  value={formData.occasionType}
                  onChange={handleChange}
                  className="w-full px-3 py-2 bg-[#080B10] border border-[#D4AF37]/25 rounded text-[#F8F5ED] focus:outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] text-xs"
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
                  className="w-full px-3 py-2 bg-[#080B10] border border-[#D4AF37]/25 rounded text-[#F8F5ED] focus:outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] text-xs"
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
                  value={formData.pickupLocation}
                  onChange={handleChange}
                  placeholder="e.g. Royal Defense View / City Center"
                  className="w-full px-3 py-2 bg-[#080B10] border border-[#D4AF37]/25 rounded text-[#F8F5ED] placeholder-[#A9ADB5]/50 focus:outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] text-xs"
                />
              </div>

              <div>
                <label className="block text-[#A9ADB5] mb-1 font-medium flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-[#D4AF37]" />
                  <span>Destination / Venue</span>
                </label>
                <input
                  type="text"
                  name="destination"
                  value={formData.destination}
                  onChange={handleChange}
                  placeholder="e.g. Wedding Hall / City Destination"
                  className="w-full px-3 py-2 bg-[#080B10] border border-[#D4AF37]/25 rounded text-[#F8F5ED] placeholder-[#A9ADB5]/50 focus:outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] text-xs"
                />
              </div>
            </div>

            <div>
              <label className="block text-[#A9ADB5] mb-1 font-medium flex items-center gap-1.5">
                <MessageSquare className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span>Special Requirements / Vehicle Notes</span>
              </label>
              <textarea
                name="notes"
                rows={2}
                value={formData.notes}
                onChange={handleChange}
                placeholder="Mention expected rental hours, preferred car style, or timing..."
                className="w-full px-3 py-2 bg-[#080B10] border border-[#D4AF37]/25 rounded text-[#F8F5ED] placeholder-[#A9ADB5]/50 focus:outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] text-xs resize-none"
              />
            </div>

            <div className="pt-3 flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-[#D4AF37]/20">
              <a
                href={BUSINESS_INFO.phoneTel}
                className="inline-flex items-center gap-1.5 text-xs text-[#A9ADB5] hover:text-[#D4AF37] transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span>Call +92 318 0838667</span>
              </a>

              <div className="flex items-center gap-2.5 w-full sm:w-auto">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-4 py-2 text-xs text-[#A9ADB5] hover:text-[#F8F5ED] transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 text-xs font-semibold tracking-wider uppercase text-[#080B10] bg-gradient-to-r from-[#D4AF37] via-[#F3E5AB] to-[#C59B27] rounded hover:brightness-110 active:scale-95 transition-all shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37]"
                >
                  <span>Submit to WhatsApp</span>
                  <Send className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
