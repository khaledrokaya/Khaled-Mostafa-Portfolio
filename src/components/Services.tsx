import React from 'react';
import { 
  Code, 
  Globe, 
  ShoppingCart, 
  Database, 
  Zap, 
  Layers,
  ArrowRight 
} from 'lucide-react';
import { Button } from '@/components/ui/button';

const Services: React.FC = () => {
  const services = [
    {
      icon: <Code className="h-12 w-12 text-blue-600" />,
      title: 'Custom Front-End Development',
      description: 'Build modern, responsive websites and applications using React or Angular with clean, maintainable code.',
      features: [
        'Responsive Design',
        'Modern UI/UX',
        'Cross-browser Compatibility',
        'Performance Optimization'
      ],
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: <Globe className="h-12 w-12 text-green-600" />,
      title: 'Full SPA/MPA Development',
      description: 'Create scalable web apps with client-side routing, dynamic content, and reusable architecture.',
      features: [
        'Single Page Applications',
        'Multi-page Applications',
        'Client-side Routing',
        'State Management'
      ],
      color: 'from-green-500 to-green-600'
    },
    {
      icon: <ShoppingCart className="h-12 w-12 text-purple-600" />,
      title: 'E-Commerce & Admin Dashboards',
      description: 'Develop feature-rich dashboards for admin panels, marketplaces, or store management systems.',
      features: [
        'Admin Panels',
        'E-commerce Platforms',
        'Data Visualization',
        'User Management'
      ],
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: <Database className="h-12 w-12 text-orange-600" />,
      title: 'API Integration & Data Handling',
      description: 'Connect front-end apps with secure, optimized API calls and efficient data management.',
      features: [
        'RESTful API Integration',
        'Data Fetching & Caching',
        'Error Handling',
        'Authentication Systems'
      ],
      color: 'from-orange-500 to-orange-600'
    },
    {
      icon: <Zap className="h-12 w-12 text-yellow-600" />,
      title: 'Performance Optimization & SEO',
      description: 'Improve loading speed, Core Web Vitals, and mobile responsiveness for better user experience.',
      features: [
        'Core Web Vitals',
        'SEO Optimization',
        'Mobile Responsiveness',
        'Loading Speed Enhancement'
      ],
      color: 'from-yellow-500 to-yellow-600'
    },
    {
      icon: <Layers className="h-12 w-12 text-indigo-600" />,
      title: 'Component Libraries & Design Systems',
      description: 'Build reusable component sets for scalability and consistency across your applications.',
      features: [
        'Reusable Components',
        'Design System Creation',
        'Style Guides',
        'Documentation'
      ],
      color: 'from-indigo-500 to-indigo-600'
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Services <span className="text-blue-600">Offered</span>
            </h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive frontend development services to bring your ideas to life 
              with modern technologies and best practices.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {services.map((service, index) => (
              <div
                key={index}
                className="group bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden"
              >
                {/* Card Header */}
                <div className={`bg-gradient-to-r ${service.color} p-6 text-white`}>
                  <div className="mb-4">{service.icon}</div>
                  <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                </div>

                {/* Card Content */}
                <div className="p-6">
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features List */}
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-700">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* CTA Button */}
                  <Button
                    onClick={() => {
                      const element = document.getElementById('contact');
                      if (element) element.scrollIntoView({ behavior: 'smooth' });
                    }}
                    variant="outline"
                    className="w-full group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-600 transition-all duration-300"
                  >
                    Get Started
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </Button>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="text-center">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h4 className="text-2xl font-bold text-gray-900 mb-4">
                Need a Custom Solution?
              </h4>
              <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                Every project is unique. Let's discuss your specific requirements and 
                create a tailored solution that perfectly fits your needs.
              </p>
              <Button
                onClick={() => {
                  const element = document.getElementById('contact');
                  if (element) element.scrollIntoView({ behavior: 'smooth' });
                }}
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg rounded-lg transition-colors duration-300"
              >
                Let's Talk About Your Project
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;

