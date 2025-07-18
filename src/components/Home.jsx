
import { useRef, useEffect } from "react"
import { gsap } from "gsap"
import { ArrowRight, Code, Users, Layers, Sparkles, Github, Linkedin, Mail } from "lucide-react"

const Home = ({ darkBg }) => {
  const containerRef = useRef()
  const heroRef = useRef()
  const titleRef = useRef()
  const subtitleRef = useRef()
  const descriptionRef = useRef()
  const ctaRef = useRef()
  const cardsRef = useRef([])
  const statsRef = useRef([])

  useEffect(() => {
    const container = containerRef.current
    const hero = heroRef.current
    const title = titleRef.current
    const subtitle = subtitleRef.current
    const description = descriptionRef.current
    const cta = ctaRef.current
    const cards = cardsRef.current
    const stats = statsRef.current

    // Initial setup
    gsap.set([title, subtitle, description, cta], { opacity: 0, y: 50 })
    gsap.set(cards, { opacity: 0, y: 30, scale: 0.9 })
    gsap.set(stats, { opacity: 0, scale: 0 })

    // Main timeline
    const tl = gsap.timeline({ delay: 0.5 })

    // Hero animations
    tl.to(title, { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" })
      .to(subtitle, { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" }, "-=0.4")
      .to(description, { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" }, "-=0.3")
      .to(cta, { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" }, "-=0.2")

    // Stats animation
    tl.to(
      stats,
      {
        opacity: 1,
        scale: 1,
        duration: 0.5,
        stagger: 0.1,
        ease: "back.out(1.7)",
      },
      "-=0.3",
    )

    // Cards animation
    tl.to(
      cards,
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.6,
        stagger: 0.15,
        ease: "power2.out",
      },
      "-=0.4",
    )

    // Floating animation for background elements
    gsap.to(".floating-home", {
      y: -20,
      duration: 4,
      ease: "power1.inOut",
      yoyo: true,
      repeat: -1,
      stagger: 1,
    })

    return () => tl.kill()
  }, [])

  const navigationCards = [
    {
      title: "Social Connect",
      description: "Follow my journey across platforms",
      icon: Users,
      color: "from-blue-500 to-cyan-500",
      path: "/social",
    },
    {
      title: "Project Showcase",
      description: "Explore my development portfolio",
      icon: Layers,
      color: "from-purple-500 to-pink-500",
      path: "/projects",
    },
    {
      title: "Coding Profiles",
      description: "View my competitive programming stats",
      icon: Code,
      color: "from-green-500 to-emerald-500",
      path: "/coding",
    },
  ]

  const stats = [
    { label: "Projects", value: "15+", icon: Layers },
    { label: "Platforms", value: "6+", icon: Users },
    { label: "Technologies", value: "20+", icon: Code },
  ]

  return (
    <div
      ref={containerRef}
      className={`min-h-screen transition-all duration-500 ${darkBg ? "bg-gray-900" : "bg-gray-50"}`}
    >
      {/* Floating background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div
          className={`floating-home absolute top-20 right-20 w-32 h-32 rounded-full opacity-5 ${darkBg ? "bg-blue-500" : "bg-blue-300"}`}
        />
        <div
          className={`floating-home absolute bottom-32 left-16 w-24 h-24 rounded-full opacity-5 ${darkBg ? "bg-purple-500" : "bg-purple-300"}`}
        />
        <div
          className={`floating-home absolute top-1/2 right-1/4 w-20 h-20 rounded-full opacity-5 ${darkBg ? "bg-pink-500" : "bg-pink-300"}`}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 py-16">
        {/* Hero Section */}
        <div ref={heroRef} className="text-center mb-20">
          <div className="flex items-center justify-center gap-2 mb-6">
            <Sparkles className={`w-8 h-8 ${darkBg ? "text-yellow-400" : "text-yellow-500"} animate-pulse`} />
            <div
              className={`px-4 py-2 rounded-full text-sm font-medium ${darkBg ? "bg-blue-900/50 text-blue-400" : "bg-blue-100 text-blue-600"}`}
            >
              Welcome to my digital space
            </div>
          </div>

          <h1
            ref={titleRef}
            className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent leading-tight"
          >
            Harman's
            <br />
            Portfolio Hub
          </h1>

          <p
            ref={subtitleRef}
            className={`text-2xl md:text-3xl font-medium mb-6 ${darkBg ? "text-gray-300" : "text-gray-700"}`}
          >
            Full-Stack Developer & Problem Solver
          </p>

          <p
            ref={descriptionRef}
            className={`text-lg md:text-xl max-w-3xl mx-auto leading-relaxed mb-12 ${darkBg ? "text-gray-400" : "text-gray-600"}`}
          >
            Explore my journey through code, creativity, and innovation. From competitive programming achievements to
            full-stack applications, discover the projects and platforms that define my development story.
          </p>

          {/* CTA Buttons */}
          <div ref={ctaRef} className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <button className="group flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-2xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <span>Explore Portfolio</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
            </button>

            <div className="flex items-center gap-4">
              <a
                href="https://github.com/yourusername"
                className={`p-3 rounded-xl transition-all duration-300 hover:scale-110 ${darkBg ? "bg-gray-800 hover:bg-gray-700 text-gray-300" : "bg-white hover:bg-gray-50 text-gray-700"} shadow-lg`}
              >
                <Github className="w-6 h-6" />
              </a>
              <a
                href="https://linkedin.com/in/yourusername"
                className={`p-3 rounded-xl transition-all duration-300 hover:scale-110 ${darkBg ? "bg-gray-800 hover:bg-gray-700 text-gray-300" : "bg-white hover:bg-gray-50 text-gray-700"} shadow-lg`}
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a
                href="mailto:your.email@example.com"
                className={`p-3 rounded-xl transition-all duration-300 hover:scale-110 ${darkBg ? "bg-gray-800 hover:bg-gray-700 text-gray-300" : "bg-white hover:bg-gray-50 text-gray-700"} shadow-lg`}
              >
                <Mail className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto mb-20">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon
              return (
                <div
                  key={stat.label}
                  ref={(el) => (statsRef.current[index] = el)}
                  className={`text-center p-6 rounded-2xl ${darkBg ? "bg-gray-800/50" : "bg-white/50"} backdrop-blur-sm shadow-lg`}
                >
                  <IconComponent className={`w-8 h-8 mx-auto mb-3 ${darkBg ? "text-blue-400" : "text-blue-600"}`} />
                  <div className={`text-3xl font-bold mb-1 ${darkBg ? "text-white" : "text-gray-900"}`}>
                    {stat.value}
                  </div>
                  <div className={`text-sm ${darkBg ? "text-gray-400" : "text-gray-600"}`}>{stat.label}</div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Navigation Cards */}
        <div className="mb-20">
          <h2 className={`text-3xl md:text-4xl font-bold text-center mb-12 ${darkBg ? "text-white" : "text-gray-900"}`}>
            Explore My Work
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {navigationCards.map((card, index) => {
              const IconComponent = card.icon
              return (
                <a
                  key={card.title}
                  href={card.path}
                  ref={(el) => (cardsRef.current[index] = el)}
                  className={`group relative overflow-hidden rounded-3xl p-8 transition-all duration-300 hover:scale-105 hover:-translate-y-2
                    ${
                      darkBg
                        ? "bg-gradient-to-br from-gray-800 via-gray-900 to-gray-800 border border-gray-700/50"
                        : "bg-gradient-to-br from-white via-gray-50 to-white border border-gray-200/50"
                    }
                    shadow-xl hover:shadow-2xl
                  `}
                >
                  {/* Gradient overlay */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${card.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                  />

                  <div className="relative z-10">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${card.color} p-4 mb-6 shadow-lg`}>
                      <IconComponent className="w-full h-full text-white" />
                    </div>

                    <h3 className={`text-2xl font-bold mb-3 ${darkBg ? "text-white" : "text-gray-900"}`}>
                      {card.title}
                    </h3>

                    <p className={`text-lg mb-6 ${darkBg ? "text-gray-300" : "text-gray-600"}`}>{card.description}</p>

                    <div className="flex items-center gap-2 text-blue-500 font-medium group-hover:gap-3 transition-all duration-200">
                      <span>Explore</span>
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>

                  {/* Bottom accent */}
                  <div
                    className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${card.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                  />
                </a>
              )
            })}
          </div>
        </div>

        {/* Call to Action */}
        <div
          className={`text-center p-12 rounded-3xl ${darkBg ? "bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700/50" : "bg-gradient-to-br from-blue-50 to-purple-50 border border-gray-200/30"} shadow-2xl`}
        >
          <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${darkBg ? "text-white" : "text-gray-900"}`}>
            Let's Build Something Amazing
          </h2>
          <p className={`text-lg mb-8 ${darkBg ? "text-gray-300" : "text-gray-600"}`}>
            Ready to collaborate? Let's connect and create innovative solutions together.
          </p>
          <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-2xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
            Get In Touch
          </button>
        </div>
      </div>
    </div>
  )
}

export default Home
