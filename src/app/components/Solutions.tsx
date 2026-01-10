import React from "react";
import { Rocket, Globe, MapPin, Star, MessageSquare, Check, ArrowRight, Zap, FileText, Sparkles, Building2 } from "lucide-react";
import { useTranslation } from "../lib/TranslationContext";
import { motion } from "motion/react";

export function Solutions() {
  const { t } = useTranslation();
  
  const solutions = [
    {
      icon: Rocket,
      title: t.solution1Title,
      desc: t.solution1Desc,
      color: "blue",
      span: "col-span-2 md:col-span-3 lg:col-span-3"
    },
    {
      icon: MapPin,
      title: t.solution2Title,
      desc: t.solution2Desc,
      color: "emerald",
      span: "col-span-1 md:col-span-3 lg:col-span-3"
    },
    {
      icon: Globe,
      title: t.solution3Title,
      desc: t.solution3Desc,
      color: "violet",
      span: "col-span-1 md:col-span-3 lg:col-span-2"
    },
    {
      icon: Star,
      title: t.solution4Title,
      desc: t.solution4Desc,
      color: "amber",
      span: "col-span-1 md:col-span-3 lg:col-span-2"
    },
    {
      icon: MessageSquare,
      title: t.solution5Title,
      desc: t.solution5Desc,
      color: "indigo",
      span: "col-span-1 md:col-span-3 lg:col-span-2"
    }
  ];

  const steps = [
    { number: "01", title: t.step1Title, titleEn: t.step1TitleEn, icon: MessageSquare },
    { number: "02", title: t.step2Title, titleEn: t.step2TitleEn, icon: FileText },
    { number: "03", title: t.step3Title, titleEn: t.step3TitleEn, icon: Star },
    { number: "04", title: t.step4Title, titleEn: t.step4TitleEn, icon: Rocket },
  ];

  const differentiators = [
    { title: t.diffFastTitle, desc: t.diffFastDesc },
    { title: t.diffCasualTitle, desc: t.diffCasualDesc },
    { title: t.diffMapsTitle, desc: t.diffMapsDesc },
    { title: t.diffMultiTitle, desc: t.diffMultiDesc },
  ];

  return (
    <section id="solutions" className="py-16 md:py-24 bg-gray-900 relative overflow-hidden">
      {/* Subtle grid pattern for texture */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]" style={{ backgroundImage: "radial-gradient(#ffffff 1px, transparent 1px)", backgroundSize: "32px 32px" }}></div>
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-16">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-[10px] font-black uppercase tracking-[0.2em] mb-4 md:mb-6 border border-blue-500/20"
          >
            <Rocket size={12} />
            {t.solutionsBadge}
          </motion.div>
          <h2 className="text-3xl md:text-6xl font-black text-white mb-4 md:mb-6 leading-[1.1] tracking-tighter">
            {t.solutionsTitle}
            <span className="text-blue-500">{t.solutionsTitleHighlight}</span>{t.solutionsTitle2}
          </h2>
          <p className="text-sm md:text-lg text-gray-400 font-bold leading-relaxed max-w-2xl mx-auto">
            {t.solutionsDesc} {t.solutionsDesc2}
          </p>
        </div>

        {/* Bento Grid - Redesigned for Mobile horizontal scroll */}
        <div className="relative -mx-4 px-4 sm:mx-0 sm:px-0">
          <div className="flex md:grid md:grid-cols-6 overflow-x-auto md:overflow-visible pb-8 md:pb-0 gap-4 md:gap-6 no-scrollbar snap-x snap-mandatory items-stretch">
            {solutions.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className={`${item.span} min-w-[280px] md:min-w-0 snap-center group relative p-6 md:p-10 rounded-[2rem] md:rounded-[2.5rem] bg-gray-800/40 border border-gray-700/50 hover:border-blue-500/50 transition-all duration-500 overflow-hidden backdrop-blur-sm flex flex-col`}
                >
                  <div className="relative z-10 flex flex-col items-start h-full">
                    <div className={`w-12 h-12 md:w-16 md:h-16 rounded-2xl flex items-center justify-center mb-6 shadow-xl transition-all duration-500 group-hover:scale-110 group-hover:rotate-3 ${
                      item.color === 'blue' ? 'bg-blue-600 text-white' :
                      item.color === 'emerald' ? 'bg-emerald-500 text-white' :
                      item.color === 'violet' ? 'bg-violet-500 text-white' :
                      item.color === 'amber' ? 'bg-amber-500 text-white' :
                      item.color === 'indigo' ? 'bg-indigo-500 text-white' :
                      'bg-rose-500 text-white'
                    }`}>
                      <Icon size={24} className="md:size-8" />
                    </div>
                    <h3 className="text-xl md:text-3xl font-black text-white mb-4 tracking-tighter leading-tight">{item.title}</h3>
                    <p className="text-sm md:text-lg text-gray-400 leading-relaxed font-bold flex-grow">
                      {item.desc}
                    </p>
                  </div>
                  
                  {/* Decorative background element for mobile feel */}
                  <div className={`absolute -bottom-6 -right-6 w-24 h-24 rounded-full blur-3xl opacity-10 transition-opacity group-hover:opacity-20 ${
                    item.color === 'blue' ? 'bg-blue-600' :
                    item.color === 'emerald' ? 'bg-emerald-500' :
                    item.color === 'violet' ? 'bg-violet-500' :
                    item.color === 'amber' ? 'bg-amber-500' :
                    item.color === 'indigo' ? 'bg-indigo-500' :
                    'bg-rose-500'
                  }`} />
                </motion.div>
              );
            })}
          </div>
          
          {/* Scroll Indicator for mobile */}
          <div className="flex justify-center gap-1.5 mt-2 md:hidden">
            {solutions.map((_, i) => (
              <div key={i} className="w-1 h-1 rounded-full bg-gray-700" />
            ))}
          </div>
        </div>

        {/* Integrated Condensed Process Tile - Horizontal flow on mobile */}
        <div className="mt-8 mb-16 relative -mx-4 px-4 sm:mx-0 sm:px-0">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-6 md:p-12 rounded-[2rem] md:rounded-[2.5rem] bg-gradient-to-br from-gray-800/60 to-gray-900/60 border border-emerald-500/30 backdrop-blur-md"
          >
             <div className="flex flex-col gap-8 md:gap-12">
                <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                   <div className="text-center md:text-left">
                      <h3 className="text-2xl md:text-4xl font-black text-white tracking-tighter uppercase mb-2">{t.processTitle}</h3>
                      <div className="inline-flex items-center gap-2 text-[#059669] text-[10px] md:text-xs font-black uppercase tracking-widest bg-emerald-500/10 px-3 py-1.5 rounded-full border border-emerald-500/20">
                         <Zap size={12} className="fill-current" />
                         {t.processHighlight}
                      </div>
                   </div>
                   <div className="hidden md:flex gap-1">
                      <div className="w-8 h-1 rounded-full bg-emerald-500/40" />
                      <div className="w-4 h-1 rounded-full bg-emerald-500/20" />
                   </div>
                </div>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-12">
                   {steps.map((step, idx) => (
                      <div key={idx} className="flex flex-col items-center md:items-start text-center md:text-left group/step">
                         <div className="w-8 h-8 md:w-10 md:h-10 rounded-lg md:rounded-xl bg-gray-900 border border-gray-700 flex items-center justify-center text-white mb-2 md:mb-4 group-hover/step:bg-emerald-600 group-hover/step:border-emerald-500 transition-all duration-300">
                            <step.icon size={16} />
                         </div>
                         <div className="text-[8px] md:text-[10px] font-black text-emerald-500 uppercase tracking-widest mb-0.5 md:mb-1">{step.number}</div>
                         <div className="text-[10px] md:text-xs font-black text-white uppercase tracking-tight">{step.title}</div>
                         <div className="text-[8px] md:text-[9px] font-bold text-gray-500 uppercase tracking-widest mt-0.5">{step.titleEn}</div>
                      </div>
                   ))}
                </div>
             </div>
          </motion.div>
        </div>

        {/* Why Us? Badges */}
        <div className="mt-10 md:mt-16 bg-white/5 rounded-3xl md:rounded-[3rem] p-6 md:p-16 relative overflow-hidden border border-white/10">
          <div className="relative z-10">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8 mb-8 md:mb-12">
              <div className="text-center md:text-left">
                <h3 className="text-xl md:text-4xl font-extrabold text-white mb-2 md:mb-4 tracking-tight">
                  {t.diffTitle}
                </h3>
                <div className="w-12 md:w-20 h-1 bg-blue-500 rounded-full mx-auto md:mx-0" />
              </div>
              <p className="text-gray-400 text-xs md:text-base font-medium max-w-md text-center md:text-right">
                {t.footerTaglineEn}
              </p>
            </div>
            
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
              {differentiators.map((diff, i) => (
                <div key={i} className="bg-white/5 backdrop-blur-none border border-white/10 p-4 md:p-6 rounded-2xl hover:bg-white/10 transition-colors">
                  <div className="flex items-center gap-2 md:gap-3 mb-2 md:mb-3">
                    <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-blue-400 animate-pulse" />
                    <div className="text-white font-bold text-[10px] md:text-base">{diff.title}</div>
                  </div>
                  <div className="text-gray-400 text-[9px] md:text-sm leading-relaxed font-medium">{diff.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
