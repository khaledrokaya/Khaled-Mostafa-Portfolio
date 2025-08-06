import { useEffect, useState } from 'react';
import { ArrowDown, Github, Linkedin, Mail, MapPin, Download, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900">
        {/* Animated particles */}
        <div className="absolute inset-0">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="absolute animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${3 + Math.random() * 4}s`,
              }}
            >
              <div className="w-1 h-1 bg-white/20 rounded-full"></div>
            </div>
          ))}
        </div>

        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Profile Image with enhanced animation */}
          <div className={`mb-8 transform transition-all duration-1000 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="relative w-64 h-64 mx-auto group">
              {/* Rotating border */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 rounded-full animate-spin-slow"></div>
              <div className="absolute inset-1 bg-gradient-to-r from-slate-900 to-blue-900 rounded-full"></div>
              <div className="absolute inset-2 rounded-full overflow-hidden group-hover:scale-105 transition-transform duration-300">
                <img
                  src="/profile.jpg"
                  alt="Khaled Mostafa"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </div>
          </div>

          {/* Main Content with staggered animations */}
          <div className="max-w-4xl mx-auto space-y-6">
            {/* Name with gradient effect */}
            <div className={`transform transition-all duration-1000 delay-300 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4">
                <span className="text-white">Hi, I'm </span>
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent animate-pulse">
                  Khaled
                </span>
              </h1>
              <div className="h-1 w-24 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto rounded-full"></div>
            </div>

            {/* Professional title */}
            <div className={`transform transition-all duration-1000 delay-500 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <p className="text-xl md:text-2xl text-blue-200 font-medium">
                Front-End Developer | React.js Specialist
              </p>
            </div>

            {/* Location */}
            <div className={`transform transition-all duration-1000 delay-700 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <div className="flex items-center justify-center text-gray-300 mb-6">
                <MapPin className="h-5 w-5 mr-2 text-blue-400" />
                <span>Tanta, Al Gharbiyah, Egypt</span>
              </div>
            </div>

            {/* Description */}
            <div className={`transform transition-all duration-1000 delay-900 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
                I craft beautiful, responsive web applications with modern technologies.
                Specializing in React, TypeScript, and creating exceptional user experiences
                that drive business growth.
              </p>
            </div>

            {/* Enhanced CTA Buttons */}
            <div className={`transform transition-all duration-1000 delay-1100 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <Button
                  onClick={() => scrollToSection('projects')}
                  className="group bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
                >
                  <span className="mr-2">View My Work</span>
                  <ArrowDown className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button
                  onClick={() => scrollToSection('contact')}
                  variant="outline"
                  className="border-2 border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 backdrop-blur-sm"
                >
                  Get In Touch
                </Button>
                <Button
                  onClick={() => window.open('/resume.pdf', '_blank')}
                  variant="outline"
                  className="border-2 border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 backdrop-blur-sm"
                >
                  <Download className="h-5 w-5 mr-2" />
                  Resume
                </Button>
              </div>
            </div>

            {/* Enhanced Social Links */}
            <div className={`transform transition-all duration-1000 delay-1300 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <div className="flex justify-center space-x-6 mb-12">
                <a
                  href="mailto:khaled.mustafa.jr@gmail.com"
                  className="group p-4 bg-white/10 backdrop-blur-sm rounded-2xl hover:bg-white/20 transition-all duration-300 transform hover:scale-110 hover:-translate-y-1"
                >
                  <Mail className="h-6 w-6 text-blue-400 group-hover:text-white transition-colors" />
                </a>
                <a
                  href="https://www.linkedin.com/in/khaledmostafa-jr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group p-4 bg-white/10 backdrop-blur-sm rounded-2xl hover:bg-blue-600 transition-all duration-300 transform hover:scale-110 hover:-translate-y-1"
                >
                  <Linkedin className="h-6 w-6 text-blue-400 group-hover:text-white transition-colors" />
                </a>
                <a
                  href="https://github.com/khaledmostafa-jr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group p-4 bg-white/10 backdrop-blur-sm rounded-2xl hover:bg-gray-800 transition-all duration-300 transform hover:scale-110 hover:-translate-y-1"
                >
                  <Github className="h-6 w-6 text-gray-300 group-hover:text-white transition-colors" />
                </a>
              </div>
            </div>

            {/* Enhanced Scroll Indicator */}
            <div className={`transform transition-all duration-1000 delay-1500 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <button
                onClick={() => scrollToSection('about')}
                className="group animate-bounce hover:animate-none p-3 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all duration-300"
              >
                <ArrowDown className="h-6 w-6 text-blue-400 group-hover:text-white transition-colors" />
              </button>
              <p className="text-sm text-gray-400 mt-2">Scroll to explore</p>
            </div>
          </div>
        </div>
      </div>

      {/* Custom CSS added to global styles */}
    </section>
  );
};

export default Hero;

