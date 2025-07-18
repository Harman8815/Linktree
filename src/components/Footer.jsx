
import { useRef, useEffect } from "react"
import { gsap } from "gsap"
import { Heart, Code, Coffee, Github, Linkedin, Mail, ArrowUp } from "lucide-react"

const Footer = ({ darkBg }) => {
  const footerRef = useRef()
  const contentRef = useRef()
  const socialRef = useRef([])

  useEffect(() => {
    const footer = footerRef.current
    const content = contentRef.current
    const social = socialRef.current

    // Initial animation
    gsap.fromTo(content, { y: 50, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, ease: "power2.out", delay: 0.2 })

    gsap.fromTo(
      social,
      { scale: 0, opacity: 0 },
      { scale: 1, opacity: 1, duration: 0.5, stagger: 0.1, delay: 0.5, ease: "back.out(1.7)" },
    )

    // Hover animations for social icons
    social.forEach((icon) => {
      if (icon) {
        const handleMouseEnter = () => {
          gsap.to(icon, { scale: 1.2, rotation: 5, duration: 0.2, ease: "power2.out" })
        }
        const handleMouseLeave = () => {
          gsap.to(icon, { scale: 1, rotation: 0, duration: 0.2, ease: "power2.out" })
        }

        icon.addEventListener("mouseenter", handleMouseEnter)
        icon.addEventListener("mouseleave", handleMouseLeave)

        return () => {
          icon.removeEventListener("mouseenter", handleMouseEnter)
          icon.removeEventListener("mouseleave", handleMouseLeave)
        }
      }
    })
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const currentYear = new Date().getFullYear()

  return (
    <footer
      ref={footerRef}
      className={`relative w-full transition-all duration-500 border-t
        ${
          darkBg
            ? "bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 border-gray-700/50 text-white"
            : "bg-gradient-to-br from-white via-gray-50 to-white border-gray-200/50 text-gray-900"
        }
      `}
    >
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className={`absolute -top-10 -right-10 w-32 h-32 rounded-full opacity-5 ${darkBg ? "bg-blue-500" : "bg-blue-300"}`}
        />
        <div
          className={`absolute -bottom-10 -left-10 w-24 h-24 rounded-full opacity-5 ${darkBg ? "bg-purple-500" : "bg-purple-300"}`}
        />
      </div>

      <div ref={contentRef} className="relative z-10 max-w-7xl mx-auto px-6 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand Section */}
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-3 mb-4">
              <div className={`p-2 rounded-xl ${darkBg ? "bg-blue-900/50" : "bg-blue-100"}`}>
                <Code className={`w-6 h-6 ${darkBg ? "text-blue-400" : "text-blue-600"}`} />
              </div>
              <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Portfolio Hub
              </h3>
            </div>
            <p className={`text-lg mb-4 ${darkBg ? "text-gray-300" : "text-gray-600"}`}>
              Crafting digital experiences with passion and precision
            </p>
            <div className="flex items-center justify-center md:justify-start gap-2 text-sm">
              <span className={darkBg ? "text-gray-400" : "text-gray-500"}>Made with</span>
              <Heart className="w-4 h-4 text-red-500 animate-pulse" />
              <span className={darkBg ? "text-gray-400" : "text-gray-500"}>and</span>
              <Coffee className={`w-4 h-4 ${darkBg ? "text-yellow-400" : "text-yellow-600"}`} />
            </div>
          </div>

          {/* Quick Links */}
          <div className="text-center">
            <h4 className={`text-lg font-semibold mb-6 ${darkBg ? "text-white" : "text-gray-900"}`}>Quick Links</h4>
            <div className="space-y-3">
              {[
                { name: "Social Connect", href: "/social" },
                { name: "Projects", href: "/projects" },
                { name: "Coding Profiles", href: "/coding" },
                { name: "Contact", href: "/contact" },
              ].map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className={`block transition-colors duration-200 hover:scale-105 transform
                    ${darkBg ? "text-gray-400 hover:text-blue-400" : "text-gray-600 hover:text-blue-600"}
                  `}
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Connect Section */}
          <div className="text-center md:text-right">
            <h4 className={`text-lg font-semibold mb-6 ${darkBg ? "text-white" : "text-gray-900"}`}>Let's Connect</h4>
            <div className="flex items-center justify-center md:justify-end gap-4 mb-6">
              <a
                ref={(el) => (socialRef.current[0] = el)}
                href="https://github.com/yourusername"
                className={`p-3 rounded-xl transition-all duration-300 shadow-lg
                  ${darkBg ? "bg-gray-800 hover:bg-gray-700 text-gray-300" : "bg-white hover:bg-gray-50 text-gray-700"}
                `}
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                ref={(el) => (socialRef.current[1] = el)}
                href="https://linkedin.com/in/yourusername"
                className={`p-3 rounded-xl transition-all duration-300 shadow-lg
                  ${darkBg ? "bg-gray-800 hover:bg-gray-700 text-gray-300" : "bg-white hover:bg-gray-50 text-gray-700"}
                `}
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                ref={(el) => (socialRef.current[2] = el)}
                href="mailto:your.email@example.com"
                className={`p-3 rounded-xl transition-all duration-300 shadow-lg
                  ${darkBg ? "bg-gray-800 hover:bg-gray-700 text-gray-300" : "bg-white hover:bg-gray-50 text-gray-700"}
                `}
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
            <p className={`text-sm ${darkBg ? "text-gray-400" : "text-gray-600"}`}>
              Open to opportunities and collaborations
            </p>
          </div>
        </div>

        {/* Bottom Section */}
        <div
          className={`flex flex-col md:flex-row items-center justify-between pt-8 border-t
            ${darkBg ? "border-gray-700/50" : "border-gray-200/50"}
          `}
        >
          <div className="flex items-center gap-4 mb-4 md:mb-0">
            <p className={`text-sm ${darkBg ? "text-gray-400" : "text-gray-600"}`}>
              © {currentYear} Harman's Portfolio. All rights reserved.
            </p>
            <div className="flex items-center gap-2">
              <div className={`w-2 h-2 rounded-full bg-green-500 animate-pulse`} />
              <span className={`text-xs ${darkBg ? "text-gray-500" : "text-gray-500"}`}>Available for work</span>
            </div>
          </div>

          {/* Scroll to top button */}
          <button
            onClick={scrollToTop}
            className={`group flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 hover:scale-105
              ${darkBg ? "bg-gray-800 hover:bg-gray-700 text-gray-300" : "bg-gray-100 hover:bg-gray-200 text-gray-700"}
            `}
          >
            <span>Back to top</span>
            <ArrowUp className="w-4 h-4 group-hover:-translate-y-1 transition-transform duration-200" />
          </button>
        </div>
      </div>

      {/* Gradient line at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-50" />
    </footer>
  )
}

export default Footer
