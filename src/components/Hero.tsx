import React from 'react';
import { ArrowDown, Github, Linkedin, Mail, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 pt-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Profile Image */}
          <div className="mb-8">
            <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-r from-blue-500 to-purple-600 p-1">
              <div className="w-full h-full rounded-full bg-white flex items-center justify-center">
                <span className="text-4xl font-bold text-gray-800">KM</span>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
              Khaled <span className="text-blue-600">Mostafa</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 mb-4">
              Front-End Developer | React.js & Angular
            </p>
            
            <div className="flex items-center justify-center text-gray-500 mb-8">
              <MapPin className="h-5 w-5 mr-2" />
              <span>Tanta, Al Gharbiyah, Egypt</span>
            </div>

            <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto leading-relaxed">
              I specialize in building responsive, modern, and scalable web applications 
              using React, Angular, TypeScript, and Tailwind CSS. My work emphasizes 
              clean code, strong user experience, and reliable performance.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button
                onClick={() => scrollToSection('projects')}
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg rounded-lg transition-all duration-300 transform hover:scale-105"
              >
                View My Work
              </Button>
              <Button
                onClick={() => scrollToSection('contact')}
                variant="outline"
                className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-3 text-lg rounded-lg transition-all duration-300"
              >
                Get In Touch
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex justify-center space-x-6 mb-12">
              <a
                href="mailto:khaled.mustafa.jr@gmail.com"
                className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110"
              >
                <Mail className="h-6 w-6 text-gray-700" />
              </a>
              <a
                href="https://www.linkedin.com/in/khaledmostafa-jr"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110"
              >
                <Linkedin className="h-6 w-6 text-blue-600" />
              </a>
              <a
                href="https://github.com/khaledmostafa-jr"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110"
              >
                <Github className="h-6 w-6 text-gray-700" />
              </a>
            </div>

            {/* Scroll Indicator */}
            <button
              onClick={() => scrollToSection('about')}
              className="animate-bounce p-2 rounded-full hover:bg-white/20 transition-colors"
            >
              <ArrowDown className="h-6 w-6 text-gray-600" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

