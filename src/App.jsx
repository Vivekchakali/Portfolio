import React, { Suspense, lazy } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './sections/Hero';

// Lazy load below-the-fold sections for performance
const About = lazy(() => import('./sections/About'));
const Skills = lazy(() => import('./sections/Skills'));
const FeaturedProject = lazy(() => import('./sections/FeaturedProject'));
const Projects = lazy(() => import('./sections/Projects'));
const Certifications = lazy(() => import('./sections/Certifications'));
const Stats = lazy(() => import('./sections/Stats'));
const Experience = lazy(() => import('./sections/Experience'));
const Contact = lazy(() => import('./sections/Contact'));

const SectionFallback = () => (
  <div className="flex justify-center items-center py-24">
    <div className="w-8 h-8 rounded-full border-2 border-accentCyan/30 border-t-accentCyan animate-spin" />
  </div>
);

function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  return (
    <div className="min-h-screen bg-background text-textPrimary font-sans relative overflow-x-hidden">
      {/* Scroll Progress Bar */}
      <motion.div
        style={{ scaleX }}
        className="fixed top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-accentPurple to-accentCyan origin-left z-[100]"
      />

      {/* Sticky Navbar */}
      <Navbar />

      {/* Main Content */}
      <main>
        {/* Hero — loaded eagerly */}
        <Hero />

        <Suspense fallback={<SectionFallback />}>
          <About />
        </Suspense>

        <Suspense fallback={<SectionFallback />}>
          <Skills />
        </Suspense>

        <Suspense fallback={<SectionFallback />}>
          <FeaturedProject />
        </Suspense>

        <Suspense fallback={<SectionFallback />}>
          <Projects />
        </Suspense>

        <Suspense fallback={<SectionFallback />}>
          <Certifications />
        </Suspense>

        <Suspense fallback={<SectionFallback />}>
          <Stats />
        </Suspense>

        <Suspense fallback={<SectionFallback />}>
          <Experience />
        </Suspense>

        <Suspense fallback={<SectionFallback />}>
          <Contact />
        </Suspense>
      </main>

      <Footer />
    </div>
  );
}

export default App;
