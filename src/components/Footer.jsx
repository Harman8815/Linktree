import React from 'react'

const Footer = ({ darkBg }) => {
  return (
    <footer className={` w-full text-center py-4 text-sm ${darkBg ? "text-gray-400 bg-gray-800" : "text-gray-500 bg-white"} border-t`}>
      © {new Date().getFullYear()} MyLinktree. All rights reserved.
    </footer>
  );
};


export default Footer