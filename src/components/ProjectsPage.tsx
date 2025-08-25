import React, { useState } from 'react';
import { ExternalLink, Github, Code, Palette, Zap, Shield, Eye, Layers, Filter, Search, ArrowLeft, Lock } from 'lucide-react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Input } from './ui/input';
import { Link } from 'react-router-dom';

const ProjectsPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const projects = [
    {
      title: 'Talabat Clone – Food Delivery Platform',
      role: 'Full-Stack Developer',
      description: 'A comprehensive food delivery platform inspired by Talabat, featuring restaurant management, order tracking, and seamless user experience for customers, restaurants, and delivery personnel.',
      image: '/talabat.png',
      category: 'Food Delivery',
      technologies: ['Angular', 'Node.js', 'Express.js', 'MongoDB', 'Tailwind CSS'],
      features: [
        { icon: <Layers className="h-4 w-4" />, text: 'Multi-User System: Separate dashboards for customers, restaurants, and delivery drivers' },
        { icon: <Zap className="h-4 w-4" />, text: 'Real-time Tracking: Live order status updates and delivery tracking' },
        { icon: <Shield className="h-4 w-4" />, text: 'Secure Payments: Integrated payment gateway with secure transactions' },
        { icon: <Palette className="h-4 w-4" />, text: 'Responsive Design: Optimized for all devices with modern UI/UX' },
        { icon: <Code className="h-4 w-4" />, text: 'Restaurant Management: Complete admin panel for menu and order management' },
        { icon: <Eye className="h-4 w-4" />, text: 'Advanced Filtering: Search by cuisine, price, rating, and location' }
      ],
      liveDemo: 'https://talabat-clone.vercel.app/',
      github: 'https://github.com/khaledrokaya/Talabat-Clone',
      color: 'from-blue-500 to-purple-600',
      year: '2025',
      status: 'Completed'
    },
    {
      title: 'Hope Givers – Charity Donation Platform',
      role: 'Front-End Developer',
      description: 'Hope Givers is a full-featured charity donation platform that connects verified charities with donors and individuals in need. It ensures transparent, secure, and impactful giving experiences.',
      image: '/hope-givers.png',
      technologies: ['React.js', 'TypeScript', 'Tailwind CSS', 'Vite', 'Material Tailwind', 'React Hook Form', 'Yup'],
      category: 'Web Application',
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
      color: 'from-blue-500 to-purple-600',
      year: '2025',
      status: 'Completed'
    },
    {
      title: 'Free Mentor – Free Online Course Aggregator',
      role: 'Front-End Developer',
      description: 'Free Mentor is a platform that curates the best free courses from Udemy and Coursera to help learners find high-quality educational content in one place.',
      image: '/free-mentor.png',
      technologies: ['HTML5', 'CSS3', 'Bootstrap', 'Node.js', 'Express.js', 'JavaScript'],
      category: 'Educational Platform',
      features: [
        { icon: <Code className="h-4 w-4" />, text: 'Course Filtering: Easily find suitable courses using filters like difficulty level, duration, and topic' },
        { icon: <Layers className="h-4 w-4" />, text: 'Organized Categories: Browse courses grouped by programming technology for faster access' },
        { icon: <Palette className="h-4 w-4" />, text: 'Fully Responsive: Optimized for all devices—desktop, tablet, and mobile' },
        { icon: <Zap className="h-4 w-4" />, text: 'Continuously Updated: Course library is regularly updated to ensure access to the latest resources' }
      ],
      liveDemo: 'https://freementor.onrender.com/',
      github: 'https://github.com/khaledrokaya/FreeMentor',
      color: 'from-green-500 to-teal-600',
      year: '2023',
      status: 'Completed'
    },
    {
      title: 'Vide Store – Online Shopping Platform',
      role: 'Front-End Developer',
      description: 'A modern e-commerce platform with product catalog, shopping cart, user authentication, and responsive design. Features dynamic product filtering and search functionality.',
      image: '/vide-store.png',
      technologies: ['React.js', 'TypeScript', 'CSS3', 'HTML5', 'Tailwind CSS', 'Axios'],
      category: 'E-Commerce',
      features: [
        { icon: <Layers className="h-4 w-4" />, text: 'Product Catalog: Dynamic product listing with detailed views' },
        { icon: <Shield className="h-4 w-4" />, text: 'Shopping Cart: Add/remove items with persistent storage' },
        { icon: <Zap className="h-4 w-4" />, text: 'Search & Filter: Advanced product filtering and search' },
        { icon: <Palette className="h-4 w-4" />, text: 'Responsive Design: Mobile-first responsive layout' },
        { icon: <Eye className="h-4 w-4" />, text: 'User Experience: Intuitive navigation and clean interface' },
        { icon: <Code className="h-4 w-4" />, text: 'Modern JavaScript: ES6+ features and React hooks' }
      ],
      liveDemo: 'https://videstore.vercel.app/',
      github: 'https://github.com/khaledrokaya/Ecommerce',
      color: 'from-purple-500 to-pink-600',
      year: '2024',
      status: 'in-progress'
    },
    {
      title: 'Restaurants Management - Dashboard',
      role: 'Front-End Developer',
      description: 'The ultimate solution for managing your restaurant records efficiently with a dashboard. Streamline your operations, organize your data, and focus on what matters most.',
      image: '/restaurants.png',
      technologies: ['Angular', 'HTML5', 'CSS3', 'TypeScript', 'Bootstrap'],
      category: 'Dashboard',
      features: [
        { icon: <Lock className="h-4 w-4" />, text: 'Authentication & User Management: Secure user login and role-based access control' },
        { icon: <Layers className="h-4 w-4" />, text: 'Restaurant Management: Manage your restaurant details, menus, and orders seamlessly' },
        { icon: <Palette className="h-4 w-4" />, text: 'Modern User Interface: Intuitive and visually appealing design' },
        { icon: <Zap className="h-4 w-4" />, text: 'Technical Excellence: High-performance and scalable architecture' }
      ],
      liveDemo: 'https://restaurant-manager-lac.vercel.app/',
      github: 'https://github.com/khaledrokaya/Restaurant_Manager',
      color: 'from-orange-500 to-red-600',
      year: '2025',
      status: 'Completed'
    },
    {
      title: 'BeFit Landing Page',
      role: 'Front-End Developer',
      description: 'A modern, responsive, and highly optimized fitness landing page built with React & TypeScript. Features clean design, smooth transitions, and cross-browser compatibility.',
      image: '/BeFit.png',
      technologies: ['React.js', 'TypeScript', 'HTML5', 'CSS3', 'Sass', 'JavaScript'],
      category: 'Landing Page',
      features: [
        { icon: <Palette className="h-4 w-4" />, text: 'Responsive Design: Fully optimized for all screen sizes, from mobile to desktop' },
        { icon: <Zap className="h-4 w-4" />, text: 'High Performance: Lightweight assets and optimized code for fast loading times' },
        { icon: <Shield className="h-4 w-4" />, text: 'Cross-Browser Compatibility: Seamless functionality across Chrome, Firefox, Safari, and Edge' },
        { icon: <Layers className="h-4 w-4" />, text: 'Modern Styling: Clean, consistent styles with SCSS modularization' },
        { icon: <Eye className="h-4 w-4" />, text: 'Interactive Elements: Smooth transitions, animations, and hover effects' },
        { icon: <Code className="h-4 w-4" />, text: 'Maintainable Codebase: TypeScript and modular SCSS for easy extension' }
      ],
      liveDemo: 'https://be-fit-five-black.vercel.app/',
      github: 'https://github.com/khaledrokaya/BeFit',
      color: 'from-emerald-500 to-teal-600',
      year: '2024',
      status: 'Completed'
    },
    {
      title: 'Naturally Static Landing Page',
      role: 'Front-End Developer',
      description: 'A simple yet elegant static landing page built using fundamental web technologies - HTML, CSS & JavaScript. Lightweight, fast, and fully responsive.',
      image: '/Naturally.png',
      technologies: ['HTML5', 'CSS3', 'JavaScript'],
      category: 'Landing Page',
      features: [
        { icon: <Palette className="h-4 w-4" />, text: 'Responsive Design: Fully optimized for mobile, tablet, and desktop devices' },
        { icon: <Zap className="h-4 w-4" />, text: 'Lightweight and Fast: No external libraries or frameworks for quick load times' },
        { icon: <Eye className="h-4 w-4" />, text: 'Interactive Elements: JavaScript for smooth interactions and dynamic features' },
        { icon: <Shield className="h-4 w-4" />, text: 'Cross-Browser Compatibility: Tested and functional on all modern browsers' },
        { icon: <Code className="h-4 w-4" />, text: 'Customizable: Easy to modify HTML, CSS, and JavaScript for specific needs' },
        { icon: <Layers className="h-4 w-4" />, text: 'Clean Code: Well-structured and commented code for maintainability' }
      ],
      liveDemo: 'https://khaledrokaya.github.io/Naturally/',
      github: 'https://github.com/khaledrokaya/Naturally',
      color: 'from-green-500 to-emerald-600',
      year: '2024',
      status: 'Completed'
    },
  ];

  const categories = ['All', 'Food Delivery', 'E-Commerce', 'Educational Platform', 'Landing Page', 'Dashboard'];

  const filteredProjects = projects.filter(project => {
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.technologies.some(tech => tech.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = selectedCategory === 'All' || project.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Completed': return 'bg-green-100 text-green-800';
      case 'In Progress': return 'bg-blue-100 text-blue-800';
      case 'Planning': return 'bg-yellow-100 text-yellow-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="mb-12">
            <Link
              to="/"
              className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-6 transition-colors"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Home
            </Link>

            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">
              My <span className="text-blue-600">Projects</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl">
              A comprehensive showcase of my work in frontend development, featuring modern web applications,
              responsive designs, and innovative user experiences.
            </p>
          </div>

          {/* Filters and Search */}
          <div className="bg-white rounded-xl shadow-lg p-6 mb-12">
            <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
              {/* Search */}
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input
                  type="text"
                  placeholder="Search projects, technologies..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>

              {/* Category Filter */}
              <div className="flex items-center gap-2">
                <Filter className="h-4 w-4 text-gray-500" />
                <div className="flex flex-wrap gap-2">
                  {categories.map((category) => (
                    <Button
                      key={category}
                      variant={selectedCategory === category ? "default" : "outline"}
                      size="sm"
                      onClick={() => setSelectedCategory(category)}
                      className={selectedCategory === category ? "bg-blue-600 hover:bg-blue-700" : ""}
                    >
                      {category}
                    </Button>
                  ))}
                </div>
              </div>
            </div>

            {/* Results Count */}
            <div className="mt-4 pt-4 border-t border-gray-200">
              <p className="text-gray-600">
                Showing {filteredProjects.length} of {projects.length} projects
              </p>
            </div>
          </div>

          {/* Projects Grid */}
          <div className="grid lg:grid-cols-2 gap-12">
            {filteredProjects.map((project, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
              >
                {/* Project Image */}
                <div className="relative aspect-video bg-gray-100 overflow-hidden">
                  <div className={`absolute inset-0 opacity-10`}></div>
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      const fallback = target.nextElementSibling as HTMLElement;
                      if (fallback) fallback.style.display = 'flex';
                    }}
                  />
                  <div className={`absolute inset-0 bg-gradient-to-r ${project.color} hidden items-center justify-center`}>
                    <div className="text-white text-center">
                      <div className="w-16 h-16 mx-auto mb-4 bg-white/20 rounded-full flex items-center justify-center">
                        <Code className="h-8 w-8" />
                      </div>
                      <p className="font-medium">{project.title}</p>
                    </div>
                  </div>

                  {/* Status Badge */}
                  <div className="absolute top-4 right-4">
                    <Badge className={getStatusColor(project.status)}>
                      {project.status}
                    </Badge>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-8">
                  <div className="space-y-6">
                    {/* Project Header */}
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <Badge className="bg-blue-100 text-blue-800">
                          {project.role}
                        </Badge>
                        <span className="text-sm text-gray-500">{project.year}</span>
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3">
                        {project.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {project.description}
                      </p>
                    </div>

                    {/* Technologies */}
                    <div>
                      <h4 className="text-sm font-semibold text-gray-900 mb-3">
                        Tech Stack:
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, techIndex) => (
                          <Badge
                            key={techIndex}
                            variant="outline"
                            className="border-blue-200 text-blue-700 text-xs"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Key Features */}
                    <div>
                      <h4 className="text-sm font-semibold text-gray-900 mb-3">
                        Key Features:
                      </h4>
                      <ul className="space-y-2">
                        {project.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-start">
                            <div className="text-blue-600 mr-2 mt-0.5 flex-shrink-0">
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
                    <div className="flex gap-3 pt-4">
                      {project.liveDemo !== '#' && (
                        <Button
                          asChild
                          className="bg-blue-600 hover:bg-blue-700 text-white flex-1"
                          size="sm"
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
                      )}
                      {project.github !== '#' && (
                        <Button
                          asChild
                          variant="outline"
                          className="border-gray-300 hover:bg-gray-50 flex-1"
                          size="sm"
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
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Empty State */}
          {filteredProjects.length === 0 && (
            <div className="text-center py-16">
              <div className="w-24 h-24 mx-auto mb-6 bg-gray-100 rounded-full flex items-center justify-center">
                <Search className="h-12 w-12 text-gray-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">No projects found</h3>
              <p className="text-gray-600 mb-6">
                Try adjusting your search terms or filters to find what you're looking for.
              </p>
              <Button
                onClick={() => {
                  setSearchTerm('');
                  setSelectedCategory('All');
                }}
                variant="outline"
              >
                Clear Filters
              </Button>
            </div>
          )}

          {/* Contact CTA */}
          <div className="mt-20 bg-white rounded-2xl shadow-lg p-8 text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Have a Project in Mind?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              I'm always excited to work on new and challenging projects. Let's discuss how I can help bring your ideas to life.
            </p>
            <Link to="/#contact">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3">
                Get In Touch
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;
