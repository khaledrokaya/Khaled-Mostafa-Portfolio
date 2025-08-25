import React from 'react';
import { Code, Zap, Users, Target } from 'lucide-react';

const About: React.FC = () => {
  const highlights = [
    {
      icon: <Code className="h-8 w-8 text-blue-600" />,
      title: "Clean Code",
      description: "Writing maintainable, scalable, and well-structured code following best practices."
    },
    {
      icon: <Zap className="h-8 w-8 text-green-600" />,
      title: "Performance",
      description: "Optimizing applications for speed, efficiency, and excellent user experience."
    },
    {
      icon: <Users className="h-8 w-8 text-purple-600" />,
      title: "Collaboration",
      description: "Strong communication skills and ability to work effectively with teams."
    },
    {
      icon: <Target className="h-8 w-8 text-orange-600" />,
      title: "Goal-Oriented",
      description: "Focused on delivering solutions that meet business objectives and user needs."
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              About <span className="text-blue-600">Me</span>
            </h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Text Content */}
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                Passionate Front-End Developer
              </h3>

              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  I am a Front-End Developer with a strong background in building modern, responsive,
                  and scalable web applications. I specialize in React.js, Angular, TypeScript, and
                  Tailwind CSS, with a focus on clean code, performance, and user-centered design.
                </p>

                <p>
                  Over the past few years, I have developed a variety of front-end solutions, including
                  e-commerce platforms, admin dashboards, and custom content management systems. My work
                  is guided by best practices in architecture, accessibility, and responsive design,
                  ensuring that each product is efficient, maintainable, and visually consistent across
                  all devices.
                </p>

                <p>
                  I value code readability, reusability, and long-term maintainability. I work comfortably
                  in both independent and collaborative environments, and I am experienced in Agile workflows,
                  version control with Git, and integration with RESTful APIs. I regularly use modern libraries
                  and frameworks such as React Hook Form, Redux, React Query, and Material UI to enhance
                  functionality and improve user experience.
                </p>

                <p>
                  Currently pursuing my Bachelor's degree in Computer Science at Tanta University while
                  actively working as a freelance frontend developer, delivering high-quality solutions
                  to clients worldwide. I'm always looking for new challenges where I can apply my skills
                  and grow as a developer.
                </p>
              </div>
            </div>

            {/* Right Column - Highlights */}
            <div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {highlights.map((highlight, index) => (
                  <div
                    key={index}
                    className="p-6 bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
                  >
                    <div className="mb-4">{highlight.icon}</div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">
                      {highlight.title}
                    </h4>
                    <p className="text-gray-600 text-sm">
                      {highlight.description}
                    </p>
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

export default About;

