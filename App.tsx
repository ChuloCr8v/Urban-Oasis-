
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Highlights from './components/Highlights';
import Gallery from './components/Gallery';
import Amenities from './components/Amenities';
import Pricing from './components/Pricing';
import Location from './components/Location';
import Reviews from './components/Reviews';
import FAQ from './components/FAQ';
import BookingForm from './components/BookingForm';
import BookingCTA from './components/BookingCTA';
import Footer from './components/Footer';
import StickyBookingBar from './components/StickyBookingBar';
import BackToTop from './components/BackToTop';
import { PROPERTY_DETAILS } from './constants';

const App: React.FC = () => {
  return (
    <div className="bg-brand-bg dark:bg-brand-bg-dark text-brand-dark dark:text-brand-text-dark font-sans antialiased transition-colors duration-300 selection:bg-brand-gold selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <Highlights />
        
        <div className="space-y-32 py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-32">
            <Gallery />
            <Amenities />
            <Pricing />
            <Location />
            <Reviews />
          </div>
          
          <FAQ />
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
            <BookingForm />
            <BookingCTA />
          </div>
        </div>
      </main>
      <Footer />
      <StickyBookingBar price={PROPERTY_DETAILS.nightlyPrice} whatsapp={PROPERTY_DETAILS.whatsappLink} />
      <BackToTop />
    </div>
  );
};

export default App;
