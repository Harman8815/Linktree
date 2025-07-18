
import { useEffect, useRef } from "react"
import { NavLink } from "react-router-dom"
import { Code, Users, Layers, Home, Menu } from "lucide-react"
import { gsap } from "gsap"
import "./NebulaToggle.css"

const Navbar = ({ darkBg, toggleDark }) => {
  const navRef = useRef(null)
  const logoRef = useRef(null)
  const linksRef = useRef([])

  const tabs = [
    { name: "Home", path: "/", icon: Home },
    { name: "Social", path: "/social", icon: Users },
    { name: "Projects", path: "/projects", icon: Layers },
    { name: "Coding", path: "/coding", icon: Code },
  ]

  useEffect(() => {
    const nav = navRef.current
    const logo = logoRef.current
    const links = linksRef.current

    // Initial animations
    gsap.fromTo(nav, { y: -100, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" })

    gsap.fromTo(logo, { x: -50, opacity: 0 }, { x: 0, opacity: 1, duration: 0.6, delay: 0.2, ease: "power2.out" })

    gsap.fromTo(
      links,
      { y: -20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.4, stagger: 0.1, delay: 0.4, ease: "power2.out" },
    )

    // Scroll effect
    const handleScroll = () => {
      const scrollY = window.scrollY
      if (scrollY > 50) {
        gsap.to(nav, { backdropFilter: "blur(20px)", duration: 0.3 })
      } else {
        gsap.to(nav, { backdropFilter: "blur(10px)", duration: 0.3 })
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      ref={navRef}
      className={`fixed w-full top-0 left-0 z-50 transition-all duration-300 backdrop-blur-md border-b
        ${darkBg ? "bg-gray-900/80 text-white border-gray-700/50" : "bg-white/80 text-gray-800 border-gray-200/50"}`}
      style={{
        boxShadow: darkBg ? "0 4px 20px -4px rgba(0, 0, 0, 0.3)" : "0 4px 20px -4px rgba(0, 0, 0, 0.1)",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          {/* Left: Logo/Brand */}
          <div ref={logoRef} className="flex items-center gap-3">
            <div className={`p-2 rounded-xl transition-all duration-300 ${darkBg ? "bg-blue-900/50" : "bg-blue-100"}`}>
              <Code className={`w-6 h-6 ${darkBg ? "text-blue-400" : "text-blue-600"}`} />
            </div>
            <div>
              <h1 className="text-xl font-bold tracking-tight bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Portfolio Hub
              </h1>
              <p className={`text-xs ${darkBg ? "text-gray-400" : "text-gray-600"}`}>Developer Showcase</p>
            </div>
          </div>

          {/* Center: Navigation Links */}
          <div className="hidden md:flex items-center gap-2">
            {tabs.map((tab, index) => {
              const IconComponent = tab.icon
              return (
                <NavLink
                  key={tab.path}
                  to={tab.path}
                  ref={(el) => (linksRef.current[index] = el)}
                  className={({ isActive }) =>
                    `group flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 hover:scale-105 ${
                      isActive
                        ? darkBg
                          ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg shadow-blue-500/25"
                          : "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg shadow-blue-500/25"
                        : darkBg
                          ? "text-gray-300 hover:text-white hover:bg-gray-800/50"
                          : "text-gray-700 hover:text-gray-900 hover:bg-gray-100/50"
                    }`
                  }
                >
                  <IconComponent className="w-4 h-4" />
                  <span>{tab.name}</span>
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-600/20 to-purple-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-200 -z-10" />
                </NavLink>
              )
            })}
          </div>

          {/* Right: Theme Toggle */}
          <div className="flex items-center gap-4">
            {/* Mobile menu button - you can implement this later */}
            <button className="md:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800">
              <Menu className="w-5 h-5" />
            </button>

            {/* Theme Toggle - keeping your custom CSS */}
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
        </div>
      </div>

      {/* Mobile Navigation - Hidden by default, you can implement slide-down menu */}
      <div className="md:hidden hidden">
        <div className={`px-6 py-4 border-t ${darkBg ? "border-gray-700" : "border-gray-200"}`}>
          <div className="space-y-2">
            {tabs.map((tab) => {
              const IconComponent = tab.icon
              return (
                <NavLink
                  key={tab.path}
                  to={tab.path}
                  className={({ isActive }) =>
                    `flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                      isActive
                        ? darkBg
                          ? "bg-blue-600 text-white"
                          : "bg-blue-600 text-white"
                        : darkBg
                          ? "text-gray-300 hover:text-white hover:bg-gray-800"
                          : "text-gray-700 hover:text-gray-900 hover:bg-gray-100"
                    }`
                  }
                >
                  <IconComponent className="w-4 h-4" />
                  {tab.name}
                </NavLink>
              )
            })}
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
