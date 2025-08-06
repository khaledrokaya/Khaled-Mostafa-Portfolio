import React from 'react';
import { Badge } from '@/components/ui/badge';

const Skills: React.FC = () => {
  const technicalSkills = [
    { name: 'React.js', level: 'Advanced', color: 'bg-blue-100 text-blue-800' },
    { name: 'Angular', level: 'Basics', color: 'bg-red-100 text-red-800' },
    { name: 'TypeScript', level: 'Advanced', color: 'bg-blue-100 text-blue-800' },
    { name: 'JavaScript (ES6+)', level: 'Expert', color: 'bg-yellow-100 text-yellow-800' },
    { name: 'Tailwind CSS', level: 'Expert', color: 'bg-cyan-100 text-cyan-800' },
    { name: 'CSS3', level: 'Expert', color: 'bg-blue-100 text-blue-800' },
    { name: 'HTML5', level: 'Expert', color: 'bg-orange-100 text-orange-800' },
    { name: 'Git & GitHub', level: 'Advanced', color: 'bg-gray-100 text-gray-800' },
    { name: 'RESTful APIs', level: 'Advanced', color: 'bg-green-100 text-green-800' },
    { name: 'Axios', level: 'Advanced', color: 'bg-purple-100 text-purple-800' },
  ];

  const softSkills = [
    'Strong Communication with Clients & Teams',
    'Problem Solving',
    'Adaptability to New Tools',
    'Attention to UI/UX Details',
    'Time Management',
    'Critical Thinking',
    'Team Collaboration',
    'Project Management',
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              My <span className="text-blue-600">Skills</span>
            </h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              A comprehensive overview of my technical expertise and soft skills
              that enable me to deliver exceptional web solutions.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Technical Skills */}
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-8 text-center lg:text-left">
                Technical Skills
              </h3>

              <div className="space-y-6">
                {technicalSkills.map((skill, index) => (
                  <div key={index} className="group">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-lg font-medium text-gray-900">
                        {skill.name}
                      </span>
                      <Badge className={skill.color}>
                        {skill.level}
                      </Badge>
                    </div>

                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className={`h-2 rounded-full transition-all duration-1000 ease-out ${skill.level === 'Expert'
                          ? 'bg-blue-600 w-full'
                          : skill.level === 'Advanced'
                            ? 'bg-blue-500 w-4/5'
                            : skill.level === 'Basics'
                              ? 'bg-blue-400 w-2/5'
                              : 'bg-blue-400 w-3/5'
                          }`}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Soft Skills */}
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-8 text-center lg:text-left">
                Soft Skills
              </h3>

              <div className="grid grid-cols-1 gap-4">
                {softSkills.map((skill, index) => (
                  <div
                    key={index}
                    className="flex items-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 group"
                  >
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-4 group-hover:scale-150 transition-transform duration-300"></div>
                    <span className="text-gray-700 font-medium">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Skills;

