import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import Navigation from '../components/Navigation';
import Overview from '../components/sections/Overview';
import { AboutSection, VisionSection, SkillsSection, AchievementsSection, ProcessSection, ExperienceSection } from '../components/sections/ProfileSections';
import FeaturedProjects from '../components/sections/FeaturedProjects';
import PortfolioHub from '../components/sections/PortfolioHub';
import Testimonials from '../components/sections/Testimonials';
import Contact from '../components/sections/Contact';

const Home: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      // Slight delay to ensure DOM is ready and layout is stable
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      window.scrollTo(0, 0);
    }
  }, [location]);

  return (
    <motion.div 
      className="relative"
      initial={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }}
      animate={{ 
        opacity: 1, 
        scale: 1, 
        filter: "blur(0px)",
        transitionEnd: { transform: "none", filter: "none" }
      }}
      transition={{ duration: 1.5, ease: [0.25, 1, 0.5, 1], delay: 0.2 }}
    >
      <Navigation />
      <div className="md:pl-20 transition-all duration-300">
        <Overview />
        <AboutSection />
        <VisionSection />
        <SkillsSection />
        <AchievementsSection />
        <ProcessSection />
        <ExperienceSection />
        <FeaturedProjects />
        <PortfolioHub />
        <Testimonials />
        <Contact />
      </div>
    </motion.div>
  );
};

export default Home;