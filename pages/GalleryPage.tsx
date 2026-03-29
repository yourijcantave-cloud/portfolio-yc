import React, { useState, useEffect } from 'react';
import { useParams, Link, useSearchParams } from 'react-router-dom';
import { PROJECTS } from '../constants';
import { GalleryType, Project } from '../types';
import { ArrowLeft, X, Maximize2, Play, ExternalLink, RefreshCw, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';
import { TRANSLATIONS } from '../src/translations';

import ProjectLightbox from '../components/ProjectLightbox';

const GalleryPage: React.FC = () => {
  const { language } = useLanguage();
  const t = TRANSLATIONS[language].gallery;
  const { category } = useParams<{ category: string }>();
  const [searchParams] = useSearchParams();
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const from = searchParams.get('from');
  const backLink = from === 'hub' ? `/home#hub-${category}` : from === 'featured' ? `/home#featured-${category}` : '/home#portfolio';

  // Scroll to top on mount or category change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [category]);

  // Updated logic to use translated category titles
  const getCategoryTitle = () => {
    switch (category) {
      case GalleryType.PHOTO_EDITING: return t.categoryTitles.photoEditing;
      case GalleryType.VIDEO_EDITING: return t.categoryTitles.videoEditing;
      case GalleryType.BRANDING: return t.categoryTitles.branding;
      case GalleryType.ILLUSTRATIVE: return t.categoryTitles.illustration;
      case GalleryType.PHOTOGRAPHY: return t.categoryTitles.photography;
      case GalleryType.PODCASTS: return t.categoryTitles.podcasts;
      default: return category ? category.replace('-', ' ').toUpperCase() : 'GALLERY';
    }
  };

  const categoryTitle = getCategoryTitle();
    
  const projects = PROJECTS.filter(p => p.category === category);

  const currentIndex = selectedProject ? projects.findIndex(p => p.id === selectedProject.id) : -1;

  const handleNext = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (currentIndex < projects.length - 1) {
      setSelectedProject(projects[currentIndex + 1]);
    } else {
      setSelectedProject(projects[0]);
    }
  };

  const handlePrev = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (currentIndex > 0) {
      setSelectedProject(projects[currentIndex - 1]);
    } else {
      setSelectedProject(projects[projects.length - 1]);
    }
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!selectedProject) return;
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'Escape') setSelectedProject(null);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedProject, currentIndex]);

  const isPhotoEditing = category === GalleryType.PHOTO_EDITING;
  const isBranding = category === GalleryType.BRANDING;
  // Included Video Editing in Editorial layout to match Podcast style (Title/Subtitle next to thumb)
  const isEditorial = category === GalleryType.PODCASTS || category === GalleryType.VIDEO_EDITING;

  const handleVideoHover = (e: React.MouseEvent<HTMLElement>, play: boolean) => {
    const video = e.currentTarget.querySelector('video');
    if (video) {
      if (play) {
        video.play().catch(() => {});
      } else {
        video.pause();
      }
    }
  };

  // Hub-style variants to match PortfolioHub.tsx
  const hubThumbnailVariants: Variants = {
    hidden: { 
      opacity: 0, 
      y: 30, 
      scale: 0.98,
      boxShadow: "0px 0px 0px rgba(0,0,0,0)"
    },
    show: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      boxShadow: "6px 6px 0px rgba(0,0,0,0.4)",
      transition: { 
        duration: 0.8, 
        ease: [0.22, 1, 0.36, 1] 
      }
    },
    hover: {
      y: -8,
      boxShadow: "6px 14px 0px rgba(0,0,0,0.4)",
      transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] }
    }
  };

  const renderSectionHeader = (title: string) => (
    <div className="mb-10 border-l-4 border-gold pl-6">
      <h2 className="text-4xl md:text-5xl font-serif text-anthracite mb-4">{title}</h2>
    </div>
  );

  const renderProjectGrid = (subProjects: Project[], sectionType?: string) => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
       {subProjects.map((project) => (
         <motion.div
           key={project.id}
           onClick={() => sectionType !== 'Brand Logos' && setSelectedProject(project)}
           onMouseEnter={(e) => sectionType !== 'Brand Logos' && handleVideoHover(e, true)}
           onMouseLeave={(e) => sectionType !== 'Brand Logos' && handleVideoHover(e, false)}
           className={`group rounded-sm overflow-hidden relative shadow-md bg-white ${
             sectionType === 'Brand Logos' ? 'cursor-default' : 'cursor-pointer'
           } ${
             project.gridSpan === 3 
              ? 'md:col-span-2 lg:col-span-3 aspect-[16/9] md:aspect-[21/9] lg:aspect-[3/1]' 
              : 'aspect-square'
           }`}
           whileHover={sectionType !== 'Brand Logos' ? { y: -5 } : {}}
         >
           {project.videoUrl && !project.videoUrl.includes('youtube.com/embed') ? (
              <video 
                src={project.videoUrl}
                loop
                muted
                playsInline
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
           ) : (
              <img src={project.thumbnail} alt={project.title} className={`w-full h-full object-cover transition-transform duration-500 ${sectionType !== 'Brand Logos' ? 'group-hover:scale-105' : ''} ${sectionType === 'Brand Logos' ? 'p-12' : ''}`} loading="lazy" />
           )}
           
           {sectionType !== 'Brand Logos' && (
             <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                {project.videoUrl ? <Play className="text-white w-12 h-12 fill-current" /> : <Maximize2 className="text-white w-8 h-8" />}
             </div>
           )}

           {/* Overlay Info for Grid */}
           {!isPhotoEditing && (
             <div className={`absolute bottom-0 left-0 right-0 p-4 bg-white/95 transition-transform duration-300 border-t border-gold/10 ${sectionType === 'Brand Logos' ? 'translate-y-0' : 'translate-y-full group-hover:translate-y-0'}`}>
                <h3 className="font-bold font-serif text-sm md:text-base text-anthracite leading-tight">
                   {project.title} {project.subtitle && <span className="text-xs opacity-70">{project.subtitle}</span>}
                 </h3>
             </div>
           )}
         </motion.div>
       ))}
    </div>
  );

  const renderEditorialList = (subProjects: Project[]) => (
    <div className="space-y-32">
       {subProjects.map((project, idx) => (
           <motion.div 
             key={project.id}
             initial={{ opacity: 0, y: 30 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.8, delay: (idx % 6) * 0.1 }}
             className="grid md:grid-cols-12 gap-12 items-center group"
           >
             {/* Text Content - Always First (Left on Desktop) */}
             <div className="md:col-span-7">
               <span className="text-gold font-mono text-xs mb-3 block tracking-widest uppercase">{t.projectLabel} {(idx + 1).toString().padStart(2, '0')}</span>
               <div className="mb-6">
                 <h2 className="text-4xl md:text-5xl font-serif text-anthracite group-hover:text-gold transition-colors">
                    {project.title} {project.subtitle && <span className="text-2xl opacity-70 font-light">{project.subtitle}</span>}
                  </h2>
               </div>
               <div className="h-px bg-anthracite/10 w-20 mb-6" />
               <p className="text-xl text-gray-600 font-light leading-relaxed mb-8">
                 {project.description || t.defaultDescription}
               </p>
               {category === GalleryType.PODCASTS ? (
                 <div className="flex items-center gap-2">
                   <span className="text-sm font-bold uppercase tracking-[0.2em] text-gold/60 italic">
                     {t.comingSoon}
                   </span>
                 </div>
               ) : (
                 <button 
                   onClick={() => setSelectedProject(project)}
                   className="flex items-center gap-2 text-sm font-bold uppercase tracking-[0.2em] text-anthracite hover:text-gold transition-colors group/btn"
                 >
                   {t.viewProject} <ExternalLink size={14} className="group-hover/btn:translate-x-1 transition-transform" />
                 </button>
               )}
             </div>

             {/* Thumbnails - Always Second (Right on Desktop) */}
             <div className="md:col-span-5">
               {project.items ? (
                 <div className="grid grid-cols-1 gap-6">
                   {project.items.map((item, i) => (
                     <motion.div 
                       key={i}
                       variants={hubThumbnailVariants}
                       initial="show"
                       whileHover="hover"
                       onClick={() => setSelectedProject({ ...project, title: item.title, thumbnail: item.thumbnail, videoUrl: item.videoUrl })}
                       onMouseEnter={(e) => handleVideoHover(e, true)}
                       onMouseLeave={(e) => handleVideoHover(e, false)}
                       className="relative aspect-video overflow-hidden rounded-sm bg-black border border-transparent hover:border-gold transition-colors duration-500 cursor-pointer"
                     >
                       <img 
                         src={item.thumbnail} 
                         alt={item.title} 
                         className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
                         loading="lazy"
                       />
                       <div className="absolute inset-0 bg-gold/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                          <Play className="text-white w-12 h-12 fill-current" />
                       </div>
                       <div className="absolute bottom-0 left-0 right-0 p-3 bg-black/60 backdrop-blur-sm">
                         <p className="text-white text-[10px] font-mono uppercase tracking-widest">{item.title}</p>
                       </div>
                     </motion.div>
                   ))}
                 </div>
               ) : (
                 <motion.div 
                   variants={hubThumbnailVariants}
                   initial="show"
                   whileHover="hover"
                   onClick={() => category !== GalleryType.PODCASTS && setSelectedProject(project)}
                   onMouseEnter={(e) => handleVideoHover(e, true)}
                   onMouseLeave={(e) => handleVideoHover(e, false)}
                   className={`relative aspect-video overflow-hidden rounded-sm bg-black border border-transparent hover:border-gold transition-colors duration-500 ${category === GalleryType.PODCASTS ? 'cursor-default' : 'cursor-pointer'}`}
                 >
                   {(project.videoUrl && !project.videoUrl.includes('youtube.com/embed') && category !== GalleryType.VIDEO_EDITING) ? (
                     <video 
                       src={project.videoUrl}
                       loop
                       muted
                       playsInline
                       className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
                     />
                   ) : (
                     <img 
                       src={project.thumbnail} 
                       alt={project.title} 
                       className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
                       loading="lazy"
                     />
                   )}
                   <div className="absolute inset-0 bg-gold/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      {category !== GalleryType.PODCASTS && (
                        project.videoUrl ? <Play className="text-white w-12 h-12 fill-current" /> : <Maximize2 className="text-white w-10 h-10" />
                      )}
                   </div>
                 </motion.div>
               )}
             </div>
           </motion.div>
         ))}
    </div>
  );

  return (
    <div className="min-h-screen bg-cloud text-anthracite">
      {/* Header - Compact & Sticky */}
      <div className="bg-anthracite text-white py-4 px-6 md:px-12 sticky top-0 z-30 shadow-xl border-b border-white/10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-end justify-between gap-4">
           <div>
             <Link to={backLink} className="inline-flex items-center gap-2 text-gold hover:text-white mb-2 text-xs md:text-sm uppercase tracking-widest transition-colors min-h-[44px] min-w-[44px]">
               <ArrowLeft size={16} /> {t.backToPortfolio}
             </Link>
             <h1 className="text-2xl md:text-4xl font-serif leading-none">{categoryTitle}</h1>
           </div>
        </div>
      </div>

      {/* Grid Content */}
      <div className="max-w-7xl mx-auto px-6 py-8 md:py-12">
        {projects.length === 0 || category === GalleryType.PHOTOGRAPHY ? (
          <div className="text-center py-20 text-gray-500">
            <p className="text-xl">{t.galleryComingSoon}</p>
          </div>
        ) : isPhotoEditing ? (
          <div className="flex flex-col">
            <div className="mb-24 last:mb-0">
              {renderSectionHeader(t.sections.retouching.title)}
              {renderProjectGrid(projects.filter(p => p.subCategory === 'Retouches'))}
            </div>
            <div className="h-px bg-anthracite/10 w-full my-16" />
            <div className="mb-24 last:mb-0">
              {renderSectionHeader(t.sections.colorGrading.title)}
              {renderProjectGrid(projects.filter(p => p.subCategory === 'Color Adjustments'))}
            </div>
          </div>
        ) : isBranding ? (
          <div className="flex flex-col">
            <div className="mb-40 last:mb-0">
              {renderSectionHeader(t.sections.brandGuides.title)}
              {renderEditorialList(projects.filter(p => p.subCategory === 'Brand Guides'))}
            </div>
            <div className="h-px bg-anthracite/10 w-full my-32" />
            <div className="mb-24 last:mb-0">
              {renderSectionHeader(t.sections.brandLogos.title)}
              {renderProjectGrid(projects.filter(p => p.subCategory === 'Brand Logos'), 'Brand Logos')}
            </div>
          </div>
        ) : category === GalleryType.VIDEO_EDITING ? (
          <div className="flex flex-col gap-24">
            {renderEditorialList(projects)}
          </div>
        ) : isEditorial ? (
          renderEditorialList(projects)
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
             {projects.map((project) => (
               <motion.div
                 key={project.id}
                 layoutId={project.id}
                 onClick={() => setSelectedProject(project)}
                 onMouseEnter={(e) => handleVideoHover(e, true)}
                 onMouseLeave={(e) => handleVideoHover(e, false)}
                 className="group rounded-sm overflow-hidden aspect-square relative shadow-md bg-white cursor-pointer"
                 whileHover={{ y: -5 }}
               >
                 {(project.videoUrl && !project.videoUrl.includes('youtube.com/embed') && category !== GalleryType.VIDEO_EDITING) ? (
                    <video 
                      src={project.videoUrl}
                      loop
                      muted
                      playsInline
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                 ) : (
                    <img src={project.thumbnail} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" />
                 )}
                 <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    {project.videoUrl ? <Play className="text-white w-12 h-12 fill-current" /> : <Maximize2 className="text-white w-8 h-8" />}
                 </div>
                 <div className="absolute bottom-0 left-0 right-0 p-4 bg-white/95 translate-y-full group-hover:translate-y-0 transition-transform duration-300 border-t border-gold/10">
                    <h3 className="font-bold font-serif text-sm md:text-base text-anthracite leading-tight">
                   {project.title} {project.subtitle && <span className="text-xs opacity-70">{project.subtitle}</span>}
                 </h3>
                 </div>
               </motion.div>
             ))}
          </div>
        )}
      </div>

      {/* Lightbox / Project "Page" */}
      <ProjectLightbox 
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onNext={handleNext}
        onPrev={handlePrev}
        hasNavigation={projects.length > 1}
      />
    </div>
  );
};

export default GalleryPage;