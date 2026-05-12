import React, { useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { Link } from 'react-scroll';
import { FaGithub, FaChevronDown } from 'react-icons/fa';
import { SiLeetcode, SiHackerrank, SiCodechef } from 'react-icons/si';
import Particles from 'react-tsparticles';
import { loadSlim } from 'tsparticles-slim';

const Hero = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Particles Background */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        className="absolute inset-0 z-0"
        options={{
          background: { color: { value: 'transparent' } },
          fpsLimit: 60,
          interactivity: {
            events: { onHover: { enable: true, mode: 'repulse' } },
            modes: { repulse: { distance: 100 } }
          },
          particles: {
            color: { value: ['#7C3AED', '#06B6D4'] },
            links: { color: '#7C3AED', distance: 120, enable: true, opacity: 0.2, width: 1 },
            move: { enable: true, speed: 0.8, outModes: { default: 'bounce' } },
            number: { density: { enable: true, area: 900 }, value: 60 },
            opacity: { value: 0.4 },
            size: { value: { min: 1, max: 3 } }
          },
          detectRetina: true
        }}
      />

      {/* Gradient Blobs */}
      <div className="absolute top-20 left-1/4 w-80 h-80 bg-accentPurple/20 rounded-full filter blur-3xl animate-blob z-0" />
      <div className="absolute bottom-20 right-1/4 w-80 h-80 bg-accentCyan/20 rounded-full filter blur-3xl animate-blob animation-delay-2000 z-0" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-accentPurple/10 rounded-full filter blur-3xl animate-blob animation-delay-4000 z-0" />

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">

          {/* Left Content */}
          <div className="flex-1 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block px-4 py-2 rounded-full text-sm font-medium bg-accentPurple/10 text-accentPurple border border-accentPurple/20 mb-6">
                👋 Hello, World!
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-7xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-white via-textSecondary to-white"
            >
              Vivek Chakali
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg sm:text-xl md:text-2xl font-semibold text-accentCyan mb-6 h-16"
            >
              <TypeAnimation
                sequence={[
                  'Full Stack Developer', 2000,
                  'AI & ML Enthusiast', 2000,
                  'Problem Solver', 2000,
                  'Competative Programmer', 2000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-textSecondary text-base sm:text-lg leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0 px-2 sm:px-0"
            >
              Passionate Computer Science student crafting modern, performant,
              and visually stunning web experiences. I love turning complex
              problems into elegant digital solutions using cutting-edge technologies.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row flex-wrap gap-4 justify-center lg:justify-start mb-8 w-full px-4 sm:px-0"
            >
              <Link to="projects" smooth={true} offset={-70} duration={500} className="w-full sm:w-auto">
                <button className="w-full sm:w-auto px-8 py-3 rounded-full bg-gradient-to-r from-accentPurple to-accentCyan text-white font-semibold hover:opacity-90 hover:scale-105 transition-all duration-300 shadow-lg shadow-accentPurple/25">
                  View Projects
                </button>
              </Link>
              <a href="resume.pdf" download="Vivek_Chakali_Resume.pdf" className="w-full sm:w-auto">
                <button className="w-full sm:w-auto px-8 py-3 rounded-full border border-white/20 text-white font-semibold hover:bg-white/10 hover:scale-105 transition-all duration-300 glass">
                  Download Resume
                </button>
              </a>
              <Link to="contact" smooth={true} offset={-70} duration={500} className="w-full sm:w-auto">
                <button className="w-full sm:w-auto px-8 py-3 rounded-full border border-accentCyan/50 text-accentCyan font-semibold hover:bg-accentCyan/10 hover:scale-105 transition-all duration-300">
                  Contact Me
                </button>
              </Link>
            </motion.div>

            {/* Social Icons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex gap-4 sm:gap-6 justify-center lg:justify-start"
            >
              {[
                { icon: <FaGithub size={22} />, href: 'https://github.com/VivekChakali', label: 'GitHub', color: 'hover:text-white' },
                { icon: <SiCodechef size={22} />, href: 'https://www.codechef.com/users/vivek_588', label: 'CodeChef', color: 'hover:text-[#5B4638]' },
                { icon: <SiLeetcode size={22} />, href: 'https://leetcode.com/u/Vivek_chakali88/', label: 'LeetCode', color: 'hover:text-[#FFA116]' },
                { icon: <SiHackerrank size={22} />, href: 'https://www.hackerrank.com/profile/24211A0588', label: 'HackerRank', color: 'hover:text-[#2EC866]' },
              ].map(({ icon, href, label, color }) => (
                <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}
                  className={`text-textSecondary ${color} transition-all duration-300 hover:scale-125 hover:-translate-y-1`}>
                  {icon}
                </a>
              ))}
            </motion.div>
          </div>

          {/* Right — Avatar */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, x: 50 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex-shrink-0 mt-8 lg:mt-0"
          >
            <div className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-96 md:h-96 mx-auto">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-accentPurple via-accentCyan to-accentPurple animate-spin-slow opacity-30 blur-md" />
              <div className="absolute inset-2 rounded-full bg-gradient-to-br from-accentPurple to-accentCyan p-1">
                <div className="rounded-full overflow-hidden h-full w-full bg-background flex items-center justify-center">
                  <div className="flex flex-col items-center justify-center text-center px-4 sm:px-6">
                    <div className="text-5xl sm:text-6xl mb-2 sm:mb-3">👨‍💻</div>
                    <p className="text-accentCyan font-semibold text-xs sm:text-sm">Full Stack Dev</p>
                    <p className="text-textSecondary text-[10px] sm:text-xs">CSE Student</p>
                  </div>
                </div>
              </div>
              {/* Floating Badges */}
              <motion.div animate={{ y: [-5, 5, -5] }} transition={{ repeat: Infinity, duration: 3 }}
                className="absolute -top-2 -right-2 sm:-top-4 sm:-right-4 glass rounded-xl px-2 py-1 sm:px-3 sm:py-2 text-[10px] sm:text-xs font-semibold text-accentCyan border border-accentCyan/30 whitespace-nowrap">
                React ⚛️
              </motion.div>
              <motion.div animate={{ y: [5, -5, 5] }} transition={{ repeat: Infinity, duration: 3.5 }}
                className="absolute -bottom-2 -left-2 sm:-bottom-4 sm:-left-4 glass rounded-xl px-2 py-1 sm:px-3 sm:py-2 text-[10px] sm:text-xs font-semibold text-accentPurple border border-accentPurple/30 whitespace-nowrap">
                Node.js 🟢
              </motion.div>
              <motion.div animate={{ y: [-3, 7, -3] }} transition={{ repeat: Infinity, duration: 4 }}
                className="absolute top-1/2 -right-6 sm:-right-10 glass rounded-xl px-2 py-1 sm:px-3 sm:py-2 text-[10px] sm:text-xs font-semibold text-yellow-400 border border-yellow-400/30 whitespace-nowrap">
                Python 🐍
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-textSecondary text-xs tracking-widest uppercase">Scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            <FaChevronDown className="text-accentCyan" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
