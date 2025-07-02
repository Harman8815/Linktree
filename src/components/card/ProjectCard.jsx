import React, { useState } from "react";

const ProjectCard = ({
  title,
  logo,
  techStack,
  description,
  subdescription,
  liveLink,
  githubLink,
  darkBg,
}) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      {/* Main Card */}
      <div
        className={`rounded-lg p-4 transition shadow-sm hover:shadow-md hover:ring-2 hover:ring-blue-500 flex items-center justify-between gap-4
          ${darkBg ? "bg-gray-800 text-white" : "bg-white text-gray-900"}
        `}
      >
        {/* Left: Logo + Title */}
        <div className="flex items-center gap-3 min-w-0 overflow-hidden">
          <img
            src={logo}
            alt={title}
            className="w-8 h-8 object-contain rounded-md"
            style={{ background: logo?.backgroundColor }}
          />
          <div className="truncate">
            <h3 className="text-sm font-semibold truncate">{title}</h3>
          </div>
        </div>

        {/* Right: Buttons */}
        <div className="flex gap-2 flex-shrink-0">
          <button
            onClick={() => setShowModal(true)}
            className="px-3 py-1 text-xs rounded bg-blue-600 text-white hover:bg-blue-700"
          >
            Read More
          </button>
          {liveLink && (
            <a
              href={liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className={`px-3 py-1 text-xs rounded text-white ${
                liveLink !== "#"
                  ? "bg-green-600 hover:bg-green-700"
                  : "bg-gray-400 cursor-not-allowed pointer-events-none"
              }`}
              aria-disabled={liveLink === "#"}
            >
              Live
            </a>
          )}
          {githubLink && (
            <a
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className={`px-3 py-1 text-xs rounded text-white ${
                githubLink !== "#"
                  ? "bg-gray-700 hover:bg-gray-800"
                  : "bg-gray-400 cursor-not-allowed pointer-events-none"
              }`}
              aria-disabled={githubLink === "#"}
            >
              Code
            </a>
          )}
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div
          className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center px-4"
          onClick={() => setShowModal(false)}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className={`max-w-md w-full rounded-xl p-5 relative
              ${darkBg ? "bg-gray-900 text-white" : "bg-white text-gray-900"}
            `}
          >
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-2 right-2 text-gray-400 hover:text-red-500 text-xl"
            >
              &times;
            </button>

            <h2 className="text-lg font-bold mb-2">{title}</h2>
            <p className="mb-2 text-sm">{description}</p>
            <p className="mb-4 text-sm text-gray-500 dark:text-gray-400">
              {subdescription}
            </p>

            <div className="flex flex-wrap gap-2 mb-4">
              {techStack?.map((tag) => (
                <span
                  key={tag.id || tag.name}
                  className="text-xs px-2 py-1 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-100"
                >
                  {tag.name || tag}
                </span>
              ))}
            </div>

            <div className="flex gap-3">
              {liveLink && (
                <a
                  href={liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`px-3 py-1 text-xs rounded text-white ${
                    liveLink !== "#"
                      ? "bg-green-600 hover:bg-green-700"
                      : "bg-gray-400 cursor-not-allowed pointer-events-none"
                  }`}
                  aria-disabled={liveLink === "#"}
                >
                  Live
                </a>
              )}
              {githubLink && (
                <a
                  href={githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`px-3 py-1 text-xs rounded text-white ${
                    githubLink !== "#"
                      ? "bg-gray-700 hover:bg-gray-800"
                      : "bg-gray-400 cursor-not-allowed pointer-events-none"
                  }`}
                  aria-disabled={githubLink === "#"}
                >
                  Code
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProjectCard;
