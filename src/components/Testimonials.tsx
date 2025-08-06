import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Quote, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: 'Ahmed Hossam',
      role: 'Product Manager',
      company: 'Hope Givers',
      image: '/api/placeholder/80/80',
      rating: 5,
      quote: 'Khaled delivered the front-end of our dashboard with pixel-perfect precision. He truly understood our vision and transformed it into a beautiful, functional interface. His attention to detail and technical expertise made our project a huge success.',
      color: 'from-blue-500 to-blue-600'
    },
    {
      name: 'Nouran Fathy',
      role: 'Project Owner',
      company: 'Freelance Client',
      image: '/api/placeholder/80/80',
      rating: 5,
      quote: 'Very organized, quick communication, and incredible UI/UX work. We were able to launch faster than expected thanks to Khaled\'s efficiency and professionalism. I highly recommend him for any frontend development project.',
      color: 'from-green-500 to-green-600'
    },
    {
      name: 'Fady Nabil',
      role: 'Senior Developer',
      company: 'Tech Startup',
      image: '/api/placeholder/80/80',
      rating: 5,
      quote: 'One of the best freelancers I\'ve worked with. His code is clean, reusable, and modern. Khaled follows best practices and delivers maintainable solutions that scale well. A true professional in every aspect.',
      color: 'from-purple-500 to-purple-600'
    }
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  // Auto-advance testimonials
  useEffect(() => {
    const interval = setInterval(nextTestimonial, 5000);
    return () => clearInterval(interval);
  }, []);

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section id="testimonials" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Client <span className="text-blue-600">Testimonials</span>
            </h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              What my clients say about working with me and the results we've achieved together.
            </p>
          </div>

          {/* Testimonial Carousel */}
          <div className="relative">
            {/* Main Testimonial Card */}
            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 relative overflow-hidden">
              {/* Background Gradient */}
              <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${currentTestimonial.color} opacity-10 rounded-full transform translate-x-16 -translate-y-16`}></div>
              
              {/* Quote Icon */}
              <div className="absolute top-6 left-6">
                <Quote className="h-8 w-8 text-blue-600 opacity-20" />
              </div>

              <div className="relative z-10">
                {/* Rating */}
                <div className="flex justify-center mb-6">
                  {[...Array(currentTestimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>

                {/* Quote */}
                <blockquote className="text-lg md:text-xl text-gray-700 text-center leading-relaxed mb-8">
                  "{currentTestimonial.quote}"
                </blockquote>

                {/* Client Info */}
                <div className="flex items-center justify-center">
                  <div className="flex items-center">
                    {/* Avatar */}
                    <div className={`w-16 h-16 bg-gradient-to-r ${currentTestimonial.color} rounded-full flex items-center justify-center mr-4`}>
                      <span className="text-white font-bold text-lg">
                        {currentTestimonial.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    
                    {/* Details */}
                    <div className="text-left">
                      <h4 className="font-semibold text-gray-900 text-lg">
                        {currentTestimonial.name}
                      </h4>
                      <p className="text-gray-600">
                        {currentTestimonial.role}
                      </p>
                      <p className="text-blue-600 text-sm font-medium">
                        {currentTestimonial.company}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation Buttons */}
            <div className="flex justify-center items-center mt-8 space-x-4">
              <Button
                onClick={prevTestimonial}
                variant="outline"
                size="icon"
                className="rounded-full border-gray-300 hover:bg-blue-50 hover:border-blue-300"
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>

              {/* Dots Indicator */}
              <div className="flex space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                      index === currentIndex ? 'bg-blue-600' : 'bg-gray-300'
                    }`}
                  />
                ))}
              </div>

              <Button
                onClick={nextTestimonial}
                variant="outline"
                size="icon"
                className="rounded-full border-gray-300 hover:bg-blue-50 hover:border-blue-300"
              >
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="mt-16 text-center">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h4 className="text-xl font-semibold text-gray-900 mb-4">
                Ready to Join My Happy Clients?
              </h4>
              <p className="text-gray-600 mb-6">
                Let's work together to create something amazing that exceeds your expectations.
              </p>
              <Button
                onClick={() => {
                  const element = document.getElementById('contact');
                  if (element) element.scrollIntoView({ behavior: 'smooth' });
                }}
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg transition-colors duration-300"
              >
                Start Your Project
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

