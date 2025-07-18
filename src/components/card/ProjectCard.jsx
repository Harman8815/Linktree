"use client"

import { useEffect, useRef, useState } from "react"
import {
  ExternalLink,
  Github,
  Clock,
  Star,
  TrendingUp,
  Award,
  Eye,
  X,
  CheckCircle,
  AlertCircle,
  Loader,
  Play,
} from "lucide-react"
import { gsap } from "gsap"

const statusIcons = {
  Completed: CheckCircle,
  Live: TrendingUp,
  "In Development": Loader,
}

const statusColors = {
  Completed: "text-green-500",
  Live: "text-blue-500",
  "In Development": "text-yellow-500",
}

const difficultyColors = {
  Beginner: "bg-green-500",
  Intermediate: "bg-yellow-500",
  Advanced: "bg-orange-500",
  Expert: "bg-red-500",
}

const ProjectCard = ({
  id,
  title,
  logo,
  category,
  primaryColor,
  secondaryColor,
  subdescription,
  description,
  techStack,
  features,
  metrics,
  liveLink,
  githubLink,
  status,
  difficulty,
  duration,
  highlights,
  darkBg,
}) => {
  const [showModal, setShowModal] = useState(false)
  const cardRef = useRef(null)
  const techRefs = useRef([])
  const featureRefs = useRef([])

  useEffect(() => {
    const card = cardRef.current
    const techElements = techRefs.current
    const featureElements = featureRefs.current

    // Initial card animation
    gsap.fromTo(
      card,
      { y: 30, opacity: 0, scale: 0.95 },
      { y: 0, opacity: 1, scale: 1, duration: 0.6, ease: "power2.out" },
    )

    // Tech stack animation
    gsap.fromTo(
      techElements,
      { x: -20, opacity: 0 },
      { x: 0, opacity: 1, duration: 0.4, stagger: 0.1, delay: 0.3, ease: "power2.out" },
    )

    // Hover animations
    const handleMouseEnter = () => {
      gsap.to(card, { y: -8, scale: 1.02, duration: 0.3, ease: "power2.out" })
      gsap.to(techElements, { scale: 1.05, duration: 0.2, stagger: 0.05 })
    }

    const handleMouseLeave = () => {
      gsap.to(card, { y: 0, scale: 1, duration: 0.3, ease: "power2.out" })
      gsap.to(techElements, { scale: 1, duration: 0.2, stagger: 0.05 })
    }

    card.addEventListener("mouseenter", handleMouseEnter)
    card.addEventListener("mouseleave", handleMouseLeave)

    return () => {
      card.removeEventListener("mouseenter", handleMouseEnter)
      card.removeEventListener("mouseleave", handleMouseLeave)
    }
  }, [])

  const StatusIcon = statusIcons[status] || AlertCircle

  return (
    <>
      {/* Main Card */}
      <div
        ref={cardRef}
        className={`group relative overflow-hidden rounded-2xl transition-all duration-300 cursor-pointer
          ${
            darkBg
              ? "bg-gradient-to-br from-gray-800 via-gray-900 to-gray-800 border border-gray-700/50"
              : "bg-gradient-to-br from-white via-gray-50 to-white border border-gray-200/50"
          }
          shadow-lg hover:shadow-2xl
        `}
        style={{
          boxShadow: `0 10px 30px -10px ${primaryColor}20`,
        }}
      >
        {/* Gradient overlay */}
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-500"
          style={{
            background: `linear-gradient(135deg, ${primaryColor}40, ${secondaryColor}40)`,
          }}
        />

        {/* Header */}
        <div className="relative p-4 sm:p-6">
          <div className="flex items-start justify-between mb-3 sm:mb-4">
            <div className="flex items-center gap-3 sm:gap-4 min-w-0 flex-1">
              <div
                className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-white p-2 shadow-md ring-2 ring-transparent group-hover:ring-opacity-30 transition-all duration-300 flex-shrink-0"
                style={{ "--tw-ring-color": primaryColor }}
              >
                <img src={logo || "/placeholder.svg"} alt={title} className="w-full h-full object-contain" />
              </div>
              <div className="min-w-0 flex-1">
                <h3 className={`text-lg sm:text-xl font-bold mb-1 truncate ${darkBg ? "text-white" : "text-gray-900"}`}>
                  {title}
                </h3>
                <div className="flex items-center gap-2 flex-wrap">
                  <span
                    className={`px-2 py-1 text-xs font-medium rounded-full ${darkBg ? "bg-gray-700 text-gray-300" : "bg-gray-100 text-gray-600"}`}
                  >
                    {category}
                  </span>
                  <div className={`flex items-center gap-1 ${statusColors[status]}`}>
                    <StatusIcon className="w-3 h-3" />
                    <span className="text-xs font-medium">{status}</span>
                  </div>
                </div>
              </div>
            </div>
            <div className={`w-3 h-3 rounded-full ${difficultyColors[difficulty]} flex-shrink-0`} title={difficulty} />
          </div>

          <p className={`text-sm mb-3 sm:mb-4 line-clamp-2 ${darkBg ? "text-gray-300" : "text-gray-600"}`}>
            {subdescription}
          </p>

          {/* Tech Stack */}
          <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-3 sm:mb-4">
            {techStack.slice(0, 3).map((tech, index) => (
              <span
                key={tech.name}
                ref={(el) => (techRefs.current[index] = el)}
                className={`px-2 py-1 text-xs font-medium rounded-full text-white ${tech.color} shadow-sm`}
              >
                {tech.name}
              </span>
            ))}
            {techStack.length > 3 && (
              <span
                className={`px-2 py-1 text-xs font-medium rounded-full ${darkBg ? "bg-gray-700 text-gray-300" : "bg-gray-200 text-gray-600"}`}
              >
                +{techStack.length - 3}
              </span>
            )}
          </div>

          {/* Highlights */}
          <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-4 sm:mb-6">
            {highlights.slice(0, 2).map((highlight, index) => (
              <div
                key={index}
                className={`flex items-center gap-1 px-2 py-1 text-xs rounded-full ${darkBg ? "bg-yellow-900/30 text-yellow-400" : "bg-yellow-100 text-yellow-700"}`}
              >
                <Star className="w-3 h-3" />
                {highlight}
              </div>
            ))}
          </div>

          {/* Action Buttons - Mobile Optimized */}
          <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
            {/* Live Button - Most Prominent */}
            {liveLink && liveLink !== "#" && (
              <a
                href={liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-4 py-3 sm:py-2 text-sm font-bold rounded-xl bg-gradient-to-r from-green-500 to-emerald-600 text-white transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl order-1 sm:order-none"
                style={{
                  boxShadow: "0 4px 15px rgba(34, 197, 94, 0.4)",
                }}
              >
                <Play className="w-4 h-4 fill-current" />
                <span className="font-semibold">VIEW LIVE</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            )}

            <div className="flex gap-2 order-2 sm:order-none">
              <button
                onClick={() => setShowModal(true)}
                className={`flex items-center justify-center gap-2 px-3 sm:px-4 py-2 text-sm font-medium rounded-xl transition-colors flex-1 sm:flex-none
                  ${darkBg ? "bg-blue-600 hover:bg-blue-700 text-white" : "bg-blue-600 hover:bg-blue-700 text-white"}
                `}
              >
                <Eye className="w-4 h-4" />
                <span className="sm:inline">Details</span>
              </button>

              {githubLink && githubLink !== "#" && (
                <a
                  href={githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center justify-center gap-2 px-3 sm:px-4 py-2 text-sm font-medium rounded-xl transition-colors flex-1 sm:flex-none
                    ${darkBg ? "bg-gray-700 hover:bg-gray-600 text-white" : "bg-gray-800 hover:bg-gray-700 text-white"}
                  `}
                >
                  <Github className="w-4 h-4" />
                  <span className="sm:inline">Code</span>
                </a>
              )}
            </div>
          </div>
        </div>

        {/* Bottom accent */}
        <div
          className="absolute bottom-0 left-0 right-0 h-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{
            background: `linear-gradient(90deg, ${primaryColor}, ${secondaryColor})`,
          }}
        />
      </div>

      {/* Modal - Mobile Optimized */}
      {showModal && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center px-4">
          <div
            className={`max-w-2xl w-full max-h-[90vh] overflow-y-auto rounded-2xl relative
              ${darkBg ? "bg-gray-900 text-white border border-gray-700" : "bg-white text-gray-900 border border-gray-200"}
              shadow-2xl
            `}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div
              className="relative p-4 sm:p-6 pb-3 sm:pb-4"
              style={{
                background: `linear-gradient(135deg, ${primaryColor}10, ${secondaryColor}10)`,
              }}
            >
              <button
                onClick={() => setShowModal(false)}
                className={`absolute top-3 right-3 sm:top-4 sm:right-4 p-2 rounded-full transition-colors
                  ${darkBg ? "hover:bg-gray-800 text-gray-400" : "hover:bg-gray-100 text-gray-600"}
                `}
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4 pr-12">
                <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-xl bg-white p-2 shadow-md flex-shrink-0">
                  <img src={logo || "/placeholder.svg"} alt={title} className="w-full h-full object-contain" />
                </div>
                <div className="min-w-0 flex-1">
                  <h2 className="text-xl sm:text-2xl font-bold mb-2 truncate">{title}</h2>
                  <div className="flex items-center gap-2 sm:gap-3 flex-wrap">
                    <span
                      className={`px-2 sm:px-3 py-1 text-xs sm:text-sm font-medium rounded-full ${darkBg ? "bg-gray-800 text-gray-300" : "bg-gray-100 text-gray-600"}`}
                    >
                      {category}
                    </span>
                    <div className={`flex items-center gap-1 ${statusColors[status]}`}>
                      <StatusIcon className="w-4 h-4" />
                      <span className="text-xs sm:text-sm font-medium">{status}</span>
                    </div>
                    <div className="flex items-center gap-1 text-xs sm:text-sm text-gray-500">
                      <Clock className="w-4 h-4" />
                      {duration}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Modal Content */}
            <div className="p-4 sm:p-6 pt-2">
              <p
                className={`text-sm sm:text-base mb-4 sm:mb-6 leading-relaxed ${darkBg ? "text-gray-300" : "text-gray-700"}`}
              >
                {description}
              </p>

              {/* Features */}
              <div className="mb-4 sm:mb-6">
                <h3
                  className={`text-base sm:text-lg font-semibold mb-2 sm:mb-3 ${darkBg ? "text-white" : "text-gray-900"}`}
                >
                  Key Features
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {features.map((feature, index) => (
                    <div
                      key={index}
                      ref={(el) => (featureRefs.current[index] = el)}
                      className={`flex items-center gap-2 p-2 sm:p-3 rounded-lg ${darkBg ? "bg-gray-800/50" : "bg-gray-100/50"}`}
                    >
                      <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                      <span className="text-xs sm:text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tech Stack */}
              <div className="mb-4 sm:mb-6">
                <h3
                  className={`text-base sm:text-lg font-semibold mb-2 sm:mb-3 ${darkBg ? "text-white" : "text-gray-900"}`}
                >
                  Technologies Used
                </h3>
                <div className="flex flex-wrap gap-2">
                  {techStack.map((tech, index) => (
                    <span
                      key={tech.name}
                      className={`px-2 sm:px-3 py-1 sm:py-2 text-xs sm:text-sm font-medium rounded-lg text-white ${tech.color} shadow-sm`}
                    >
                      {tech.name}
                    </span>
                  ))}
                </div>
              </div>

              {/* Performance Metrics */}
              {metrics && (
                <div className="mb-4 sm:mb-6">
                  <h3
                    className={`text-base sm:text-lg font-semibold mb-2 sm:mb-3 ${darkBg ? "text-white" : "text-gray-900"}`}
                  >
                    Performance Metrics
                  </h3>
                  <div className="grid grid-cols-2 gap-3 sm:gap-4">
                    {Object.entries(metrics).map(([key, value]) => (
                      <div
                        key={key}
                        className={`p-2 sm:p-3 rounded-lg ${darkBg ? "bg-gray-800/50" : "bg-gray-100/50"}`}
                      >
                        <div className="text-xs sm:text-sm text-gray-500 capitalize">
                          {key.replace(/([A-Z])/g, " $1").trim()}
                        </div>
                        <div className={`text-base sm:text-lg font-bold ${darkBg ? "text-white" : "text-gray-900"}`}>
                          {value}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Highlights */}
              <div className="mb-4 sm:mb-6">
                <h3
                  className={`text-base sm:text-lg font-semibold mb-2 sm:mb-3 ${darkBg ? "text-white" : "text-gray-900"}`}
                >
                  Highlights
                </h3>
                <div className="flex flex-wrap gap-2">
                  {highlights.map((highlight, index) => (
                    <div
                      key={index}
                      className={`flex items-center gap-2 px-2 sm:px-3 py-1 sm:py-2 rounded-lg ${darkBg ? "bg-yellow-900/30 text-yellow-400" : "bg-yellow-100 text-yellow-700"}`}
                    >
                      <Award className="w-3 h-3 sm:w-4 sm:h-4" />
                      <span className="text-xs sm:text-sm">{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons - Mobile Optimized */}
              <div className="flex flex-col gap-3 pt-4 border-t border-gray-200 dark:border-gray-700">
                {/* Live Button - Most Prominent */}
                {liveLink && liveLink !== "#" && (
                  <a
                    href={liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-3 px-6 py-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-xl font-bold text-base transition-all duration-300 hover:scale-105 shadow-lg"
                    style={{
                      boxShadow: "0 4px 20px rgba(34, 197, 94, 0.4)",
                    }}
                  >
                    <Play className="w-5 h-5 fill-current" />
                    VIEW LIVE PROJECT
                    <ExternalLink className="w-5 h-5" />
                  </a>
                )}

                {githubLink && githubLink !== "#" && (
                  <a
                    href={githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center justify-center gap-3 px-6 py-3 rounded-xl font-medium transition-colors
                      ${darkBg ? "bg-gray-700 hover:bg-gray-600 text-white" : "bg-gray-800 hover:bg-gray-700 text-white"}
                    `}
                  >
                    <Github className="w-5 h-5" />
                    View Source Code
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default ProjectCard
