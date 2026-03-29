import React, { useState } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip } from 'recharts';
import { 
  FileSpreadsheet, 
  Cloud, 
  PenTool, 
  Image, 
  Video, 
  Cpu, 
  Sparkles,
  LayoutGrid,
  Plus,
  Award
} from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';
import { TRANSLATIONS } from '../../src/translations';
import { TECH_STACK } from '../../constants';

// Section 01: About Me (Fade Up Reveal)
export const AboutSection: React.FC = () => {
  const { language } = useLanguage();
  const t = TRANSLATIONS[language].about;

  return (
    <section id="about" className="py-20 px-6 md:px-20 bg-cloud text-anthracite relative overflow-hidden">
      {/* Massive Background Letter */}
      <motion.div 
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 0.5, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="absolute -left-20 top-20 text-[30vw] font-serif text-white leading-none select-none pointer-events-none"
      >
        
      </motion.div>

      <div className="max-w-7xl mx-auto relative z-10 grid lg:grid-cols-12 gap-16">
        <div className="lg:col-span-7">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h2 className="text-6xl md:text-8xl font-serif mb-12 text-anthracite leading-[0.9] drop-shadow-[2px_1px_2px_rgba(0,0,0,0.6)]">
              {t.title} <br/><span className="text-gold italic">{t.titleAccent}</span>
            </h2>
            <div className="space-y-8 text-xl md:text-2xl font-light leading-relaxed max-w-2xl">
              <div className="space-y-6 leading-[30px]">
                <p className="text-gold font-serif italic text-2xl md:text-3xl mb-0">{t.hello}</p>
                <p className="text-[22px] leading-[28px]">
                  {t.bio1}
                </p>
                <p className="text-[22px] leading-[28px]">
                  {t.bio2}
                </p>
              </div>
              <p className="text-gray-500 text-[22px] leading-[28px]">
                 {t.bio3}
              </p>
            </div>
          </motion.div>
        </div>
        
        <div className="lg:col-span-5 flex flex-col justify-end">
          <motion.h3 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-sm font-bold uppercase tracking-widest mb-8 border-b border-anthracite/10 pb-4"
          >
            {t.education}
          </motion.h3>
          <div className="space-y-8">
            {t.degrees.map((edu, idx) => (
              <motion.div 
                key={idx} 
                className="group"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.6 }}
              >
                <div className="flex justify-between items-baseline mb-1">
                  <h4 className="text-lg font-bold text-anthracite group-hover:text-gold transition-colors">{edu.degree}</h4>
                  <span className="text-sm font-mono text-gray-400">{edu.year}</span>
                </div>
                <p className="text-gray-500 font-sans">{edu.institution}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// Section 02: Philosophy (Blur In + Parallax)
export const VisionSection: React.FC = () => {
  const { language } = useLanguage();
  const t = TRANSLATIONS[language].vision;
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);

  return (
    <section id="vision" className="relative min-h-[70vh] flex flex-col justify-center bg-anthracite text-white py-16 px-6 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://storage.googleapis.com/ycp_portfolio-website/Vision%20background.jpg" 
          alt="Vision Background Abstract" 
          className="w-full h-full object-cover opacity-40" 
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-anthracite/90 via-anthracite/70 to-anthracite/90" />
      </div>

      <div className="max-w-6xl mx-auto w-full relative z-10">
        <div className="grid md:grid-cols-2 gap-20 items-center">
          <motion.div style={{ y }}>
             <motion.span 
               initial={{ opacity: 0 }}
               whileInView={{ opacity: 1 }}
               viewport={{ once: true }}
               transition={{ delay: 0.2 }}
               className="text-gold font-mono text-sm mb-4 block"
             >
               Vision
             </motion.span>
             <motion.h2 
               initial={{ filter: "blur(10px)", opacity: 0 }}
               whileInView={{ filter: "blur(0px) drop-shadow(2px 1px 2px rgba(0,0,0,0.6))", opacity: 1 }}
               viewport={{ once: true }}
               transition={{ duration: 1.2 }}
               className="text-[36px] font-serif italic leading-[38px] text-white/90"
             >
              "{t.text}"
            </motion.h2>
          </motion.div>

          <motion.div 
            className="md:border-l border-white/10 md:pl-20"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <span className="text-gold font-mono text-sm mb-4 block">{t.philosophy}</span>
            <p className="text-[23px] text-white/90 font-serif italic leading-[33px]">
              {t.philosophyText}
            </p>
          </motion.div>
        </div>
      </div>
      
      {/* Decorative Line */}
      <motion.div 
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
        className="absolute bottom-0 left-0 w-full h-px bg-white/5 origin-left" 
      />
    </section>
  );
};

// Section 03: Skills (Slide In Left & Right)
const CustomTick = ({ x, y, payload }: any) => {
  let Icon = LayoutGrid;
  const val = payload.value;
  
  if (val.includes('Office')) Icon = FileSpreadsheet;
  else if (val.includes('Google Workspace')) Icon = Cloud;
  else if (val.includes('Adobe')) Icon = PenTool;
  else if (val.includes('Affinity') || val.includes('Canva')) Icon = Image;
  else if (val.includes('Davinci')) Icon = Video;
  else if (val.includes('Gen AI')) Icon = Sparkles;

  return (
    <g transform={`translate(${x},${y})`}>
      <foreignObject x={-230} y={-12} width={220} height={24}>
         <div className="flex items-center justify-end gap-3 h-full pr-2">
            <span className="text-anthracite font-sans font-light text-sm truncate text-right">{val}</span>
            <Icon size={16} className="text-gold shrink-0" />
         </div>
      </foreignObject>
    </g>
  );
};

export const SkillsSection: React.FC = () => {
  const { language } = useLanguage();
  const t = TRANSLATIONS[language].skills;

  return (
    <section id="skills" className="py-20 px-6 md:px-20 bg-cloud text-anthracite overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 border-b border-anthracite/10 pb-8">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-6xl md:text-8xl font-serif text-anthracite drop-shadow-[2px_1px_2px_rgba(0,0,0,0.6)]">
              {t.title}
            </h2>
          </motion.div>
          <motion.p 
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-gray-500 text-right mt-4 md:mt-0 max-w-lg text-lg md:text-xl"
          >
            {t.description}
          </motion.p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Soft Skills - Staggered List Slide */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-widest mb-6 text-gold-dark">{t.softSkillsTitle}</h3>
            <ul className="grid grid-cols-1 gap-y-4">
              {t.softSkills.map((skill, i) => (
                <motion.li 
                  key={i} 
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05, duration: 0.5 }}
                  className="flex items-center gap-4 text-xl font-light border-b border-gray-200 pb-4"
                >
                  <span className="w-1.5 h-1.5 bg-gold rounded-full" />
                  {skill}
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Tech Stack - Fade Up Chart */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <h3 className="text-sm font-bold uppercase tracking-widest mb-6 text-gold-dark">{t.techSkillsTitle}</h3>
            <div className="h-[400px] w-full -ml-4">
               <ResponsiveContainer width="100%" height="100%">
                <BarChart 
                  layout="vertical"
                  data={TECH_STACK} 
                  margin={{ top: 0, right: 30, left: 0, bottom: 0 }}
                  barCategoryGap="20%"
                >
                  <XAxis type="number" hide domain={[0, 100]} />
                  <YAxis 
                    dataKey="name" 
                    type="category" 
                    width={230}
                    tick={(props) => <CustomTick {...props} />}
                    axisLine={false}
                    tickLine={false}
                  />
                  <Tooltip 
                    cursor={{fill: 'transparent'}}
                    contentStyle={{ backgroundColor: '#2C2C2C', border: 'none', color: '#fff', padding: '10px 20px' }}
                    itemStyle={{ color: '#D4AF37' }}
                  />
                  <Bar 
                    dataKey="level" 
                    fill="#D4AF37" 
                    barSize={2} 
                    background={{ fill: '#e5e5e5' }}
                    isAnimationActive={true}
                    animationDuration={1500}
                    animationBegin={200}
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// Section 04: Achievements (Staggered List)
export const AchievementsSection: React.FC = () => {
  const { language } = useLanguage();
  const t = TRANSLATIONS[language].achievements;

  return (
    <section id="achievements" className="py-20 px-6 md:px-20 bg-anthracite text-white overflow-hidden relative">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 border-b border-white/10 pb-8">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-6xl md:text-8xl font-serif text-white drop-shadow-[2px_1px_2px_rgba(0,0,0,0.6)]">
              {t.title}
            </h2>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 gap-8">
          {t.items.map((achievement, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="flex items-center gap-6 p-8 bg-white/5 rounded-sm border border-white/10 hover:border-gold transition-all group"
            >
              <div className="w-16 h-16 rounded-full bg-gold/10 flex items-center justify-center shrink-0 group-hover:bg-gold/20 transition-colors">
                <Award className="text-gold w-8 h-8" />
              </div>
              <p className="text-xl md:text-2xl font-light leading-tight">
                {achievement}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
      
      {/* Background Decorative Element */}
      <div className="absolute right-0 bottom-0 opacity-5 pointer-events-none">
        <Award size={400} className="text-white" />
      </div>
    </section>
  );
};

// Section 05: Objectives & Process (3D Flip / Zoom In)
export const ProcessSection: React.FC = () => {
  const { language } = useLanguage();
  const t = TRANSLATIONS[language].process;
  const steps = t.steps.map((step, i) => ({
    ...step,
    image: [
      'https://storage.googleapis.com/ycp_portfolio-website/Research%20%26%20Inspiration.png',
      'https://storage.googleapis.com/ycp_portfolio-website/Idea%20Development.png',
      'https://storage.googleapis.com/ycp_portfolio-website/Design%20%26%20Execution.png',
      'https://storage.googleapis.com/ycp_portfolio-website/Review%20%26%20Improvement.png',
      'https://storage.googleapis.com/ycp_portfolio-website/Delivery.png'
    ][i]
  }));

  const [activeStep, setActiveStep] = useState<number | null>(null);

  return (
    <section id="process" className="py-20 bg-anthracite text-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          className="mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl md:text-7xl font-serif max-w-4xl leading-none drop-shadow-[2px_1px_2px_rgba(0,0,0,0.6)]">
            {t.title} <span className="text-gold-light italic">{t.titleAccent}</span>
          </h2>
        </motion.div>

        <div className="flex flex-col md:flex-row border-t border-white/20 min-h-[300px]">
           {steps.map((step, index) => (
             <motion.div 
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                onClick={() => setActiveStep(activeStep === index ? null : index)}
                className={`
                  relative group flex flex-col justify-between p-6 md:p-8 
                  border-b md:border-b-0 md:border-r border-white/10 md:last:border-r-0 
                  transition-all duration-700 ease-[0.22, 1, 0.36, 1] cursor-pointer overflow-hidden
                  ${activeStep === index ? 'flex-[4] bg-white/5' : 'flex-1 hover:bg-white/5'}
                `}
             >
                {/* Background Image Logic with Smooth Framer Motion Transition */}
                {step.image && (
                  <div className="absolute inset-0 z-0">
                    <motion.img 
                      src={step.image} 
                      alt="" 
                      initial={false}
                      animate={{
                        filter: activeStep === index ? 'grayscale(0%)' : 'grayscale(100%)',
                        opacity: activeStep === index ? 0.3 : 0.1,
                        scale: activeStep === index ? 1.05 : 1,
                      }}
                      whileHover={activeStep !== index ? {
                        filter: 'grayscale(0%)',
                        opacity: 0.25,
                        scale: 1.02
                      } : {}}
                      transition={{ 
                        duration: 0.8, 
                        ease: [0.22, 1, 0.36, 1] 
                      }}
                      className="w-full h-full object-contain p-6" 
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-anthracite/20 mix-blend-multiply" />
                  </div>
                )}

                <div className="relative z-10 w-full">
                  <div className="flex justify-between items-start mb-6">
                     <span className={`text-4xl md:text-5xl font-serif block transition-colors duration-500 group-hover:text-gold ${activeStep === index ? 'text-gold' : 'text-gray-600'}`}>
                       {step.num}
                     </span>
                  </div>
                  
                  <div className="min-w-max">
                    <h3 className={`font-serif transition-all duration-500 origin-left group-hover:text-gold ${activeStep === index ? 'text-3xl md:text-4xl text-white scale-100' : 'text-xl text-gray-500 scale-90'}`}>
                      {step.title}
                    </h3>
                    <p className={`text-sm uppercase tracking-widest mt-2 transition-colors duration-500 group-hover:text-gold ${activeStep === index ? 'text-gold' : 'text-gray-600'}`}>
                      {step.desc}
                    </p>
                  </div>
                </div>
                
                {/* Animated Description Sliding In */}
                <div className="relative z-10 mt-auto flex items-end">
                   <AnimatePresence mode="wait">
                     {activeStep === index ? (
                       <motion.div
                          key="desc"
                          initial="hidden"
                          animate="visible"
                          exit="exit"
                          className="w-full min-h-[80px]"
                       >
                         {/* Separator Line */}
                         <motion.div 
                            variants={{
                              hidden: { width: 0, opacity: 0 },
                              visible: { width: 48, opacity: 1, transition: { duration: 0.4 } },
                              exit: { opacity: 0 }
                            }}
                            className="h-px bg-gold mb-6" 
                         />
                         
                         <div className="relative overflow-hidden max-w-md">
                            {/* Text content with clip-path reveal */}
                            <motion.p 
                              className="text-gray-300 font-light leading-relaxed text-lg"
                              variants={{
                                hidden: { opacity: 1, clipPath: 'inset(0 100% 0 0)' },
                                visible: { 
                                  opacity: 1,
                                  clipPath: 'inset(0 0% 0 0)', 
                                  transition: { duration: 0.7, ease: "easeInOut", delay: 0.1 } 
                                },
                                exit: { opacity: 0, transition: { duration: 0.2 } }
                              }}
                            >
                              {step.longDesc}
                            </motion.p>
                            
                            {/* Gold Line Swipe */}
                            <motion.div
                              className="absolute top-0 bottom-0 w-[2px] bg-gold z-20"
                              variants={{
                                hidden: { left: 0, opacity: 1 },
                                visible: { 
                                  left: "100%", 
                                  opacity: [1, 1, 0], // Fade out at the very end
                                  transition: { duration: 0.7, ease: "easeInOut", delay: 0.1 } 
                                },
                                exit: { opacity: 0 }
                              }}
                            />
                         </div>
                       </motion.div>
                     ) : (
                        <motion.div 
                          key="plus"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          className="w-full flex justify-end md:justify-start"
                        >
                           <Plus className="text-gray-700 w-6 h-6 group-hover:text-gold transition-colors" />
                        </motion.div>
                     )}
                   </AnimatePresence>
                </div>
             </motion.div>
           ))}
        </div>
      </div>
    </section>
  );
};

// Section 06: Work Experience (Staggered Slide Up)
export const ExperienceSection: React.FC = () => {
  const { language } = useLanguage();
  const t = TRANSLATIONS[language].experience;

  return (
    <section id="experience" className="py-20 px-6 md:px-20 bg-cloud">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-baseline gap-4 mb-16">
          <motion.h2 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-6xl md:text-8xl font-serif text-anthracite drop-shadow-[2px_1px_2px_rgba(0,0,0,0.6)]"
          >
            {t.title}
          </motion.h2>
          <motion.span 
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3 }}
            className="h-px bg-anthracite flex-grow max-w-xs ml-8 hidden md:block origin-left" 
          />
        </div>
        
        <div className="flex flex-col">
          {t.items.map((job, idx) => {
            return (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.15, duration: 0.6 }}
                className="group py-12 border-b border-gray-300 hover:border-gold transition-colors duration-500 flex flex-col md:flex-row md:items-baseline justify-between gap-4 cursor-default"
              >
                {/* Column 1: Period */}
                <div className="md:w-1/3">
                  <p className="text-sm font-bold uppercase tracking-widest text-gray-400 group-hover:text-gold transition-colors">
                    {job.period}
                  </p>
                </div>

                {/* Column 2: Role */}
                <div className="md:w-1/3">
                  <h3 className="text-2xl font-serif text-anthracite group-hover:translate-x-4 transition-transform duration-500">
                    {job.role}
                  </h3>
                </div>

                {/* Column 3: Company & Location */}
                <div className="md:w-1/3 text-right">
                  <p className="text-xl font-light italic text-gray-600 group-hover:text-anthracite transition-colors duration-500">
                    {job.company}
                  </p>
                  <p className="text-xs text-gray-400 mt-1 uppercase tracking-wider">{job.location}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
