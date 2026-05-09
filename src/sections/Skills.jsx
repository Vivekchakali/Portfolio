import React from 'react';
import { motion } from 'framer-motion';
import {
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs,
  FaJava, FaPython, FaGitAlt, FaGithub, FaFigma,
} from 'react-icons/fa';
import {
  SiTailwindcss, SiExpress, SiMysql, SiMongodb, SiC,
} from 'react-icons/si';
import SectionHeading from '../components/ui/SectionHeading';
import { skillsData } from '../data';

// Map icon names -> rendered icon components
const iconMap = {
  FaHtml5: (color) => <FaHtml5 style={{ color }} size={22} />,
  FaCss3Alt: (color) => <FaCss3Alt style={{ color }} size={22} />,
  FaJs: (color) => <FaJs style={{ color }} size={22} />,
  FaReact: (color) => <FaReact style={{ color }} size={22} />,
  FaNodeJs: (color) => <FaNodeJs style={{ color }} size={22} />,
  FaJava: (color) => <FaJava style={{ color }} size={22} />,
  FaPython: (color) => <FaPython style={{ color }} size={22} />,
  FaGitAlt: (color) => <FaGitAlt style={{ color }} size={22} />,
  FaGithub: (color) => <FaGithub style={{ color }} size={22} />,
  FaFigma: (color) => <FaFigma style={{ color }} size={22} />,
  SiTailwindcss: (color) => <SiTailwindcss style={{ color }} size={22} />,
  SiExpress: (color) => <SiExpress style={{ color }} size={22} />,
  SiMysql: (color) => <SiMysql style={{ color }} size={22} />,
  SiMongodb: (color) => <SiMongodb style={{ color }} size={22} />,
  SiC: (color) => <SiC style={{ color }} size={22} />,
  VsCode: (color) => <span style={{ color, fontWeight: 700, fontSize: '14px' }}>VS</span>,
};

const categoryMeta = {
  Frontend: { border: 'border-blue-500/30', glow: 'hover:shadow-blue-500/10', title: 'text-blue-400', dot: 'bg-blue-400', label: 'Frontend' },
  Backend: { border: 'border-green-500/30', glow: 'hover:shadow-green-500/10', title: 'text-green-400', dot: 'bg-green-400', label: 'Backend' },
  Database: { border: 'border-yellow-500/30', glow: 'hover:shadow-yellow-500/10', title: 'text-yellow-400', dot: 'bg-yellow-400', label: 'Database' },
  ProgrammingLanguages: { border: 'border-purple-500/30', glow: 'hover:shadow-purple-500/10', title: 'text-purple-400', dot: 'bg-purple-400', label: 'Programming Languages' },
  Tools: { border: 'border-cyan-500/30', glow: 'hover:shadow-cyan-500/10', title: 'text-cyan-400', dot: 'bg-cyan-400', label: 'Dev Tools' },
};

const Skills = () => {
  return (
    <section id="skills" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-purple-900/10 via-transparent to-transparent pointer-events-none" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Skills & Technologies"
          subtitle="The modern tech stack I wield to build powerful, elegant, and scalable applications."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Object.entries(skillsData).map(([category, skills], catIndex) => {
            const meta = categoryMeta[category];
            return (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: catIndex * 0.1 }}
                className={`glass rounded-2xl p-6 border ${meta.border} hover:shadow-2xl ${meta.glow} transition-all duration-300`}
              >
                {/* Category Header */}
                <div className="flex items-center gap-2 mb-5">
                  <span className={`w-2 h-2 rounded-full ${meta.dot}`} />
                  <h3 className={`font-bold text-lg ${meta.title}`}>{meta.label}</h3>
                </div>

                {/* Skill Pills */}
                <div className="grid grid-cols-2 gap-3">
                  {skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, scale: 0.85 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: catIndex * 0.08 + skillIndex * 0.05 }}
                      whileHover={{ scale: 1.05, y: -2 }}
                      className="flex items-center gap-2.5 p-2.5 rounded-xl bg-white/5 hover:bg-white/10 transition-all duration-200 cursor-default"
                    >
                      <span className="flex-shrink-0 flex items-center justify-center w-6 h-6">
                        {iconMap[skill.iconName]?.(skill.color)}
                      </span>
                      <span className="text-textSecondary text-sm font-medium truncate">{skill.name}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Soft Skills Tags */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-12 text-center"
        >
          <p className="text-textSecondary mb-4">Always learning, always growing.</p>
          <div className="flex justify-center gap-3 flex-wrap">
            {['Problem Solving', 'Team Collaboration', 'Agile Methodologies', 'System Design', 'API Integration'].map((tag) => (
              <span key={tag} className="px-4 py-1.5 rounded-full text-sm text-accentCyan border border-accentCyan/30 bg-accentCyan/5">
                {tag}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
