import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../../contexts/LanguageContext';
import { TRANSLATIONS } from '../../src/translations';
import { Quote } from 'lucide-react';

const Testimonials: React.FC = () => {
  const { language } = useLanguage();
  const t = TRANSLATIONS[language].testimonials;
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % t.items.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [t.items.length]);

  return (
    <section id="testimonials" className="py-16 relative overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://storage.googleapis.com/ycp_portfolio-website/Vision%20background.jpg" 
          alt="Abstract Gold Background" 
          className="w-full h-full object-cover opacity-40" 
          loading="lazy"
        />
        <div className="absolute inset-0 bg-anthracite/90" />
      </div>

      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <Quote className="w-24 h-24 text-gold/10 absolute -top-10 -left-10 transform -scale-x-100" />
        
        <h2 className="text-gold font-sans tracking-[0.3em] uppercase mb-12 text-sm drop-shadow-sm">{t.title}</h2>
        
        <div className="min-h-[300px] md:min-h-[250px] relative flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="w-full flex flex-col items-center"
            >
              <p className="text-base md:text-lg font-serif text-white italic leading-relaxed mb-8 drop-shadow-[2px_1px_2px_rgba(0,0,0,0.6)]">
                "{t.items[currentIndex].text}"
              </p>
              <p className="text-gold font-bold uppercase tracking-widest text-xs md:text-sm">
                — {t.items[currentIndex].author}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="flex justify-center gap-3 mt-8">
          {t.items.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${idx === currentIndex ? 'w-8 bg-gold' : 'bg-white/20'} min-h-[44px] min-w-[44px] flex items-center justify-center`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
