
import React from 'react';
import { Mail, Phone, Instagram } from 'lucide-react';
import { PROPERTY_DETAILS } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-text text-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="md:flex md:items-center md:justify-between">
          <div className="flex justify-center space-x-6 md:order-2">
            <a href={PROPERTY_DETAILS.whatsappLink} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
              <span className="sr-only">WhatsApp</span>
              <Phone className="h-6 w-6" />
            </a>
            <a href={PROPERTY_DETAILS.emailLink} className="text-gray-400 hover:text-white">
              <span className="sr-only">Email</span>
              <Mail className="h-6 w-6" />
            </a>
            <a href={PROPERTY_DETAILS.instagramLink} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
              <span className="sr-only">Instagram</span>
              <Instagram className="h-6 w-6" />
            </a>
          </div>
          <div className="mt-8 md:mt-0 md:order-1">
            <p className="text-center text-base text-gray-400">
              &copy; {new Date().getFullYear()} {PROPERTY_DETAILS.name}. All rights reserved.
            </p>
          </div>
        </div>
        <div className="mt-8 text-center text-sm text-gray-500">
          <p>Contact us at <a href={PROPERTY_DETAILS.emailLink} className="underline hover:text-white">{PROPERTY_DETAILS.emailLink.replace('mailto:', '')}</a></p>
          <p>Follow our journey on Instagram: <a href={PROPERTY_DETAILS.instagramLink} target="_blank" rel="noopener noreferrer" className="underline hover:text-white">{PROPERTY_DETAILS.instagramHandle}</a></p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
