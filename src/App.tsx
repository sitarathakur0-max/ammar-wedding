import React, { useState, useEffect } from 'react';
import { PageId } from './types';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { EnquiryModal } from './components/EnquiryModal';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { WeddingPage } from './pages/WeddingPage';
import { ToursPage } from './pages/ToursPage';
import { ContactPage } from './pages/ContactPage';

export default function App() {
  // Resolve page from initial pathname
  const getInitialPage = (): PageId => {
    const path = window.location.pathname.toLowerCase().replace(/\/$/, '');
    if (path === '/about') return 'about';
    if (path === '/wedding-car-rental') return 'wedding';
    if (path === '/car-rental-tours') return 'tours';
    if (path === '/contact') return 'contact';
    return 'home';
  };

  const [currentPage, setCurrentPage] = useState<PageId>(getInitialPage);
  const [isEnquiryModalOpen, setIsEnquiryModalOpen] = useState(false);
  const [defaultModalOccasion, setDefaultModalOccasion] = useState('Wedding Transport');

  // Handle URL change
  const navigateTo = (page: PageId) => {
    setCurrentPage(page);
    let path = '/';
    if (page === 'about') path = '/about';
    if (page === 'wedding') path = '/wedding-car-rental';
    if (page === 'tours') path = '/car-rental-tours';
    if (page === 'contact') path = '/contact';

    if (window.location.pathname !== path) {
      window.history.pushState({ page }, '', path);
    }
  };

  // Sync with browser back/forward buttons
  useEffect(() => {
    const handlePopState = () => {
      setCurrentPage(getInitialPage());
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Sync document title and meta description dynamically
  useEffect(() => {
    const titles: Record<PageId, string> = {
      home: 'Ammar Wedding & Special Tours | Car Rental in DG Khan',
      about: 'About Us | Ammar Wedding & Special Tours Car Rental DG Khan',
      wedding: 'Wedding Car Rental in DG Khan | Ammar Special Tours',
      tours: 'Car Rental & Tours in DG Khan | Ammar Special Tours',
      contact: 'Contact & Bookings | Ammar Wedding & Special Tours DG Khan',
    };

    const descriptions: Record<PageId, string> = {
      home: 'Contact Ammar Wedding & Special Tours in Dera Ghazi Khan for enquiries about wedding transportation, special occasions, car rental, and travel arrangements.',
      about: 'Learn about Ammar Wedding & Special Tours, a premier local car rental agency based in Dera Ghazi Khan specializing in wedding and planned travel transportation.',
      wedding: 'Arrange luxury wedding car rental in Dera Ghazi Khan. Discuss dates, schedules, venues, and vehicle preferences directly with Ammar Wedding & Special Tours.',
      tours: 'Plan your road journey and car rental departing from Dera Ghazi Khan. Custom travel coordination, route consultation, and vehicle availability discussions.',
      contact: 'Contact Ammar Wedding & Special Tours in Dera Ghazi Khan. Book via WhatsApp (+92 318 0838667), call direct, or visit Royal Defense View Housing Society.',
    };

    document.title = titles[currentPage] || titles.home;
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', descriptions[currentPage] || descriptions.home);
    }
  }, [currentPage]);

  const handleOpenEnquiry = (defaultOccasion: string = 'Wedding Transport') => {
    setDefaultModalOccasion(defaultOccasion);
    setIsEnquiryModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#080B10] text-[#F8F5ED] flex flex-col relative selection:bg-[#D4AF37]/30 selection:text-white">
      {/* Top Navigation */}
      <Header
        currentPage={currentPage}
        onNavigate={navigateTo}
        onOpenEnquiry={() => handleOpenEnquiry('General Car Rental Discussion')}
      />

      {/* Main Content Area */}
      <main className="flex-grow">
        {currentPage === 'home' && (
          <HomePage onNavigate={navigateTo} onOpenEnquiry={handleOpenEnquiry} />
        )}
        {currentPage === 'about' && (
          <AboutPage onNavigate={navigateTo} onOpenEnquiry={handleOpenEnquiry} />
        )}
        {currentPage === 'wedding' && (
          <WeddingPage onNavigate={navigateTo} onOpenEnquiry={handleOpenEnquiry} />
        )}
        {currentPage === 'tours' && (
          <ToursPage onNavigate={navigateTo} onOpenEnquiry={handleOpenEnquiry} />
        )}
        {currentPage === 'contact' && <ContactPage />}
      </main>

      {/* Mandatory Floating WhatsApp Button strictly on the LEFT of every page */}
      <FloatingWhatsApp />

      {/* Enquiry Modal */}
      <EnquiryModal
        isOpen={isEnquiryModalOpen}
        onClose={() => setIsEnquiryModalOpen(false)}
        defaultOccasion={defaultModalOccasion}
      />

      {/* Footer */}
      <Footer onNavigate={navigateTo} />
    </div>
  );
}
