import React from "react";
import { Check, ArrowRight, Zap, FileText, Sparkles, Building2 } from "lucide-react";
import { useTranslation } from "../lib/TranslationContext";
import { BackgroundGradient } from "./ui/BackgroundGradient";

export function Plans() {
  const { t } = useTranslation();
  
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

  return (
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
          <p className="text-gray-900 text-[10px] md:text-xs font-black leading-relaxed px-6 tracking-tight">
            <span className="text-emerald-600 mr-2 opacity-50 font-black">※</span>
            {t.domainFeeNote}
          </p>
        </div>
      </div>
    </section>
  );
}

