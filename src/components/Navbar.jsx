import { useState, useEffect } from 'react';
import {
  Menu,
  X,
  Github,
  Linkedin,
  Mail,
  FileText,
  Sun,
  Moon,
  ChevronDown,
  ArrowUp,
  Download
} from 'lucide-react';

const Navbar = ({
  activeSection,
  scrollToSection,
  isDarkMode,
  toggleDarkMode,
  showBackToTop = false
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Gradient color combinations
  const gradients = {
    primary: 'from-blue-600 to-purple-600',
    secondary: 'from-emerald-500 to-cyan-500',
    accent: 'from-orange-500 to-pink-500'
  };

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'projects', label: 'Projects' },
    { id: 'skills', label: 'Skills' },
    { id: 'experience', label: 'Experience' },
    { id: 'contact', label: 'Contact' },
  ];

  const socialLinks = [
    {
      icon: Github,
      href: 'https://github.com/Nissan130',
      label: 'GitHub',
      lightBg: 'bg-gray-100',
      darkBg: 'bg-gray-800',
      lightHover: 'hover:bg-gray-200 hover:text-gray-900',
      darkHover: 'hover:bg-gray-700 hover:text-white'
    },
    {
      icon: Linkedin,
      href: 'https://www.linkedin.com/in/md-nissan-ali130/',
      label: 'LinkedIn',
      lightBg: 'bg-gray-100',
      darkBg: 'bg-gray-800',
      lightHover: 'hover:bg-blue-100 hover:text-blue-700',
      darkHover: 'hover:bg-blue-900/30 hover:text-blue-300'
    },
    {
      icon: Mail,
      href: 'mailto:mdnissanali130@gmail.com',
      label: 'Email',
      lightBg: 'bg-gray-100',
      darkBg: 'bg-gray-800',
      lightHover: 'hover:bg-red-100 hover:text-red-600',
      darkHover: 'hover:bg-red-900/30 hover:text-red-400'
    },
    // { 
    //   icon: FileText, 
    //   href: '#', 
    //   label: 'Resume',
    //   lightBg: 'bg-gray-100',
    //   darkBg: 'bg-gray-800',
    //   lightHover: 'hover:bg-green-100 hover:text-green-600',
    //   darkHover: 'hover:bg-green-900/30 hover:text-green-400'
    // },
  ];

  const handleLinkClick = (id) => {
    if (scrollToSection) {
      scrollToSection(id);
    } else {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    }
    setIsOpen(false);
  };

  const handleDownloadCV = () => {
    const cvUrl =
      'https://drive.google.com/file/d/1YC2vAf-nF6gmGp5fqovZGNyrtQzJsVVE/view?usp=sharing';

    window.open(cvUrl, '_blank', 'noopener,noreferrer');
  };



  const calculateProgressWidth = () => {
    const totalSections = navLinks.length;
    const activeIndex = navLinks.findIndex(link => link.id === activeSection);
    return ((activeIndex + 1) / totalSections) * 100;
  };

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
        ? isDarkMode
          ? 'bg-gray-900/95 backdrop-blur-lg border-b border-gray-800 shadow-xl'
          : 'bg-white/95 backdrop-blur-lg border-b border-gray-200 shadow-xl'
        : 'bg-transparent'
        }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo/Brand */}
            <div className="flex items-center space-x-2">
              <div className={`h-10 w-10 rounded-lg bg-gradient-to-r ${gradients.primary} flex items-center justify-center shadow-md`}>
                <span className="text-white font-bold text-lg">N</span>
              </div>
              <div className="flex flex-col">
                <button
                  onClick={() => handleLinkClick('home')}
                  className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent hover:opacity-90 transition-opacity text-left"
                >
                  Nissan
                </button>
              </div>
            </div>

            {/* Desktop Navigation Links */}
            <div className="hidden md:flex items-center space-x-1">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => handleLinkClick(link.id)}
                  className={`cursor-pointer relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${activeSection === link.id
                    ? `bg-gradient-to-r ${gradients.primary} text-white shadow-md`
                    : isDarkMode
                      ? 'text-gray-300 hover:bg-gray-800 hover:text-white'
                      : 'text-gray-700 hover:bg-gray-100 hover:text-gray-900'
                    }`}
                >
                  {link.label}
                  {activeSection === link.id && (
                    <span className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-6 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full" />
                  )}
                </button>
              ))}
            </div>

            {/* Right Section: Social Links, Dark Mode, CTA */}
            <div className="hidden md:flex items-center space-x-4">
              {/* Social Links */}
              <div className="flex items-center space-x-2 border-r pr-4">
                <div className={`cursor-pointer h-8 border-r ${isDarkMode ? 'border-gray-700' : 'border-gray-300'
                  }`} />
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-2 rounded-lg transition-all duration-200 ${isDarkMode
                      ? `${social.darkBg} ${social.darkHover}`
                      : `${social.lightBg} ${social.lightHover}`
                      }`}
                    aria-label={social.label}
                  >
                    <social.icon size={18} className={
                      isDarkMode ? 'text-gray-300' : 'text-gray-600'
                    } />
                  </a>
                ))}
              </div>

              {/* Dark Mode Toggle */}
              <button
                onClick={toggleDarkMode}
                className={`cursor-pointer p-2 rounded-lg transition-all duration-200 ${isDarkMode
                  ? 'bg-gray-800 hover:bg-gray-700 text-yellow-400'
                  : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
                  } hover:shadow-md`}
                aria-label="Toggle dark mode"
              >
                {isDarkMode ? (
                  <Sun size={20} />
                ) : (
                  <Moon size={20} />
                )}
              </button>

              {/* Download CV Button */}
              <button
                onClick={handleDownloadCV}
                className="group relative px-6 py-3 rounded-lg font-medium transition-all duration-300 overflow-hidden hover:scale-105 shadow-md"
              >
                <div className={`absolute inset-0 bg-gradient-to-r ${gradients.primary} opacity-95 group-hover:opacity-100 transition-opacity`} />
                <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent" />
                <span className="cursor-pointer relative text-white font-semibold tracking-wide flex items-center">
                  <Download className="inline-block mr-2 h-5 w-5" />
                  Download CV
                </span>
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center space-x-2">
              {/* Active section indicator for mobile */}
              <div className={`text-sm font-medium bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent px-2 py-1 rounded-full ${isDarkMode ? 'bg-gray-800' : 'bg-gray-100'
                }`}>
                {activeSection.charAt(0).toUpperCase() + activeSection.slice(1)}
              </div>

              <button
                onClick={toggleDarkMode}
                className={`p-2 rounded-lg ${isDarkMode ? 'bg-gray-800 text-yellow-400' : 'bg-gray-100 text-gray-700'
                  }`}
                aria-label="Toggle dark mode"
              >
                {isDarkMode ? (
                  <Sun size={20} />
                ) : (
                  <Moon size={20} />
                )}
              </button>
              <button
                onClick={() => setIsOpen(!isOpen)}
                className={`p-2 rounded-lg ${isDarkMode
                  ? 'bg-gray-800 hover:bg-gray-700 text-gray-300'
                  : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
                  } hover:shadow-md transition-all`}
                aria-label="Toggle menu"
              >
                {isOpen ? (
                  <X size={24} />
                ) : (
                  <Menu size={24} />
                )}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isOpen && (
            <div className={`md:hidden ${isDarkMode
              ? 'bg-gray-900 border-gray-800'
              : 'bg-white border-gray-200'
              } border-t rounded-b-2xl shadow-xl`}>
              <div className="px-4 pt-4 pb-6 space-y-2">
                {navLinks.map((link) => (
                  <button
                    key={link.id}
                    onClick={() => handleLinkClick(link.id)}
                    className={`block w-full text-left px-4 py-3 rounded-xl text-base font-medium transition-all duration-200 ${activeSection === link.id
                      ? `bg-gradient-to-r ${gradients.primary} text-white shadow-md`
                      : isDarkMode
                        ? 'text-gray-300 hover:bg-gray-800'
                        : 'text-gray-700 hover:bg-gray-100'
                      }`}
                  >
                    <div className="flex items-center justify-between">
                      {link.label}
                      {activeSection === link.id && (
                        <div className="flex items-center space-x-2">
                          <div className="h-2 w-2 rounded-full bg-gradient-to-r from-cyan-400 to-blue-400 animate-pulse" />
                          <span className="text-xs font-medium bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                            Active
                          </span>
                        </div>
                      )}
                    </div>
                  </button>
                ))}

                {/* Social links in mobile menu */}
                <div className="grid grid-cols-4 gap-2 px-2 py-4">
                  {socialLinks.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      className={`p-3 rounded-xl transition-all ${isDarkMode
                        ? `${social.darkBg} ${social.darkHover}`
                        : `${social.lightBg} ${social.lightHover}`
                        } flex flex-col items-center justify-center space-y-1 hover:scale-105`}
                      aria-label={social.label}
                    >
                      <social.icon size={20} className={
                        isDarkMode ? 'text-gray-300' : 'text-gray-600'
                      } />
                      <span className={`text-xs font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-600'
                        }`}>{social.label}</span>
                    </a>
                  ))}
                </div>

                <button
                  onClick={handleDownloadCV}
                  className={`w-full py-3 px-4 rounded-xl font-medium text-white bg-gradient-to-r ${gradients.primary} shadow-md hover:shadow-lg transition-all duration-300 flex items-center justify-center space-x-2 hover:scale-105`}
                >
                  <Download className="h-5 w-5" />
                  <span>Download CV</span>
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Back to top button */}
      {showBackToTop && (
        <button
          onClick={() => handleLinkClick('home')}
          className="fixed bottom-8 right-8 p-3 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 z-40 animate-bounce"
          aria-label="Back to top"
        >
          <ArrowUp size={24} />
        </button>
      )}

      <style jsx>{`
        @keyframes slideIn {
          from {
            transform: translateX(-100%);
          }
          to {
            transform: translateX(0);
          }
        }
      `}</style>
    </>
  );
};

export default Navbar;