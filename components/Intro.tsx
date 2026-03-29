import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';
import { TRANSLATIONS } from '../src/translations';

interface IntroProps {
  onComplete: () => void;
}

const Intro: React.FC<IntroProps> = ({ onComplete }) => {
  const { language } = useLanguage();
  const t = TRANSLATIONS[language].intro;
  const [showTagline, setShowTagline] = useState(false);

  return (
    <motion.div
      className="fixed inset-0 z-[60] bg-anthracite flex items-center justify-center overflow-hidden"
      exit={{ opacity: 0, transition: { duration: 0.8, ease: "easeInOut" } }}
    >
      {/* Adjusted logo size to be large but fit within standard viewports */}
      <div 
        className="relative w-[20rem] h-[20rem] md:w-[38rem] md:h-[38rem] flex items-center justify-center cursor-pointer group"
        onClick={onComplete}
        title={t.clickToEnter}
      >
        {/* Logo Reveal */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          onAnimationComplete={() => setShowTagline(true)}
          className="relative z-10 w-full h-full flex items-center justify-center p-4"
        >
          <img 
            src="https://storage.googleapis.com/ycp_portfolio-website/New%20YCP%204%20Points%20Gold%20.svg"
            alt="YC Logo"
            className="w-full h-full object-contain drop-shadow-[0_0_25px_rgba(212,175,55,0.6)]"
            loading="lazy"
          />
        </motion.div>
        
        {/* Pulse/Ripple Effect behind logo */}
        {showTagline && (
          <motion.div
            className="absolute inset-0 bg-gold/5 rounded-full z-0"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1.2, opacity: [0, 0.3, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          />
        )}
      </div>

      <AnimatePresence>
        {showTagline && (
          // Adjusted top position to provide a 'line space' between logo and text while staying within glow bounds
          // Mobile: 7.5rem -> 9rem
          // Desktop: 14rem -> 16rem
          <div className="absolute top-[calc(50%+9rem)] md:top-[calc(50%+16rem)] px-4 z-20 pointer-events-none flex justify-center w-full">
             {/* Wrapper to control animation state and width */}
             <motion.div 
               className="relative inline-block"
               initial="hidden"
               animate="visible"
             >
                {/* Text with clip-path reveal and color transition */}
                <motion.h1
                  variants={{
                    hidden: { opacity: 1, clipPath: 'inset(0 100% 0 0)', color: '#FFFFFF' },
                    visible: { 
                      opacity: 1,
                      clipPath: 'inset(0 0% 0 0)',
                      color: '#F3E5AB', // Transition to gold-light
                      transition: { 
                        clipPath: { duration: 1.2, ease: "easeInOut" },
                        color: { duration: 2, ease: "easeInOut" }
                      } 
                    }
                  }}
                  // Font size: text-base (mobile) / text-lg (desktop)
                  className="font-serif text-base md:text-lg tracking-widest text-center whitespace-nowrap"
                >
                  {t.tagline}
                </motion.h1>
                
                {/* Gold Line Swipe Animation */}
                <motion.div
                  className="absolute top-0 bottom-0 w-[2px] bg-gold z-20"
                  variants={{
                    hidden: { left: 0, opacity: 1 },
                    visible: { 
                      left: "100%", 
                      opacity: [1, 1, 0], 
                      transition: { duration: 1.2, ease: "easeInOut" } 
                    }
                  }}
                />
             </motion.div>
          </div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Intro;