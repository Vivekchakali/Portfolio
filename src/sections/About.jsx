import React, { useCallback } from 'react';
import { motion } from 'framer-motion';
import Particles from 'react-tsparticles';
import { loadSlim } from 'tsparticles-slim';
import SectionHeading from '../components/ui/SectionHeading';
import GlassCard from '../components/ui/GlassCard';
import {
  GraduationCap,
  Code2,
  BrainCircuit,
  Rocket,
  Layout,
  Trophy,
  Sparkles,
  ChevronRight,
  Database,
  Cpu,
  Globe,
  TerminalSquare
} from 'lucide-react';

const stats = [
  { label: 'Projects Built', value: '5', icon: <Code2 className="text-accentPurple" size={24} /> },
  { label: 'Certifications', value: '5+', icon: <GraduationCap className="text-accentCyan" size={24} /> },
  { label: 'Hackathons Participated', value: '5+', icon: <Trophy className="text-pink-400" size={24} /> },
  { label: 'Technologies Learned', value: '10+', icon: <BrainCircuit className="text-blue-400" size={24} /> },
];

const FloatingIcon = ({ icon, delay, className, style }) => (
  <motion.div
    initial={{ y: 0, opacity: 0 }}
    animate={{
      y: [0, -30, 0],
      x: [0, 15, 0],
      opacity: [0.1, 0.4, 0.1],
      rotate: [0, 10, -10, 0]
    }}
    transition={{
      duration: 6,
      repeat: Infinity,
      delay: delay,
      ease: "easeInOut"
    }}
    className={`absolute pointer-events-none ${className}`}
    style={style}
  >
    {icon}
  </motion.div>
);

