
import { useEffect, useRef } from "react"
import { ExternalLink, Verified, Calendar, Activity } from "lucide-react"
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram, FaYoutube, FaDiscord } from "react-icons/fa"
import { gsap } from "gsap"

const iconMap = {
  github: FaGithub,
  linkedin: FaLinkedin,
  twitter: FaTwitter,
  instagram: FaInstagram,
  youtube: FaYoutube,
  discord: FaDiscord,
}

const categoryColors = {
  Development: "bg-blue-500",
  Professional: "bg-indigo-500",
  Social: "bg-cyan-500",
  Lifestyle: "bg-pink-500",
  Education: "bg-red-500",
  Community: "bg-purple-500",
}

const SocialCard = ({
  id,
  name,
  url,
  icon,
  description,
  primaryColor,
  secondaryColor,
  stats,
  highlights,
  category,
  isVerified,
  joinedDate,
  activity,
  darkBg,
}) => {
  const cardRef = useRef(null)
  const iconRef = useRef(null)
  const statsRefs = useRef([])
  const highlightRefs = useRef([])

  useEffect(() => {
    const card = cardRef.current
    const iconElement = iconRef.current
    const statElements = statsRefs.current
    const highlightElements = highlightRefs.current

    // Initial animation
    gsap.fromTo(
      card,
      { x: -50, opacity: 0, scale: 0.9 },
      { x: 0, opacity: 1, scale: 1, duration: 0.6, ease: "back.out(1.7)" },
    )

    // Icon animation
    gsap.fromTo(
      iconElement,
      { scale: 0, rotation: -180 },
      { scale: 1, rotation: 0, duration: 0.5, delay: 0.2, ease: "back.out(1.7)" },
    )

    // Stats animation
    gsap.fromTo(
      statElements,
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.4, stagger: 0.1, delay: 0.4, ease: "power2.out" },
    )

    // Highlights animation
    gsap.fromTo(
      highlightElements,
      { scale: 0 },
      { scale: 1, duration: 0.3, stagger: 0.05, delay: 0.6, ease: "back.out(1.7)" },
    )

    // Hover animations
    const handleMouseEnter = () => {
      gsap.to(card, { y: -8, scale: 1.02, duration: 0.3, ease: "power2.out" })
      gsap.to(iconElement, { scale: 1.1, rotation: 5, duration: 0.2 })
      gsap.to(statElements, { scale: 1.05, duration: 0.2, stagger: 0.02 })
    }

    const handleMouseLeave = () => {
      gsap.to(card, { y: 0, scale: 1, duration: 0.3, ease: "power2.out" })
      gsap.to(iconElement, { scale: 1, rotation: 0, duration: 0.2 })
      gsap.to(statElements, { scale: 1, duration: 0.2, stagger: 0.02 })
    }

    card.addEventListener("mouseenter", handleMouseEnter)
    card.addEventListener("mouseleave", handleMouseLeave)

    return () => {
      card.removeEventListener("mouseenter", handleMouseEnter)
      card.removeEventListener("mouseleave", handleMouseLeave)
    }
  }, [])

  const IconComponent = iconMap[icon] || FaGithub

  return (
    <a
      ref={cardRef}
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={`group relative block overflow-hidden rounded-2xl transition-all duration-300 cursor-pointer
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
        className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500"
        style={{
          background: `linear-gradient(135deg, ${primaryColor}40, ${secondaryColor}40)`,
        }}
      />

      {/* Content */}
      <div className="relative p-3 sm:p-4 lg:p-6">
        {/* Header */}
        <div className="flex items-start justify-between mb-3 sm:mb-4">
          <div className="flex items-center gap-2 sm:gap-3 lg:gap-4 min-w-0 flex-1">
            <div
              ref={iconRef}
              className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-2xl bg-white p-2 sm:p-3 shadow-lg ring-2 ring-transparent group-hover:ring-opacity-30 transition-all duration-300 flex items-center justify-center flex-shrink-0"
              style={{ "--tw-ring-color": primaryColor }}
            >
              <IconComponent className="w-full h-full" style={{ color: primaryColor }} />
            </div>
            <div className="min-w-0 flex-1">
              <div className="flex items-center gap-2 mb-1">
                <h3
                  className={`font-display text-lg sm:text-xl lg:text-2xl font-bold truncate tracking-tight ${darkBg ? "text-white" : "text-gray-900"}`}
                >
                  {name}
                </h3>
                {isVerified && <Verified className="w-4 h-4 sm:w-5 sm:h-5 text-blue-500 fill-current flex-shrink-0" />}
              </div>
              <div className="flex items-center gap-2 flex-wrap">
                <span
                  className={`px-2 py-1 text-xs font-semibold rounded-full text-white font-body tracking-wide ${categoryColors[category] || "bg-gray-500"}`}
                >
                  {category}
                </span>
                <div className="flex items-center gap-1 text-xs text-gray-500 font-body">
                  <Calendar className="w-3 h-3" />
                  <span className="whitespace-nowrap">Since {joinedDate}</span>
                </div>
              </div>
            </div>
          </div>
          <ExternalLink
            className={`w-4 h-4 sm:w-5 sm:h-5 ${darkBg ? "text-gray-400" : "text-gray-600"} group-hover:translate-x-1 transition-transform duration-200 flex-shrink-0`}
          />
        </div>

        {/* Description */}
        <p
          className={`font-body text-xs sm:text-sm mb-3 sm:mb-4 leading-relaxed ${darkBg ? "text-gray-300" : "text-gray-600"}`}
        >
          {description}
        </p>

        {/* Stats */}
        <div className="grid grid-cols-2 gap-2 sm:gap-3 mb-3 sm:mb-4">
          {Object.entries(stats)
            .slice(0, 4)
            .map(([key, value], index) => (
              <div
                key={key}
                ref={(el) => (statsRefs.current[index] = el)}
                className={`p-2 sm:p-3 rounded-xl ${darkBg ? "bg-gray-800/50" : "bg-gray-100/50"} backdrop-blur-sm`}
              >
                <div
                  className={`text-xs font-bold uppercase tracking-wider mb-1 truncate font-mono ${darkBg ? "text-gray-400" : "text-gray-600"}`}
                >
                  {key.replace(/([A-Z])/g, " $1").trim()}
                </div>
                <div
                  className={`font-display text-sm sm:text-base lg:text-lg font-black tracking-tight ${darkBg ? "text-white" : "text-gray-900"}`}
                >
                  {value}
                </div>
              </div>
            ))}
        </div>

        {/* Highlights */}
        <div className="mb-3 sm:mb-4">
          <h4
            className={`font-display text-xs sm:text-sm font-bold mb-2 tracking-wide ${darkBg ? "text-gray-300" : "text-gray-700"}`}
          >
            Highlights
          </h4>
          <div className="flex flex-wrap gap-1.5 sm:gap-2">
            {highlights.slice(0, 3).map((highlight, index) => (
              <span
                key={index}
                ref={(el) => (highlightRefs.current[index] = el)}
                className={`px-2 sm:px-3 py-1 text-xs font-semibold rounded-full font-body tracking-wide ${darkBg ? "bg-yellow-900/30 text-yellow-400" : "bg-yellow-100 text-yellow-700"}`}
              >
                {highlight}
              </span>
            ))}
          </div>
        </div>

        {/* Activity */}
        <div className="flex items-center gap-2">
          <Activity className={`w-3 h-3 sm:w-4 sm:h-4 ${darkBg ? "text-green-400" : "text-green-600"}`} />
          <span className={`font-body text-xs sm:text-sm font-medium ${darkBg ? "text-gray-300" : "text-gray-600"}`}>
            {activity}
          </span>
        </div>
      </div>

      {/* Bottom accent */}
      <div
        className="absolute bottom-0 left-0 right-0 h-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          background: `linear-gradient(90deg, ${primaryColor}, ${secondaryColor})`,
        }}
      />
    </a>
  )
}

export default SocialCard
