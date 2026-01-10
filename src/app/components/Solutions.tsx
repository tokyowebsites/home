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
      span: "md:col-span-3 lg:col-span-3"
    },
    {
      icon: MapPin,
      title: t.solution2Title,
      desc: t.solution2Desc,
      color: "emerald",
      span: "md:col-span-3 lg:col-span-3"
    },
    {
      icon: Globe,
      title: t.solution3Title,
      desc: t.solution3Desc,
      color: "violet",
      span: "md:col-span-3 lg:col-span-2"
    },
    {
      icon: Star,
      title: t.solution4Title,
      desc: t.solution4Desc,
      color: "amber",
      span: "md:col-span-3 lg:col-span-2"
    },
    {
      icon: MessageSquare,
      title: t.solution5Title,
      desc: t.solution5Desc,
      color: "indigo",
      span: "md:col-span-3 lg:col-span-2"
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
    <section id="solutions" className="py-24 bg-gray-900 relative overflow-hidden">
      {/* Subtle grid pattern for texture */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]" style={{ backgroundImage: "radial-gradient(#ffffff 1px, transparent 1px)", backgroundSize: "32px 32px" }}></div>
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-[10px] font-black uppercase tracking-[0.2em] mb-6 border border-blue-500/20"
          >
            <Rocket size={12} />
            {t.solutionsBadge}
          </motion.div>
          <h2 className="text-4xl md:text-6xl font-black text-white mb-6 leading-[1.1] tracking-tighter">
            {t.solutionsTitle}
            <span className="text-blue-500">{t.solutionsTitleHighlight}</span>{t.solutionsTitle2}
          </h2>
          <p className="text-lg text-gray-400 font-bold leading-relaxed max-w-2xl mx-auto">
            {t.solutionsDesc} {t.solutionsDesc2}
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-6 gap-4 md:gap-6 max-w-6xl mx-auto mb-16">
          {solutions.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className={`${item.span} group relative p-6 md:p-10 rounded-[2.5rem] bg-gray-800/40 border border-gray-700/50 hover:bg-gray-800/80 hover:border-blue-500/50 transition-all duration-500 overflow-hidden backdrop-blur-sm`}
              >
                <div className="relative z-10 flex flex-col items-start">
                  <div className={`w-12 h-12 md:w-16 md:h-16 rounded-2xl flex items-center justify-center mb-6 shadow-sm transition-all duration-500 group-hover:scale-110 group-hover:rotate-3 ${
                    item.color === 'blue' ? 'bg-blue-600 text-white shadow-blue-200' :
                    item.color === 'emerald' ? 'bg-emerald-500 text-white shadow-emerald-200' :
                    item.color === 'violet' ? 'bg-violet-500 text-white shadow-violet-200' :
                    item.color === 'amber' ? 'bg-amber-500 text-white shadow-amber-200' :
                    item.color === 'indigo' ? 'bg-indigo-500 text-white shadow-indigo-200' :
                    'bg-rose-500 text-white shadow-rose-200'
                  }`}>
                    <Icon size={24} className="md:size-8" />
                  </div>
                  <h3 className="text-xl md:text-3xl font-black text-white mb-4 tracking-tighter leading-tight">{item.title}</h3>
                  <p className="text-sm md:text-lg text-gray-400 leading-relaxed font-bold">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}

          {/* New Integrated Process Box (Replacing Speed Launch) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="md:col-span-6 lg:col-span-6 p-8 md:p-12 rounded-[2.5rem] bg-gradient-to-br from-gray-800/60 to-gray-900/60 border border-emerald-500/30 hover:border-emerald-500/50 transition-all duration-500 backdrop-blur-md"
          >
             <div className="flex flex-col md:flex-row items-center gap-12">
                <div className="text-center md:text-left shrink-0">
                   <h3 className="text-2xl md:text-4xl font-black text-white tracking-tighter uppercase mb-3">{t.processTitle}</h3>
                   <div className="inline-flex items-center gap-2 text-[#059669] text-xs font-black uppercase tracking-widest bg-emerald-500/10 px-4 py-2 rounded-full border border-emerald-500/20">
                      <Zap size={14} className="fill-current" />
                      {t.processHighlight}
                   </div>
                </div>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-12 flex-grow">
                   {steps.map((step, idx) => (
                      <div key={idx} className="flex flex-col items-center md:items-start text-center md:text-left group/step">
                         <div className="w-10 h-10 rounded-xl bg-gray-900 border border-gray-700 flex items-center justify-center text-white mb-4 group-hover/step:bg-emerald-600 group-hover/step:border-emerald-500 transition-all duration-300">
                            <step.icon size={18} />
                         </div>
                         <div className="text-[10px] font-black text-emerald-500 uppercase tracking-widest mb-1">{step.number}</div>
                         <div className="text-xs md:text-sm font-black text-white uppercase tracking-tight">{step.title}</div>
                         <div className="text-[9px] font-bold text-gray-500 uppercase tracking-widest mt-0.5">{step.titleEn}</div>
                      </div>
                   ))}
                </div>
             </div>
          </motion.div>
        </div>

        {/* Why Us? Badges */}
        <div className="mt-16 bg-white/5 rounded-[3rem] p-6 md:p-16 relative overflow-hidden border border-white/10">
          <div className="relative z-10">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-12">
              <div className="text-center md:text-left">
                <h3 className="text-2xl md:text-4xl font-extrabold text-white mb-4 tracking-tight">
                  {t.diffTitle}
                </h3>
                <div className="w-20 h-1.5 bg-blue-500 rounded-full mx-auto md:mx-0" />
              </div>
              <p className="text-gray-400 text-sm md:text-base font-medium max-w-md text-center md:text-right">
                {t.footerTaglineEn}
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {differentiators.map((diff, i) => (
                <div key={i} className="bg-white/5 backdrop-blur-md border border-white/10 p-6 rounded-2xl hover:bg-white/10 transition-colors">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
                    <div className="text-white font-bold text-base">{diff.title}</div>
                  </div>
                  <div className="text-gray-400 text-sm leading-relaxed font-medium">{diff.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
