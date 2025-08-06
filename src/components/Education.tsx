import { GraduationCap, Calendar, MapPin, BookOpen, Award, Users } from 'lucide-react';

const Education = () => {
  const education = [
    {
      degree: "Bachelor's Degree in Computer Science",
      institution: "Tanta University",
      location: "Tanta, Al Gharbiyah, Egypt",
      period: "2022 - 2026",
      status: "Currently student",
      description: "Studying core computer science concepts including algorithms, data structures, software engineering, and web development.",
      highlights: [
        "Data Structures & Algorithms",
        "Software Engineering",
        "Database Management",
        "Web Development",
        "Object-Oriented Programming",
        "Computer Networks"
      ],
      gpa: "Excellent",
      icon: <GraduationCap className="h-8 w-8 text-blue-600" />
    }
  ];

  const achievements = [
    {
      icon: <Award className="h-6 w-6 text-yellow-600" />,
      title: "Academic Excellence",
      description: "Maintaining excellent academic performance"
    },
    {
      icon: <BookOpen className="h-6 w-6 text-green-600" />,
      title: "Self-Learning",
      description: "Continuously learning new technologies and frameworks"
    },
    {
      icon: <Users className="h-6 w-6 text-purple-600" />,
      title: "Team Projects",
      description: "Collaborative work on various academic projects"
    }
  ];

  const skills = [
    "Computer Science Fundamentals",
    "Algorithm Design & Analysis",
    "Software Development Life Cycle",
    "Database Design & Management",
    "System Analysis & Design",
    "Research & Problem Solving"
  ];

  return (
    <section id="education" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              My <span className="text-blue-600">Education</span>
            </h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Academic journey and continuous learning in computer science and software development
            </p>
          </div>

          {/* Education Cards */}
          <div className="space-y-8 mb-16">
            {education.map((edu, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
              >
                <div className="p-8">
                  <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                    {/* Icon and Status */}
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                        {edu.icon}
                      </div>
                      <span className="inline-block px-3 py-1 bg-green-100 text-green-800 text-sm font-medium rounded-full">
                        {edu.status}
                      </span>
                    </div>

                    {/* Main Content */}
                    <div className="flex-grow">
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">
                        {edu.degree}
                      </h3>

                      <div className="flex flex-wrap gap-4 mb-4 text-gray-600">
                        <div className="flex items-center">
                          <GraduationCap className="h-4 w-4 mr-2" />
                          <span className="font-medium">{edu.institution}</span>
                        </div>
                        <div className="flex items-center">
                          <MapPin className="h-4 w-4 mr-2" />
                          <span>{edu.location}</span>
                        </div>
                        <div className="flex items-center">
                          <Calendar className="h-4 w-4 mr-2" />
                          <span>{edu.period}</span>
                        </div>
                      </div>

                      <p className="text-gray-700 mb-6 leading-relaxed">
                        {edu.description}
                      </p>

                      {/* Academic Performance */}
                      <div className="mb-6">
                        <h4 className="text-lg font-semibold text-gray-900 mb-2">Academic Performance</h4>
                        <span className="inline-block px-4 py-2 bg-blue-100 text-blue-800 rounded-lg font-medium">
                          {edu.gpa}
                        </span>
                      </div>

                      {/* Course Highlights */}
                      <div>
                        <h4 className="text-lg font-semibold text-gray-900 mb-3">Key Subjects</h4>
                        <div className="flex flex-wrap gap-2">
                          {edu.highlights.map((highlight, idx) => (
                            <span
                              key={idx}
                              className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full hover:bg-blue-100 hover:text-blue-700 transition-colors"
                            >
                              {highlight}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Academic Skills & Achievements */}
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Academic Skills */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <BookOpen className="h-6 w-6 text-blue-600 mr-3" />
                Academic Skills
              </h3>
              <div className="space-y-3">
                {skills.map((skill, index) => (
                  <div key={index} className="flex items-center">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                    <span className="text-gray-700">{skill}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Achievements */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <Award className="h-6 w-6 text-yellow-600 mr-3" />
                Academic Achievements
              </h3>
              <div className="space-y-6">
                {achievements.map((achievement, index) => (
                  <div key={index} className="flex items-start">
                    <div className="flex-shrink-0 w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center mr-4">
                      {achievement.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">
                        {achievement.title}
                      </h4>
                      <p className="text-gray-600 text-sm">
                        {achievement.description}
                      </p>
                    </div>
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

export default Education;
