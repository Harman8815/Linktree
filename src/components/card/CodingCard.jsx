
import { useEffect, useRef } from "react"
import {
  ExternalLink,
  Trophy,
  Star,
  Target,
  Award,
  Code,
  Calendar,
  Users,
  Book,
  Medal,
  Heart,
  Check,
  Briefcase,
  TrendingUp,
  Video,
  MessageCircle,
  BadgeIcon as Certificate,
} from "lucide-react"
import { gsap } from "gsap"

const iconMap = {
  trophy: Trophy,
  star: Star,
  target: Target,
  award: Award,
  code: Code,
  calendar: Calendar,
  users: Users,
  book: Book,
  medal: Medal,
  heart: Heart,
  check: Check,
  briefcase: Briefcase,
  certificate: Certificate,
  "trending-up": TrendingUp,
  video: Video,
  chat: MessageCircle,
}

const getRarityColor = (rarity) => {
  switch (rarity) {
    case "legendary":
      return "from-yellow-400 to-orange-500 shadow-yellow-500/30"
    case "epic":
      return "from-purple-400 to-pink-500 shadow-purple-500/30"
    case "rare":
      return "from-blue-400 to-cyan-500 shadow-blue-500/30"
    default:
      return "from-gray-400 to-gray-500 shadow-gray-500/30"
  }
}

