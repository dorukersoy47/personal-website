'use client';

import { useEffect, useState, useRef } from 'react';

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface ContactInfo {
  icon: string;
  title: string;
  value: string;
  link: string | null;
}

interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

export default function Contact() {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // You can add email sending logic here
  };

  const contactInfo: ContactInfo[] = [
    {
      icon: "📧",
      title: "Email",
      value: "doruk@example.com",
      link: "mailto:doruk@example.com"
    },
    {
      icon: "📍",
      title: "Location",
      value: "Istanbul, Turkey",
      link: null
    },
    {
      icon: "📱",
      title: "Phone",
      value: "+90 (555) 123-4567",
      link: "tel:+905551234567"
    }
  ];

  const socialLinks: SocialLink[] = [
    {
      name: "GitHub",
      url: "https://github.com/yourusername",
      icon: "🐙"
    },
    {
      name: "LinkedIn",
      url: "https://linkedin.com/in/yourusername",
      icon: "💼"
    },
    {
      name: "Instagram",
      url: "https://instagram.com/yourusername",
      icon: "📸"
    }
  ];

  return (
    <section id="contact" ref={sectionRef} className="py-20 bg-gradient-to-br from-dark-gray via-deep-purple to-purple relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/3 w-96 h-96 bg-purple/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/3 w-80 h-80 bg-light-purple/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Get In <span className="bg-gradient-to-r from-light-purple to-accent bg-clip-text text-transparent">Touch</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Let's discuss your project and bring your ideas to life
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-gray/20 backdrop-blur-md p-8 rounded-2xl border border-purple/20">
              <h3 className="text-2xl font-bold text-white mb-6">Send a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-gray-300 mb-2 font-medium">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-gray/20 border border-purple/30 rounded-lg text-white placeholder-gray-400 focus:border-light-purple focus:outline-none transition-all duration-300"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-gray-300 mb-2 font-medium">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-gray/20 border border-purple/30 rounded-lg text-white placeholder-gray-400 focus:border-light-purple focus:outline-none transition-all duration-300"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="subject" className="block text-gray-300 mb-2 font-medium">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-gray/20 border border-purple/30 rounded-lg text-white placeholder-gray-400 focus:border-light-purple focus:outline-none transition-all duration-300"
                    placeholder="Project inquiry"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-gray-300 mb-2 font-medium">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-gray/20 border border-purple/30 rounded-lg text-white placeholder-gray-400 focus:border-light-purple focus:outline-none transition-all duration-300 resize-none"
                    placeholder="Tell me about your project..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-purple to-accent text-white font-semibold py-4 rounded-lg hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-purple/25"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              {/* Contact Info */}
              <div className="bg-gray/20 backdrop-blur-md p-8 rounded-2xl border border-purple/20">
                <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="flex items-center space-x-4">
                      <div className="text-2xl">{info.icon}</div>
                      <div>
                        <h4 className="text-white font-semibold">{info.title}</h4>
                        {info.link ? (
                          <a
                            href={info.link}
                            className="text-gray-300 hover:text-light-purple transition-colors duration-300"
                          >
                            {info.value}
                          </a>
                        ) : (
                          <p className="text-gray-300">{info.value}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Social Links */}
              <div className="bg-gray/20 backdrop-blur-md p-8 rounded-2xl border border-purple/20">
                <h3 className="text-2xl font-bold text-white mb-6">Follow Me</h3>
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 bg-purple/20 border border-purple/30 rounded-lg px-4 py-3 hover:border-light-purple/50 hover:scale-105 transition-all duration-300"
                    >
                      <span className="text-xl">{social.icon}</span>
                      <span className="text-white font-medium">{social.name}</span>
                    </a>
                  ))}
                </div>
              </div>

              {/* Availability */}
              <div className="bg-gray/20 backdrop-blur-md p-8 rounded-2xl border border-purple/20">
                <h3 className="text-2xl font-bold text-white mb-4">Availability</h3>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-green-400 font-semibold">Available for new projects</span>
                </div>
                <p className="text-gray-300 mt-2">
                  I'm currently accepting new projects and collaborations. 
                  Let's work together to bring your ideas to life!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 