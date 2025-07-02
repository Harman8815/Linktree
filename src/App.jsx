import React, { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/Home";
import LoadingScreen from "./components/LoadingScreen.jsx";

const App = () => {
  const [darkBg, setDarkBg] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  const [exitduration, setexitduration] = useState(1.5);
  const contentRef = useRef();

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!isLoading && contentRef.current) {
      gsap.fromTo(
        contentRef.current,
        {
          opacity: 0,
          y: 50,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
        }
      );
    }
  }, [isLoading]);

  return isLoading ? (
    <LoadingScreen
      onFinish={() => setIsLoading(false)}
      exitDuration={exitduration}
    />
  ) : (
    <div
      ref={contentRef}
      className={`min-h-screen flex flex-col justify-between transition-colors duration-300 ${
        darkBg ? "bg-gray-900 text-white" : "bg-gray-100 text-black"
      }`}
    >
      <Navbar darkBg={darkBg} toggleDark={() => setDarkBg(!darkBg)} />
      <Home darkBg={darkBg} />
      <Footer darkBg={darkBg} />
    </div>
  );
};

export default App;
