import { FAQItem, NavItem } from '../types';

export const BUSINESS_INFO = {
  name: 'Ammar Wedding & Special Tours Car Rental',
  category: 'Car rental agency',
  tagline: 'Rent a Car Services · Wedding & Special Tours',
  phone: '+92 318 0838667',
  phoneTel: 'tel:+923180838667',
  whatsAppDigits: '923180838667',
  whatsAppUrl: 'https://wa.me/923180838667',
  address: 'Royal Defense View Housing Society, Dera Ghazi Khan, 32200, Pakistan',
  city: 'Dera Ghazi Khan',
  postalCode: '32200',
  country: 'Pakistan',
  googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=Royal+Defense+View+Housing+Society+Dera+Ghazi+Khan+32200+Pakistan',
  logoPath: '/ammar-emblem.jpg',
  availabilityNotice: 'For vehicle availability, rental prices, service areas, and booking confirmations, please contact the business directly via call or WhatsApp.',
};

export const NAV_ITEMS: NavItem[] = [
  { id: 'home', label: 'Home', path: '/' },
  { id: 'about', label: 'About Us', path: '/about' },
  { id: 'wedding', label: 'Wedding Car Rental', path: '/wedding-car-rental' },
  { id: 'tours', label: 'Car Rental & Tours', path: '/car-rental-tours' },
  { id: 'contact', label: 'Contact & Bookings', path: '/contact' },
];

export const GENERAL_FAQS: FAQItem[] = [
  {
    question: 'Where is Ammar Wedding & Special Tours located?',
    answer: 'We are conveniently located at Royal Defense View Housing Society, Dera Ghazi Khan, 32200, Pakistan. Customers are welcome to contact us via phone or WhatsApp to discuss their travel and car rental requirements.',
  },
  {
    question: 'How can I enquire about wedding car rental?',
    answer: 'You can reach out directly via WhatsApp (+92 318 0838667) or phone call. Simply provide your planned wedding date, event location, preferred pickup time, desired car style, and expected rental duration to discuss available options.',
  },
  {
    question: 'How do I ask about available vehicles?',
    answer: 'Because vehicle schedules vary based on seasonal demand and prior reservations, vehicle availability is confirmed on a case-by-case basis. Message us on WhatsApp or call us to learn which vehicles are ready for your dates.',
  },
  {
    question: 'Can I enquire about transportation for special occasions?',
    answer: 'Yes. In addition to weddings, we welcome enquiries for family celebrations, dignitary travel, special events, and pre-scheduled personal milestones. Contact us with your date and itinerary.',
  },
  {
    question: 'How can I discuss a tour or travel plan?',
    answer: 'Share your intended departure date, travel route, destination, passenger group size, and travel duration with us on WhatsApp. We will discuss viable vehicle options tailored to your specific travel route.',
  },
  {
    question: 'How can I confirm rental prices?',
    answer: 'Rental rates depend on the vehicle selected, required duration, route distance, and timing. All rental quotes and payment arrangements are clarified directly with the business when you enquire.',
  },
  {
    question: 'How far in advance should I contact the business?',
    answer: 'We recommend contacting us as early as possible—particularly for wedding dates and festive periods—so your preferred vehicle and schedule can be reserved ahead of time.',
  },
  {
    question: 'What information should I share when requesting a booking?',
    answer: 'Please share your full name, contact number, occasion type (wedding, family function, tour, or general rental), travel date, pickup location, destination, vehicle preference, and expected duration.',
  },
];

export const WEDDING_FAQS: FAQItem[] = [
  {
    question: 'What details are needed for a wedding car enquiry?',
    answer: 'Please share your event date, pickup address, wedding hall or venue location, expected pickup time, required duration, and any vehicle preferences.',
  },
  {
    question: 'Can we book wedding transportation for multiple days or events?',
    answer: 'Yes. If you have multiple events such as Barat and Walima, inform us when enquiring so we can check availability for your entire schedule.',
  },
  {
    question: 'How is the wedding booking confirmed?',
    answer: 'After you share your event itinerary and agree on the quoted terms directly with the business, your booking will be confirmed with an agreed schedule.',
  },
  {
    question: 'When should I reserve a wedding vehicle?',
    answer: 'During peak wedding season in Dera Ghazi Khan, vehicles are in high demand. We advise contacting us several weeks in advance to secure availability.',
  },
];

export const TOURS_FAQS: FAQItem[] = [
  {
    question: 'What travel planning details should I provide?',
    answer: 'Please share your starting point in Dera Ghazi Khan, destination, departure date and time, expected return date, passenger count, and any route preferences.',
  },
  {
    question: 'How are travel rates calculated?',
    answer: 'Rates are determined based on the total trip distance, duration, vehicle category, and specific travel requirements. Discuss your route with us for a direct quote.',
  },
  {
    question: 'Does sending a WhatsApp enquiry guarantee a car?',
    answer: 'An initial enquiry initiates the discussion. A booking is finalized only once vehicle availability and quoted terms are mutually confirmed directly with the business.',
  },
];
