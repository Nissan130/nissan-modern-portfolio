import { useEffect, useState } from 'react';
import {
  ArrowRight,
  Download,
  Sparkles,
  ExternalLink,
  ChevronDown,
  MapPin,
  Briefcase,
  Calendar,
  UserCheck,
  Rocket
} from 'lucide-react';
import profile_image from '../../public/images/rounded_nissan.png'

const Home = ({ isDarkMode, toggleDarkMode }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [typedText, setTypedText] = useState('');
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);

  const roles = [
    'Data Scientist',
    "AI Engineer",
    'Full-Stack Developer',
    'Problem Solver',
  ];

  useEffect(() => {
    // Trigger entrance animation
    const timer = setTimeout(() => setIsVisible(true), 100);

    // Typing animation for role text
    let charIndex = 0;
    let roleText = roles[currentRoleIndex];

    const typingInterval = setInterval(() => {
      if (charIndex <= roleText.length) {
        setTypedText(roleText.substring(0, charIndex));
        charIndex++;
      } else {
        clearInterval(typingInterval);
        // Switch to next role after delay
        setTimeout(() => {
          setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
          setTypedText('');
        }, 2000);
      }
    }, 100);

    return () => {
      clearTimeout(timer);
      clearInterval(typingInterval);
    };
  }, [currentRoleIndex]);

  const quickStats = [
    { label: 'Location', value: 'Rajshahi, Bangladesh', icon: <MapPin className="w-4 h-4" /> },
    { label: 'Experience', value: 'Fresher', icon: <Briefcase className="w-4 h-4" /> },
    { label: 'Availability', value: 'Open to Work', icon: <Calendar className="w-4 h-4" /> },
  ];

  const quickLinks = [
    { label: 'Hire Me', href: '#contact', icon: <Rocket className="w-5 h-5" /> },
    { label: 'View Projects', href: '#projects', icon: <ArrowRight className="w-5 h-5" /> },
  ];

  // Define color variables based on dark mode
  const colors = {
    background: isDarkMode ? 'bg-gray-900' : 'bg-white',
    text: {
      primary: isDarkMode ? 'text-gray-100' : 'text-gray-900',
      secondary: isDarkMode ? 'text-gray-400' : 'text-gray-600',
      tertiary: isDarkMode ? 'text-gray-500' : 'text-gray-700',
    },
    border: isDarkMode ? 'border-gray-800' : 'border-gray-200',
    card: {
      background: isDarkMode ? 'bg-gray-800/50' : 'bg-gray-50/50',
      border: isDarkMode ? 'border-gray-700/50' : 'border-gray-300/50',
    },
    gradient: {
      from: isDarkMode ? 'from-blue-400' : 'from-blue-600',
      to: isDarkMode ? 'to-purple-400' : 'to-purple-600',
      overlay: isDarkMode ? 'from-black/40' : 'from-black/20',
    },
    badge: {
      background: isDarkMode ? 'bg-gray-800/80' : 'bg-white/80',
      border: isDarkMode ? 'border-gray-700' : 'border-gray-200',
    },
    button: {
      primary: isDarkMode 
        ? 'bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600' 
        : 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700',
      secondary: {
        background: isDarkMode ? 'bg-gray-800' : 'bg-white',
        border: isDarkMode ? 'border-gray-700 hover:border-blue-400' : 'border-gray-300 hover:border-blue-500',
        text: isDarkMode ? 'text-gray-200' : 'text-gray-800',
      }
    }
  };

  return (
    <section id="home" className={`min-h-screen relative overflow-hidden ${isDarkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        {/* Gradient Orbs */}
        <div className={`absolute top-1/4 -left-20 w-96 h-96 rounded-full blur-3xl ${
          isDarkMode 
            ? 'bg-gradient-to-r from-blue-600/10 to-purple-600/10' 
            : 'bg-gradient-to-r from-blue-500/20 to-purple-500/20'
        }`} />
        <div className={`absolute bottom-1/4 -right-20 w-96 h-96 rounded-full blur-3xl ${
          isDarkMode 
            ? 'bg-gradient-to-r from-cyan-600/10 to-emerald-600/10' 
            : 'bg-gradient-to-r from-cyan-500/20 to-emerald-500/20'
        }`} />
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-20 pt-32">
        <div className={`max-w-7xl mx-auto transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>

          {/* Welcome Badge */}
          <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full backdrop-blur-sm shadow-lg mb-8 animate-pulse ${
            colors.badge.background
          } border ${colors.badge.border}`}>
            <Sparkles className="w-4 h-4 text-yellow-500" />
            <span className={`text-sm font-semibold bg-gradient-to-r ${colors.gradient.from} ${colors.gradient.to} bg-clip-text text-transparent`}>
              Welcome to my digital space
            </span>
          </div>

          {/* Main Content with Profile Image */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            {/* Left Column: Text Content */}
            <div className="space-y-8">
              <div>
                <div className={`text-lg mb-2 ${colors.text.secondary}`}>Hello, I'm</div>
                <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-4">
                  <span className={`block bg-gradient-to-r ${colors.gradient.from} ${colors.gradient.to} bg-clip-text text-transparent`}>
                    Md. Nissan Ali
                  </span>
                </h1>

                {/* Dynamic Role Display */}
                <div className="mb-6">
                  <div className={`text-2xl sm:text-3xl font-medium ${colors.text.tertiary}`}>
                    A Passionate{' '}
                    <span className={`font-bold bg-gradient-to-r ${colors.gradient.from} ${colors.gradient.to} bg-clip-text text-transparent`}>
                      {typedText}
                      <span className="animate-blink">|</span>
                    </span>
                  </div>
                  <p className={`text-lg mt-4 max-w-lg ${colors.text.secondary}`}>
                    Building elegant solutions to complex problems using ML/DL, data-driven thinking, and full-stack development.
                  </p>
                </div>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {quickStats.map((stat, index) => (
                  <div
                    key={index}
                    className={`p-4 rounded-xl backdrop-blur-sm border ${
                      colors.card.background
                    } ${colors.card.border}`}
                  >
                    <div className="flex items-center gap-2 mb-1">
                      <div className={isDarkMode ? "text-blue-400" : "text-blue-500"}>{stat.icon}</div>
                      <div className={`text-sm font-medium ${colors.text.tertiary}`}>{stat.label}</div>
                    </div>
                    <div className={`text-lg font-semibold ${colors.text.primary}`}>{stat.value}</div>
                  </div>
                ))}
              </div>

              {/* Quick Links */}
              <div className="flex flex-col sm:flex-row gap-4">
                {quickLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    className={`group flex items-center gap-3 px-6 py-3 rounded-lg font-medium transition-all duration-300 ${index === 0
                        ? `${colors.button.primary} text-white hover:shadow-xl hover:scale-105`
                        : `${colors.button.secondary.background} border ${colors.button.secondary.border} ${colors.button.secondary.text} hover:shadow-lg`
                      }`}
                  >
                    {link.icon}
                    <span>{link.label}</span>
                    {index === 0 && (
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    )}
                  </a>
                ))}
              </div>
            </div>

            {/* Right Column: Profile Image */}
            <div className="relative flex justify-center lg:justify-end">
              <div className="relative w-70 h-70 sm:w-80 sm:h-80 lg:w-96 lg:h-96">
                {/* Outer Glow */}
                <div className={`absolute -inset-4 rounded-full blur-xl ${
                  isDarkMode
                    ? 'bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-pink-600/20'
                    : 'bg-gradient-to-r from-blue-500/30 via-purple-500/30 to-pink-500/30'
                }`} />

                {/* Image Container */}
                <div className={`relative w-full h-full rounded-full overflow-hidden border-4 shadow-2xl ${
                  isDarkMode ? 'border-gray-800' : 'border-white'
                }`}>
                  <img
                    src= {profile_image}
                    alt="Md. Nissan Ali"
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />

                  {/* Overlay Gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-t ${colors.gradient.overlay} via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300`} />
                </div>

                {/* Decorative Elements */}
                <div className={`absolute -top-4 -right-4 w-24 h-24 rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 blur-sm ${
                  isDarkMode ? 'opacity-20' : 'opacity-30'
                } animate-pulse`} />
                <div className={`absolute -bottom-4 -left-4 w-20 h-20 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 blur-sm ${
                  isDarkMode ? 'opacity-20' : 'opacity-30'
                } animate-pulse`} style={{ animationDelay: '1s' }} />

                {/* Experience Badge */}
                <div className={`absolute -bottom-2 -right-2 px-4 py-2 rounded-full bg-gradient-to-r ${colors.gradient.from} ${colors.gradient.to} text-white font-semibold text-sm shadow-lg`}>
                  A fresh graduate
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      <style jsx>{`
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
        .animate-blink {
          animation: blink 1s infinite;
        }
        .animate-pulse {
          animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
        .text-gradient {
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
      `}</style>
    </section>
  );
};

export default Home;