const About = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <section id="about" className="py-24 relative overflow-hidden bg-gradient-to-b from-background to-[#080d1a] font-sans">
      {/* Animated Particles / Network Background */}
      <Particles
        id="about-tsparticles"
        init={particlesInit}
        className="absolute inset-0 z-0 opacity-60"
        options={{
          fullScreen: { enable: false, zIndex: 0 },
          background: { color: { value: 'transparent' } },
          fpsLimit: 60,
          interactivity: {
            events: { onHover: { enable: true, mode: 'grab' }, resize: true },
            modes: { grab: { distance: 150, links: { opacity: 0.6, color: '#06B6D4' } } }
          },
          particles: {
            color: { value: ['#7C3AED', '#06B6D4', '#ffffff'] },
            links: { color: '#7C3AED', distance: 150, enable: true, opacity: 0.15, width: 1 },
            move: { enable: true, speed: 0.8, direction: 'none', random: true, straight: false, outModes: { default: 'bounce' } },
            number: { density: { enable: true, area: 800 }, value: 60 },
            opacity: { value: 0.4, animation: { enable: true, speed: 1, minimumValue: 0.1 } },
            size: { value: { min: 1, max: 2.5 }, animation: { enable: true, speed: 2, minimumValue: 0.5 } }
          },
          detectRetina: true
        }}
      />
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-accentPurple/20 via-transparent to-transparent opacity-40 blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-accentCyan/20 via-transparent to-transparent opacity-40 blur-3xl"></div>
      </div>

      {/* Floating Tech Icons */}
      <FloatingIcon icon={<Database size={40} className="text-accentCyan" />} delay={0} style={{ top: '15%', left: '8%' }} />
      <FloatingIcon icon={<Cpu size={48} className="text-accentPurple" />} delay={1.5} style={{ top: '65%', right: '10%' }} />
      <FloatingIcon icon={<Globe size={36} className="text-blue-400" />} delay={3} style={{ bottom: '15%', left: '15%' }} />
      <FloatingIcon icon={<TerminalSquare size={42} className="text-pink-400" />} delay={4.5} style={{ top: '25%', right: '18%' }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          title="About Me"
          subtitle="Passionate developer with a relentless drive to build impactful digital experiences."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-20">

          {/* Left Column — Personal Intro & Education */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7 space-y-12"
          >
            {/* Introduction Text */}
            <div className="space-y-6 text-lg text-textSecondary leading-relaxed font-poppins">
              <p>
                Hi, I'm <span className="text-white font-semibold">Vivek Chakali</span> — a passionate{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-accentCyan to-accentPurple font-bold">
                  Full Stack Developer
                </span>{' '}
                and AI enthusiast focused on building scalable, modern, and impactful digital experiences.
              </p>
              <p>
                I'm currently pursuing my B.Tech in Computer Science and Engineering at B V Raju Institute of
                Technology, Narsapur, while also sharpening my industry-ready skills through NxtWave Academy.
              </p>
              <p>
                I enjoy transforming ideas into real-world applications using modern web technologies, clean
                UI/UX design, and intelligent systems powered by AI. My interests span across Full Stack
                Development, Artificial Intelligence, Competitive Programming, and Problem Solving. I'm deeply
                driven by innovation and constantly learning new technologies to stay ahead in the tech industry.
              </p>
              <p>
                Beyond coding, I actively participate in hackathons, build personal projects, and explore
                cutting-edge technologies that can create meaningful impact.
              </p>
            </div>

            {/* Education Timeline */}
            <div>
              <div className="flex items-center gap-3 mb-8">
                <div className="p-3 rounded-xl bg-accentCyan/10 text-accentCyan">
                  <GraduationCap size={28} />
                </div>
                <h3 className="text-3xl font-bold text-white font-space-grotesk tracking-wide">
                  Education Journey
                </h3>
              </div>

              <div className="relative border-l-2 border-white/10 ml-6 space-y-10 pb-4">
                {/* Timeline Item 1 */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="relative group pl-10"
                >
                  {/* Timeline Connector Dot */}
                  <div className="absolute -left-[11px] top-2 p-1 bg-[#0a0a0a] rounded-full border-4 border-accentCyan group-hover:border-white transition-colors duration-300 shadow-[0_0_15px_rgba(6,182,212,0.5)] group-hover:shadow-[0_0_20px_rgba(255,255,255,0.8)] z-10">
                    <div className="w-2 h-2 bg-accentCyan rounded-full group-hover:bg-white transition-colors duration-300" />
                  </div>

                  {/* Card */}
                  <div className="glass p-6 sm:p-8 rounded-2xl border border-white/5 hover:border-accentCyan/30 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(6,182,212,0.15)] relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-accentCyan/10 rounded-bl-full -z-10 transition-transform duration-500 group-hover:scale-150" />
                    <h4 className="text-xl sm:text-2xl font-bold text-white mb-2 font-space-grotesk">B V Raju Institute of Technology, Narsapur</h4>
                    <p className="text-textSecondary mb-4 text-base">B.Tech in Computer Science and Engineering</p>
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accentCyan/10 border border-accentCyan/20 text-accentCyan text-sm font-semibold tracking-wide">
                      <GraduationCap size={16} /> Expected Graduation: 2028
                    </div>
                  </div>
                </motion.div>

                {/* Timeline Item 2 */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="relative group pl-10"
                >
                  <div className="absolute -left-[11px] top-2 p-1 bg-[#0a0a0a] rounded-full border-4 border-accentPurple group-hover:border-white transition-colors duration-300 shadow-[0_0_15px_rgba(124,58,237,0.5)] group-hover:shadow-[0_0_20px_rgba(255,255,255,0.8)] z-10">
                    <div className="w-2 h-2 bg-accentPurple rounded-full group-hover:bg-white transition-colors duration-300" />
                  </div>

                  <div className="glass p-6 sm:p-8 rounded-2xl border border-white/5 hover:border-accentPurple/30 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(124,58,237,0.15)] relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-accentPurple/10 rounded-bl-full -z-10 transition-transform duration-500 group-hover:scale-150" />
                    <h4 className="text-xl sm:text-2xl font-bold text-white mb-2 font-space-grotesk">NxtWave Academy</h4>
                    <p className="text-textSecondary mb-4 text-base">Industry Ready Certification Program (IRCP)</p>
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accentPurple/10 border border-accentPurple/20 text-accentPurple text-sm font-semibold tracking-wide">
                      <BrainCircuit size={16} /> Full Stack Development & AI Learning Path
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Right Column — Passion Card */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5"
          >
            <div className="sticky top-24">
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="glass rounded-[2rem] p-8 sm:p-10 relative overflow-hidden border border-white/10 group hover:border-white/20 transition-all duration-500 shadow-2xl"
              >
                {/* Glowing backgrounds */}
                <div className="absolute -top-32 -right-32 w-64 h-64 bg-accentPurple/20 rounded-full blur-[80px] group-hover:bg-accentPurple/30 transition-all duration-700" />
                <div className="absolute -bottom-32 -left-32 w-64 h-64 bg-accentCyan/20 rounded-full blur-[80px] group-hover:bg-accentCyan/30 transition-all duration-700" />

                {/* Animated Gradient Border */}
                <div className="absolute inset-0 border-2 border-transparent bg-gradient-to-br from-accentCyan/20 via-transparent to-accentPurple/20 rounded-[2rem] [mask-image:linear-gradient(white,white)] [-webkit-mask-image:-webkit-linear-gradient(white,white)] [-webkit-mask-composite:destination-out] [mask-composite:exclude] pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-10">
                    <div className="p-3 bg-white/5 rounded-2xl border border-white/10 backdrop-blur-md">
                      <Sparkles className="text-yellow-400" size={28} />
                    </div>
                    <h3 className="text-3xl font-bold text-white font-space-grotesk tracking-wide">What Drives Me</h3>
                  </div>

                  <ul className="space-y-6">
                    {[
                      { icon: <Layout size={22} />, text: 'Building scalable web applications', color: 'text-blue-400', bg: 'bg-blue-400/10 border-blue-400/20' },
                      { icon: <BrainCircuit size={22} />, text: 'Creating AI-powered experiences', color: 'text-accentPurple', bg: 'bg-accentPurple/10 border-accentPurple/20' },
                      { icon: <Code2 size={22} />, text: 'Designing modern responsive UIs', color: 'text-pink-400', bg: 'bg-pink-400/10 border-pink-400/20' },
                      { icon: <Database size={22} />, text: 'Solving complex programming problems', color: 'text-accentCyan', bg: 'bg-accentCyan/10 border-accentCyan/20' },
                      { icon: <Rocket size={22} />, text: 'Participating in hackathons', color: 'text-orange-400', bg: 'bg-orange-400/10 border-orange-400/20' },
                      { icon: <Cpu size={22} />, text: 'Continuous learning & innovation', color: 'text-green-400', bg: 'bg-green-400/10 border-green-400/20' },
                    ].map((item, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.3 + (i * 0.1) }}
                        className="flex items-center gap-5 group/item cursor-default p-2 rounded-xl hover:bg-white/5 transition-colors duration-300 -ml-2"
                      >
                        <div className={`p-3 rounded-xl border ${item.bg} ${item.color} group-hover/item:scale-110 group-hover/item:rotate-3 transition-all duration-300 shadow-lg`}>
                          {item.icon}
                        </div>
                        <span className="text-textSecondary group-hover/item:text-white transition-colors duration-300 font-medium text-[1.05rem]">
                          {item.text}
                        </span>
                      </motion.li>
                    ))}
                  </ul>

                  <motion.div
                    className="mt-12 pt-8 border-t border-white/10 flex justify-center"
                    whileHover={{ scale: 1.05 }}
                  >
                    <a href="#projects" className="inline-flex items-center justify-center gap-2 px-8 py-4 w-full rounded-xl bg-gradient-to-r from-accentPurple to-accentCyan text-white font-bold text-lg shadow-[0_0_20px_rgba(124,58,237,0.3)] hover:shadow-[0_0_30px_rgba(6,182,212,0.5)] transition-all duration-300">
                      Explore My Work <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
                    </a>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </motion.div>

        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
          {stats.map((stat, index) => (
            <GlassCard key={stat.label} delay={index * 0.15} className="text-center group hover:-translate-y-3 border border-white/5 hover:border-white/10">
              <div className="flex justify-center mb-5 transform group-hover:scale-110 transition-transform duration-500">
                <div className="p-4 bg-[#0a0a0a] rounded-2xl shadow-inner border border-white/5 group-hover:shadow-[0_0_20px_rgba(255,255,255,0.1)] transition-shadow">
                  {stat.icon}
                </div>
              </div>
              <div className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400 mb-3 font-space-grotesk group-hover:from-white group-hover:to-white transition-colors">
                {stat.value}
              </div>
              <div className="text-textSecondary text-sm md:text-base font-semibold tracking-wide uppercase">
                {stat.label}
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
