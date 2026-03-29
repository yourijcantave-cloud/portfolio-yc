import React, { useState } from 'react';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import { useLanguage } from '../../contexts/LanguageContext';
import { TRANSLATIONS } from '../../src/translations';

const Overview: React.FC = () => {
  const { language } = useLanguage();
  const t = TRANSLATIONS[language].overview;
  const [activeChapter, setActiveChapter] = useState<string | null>(null);

  const handleChapterClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Modern Graphic/Abstract Backgrounds map - Colorful Art Theme
  const getBackground = (id: string | null) => {
    switch(id) {
      // Vibrant Abstract
      case 'about': return 'https://images.unsplash.com/photo-1549490349-8643362247b5?q=80&w=1920&auto=format&fit=crop'; 
      // Colorful Shapes
      case 'vision': return 'https://images.unsplash.com/photo-1550684848-86a5d8727436?q=80&w=1920&auto=format&fit=crop'; 
      // Vibrant Mesh Gradient
      case 'skills': return 'https://images.unsplash.com/photo-1557683316-973673baf926?q=80&w=1920&auto=format&fit=crop'; 
      // Colorful 3D Flow
      case 'process': return 'https://images.unsplash.com/photo-1574169208507-84376144848b?q=80&w=1920&auto=format&fit=crop'; 
      // Vibrant Abstract Painting
      case 'experience': return 'https://images.unsplash.com/photo-1567095761054-7a02e69e5c43?q=80&w=1920&auto=format&fit=crop'; 
      // Colorful Abstract 3D
      case 'featured-projects': return 'https://images.unsplash.com/photo-1550684847-75bdda21cc95?q=80&w=1920&auto=format&fit=crop';
      // Paint Abstract Gold/Dark (User favorite)
      case 'portfolio': return 'https://images.unsplash.com/photo-1541701494587-cb58502866ab?q=80&w=1920&auto=format&fit=crop'; 
      // Deep Gold Texture (User favorite)
      case 'testimonials': return 'https://images.unsplash.com/photo-1604871000636-074fa5117945?q=80&w=1920&auto=format&fit=crop'; 
      // Vibrant Color Explosion
      case 'contact': return 'https://images.unsplash.com/photo-1500462859194-885860bb1107?q=80&w=1920&auto=format&fit=crop'; 
      // Default - Return empty string to show only the anthracite background (same as Intro)
      default: return ''; 
    }
  };

  const textZoomBlurVariants: Variants = {
    hidden: { 
      filter: 'blur(25px)', 
      opacity: 0, 
      scale: 1.15
    },
    visible: { 
      // Shortened distance: 2px 1px 2px
      filter: 'blur(0px) drop-shadow(2px 1px 2px rgba(0,0,0,0.6))', 
      opacity: 1, 
      scale: 1,
      transition: { 
        duration: 1.8, 
        ease: [0.25, 1, 0.5, 1], // Cinematic ease-out
        delay: 0.2
      } 
    }
  };

  const logoVariants: Variants = {
    hidden: { 
      opacity: 0, 
      scale: 0.8
    },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { 
        duration: 1.5, 
        ease: "easeOut",
      }
    }
  };

  const subtitleVariants: Variants = {
    hidden: { opacity: 0, y: 20, filter: 'blur(5px)' },
    visible: { 
      opacity: 1, 
      y: 0,
      filter: 'blur(0px)',
      transition: { delay: 1.2, duration: 1, ease: "easeOut" }
    }
  };

  return (
    <section id="overview" className="relative bg-anthracite min-h-screen flex flex-col">
      {/* Dynamic Background */}
      <div className="fixed inset-0 z-0 opacity-20 pointer-events-none">
        <AnimatePresence mode="wait">
          {getBackground(activeChapter) && (
            <motion.img
               key={activeChapter || 'default'}
               src={getBackground(activeChapter)}
               alt="Background"
               className="w-full h-full object-cover opacity-40"
               initial={{ opacity: 0 }}
               animate={{ opacity: 0.4 }}
               exit={{ opacity: 0 }}
               transition={{ duration: 1 }}
               loading="lazy"
            />
          )}
        </AnimatePresence>
        <div className="absolute inset-0 bg-gradient-to-b from-anthracite via-transparent to-anthracite" />
      </div>

      {/* Hero Content - Massive Typography with Zoom & Blur */}
      <div className="relative z-10 flex-grow flex flex-col justify-center items-center px-6 pt-20">
        
        {/* Logo */}
        <motion.div
          variants={logoVariants}
          initial="hidden"
          animate="visible"
          whileHover={{ scale: 1.05 }}
          className="-mb-6 md:-mb-14 w-72 h-72 md:w-[36rem] md:h-[36rem]"
        >
           <img 
             src="https://storage.googleapis.com/ycp_portfolio-website/New%20YC%204%20Points%20Gold%20Logo.svg" 
             alt="YC Logo" 
             className="w-full h-full object-contain drop-shadow-[0_0_20px_rgba(212,175,5,0.3)]" 
             loading="lazy"
           />
        </motion.div>

        <motion.div 
          initial="hidden"
          animate="visible"
          className="text-center mix-blend-overlay relative inline-block"
        >
          {/* Main Title Wrapper */}
          <div className="relative inline-block">
            <motion.h1 
              variants={textZoomBlurVariants}
              className="text-[10vw] md:text-[6vw] leading-tight font-serif tracking-wide uppercase text-white"
            >
              Youri Cantave
            </motion.h1>
          </div>
        </motion.div>
        
        <motion.div 
          variants={subtitleVariants}
          initial="hidden"
          animate="visible"
          className="mt-2 md:mt-4 flex flex-col items-center w-full space-y-2 md:space-y-3"
        >
          <p className="text-gold font-sans tracking-[0.3em] text-xs md:text-sm uppercase font-semibold drop-shadow-sm text-center">
            {t.tagline1}
          </p>
          <p className="text-gold font-sans tracking-[0.3em] text-xs md:text-sm uppercase font-semibold drop-shadow-sm text-center">
            {t.tagline2}
          </p>
          <motion.div 
            initial={{ width: 0, opacity: 0 }}
            animate={{ width: 96, opacity: 1 }}
            transition={{ delay: 1.5, duration: 1, ease: "easeInOut" }}
            className="h-px bg-gold mt-16 md:mt-24 shadow-[0_0_10px_#D4AF37]" 
          />
        </motion.div>
      </div>

      {/* Editorial Index - Bottom Aligned */}
      <div className="relative z-10 w-full px-6 md:px-20 pb-12 md:pb-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-4 border-t border-white/10 pt-8">
          {t.chapters.map((chapter, index) => (
            <motion.a
              key={chapter.id}
              href={`#${chapter.id}`}
              onClick={(e) => handleChapterClick(e, chapter.id)}
              onMouseEnter={() => setActiveChapter(chapter.id)}
              onMouseLeave={() => setActiveChapter(null)}
              className="group flex flex-col gap-2 cursor-pointer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 + 1.2 }}
            >
              <div className="flex items-center justify-between border-b border-transparent group-hover:border-gold transition-colors pb-2">
                <span className="text-xs font-mono text-gray-500 group-hover:text-gold transition-colors">{chapter.number}</span>
              </div>
              <h3 className="text-sm md:text-base font-sans font-bold text-gray-400 group-hover:text-gold uppercase tracking-wider transition-colors">
                {chapter.title}
              </h3>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Overview;