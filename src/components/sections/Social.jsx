import { useEffect, useRef } from "react";
import SocialCard from "../card/SocialCard";
import socialData, { socialStats } from "../../store/socialData";
import { Users, TrendingUp, Globe, Verified, Activity } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Social = ({ darkBg }) => {
  const containerRef = useRef(null);
  const headerRef = useRef(null);
  const statsRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const container = containerRef.current;
    const header = headerRef.current;
    const stats = statsRef.current;
    const cards = cardsRef.current;

    // Header animation
    gsap.fromTo(
      header,
      { y: -50, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: "power3.out" }
    );

    // Stats animation
    gsap.fromTo(
      stats.children,
      { scale: 0, rotation: -180 },
      {
        scale: 1,
        rotation: 0,
        duration: 0.8,
        stagger: 0.15,
        delay: 0.3,
        ease: "back.out(1.7)",
      }
    );

    // Cards scroll animation
    cards.forEach((card, index) => {
      gsap.fromTo(
        card,
        { x: index % 2 === 0 ? -100 : 100, opacity: 0, scale: 0.8 },
        {
          x: 0,
          opacity: 1,
          scale: 1,
          duration: 0.8,
          delay: index * 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });

    // Floating animation for background elements
    gsap.to(".floating-social", {
      y: -15,
      duration: 4,
      ease: "power1.inOut",
      yoyo: true,
      repeat: -1,
      stagger: 0.8,
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div ref={containerRef} className="min-h-screen py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Floating background elements */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none">
          <div
            className={`floating-social absolute top-32 right-16 w-32 h-32 rounded-full opacity-5 ${
              darkBg ? "bg-blue-500" : "bg-blue-300"
            }`}
          />
          <div
            className={`floating-social absolute bottom-32 left-16 w-24 h-24 rounded-full opacity-5 ${
              darkBg ? "bg-purple-500" : "bg-purple-300"
            }`}
          />
          <div
            className={`floating-social absolute top-1/2 right-1/4 w-20 h-20 rounded-full opacity-5 ${
              darkBg ? "bg-pink-500" : "bg-pink-300"
            }`}
          />
        </div>

        {/* Header */}
        <div ref={headerRef} className="text-center mb-16">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div
              className={`p-4 rounded-3xl ${
                darkBg ? "bg-blue-900/30" : "bg-blue-100"
              } backdrop-blur-sm`}
            >
              <Users
                className={`w-10 h-10 ${
                  darkBg ? "text-blue-400" : "text-blue-600"
                }`}
              />
            </div>
            <div
              className={`p-4 rounded-3xl ${
                darkBg ? "bg-purple-900/30" : "bg-purple-100"
              } backdrop-blur-sm`}
            >
              <Globe
                className={`w-10 h-10 ${
                  darkBg ? "text-purple-400" : "text-purple-600"
                }`}
              />
            </div>
          </div>

          <h1 className="text-5xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
            Social Connect
          </h1>

          <p
            className={`text-xl lg:text-2xl max-w-3xl mx-auto leading-relaxed mb-8 ${
              darkBg ? "text-gray-300" : "text-gray-600"
            }`}
          >
            Connect with me across different platforms and stay updated with my
            latest work and insights
          </p>

          {/* Social Statistics */}
          <div
            ref={statsRef}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12"
          >
            <div
              className={`text-center p-6 rounded-2xl ${
                darkBg ? "bg-gray-800/50" : "bg-white/50"
              } backdrop-blur-sm shadow-lg`}
            >
              <Globe
                className={`w-8 h-8 mx-auto mb-2 ${
                  darkBg ? "text-blue-400" : "text-blue-600"
                }`}
              />
              <div
                className={`text-3xl font-bold ${
                  darkBg ? "text-white" : "text-gray-900"
                }`}
              >
                {socialStats.totalPlatforms}
              </div>
              <div
                className={`text-sm ${
                  darkBg ? "text-gray-400" : "text-gray-600"
                }`}
              >
                Platforms
              </div>
            </div>

            <div
              className={`text-center p-6 rounded-2xl ${
                darkBg ? "bg-gray-800/50" : "bg-white/50"
              } backdrop-blur-sm shadow-lg`}
            >
              <Users
                className={`w-8 h-8 mx-auto mb-2 ${
                  darkBg ? "text-green-400" : "text-green-600"
                }`}
              />
              <div
                className={`text-3xl font-bold ${
                  darkBg ? "text-white" : "text-gray-900"
                }`}
              >
                {(socialStats.totalFollowers / 1000).toFixed(1)}K+
              </div>
              <div
                className={`text-sm ${
                  darkBg ? "text-gray-400" : "text-gray-600"
                }`}
              >
                Total Reach
              </div>
            </div>

            <div
              className={`text-center p-6 rounded-2xl ${
                darkBg ? "bg-gray-800/50" : "bg-white/50"
              } backdrop-blur-sm shadow-lg`}
            >
              <Verified
                className={`w-8 h-8 mx-auto mb-2 ${
                  darkBg ? "text-yellow-400" : "text-yellow-600"
                }`}
              />
              <div
                className={`text-3xl font-bold ${
                  darkBg ? "text-white" : "text-gray-900"
                }`}
              >
                {socialStats.verifiedAccounts}
              </div>
              <div
                className={`text-sm ${
                  darkBg ? "text-gray-400" : "text-gray-600"
                }`}
              >
                Verified
              </div>
            </div>

            <div
              className={`text-center p-6 rounded-2xl ${
                darkBg ? "bg-gray-800/50" : "bg-white/50"
              } backdrop-blur-sm shadow-lg`}
            >
              <Activity
                className={`w-8 h-8 mx-auto mb-2 ${
                  darkBg ? "text-purple-400" : "text-purple-600"
                }`}
              />
              <div
                className={`text-3xl font-bold ${
                  darkBg ? "text-white" : "text-gray-900"
                }`}
              >
                {socialStats.categories}
              </div>
              <div
                className={`text-sm ${
                  darkBg ? "text-gray-400" : "text-gray-600"
                }`}
              >
                Categories
              </div>
            </div>
          </div>
        </div>

        {/* Social Cards */}
        <div
          className={`relative rounded-3xl overflow-hidden shadow-2xl transition-all duration-500 p-8
            ${
              darkBg
                ? "bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 border border-gray-700/50"
                : "bg-gradient-to-br from-blue-50 via-white to-purple-50 border border-gray-200/30"
            }
          `}
        >
          {/* Background decoration */}
          <div className="absolute inset-0 overflow-hidden">
            <div
              className={`absolute -top-20 -right-20 w-40 h-40 rounded-full opacity-10 ${
                darkBg ? "bg-blue-500" : "bg-blue-300"
              }`}
            />
            <div
              className={`absolute -bottom-20 -left-20 w-40 h-40 rounded-full opacity-10 ${
                darkBg ? "bg-purple-500" : "bg-purple-300"
              }`}
            />
          </div>

          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-8">
              <div
                className={`p-3 rounded-2xl ${
                  darkBg ? "bg-blue-900/50" : "bg-blue-100"
                }`}
              >
                <TrendingUp
                  className={`w-6 h-6 ${
                    darkBg ? "text-blue-400" : "text-blue-600"
                  }`}
                />
              </div>
              <h2
                className={`text-3xl font-bold ${
                  darkBg ? "text-white" : "text-gray-900"
                }`}
              >
                Let's Connect
              </h2>
            </div>

            <p
              className={`text-lg mb-8 ${
                darkBg ? "text-gray-300" : "text-gray-600"
              }`}
            >
              Follow me on these platforms to stay updated with my latest
              projects, insights, and professional journey
            </p>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {socialData.map((social, index) => (
                <div
                  key={social.id}
                  ref={(el) => (cardsRef.current[index] = el)}
                >
                  <SocialCard {...social} darkBg={darkBg} />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-16">
          <div className="flex items-center justify-center mb-4">
            <div className="h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent w-32" />
            <div className="mx-4 w-3 h-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-500" />
            <div className="h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent w-32" />
          </div>
          <p
            className={`text-lg ${darkBg ? "text-gray-400" : "text-gray-600"}`}
          >
            Choose your preferred platform to connect and engage with my content
          </p>
        </div>
      </div>
    </div>
  );
};

export default Social;
