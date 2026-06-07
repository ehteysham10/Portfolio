import { useState, useEffect } from "react";
import { motion, useScroll } from "framer-motion";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Stats from "./components/Stats";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  const toggleTheme = () => setIsDarkMode(!isDarkMode);

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 dark:bg-black dark:text-white transition-colors duration-300 relative">
      <motion.div
        className="fixed top-0 left-0 right-0 h-1.5 bg-blue-500 origin-left z-[100]"
        style={{ scaleX: scrollYProgress }}
      />
      <Navbar toggleTheme={toggleTheme} isDarkMode={isDarkMode} />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
      <Stats />
    </div>
  );
}

export default App;