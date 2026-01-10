import { Rocket, Globe, MapPin, Star, MessageSquare, Check } from "lucide-react";
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
    },
    {
      icon: Check,
      title: t.solution6Title,
      desc: t.solution6Desc,
      color: "rose",
      span: "md:col-span-6 lg:col-span-6"
    },
  ];

  const differentiators = [
    { title: t.diffFastTitle, desc: t.diffFastDesc },
    { title: t.diffCasualTitle, desc: t.diffCasualDesc },
    { title: t.diffMapsTitle, desc: t.diffMapsDesc },
    { title: t.diffMultiTitle, desc: t.diffMultiDesc },
  ];

  return (
    <section id="solutions" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-[10px] font-black uppercase tracking-[0.2em] mb-6 border border-blue-100"
          >
            <Rocket size={12} />
            {t.solutionsBadge}
          </motion.div>
          <h2 className="text-4xl md:text-6xl font-black text-gray-900 mb-6 leading-[1.1] tracking-tighter">
            {t.solutionsTitle}
            <span className="text-blue-600">{t.solutionsTitleHighlight}</span>{t.solutionsTitle2}
          </h2>
          <p className="text-lg text-gray-500 font-bold leading-relaxed max-w-2xl mx-auto">
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
                className={`${item.span} group relative p-6 md:p-10 rounded-[2.5rem] bg-slate-50/50 border border-slate-100 hover:bg-white hover:shadow-[0_32px_64px_-16px_rgba(0,0,0,0.1)] hover:border-blue-200 transition-all duration-500 overflow-hidden`}
              >
                <div className="absolute -right-8 -top-8 w-32 h-32 bg-gradient-to-br from-blue-500/5 to-transparent blur-2xl group-hover:from-blue-500/10 transition-all duration-700" />
                
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
                  <h3 className="text-xl md:text-3xl font-black text-gray-900 mb-4 tracking-tighter leading-tight">{item.title}</h3>
                  <p className="text-sm md:text-lg text-gray-600 leading-relaxed font-bold">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        <div className="mt-16 md:mt-24 bg-gray-900 rounded-[3rem] p-6 md:p-16 relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/10 blur-[120px] rounded-full -mr-48 -mt-48" />
          
          <div className="relative z-10">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-12">
              <div className="text-center md:text-left">
                <h3 className="text-2xl md:text-4xl font-extrabold text-white mb-4 tracking-tight">
                  {t.diffTitle}
                </h3>
                <div className="w-20 h-1.5 bg-blue-500 rounded-full mx-auto md:mx-0" />
              </div>
              <p className="text-gray-400 text-sm md:text-base font-medium max-w-md text-center md:text-right">
                We combine speed, local expertise, and multilingual support to deliver results that physical stores actually need.
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
