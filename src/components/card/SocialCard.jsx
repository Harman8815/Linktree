import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa';

const iconMap = {
  github: <FaGithub />,
  linkedin: <FaLinkedin />,
  twitter: <FaTwitter />,
  instagram: <FaInstagram />,
};

const SocialCard = ({ name, url, icon, description, darkBg }) => {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={`flex items-center gap-4 ring-blue-500 hover:ring-4 hover:scale-[1.01] rounded-lg px-4 py-3 transition shadow-lg hover:shadow-xl backdrop-blur-md 
        ${darkBg ? 'bg-gray-800/70 text-white' : 'bg-white/70 text-gray-900'}`}
    >
      <span className={`text-2xl ${darkBg ? 'text-blue-400' : 'text-blue-600'}`}>
        {iconMap[icon]}
      </span>
      <div className="flex flex-col">
        <span className="font-semibold">{name}</span>
        <span className={`text-sm ${darkBg ? 'text-gray-300' : 'text-gray-600'}`}>
          {description}
        </span>
      </div>
    </a>
  );
};

export default SocialCard;