const CodingCard = ({
  platform,
  img,
  profile,
  primaryColor,
  secondaryColor,
  overview,
  badges,
  achievements,
  problemStats,
  categories,
  domainStats,
  topicStats,
  contestStats,
  ratingHistory,
  darkBg,
}) => {
  const cardRef = useRef(null)
  const badgeRefs = useRef([])
  const statRefs = useRef([])

  useEffect(() => {
    const card = cardRef.current
    const badges = badgeRefs.current
    const stats = statRefs.current

    // Initial animation
    gsap.fromTo(
      card,
      { y: 50, opacity: 0, scale: 0.9 },
      { y: 0, opacity: 1, scale: 1, duration: 0.6, ease: "back.out(1.7)" },
    )

    // Stagger badge animations
    gsap.fromTo(
      badges,
      { scale: 0, rotation: -180 },
      { scale: 1, rotation: 0, duration: 0.4, stagger: 0.1, delay: 0.3, ease: "back.out(1.7)" },
    )

    // Animate stats with counter effect
    stats.forEach((stat, index) => {
      gsap.fromTo(
        stat,
        { x: -30, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.5, delay: 0.5 + index * 0.1, ease: "power2.out" },
      )
    })

    // Hover animations
    const handleMouseEnter = () => {
      gsap.to(card, { scale: 1.02, y: -5, duration: 0.3, ease: "power2.out" })
      gsap.to(badges, { scale: 1.1, rotation: 5, duration: 0.2, stagger: 0.05 })
    }

    const handleMouseLeave = () => {
      gsap.to(card, { scale: 1, y: 0, duration: 0.3, ease: "power2.out" })
      gsap.to(badges, { scale: 1, rotation: 0, duration: 0.2, stagger: 0.05 })
    }

    card.addEventListener("mouseenter", handleMouseEnter)
    card.addEventListener("mouseleave", handleMouseLeave)

    return () => {
      card.removeEventListener("mouseenter", handleMouseEnter)
      card.removeEventListener("mouseleave", handleMouseLeave)
    }
  }, [])

  const IconComponent = ({ iconName, className }) => {
    const Icon = iconMap[iconName] || Code
    return <Icon className={className} />
  }

  return (
    <a
      ref={cardRef}
      href={profile}
      target="_blank"
      rel="noopener noreferrer"
      className={`group relative block overflow-hidden rounded-3xl transition-all duration-300 cursor-pointer
        ${
          darkBg
            ? "bg-gradient-to-br from-gray-800 via-gray-900 to-gray-800 border border-gray-700/50"
            : "bg-gradient-to-br from-white via-gray-50 to-white border border-gray-200/50"
        }
        shadow-xl hover:shadow-2xl
      `}
      style={{
        boxShadow: `0 20px 40px -12px ${primaryColor}20`,
      }}
    >
      {/* Animated background gradient */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500"
        style={{
          background: `linear-gradient(135deg, ${primaryColor}40, ${secondaryColor}40)`,
        }}
      />

      {/* Header */}
      <div className="relative p-6 pb-4">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-4">
            <div
              className="w-16 h-16 rounded-2xl bg-white p-2 shadow-lg ring-2 ring-transparent group-hover:ring-opacity-50 transition-all duration-300"
              style={{ "--tw-ring-color": primaryColor }}
            >
              <img src={img || "/placeholder.svg"} alt={platform} className="w-full h-full object-contain" />
            </div>
            <div>
              <h3 className={`text-2xl font-bold ${darkBg ? "text-white" : "text-gray-900"}`}>{platform}</h3>
              <div className="flex items-center gap-2 text-sm text-gray-500">
                <span>View Profile</span>
                <ExternalLink className="w-3 h-3" />
              </div>
            </div>
          </div>
        </div>

        {/* Overview Stats */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          {Object.entries(overview).map(([key, value], index) => (
            <div
              key={key}
              ref={(el) => (statRefs.current[index] = el)}
              className={`p-3 rounded-xl ${darkBg ? "bg-gray-800/50" : "bg-gray-100/50"} backdrop-blur-sm`}
            >
              <div
                className={`text-xs font-medium uppercase tracking-wide mb-1 ${darkBg ? "text-gray-400" : "text-gray-600"}`}
              >
                {key.replace(/([A-Z])/g, " $1").trim()}
              </div>
              <div className={`text-lg font-bold ${darkBg ? "text-white" : "text-gray-900"}`}>{value}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Badges Section */}
      {badges && badges.length > 0 && (
        <div className="px-6 pb-4">
          <h4 className={`text-sm font-semibold mb-3 ${darkBg ? "text-gray-300" : "text-gray-700"}`}>
            Badges & Achievements
          </h4>
          <div className="flex flex-wrap gap-2">
            {badges.map((badge, index) => (
              <div
                key={index}
                ref={(el) => (badgeRefs.current[index] = el)}
                className={`flex items-center gap-2 px-3 py-2 rounded-full text-xs font-medium text-white bg-gradient-to-r ${getRarityColor(badge.rarity)} shadow-lg`}
              >
                <span className="text-sm">{badge.icon}</span>
                <span>{badge.name}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Problem Stats or Categories */}
      {(problemStats || categories || domainStats || topicStats) && (
        <div className="px-6 pb-4">
          <h4 className={`text-sm font-semibold mb-3 ${darkBg ? "text-gray-300" : "text-gray-700"}`}>
            {problemStats
              ? "Problem Distribution"
              : categories
                ? "Categories"
                : domainStats
                  ? "Domain Expertise"
                  : "Topic Progress"}
          </h4>
          <div className="space-y-2">
            {(problemStats || categories || domainStats || topicStats || []).map((item, index) => (
              <div key={index} className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className={`w-3 h-3 rounded-full ${item.color || "bg-blue-500"}`} />
                  <span className={`text-sm ${darkBg ? "text-gray-300" : "text-gray-700"}`}>
                    {item.difficulty || item.name || item.domain || item.topic}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  {item.stars && (
                    <div className="flex">
                      {[...Array(item.stars)].map((_, i) => (
                        <Star key={i} className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                  )}
                  <span className={`text-sm font-medium ${darkBg ? "text-white" : "text-gray-900"}`}>
                    {item.solved || item.value}
                    {item.total && `/${item.total}`}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Achievements */}
      {achievements && (
        <div className="px-6 pb-6">
          <h4 className={`text-sm font-semibold mb-3 ${darkBg ? "text-gray-300" : "text-gray-700"}`}>Key Metrics</h4>
          <div className="grid grid-cols-2 gap-3">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className={`flex items-center gap-3 p-3 rounded-xl ${darkBg ? "bg-gray-800/30" : "bg-gray-100/30"} backdrop-blur-sm`}
              >
                <IconComponent
                  iconName={achievement.icon}
                  className={`w-4 h-4 ${darkBg ? "text-gray-400" : "text-gray-600"}`}
                />
                <div>
                  <div className={`text-xs ${darkBg ? "text-gray-400" : "text-gray-600"}`}>{achievement.label}</div>
                  <div className={`text-sm font-bold ${darkBg ? "text-white" : "text-gray-900"}`}>
                    {achievement.value}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Accent line */}
      <div
        className="absolute bottom-0 left-0 right-0 h-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          background: `linear-gradient(90deg, ${primaryColor}, ${secondaryColor})`,
        }}
      />
    </a>
  )
}

export default CodingCard
