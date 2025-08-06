import React, { useState } from 'react';
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Github,
  Send,
  CheckCircle,
  AlertCircle
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus('idle'), 5000);
    }
  };

  const contactInfo = [
    {
      icon: <Phone className="h-6 w-6" />,
      label: 'Phone',
      value: '+201121370379',
      href: 'tel:+201121370379',
      color: 'text-green-600'
    },
    {
      icon: <Mail className="h-6 w-6" />,
      label: 'Email',
      value: 'khaled.mustafa.jr@gmail.com',
      href: 'mailto:khaled.mustafa.jr@gmail.com',
      color: 'text-blue-600'
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      label: 'Location',
      value: 'Tanta, Al Gharbiyah, Egypt',
      href: 'https://maps.app.goo.gl/fxbVuMp9yQAtmR6T9',
      color: 'text-red-600'
    },
    {
      icon: <Linkedin className="h-6 w-6" />,
      label: 'LinkedIn',
      value: 'khaled-mostafa-jr',
      href: 'https://www.linkedin.com/in/khaled-mostafa-jr',
      color: 'text-blue-700'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Get In <span className="text-blue-600">Touch</span>
            </h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Ready to start your next project? Let's discuss how I can help bring
              your ideas to life with modern, responsive web solutions.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-8">
                Let's Connect
              </h3>

              <div className="space-y-6 mb-8">
                {contactInfo.map((info, index) => (
                  <a
                    key={index}
                    href={info.href}
                    className="flex items-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 group"
                  >
                    <div className={`${info.color} mr-4 group-hover:scale-110 transition-transform duration-300`}>
                      {info.icon}
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 font-medium">{info.label}</p>
                      <p className="text-gray-900 font-semibold">{info.value}</p>
                    </div>
                  </a>
                ))}
              </div>

              {/* Social Links */}
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-4">
                  Follow Me
                </h4>
                <div className="flex space-x-4">
                  <a
                    href="https://www.linkedin.com/in/khaled-mostafa-jr"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300 transform hover:scale-105"
                  >
                    <Linkedin className="h-5 w-5" />
                  </a>
                  <a
                    href="https://github.com/kahledrokaya"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition-colors duration-300 transform hover:scale-105"
                  >
                    <Github className="h-5 w-5" />
                  </a>
                  <a
                    href="mailto:khaled.mustafa.jr@gmail.com"
                    className="p-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors duration-300 transform hover:scale-105"
                  >
                    <Mail className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <div className="bg-white rounded-xl shadow-lg p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Send Me a Message
                </h3>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        Your Name *
                      </label>
                      <Input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <Input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                      Subject *
                    </label>
                    <Input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="w-full"
                      placeholder="Project Inquiry"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Message *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={5}
                      className="w-full"
                      placeholder="Tell me about your project requirements..."
                    />
                  </div>

                  {/* Submit Status */}
                  {submitStatus === 'success' && (
                    <div className="flex items-center p-4 bg-green-50 border border-green-200 rounded-lg">
                      <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
                      <span className="text-green-800">Message sent successfully! I'll get back to you soon.</span>
                    </div>
                  )}

                  {submitStatus === 'error' && (
                    <div className="flex items-center p-4 bg-red-50 border border-red-200 rounded-lg">
                      <AlertCircle className="h-5 w-5 text-red-600 mr-3" />
                      <span className="text-red-800">Failed to send message. Please try again.</span>
                    </div>
                  )}

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 text-lg rounded-lg transition-colors duration-300 disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <div className="flex items-center justify-center">
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                        Sending...
                      </div>
                    ) : (
                      <div className="flex items-center justify-center">
                        <Send className="h-5 w-5 mr-2" />
                        Send Message
                      </div>
                    )}
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

