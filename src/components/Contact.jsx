import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle, Linkedin, Github, MessageSquare, User, FileText } from 'lucide-react';

const Contact = ({ isDarkMode, toggleDarkMode }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      value: "mdnissanali130@gmail.com",
      link: "mailto:mdnissanali130@gmail.com",
      color: "from-blue-600 to-cyan-600"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Phone",
      value: "+88 01609313886",
      link: "tel+88 01609313886",
      color: "from-emerald-600 to-green-600"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Location",
      value: "Rajshahi, Bangladesh",
      link: "https://en.wikipedia.org/wiki/Rajshahi",
      color: "from-purple-600 to-pink-600"
    }
  ];

  const socialLinks = [
    {
      platform: "LinkedIn",
      icon: <Linkedin className="w-5 h-5" />,
      url: "https://www.linkedin.com/in/md-nissan-ali130/",
      color: "from-blue-600 to-blue-700",
      bgColor: "bg-blue-600/10"
    },
    {
      platform: "GitHub",
      icon: <Github className="w-5 h-5" />,
      url: "https://github.com/Nissan130",
      color: "from-gray-700 to-gray-900",
      bgColor: "bg-gray-600/10"
    },
    {
      platform: "Portfolio",
      icon: <FileText className="w-5 h-5" />,
      url: "#",
      color: "from-purple-600 to-pink-600",
      bgColor: "bg-purple-600/10"
    }
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      // Reset submission status after 5 seconds
      setTimeout(() => setIsSubmitted(false), 5000);
    }, 1500);
  };

  // Define color variables based on dark mode
  const colors = {
    background: isDarkMode ? 'bg-gray-900' : 'bg-gray-50',
    text: {
      primary: isDarkMode ? 'text-gray-100' : 'text-gray-900',
      secondary: isDarkMode ? 'text-gray-400' : 'text-gray-600',
      tertiary: isDarkMode ? 'text-gray-300' : 'text-gray-700',
    },
    border: isDarkMode ? 'border-gray-800' : 'border-gray-200',
    card: {
      background: isDarkMode ? 'bg-gray-800/80' : 'bg-white/80',
      border: isDarkMode ? 'border-gray-700/50' : 'border-gray-200/50',
      hover: isDarkMode ? 'shadow-xl' : 'shadow-xl',
    },
    gradient: {
      primary: isDarkMode ? 'from-blue-400 to-purple-400' : 'from-blue-600 to-purple-600',
      text: isDarkMode ? 'from-white via-gray-100 to-gray-200' : 'from-gray-900 via-gray-800 to-gray-900',
      overlay: isDarkMode ? 'opacity-[0.02]' : 'opacity-[0.03]',
      icon: isDarkMode ? 'bg-opacity-20' : 'bg-opacity-10',
      glow: isDarkMode ? 'from-blue-600/10 via-purple-600/10 to-pink-600/10' : 'from-blue-600/20 via-purple-600/20 to-pink-600/20',
    },
    badge: {
      background: isDarkMode ? 'bg-gray-800/80' : 'bg-white/80',
      border: isDarkMode ? 'border-gray-700' : 'border-gray-200',
    },
    input: {
      background: isDarkMode ? 'bg-gray-800/50' : 'bg-white/50',
      border: isDarkMode ? 'border-gray-700/50' : 'border-gray-300/50',
      focus: {
        border: isDarkMode ? 'border-blue-400' : 'border-blue-500',
        ring: isDarkMode ? 'ring-blue-400/20' : 'ring-blue-500/20',
      }
    },
    button: {
      primary: isDarkMode 
        ? 'bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600' 
        : 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700',
      disabled: isDarkMode ? 'from-gray-700 to-gray-800' : 'from-gray-600 to-gray-700',
    },
    status: {
      availability: isDarkMode ? 'from-blue-600/20 via-purple-600/20 to-pink-600/20' : 'from-blue-600/10 via-purple-600/10 to-pink-600/10',
      border: isDarkMode ? 'border-blue-800/20' : 'border-blue-200/50',
      success: {
        background: isDarkMode ? 'from-emerald-600/10 to-green-600/10' : 'from-emerald-600/10 to-green-600/10',
        border: isDarkMode ? 'border-emerald-800/20' : 'border-emerald-200/50',
        text: isDarkMode ? 'text-emerald-300' : 'text-emerald-700',
        light: isDarkMode ? 'text-emerald-400/80' : 'text-emerald-600/80',
      }
    },
    progress: {
      background: isDarkMode ? 'bg-gray-800' : 'bg-gray-200',
      fill: 'from-blue-600 to-purple-600'
    }
  };

  return (
    <section id="contact" className={`min-h-screen flex items-center justify-center px-4 py-20 relative overflow-hidden ${colors.background}`}>
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        {/* Gradient Orbs */}
        <div className={`absolute top-1/4 -left-32 w-[500px] h-[500px] rounded-full blur-3xl ${
          isDarkMode 
            ? 'bg-gradient-to-r from-blue-600/5 via-purple-600/5 to-pink-600/5' 
            : 'bg-gradient-to-r from-blue-400/10 via-purple-400/10 to-pink-400/10'
        }`} />
        <div className={`absolute bottom-1/4 -right-32 w-[500px] h-[500px] rounded-full blur-3xl ${
          isDarkMode 
            ? 'bg-gradient-to-r from-emerald-600/5 via-cyan-600/5 to-sky-600/5' 
            : 'bg-gradient-to-r from-emerald-400/10 via-cyan-400/10 to-sky-400/10'
        }`} />
        
        {/* Wave Pattern */}
        <div className={`absolute inset-0 ${colors.gradient.overlay}`} 
             style={{
               backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
               backgroundSize: '60px 60px'
             }} 
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto w-full">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className={`inline-flex items-center gap-2 px-6 py-2 rounded-full backdrop-blur-sm border shadow-lg mb-6 ${
            colors.badge.background
          } ${colors.badge.border}`}>
            <MessageSquare className={`w-4 h-4 ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`} />
            <span className={`text-sm font-semibold bg-gradient-to-r ${colors.gradient.primary} bg-clip-text text-transparent`}>
              Get In Touch
            </span>
            <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${colors.gradient.primary} animate-pulse`} />
          </div>
          
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className={`block bg-gradient-to-r ${colors.gradient.primary} bg-clip-text text-transparent`}>
              Let's Connect
            </span>
          </h2>
          
          <p className={`text-lg max-w-2xl mx-auto ${colors.text.secondary}`}>
            Have a project in mind or want to discuss opportunities? I'd love to hear from you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column: Contact Info & Social */}
          <div className="space-y-8">
            {/* Contact Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-4">
              {contactInfo.map((info, index) => (
                <a
                  key={index}
                  href={info.link}
                  className={`group p-6 rounded-2xl backdrop-blur-sm border hover:-translate-y-2 transition-all duration-300 ${
                    colors.card.background
                  } ${colors.card.border} ${colors.card.hover}`}
                >
                  <div className="flex items-center gap-4">
                    <div className={`p-3 rounded-xl bg-gradient-to-r ${info.color} ${colors.gradient.icon}`}>
                      <div className={`bg-gradient-to-r ${info.color} bg-clip-text text-transparent`}>
                        {info.icon}
                      </div>
                    </div>
                    <div>
                      <div className={`text-sm ${colors.text.secondary}`}>{info.title}</div>
                      <div className={`font-bold ${colors.text.primary}`}>{info.value}</div>
                    </div>
                  </div>
                </a>
              ))}
            </div>

            {/* Availability Status */}
            <div className={`p-6 rounded-2xl border ${
              colors.status.availability
            } ${colors.status.border}`}>
              <div className="flex items-center gap-4 mb-4">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-gradient-to-r from-emerald-500 to-green-500 animate-pulse" />
                  <span className={`font-bold ${colors.text.primary}`}>Available for Opportunities</span>
                </div>
              </div>
              <p className={colors.text.tertiary}>
                Currently open to freelance projects, full-time roles, and collaborations in automotive software and AI development.
              </p>
            </div>

            {/* Social Links */}
            <div>
              <h3 className={`text-2xl font-bold mb-6 ${colors.text.primary}`}>Connect with me</h3>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group flex items-center gap-3 px-6 py-3 rounded-xl ${
                      social.bgColor
                    } backdrop-blur-sm border ${
                      colors.card.border
                    } hover:shadow-lg hover:-translate-y-1 transition-all duration-300`}
                  >
                    <div className={`bg-gradient-to-r ${social.color} bg-clip-text text-transparent`}>
                      {social.icon}
                    </div>
                    <span className={`font-medium ${colors.text.primary}`}>{social.platform}</span>
                  </a>
                ))}
              </div>
            </div>

            {/* Response Time */}
            <div className={`p-6 rounded-2xl backdrop-blur-sm border ${
              colors.card.background
            } ${colors.card.border}`}>
              <div className="flex items-center gap-4 mb-4">
                <Send className={`w-6 h-6 ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`} />
                <div>
                  <div className={`font-bold ${colors.text.primary}`}>Quick Response</div>
                  <div className={`text-sm ${colors.text.secondary}`}>Typically replies within 24 hours</div>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className={colors.text.secondary}>Response Time</span>
                  <span className={`font-medium ${colors.text.primary}`}>1-24 hours</span>
                </div>
                <div className={`w-full h-2 rounded-full overflow-hidden ${colors.progress.background}`}>
                  <div className={`h-full w-4/5 rounded-full bg-gradient-to-r ${colors.progress.fill}`} />
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="relative">
            {/* Glow Effect */}
            <div className={`absolute -inset-4 bg-gradient-to-r ${colors.gradient.glow} rounded-3xl blur-xl opacity-50`} />
            
            {/* Form Container */}
            <div className={`relative p-8 rounded-2xl backdrop-blur-sm border shadow-xl ${
              colors.card.background
            } ${colors.card.border}`}>
              <h3 className={`text-2xl font-bold mb-2 ${colors.text.primary}`}>
                Send me a message
              </h3>
              <p className={`mb-8 ${colors.text.secondary}`}>
                Fill out the form below and I'll get back to you as soon as possible.
              </p>

              {/* Success Message */}
              {isSubmitted && (
                <div className={`mb-6 p-4 rounded-xl border ${
                  colors.status.success.background
                } ${colors.status.success.border}`}>
                  <div className="flex items-center gap-3">
                    <CheckCircle className={`w-5 h-5 ${isDarkMode ? 'text-emerald-400' : 'text-emerald-600'}`} />
                    <div>
                      <div className={`font-bold ${colors.status.success.text}`}>Message sent successfully!</div>
                      <div className={`text-sm ${colors.status.success.light}`}>
                        Thank you for your message. I'll get back to you soon.
                      </div>
                    </div>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className={`flex items-center gap-2 text-sm font-medium ${colors.text.tertiary}`}>
                      <User className="w-4 h-4" />
                      Your Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className={`w-full px-4 py-3 rounded-lg backdrop-blur-sm border ${
                        colors.input.background
                      } ${colors.input.border} ${
                        colors.text.primary
                      } focus:${
                        colors.input.focus.border
                      } focus:ring-2 focus:${
                        colors.input.focus.ring
                      } outline-none transition-all`}
                      placeholder="John Doe"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className={`flex items-center gap-2 text-sm font-medium ${colors.text.tertiary}`}>
                      <Mail className="w-4 h-4" />
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className={`w-full px-4 py-3 rounded-lg backdrop-blur-sm border ${
                        colors.input.background
                      } ${colors.input.border} ${
                        colors.text.primary
                      } focus:${
                        colors.input.focus.border
                      } focus:ring-2 focus:${
                        colors.input.focus.ring
                      } outline-none transition-all`}
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className={`flex items-center gap-2 text-sm font-medium ${colors.text.tertiary}`}>
                    <FileText className="w-4 h-4" />
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className={`w-full px-4 py-3 rounded-lg backdrop-blur-sm border ${
                      colors.input.background
                    } ${colors.input.border} ${
                      colors.text.primary
                    } focus:${
                      colors.input.focus.border
                    } focus:ring-2 focus:${
                      colors.input.focus.ring
                    } outline-none transition-all`}
                    placeholder="Project Inquiry"
                  />
                </div>

                <div className="space-y-2">
                  <label className={`flex items-center gap-2 text-sm font-medium ${colors.text.tertiary}`}>
                    <MessageSquare className="w-4 h-4" />
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="6"
                    className={`w-full px-4 py-3 rounded-lg backdrop-blur-sm border ${
                      colors.input.background
                    } ${colors.input.border} ${
                      colors.text.primary
                    } focus:${
                      colors.input.focus.border
                    } focus:ring-2 focus:${
                      colors.input.focus.ring
                    } outline-none transition-all resize-none`}
                    placeholder="Tell me about your project..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`group w-full flex items-center justify-center gap-3 px-8 py-4 rounded-xl font-semibold transition-all duration-300 ${
                    isSubmitting
                      ? `${colors.button.disabled} cursor-not-allowed`
                      : `${colors.button.primary} hover:shadow-xl hover:scale-[1.02]`
                  } text-white`}
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      <span>Send Message</span>
                      <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </button>
              </form>

              {/* Privacy Note */}
              <div className={`mt-6 pt-6 border-t ${colors.card.border}`}>
                <p className={`text-xs text-center ${colors.text.secondary}`}>
                  Your information is secure and will only be used to respond to your inquiry.
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Contact;