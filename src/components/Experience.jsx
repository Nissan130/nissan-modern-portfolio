import React from 'react';
import {
  GraduationCap,
  Calendar,
  MapPin,
  Award,
  Star,
  Users,
  Target,
  BookOpen,
  Code,
  Lightbulb,
  Briefcase,
  Rocket
} from 'lucide-react';

const Experience = ({ isDarkMode }) => {
  const experiences = [
    {
      title: "Final Year Thesis",
      organization: "CSE Department",
      role: "Researcher (Final Semester)",
      period: "2025 - 2026",
      location: "University Campus",
      description:
        "Conducted a final year thesis in the agriculture domain focusing on Deep Learning and NLP to support farmers with early crop disease identification and actionable advisory. Worked on dataset preparation, model experimentation, evaluation, and building a lightweight web API demo for showcasing results.",
      achievements: [
        "Designed a crop disease prediction and advisory system with an end-to-end pipeline (data → model → inference → advisory output)",
        "Collected/organized agriculture-related samples and performed preprocessing (cleaning, augmentation, tokenization as needed)",
        "Experimented with multiple DL/NLP approaches and tuned hyperparameters to improve generalization",
        "Evaluated performance using standard metrics (accuracy/F1 where applicable) and documented results clearly for thesis reporting",
        "Built a simple Flask/FastAPI-based API demo to serve predictions and recommendations",
        "Used Git for version control and maintained thesis documentation, experiments, and reproducible runs"
      ],
      technologies: ["Python", "Deep Learning", "NLP", "Flask/FastAPI", "Git"],
      gradient: "from-blue-600/20 to-cyan-600/20",
      darkGradient: "from-blue-600/10 to-cyan-600/10",
      featured: true
    },
    {
      title: "Industrial Attachment (Internship)",
      organization: "Ankabut Software Company",
      role: "Intern (Web Development)",
      period: "2025",
      location: "Remote",
      description:
        "Completed an industrial attachment at a web-based software company where I observed real development workflows and contributed to web application tasks under guidance.",
      achievements: [
        "Worked with a development team to understand real project structure and workflows",
        "Assisted in frontend and backend tasks based on assigned modules",
        "Practiced API integration, bug fixing, and basic feature development",
        "Learned Git-based collaboration and professional coding practices",
      ],
      technologies: ["HTML", "CSS", "JavaScript", "React", "Express.js", "MongoDB", "Git"],
      gradient: "from-emerald-600/20 to-green-600/20",
      darkGradient: "from-emerald-600/10 to-green-600/10",
      featured: false
    },
    {
      title: "Academic Projects",
      organization: "University Coursework",
      role: "Student Developer",
      period: "2023 - 2026",
      location: "University",
      description:
        "Built multiple academic and personal projects to strengthen my fundamentals in programming, backend development, and AI/ML experimentation.",
      achievements: [
        "Created mini projects to practice CRUD, authentication, and database design",
        "Explored ML/DL concepts through small experiments and notebooks",
        "Improved problem solving skills through regular coding practice",
        "Maintained projects and code versions using Git and clean documentation",
      ],
      technologies: ["Python", "JavaScript", "React", "Flask", "SQL", "Git"],
      gradient: "from-purple-600/20 to-pink-600/20",
      darkGradient: "from-purple-600/10 to-pink-600/10",
      featured: false
    },
  ];

  // ✅ Updated stats to be realistic for a last semester student
  const stats = [
    { label: "Academic Projects", value: "4+", icon: <BookOpen className="w-5 h-5" />, color: "from-blue-600 to-cyan-600" },
    { label: "Tech Stack Used", value: "10+", icon: <Code className="w-5 h-5" />, color: "from-emerald-600 to-green-600" },
    { label: "Industrial Attachment", value: "1", icon: <Briefcase className="w-5 h-5" />, color: "from-purple-600 to-pink-600" },
    { label: "Learning Journey", value: "Ongoing", icon: <Rocket className="w-5 h-5" />, color: "from-amber-600 to-orange-600" },
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
      hover: isDarkMode ? 'shadow-2xl' : 'shadow-2xl',
    },
    gradient: {
      primary: isDarkMode ? 'from-blue-400 to-purple-400' : 'from-blue-600 to-purple-600',
      text: isDarkMode ? 'from-white via-gray-100 to-gray-200' : 'from-gray-900 via-gray-800 to-gray-900',
      overlay: isDarkMode ? 'opacity-[0.02]' : 'opacity-[0.03]',
      timeline: isDarkMode ? 'from-blue-400 via-purple-400 to-pink-400' : 'from-blue-600 via-purple-600 to-pink-600',
      icon: isDarkMode ? 'bg-opacity-20' : 'bg-opacity-10',
    },
    badge: {
      background: isDarkMode ? 'bg-gray-800/80' : 'bg-white/80',
      border: isDarkMode ? 'border-gray-700' : 'border-gray-200',
    },
    technology: {
      background: isDarkMode ? 'from-gray-800 to-gray-700' : 'from-gray-100 to-gray-50',
      hover: isDarkMode ? 'from-blue-900/30 to-purple-900/30' : 'from-blue-100 to-purple-100',
      text: isDarkMode ? 'text-gray-300' : 'text-gray-700',
    },
    philosophy: {
      background: isDarkMode ? 'from-blue-600/20 via-purple-600/20 to-pink-600/20' : 'from-blue-600/10 via-purple-600/10 to-pink-600/10',
      border: isDarkMode ? 'border-blue-800/20' : 'border-blue-200/50',
      card: isDarkMode ? 'bg-gray-900/50' : 'bg-white/50',
    }
  };

  return (
    <section
      id="experience"
      className={`min-h-screen flex items-center justify-center px-4 py-20 relative overflow-hidden ${colors.background}`}
    >
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        {/* Gradient Orbs */}
        <div
          className={`absolute top-1/4 -left-32 w-[500px] h-[500px] rounded-full blur-3xl ${isDarkMode
              ? 'bg-gradient-to-r from-blue-600/5 via-purple-600/5 to-pink-600/5'
              : 'bg-gradient-to-r from-blue-400/10 via-purple-400/10 to-pink-400/10'
            }`}
        />
        <div
          className={`absolute bottom-1/4 -right-32 w-[500px] h-[500px] rounded-full blur-3xl ${isDarkMode
              ? 'bg-gradient-to-r from-emerald-600/5 via-cyan-600/5 to-sky-600/5'
              : 'bg-gradient-to-r from-emerald-400/10 via-cyan-400/10 to-sky-400/10'
            }`}
        />

        {/* Diagonal Lines Pattern */}
        <div
          className={`absolute inset-0 ${colors.gradient.overlay}`}
          style={{
            backgroundImage:
              `linear-gradient(45deg, transparent 49%, currentColor 50%, transparent 51%, transparent)`,
            backgroundSize: '60px 60px',
            color: isDarkMode ? '#9ca3af' : '#6b7280',
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto w-full">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div
            className={`inline-flex items-center gap-2 px-6 py-2 rounded-full backdrop-blur-sm border shadow-lg mb-6 ${colors.badge.background
              } ${colors.badge.border}`}
          >
            <GraduationCap
              className={`w-4 h-4 ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`}
            />
            <span
              className={`text-sm font-semibold bg-gradient-to-r ${colors.gradient.primary} bg-clip-text text-transparent`}
            >
              Student Experience
            </span>
            <div
              className={`w-2 h-2 rounded-full bg-gradient-to-r ${colors.gradient.primary} animate-pulse`}
            />
          </div>

          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span
              className={`block bg-gradient-to-r ${colors.gradient.primary} bg-clip-text text-transparent`}
            >
              Projects & Experience
            </span>
          </h2>

          <p className={`text-lg max-w-2xl mx-auto ${colors.text.secondary}`}>
            Experience gained through academic projects and an industrial attachment internship
          </p>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`group p-6 rounded-2xl backdrop-blur-sm border hover:-translate-y-2 transition-all duration-300 ${colors.card.background
                } ${colors.card.border} ${colors.card.hover}`}
            >
              <div className="flex items-center gap-4 mb-4">
                <div className={`p-3 rounded-xl bg-gradient-to-r ${stat.color} ${colors.gradient.icon}`}>
                  <div className={`bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}>
                    {stat.icon}
                  </div>
                </div>
              </div>

              <div className={`text-3xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2`}>
                {stat.value}
              </div>
              <div className={`text-sm font-medium ${colors.text.secondary}`}>{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Timeline Experience */}
        <div className="relative">
          {/* Timeline Line */}
          <div
            className={`absolute left-8 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b ${colors.gradient.timeline}`}
          />

          {/* Experience Cards */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`relative group ${index % 2 === 0 ? 'md:pr-1/2 md:pl-8' : 'md:pl-1/2 md:pr-8'
                  }`}
              >
                {/* Timeline Dot */}
                <div
                  className={`absolute left-6 md:left-1/2 transform md:-translate-x-1/2 top-6 w-6 h-6 rounded-full bg-gradient-to-r ${colors.gradient.primary} border-4 ${isDarkMode ? 'border-gray-900' : 'border-white'
                    } z-10`}
                />

                {/* Experience Card */}
                <div className={`ml-12 md:ml-0 ${index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'}`}>
                  {/* Glow Effect */}
                  <div
                    className={`absolute -inset-4 bg-gradient-to-br ${isDarkMode ? exp.darkGradient : exp.gradient
                      } rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500`}
                  />

                  {/* Card Content */}
                  <div
                    className={`relative backdrop-blur-sm rounded-2xl border overflow-hidden transition-all duration-500 ${colors.card.background
                      } ${colors.card.border} ${colors.card.hover}`}
                  >
                    {/* Featured Badge */}
                    {exp.featured && (
                      <div className="absolute top-4 right-4 z-10">
                        <div
                          className={`flex items-center gap-1 px-3 py-1 rounded-full bg-gradient-to-r ${colors.gradient.primary} text-white text-xs font-bold`}
                        >
                          <Star className="w-3 h-3" />
                          <span>FINAL YEAR</span>
                        </div>
                      </div>
                    )}

                    <div className="p-8">
                      {/* Title & Organization */}
                      <div className="mb-6">
                        <div className="flex items-start justify-between mb-4">
                          <div>
                            <h3 className={`text-2xl font-bold ${colors.text.primary}`}>
                              {exp.title}
                            </h3>
                            <div
                              className={`flex items-center gap-2 text-lg font-semibold bg-gradient-to-r ${colors.gradient.primary} bg-clip-text text-transparent`}
                            >
                              {exp.role.includes("Intern") ? (
                                <Briefcase className="w-4 h-4" />
                              ) : exp.role.includes("Student") ? (
                                <Code className="w-4 h-4" />
                              ) : exp.role.includes("Learner") ? (
                                <BookOpen className="w-4 h-4" />
                              ) : (
                                <Users className="w-4 h-4" />
                              )}
                              {exp.organization}
                            </div>
                          </div>
                        </div>

                        {/* Location & Period */}
                        <div className={`flex flex-wrap gap-4 ${colors.text.secondary}`}>
                          <div className="flex items-center gap-2">
                            <Calendar className="w-4 h-4" />
                            <span className="font-medium">{exp.period}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <MapPin className="w-4 h-4" />
                            <span>{exp.location}</span>
                          </div>
                        </div>
                      </div>

                      {/* Description */}
                      <p className={`mb-8 leading-relaxed ${colors.text.tertiary}`}>
                        {exp.description}
                      </p>

                      {/* Achievements */}
                      <div className="mb-8">
                        <h4 className={`text-lg font-bold mb-4 flex items-center gap-2 ${colors.text.primary}`}>
                          <Award className={`w-5 h-5 ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`} />
                          Key Highlights
                        </h4>
                        <ul className="space-y-3">
                          {exp.achievements.map((achievement, i) => (
                            <li key={i} className="flex items-start gap-3">
                              <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${colors.gradient.primary} mt-2 flex-shrink-0`} />
                              <span className={colors.text.tertiary}>{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Technologies */}
                      <div>
                        <h4 className={`text-lg font-bold mb-4 ${colors.text.primary}`}>
                          Technologies Used
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech, i) => (
                            <span
                              key={i}
                              className={`px-4 py-2 rounded-full bg-gradient-to-r ${colors.technology.background} ${colors.technology.text} text-sm font-medium hover:${colors.technology.hover} transition-all duration-300`}
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Career Aspirations */}
        <div
          className={`mt-16 p-8 rounded-3xl border ${colors.philosophy.background
            } ${colors.philosophy.border}`}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className={`text-2xl font-bold mb-4 ${colors.text.primary}`}>
                Career Aspirations
              </h3>
              <p className={`leading-relaxed ${colors.text.tertiary}`}>
                I am a final semester Computer Science student and currently building strong foundations in
                backend development and AI/ML through projects and continuous learning. I have completed an
                industrial attachment at <span className="font-semibold">Ankabut Software Company</span> (a web-based
                software company), and I’m now looking for an entry-level opportunity or internship where I can
                contribute, learn from professionals, and grow as a software engineer.
              </p>
            </div>

            <div className="flex flex-col gap-4">
              <div className={`flex items-center gap-4 p-4 rounded-xl ${colors.philosophy.card}`}>
                <Lightbulb className={`w-8 h-8 ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`} />
                <div>
                  <div className={`font-bold ${colors.text.primary}`}>Fast Learner</div>
                  <div className={`text-sm ${colors.text.secondary}`}>
                    Always improving through projects, practice, and feedback
                  </div>
                </div>
              </div>

              <div className={`flex items-center gap-4 p-4 rounded-xl ${colors.philosophy.card}`}>
                <Target className={`w-8 h-8 ${isDarkMode ? 'text-emerald-400' : 'text-emerald-600'}`} />
                <div>
                  <div className={`font-bold ${colors.text.primary}`}>Growth Mindset</div>
                  <div className={`text-sm ${colors.text.secondary}`}>
                    Focused on building real skills for industry-ready development
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Experience;
