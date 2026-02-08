import React from 'react';
import { Car, Github, Linkedin, Twitter, Mail, ExternalLink, ArrowUp, Shield, FileText, Cookie } from 'lucide-react';

const Footer = ({ isDarkMode, toggleDarkMode }) => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    portfolio: [
      { label: 'Home', href: '#home' },
      { label: 'About', href: '#about' },
      { label: 'Projects', href: '#projects' },
      { label: 'Experience', href: '#experience' },
      { label: 'Skills', href: '#skills' },
      { label: 'Contact', href: '#contact' }
    ],
    resources: [
      { label: 'Resume', href: 'https://drive.google.com/file/d/1YC2vAf-nF6gmGp5fqovZGNyrtQzJsVVE/view?usp=sharing', icon: <FileText className="w-4 h-4" /> },
      { label: 'GitHub', href: 'https://github.com/Nissan130', icon: <Github className="w-4 h-4" /> },
      // { label: 'Blog', href: '#', icon: <ExternalLink className="w-4 h-4" /> },
      // { label: 'Case Studies', href: '#', icon: <FileText className="w-4 h-4" /> }
    ],
    legal: [
      { label: 'Privacy Policy', href: '#', icon: <Shield className="w-4 h-4" /> },
      { label: 'Terms of Service', href: '#', icon: <FileText className="w-4 h-4" /> },
      { label: 'Cookie Policy', href: '#', icon: <Cookie className="w-4 h-4" /> }
    ]
  };

  const socialLinks = [
    { platform: 'GitHub', icon: <Github className="w-5 h-5" />, href: 'https://github.com/Nissan130', color: 'from-gray-800 to-gray-900' },
    { platform: 'LinkedIn', icon: <Linkedin className="w-5 h-5" />, href: 'https://www.linkedin.com/in/md-nissan-ali130/', color: 'from-blue-700 to-blue-800' },
    { platform: 'X', icon: <Twitter className="w-5 h-5" />, href: 'https://x.com/nali_130', color: 'from-sky-500 to-blue-500' },
    { platform: 'Email', icon: <Mail className="w-5 h-5" />, href: 'mailto:mdnissanali130@gmail.com', color: 'from-emerald-600 to-green-600' }
  ];

  // Define color variables based on dark mode
  const colors = {
    background: {
      gradient: isDarkMode 
        ? 'from-transparent via-gray-900/40 to-gray-900/60' 
        : 'from-transparent via-white/40 to-white/60',
      overlay: isDarkMode ? 'dark:via-gray-900/40 dark:to-gray-900/60' : 'via-white/40 to-white/60',
    },
    text: {
      primary: isDarkMode ? 'text-gray-100' : 'text-gray-900',
      secondary: isDarkMode ? 'text-gray-400' : 'text-gray-600',
      tertiary: isDarkMode ? 'text-gray-300' : 'text-gray-700',
      brand: isDarkMode ? 'from-white to-gray-300' : 'from-gray-900 to-gray-700',
      link: isDarkMode ? 'text-gray-400' : 'text-gray-600',
      hover: isDarkMode ? 'text-blue-400' : 'text-blue-600',
    },
    border: {
      primary: isDarkMode ? 'border-gray-800/50' : 'border-gray-200/50',
      top: isDarkMode ? 'via-blue-600/20' : 'via-blue-600/20',
      divider: isDarkMode ? 'via-gray-700/50' : 'via-gray-300/50',
      contact: isDarkMode ? 'border-blue-800/20' : 'border-blue-200/30',
    },
    gradient: {
      primary: isDarkMode ? 'from-blue-400 to-purple-400' : 'from-blue-600 to-purple-600',
      card: isDarkMode ? 'from-blue-600/10 to-purple-600/10' : 'from-blue-600/5 to-purple-600/5',
      icon: isDarkMode ? 'from-blue-600/20 to-purple-600/20' : 'from-blue-600/10 to-purple-600/10',
      social: {
        opacity: isDarkMode ? 'bg-opacity-10' : 'bg-opacity-5',
        icon: isDarkMode ? 'bg-opacity-20' : 'bg-opacity-10',
      },
      orb: {
        top: isDarkMode ? 'from-blue-600/10 via-purple-600/10 to-pink-600/10' : 'from-blue-600/5 via-purple-600/5 to-pink-600/5',
        bottom: isDarkMode ? 'from-emerald-600/10 via-cyan-600/10 to-sky-600/10' : 'from-emerald-600/5 via-cyan-600/5 to-sky-600/5',
      }
    },
    input: {
      background: isDarkMode ? 'bg-gray-800/50' : 'bg-white/50',
      border: isDarkMode ? 'border-gray-700/50' : 'border-gray-300/50',
      focus: isDarkMode ? 'border-blue-400' : 'border-blue-500',
    },
    button: {
      primary: isDarkMode 
        ? 'from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600' 
        : 'from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700',
    },
    badge: {
      dot: 'from-blue-600 to-purple-600',
    }
  };

  return (
    <footer className="relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        {/* Gradient Orbs */}
        <div className={`absolute -top-32 left-1/4 w-[400px] h-[400px] rounded-full blur-3xl ${
          colors.gradient.orb.top
        }`} />
        <div className={`absolute -bottom-32 right-1/4 w-[400px] h-[400px] rounded-full blur-3xl ${
          colors.gradient.orb.bottom
        }`} />
        
        {/* Top Border Gradient */}
        <div className={`absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent ${colors.border.top} to-transparent`} />
      </div>

      {/* Main Footer Content */}
      <div className={`relative z-10 bg-gradient-to-b backdrop-blur-sm ${colors.background.gradient}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
          {/* Main Footer Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-9 gap-8 lg:gap-12">
            {/* Brand Section */}
            <div className="lg:col-span-4 space-y-6">
              <div className="flex items-center gap-3">
                <div className={`p-2 w-10 h-10 rounded-xl bg-gradient-to-r ${colors.gradient.icon}`}>
                  <img src="public/logo.svg" alt="" />
                </div>
                <div>
                  <span className={`text-2xl font-bold bg-gradient-to-r ${colors.text.brand} bg-clip-text text-transparent`}>
                    Nissan
                  </span>
                  <div className={`text-sm ${colors.text.secondary}`}>
                    AI Enthusiast
                  </div>
                </div>
              </div>
              
              <p className={`leading-relaxed text-sm ${colors.text.tertiary}`}>
                Specializing in  software development, data science 
                and AI-powered solutions. Creating innovative technology for the future of mobility.
              </p>
            </div>

            {/* Quick Links */}
            <div className="lg:col-span-2 space-y-6">
              <h3 className={`text-lg font-bold ${colors.text.primary}`}>Portfolio</h3>
              <ul className="space-y-3">
                {footerLinks.portfolio.map((link, index) => (
                  <li key={index}>
                    <a 
                      href={link.href}
                      className={`text-sm transition-colors duration-300 flex items-center gap-2 ${
                        colors.text.link
                      } hover:${colors.text.hover}`}
                    >
                      <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${colors.badge.dot} opacity-0 group-hover:opacity-100`} />
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Connect */}
            <div className="lg:col-span-3 space-y-6">
              <h3 className={`text-lg font-bold ${colors.text.primary}`}>Connect</h3>
              <div className="space-y-4">
                {/* Social Links */}
                <div className="grid grid-cols-2 gap-3">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`group p-3 rounded-xl bg-gradient-to-r ${social.color} ${
                        colors.gradient.social.opacity
                      } border ${colors.border.primary} hover:shadow-lg hover:-translate-y-1 transition-all duration-300`}
                    >
                      <div className="flex items-center gap-3">
                        <div className='text-white'>{social.icon}</div>
                        <span className={`text-sm text-white font-medium ${colors.text.primary}`}>
                          {social.platform}
                        </span>
                      </div>
                    </a>
                  ))}
                </div>

                
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className={`my-8 lg:my-12 h-px bg-gradient-to-r from-transparent ${colors.border.divider} to-transparent`} />

          {/* Bottom Bar */}
          <div className="flex flex-col md:flex-row justify-center items-center gap-6">
            {/* Copyright & Legal */}
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <div className={`text-sm ${colors.text.secondary}`}>
                © {currentYear} - Md. Nissan Ali. All rights reserved.
              </div>
              
            
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;