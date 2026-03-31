import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, RefreshCw, ChevronLeft, ChevronRight } from 'lucide-react';
import { Project, GalleryType } from '../types';
import { useLanguage } from '../contexts/LanguageContext';
import { TRANSLATIONS } from '../translations';

interface ProjectLightboxProps {
  project: Project | null;
  onClose: () => void;
  onNext?: () => void;
  onPrev?: () => void;
  hasNavigation?: boolean;
}

const ProjectLightbox: React.FC<ProjectLightboxProps> = ({ 
  project, 
  onClose, 
  onNext, 
  onPrev,
  hasNavigation = false
}) => {
  const { language } = useLanguage();
  const t = TRANSLATIONS[language].gallery;
  const [showAfter, setShowAfter] = useState(false);

  // Reset toggle state whenever a new project is selected
  useEffect(() => {
    setShowAfter(false);
  }, [project]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!project) return;
      if (e.key === 'ArrowRight' && onNext) onNext();
      if (e.key === 'ArrowLeft' && onPrev) onPrev();
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [project, onNext, onPrev, onClose]);

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4 md:p-10"
        >
          <button 
            onClick={onClose}
            className="absolute top-6 right-6 text-white hover:text-gold transition-colors z-50 min-w-[44px] min-h-[44px] flex items-center justify-center"
          >
            <X size={40} />
          </button>

          {/* Navigation Buttons */}
          {hasNavigation && (
            <>
              <button 
                onClick={(e) => { e.stopPropagation(); onPrev?.(); }}
                className="absolute left-4 md:left-10 top-1/2 -translate-y-1/2 text-white/50 hover:text-gold transition-all z-50 p-2 hover:scale-110"
                aria-label="Previous Project"
              >
                <ChevronLeft size={60} strokeWidth={1} />
              </button>
              <button 
                onClick={(e) => { e.stopPropagation(); onNext?.(); }}
                className="absolute right-4 md:right-10 top-1/2 -translate-y-1/2 text-white/50 hover:text-gold transition-all z-50 p-2 hover:scale-110"
                aria-label="Next Project"
              >
                <ChevronRight size={60} strokeWidth={1} />
              </button>
            </>
          )}

          <div className="w-full max-w-6xl max-h-[90vh] flex flex-col items-center">
             {project.category !== GalleryType.PHOTO_EDITING && (
               <div className="text-center mb-8">
                  <span className="text-gold font-mono text-xs uppercase tracking-[0.3em] mb-2 block">{t.projectDetails}</span>
                  <h2 className="text-3xl md:text-5xl font-serif text-white">
                    {project.title} {project.subtitle && <span className="text-2xl opacity-70 font-light">{project.subtitle}</span>}
                  </h2>
               </div>
             )}
             
             <div className="w-full h-full flex flex-col items-center overflow-y-auto scrollbar-hide rounded-md bg-anthracite/50 relative p-6 border border-white/5 shadow-2xl">
                {project.videoUrl ? (
                  <div className="relative w-full aspect-video">
                    {project.videoUrl.includes('youtube.com/embed') ? (
                      <iframe 
                        src={project.videoUrl} 
                        title={project.title}
                        className="w-full h-full rounded-md border-0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen
                      ></iframe>
                    ) : (
                      <video controls autoPlay loop muted playsInline className="w-full h-full rounded-md">
                        <source src={project.videoUrl} type="video/mp4" />
                      </video>
                    )}
                  </div>
                ) : project.imageBefore ? (
                  <div className="relative w-full h-[60vh] md:h-[80vh] cursor-pointer group select-none flex items-center justify-center shrink-0 overflow-hidden" onClick={() => setShowAfter(!showAfter)}>
                    {/* Original Image (Base) */}
                    <img 
                      src={project.imageBefore} 
                      alt="Original" 
                      className="absolute inset-0 w-full h-full object-contain" 
                      referrerPolicy="no-referrer"
                    />
                    
                    {/* Edited Image (Overlay with Clip Path) */}
                    <motion.div
                      className="absolute inset-0 w-full h-full overflow-hidden"
                      initial={false}
                      animate={{ clipPath: showAfter ? 'inset(0 0% 0 0)' : 'inset(0 100% 0 0)' }}
                      transition={{ duration: 0.8, ease: [0.65, 0, 0.35, 1] }}
                    >
                      <img 
                        src={project.imageAfter} 
                        alt="Edited" 
                        className="absolute inset-0 w-full h-full object-contain" 
                        referrerPolicy="no-referrer"
                      />
                    </motion.div>

                    {/* Swipe Line (Gold) */}
                    <motion.div
                      className="absolute top-0 bottom-0 w-[2px] bg-gold z-10 shadow-[0_0_15px_rgba(212,175,55,0.6)]"
                      initial={false}
                      animate={{ left: showAfter ? '100%' : '0%' }}
                      transition={{ duration: 0.8, ease: [0.65, 0, 0.35, 1] }}
                    />

                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-3 bg-black/60 backdrop-blur-md text-white px-4 py-2 rounded-full border border-white/10 shadow-2xl transition-all group-hover:scale-105 z-20">
                       <RefreshCw className={`w-4 h-4 text-gold ${showAfter ? 'rotate-180' : ''} transition-transform duration-500`} />
                       <span className="text-xs font-bold uppercase tracking-[0.2em]">{t.clickToSee} {showAfter ? t.original : t.edited}</span>
                    </div>
                  </div>
                ) : project.images && project.images.length > 0 ? (
                  <div className="w-full flex flex-col gap-12 items-center">
                     {project.images.map((img, i) => (
                       <motion.div 
                          key={i}
                          initial={{ opacity: 0, y: 40 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: i * 0.1, duration: 0.8 }}
                          className="w-full"
                       >
                          <img 
                             src={img} 
                             alt={`Page ${i + 1}`} 
                             className="max-w-full mx-auto shadow-2xl rounded-sm border border-white/5" 
                             referrerPolicy="no-referrer"
                          />
                          <p className="text-center text-gray-600 text-[10px] mt-4 uppercase tracking-widest">{t.pageLabel} {(i + 1).toString().padStart(2, '0')}</p>
                       </motion.div>
                     ))}
                     <div className="py-20 text-center">
                        <p className="text-gray-500 italic font-serif">{t.endOfPresentation}</p>
                        <button 
                          onClick={onClose}
                          className="mt-8 text-gold border border-gold px-8 py-3 uppercase tracking-widest text-xs font-bold hover:bg-gold hover:text-anthracite transition-all"
                        >
                           {t.backToGallery}
                        </button>
                     </div>
                  </div>
                ) : (
                  <img src={project.thumbnail} alt={project.title} className="max-w-full max-h-[80vh] object-contain" referrerPolicy="no-referrer" />
                )}
             </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ProjectLightbox;
