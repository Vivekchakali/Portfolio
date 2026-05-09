import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaStar, FaCode } from 'react-icons/fa';
import SectionHeading from '../components/ui/SectionHeading';
import { featuredProject } from '../data';

const FeaturedProject = () => {
  const { title, description, image, techStack, features, challenges, liveDemo, githubRepo } = featuredProject;

  return (
    <section id="featured" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-accentPurple/10 via-transparent to-accentCyan/10" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Featured Project"
          subtitle="A highlight from my portfolio — a production-ready, AI-powered platform."
        />

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="glass rounded-3xl overflow-hidden border border-white/10 hover:border-accentPurple/30 transition-all duration-300 shadow-2xl hover:shadow-accentPurple/20"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Image */}
            <div className="relative overflow-hidden h-72 lg:h-auto">
              <img
                src={image}
                alt={title}
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-background/80 lg:block hidden" />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent lg:hidden" />
              <div className="absolute top-4 left-4">
                <span className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-accentPurple text-white text-xs font-semibold">
                  <FaStar size={12} /> Featured
                </span>
              </div>
            </div>

            {/* Content */}
            <div className="p-6 sm:p-8 lg:p-12 flex flex-col justify-center">
              <h3 className="text-3xl font-bold text-white mb-4">{title}</h3>
              <p className="text-textSecondary leading-7 mb-6">{description}</p>

              {/* Tech Stack */}
              <div className="mb-6">
                <h4 className="text-sm text-accentCyan font-semibold uppercase tracking-wider mb-3">Tech Stack</h4>
                <div className="flex flex-wrap gap-2">
                  {techStack.map((tech) => (
                    <span key={tech} className="px-3 py-1 rounded-full text-xs font-medium bg-accentPurple/15 text-accentPurple border border-accentPurple/20">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Features */}
              <div className="mb-6">
                <h4 className="text-sm text-accentCyan font-semibold uppercase tracking-wider mb-3">Key Features</h4>
                <ul className="space-y-2">
                  {features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-textSecondary text-sm">
                      <FaCode size={12} className="text-accentCyan flex-shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA Buttons */}
              <div className="flex gap-4 flex-wrap">
                <a href={liveDemo} target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-2 px-6 py-2.5 rounded-full bg-gradient-to-r from-accentPurple to-accentCyan text-white text-sm font-semibold hover:opacity-90 hover:scale-105 transition-all duration-300">
                  <FaExternalLinkAlt size={14} /> Live Demo
                </a>
                <a href={githubRepo} target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-2 px-6 py-2.5 rounded-full glass border border-white/20 text-white text-sm font-semibold hover:bg-white/10 hover:scale-105 transition-all duration-300">
                  <FaGithub size={14} /> GitHub
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedProject;
