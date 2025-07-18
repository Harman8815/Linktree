import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { Code, Sparkles, Zap } from "lucide-react";

const LoadingScreen = ({ onFinish, exitDuration = 1.5 }) => {
  const containerRef = useRef();
  const logoRef = useRef();
  const textRef = useRef();
  const subtextRef = useRef();
  const particlesRef = useRef([]);
  const progressRef = useRef();
  const glowRef = useRef();

  useEffect(() => {
    const container = containerRef.current;
    const logo = logoRef.current;
    const text = textRef.current;
    const subtext = subtextRef.current;
    const particles = particlesRef.current;
    const progress = progressRef.current;
    const glow = glowRef.current;

    // Create main timeline
    const tl = gsap.timeline({
      onComplete: onFinish,
    });

    // Initial setup
    gsap.set([logo, text, subtext, progress], { opacity: 0 });
    gsap.set(particles, { scale: 0, opacity: 0 });

    // Logo animation
    tl.fromTo(
      logo,
      {
        scale: 0,
        rotation: -180,
        opacity: 0,
      },
      {
        scale: 1,
        rotation: 0,
        opacity: 1,
        duration: 0.8,
        ease: "back.out(1.7)",
      }
    );

    // Glow effect
    tl.fromTo(
      glow,
      {
        scale: 0,
        opacity: 0,
      },
      {
        scale: 1.5,
        opacity: 0.6,
        duration: 0.6,
        ease: "power2.out",
      },
      "-=0.4"
    );

    // Text animations
    tl.fromTo(
      text,
      {
        y: 50,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 0.6,
        ease: "power3.out",
      },
      "-=0.3"
    );

    tl.fromTo(
      subtext,
      {
        y: 30,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 0.5,
        ease: "power2.out",
      },
      "-=0.2"
    );

    // Particles animation
    tl.to(
      particles,
      {
        scale: 1,
        opacity: 1,
        duration: 0.4,
        stagger: 0.1,
        ease: "back.out(1.7)",
      },
      "-=0.4"
    );

    // Progress bar animation
    tl.fromTo(
      progress,
      {
        width: "0%",
        opacity: 0,
      },
      {
        width: "100%",
        opacity: 1,
        duration: 1.2,
        ease: "power2.inOut",
      },
      "-=0.5"
    );

    // Floating animation for particles
    tl.to(
      particles,
      {
        y: -10,
        duration: 1,
        ease: "power1.inOut",
        yoyo: true,
        repeat: -1,
        stagger: 0.2,
      },
      "-=1"
    );

    // Hold for a moment
    tl.to({}, { duration: 0.5 });

    // Exit animation
    tl.to([logo, glow], {
      scale: 0.8,
      opacity: 0,
      duration: exitDuration * 0.3,
      ease: "power2.in",
    });

    tl.to(
      [text, subtext],
      {
        y: -50,
        opacity: 0,
        duration: exitDuration * 0.4,
        ease: "power2.in",
      },
      "-=0.2"
    );

    tl.to(
      particles,
      {
        scale: 0,
        opacity: 0,
        duration: exitDuration * 0.3,
        stagger: 0.05,
        ease: "back.in(1.7)",
      },
      "-=0.3"
    );

    tl.to(
      progress.parentElement,
      {
        opacity: 0,
        duration: exitDuration * 0.2,
        ease: "power2.in",
      },
      "-=0.2"
    );

    tl.to(
      container,
      {
        opacity: 0,
        duration: exitDuration * 0.3,
        ease: "power2.in",
        onComplete: () => {
          if (typeof onFinish === "function") {
            onFinish(); // ✅ call after exit is fully done
          }
        },
      },
      "-=0.1"
    );

    return () => tl.kill();
  }, [onFinish, exitDuration]);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 overflow-hidden"
    >
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-blue-500/20 rounded-full blur-xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-40 h-40 bg-purple-500/20 rounded-full blur-xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-pink-500/10 rounded-full blur-2xl animate-spin" />
      </div>

      {/* Main content */}
      <div className="relative z-10 text-center">
        {/* Logo with glow effect */}
        <div className="relative mb-8">
          <div
            ref={glowRef}
            className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur-xl opacity-0"
          />
          <div
            ref={logoRef}
            className="relative w-24 h-24 mx-auto bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center shadow-2xl"
          >
            <Code className="w-12 h-12 text-white" />
          </div>
        </div>

        {/* Floating particles */}
        <div className="absolute -top-8 -left-8">
          <Sparkles
            ref={(el) => (particlesRef.current[0] = el)}
            className="w-6 h-6 text-yellow-400 opacity-0"
          />
        </div>
        <div className="absolute -top-4 -right-12">
          <Zap
            ref={(el) => (particlesRef.current[1] = el)}
            className="w-5 h-5 text-blue-400 opacity-0"
          />
        </div>
        <div className="absolute -bottom-6 -left-10">
          <Sparkles
            ref={(el) => (particlesRef.current[2] = el)}
            className="w-4 h-4 text-purple-400 opacity-0"
          />
        </div>
        <div className="absolute -bottom-8 -right-8">
          <Zap
            ref={(el) => (particlesRef.current[3] = el)}
            className="w-6 h-6 text-pink-400 opacity-0"
          />
        </div>

        {/* Main text */}
        <h1
          ref={textRef}
          className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent opacity-0"
        >
          Welcome to Portfolio
        </h1>

        {/* Subtext */}
        <p
          ref={subtextRef}
          className="text-xl md:text-2xl text-gray-300 mb-12 opacity-0"
        >
          Harman's Digital Showcase
        </p>

        {/* Progress bar */}
        <div className="w-64 mx-auto">
          <div className="relative h-2 bg-gray-700/50 rounded-full overflow-hidden backdrop-blur-sm">
            <div
              ref={progressRef}
              className="absolute left-0 top-0 h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full opacity-0"
              style={{ width: "0%" }}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse" />
          </div>
          <p className="text-sm text-gray-400 mt-3">Loading experience...</p>
        </div>
      </div>

      {/* Bottom decoration */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="flex space-x-2">
          <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce" />
          <div className="w-2 h-2 bg-purple-500 rounded-full animate-bounce delay-100" />
          <div className="w-2 h-2 bg-pink-500 rounded-full animate-bounce delay-200" />
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;
