import React from 'react';
import { animateScroll as scroll } from 'react-scroll';
import { FaGithub, FaLinkedin, FaTwitter, FaChevronUp } from 'react-icons/fa';

const Footer = () => {
  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    <footer className="bg-background border-t border-white/10 pt-12 pb-8 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">

          <div className="mb-6 md:mb-0 text-center md:text-left">
            <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-accentPurple to-accentCyan mb-2">Vivek Chakali</h3>
            <p className="text-textSecondary text-sm max-w-sm">
              Building modern, beautiful, and highly responsive web applications.
            </p>
          </div>

          <div className="flex space-x-6 mb-6 md:mb-0">
            <a href="https://github.com/Vivekchakali" className="text-textSecondary hover:text-accentPurple transition-colors duration-300">
              <FaGithub size={24} />
            </a>
            <a href="https://www.linkedin.com/in/vivek-chakali/" className="text-textSecondary hover:text-accentCyan transition-colors duration-300">
              <FaLinkedin size={24} />
            </a>
            <a href="#" className="text-textSecondary hover:text-accentPurple transition-colors duration-300">
              <FaTwitter size={24} />
            </a>
          </div>

        </div>

        <div className="border-t border-white/10 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-textSecondary text-sm text-center md:text-left">
            &copy; {new Date().getFullYear()} Designed & Developed by Vivek Chakali. All rights reserved.
          </p>

          <button
            onClick={scrollToTop}
            className="mt-4 md:mt-0 p-3 rounded-full bg-cardBg border border-white/10 text-white hover:bg-white/10 hover:text-accentCyan transition-all duration-300"
            aria-label="Scroll to top"
          >
            <FaChevronUp />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
