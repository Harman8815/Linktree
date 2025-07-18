"use client"

import { useEffect, useRef } from "react"
import CodingCard from "../card/CodingCard"
import codingData from "../../store/codingData"
import { Code2, Sparkles, TrendingUp, Award } from "lucide-react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

const CodingProfiles = ({ darkBg }) => {
  const containerRef = useRef(null)
  const headerRef = useRef(null)
  const cardsRef = useRef([])
  const statsRef = useRef(null)

  useEffect(() => {
    const container = containerRef.current
    const header = headerRef.current
    const cards = cardsRef.current
    const stats = statsRef.current

    // Header animation
    gsap.fromTo(header, { y: -50, opacity: 0 }, { y: 0, opacity: 1, duration: 1, ease: "power3.out" })

    // Stats counter animation
    gsap.fromTo(
      stats.children,
      { scale: 0, rotation: -180 },
      { scale: 1, rotation: 0, duration: 0.8, stagger: 0.2, delay: 0.5, ease: "back.out(1.7)" },
    )

    // Cards scroll animation
    cards.forEach((card, index) => {
      gsap.fromTo(
        card,
        { y: 100, opacity: 0, scale: 0.8 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.8,
          delay: index * 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
          },
        },
      )
    })

    // Floating animation for background elements
    gsap.to(".floating-element", {
      y: -20,
      duration: 3,
      ease: "power1.inOut",
      yoyo: true,
      repeat: -1,
      stagger: 0.5,
    })

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
    }
  }, [])

  const totalProblems = codingData.reduce((sum, platform) => {
    const solved = platform.overview.totalSolved || platform.overview.problemsSolved || "0"
    return sum + Number.parseInt(solved.replace(/[^\d]/g, "")) || 0
  }, 0)

  const totalContests = codingData.reduce((sum, platform) => {
    const contests =
      platform.overview.contestsGiven || platform.achievements?.find((a) => a.label.includes("Contest"))?.value || "0"
    return sum + Number.parseInt(contests.replace(/[^\d]/g, "")) || 0
  }, 0)

  return (
    <div ref={containerRef} className="min-h-screen py-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Floating background elements */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none">
          <div
            className={`floating-element absolute top-20 left-10 w-32 h-32 rounded-full opacity-10 ${darkBg ? "bg-blue-500" : "bg-blue-300"}`}
          />
          <div
            className={`floating-element absolute top-40 right-20 w-24 h-24 rounded-full opacity-10 ${darkBg ? "bg-purple-500" : "bg-purple-300"}`}
          />
          <div
            className={`floating-element absolute bottom-40 left-1/4 w-20 h-20 rounded-full opacity-10 ${darkBg ? "bg-green-500" : "bg-green-300"}`}
          />
        </div>

        {/* Header */}
        <div ref={headerRef} className="text-center mb-16">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className={`p-4 rounded-3xl ${darkBg ? "bg-blue-900/30" : "bg-blue-100"} backdrop-blur-sm`}>
              <Code2 className={`w-10 h-10 ${darkBg ? "text-blue-400" : "text-blue-600"}`} />
            </div>
            <Sparkles className={`w-8 h-8 ${darkBg ? "text-yellow-400" : "text-yellow-500"} animate-pulse`} />
          </div>

          <h1 className="text-5xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
            Coding Mastery
          </h1>

          <p
            className={`text-xl lg:text-2xl max-w-3xl mx-auto leading-relaxed mb-8 ${darkBg ? "text-gray-300" : "text-gray-600"}`}
          >
            A comprehensive showcase of my competitive programming journey across multiple platforms
          </p>

          {/* Global Stats */}
          <div ref={statsRef} className="flex justify-center gap-8 mb-12">
            <div
              className={`text-center p-6 rounded-2xl ${darkBg ? "bg-gray-800/50" : "bg-white/50"} backdrop-blur-sm shadow-lg`}
            >
              <TrendingUp className={`w-8 h-8 mx-auto mb-2 ${darkBg ? "text-green-400" : "text-green-600"}`} />
              <div className={`text-3xl font-bold ${darkBg ? "text-white" : "text-gray-900"}`}>
                {totalProblems.toLocaleString()}+
              </div>
              <div className={`text-sm ${darkBg ? "text-gray-400" : "text-gray-600"}`}>Problems Solved</div>
            </div>

            <div
              className={`text-center p-6 rounded-2xl ${darkBg ? "bg-gray-800/50" : "bg-white/50"} backdrop-blur-sm shadow-lg`}
            >
              <Award className={`w-8 h-8 mx-auto mb-2 ${darkBg ? "text-yellow-400" : "text-yellow-600"}`} />
              <div className={`text-3xl font-bold ${darkBg ? "text-white" : "text-gray-900"}`}>{codingData.length}</div>
              <div className={`text-sm ${darkBg ? "text-gray-400" : "text-gray-600"}`}>Platforms</div>
            </div>

            <div
              className={`text-center p-6 rounded-2xl ${darkBg ? "bg-gray-800/50" : "bg-white/50"} backdrop-blur-sm shadow-lg`}
            >
              <Code2 className={`w-8 h-8 mx-auto mb-2 ${darkBg ? "text-blue-400" : "text-blue-600"}`} />
              <div className={`text-3xl font-bold ${darkBg ? "text-white" : "text-gray-900"}`}>{totalContests}+</div>
              <div className={`text-sm ${darkBg ? "text-gray-400" : "text-gray-600"}`}>Contests</div>
            </div>
          </div>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {codingData.map((item, index) => (
            <div key={index} ref={(el) => (cardsRef.current[index] = el)}>
              <CodingCard {...item} darkBg={darkBg} />
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="text-center mt-16">
          <div className="flex items-center justify-center mb-4">
            <div className="h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent w-32" />
            <div className="mx-4 w-3 h-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-500" />
            <div className="h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent w-32" />
          </div>
          <p className={`text-lg ${darkBg ? "text-gray-400" : "text-gray-600"}`}>
            Click on any platform to explore my detailed profile and achievements
          </p>
        </div>
      </div>
    </div>
  )
}

export default CodingProfiles
