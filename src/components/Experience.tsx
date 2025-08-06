import React from 'react';
import { Calendar, MapPin, Briefcase } from 'lucide-react';

const Experience: React.FC = () => {
  const experience = {
    company: 'Mostaql.com',
    position: 'Independent Frontend Developer',
    duration: 'January 2023 - Present',
    period: '2 years 8 months',
    location: 'Remote',
    description: `As a front-end developer at Mostaql.com, I build seamless, responsive, and scalable user interfaces. I specialize in transforming ideas into clean, maintainable digital experiences using modern technologies like React and Tailwind CSS. My work emphasizes clarity, performance, and alignment with product goals, whether creating from scratch or enhancing existing systems. I balance technical structure and visual design to deliver intuitive, efficient, and long-term interfaces.`,
    achievements: [
      'Developed 15+ responsive web applications using React.js and Angular',
      'Improved application performance by 40% through code optimization',
      'Collaborated with cross-functional teams to deliver projects on time',
      'Implemented modern UI/UX designs with pixel-perfect precision',
      'Maintained 98% client satisfaction rate across all projects',
      'Built reusable component libraries for faster development cycles'
    ]
  };

  return (
    <section id="experience" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              My <span className="text-blue-600">Experience</span>
            </h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Professional journey in frontend development, delivering high-quality 
              solutions and exceptional user experiences.
            </p>
          </div>

          {/* Experience Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-blue-200"></div>
            
            {/* Experience Item */}
            <div className="relative flex items-start">
              {/* Timeline Dot */}
              <div className="flex-shrink-0 w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center shadow-lg z-10">
                <Briefcase className="h-8 w-8 text-white" />
              </div>
              
              {/* Content */}
              <div className="ml-8 flex-1">
                <div className="bg-white border border-gray-200 rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
                  {/* Header */}
                  <div className="mb-6">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      {experience.position}
                    </h3>
                    <h4 className="text-xl text-blue-600 font-semibold mb-4">
                      {experience.company}
                    </h4>
                    
                    {/* Meta Information */}
                    <div className="flex flex-wrap gap-4 text-gray-600 mb-4">
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-2" />
                        <span className="text-sm">{experience.duration}</span>
                      </div>
                      <div className="flex items-center">
                        <MapPin className="h-4 w-4 mr-2" />
                        <span className="text-sm">{experience.location}</span>
                      </div>
                      <div className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                        {experience.period}
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <div className="mb-6">
                    <p className="text-gray-700 leading-relaxed">
                      {experience.description}
                    </p>
                  </div>

                  {/* Key Achievements */}
                  <div>
                    <h5 className="text-lg font-semibold text-gray-900 mb-4">
                      Key Achievements:
                    </h5>
                    <ul className="space-y-3">
                      {experience.achievements.map((achievement, index) => (
                        <li key={index} className="flex items-start">
                          <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <span className="text-gray-700">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="mt-16 text-center">
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-8">
              <h4 className="text-xl font-semibold text-gray-900 mb-4">
                Ready to Work Together?
              </h4>
              <p className="text-gray-600 mb-6">
                I'm always excited to take on new challenges and collaborate on innovative projects.
              </p>
              <button
                onClick={() => {
                  const element = document.getElementById('contact');
                  if (element) element.scrollIntoView({ behavior: 'smooth' });
                }}
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium transition-colors duration-300"
              >
                Let's Connect
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;

