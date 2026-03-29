import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../../contexts/LanguageContext';
import { TRANSLATIONS } from '../../src/translations';
import { Mail, Linkedin, Globe } from 'lucide-react';

const Contact: React.FC = () => {
  const { language } = useLanguage();
  const t = TRANSLATIONS[language].contact;

  return (
    <section id="contact" className="py-16 text-white relative overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://storage.googleapis.com/ycp_portfolio-website/Vision%20background.jpg" 
          alt="Vision Background Abstract" 
          className="w-full h-full object-cover opacity-40" 
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-anthracite via-anthracite/90 to-anthracite/95" />
      </div>

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-20 relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl font-serif mb-8 text-gold-gradient drop-shadow-[2px_1px_2px_rgba(0,0,0,0.6)]">{t.title}</h2>
          
          <div className="space-y-6">
             <div className="flex items-center gap-4 group cursor-pointer">
               <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:border-gold group-hover:bg-gold/10 transition-colors">
                 <Linkedin className="text-white group-hover:text-gold" />
               </div>
               <div>
                 <p className="text-sm text-gray-500 uppercase tracking-widest">LinkedIn</p>
                 <p className="text-lg">{t.linkedinLabel}</p>
               </div>
             </div>

             <div className="flex items-center gap-4 group cursor-pointer">
               <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:border-gold group-hover:bg-gold/10 transition-colors">
                 <Mail className="text-white group-hover:text-gold" />
               </div>
               <div>
                 <p className="text-sm text-gray-500 uppercase tracking-widest">{t.emailLabel}</p>
                 <p className="text-lg">cantave.youri.judes@gmail.com</p>
               </div>
             </div>
          </div>
        </motion.div>

        <motion.form 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-6 bg-white/5 p-8 rounded-sm border border-white/10 backdrop-blur-sm"
        >
           <div className="grid md:grid-cols-2 gap-6">
             <div className="flex flex-col gap-2">
               <label className="text-sm text-gold uppercase tracking-widest">{t.formName}</label>
               <input type="text" className="bg-transparent border-b border-white/20 py-2 focus:border-gold outline-none transition-colors" placeholder={t.formNamePlaceholder} />
             </div>
             <div className="flex flex-col gap-2">
               <label className="text-sm text-gold uppercase tracking-widest">{t.formEmail}</label>
               <input type="email" className="bg-transparent border-b border-white/20 py-2 focus:border-gold outline-none transition-colors" placeholder="email@example.com" />
             </div>
           </div>
           
           <div className="flex flex-col gap-2">
             <label className="text-sm text-gold uppercase tracking-widest">{t.formProjectType}</label>
             <select className="bg-transparent border-b border-white/20 py-2 focus:border-gold outline-none transition-colors text-white/70">
               {t.projectTypes.map((type: string, i: number) => (
                 <option key={i} className="bg-anthracite">{type}</option>
               ))}
             </select>
           </div>

           <div className="flex flex-col gap-2">
             <label className="text-sm text-gold uppercase tracking-widest">{t.formMessage}</label>
             <textarea rows={4} className="bg-transparent border-b border-white/20 py-2 focus:border-gold outline-none transition-colors" placeholder={t.formMessagePlaceholder} />
           </div>

           <button type="submit" className="w-full bg-gold text-anthracite font-bold py-4 hover:bg-white transition-colors mt-4 min-h-[44px]">
             {t.formSubmit}
           </button>
        </motion.form>
      </div>

      <div className="mt-20 border-t border-white/10 pt-8 text-center text-gray-500 text-sm relative z-10">
        <p>{t.footerThanks}</p>
        <p className="mt-2">&copy; {new Date().getFullYear()} Youri Cantave. {t.footerRights}</p>
      </div>
    </section>
  );
};

export default Contact;
