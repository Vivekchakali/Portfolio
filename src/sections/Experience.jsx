import React from 'react';
import { motion } from 'framer-motion';
import SectionHeading from '../components/ui/SectionHeading';
import { experienceTimeline } from '../data';

const Experience = () => {
  return (
    <section id="experience" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-accentCyan/5 via-transparent to-transparent" />
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="My Journey"
          subtitle="A timeline of key milestones, learnings, and achievements that shaped me as a developer."
        />

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-accentPurple via-accentCyan to-transparent" />

          <div className="space-y-12">
            {experienceTimeline.map((item, index) => {
              const isLeft = index % 2 === 0;
              return (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-80px' }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`relative flex items-center ${isLeft ? 'md:flex-row' : 'md:flex-row-reverse'} flex-row`}
                >
                  {/* Content Card */}
                  <div className={`w-full md:w-5/12 ml-14 md:ml-0 ${isLeft ? 'md:mr-auto md:pr-10' : 'md:ml-auto md:pl-10'}`}>
                    <div className="glass rounded-2xl p-6 border border-white/10 hover:border-accentPurple/30 hover:shadow-xl hover:shadow-accentPurple/10 transition-all duration-300 group">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-accentCyan text-sm font-bold">{item.year}</span>
                      </div>
                      <h3 className="text-white text-lg font-bold mb-2 group-hover:text-accentCyan transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-textSecondary text-sm leading-6">{item.description}</p>
                    </div>
                  </div>

                  {/* Center Dot */}
                  <div className="absolute left-6 md:left-1/2 w-4 h-4 -translate-x-1/2 rounded-full bg-gradient-to-br from-accentPurple to-accentCyan border-2 border-background shadow-lg shadow-accentPurple/50 z-10 flex-shrink-0" />
                </motion.div>
              );
            })}

            {/* Future Goals */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="relative flex flex-row items-center"
            >
              <div className="w-full md:w-5/12 ml-14 md:ml-auto md:pl-10">
                <div className="glass rounded-2xl p-6 border border-accentPurple/30 bg-accentPurple/5">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-accentPurple text-sm font-bold">Future</span>
                  </div>
                  <h3 className="text-white text-lg font-bold mb-2">What's Next? 🚀</h3>
                  <p className="text-textSecondary text-sm leading-6">
                    Aiming for full-time roles at leading tech companies, contributing to open source, 
                    building SaaS products, and continuing to push the boundaries of what's possible 
                    with AI and modern web technologies.
                  </p>
                </div>
              </div>
              <div className="absolute left-6 md:left-1/2 w-5 h-5 -translate-x-1/2 rounded-full bg-accentPurple border-2 border-background shadow-lg shadow-accentPurple/50 z-10 flex-shrink-0 animate-pulse" />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
