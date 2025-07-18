import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import LoadingScreen from "./components/LoadingScreen";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Footer from "./components/Footer";
import CodingProfiles from "./components/sections/CodingProfiles";
import Projects from "./components/sections/Projects";
import Social from "./components/sections/Social";
import "./App.css";

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    // Check for saved theme preference or default to light mode
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setDarkMode(savedTheme === "dark");
    }
  }, []);

  useEffect(() => {
    // Save theme preference
    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  if (isLoading) {
    return <LoadingScreen onFinish={handleLoadingComplete} />;
  }

  return (
    <Router>
      <div
        className={`min-h-screen transition-all duration-500 font-body ${
          darkMode ? "bg-gray-900 text-white" : "bg-gray-50 text-black"
        }`}
      >
        <Navbar darkBg={darkMode} toggleDark={toggleDarkMode} />

        <div className="pt-16 sm:pt-18 lg:pt-20">
          <Routes>
            <Route path="/" element={<Home darkBg={darkMode} />} />
            <Route path="/coding" element={<CodingProfiles darkBg={darkMode} />} />
            <Route path="/projects" element={<Projects darkBg={darkMode} />} />
            <Route path="/social" element={<Social darkBg={darkMode} />} />

            {/* Redirect unknown paths to home */}
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </div>

        <Footer darkBg={darkMode} />
      </div>
    </Router>
  );
}

export default App;
