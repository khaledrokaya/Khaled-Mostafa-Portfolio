import React from 'react';
import { Heart, Mail, Phone, MapPin, Linkedin, Github } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Services', href: '#services' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' }
  ];

  const services = [
    'React Development',
    'Angular Development',
    'Frontend Consulting',
    'UI/UX Implementation',
    'Performance Optimization',
    'API Integration'
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId.replace('#', ''));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
            {/* Brand Section */}
            <div className="lg:col-span-1">
              <div className="mb-6">
                <h3 className="text-2xl font-bold mb-4">
                  Khaled<span className="text-blue-400">.</span>
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  Frontend Developer specializing in React.js and Angular.
                  Creating modern, responsive, and scalable web applications
                  with clean code and exceptional user experiences.
                </p>
              </div>

              {/* Social Links */}
              <div className="flex space-x-4">
                <a
                  href="https://www.linkedin.com/in/khaled-mostafa-jr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-gray-800 rounded-lg hover:bg-blue-600 transition-colors duration-300"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
                <a
                  href="https://github.com/khaledrokaya"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors duration-300"
                >
                  <Github className="h-5 w-5" />
                </a>
                <a
                  href="mailto:khaled.mustafa.jr@gmail.com"
                  className="p-2 bg-gray-800 rounded-lg hover:bg-red-600 transition-colors duration-300"
                >
                  <Mail className="h-5 w-5" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <button
                      onClick={() => scrollToSection(link.href)}
                      className="text-gray-300 hover:text-blue-400 transition-colors duration-300"
                    >
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-lg font-semibold mb-6">Services</h4>
              <ul className="space-y-3">
                {services.map((service, index) => (
                  <li key={index} className="text-gray-300">
                    {service}
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-semibold mb-6">Contact Info</h4>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Phone className="h-5 w-5 text-blue-400 mr-3" />
                  <a
                    href="tel:+201121370379"
                    className="text-gray-300 hover:text-blue-400 transition-colors duration-300"
                  >
                    +201121370379
                  </a>
                </div>
                <div className="flex items-center">
                  <Mail className="h-5 w-5 text-blue-400 mr-3" />
                  <a
                    href="mailto:khaled.mustafa.jr@gmail.com"
                    className="text-gray-300 hover:text-blue-400 transition-colors duration-300"
                  >
                    khaled.mustafa.jr@gmail.com
                  </a>
                </div>
                <div className="flex items-center">
                  <MapPin className="h-5 w-5 text-blue-400 mr-3" />
                  <span className="text-gray-300">
                    Tanta, Al Gharbiyah, Egypt
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center text-gray-400 mb-4 md:mb-0">
              <span>© {currentYear} Khaled Mostafa</span> 
            </div>

            <div className="flex items-center space-x-6 text-sm text-gray-400">
              <button
                onClick={() => scrollToSection('hero')}
                className="hover:text-blue-400 transition-colors duration-300"
              >
                Back to Top
              </button>
              <span>•</span>
              <span>All rights reserved</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

