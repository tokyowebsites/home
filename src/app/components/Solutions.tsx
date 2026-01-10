import React from "react";
import { Rocket, Globe, MapPin, Star, MessageSquare, Check, ArrowRight, Zap, FileText, Sparkles } from "lucide-react";
import { useTranslation } from "../lib/TranslationContext";
import { motion } from "motion/react";
import { BackgroundGradient } from "./ui/BackgroundGradient";

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
    },
    {
      icon: Check,
      title: t.solution6Title,
      desc: t.solution6Desc,
      color: "rose",
      span: "md:col-span-6 lg:col-span-6"
    },
  ];

  const plans = [
    {
      id: "entry",
      nameJa: t.basic,
      nameEn: t.basicEn,
      price: t.basicPrice,
      turnaround: t.basicTurnaround,
      desc: t.basicDesc,
      features: [t.basicFeature1, t.basicFeature2, t.basicFeature3, t.basicFeature4, t.basicFeature5],
      formUrl: "https://docs.google.com/forms/d/e/1FAIpQLScDauTW9PD2UFXS1QlSxltGuZe4fan4xIcapLwnBWBa7BAQ9w/viewform",
      icon: FileText,
      color: "bg-slate-100 text-slate-900 border-slate-200",
      accent: "text-slate-600",
      highlighted: false,
    },
    {
      id: "standard",
      nameJa: t.standard,
      nameEn: t.standardEn,
      price: t.standardPrice,
      originalPrice: t.standardOriginalPrice,
      turnaround: t.standardTurnaround,
      desc: t.standardDesc,
      features: [t.standardFeature1, t.standardFeature2, t.standardFeature3, t.standardFeature4, t.standardFeature5, t.standardFeature6, t.standardFeature7, t.meoStandardBonus],
      formUrl: "https://docs.google.com/forms/d/e/1FAIpQLSeoV5sm7yOHKjnw9ceodaL-uUtpLf06H1dDM8L6UuQNk4mjfQ/viewform",
      icon: Building2,
      color: "bg-emerald-50 text-emerald-900 border-emerald-200",
      accent: "text-emerald-600",
      highlighted: true,
    },
    {
      id: "premium",
      nameJa: t.premium,
      nameEn: t.premiumEn,
      price: t.premiumPrice,
      turnaround: t.premiumTurnaround,
      desc: t.premiumDesc,
      features: [t.premiumFeature1, t.premiumFeature2, t.premiumFeature3, t.premiumFeature4, t.premiumFeature5, t.premiumFeature6, t.meoPremiumBonus],
      formUrl: "https://docs.google.com/forms/d/e/1FAIpQLSc4v9fQpzivhHACffG_r4MEhS4TJIpR-u-XqdG31jyRiGxbug/viewform",
      icon: Sparkles,
      color: "bg-violet-50 text-violet-900 border-violet-200",
      accent: "text-violet-600",
      highlighted: false,
    },
  ];

  const differentiators = [
    { title: t.diffFastTitle, desc: t.diffFastDesc },
    { title: t.diffCasualTitle, desc: t.diffCasualDesc },
    { title: t.diffMapsTitle, desc: t.diffMapsDesc },
    { title: t.diffMultiTitle, desc: t.diffMultiDesc },
  ];

  return (
    <div className="relative">
      {/* 1. SOLUTIONS SECTION (Dark Grid Background) */}
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

          <div className="grid grid-cols-1 md:grid-cols-6 gap-4 md:gap-6 max-w-6xl mx-auto">
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
                    <p className="text-sm md:text-lg text-gray-400 leading-relaxed font-bold">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>

          <div className="mt-16 md:mt-24 bg-white/5 rounded-[3rem] p-6 md:p-16 relative overflow-hidden border border-white/10">
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

      {/* 2. PLANS SECTION (Animated Gradient Background) */}
      <section id="plans" className="py-24 bg-gray-50 relative overflow-hidden">
        <BackgroundGradient />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#059669]/10 text-[#059669] text-xs font-black uppercase tracking-widest mb-6 border border-[#059669]/20 shadow-sm">
               <Zap size={14} className="fill-current" />
               {t.deliveryPossible}
            </div>
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-gray-900 mb-6 leading-tight">
              {t.plansTitle}
            </h2>
            <p className="text-gray-600 text-lg md:text-xl font-bold">
              {t.plansSubtitle} {t.plansSubtitle2}
            </p>
          </div>

          <div className="flex overflow-x-auto pb-12 px-6 -mx-6 md:mx-0 md:px-0 md:pb-0 md:grid md:grid-cols-3 gap-5 md:gap-8 relative z-10 max-w-6xl mx-auto items-stretch snap-x no-scrollbar md:overflow-visible">
            {plans.map((plan, index) => {
              const Icon = plan.icon;
              return (
                <div key={plan.id} className="min-w-[280px] md:min-w-0 snap-center relative h-full">
                  <div className={`h-full group relative border rounded-[2.5rem] p-8 md:p-10 transition-all duration-500 flex flex-col ${
                    plan.highlighted 
                      ? "bg-white border-[#059669] shadow-2xl shadow-emerald-900/10 scale-[1.02] z-10" 
                      : "bg-white/60 border-white/40 backdrop-blur-md hover:bg-white hover:shadow-xl"
                  }`}>
                    <div className="flex items-center justify-between mb-8">
                      <div className={`w-14 h-14 rounded-2xl flex items-center justify-center shadow-sm ${
                        plan.highlighted ? 'bg-[#059669] text-white' : 'bg-slate-100 text-gray-900'
                      }`}>
                        <Icon size={28} />
                      </div>
                      <div className={`text-[10px] font-black uppercase tracking-widest ${plan.accent}`}>
                        {plan.nameEn}
                      </div>
                    </div>

                    <h3 className="text-2xl md:text-3xl font-black text-gray-900 mb-2 leading-tight">
                      {plan.nameJa}
                    </h3>
                    
                    <div className="mb-6 pb-6 border-b border-gray-100">
                      <div className="flex items-baseline gap-1">
                        <span className={`text-3xl md:text-4xl font-black ${plan.highlighted ? "text-[#059669]" : "text-gray-900"}`}>
                          {plan.price}
                        </span>
                        <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest">
                          {t.oneTime}
                        </span>
                      </div>
                    </div>

                    <p className="text-sm text-gray-600 leading-relaxed font-bold mb-8">
                      {plan.desc}
                    </p>

                    <ul className="space-y-4 mb-10 flex-grow">
                      {plan.features.slice(0, 5).map((feature, i) => (
                        <li key={i} className="flex items-start gap-3 text-xs text-gray-700 font-bold leading-tight">
                          <div className={`mt-0.5 w-4 h-4 rounded-full flex items-center justify-center shrink-0 ${
                            plan.highlighted ? 'bg-emerald-100 text-emerald-600' : 'bg-slate-100 text-slate-400'
                          }`}>
                             <Check size={10} strokeWidth={4} />
                          </div>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <a 
                      href={plan.formUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-full py-4 rounded-2xl text-xs font-black uppercase tracking-widest transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl active:scale-95 ${
                        plan.highlighted 
                          ? 'bg-[#059669] text-white hover:bg-emerald-600' 
                          : 'bg-gray-900 text-white hover:bg-gray-800'
                      }`}
                    >
                      {t.consultThisPlan} <ArrowRight size={14} />
                    </a>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-16 text-center max-w-2xl mx-auto">
            <p className="text-gray-400 text-[10px] md:text-xs font-bold leading-relaxed px-6">
              {t.domainFeeNote}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
