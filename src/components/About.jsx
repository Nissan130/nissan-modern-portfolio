import { GraduationCap, BookOpen, Award, Calendar, MapPin } from 'lucide-react';

const About = ({ isDarkMode, toggleDarkMode }) => {
  const education = [
    {
      degree: "Bachelor of Science in Computer Science & Engineering (CSE)",
      university: "Rajshahi University of Engineering & Technology (RUET)",
      period: "2022 - 2026",
      location: "Rajshahi, Bangladesh",
      gpa: "3.44/4.0",
      achievements: [
        "Graduated with First Class ",
      ],
      color: "from-purple-600 to-pink-600"
    },
    {
      degree: "Higher Secondary Certificate (HSC)",
      institution: "Mundumala FM Degree College",
      period: "2018 - 2020",
      location: "Rajshahi, Bangladesh",
      gpa: "5.0/5.0",
      achievements: [
        "Science Group",
        "Achieved GPA 5.0 (Perfect Score)",
        "Active participant in Science Olympiad",
        "Member of Mathematics Club"
      ],
      color: "from-emerald-600 to-green-600"
    }
  ];

  const certifications = [
    { name: "Digital Accessibility Training (DAT)", issuer: "Aspire to Innovate (a2i), Under ICT Division Bangladesh", year: "2025" },
    { name: "EDGE PHP (Laravel) Course", issuer: "EDGE Under ICT Division Bangladesh", year: "2025" }
  ];

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
    },
    gradient: {
      primary: isDarkMode ? 'from-blue-400 to-purple-400' : 'from-blue-600 to-purple-600',
      text: isDarkMode ? 'from-white via-gray-100 to-gray-200' : 'from-gray-900 via-gray-800 to-gray-900',
      overlay: isDarkMode ? 'opacity-[0.02]' : 'opacity-[0.03]',
    },
    badge: {
      background: isDarkMode ? 'bg-gray-800/80' : 'bg-white/80',
      border: isDarkMode ? 'border-gray-700' : 'border-gray-200',
    },
    icon: {
      primary: isDarkMode ? 'text-blue-400' : 'text-blue-600',
      container: isDarkMode ? 'bg-blue-600/20' : 'bg-blue-600/10',
    }
  };

  return (
    <section id="about" className={`min-h-screen flex items-center justify-center px-4 py-20 relative overflow-hidden ${colors.background}`}>
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        {/* Gradient Orbs */}
        <div className={`absolute top-1/4 -left-32 w-[500px] h-[500px] rounded-full blur-3xl ${
          isDarkMode 
            ? 'bg-gradient-to-r from-blue-600/5 via-purple-600/5 to-pink-600/5' 
            : 'bg-gradient-to-r from-blue-400/10 via-purple-400/10 to-pink-400/10'
        }`} />
        <div className={`absolute bottom-1/3 -right-32 w-[500px] h-[500px] rounded-full blur-3xl ${
          isDarkMode 
            ? 'bg-gradient-to-r from-emerald-600/5 via-cyan-600/5 to-sky-600/5' 
            : 'bg-gradient-to-r from-emerald-400/10 via-cyan-400/10 to-sky-400/10'
        }`} />
        
        {/* Pattern Overlay */}
        <div className={`absolute inset-0 ${colors.gradient.overlay}`} 
             style={{
               backgroundImage: `radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)`,
               backgroundSize: '40px 40px',
               color: isDarkMode ? '#9ca3af' : '#6b7280'
             }} 
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto w-full">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className={`inline-flex items-center gap-2 px-6 py-2 rounded-full backdrop-blur-sm border shadow-lg mb-6 ${
            colors.badge.background
          } ${colors.badge.border}`}>
            <span className={`text-sm font-semibold bg-gradient-to-r ${colors.gradient.primary} bg-clip-text text-transparent`}>
              About Me
            </span>
            <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${colors.gradient.primary} animate-pulse`} />
          </div>
          
          <h2 className="text-5xl font-bold mb-6">
            <span className={`block bg-gradient-to-r ${colors.gradient.primary} bg-clip-text text-transparent`}>
              Beyond the Code
            </span>
          </h2>
          
          <p className={`text-lg max-w-xl mx-auto ${colors.text.secondary}`}>
            My journey from academic excellence to professional innovation in technology
          </p>
        </div>
        
        {/* Main Content */}
        <div className="space-y-12">
          {/* Introduction */}
          <div className="max-w-4xl mx-auto text-center">
            <p className={`text-lg leading-relaxed mb-8 ${colors.text.tertiary}`}>
              I’m a machine learning–focused full-stack developer passionate about building intelligent, data-driven systems. My academic background strengthened my foundation in ML and deep learning, while hands-on projects helped me translate complex models into scalable, real-world applications.
            </p>
          </div>

          {/* Education Section */}
          <div className="space-y-8">
            <div className="flex items-center gap-4 mb-8">
              <div className={`p-3 rounded-xl bg-gradient-to-r ${colors.icon.container}`}>
                <GraduationCap className={`w-7 h-7 ${colors.icon.primary}`} />
              </div>
              <h3 className={`text-3xl font-bold ${colors.text.primary}`}>
                Education & Academic Journey
              </h3>
            </div>
            
            {/* Education Cards - Stacked on mobile, Timeline on desktop */}
            <div className="space-y-8">
              {education.map((edu, index) => (
                <div key={index}>
                  {/* Desktop Timeline (hidden on mobile) */}
                  <div className="hidden md:block">
                    <div className={`relative ${index % 2 === 0 ? 'md:pr-1/2 md:pl-8' : 'md:pl-1/2 md:pr-8'}`}>
                      {/* Timeline Line */}
                      <div className="absolute left-0 right-0 top-0 bottom-0 md:left-1/2 md:w-0.5 transform md:-translate-x-1/2 bg-gradient-to-b from-blue-600 via-purple-600 to-emerald-600" />
                      
                      {/* Timeline Dot */}
                      <div className={`absolute left-6 md:left-1/2 transform md:-translate-x-1/2 top-6 w-4 h-4 rounded-full bg-gradient-to-r ${edu.color} border-4 ${
                        isDarkMode ? 'border-gray-900' : 'border-white'
                      } z-10`} />
                      
                      {/* Education Card */}
                      <div className={`ml-12 md:ml-0 ${index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'}`}>
                        <div className={`p-6 rounded-2xl backdrop-blur-sm border shadow-lg hover:shadow-xl transition-all duration-300 ${
                          colors.card.background
                        } ${colors.card.border}`}>
                          {/* Desktop Card Content */}
                          <EducationCardContent edu={edu} isDarkMode={isDarkMode} />
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Mobile Card (no timeline) */}
                  <div className="md:hidden">
                    <div className={`p-6 rounded-2xl backdrop-blur-sm border shadow-lg ${
                      colors.card.background
                    } ${colors.card.border}`}>
                      <EducationCardContent edu={edu} isDarkMode={isDarkMode} />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div className="space-y-8">
            <div className="flex items-center gap-4 mb-6">
              <div className={`p-3 rounded-xl bg-gradient-to-r ${colors.icon.container}`}>
                <BookOpen className={`w-7 h-7 ${colors.icon.primary}`} />
              </div>
              <h3 className={`text-3xl font-bold ${colors.text.primary}`}>
                Professional Certifications
              </h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {certifications.map((cert, index) => (
                <div 
                  key={index}
                  className={`p-4 rounded-xl backdrop-blur-sm border shadow-sm hover:shadow-md transition-all duration-300 ${
                    colors.card.background
                  } ${colors.card.border}`}
                >
                  <div className="flex flex-col h-full">
                    <div className="mb-3">
                      <div className={`font-bold mb-1 ${colors.text.primary}`}>{cert.name}</div>
                      <div className={`text-sm ${colors.text.secondary}`}>{cert.issuer}</div>
                    </div>
                    <div className="mt-auto">
                      <div className={`inline-block px-3 py-1 rounded-full ${
                        isDarkMode ? 'bg-blue-600/20' : 'bg-blue-600/10'
                      }`}>
                        <span className={`text-sm font-medium ${colors.text.primary}`}>{cert.year}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Separate component for education card content to avoid duplication
const EducationCardContent = ({ edu, isDarkMode }) => {
  const colors = {
    text: {
      primary: isDarkMode ? 'text-gray-100' : 'text-gray-900',
      secondary: isDarkMode ? 'text-gray-400' : 'text-gray-600',
      tertiary: isDarkMode ? 'text-gray-300' : 'text-gray-700',
    },
    gradient: {
      primary: isDarkMode ? 'from-blue-400 to-purple-400' : 'from-blue-600 to-purple-600',
    }
  };

  return (
    <>
      {/* Degree Header */}
      <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-6">
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-2">
            <div className={`p-2 rounded-lg bg-gradient-to-r ${edu.color} ${
              isDarkMode ? 'bg-opacity-20' : 'bg-opacity-10'
            }`}>
              <GraduationCap className={`w-5 h-5 bg-gradient-to-r ${edu.color} bg-clip-text text-transparent`} />
            </div>
            <h4 className={`text-xl font-bold ${colors.text.primary}`}>{edu.degree}</h4>
          </div>
          <div className={`text-lg font-semibold bg-gradient-to-r ${colors.gradient.primary} bg-clip-text text-transparent`}>
            {edu.university || edu.institution}
          </div>
        </div>
        
        {/* GPA Badge */}
        <div className={`px-4 py-2 rounded-full bg-gradient-to-r ${edu.color} ${
          isDarkMode ? 'bg-opacity-20' : 'bg-opacity-10'
        }`}>
          <div className={`font-bold text-white text-center ${colors.text.primary}`}>{edu.gpa}</div>
          <div className={`text-xs text-white text-center ${colors.text.secondary}`}>GPA</div>
        </div>
      </div>

      {/* Location & Period */}
      <div className={`flex flex-wrap gap-4 mb-6 ${colors.text.secondary}`}>
        <div className="flex items-center gap-2">
          <Calendar className="w-4 h-4" />
          <span className="font-medium">{edu.period}</span>
        </div>
        <div className="flex items-center gap-2">
          <MapPin className="w-4 h-4" />
          <span>{edu.location}</span>
        </div>
      </div>

      {/* Achievements */}
      <div>
        <h5 className={`text-lg font-bold mb-3 flex items-center gap-2 ${colors.text.primary}`}>
          <Award className={`w-5 h-5 ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`} />
          Key Achievements
        </h5>
        <ul className="space-y-2">
          {edu.achievements.map((achievement, i) => (
            <li key={i} className="flex items-start gap-3">
              <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 mt-2 flex-shrink-0" />
              <span className={colors.text.tertiary}>{achievement}</span>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default About;