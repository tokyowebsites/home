import { Rocket, Globe, MapPin, Star, MessageSquare, Camera, Check } from "lucide-react";
import { useTranslation } from "../lib/TranslationContext";
import { motion } from "motion/react";

export function Solutions() {
  const { t } = useTranslation();
  
  const solutions = [
    {
      icon: Rocket,
      title: t.solution1Title,
      desc: t.solution1Desc,
      color: "blue"
    },
    {
      icon: MapPin,
      title: t.solution2Title,
      desc: t.solution2Desc,
      color: "emerald"
    },
    {
      icon: Globe,
      title: t.solution3Title,
      desc: t.solution3Desc,
      color: "violet"
    },
    {
      icon: Star,
      title: t.solution4Title,
      desc: t.solution4Desc,
      color: "amber"
    },
    {
      icon: MessageSquare,
      title: t.solution5Title,
      desc: t.solution5Desc,
      color: "indigo"
    },
    {
      icon: Check,
      title: t.solution6Title,
      desc: t.solution6Desc,
      color: "rose"
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
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-100 text-slate-900 text-xs font-bold mb-8 border border-slate-200">
            <Rocket size={14} className="text-blue-600" />
            {t.solutionsBadge}
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-8 leading-tight tracking-tight">
            {t.solutionsTitle}
            <span className="text-blue-600">{t.solutionsTitleHighlight}</span>{t.solutionsTitle2}
          </h2>
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed font-medium">
            {t.solutionsDesc}<br className="hidden sm:block"/>
            {t.solutionsDesc2}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {solutions.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-2xl hover:border-blue-100 transition-all duration-300"
              >
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-transform group-hover:scale-110 shadow-sm ${
                  item.color === 'blue' ? 'bg-blue-50 text-blue-600' :
                  item.color === 'emerald' ? 'bg-emerald-50 text-emerald-600' :
                  item.color === 'violet' ? 'bg-violet-50 text-violet-600' :
                  item.color === 'amber' ? 'bg-amber-50 text-amber-600' :
                  item.color === 'indigo' ? 'bg-indigo-50 text-indigo-600' :
                  'bg-rose-50 text-rose-600'
                }`}>
                  <Icon size={28} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed text-sm font-medium">
                  {item.desc}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Why Us? / Differentiators Section */}
        <div className="mt-20 bg-gray-900 rounded-[2.5rem] p-8 md:p-12 relative overflow-hidden shadow-2xl">
          {/* Decorative Background */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/10 blur-[100px] rounded-full -mr-32 -mt-32" />
          
          <div className="relative z-10 flex flex-col lg:flex-row gap-12 items-center">
            <div className="lg:w-1/3">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                {t.diffTitle}
              </h3>
              <div className="w-12 h-1 bg-blue-500 rounded-full" />
            </div>
            
            <div className="lg:w-2/3 grid sm:grid-cols-2 gap-6">
              {differentiators.map((diff, i) => (
                <div key={i} className="flex gap-4">
                  <div className="mt-1 shrink-0 w-5 h-5 rounded-full bg-blue-500/20 flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-blue-400" />
                  </div>
                  <div>
                    <div className="text-white font-bold mb-1">{diff.title}</div>
                    <div className="text-gray-400 text-sm leading-relaxed">{diff.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

