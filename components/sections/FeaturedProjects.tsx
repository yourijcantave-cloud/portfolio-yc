import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { PROJECTS } from '../../constants';
import { GalleryType, Project } from '../../types';
import { useLanguage } from '../../contexts/LanguageContext';
import { TRANSLATIONS } from '../../src/translations';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import ProjectLightbox from '../ProjectLightbox';

const FeaturedProjects: React.FC = () => {
  const { language } = useLanguage();
  const t = TRANSLATIONS[language].portfolio;
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // Filter projects for each subsection
  const photoEdits = [
    ...PROJECTS.filter(p => p.category === GalleryType.PHOTO_EDITING && p.subCategory === 'Retouches').slice(0, 6),
    PROJECTS.find(p => p.id === 'pe-c-1')!,
    PROJECTS.find(p => p.id === 'pe-c-2')!,
    PROJECTS.find(p => p.id === 'pe-c-5')!,
    PROJECTS.find(p => p.id === 'pe-c-19')!,
    PROJECTS.find(p => p.id === 'pe-c-22')!,
    PROJECTS.find(p => p.id === 'pe-c-30')!,
    ...PROJECTS.filter(p => p.category === GalleryType.PHOTO_EDITING && p.subCategory === 'Retouches').slice(11, 15),
  ];

  const ve1 = PROJECTS.find(p => p.id === 've-1')!;
  const ve2 = PROJECTS.find(p => p.id === 've-2')!;
  const ve3 = PROJECTS.find(p => p.id === 've-3')!;

  const videoEdits = [
    ve2,
    ve3,
    { 
      ...ve1, 
      id: 've-1-1', 
      title: 'B.O.D.B. Amber Rose Event Promo Reels 01', 
      description: 'A collection of high-energy event promo reels captured during the B.O.D.B. Amber Rose event, showcasing dynamic editing and vibrant atmosphere.',
      thumbnail: ve1.items![0].thumbnail, 
      videoUrl: ve1.items![0].videoUrl, 
      items: undefined 
    },
    { 
      ...ve1, 
      id: 've-1-2', 
      title: 'B.O.D.B. Amber Rose Event Promo Reels 02', 
      description: '',
      thumbnail: ve1.items![1].thumbnail, 
      videoUrl: ve1.items![1].videoUrl, 
      items: undefined 
    },
  ];
  const branding = [
    PROJECTS.find(p => p.id === 'bd-g-2')!,
    PROJECTS.find(p => p.id === 'bd-g-4')!,
    PROJECTS.find(p => p.id === 'bd-g-7')!,
    PROJECTS.find(p => p.id === 'bd-g-5')!,
  ];
  const illustrations = [
    PROJECTS.find(p => p.id === 'il-6')!,
    PROJECTS.find(p => p.id === 'il-4')!,
    PROJECTS.find(p => p.id === 'il-2')!,
    PROJECTS.find(p => p.id === 'il-3')!,
  ];

  const subsections = [
    { 
      title: t.categories.photoEditing, 
      projects: photoEdits, 
      categoryId: 'photo-editing',
      layout: 'grid'
    },
    { 
      title: t.categories.videoEditing, 
      projects: videoEdits, 
      categoryId: 'video-editing',
      layout: 'featured-grid',
      aspectRatio: 'aspect-video',
      description: t.featuredDescriptions.videoEditing
    },
    { 
      title: t.categories.branding, 
      projects: branding, 
      categoryId: 'branding',
      layout: 'featured-grid',
      aspectRatio: 'aspect-[4/3]',
      description: t.featuredDescriptions.branding
    },
    { 
      title: t.categories.illustration, 
      projects: illustrations, 
      categoryId: 'illustrative',
      layout: 'featured-grid',
      aspectRatio: 'aspect-[4/3]'
    },
  ];

  const handleNext = () => {
    if (!selectedProject) return;
    
    // Find which subsection the project belongs to
    const currentSub = subsections.find(sub => sub.projects.some(p => p.id === selectedProject.id));
    if (!currentSub) return;

    const currentIndex = currentSub.projects.findIndex(p => p.id === selectedProject.id);
    const nextIndex = (currentIndex + 1) % currentSub.projects.length;
    setSelectedProject(currentSub.projects[nextIndex]);
  };

  const handlePrev = () => {
    if (!selectedProject) return;
    
    const currentSub = subsections.find(sub => sub.projects.some(p => p.id === selectedProject.id));
    if (!currentSub) return;

    const currentIndex = currentSub.projects.findIndex(p => p.id === selectedProject.id);
    const prevIndex = (currentIndex - 1 + currentSub.projects.length) % currentSub.projects.length;
    setSelectedProject(currentSub.projects[prevIndex]);
  };

  return (
    <section id="featured-projects" className="py-20 px-6 md:px-20 bg-white text-anthracite">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 border-b border-anthracite/10 pb-8">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-7xl font-serif mb-4"
          >
            {t.featuredTitle} <span className="text-gold italic">{t.featuredWorks}</span>
          </motion.h2>
        </div>

        <div className="space-y-24">
          {subsections.map((sub, idx) => (
            <div key={idx} id={`featured-${sub.categoryId}`} className="space-y-8">
              <div className="flex justify-between items-end">
                <h3 className="text-2xl md:text-3xl font-serif border-l-4 border-gold pl-4">
                  {sub.title}
                </h3>
                <Link 
                  to={`/gallery/${sub.categoryId}?from=featured`}
                  className="group flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-gold hover:text-anthracite transition-colors"
                >
                  View All <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>

              {sub.layout === 'grid' ? (
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
                  {sub.projects.map((project, pIdx) => (
                    <motion.div
                      key={project.id}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: pIdx * 0.05 }}
                      onClick={() => setSelectedProject(project)}
                      className="group relative aspect-square bg-gray-100 overflow-hidden rounded-sm cursor-pointer"
                    >
                      <img 
                        src={project.thumbnail} 
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        referrerPolicy="no-referrer"
                      />
                    </motion.div>
                  ))}
                </div>
              ) : sub.layout === 'featured-grid' ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                  {sub.projects.map((project, pIdx) => (
                    <motion.div
                      key={project.id}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      onClick={() => setSelectedProject(project)}
                      className="group flex flex-col gap-6 cursor-pointer"
                    >
                      <div className={`relative w-full ${sub.aspectRatio || 'aspect-video'} bg-gray-100 overflow-hidden rounded-sm`}>
                        <img 
                          src={project.thumbnail} 
                          alt={project.title}
                          className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                          referrerPolicy="no-referrer"
                        />
                        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
                      </div>
                      <div>
                        <h4 className="text-xl font-serif mb-2 text-anthracite group-hover:text-gold transition-colors">
                          {project.title} {project.subtitle && <span className="text-sm opacity-70">{project.subtitle}</span>}
                        </h4>
                        {project.description !== '' && (
                          <p 
                            className="text-gray-600 text-base leading-relaxed font-light line-clamp-2"
                            style={project.id === 've-1-1' ? { width: '885px', maxWidth: 'none' } : undefined}
                          >
                            {project.description || sub.description}
                          </p>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </div>
              ) : (
                <div className="flex flex-col gap-12">
                  {sub.projects.map((project, pIdx) => (
                    <motion.div
                      key={project.id}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      onClick={() => setSelectedProject(project)}
                      className="group flex flex-col gap-6 cursor-pointer border-b border-gold/20 pb-12 last:border-0 last:pb-0"
                    >
                      <div className={`relative w-full ${sub.aspectRatio || 'aspect-[21/9]'} bg-gray-100 overflow-hidden rounded-sm`}>
                        <img 
                          src={project.thumbnail} 
                          alt={project.title}
                          className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                          referrerPolicy="no-referrer"
                        />
                        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
                      </div>
                      <div className="max-w-3xl">
                        <h4 className="text-xl font-serif mb-2 text-anthracite group-hover:text-gold transition-colors">
                          {project.title} {project.subtitle && <span className="text-sm opacity-70">{project.subtitle}</span>}
                        </h4>
                        <p className="text-gray-600 text-lg leading-relaxed font-light">
                          {project.description || sub.description}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      <ProjectLightbox 
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onNext={handleNext}
        onPrev={handlePrev}
        hasNavigation={selectedProject?.category === GalleryType.PHOTO_EDITING}
      />
    </section>
  );
};

export default FeaturedProjects;
