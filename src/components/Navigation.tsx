import React, { useState } from 'react';
import { Menu, X, Home, Briefcase, User, Mail, FolderOpen, Star } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { TRANSLATIONS } from '../src/translations';

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { language, toggleLanguage } = useLanguage();
  const t = TRANSLATIONS[language].nav;

  const isHome = location.pathname === '/home' || location.pathname === '/';

  const navItems = [
    { icon: Home, label: t.home, href: '/home#overview' },
    { icon: User, label: t.about, href: '/home#about' },
    { icon: Briefcase, label: t.experience, href: '/home#experience' },
    { icon: Star, label: "Featured", href: '/home#featured-projects' },
    { icon: FolderOpen, label: t.portfolio, href: '/home#portfolio' },
    { icon: Mail, label: t.contact, href: '/home#contact' },
  ];

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    if (href.startsWith('/home#')) {
      const id = href.split('#')[1];
      if (location.pathname === '/home') {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
          window.history.pushState(null, '', href);
        }
      } else {
        navigate(href);
      }
    } else {
      navigate(href);
    }
  };

  const LogoIcon = () => (
    <div className="w-full h-full relative flex items-center justify-center">
        <img 
            src="https://storage.googleapis.com/ycp_portfolio-website/New%20YC%204%20Points%20Gold%20Logo.svg" 
            alt="YC Logo" 
            className="w-full h-full object-contain"
            loading="lazy"
        />
    </div>
  );

  return (
    <>
      {/* Desktop Sidebar */}
      <div className="hidden md:flex flex-col fixed left-0 top-0 h-full w-20 bg-anthracite/90 backdrop-blur-sm border-r border-white/5 z-40 items-center py-8 justify-between">
        {/* Maximized logo size to fit w-20 (80px) sidebar with minimal padding */}
        <Link to="/home" className="w-[72px] h-[72px] flex items-center justify-center hover:scale-105 transition-transform p-0.5 min-w-[44px] min-h-[44px]">
           <LogoIcon />
        </Link>

        <div className="flex flex-col gap-6 items-center">
          {navItems.map((item) => (
            <Link
              key={item.label}
              to={item.href}
              onClick={(e) => {
                if (item.href.includes('#')) {
                  e.preventDefault();
                  handleNavClick(item.href);
                }
              }}
              className="relative group p-3 min-w-[44px] min-h-[44px] flex items-center justify-center"
              title={item.label}
            >
              {/* Gold icons */}
              <item.icon className="w-6 h-6 text-[#D4AF37] group-hover:text-white transition-colors" />
              <span className="absolute left-12 ml-4 px-2 py-1 bg-[#D4AF37] text-anthracite text-xs font-bold rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                {item.label}
              </span>
            </Link>
          ))}
        </div>

        {/* Language Toggle (Moved to bottom, replacing gold line) */}
        <button 
          onClick={toggleLanguage}
          className="w-10 h-10 flex items-center justify-center border border-gold/20 rounded hover:border-gold/50 text-gold font-sans font-bold text-xs tracking-widest hover:text-white transition-colors"
          title={t.toggleLanguage}
        >
          {language}
        </button>
      </div>

      {/* Mobile Header */}
      <div className="md:hidden fixed top-0 w-full bg-anthracite/95 backdrop-blur-md z-40 px-4 py-3 flex justify-between items-center border-b border-white/5">
        <Link to="/home" className="h-12 w-12 min-w-[44px] min-h-[44px] flex items-center justify-center">
           <LogoIcon />
        </Link>
        
        <div className="flex items-center gap-2">
            <button 
                onClick={toggleLanguage}
                className="text-gold font-sans font-bold text-xs tracking-widest px-3 py-2 border border-gold/20 rounded min-h-[44px] flex items-center"
            >
                {language} / {language === 'EN' ? 'FR' : 'EN'}
            </button>
            <button onClick={() => setIsOpen(true)} className="text-white p-2 min-w-[44px] min-h-[44px] flex items-center justify-center">
              <Menu className="w-6 h-6" />
            </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            className="fixed inset-0 z-50 bg-anthracite flex flex-col items-center justify-center gap-8 md:hidden"
          >
            <button onClick={() => setIsOpen(false)} className="absolute top-6 right-6 text-[#D4AF37] min-w-[44px] min-h-[44px] flex items-center justify-center">
              <X className="w-8 h-8" />
            </button>
            {navItems.map((item) => (
              <Link
                key={item.label}
                to={item.href}
                onClick={(e) => {
                  setIsOpen(false);
                  if (item.href.includes('#')) {
                    e.preventDefault();
                    handleNavClick(item.href);
                  }
                }}
                className="text-2xl font-serif text-white hover:text-[#D4AF37] transition-colors p-4"
              >
                {item.label}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navigation;
