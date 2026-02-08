import { useState } from 'react';
import { ExternalLink, Github, Star, Eye, ArrowRight, Zap, FolderGit2, Globe } from 'lucide-react';

const Projects = ({ isDarkMode, toggleDarkMode }) => {
  const [hoveredProject, setHoveredProject] = useState(null);

  const projects = [
    {
      title: "Asbab E-commerce Website",
      description: "A full-stack e-commerce web application for product browsing, order placement, and efficient product and order management.",
      image: "public/images/ecommerce-website1.png",
      gradient: "from-blue-600/20 to-purple-600/20",
      darkGradient: "from-blue-600/10 to-purple-600/10",
      tags: ["HTML", "CSS", "JavaScript", "React", "Node.js","MySQL"],
      liveUrl: "#",
      githubUrl: "https://github.com/Nissan130/Asbab-Ecommerce-Website",
      featured: true
    },
    {
      title: "Rajshahi District Portal App",
      description: "A full-stack mobile application that provides comprehensive information about the Rajshahi district of Bangladesh, including hospitals, educational institutions, and other essential services.",
      image: "public/images/rajshahi-district-portal1.png",
      gradient: "from-sky-500/20 to-blue-500/20",
      darkGradient: "from-sky-500/10 to-blue-500/10",
      tags: ["React Native", "Node.js","MongoDB"],
      liveUrl: "#",
      githubUrl: "https://github.com/Nissan130/Rajshahi-District-Portal-App",
      featured: true
    },
    {
      title: "Exam App",
      description: "A full-stack  web application for creating, taking, giving MCQ exam. This is helful for teachers and students.",
      image: "public/images/examapp1.png",
      gradient: "from-violet-500/20 to-indigo-500/20",
      darkGradient: "from-violet-500/10 to-indigo-500/10",
      tags: ["React","TailwindCSS","Flask","PostgreSQL"],
      liveUrl: "https://myexamapp.netlify.app/examiner/dashboard",
      githubUrl: "https://github.com/Nissan130/examApp",
      featured: true
    },
    {
      title: "Heart Disease Prediction",
      description: "A machine learning model that predicts heart disease of a person based on some features",
      image: "public/images/heart-disease-prediction1.png",
      gradient: "from-emerald-500/20 to-cyan-500/20",
      darkGradient: "from-emerald-500/10 to-cyan-500/10",
      tags: ["Python","NumPy","Seaborn","Scikit-learn","ML"],
      liveUrl: "#",
      githubUrl: "https://github.com/Nissan130/heart-disease-prediction-ml",
      stars: 89,
      views: 2500,
      featured: true
    }
  ];

  const categories = ["All", "Full-Stack", "AI/ML", "Web Apps", "Mobile", "Data Science"];
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = activeCategory === "All" 
    ? projects 
    : projects.filter(project => 
        project.tags.some(tag => 
          tag.toLowerCase().includes(activeCategory.toLowerCase().replace('/', ''))
        )
      );

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
      hover: isDarkMode ? 'hover:border-gray-600' : 'hover:border-gray-300',
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
    button: {
      primary: isDarkMode 
        ? 'bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600' 
        : 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700',
      secondary: {
        background: isDarkMode ? 'bg-gray-700' : 'bg-gray-100',
        hover: isDarkMode ? 'hover:bg-gray-600' : 'hover:bg-gray-200',
        text: isDarkMode ? 'text-gray-200' : 'text-gray-800',
      }
    },
    tag: {
      background: isDarkMode ? 'bg-gray-700/50' : 'bg-gray-100/80',
      hover: isDarkMode ? 'hover:bg-blue-900/30' : 'hover:bg-blue-100',
      text: isDarkMode ? 'text-gray-300' : 'text-gray-700',
    },
    preview: {
      background: isDarkMode ? 'from-gray-800 to-gray-900' : 'from-gray-100 to-gray-50',
      icon: {
        gradient: isDarkMode ? 'from-blue-400 to-purple-400' : 'from-blue-600 to-purple-600',
        opacity: isDarkMode ? 'opacity-30' : 'opacity-20',
      }
    },
    stats: {
      background: isDarkMode ? 'bg-blue-600/20' : 'bg-blue-600/10',
      border: isDarkMode ? 'border-blue-800/20' : 'border-blue-200/50',
    }
  };

  return (
    <section id="projects" className={`min-h-screen flex items-center justify-center px-4 py-20 relative overflow-hidden ${colors.background}`}>
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
        
        {/* Grid Pattern */}
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
            <FolderGit2 className={`w-4 h-4 ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`} />
            <span className={`text-sm font-semibold bg-gradient-to-r ${colors.gradient.primary} bg-clip-text text-transparent`}>
              My Portfolio
            </span>
            <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${colors.gradient.primary} animate-pulse`} />
          </div>
          
          <h2 className="text-5xl font-bold mb-6">
            <span className={`block bg-gradient-to-r ${colors.gradient.primary} bg-clip-text text-transparent`}>
              Featured Projects
            </span>
          </h2>
          
          <p className={`text-lg max-w-xl mx-auto mb-12 ${colors.text.secondary}`}>
            A showcase of my recent work, combining technical expertise with creative problem-solving
          </p>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`cursor-pointer px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeCategory === category
                    ? `${colors.button.primary} text-white shadow-lg`
                    : `${colors.card.background} backdrop-blur-sm border ${colors.card.border} ${colors.text.tertiary} ${colors.card.hover} hover:shadow-md`
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={index}
              className="group relative"
              onMouseEnter={() => setHoveredProject(index)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              {/* Glow Effect */}
              <div className={`absolute -inset-4 bg-gradient-to-br ${
                isDarkMode ? project.darkGradient : project.gradient
              } rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500`} />
              
              {/* Project Card */}
              <div className={`relative h-full backdrop-blur-sm rounded-2xl border overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 ${
                colors.card.background
              } ${colors.card.border}`}>
                {/* Featured Badge */}
                {project.featured && (
                  <div className="absolute top-4 right-4 z-10">
                    <div className="flex items-center gap-1 px-3 py-1 rounded-full bg-gradient-to-r from-amber-500 to-orange-500 text-white text-xs font-bold">
                      <Zap className="w-3 h-3" />
                      <span>FEATURED</span>
                    </div>
                  </div>
                )}

                {/* Project Image/Preview */}
                <div className={`relative h-56 overflow-hidden bg-gradient-to-br ${colors.preview.background}`}>
                  <div className="absolute  flex items-center justify-center">
                    <div className="w-full h-full flex items-center justify-center">
                      <div className={`text-4xl font-bold
                      }`}>
                        <img src={project.image} alt={project.title} />
                      </div>
                    </div>
                  </div>
                  
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                    <div className="flex gap-4">
                      <a 
                        href={project.githubUrl}
                        className={`p-3 rounded-full ${
                          isDarkMode ? 'bg-gray-800/90' : 'bg-white/90'
                        } backdrop-blur-sm hover:${
                          isDarkMode ? 'bg-gray-700' : 'bg-white'
                        } transition-colors`}
                        title="View Code"
                      >
                        <Github className={`w-5 h-5 ${isDarkMode ? 'text-gray-100' : 'text-gray-900'}`} />
                      </a>
                      <a 
                        href={project.liveUrl}
                        className={`p-3 rounded-full ${
                          isDarkMode ? 'bg-gray-800/90' : 'bg-white/90'
                        } backdrop-blur-sm hover:${
                          isDarkMode ? 'bg-gray-700' : 'bg-white'
                        } transition-colors`}
                        title="Live Demo"
                      >
                        <ExternalLink className={`w-5 h-5 ${isDarkMode ? 'text-gray-100' : 'text-gray-900'}`} />
                      </a>
                    </div>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">

                  {/* Title & Description */}
                  <h3 className={`text-xl font-bold mb-3 line-clamp-1 ${colors.text.primary}`}>
                    {project.title}
                  </h3>
                  <p className={`mb-6 line-clamp-2 ${colors.text.tertiary}`}>
                    {project.description}
                  </p>

                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className={`px-3 py-1.5 text-xs font-medium rounded-full ${
                          colors.tag.background
                        } ${colors.tag.text} hover:${
                          colors.tag.hover
                        } transition-all duration-300`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    <a
                      href={project.githubUrl}
                      className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-lg ${
                        colors.button.secondary.background
                      } ${colors.button.secondary.text} hover:${
                        colors.button.secondary.hover
                      } transition-all duration-300 group`}
                    >
                      <Github className="w-4 h-4" />
                      <span>Code</span>
                    </a>
                    <a
                      href={project.liveUrl}
                      className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-lg ${
                        colors.button.primary
                      } text-white transition-all duration-300 group`}
                    >
                      <Globe className="w-4 h-4" />
                      <span>Live Demo</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View More Section */}
        <div className="text-center mt-20">
          <div className={`inline-flex items-center gap-4 px-8 py-4 rounded-2xl border ${
            colors.stats.background
          } ${colors.stats.border}`}>
            <div className="text-left">
              <h3 className={`text-xl font-bold mb-1 ${colors.text.primary}`}>
                Want to see more?
              </h3>
              <p className={colors.text.secondary}>
                Check out my GitHub for additional projects and contributions
              </p>
            </div>
            <a
              href="https://github.com/Nissan130"
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center gap-2 px-6 py-3 rounded-xl ${
                colors.button.primary
              } text-white font-semibold transition-all duration-300 group`}
            >
              <Github className="w-5 h-5" />
              <span>View GitHub</span>
              <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;