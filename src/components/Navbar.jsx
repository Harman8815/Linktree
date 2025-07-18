"use client";

import { useEffect, useRef, useState } from "react";
import { Code, Users, Layers, Home, Menu, X } from "lucide-react";
import { gsap } from "gsap";
import { Link } from "react-router-dom";

import "./NebulaToggle.css";

const Navbar = ({ darkBg, toggleDark, currentPath, onNavigate }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navRef = useRef(null);
  const logoRef = useRef(null);
  const linksRef = useRef([]);
  const mobileMenuRef = useRef(null);

  const tabs = [
    { name: "Home", path: "/", icon: Home },
    { name: "Social", path: "/social", icon: Users },
    { name: "Projects", path: "/projects", icon: Layers },
    { name: "Coding", path: "/coding", icon: Code },
  ];

  useEffect(() => {
    const nav = navRef.current;
    const logo = logoRef.current;
    const links = linksRef.current;

    // Initial animations
    gsap.fromTo(
      nav,
      { y: -100, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" }
    );

    gsap.fromTo(
      logo,
      { x: -50, opacity: 0 },
      { x: 0, opacity: 1, duration: 0.6, delay: 0.2, ease: "power2.out" }
    );

    gsap.fromTo(
      links,
      { y: -20, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.4,
        stagger: 0.1,
        delay: 0.4,
        ease: "power2.out",
      }
    );

    // Scroll effect
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (scrollY > 50) {
        gsap.to(nav, { backdropFilter: "blur(20px)", duration: 0.3 });
      } else {
        gsap.to(nav, { backdropFilter: "blur(10px)", duration: 0.3 });
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const mobileMenu = mobileMenuRef.current;
    if (mobileMenu) {
      if (isMobileMenuOpen) {
        gsap.fromTo(
          mobileMenu,
          { height: 0, opacity: 0 },
          { height: "auto", opacity: 1, duration: 0.3, ease: "power2.out" }
        );
      } else {
        gsap.to(mobileMenu, {
          height: 0,
          opacity: 0,
          duration: 0.3,
          ease: "power2.in",
        });
      }
    }
  }, [isMobileMenuOpen]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const handleNavigation = (path) => {
    onNavigate(path);
    closeMobileMenu();
  };

  return (
    <nav
      ref={navRef}
      className={`fixed w-full top-0 left-0 z-50 transition-all duration-300 backdrop-blur-md border-b
        ${
          darkBg
            ? "bg-gray-900/80 text-white border-gray-700/50"
            : "bg-white/80 text-gray-800 border-gray-200/50"
        }`}
      style={{
        boxShadow: darkBg
          ? "0 4px 20px -4px rgba(0, 0, 0, 0.3)"
          : "0 4px 20px -4px rgba(0, 0, 0, 0.1)",
      }}
    >
      <div className="max-w-7xl mx-auto px-3 xs:px-4 sm:px-6 py-2.5 xs:py-3 sm:py-4">
        <div className="flex justify-between items-center">
          {/* Left: Logo/Brand */}
          <div
            ref={logoRef}
            className="flex items-center gap-1.5 xs:gap-2 sm:gap-3"
          >
            <div
              className={`p-1 xs:p-1.5 sm:p-2 rounded-xl transition-all duration-300 ${
                darkBg ? "bg-blue-900/50" : "bg-blue-100"
              }`}
            >
              <Code
                className={`w-4 h-4 xs:w-5 xs:h-5 sm:w-6 sm:h-6 ${
                  darkBg ? "text-blue-400" : "text-blue-600"
                }`}
              />
            </div>
            <div>
              <h1 className="text-base xs:text-lg sm:text-xl font-bold tracking-tight bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Portfolio Hub
              </h1>
              <p
                className={`text-xs hidden sm:block ${
                  darkBg ? "text-gray-400" : "text-gray-600"
                }`}
              >
                Developer Showcase
              </p>
            </div>
          </div>

          {/* Center: Navigation Links - Desktop */}
          <div className="hidden md:flex items-center gap-1 lg:gap-2">
            {tabs.map((tab, index) => {
              const IconComponent = tab.icon;
              const isActive = currentPath === tab.path;
              return (
                <Link
                  key={tab.path}
                  ref={(el) => (linksRef.current[index] = el)}
                  to={tab.path}
                  onClick={closeMobileMenu}
                  className={`group flex items-center gap-2 px-2.5 lg:px-3 xl:px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 hover:scale-105 ${
                    isActive
                      ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg shadow-blue-500/25"
                      : darkBg
                      ? "text-gray-300 hover:text-white hover:bg-gray-800/50"
                      : "text-gray-700 hover:text-gray-900 hover:bg-gray-100/50"
                  }`}
                >
                  <IconComponent className="w-4 h-4" />
                  <span className="hidden lg:block xl:inline">{tab.name}</span>
                </Link>
              );
            })}
          </div>

          {/* Right: Theme Toggle & Mobile Menu */}
          <div className="flex items-center gap-1.5 xs:gap-2 sm:gap-4">
            {/* Mobile menu button */}
            <button
              onClick={toggleMobileMenu}
              className={`md:hidden p-1.5 xs:p-2 rounded-lg transition-colors duration-200 ${
                darkBg
                  ? "hover:bg-gray-800 text-gray-300"
                  : "hover:bg-gray-100 text-gray-700"
              }`}
            >
              {isMobileMenuOpen ? (
                <X className="w-4 h-4 xs:w-5 xs:h-5" />
              ) : (
                <Menu className="w-4 h-4 xs:w-5 xs:h-5" />
              )}
            </button>

            {/* Theme Toggle - keeping your custom CSS */}
            <div className="flex-shrink-0 scale-75 xs:scale-90 sm:scale-100">
              <label className="container">
                <input
                  type="checkbox"
                  checked={!darkBg}
                  onChange={toggleDark}
                />
                <div className="checkbox-wrapper">
                  <div className="checkmark"></div>
                  <div className="nebula-glow"></div>
                  <div className="sparkle-container"></div>
                </div>
              </label>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          ref={mobileMenuRef}
          className={`md:hidden overflow-hidden ${
            isMobileMenuOpen ? "block" : "hidden"
          }`}
          style={{ height: 0, opacity: 0 }}
        >
          <div
            className={`px-2 py-3 xs:py-4 border-t mt-3 xs:mt-4 ${
              darkBg ? "border-gray-700" : "border-gray-200"
            }`}
          >
            <div className="space-y-1.5 xs:space-y-2">
              {tabs.map((tab) => {
                const IconComponent = tab.icon;
                const isActive = currentPath === tab.path;
                return (
                  <Link
                    key={tab.path}
                    to={tab.path}
                    onClick={closeMobileMenu}
                    className={`w-full flex items-center gap-3 px-3 xs:px-4 py-2.5 xs:py-3 rounded-lg text-sm font-medium transition-colors ${
                      isActive
                        ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white"
                        : darkBg
                        ? "text-gray-300 hover:text-white hover:bg-gray-800"
                        : "text-gray-700 hover:text-gray-900 hover:bg-gray-100"
                    }`}
                  >
                    <IconComponent className="w-4 h-4" />
                    {tab.name}
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
