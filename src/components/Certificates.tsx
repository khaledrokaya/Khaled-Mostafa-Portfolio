import React from 'react';
import { Award, Calendar, Building, CheckCircle } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

const Certificates: React.FC = () => {
  const certificates = [
    {
      title: 'JavaScript Certificate',
      organization: 'MaharaTech by ITI',
      organizationFull: 'Information Technology Institute (ITI)',
      date: '2023',
      type: 'Professional Certificate',
      description: 'Completed a comprehensive JavaScript course by the Information Technology Institute (ITI) through MaharaTech.',
      topics: [
        'Core JavaScript concepts (variables, data types, functions, scope)',
        'DOM manipulation, events, and browser interaction',
        'Modern ES6+ features and modular code',
        'Practical exercises for dynamic front-end development'
      ],
      outcome: 'Gained strong JavaScript fundamentals essential for building interactive web applications.',
      color: 'from-yellow-500 to-orange-600',
      icon: <Award className="h-8 w-8 text-white" />
    },
    {
      title: 'MEAN Stack Training',
      organization: 'NTI',
      organizationFull: 'National Telecommunication Institute',
      date: '2023',
      type: 'Intensive Training Program',
      description: 'Completed an intensive training program in full-stack web development using the MEAN Stack (MongoDB, Express.js, Angular, Node.js).',
      topics: [
        'Building RESTful APIs and connecting with MongoDB',
        'Front-end development with Angular components and services',
        'Authentication, routing, and secure data handling',
        'End-to-end project development from backend to frontend'
      ],
      outcome: 'Acquired hands-on experience building scalable full-stack web apps.',
      color: 'from-green-500 to-teal-600',
      icon: <Award className="h-8 w-8 text-white" />
    }
  ];

  return (
    <section id="certificates" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Certificates & <span className="text-blue-600">Training</span>
            </h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Continuous learning and professional development through recognized 
              institutions and comprehensive training programs.
            </p>
          </div>

          {/* Certificates Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {certificates.map((cert, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden"
              >
                {/* Certificate Header */}
                <div className={`bg-gradient-to-r ${cert.color} p-6 text-white`}>
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-3 bg-white/20 rounded-lg">
                      {cert.icon}
                    </div>
                    <Badge className="bg-white/20 text-white border-white/30">
                      {cert.type}
                    </Badge>
                  </div>
                  <h3 className="text-2xl font-bold mb-2">{cert.title}</h3>
                  <div className="flex items-center text-white/90">
                    <Building className="h-4 w-4 mr-2" />
                    <span className="font-medium">{cert.organization}</span>
                  </div>
                </div>

                {/* Certificate Content */}
                <div className="p-6">
                  {/* Meta Information */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center text-gray-600">
                      <Calendar className="h-4 w-4 mr-2" />
                      <span>{cert.date}</span>
                    </div>
                    <div className="text-sm text-gray-500">
                      {cert.organizationFull}
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-700 mb-6 leading-relaxed">
                    {cert.description}
                  </p>

                  {/* Course Topics */}
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-gray-900 mb-4">
                      Course Covered:
                    </h4>
                    <ul className="space-y-2">
                      {cert.topics.map((topic, topicIndex) => (
                        <li key={topicIndex} className="flex items-start">
                          <CheckCircle className="h-4 w-4 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700 text-sm">{topic}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Outcome */}
                  <div className="bg-gray-50 rounded-lg p-4">
                    <h5 className="font-semibold text-gray-900 mb-2">Outcome:</h5>
                    <p className="text-gray-700 text-sm">{cert.outcome}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Learning Philosophy */}
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-8 text-center">
            <div className="max-w-3xl mx-auto">
              <h4 className="text-2xl font-bold text-gray-900 mb-4">
                Commitment to Continuous Learning
              </h4>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Technology evolves rapidly, and I believe in staying ahead of the curve. 
                These certificates represent my dedication to mastering new skills and 
                technologies that enable me to deliver cutting-edge solutions to my clients.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Badge className="bg-blue-100 text-blue-800 px-4 py-2">
                  JavaScript Expert
                </Badge>
                <Badge className="bg-green-100 text-green-800 px-4 py-2">
                  Full-Stack Trained
                </Badge>
                <Badge className="bg-purple-100 text-purple-800 px-4 py-2">
                  MEAN Stack Certified
                </Badge>
                <Badge className="bg-orange-100 text-orange-800 px-4 py-2">
                  Continuous Learner
                </Badge>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certificates;

