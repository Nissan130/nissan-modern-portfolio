import React from 'react';
import { Cpu, Code, Wrench, Brain } from 'lucide-react';

const Skills = ({ isDarkMode }) => {
  const skillCategories = [
    {
      category: 'Programming Languages',
      icon: <Code className="w-6 h-6" />,
      skills: [
        { name: 'C/C++', color: 'from-blue-600 to-cyan-600' },
        { name: 'Python', color: 'from-emerald-600 to-green-600' },
        { name: 'JavaScript', color: 'from-yellow-600 to-amber-600' },
        { name: 'SQL', color: 'from-purple-600 to-pink-600' },
      ]
    },
    {
      category: 'Tools & Frameworks',
      icon: <Wrench className="w-6 h-6" />,
      skills: [
        { name: 'React.js / React Native', color: 'from-green-600 to-emerald-600' },
        { name: 'HTML5 / CSS3', color: 'from-gray-600 to-gray-800' },
        { name: 'MongoDB', color: 'from-blue-600 to-cyan-600' },
        { name: 'Flask / FastAPI', color: 'from-purple-600 to-pink-600' },
        { name: 'Node.js / Express', color: 'from-indigo-600 to-purple-600' },
        { name: 'Git', color: 'from-orange-600 to-red-600' },
      ]
    },
    {
      category: 'AI & Data',
      icon: <Brain className="w-6 h-6" />,
      skills: [
        { name: 'Machine Learning / Deep Learning', color: 'from-purple-600 to-indigo-600' },
        { name: 'NLP / Generative AI', color: 'from-sky-600 to-blue-600' },
        { name: 'Computer Vision', color: 'from-green-600 to-emerald-600' },
        { name: 'Scikit-learn / TensorFlow', color: 'from-orange-600 to-amber-600' },
        { name: 'Pandas / NumPy / Seaborn', color: 'from-blue-600 to-cyan-600' },
      ]
    }
  ];

  const skillsGained = [
    "Full Stack Development",
    "Machine Learning Implementation",
    "Agile Methodologies",
    "Cloud Deployment",
    "API Design & Development",
    "Team Collaboration",
    "Problem Solving",
    "Technical Documentation"
  ];

  const skillsGainedDetails = {
    "Full Stack Development":
      "Built complete applications covering frontend UI, backend logic, APIs, and databases.",
    "Machine Learning Implementation":
      "Implemented ML/DL models, handled data preprocessing, training, evaluation, and inference.",
    "Agile Methodologies":
      "Applied sprint-based development with iterative improvements and task prioritization.",
    "Cloud Deployment":
      "Deployed and managed applications using cloud platforms with environment configurations.",
    "API Design & Development":
      "Designed secure, scalable REST APIs with authentication and validation layers.",
    "Team Collaboration":
      "Worked collaboratively using Git workflows, code reviews, and shared repositories.",
    "Problem Solving":
      "Analyzed problems logically and delivered optimized, efficient technical solutions.",
    "Technical Documentation":
      "Created clear documentation, README files, and API references for maintainability."
  };

  const colors = {
    background: isDarkMode ? 'bg-gray-900' : 'bg-gray-50',
    text: {
      primary: isDarkMode ? 'text-gray-100' : 'text-gray-900',
      secondary: isDarkMode ? 'text-gray-400' : 'text-gray-600',
    },
    badge: {
      background: isDarkMode ? 'bg-gray-800/80' : 'bg-white/80',
      border: isDarkMode ? 'border-gray-700' : 'border-gray-200',
    },
    card: {
      background: isDarkMode ? 'bg-gray-800/80' : 'bg-white/80',
      border: isDarkMode ? 'border-gray-700/50' : 'border-gray-200/50',
    },
    gradient: {
      primary: isDarkMode
        ? 'from-blue-400 to-purple-400'
        : 'from-blue-600 to-purple-600',
    }
  };

  return (
    <section
      id="skills"
      className={`min-h-screen px-4 py-20 ${colors.background}`}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <div
            className={`inline-flex items-center gap-2 px-6 py-2 rounded-full backdrop-blur-sm border shadow-lg mb-6 ${colors.badge.background
              } ${colors.badge.border}`}
          >
            <Cpu
              className={`w-4 h-4 ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`}
            />
            <span
              className={`text-sm font-semibold bg-gradient-to-r ${colors.gradient.primary} bg-clip-text text-transparent`}
            >
              Technical Expertise
            </span>
            <div
              className={`w-2 h-2 rounded-full bg-gradient-to-r ${colors.gradient.primary} animate-pulse`}
            />
          </div>

          <h2 className="text-5xl font-bold mb-6">
            <span className={`bg-gradient-to-r ${colors.gradient.primary} bg-clip-text text-transparent`}>
              Skills & Technologies
            </span>
          </h2>

          <p className={`text-xl ${colors.text.secondary}`}>
            Specialized expertise in AI, backend systems, and modern development tools
          </p>
        </div>

        {/* Skills Categories */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, idx) => (
            <div
              key={idx}
              className={`p-8 rounded-3xl border ${colors.card.background} ${colors.card.border}`}
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="p-3 rounded-xl bg-blue-500/10 text-blue-500">
                  {category.icon}
                </div>
                <h3 className={`text-2xl font-bold ${colors.text.primary}`}>
                  {category.category}
                </h3>
              </div>

              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, i) => (
                  <span
                    key={i}
                    className={`px-4 py-2 rounded-full border text-sm font-medium ${colors.text.secondary}`}
                  >
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Skills Gained */}
        <div className="mt-24">
          <div className="text-center mb-12">
            <h3 className={`text-3xl font-bold mb-4 ${colors.text.primary}`}>
              Skills Developed
            </h3>
            <p className={`${colors.text.secondary}`}>
              Practical capabilities gained through projects and academic experience
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {skillsGained.map((skill, index) => (
              <div
                key={index}
                className={`p-6 rounded-xl border transition hover:-translate-y-1 ${colors.card.background} ${colors.card.border}`}
              >
                <h4 className={`font-bold mb-2 ${colors.text.primary}`}>
                  {skill}
                </h4>
                <p className={`text-sm ${colors.text.secondary}`}>
                  {skillsGainedDetails[skill]}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
