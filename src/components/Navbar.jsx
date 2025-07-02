import React from "react";
import "./NebulaToggle.css";

const Navbar = ({ darkBg, toggleDark }) => {
  return (
    <nav
      className={`w-full heading  top-0 left-0 z-50 border-b transition-colors duration-300
        ${darkBg ? "bg-gray-900 text-white border-gray-700" : "bg-white text-gray-800 border-gray-200"}`}
    >
      <div className="flex  justify-between items-center w-full px-6 py-3">
        {/* Left: Title */}
        <div className="flex-shrink-0">
          <h1 className="text-xl font-bold tracking-tight">Link Tree</h1>
        </div>

        {/* Right: Toggle */}
        <div className="flex-shrink-0">
          <label className="container">
            <input type="checkbox" checked={!darkBg} onChange={toggleDark} />
            <div className="checkbox-wrapper">
              <div className="checkmark"></div>
              <div className="nebula-glow"></div>
              <div className="sparkle-container"></div>
            </div>
          </label>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
