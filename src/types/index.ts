export type PageId = 'home' | 'about' | 'wedding' | 'tours' | 'contact';

export interface NavItem {
  id: PageId;
  label: string;
  path: string;
}

export interface ServiceItem {
  title: string;
  description: string;
  highlight: string;
  pageId: PageId;
  actionText: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface BookingFormData {
  fullName: string;
  phone: string;
  occasionType: string;
  travelDate: string;
  pickupLocation: string;
  destination: string;
  vehiclePreference: string;
  notes: string;
}
