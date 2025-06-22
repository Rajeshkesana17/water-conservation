
import React from 'react';
import { Droplets, Mail, Phone, MapPin, Facebook, Twitter, Instagram } from 'lucide-react';

const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Droplets className="h-8 w-8 text-blue-400" />
              <span className="text-xl font-bold">AquaGuard Community</span>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              Empowering communities through water safety education, volunteer training, 
              and sustainable conservation initiatives. Together, we're building a future 
              where clean water is accessible to all.
            </p>
            <div className="flex space-x-4">
              <Facebook className="h-6 w-6 text-gray-400 hover:text-white cursor-pointer transition-colors" />
              <Twitter className="h-6 w-6 text-gray-400 hover:text-white cursor-pointer transition-colors" />
              <Instagram className="h-6 w-6 text-gray-400 hover:text-white cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => scrollToSection('about')}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  About Project
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('methodology')}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Methodology
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('survey')}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Take Survey
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('volunteer')}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Volunteer
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Mail className="h-5 w-5 text-blue-400" />
                <span className="text-gray-300">info@aquaguard.org</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-5 w-5 text-blue-400" />
                <span className="text-gray-300">+91 XXXXX XXXXX</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-5 w-5 text-blue-400" />
                <span className="text-gray-300">Community Center, Local Area</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 AquaGuard Community Project. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <span className="text-gray-400 text-sm">English</span>
              <span className="text-gray-400 text-sm">తెలుగు</span>
              <span className="text-gray-400 text-sm">हिंदी</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
