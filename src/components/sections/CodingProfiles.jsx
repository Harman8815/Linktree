"use client";

import { useEffect, useRef } from "react";
import CodingCard from "../card/CodingCard";
import codingData from "../../store/codingData";
import { Code2, Sparkles, TrendingUp, Award } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const CodingProfiles = ({ darkBg }) => {
  const containerRef = useRef(null);
  const headerRef = useRef(null);
  const cardsRef = useRef([]);
  const statsRef = useRef(null);

  useEffect(() => {
    const header = headerRef.current;
    const cards = cardsRef.current;
    const stats = statsRef.current;

    // Header animation
    gsap.fromTo(header, { y: -50, opacity: 0 }, { y: 0, opacity: 1, duration: 1, ease: "power3.out" });

    // Stats animation
    gsap.fromTo(
      stats.children,
      { scale: 0, rotation: -180 },
      { scale: 1, rotation: 0, duration: 0.8, stagger: 0.2, delay: 0.5, ease: "back.out(1.7)" }
    );

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
            start: "top 95%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });

    gsap.to(".floating-element", {
      y: -20,
      duration: 3,
      ease: "power1.inOut",
      yoyo: true,
      repeat: -1,
      stagger: 0.5,
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  const totalProblems = codingData.reduce((sum, platform) => {
    const solved = platform.overview.totalSolved || platform.overview.problemsSolved || "0";
    return sum + (parseInt(solved.replace(/[^\d]/g, "")) || 0);
  }, 0);

  const totalContests = codingData.reduce((sum, platform) => {
    const contests =
      platform.overview.contestsGiven ||
      platform.achievements?.find((a) => a.label.includes("Contest"))?.value ||
      "0";
    return sum + (parseInt(contests.replace(/[^\d]/g, "")) || 0);
  }, 0);

  return (
    <div ref={containerRef} className="min-h-screen py-8 px-4 sm:py-10">
      <div className="max-w-7xl mx-auto">
        {/* Floating background elements */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none">
          <div
            className={`floating-element absolute top-10 left-4 sm:top-20 sm:left-10 w-16 h-16 sm:w-32 sm:h-32 rounded-full opacity-10 ${
              darkBg ? "bg-blue-500" : "bg-blue-300"
            }`}
          />
          <div
            className={`floating-element absolute top-28 right-6 sm:top-40 sm:right-20 w-14 h-14 sm:w-24 sm:h-24 rounded-full opacity-10 ${
              darkBg ? "bg-purple-500" : "bg-purple-300"
            }`}
          />
          <div
            className={`floating-element absolute bottom-28 left-1/4 w-12 h-12 sm:w-20 sm:h-20 rounded-full opacity-10 ${
              darkBg ? "bg-green-500" : "bg-green-300"
            }`}
          />
        </div>

        {/* Header */}
        <div ref={headerRef} className="text-center mb-12 sm:mb-16">
          <div className="flex items-center justify-center gap-3 sm:gap-4 mb-4 sm:mb-6">
            <div
              className={`p-3 sm:p-4 rounded-2xl sm:rounded-3xl ${
                darkBg ? "bg-blue-900/30" : "bg-blue-100"
              } backdrop-blur-sm`}
            >
              <Code2
                className={`w-8 h-8 sm:w-10 sm:h-10 ${
                  darkBg ? "text-blue-400" : "text-blue-600"
                }`}
              />
            </div>
            <Sparkles
              className={`w-6 h-6 sm:w-8 sm:h-8 ${
                darkBg ? "text-yellow-400" : "text-yellow-500"
              } animate-pulse`}
            />
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-7xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
            Coding Mastery
          </h1>

          <p
            className={`text-base sm:text-lg lg:text-2xl max-w-3xl mx-auto leading-relaxed mb-6 sm:mb-8 ${
              darkBg ? "text-gray-300" : "text-gray-600"
            }`}
          >
            A comprehensive showcase of my competitive programming journey across multiple platforms
          </p>

          {/* Global Stats */}
          <div
            ref={statsRef}
            className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-8 mb-8 sm:mb-12"
          >
            <div
              className={`text-center p-4 sm:p-6 rounded-2xl ${
                darkBg ? "bg-gray-800/50" : "bg-white/50"
              } backdrop-blur-sm shadow-lg w-full max-w-xs`}
            >
              <TrendingUp
                className={`w-6 h-6 sm:w-8 sm:h-8 mx-auto mb-1 sm:mb-2 ${
                  darkBg ? "text-green-400" : "text-green-600"
                }`}
              />
              <div
                className={`text-2xl sm:text-3xl font-bold ${
                  darkBg ? "text-white" : "text-gray-900"
                }`}
              >
                {totalProblems.toLocaleString()}+
              </div>
              <div
                className={`text-xs sm:text-sm ${
                  darkBg ? "text-gray-400" : "text-gray-600"
                }`}
              >
                Problems Solved
              </div>
            </div>

            <div
              className={`text-center p-4 sm:p-6 rounded-2xl ${
                darkBg ? "bg-gray-800/50" : "bg-white/50"
              } backdrop-blur-sm shadow-lg w-full max-w-xs`}
            >
              <Award
                className={`w-6 h-6 sm:w-8 sm:h-8 mx-auto mb-1 sm:mb-2 ${
                  darkBg ? "text-yellow-400" : "text-yellow-600"
                }`}
              />
              <div
                className={`text-2xl sm:text-3xl font-bold ${
                  darkBg ? "text-white" : "text-gray-900"
                }`}
              >
                {codingData.length}
              </div>
              <div
                className={`text-xs sm:text-sm ${
                  darkBg ? "text-gray-400" : "text-gray-600"
                }`}
              >
                Platforms
              </div>
            </div>

            <div
              className={`text-center p-4 sm:p-6 rounded-2xl ${
                darkBg ? "bg-gray-800/50" : "bg-white/50"
              } backdrop-blur-sm shadow-lg w-full max-w-xs`}
            >
              <Code2
                className={`w-6 h-6 sm:w-8 sm:h-8 mx-auto mb-1 sm:mb-2 ${
                  darkBg ? "text-blue-400" : "text-blue-600"
                }`}
              />
              <div
                className={`text-2xl sm:text-3xl font-bold ${
                  darkBg ? "text-white" : "text-gray-900"
                }`}
              >
                {totalContests}+
              </div>
              <div
                className={`text-xs sm:text-sm ${
                  darkBg ? "text-gray-400" : "text-gray-600"
                }`}
              >
                Contests
              </div>
            </div>
          </div>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12">
          {codingData.map((item, index) => (
            <div key={index} ref={(el) => (cardsRef.current[index] = el)}>
              <CodingCard {...item} darkBg={darkBg} />
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="text-center mt-12 sm:mt-16">
          <div className="flex items-center justify-center mb-4">
            <div className="h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent w-20 sm:w-32" />
            <div className="mx-3 sm:mx-4 w-2 sm:w-3 h-2 sm:h-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-500" />
            <div className="h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent w-20 sm:w-32" />
          </div>
          <p className={`text-sm sm:text-lg ${darkBg ? "text-gray-400" : "text-gray-600"}`}>
            Click on any platform to explore my detailed profile and achievements
          </p>
        </div>
      </div>
    </div>
  );
};

export default CodingProfiles;
