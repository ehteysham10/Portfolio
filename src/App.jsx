import { useState, useEffect, useRef } from "react";
import { motion, useScroll } from "framer-motion";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Stats from "./components/Stats";
import MatrixRain from "./components/MatrixRain";

/* ── Cursor Spotlight ─────────────────────────────────────── */
function CursorSpotlight() {
  const spotlightRef = useRef(null);

  useEffect(() => {
    const el = spotlightRef.current;
    if (!el) return;

    const handleMouseMove = (e) => {
      el.style.background = `radial-gradient(
        400px circle at ${e.clientX}px ${e.clientY}px,
        rgba(59, 130, 246, 0.06) 0%,
        transparent 70%
      )`;
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div
      ref={spotlightRef}
      className="cursor-spotlight dark:block hidden"
      aria-hidden="true"
    />
  );
}

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
      {/* Matrix code rain — fixed full-screen background */}
      <MatrixRain isDarkMode={isDarkMode} />

      {/* Cursor spotlight — visible on dark mode only */}
      <CursorSpotlight />

      {/* Scroll progress bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-blue-500 to-purple-500 origin-left z-[100]"
        style={{ scaleX: scrollYProgress }}
      />

      {/* All page content — sits above the canvas */}
      <div className="relative z-10">
        <Navbar toggleTheme={toggleTheme} isDarkMode={isDarkMode} />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
        <Stats />
      </div>
    </div>
  );
}

export default App;