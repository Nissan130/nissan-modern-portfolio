import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [showBackToTop, setShowBackToTop] = useState(false);

  // Initialize dark mode
  useEffect(() => {
    const isDark = localStorage.getItem('darkMode') === 'true';
    setIsDarkMode(isDark);
    
    // Set initial dark mode class
    if (isDark) {
      document.documentElement.classList.add('dark');
    }
    
    // Scroll spy setup
    const handleScroll = () => {
      const sections = ['home', 'about', 'projects', 'skills', 'experience', 'contact'];
      const scrollPosition = window.scrollY + 100;

      // Show/hide back to top button
      setShowBackToTop(window.scrollY > 500);

      // Find active section
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    // Initial check
    handleScroll();

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Function to handle dark mode toggle
  const toggleDarkMode = () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);
    localStorage.setItem('darkMode', newMode.toString());
    
    if (newMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  // Function to handle smooth scrolling to section
  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      isDarkMode 
        ? 'dark bg-gradient-to-br from-gray-900 to-gray-800' 
        : 'bg-gradient-to-br from-gray-50 to-white'
    }`}>
      {/* Pass all necessary props to Navbar */}
      <Navbar 
        activeSection={activeSection}
        scrollToSection={scrollToSection}
        isDarkMode={isDarkMode}
        toggleDarkMode={toggleDarkMode}
        showBackToTop={showBackToTop}
      />
      
      {/* Render all components */}
      <Home isDarkMode = {isDarkMode} toggleDarkMode = {toggleDarkMode} />
      <About isDarkMode = {isDarkMode} toggleDarkMode = {toggleDarkMode} />
      <Projects isDarkMode = {isDarkMode} toggleDarkMode = {toggleDarkMode}/>
      <Skills isDarkMode = {isDarkMode} toggleDarkMode = {toggleDarkMode}/>
      <Experience isDarkMode = {isDarkMode} toggleDarkMode = {toggleDarkMode}/>
      <Contact isDarkMode = {isDarkMode} toggleDarkMode = {toggleDarkMode}/>
      <Footer isDarkMode = {isDarkMode} toggleDarkMode = {toggleDarkMode}/>
    </div>
  );
}

export default App;