import React, { useState } from 'react';
import Social from "./sections/Social.jsx";
import Projects from './sections/Projects.jsx';
import CodingProfiles from './sections/CodingProfiles.jsx';

const Home = ({ darkBg }) => {
  const [selected, setSelected] = useState('social');
  const tabs = ['social', 'projects', 'coding'];

  const renderSection = () => {
    switch (selected) {
      case 'projects':
        return <Projects darkBg={darkBg} />;
      case 'coding':
        return <CodingProfiles darkBg={darkBg} />;
      default:
        return <Social darkBg={darkBg} />;
    }
  };

  return (
    <div
      className={`w-full  px-4 sm:px-6 md:px-8 py-8 sm:py-10 transition duration-300 
        ${darkBg ? 'bg-gray-900 text-white' : 'bg-gray-100 text-black'}`}
    >
      {/* Header */}
      <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-center mb-8">
        Welcome to My Linktree
      </h1>

      {/* Tab Toggle */}
      <div className="flex justify-center mb-10">
        <div
          className={`relative flex overflow-hidden w-full max-w-xs sm:max-w-md h-10 
            ${darkBg ? 'bg-gray-700' : 'bg-gray-200'} rounded-full`}
        >
          {/* Sliding highlight */}
          <div
            className={`absolute top-0 left-0 h-full w-1/3 z-0 
              ${darkBg ? 'bg-blue-400' : 'bg-blue-500'} 
              transition-transform duration-300 ease-in-out
              ${selected === 'projects' ? 'translate-x-[100%]' : ''}
              ${selected === 'coding' ? 'translate-x-[200%]' : ''}
            `}
          ></div>

          {/* Tab Buttons */}
          {tabs.map((tab, index) => {
            const isActive = selected === tab;
            const textColor = isActive ? 'text-white' : darkBg ? 'text-gray-300' : 'text-gray-800';
            const baseStyle = `z-10 w-1/3 h-full text-xs sm:text-sm font-medium transition-colors duration-200 focus:outline-none flex items-center justify-center`;

            let radius = '';
            if (index === 0) radius = 'rounded-l-full';
            else if (index === 2) radius = 'rounded-r-full';

            return (
              <button
                key={tab}
                onClick={() => setSelected(tab)}
                className={`${baseStyle} ${textColor} ${radius}`}
              >
                {tab === 'social' && 'Social'}
                {tab === 'projects' && 'Projects'}
                {tab === 'coding' && 'Coding'}
              </button>
            );
          })}
        </div>
      </div>

      {/* Content Section */}
      <div className="w-full">
        {renderSection()}
      </div>
    </div>
  );
};

export default Home;
