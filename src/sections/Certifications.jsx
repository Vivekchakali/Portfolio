import React from 'react';
import { motion } from 'framer-motion';
import { FaExternalLinkAlt, FaCheckCircle } from 'react-icons/fa';
import SectionHeading from '../components/ui/SectionHeading';
import { certificationsData } from '../data';

const Certifications = () => {
  return (
    <section id="certifications" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accentCyan/5 to-transparent" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Certifications"
          subtitle="Credentials that validate my expertise and commitment to continuous learning."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
          {certificationsData.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="glass rounded-2xl p-6 border border-white/10 hover:border-accentCyan/30 hover:shadow-2xl hover:shadow-accentCyan/15 transition-all duration-300 group flex flex-col"
            >
              {/* Org Logo */}
              <div className="h-16 flex items-center justify-center mb-4">
                <img
                  src={cert.image}
                  alt={cert.issuer}
                  className="max-h-12 max-w-24 object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
                  onError={(e) => { e.target.style.display = 'none'; }}
                />
              </div>

              <FaCheckCircle className="text-accentCyan mb-3" size={20} />
              <h3 className="text-white font-semibold text-base leading-snug mb-2 flex-1">{cert.title}</h3>
              <p className="text-accentCyan text-sm font-medium mb-1">{cert.issuer}</p>
              <p className="text-textSecondary text-xs mb-4">{cert.date}</p>

              <a
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-xs font-semibold text-accentPurple hover:text-accentCyan transition-colors duration-200 mt-auto"
              >
                <FaExternalLinkAlt size={11} /> Verify Certificate
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
