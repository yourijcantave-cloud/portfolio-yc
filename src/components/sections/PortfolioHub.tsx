import React from 'react';
import { motion, Variants } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';
import { TRANSLATIONS } from '../../src/translations';

interface CategoryItem {
  id: string;
  title: string;
  img: string;
}

const containerVariants: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

const cardVariants: Variants = {
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

const PortfolioItem: React.FC<{ item: CategoryItem }> = ({ item }) => {
  return (
    <motion.div
      id={`hub-${item.id}`}
      variants={cardVariants}
      initial="hidden"
      whileInView="show"
      whileHover="hover"
      viewport={{ once: true, margin: "-50px" }}
      className="group relative w-full aspect-video bg-black rounded-sm border border-transparent hover:border-gold transition-colors duration-500 overflow-hidden cursor-pointer"
    >
      <Link 
        to={`/gallery/${item.id}?from=hub`}
        className="block w-full h-full"
      >
        {/* Background Media */}
        <div className="absolute inset-0">
          <img 
            src={item.img} 
            alt={item.title} 
            loading="lazy"
            className="w-full h-full object-cover transition-all duration-700 opacity-60 grayscale group-hover:opacity-100 group-hover:grayscale-0 group-hover:brightness-110 group-hover:contrast-110 group-hover:saturate-125" 
          />
          <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500" />
        </div>

        {/* Content Overlay */}
        <div className="absolute inset-0 p-8 md:p-10 flex flex-col justify-between pointer-events-none">
          <div className="flex justify-end">
             <ArrowUpRight className="text-white w-8 h-8 md:w-10 md:h-10 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500" />
          </div>
          
          <div className="transform translate-y-2 md:translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
            <h3 className="text-2xl md:text-4xl font-serif text-white drop-shadow-lg">{item.title}</h3>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

const SectionHeader: React.FC<{ title: string; icon?: string }> = ({ title, icon }) => (
  <div className="mb-12 flex flex-col md:flex-row justify-between items-end border-b border-white/10 pb-6">
    <motion.h2 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="text-4xl md:text-7xl font-serif text-white leading-none drop-shadow-md"
    >
      {title} {icon && <span className="text-gold italic">{icon}</span>}
    </motion.h2>
  </div>
);

const PortfolioHub: React.FC = () => {
  const { language } = useLanguage();
  const t = TRANSLATIONS[language].portfolio;

  const getImg = (id: string) => {
    switch(id) {
      case 'photo-editing': return 'https://storage.googleapis.com/ycp_portfolio-website/Photo%20Edits.png';
      case 'video-editing': return 'https://storage.googleapis.com/ycp_portfolio-website/Video%20Edits%201.png';
      case 'branding': return 'https://storage.googleapis.com/ycp_portfolio-website/Branding.png';
      case 'illustrative': return 'https://storage.googleapis.com/ycp_portfolio-website/Illustrations.png';
      case 'photography': return 'https://storage.googleapis.com/ycp_portfolio-website/Photography.png';
      case 'podcasts': return 'https://storage.googleapis.com/ycp_portfolio-website/Podcast.png';
      default: return '';
    }
  };

  const mainCategories = t.mainCategories.map(cat => ({ ...cat, img: getImg(cat.id) }));
  const whatsNewCategories = t.whatsNewCategories.map(cat => ({ ...cat, img: getImg(cat.id) }));

  return (
    <section id="portfolio" className="py-16 md:py-20 px-6 md:px-20 bg-anthracite min-h-screen">
      <div className="max-w-[1920px] mx-auto flex flex-col gap-16 md:gap-24">
        
        {/* Main Section */}
        <div className="w-full">
          <SectionHeader title={t.title} icon={t.works} />
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12 md:gap-x-10 md:gap-y-16 items-start"
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            {mainCategories.map((cat) => (
              <PortfolioItem key={cat.id} item={cat as any} />
            ))}
          </motion.div>
        </div>

        {/* What's New Section */}
        <div className="w-full">
          <SectionHeader title={t.whatsNew} icon={t.new} />
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12 md:gap-x-10 md:gap-y-16 items-start"
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            {whatsNewCategories.map((cat) => (
              <PortfolioItem key={cat.id} item={cat as any} />
            ))}
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default PortfolioHub;
