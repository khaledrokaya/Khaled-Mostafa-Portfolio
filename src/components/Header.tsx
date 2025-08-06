import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Update active section based on scroll position
      const sections = ['hero', 'about', 'education', 'skills', 'experience', 'services', 'projects', 'contact'];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom > 100;
        }
        return false;
      });

      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '/', section: 'hero' },
    { name: 'About', href: '#about', section: 'about' },
    { name: 'Education', href: '#education', section: 'education' },
    { name: 'Skills', href: '#skills', section: 'skills' },
    { name: 'Experience', href: '#experience', section: 'experience' },
    { name: 'Services', href: '#services', section: 'services' },
    { name: 'Projects', href: '#projects', section: 'projects' },
    { name: 'Contact', href: '#contact', section: 'contact' },
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled
        ? 'bg-white/95 backdrop-blur-md shadow-xl border-b border-gray-200/50'
        : 'bg-transparent'
        }`}
    >
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Enhanced Logo */}
          <Link
            to="/"
            className={`text-2xl lg:text-3xl font-bold transition-all duration-300 group ${isScrolled ? 'text-gray-900' : 'text-white'
              } hover:scale-105`}
          >
            <span className="relative">
              Khaled
              <span className="text-blue-600">.</span>
              <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 transition-all duration-300 group-hover:w-full"></div>
            </span>
          </Link>

          {/* Enhanced Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.section)}
                className={`relative px-4 py-2 rounded-xl font-medium transition-all duration-300 group ${activeSection === item.section
                  ? isScrolled
                    ? 'text-blue-600 bg-blue-50'
                    : 'text-blue-300 bg-white/10'
                  : isScrolled
                    ? 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                    : 'text-gray-300 hover:text-white hover:bg-white/10'
                  }`}
              >
                {item.name}
                {activeSection === item.section && (
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-blue-600 rounded-full"></div>
                )}
              </button>
            ))}
          </div>

          {/* Enhanced CTA Button */}
          <div className="hidden lg:block">
            <Button
              onClick={() => scrollToSection('contact')}
              className={`group relative overflow-hidden px-6 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 ${isScrolled
                ? 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg hover:shadow-xl'
                : 'bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 border border-white/20'
                }`}
            >
              <span className="relative z-10 flex items-center">
                Get In Touch
                <ChevronRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </span>
            </Button>
          </div>

          {/* Enhanced Mobile Menu Button */}
          <button
            className={`lg:hidden p-2 rounded-xl transition-all duration-300 ${isScrolled
              ? 'text-gray-900 hover:bg-gray-100'
              : 'text-white hover:bg-white/10'
              }`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <div className="relative w-6 h-6">
              <div
                className={`absolute inset-0 transition-all duration-300 ${isMenuOpen ? 'rotate-45 opacity-0' : 'rotate-0 opacity-100'
                  }`}
              >
                <Menu className="w-6 h-6" />
              </div>
              <div
                className={`absolute inset-0 transition-all duration-300 ${isMenuOpen ? 'rotate-0 opacity-100' : '-rotate-45 opacity-0'
                  }`}
              >
                <X className="w-6 h-6" />
              </div>
            </div>
          </button>
        </div>

        {/* Enhanced Mobile Navigation */}
        <div
          className={`lg:hidden transition-all duration-500 overflow-hidden ${isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
            }`}
        >
          <div className="py-4 px-2 bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl mt-2 border border-gray-200/50">
            <div className="space-y-1">
              {navItems.map((item, index) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.section)}
                  className={`block w-full text-left px-4 py-3 rounded-xl font-medium transition-all duration-300 transform hover:scale-105 ${activeSection === item.section
                    ? 'text-blue-600 bg-blue-50'
                    : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                    }`}
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <div className="flex items-center">
                    <span>{item.name}</span>
                    {activeSection === item.section && (
                      <div className="ml-auto w-2 h-2 bg-blue-600 rounded-full animate-pulse"></div>
                    )}
                  </div>
                </button>
              ))}
            </div>
            <div className="mt-4 pt-4 border-t border-gray-200">
              <Button
                onClick={() => scrollToSection('contact')}
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-3 rounded-xl font-semibold transition-all duration-300"
              >
                Get In Touch
              </Button>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;

