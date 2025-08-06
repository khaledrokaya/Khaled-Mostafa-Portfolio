import React from 'react';
import { ExternalLink, Github, Code, Palette, Zap, Shield, Eye, Layers } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const Projects: React.FC = () => {
  const projects = [
    {
      title: 'Hope Givers – Charity Donation Platform',
      role: 'Front-End Developer',
      description: 'Hope Givers is a full-featured charity donation platform that connects verified charities with donors and individuals in need. It ensures transparent, secure, and impactful giving experiences.',
      image: '/hope-givers.png',
      technologies: ['React.js', 'TypeScript', 'Tailwind CSS', 'Vite'],
      features: [
        { icon: <Layers className="h-4 w-4" />, text: 'SPA Architecture: Built as a modern Single Page Application using React + TypeScript' },
        { icon: <Palette className="h-4 w-4" />, text: 'Responsive UI: Crafted with Material Tailwind and custom Tailwind components' },
        { icon: <Shield className="h-4 w-4" />, text: 'Smart Forms: Validated and managed using React Hook Form & Yup' },
        { icon: <Zap className="h-4 w-4" />, text: 'User Feedback: Real-time toast notifications for better UX' },
        { icon: <Shield className="h-4 w-4" />, text: 'Protected Routing: Secured access using React Router' },
        { icon: <Eye className="h-4 w-4" />, text: 'Intersection Observer: Optimized lazy-loading of content' }
      ],
      liveDemo: 'https://hope-givers.vercel.app/',
      github: 'https://github.com/MAMAMIA282004/Advance_Se',
      color: 'from-blue-500 to-purple-600'
    },
    {
      title: 'Free Mentor – Free Online Course Aggregator',
      role: 'Front-End Developer',
      description: 'Free Mentor is a platform that curates the best free courses from Udemy and Coursera to help learners find high-quality educational content in one place.',
      image: '/free-mentor.png',
      technologies: ['HTML', 'CSS', 'Bootstrap', 'Node.js'],
      features: [
        { icon: <Code className="h-4 w-4" />, text: 'Course Filtering: Easily find suitable courses using filters like difficulty level, duration, and topic' },
        { icon: <Layers className="h-4 w-4" />, text: 'Organized Categories: Browse courses grouped by programming technology for faster access' },
        { icon: <Palette className="h-4 w-4" />, text: 'Fully Responsive: Optimized for all devices—desktop, tablet, and mobile' },
        { icon: <Zap className="h-4 w-4" />, text: 'Continuously Updated: Course library is regularly updated to ensure access to the latest resources' }
      ],
      liveDemo: 'https://freementor.onrender.com/',
      github: 'https://github.com/khaledrokaya/FreeMentor',
      color: 'from-green-500 to-teal-600'
    }
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Featured <span className="text-blue-600">Projects</span>
            </h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Showcase of my recent work, demonstrating expertise in modern web technologies
              and user-centered design principles.
            </p>
          </div>

          {/* Projects */}
          <div className="space-y-16">
            {projects.map((project, index) => (
              <div
                key={index}
                className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                  }`}
              >
                {/* Project Image */}
                <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <div className="relative group">
                    <div className={`absolute inset-0 bg-gradient-to-r ${project.color} rounded-lg transform rotate-3 group-hover:rotate-6 transition-transform duration-300`}></div>
                    <div className="relative bg-white rounded-lg shadow-xl overflow-hidden">
                      <div className="aspect-video bg-gray-100 overflow-hidden relative">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-300"
                          onError={(e) => {
                            const target = e.target as HTMLImageElement;
                            target.style.display = 'none';
                            const fallback = target.nextElementSibling as HTMLElement;
                            if (fallback) fallback.style.display = 'flex';
                          }}
                        />
                        <div className={`absolute inset-0 bg-gradient-to-r ${project.color} rounded-lg hidden items-center justify-center`}>
                          <div className="text-white text-center">
                            <div className="w-16 h-16 mx-auto mb-4 bg-white/20 rounded-full flex items-center justify-center">
                              <Code className="h-8 w-8" />
                            </div>
                            <p className="font-medium">{project.title}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>                {/* Project Content */}
                <div className={`${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                  <div className="space-y-6">
                    {/* Project Header */}
                    <div>
                      <Badge className="mb-4 bg-blue-100 text-blue-800">
                        {project.role}
                      </Badge>
                      <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                        {project.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {project.description}
                      </p>
                    </div>

                    {/* Technologies */}
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-3">
                        Tech Stack:
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, techIndex) => (
                          <Badge
                            key={techIndex}
                            variant="outline"
                            className="border-blue-200 text-blue-700"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Key Features */}
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-4">
                        Key Features:
                      </h4>
                      <ul className="space-y-3">
                        {project.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-start">
                            <div className="text-blue-600 mr-3 mt-0.5">
                              {feature.icon}
                            </div>
                            <span className="text-gray-700 text-sm">
                              {feature.text}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Project Links */}
                    <div className="flex flex-wrap gap-4 pt-4">
                      <Button
                        asChild
                        className="bg-blue-600 hover:bg-blue-700 text-white"
                      >
                        <a
                          href={project.liveDemo}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <ExternalLink className="h-4 w-4 mr-2" />
                          Live Demo
                        </a>
                      </Button>
                      <Button
                        asChild
                        variant="outline"
                        className="border-gray-300 hover:bg-gray-50"
                      >
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Github className="h-4 w-4 mr-2" />
                          View Code
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;

