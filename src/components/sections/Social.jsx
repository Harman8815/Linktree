import React from 'react';
import SocialCard from '../card/SocialCard.jsx';
import socialData from '../../store/socialData.js';

const Social = ({ darkBg }) => {
  return (
    <div className="flex justify-center items-center px-4">
      <div className={`relative w-full max-w-3xl p-6 rounded-xl overflow-hidden shadow-2xl ring-1 transition
        ${darkBg ? 'bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 ring-gray-700/50' 
                 : 'bg-gradient-to-br from-blue-100 via-white to-purple-100 ring-gray-300/30'}`}
      >
        {/* Animated Rings */}
        <div className="absolute -z-10 inset-0 flex items-center justify-center">
          <div className={`absolute w-72 h-72 rounded-full border-2 animate-ping opacity-20 
            ${darkBg ? 'border-blue-900' : 'border-blue-300'}`}></div>
          <div className={`absolute w-48 h-48 rounded-full border-2 animate-pulse opacity-10 
            ${darkBg ? 'border-purple-800' : 'border-purple-300'}`}></div>
        </div>

        {/* Title */}
        <h2 className={`text-center text-2xl font-bold mb-6 
          ${darkBg ? 'text-white' : 'text-gray-800'}`}
        >
          Connect With Me
        </h2>

        {/* Cards */}
        <div className="space-y-4">
          {socialData.map((item) => (
            <SocialCard key={item.name} {...item} darkBg={darkBg} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Social;
