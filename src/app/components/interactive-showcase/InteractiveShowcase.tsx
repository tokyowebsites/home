import React, { useState, useEffect, lazy, Suspense } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, Check, ArrowRight, Zap, FileText, Building2, Sparkles, Loader2 } from "lucide-react";
import { MiniBrowser } from "./MiniBrowser";
import { useTranslation } from "../../lib/TranslationContext";

const EntryPreview = lazy(() => import("./PlanPreviews").then(module => ({ default: module.EntryPreview })));
const StandardPreview = lazy(() => import("./PlanPreviews").then(module => ({ default: module.StandardPreview })));
const BusinessPreview = lazy(() => import("./PlanPreviews").then(module => ({ default: module.BusinessPreview })));
const PremiumPreview = lazy(() => import("./PlanPreviews").then(module => ({ default: module.PremiumPreview })));

interface Plan {
  id: string;
  nameJa: string;
  nameEn: string;
  price: string;
  originalPrice: string | null;
  turnaround: string;
  desc: string;
  features: string[];
  url: string;
  formUrl: string;
  component: React.ComponentType;
  icon: any;
  color: string;
  highlighted: boolean;
}

// v2.1 - Enhanced Mobile UI
const PlanCard = ({ plan, index, onClick }: { plan: Plan; index: number; onClick: () => void }) => {
  const Icon = plan.icon;
  const [expanded, setExpanded] = useState(false);
  const isHighlighted = plan.highlighted;
  const { t } = useTranslation();

  return (
    <div
      onClick={onClick}
      className={`group relative border rounded-2xl p-5 md:p-6 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 cursor-pointer flex flex-col h-full min-h-0 overflow-visible ${
        isHighlighted 
          ? "bg-white border-2 border-emerald-500 shadow-xl shadow-emerald-900/20 scale-100 z-10" 
          : "bg-gray-800/90 border-gray-700/50 backdrop-blur-md hover:bg-gray-800 hover:border-gray-500"
      }`}
    >
      {/* Glow effect for highlighted card */}
      {isHighlighted && <div className="absolute inset-0 bg-emerald-500/5 rounded-2xl pointer-events-none" />}
      
      <div className={`absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none ${plan.color.split(" ")[0]}`}></div>

      <div className="relative mb-4 pt-1 flex items-center gap-3 md:block md:mb-8 md:pt-2">
        <div className={`w-10 h-10 md:w-16 md:h-16 rounded-lg md:rounded-2xl flex items-center justify-center md:mb-5 transition-transform duration-300 group-hover:scale-110 shrink-0 ${
          isHighlighted 
            ? 'bg-gradient-to-br from-emerald-400 to-emerald-600 text-white shadow-lg shadow-emerald-500/30' 
            : plan.color
        }`}>
          <Icon size={18} className="md:hidden" />
          <Icon size={32} className="hidden md:block" />
        </div>
        <div>
          <h3 className={`text-lg md:text-2xl font-bold ${isHighlighted ? 'text-gray-900' : 'text-gray-100'}`}>{plan.nameJa}</h3>
          <div className={`text-[9px] md:text-xs font-bold uppercase tracking-wider mt-0.5 md:mt-1.5 ${isHighlighted ? 'text-emerald-600' : 'text-gray-400'}`}>{plan.nameEn}</div>
        </div>
      </div>

      <div className={`relative mb-4 pb-4 md:mb-8 md:pb-8 border-b ${isHighlighted ? 'border-gray-100' : 'border-gray-700'}`}>
        <div className="flex items-baseline gap-2 flex-wrap mb-1">
          {plan.originalPrice && (
            <span className="text-sm md:text-lg text-gray-400 line-through font-bold">{plan.originalPrice}</span>
          )}
          <span className={`text-2xl md:text-4xl font-extrabold tracking-tight ${isHighlighted ? "text-[#059669]" : "text-white"}`} style={{ fontWeight: 800 }}>{plan.price}</span>
        </div>
        <div className={`text-[9px] md:text-xs font-bold ${isHighlighted ? 'text-gray-500' : 'text-gray-400'}`}>{t.oneTime}</div>
      </div>

      <p className={`relative text-[11px] md:text-sm leading-relaxed mb-4 md:mb-8 font-medium ${isHighlighted ? 'text-gray-600' : 'text-gray-300'} line-clamp-2 md:line-clamp-none`}>
        {plan.desc}
      </p>

      <ul className="relative space-y-2 md:space-y-4 mb-5 md:mb-8 flex-grow">
        {(expanded ? plan.features : plan.features.slice(0, 3)).map((feature: string, i: number) => (
          <li key={i} className={`flex items-start gap-2 md:gap-3 text-[10px] md:text-xs font-bold ${isHighlighted ? 'text-gray-600' : 'text-gray-300'}`}>
            <div className={`mt-0.5 w-3.5 h-3.5 rounded-full flex items-center justify-center shrink-0 ${
              isHighlighted 
                ? 'bg-emerald-100 text-emerald-600' 
                : plan.id === 'entry' ? 'bg-slate-800 text-slate-400' : 'bg-violet-900/30 text-violet-400'
            }`}>
               <Check size={8} strokeWidth={4} />
            </div>
            <span className="truncate">{feature}</span>
          </li>
        ))}
        {plan.features.length > 3 && (
          <li
            className={`text-[10px] pl-5 cursor-pointer transition-colors flex items-center gap-1 font-bold ${
              isHighlighted 
                ? 'text-emerald-600 hover:text-emerald-700' 
                : plan.id === 'entry' ? 'text-slate-400 hover:text-slate-300' : 'text-violet-400 hover:text-violet-300'
            }`}
            onClick={(e) => {
              e.stopPropagation();
              setExpanded(!expanded);
            }}
          >
            {expanded ? t.less : `+ ${plan.features.length - 3} more...`}
          </li>
        )}
      </ul>

      <div className="relative mt-auto">
        <button className={`w-full py-3 md:py-4 rounded-xl text-xs md:text-sm font-bold transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl ${
            isHighlighted 
              ? 'bg-[#059669] text-white hover:bg-emerald-600 shadow-emerald-200/50' 
              : plan.id === 'entry'
                ? 'bg-slate-700 text-white hover:bg-slate-600 border border-slate-600'
                : 'bg-violet-600 text-white hover:bg-violet-500 border border-violet-500 shadow-violet-900/20'
          }`} 
          style={{ fontWeight: 700 }}
        >
          {t.seeMore} <ArrowRight size={14} className="md:size-4 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </div>
  );
};

export function InteractiveShowcase() {
  const { t } = useTranslation();
  const [selectedPlan, setSelectedPlan] = useState<number | null>(null);

  const plans = [
    {
      id: "entry",
      nameJa: t.basic,
      nameEn: t.basicEn,
      price: t.basicPrice,
      originalPrice: null,
      turnaround: t.basicTurnaround,
      desc: t.basicDesc,
      features: [
        t.basicFeature1,
        t.basicFeature2,
        t.basicFeature3,
        t.basicFeature4,
        t.basicFeature5,
      ],
      url: "tokyowebsites.com/entry-sample",
      formUrl: "https://docs.google.com/forms/d/e/1FAIpQLScDauTW9PD2UFXS1QlSxltGuZe4fan4xIcapLwnBWBa7BAQ9w/viewform?usp=dialog",
      component: StandardPreview,
      icon: FileText,
      // Semantic: Neutral/Approachable (Blue-Gray/Slate)
      color: "bg-slate-100 text-slate-900 border-slate-200", 
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
      features: [
        t.standardFeature1,
        t.standardFeature2,
        t.standardFeature3,
        t.standardFeature4,
        t.standardFeature5,
        t.standardFeature6,
        t.standardFeature7,
        t.meoStandardBonus, 
      ],
      url: "tokyowebsites.com/standard-sample",
      formUrl: "https://docs.google.com/forms/d/e/1FAIpQLSeoV5sm7yOHKjnw9ceodaL-uUtpLf06H1dDM8L6UuQNk4mjfQ/viewform?usp=dialog",
      component: EntryPreview,
      icon: Building2,
      // Semantic: Growth/Action (Emerald Green)
      color: "bg-emerald-50 text-emerald-900 border-emerald-200",
      highlighted: true,
    },
    {
      id: "premium",
      nameJa: t.premium,
      nameEn: t.premiumEn,
      price: t.premiumPrice,
      originalPrice: null,
      turnaround: t.premiumTurnaround,
      desc: t.premiumDesc,
      features: [
        t.premiumFeature1,
        t.premiumFeature2,
        t.premiumFeature3,
        t.premiumFeature4,
        t.premiumFeature5,
        t.premiumFeature6,
        t.meoPremiumBonus,
      ],
      url: "tokyowebsites.com/premium-sample",
      formUrl: "https://docs.google.com/forms/d/e/1FAIpQLSc4v9fQpzivhHACffG_r4MEhS4TJIpR-u-XqdG31jyRiGxbug/viewform?usp=dialog",
      component: BusinessPreview,
      icon: Sparkles,
      // Semantic: Luxury/Exclusive (Violet/Gold)
      color: "bg-violet-50 text-violet-900 border-violet-200",
      highlighted: false,
    },
  ];

  useEffect(() => {
    if (selectedPlan !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedPlan]);

  return (
    <section id="plans" className="py-24 bg-gray-900 relative">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent"></div>
        {/* Subtle grid pattern for texture */}
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "radial-gradient(#ffffff 1px, transparent 1px)", backgroundSize: "32px 32px" }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#059669]/10 text-[#059669] text-xs font-bold mb-8 border border-[#059669]/20 shadow-[0_0_15px_rgba(5,150,105,0.2)]">
             <Zap size={14} className="fill-current" />
             {t.deliveryPossible}
          </div>
          <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white mb-6 drop-shadow-sm leading-tight">
            {t.plansTitle}
          </h2>
          <p className="text-gray-400 text-lg md:text-xl mb-8 leading-relaxed font-light">
            {t.plansSubtitle}<br className="hidden sm:block"/>
            {t.plansSubtitle2}
          </p>
          
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/5 border border-white/10 text-gray-300 text-xs font-medium backdrop-blur-sm hover:bg-white/10 transition-colors cursor-default">
            <span>🌐</span>
            <span>{t.plansMultiLang}</span>
          </div>
        </div>

        <div className="flex overflow-x-auto pb-12 px-6 -mx-6 md:mx-0 md:px-0 md:pb-0 md:grid md:grid-cols-3 gap-5 md:gap-8 relative z-10 max-w-6xl mx-auto items-stretch snap-x scrollbar-hide md:overflow-visible">
          {plans.map((plan, index) => (
            <div key={plan.id} className="min-w-[260px] sm:min-w-[300px] md:min-w-0 snap-center first:pl-6 last:pr-6 md:first:pl-0 md:last:pr-0">
              <PlanCard 
                plan={plan} 
                index={index} 
                onClick={() => setSelectedPlan(index)} 
              />
            </div>
          ))}
        </div>

        <div className="mt-16 text-center max-w-2xl mx-auto">
          <p className="text-gray-500 text-xs md:text-sm bg-gray-800/50 p-4 rounded-xl border border-gray-700">
            {t.domainFeeNote}
          </p>
        </div>

        <AnimatePresence>
          {selectedPlan !== null && (
            <div className="fixed inset-0 z-[100] flex flex-col isolate overflow-hidden">
              {/* Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedPlan(null)}
                className="absolute inset-0 bg-black/90 backdrop-blur-md"
              />

              {/* Header spacer to avoid main header */}
              <div className="h-[140px] md:h-[120px] shrink-0 pointer-events-none" />

              {/* Main Content Container with padding */}
              <div className="flex-1 relative w-full max-w-7xl mx-auto px-4 pb-6 flex flex-col min-h-0">
                <motion.div
                  initial={{ opacity: 0, scale: 0.98, y: 30 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.98, y: 30 }}
                  className="relative flex-1 bg-white rounded-2xl md:rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row z-10"
                >
                  {/* Left Side: Plan Info (Mobile: Top, Desktop: Left) */}
                  <div className="w-full md:w-[320px] shrink-0 bg-gray-50 flex flex-col border-b md:border-b-0 md:border-r border-gray-100 overflow-hidden">
                    {/* Sticky Plan Header for Mobile/Desktop */}
                    <div className="p-4 md:p-6 bg-white border-b border-gray-100 flex items-center justify-between gap-4">
                      <div className="flex items-center gap-3 min-w-0">
                        <div className={`shrink-0 p-2.5 rounded-xl ${plans[selectedPlan].color}`}>
                          {(() => {
                            const Icon = plans[selectedPlan].icon;
                            return <Icon size={20} />;
                          })()}
                        </div>
                        <div className="min-w-0">
                          <h3 className="text-base md:text-xl font-extrabold text-gray-900 truncate leading-tight">{plans[selectedPlan].nameJa}</h3>
                          <div className="text-[10px] md:text-xs font-bold text-[#059669] leading-tight">{plans[selectedPlan].price}</div>
                        </div>
                      </div>
                      
                      {/* Form Button for Mobile */}
                      <a 
                        href={plans[selectedPlan].formUrl} 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="md:hidden shrink-0 px-4 py-2 rounded-full bg-[#059669] text-white text-[11px] font-bold shadow-md active:scale-95 transition-transform flex items-center gap-1"
                      >
                        {t.consultThisPlan} <ArrowRight size={12} />
                      </a>
                    </div>

                    {/* Scrollable Plan Details (Desktop only, scrollable on mobile if needed but better to keep preview large) */}
                    <div className="hidden md:flex flex-1 flex-col p-6 overflow-y-auto custom-scrollbar">
                      <div className="mb-8 p-5 bg-white rounded-2xl border border-gray-100 shadow-sm">
                        <div className="flex items-baseline gap-2 mb-2">
                          {plans[selectedPlan].originalPrice && (
                            <span className="text-lg text-gray-400 line-through font-bold">{plans[selectedPlan].originalPrice}</span>
                          )}
                          <span className="text-3xl font-extrabold text-[#059669]">{plans[selectedPlan].price}</span>
                        </div>
                        {plans[selectedPlan].turnaround && (
                          <div className="text-sm text-gray-600 font-bold flex items-center gap-2 mb-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                            {t.turnaround}: {plans[selectedPlan].turnaround}
                          </div>
                        )}
                        <p className="text-xs text-gray-500 leading-relaxed font-medium">
                          {plans[selectedPlan].desc}
                        </p>
                      </div>

                      <div className="mb-8">
                        <h4 className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.2em] mb-4">{t.includedFeatures}</h4>
                        <ul className="space-y-3">
                          {plans[selectedPlan].features.map((feature, i) => (
                            <li key={i} className="flex items-start gap-3 text-sm text-gray-700">
                              <div className="mt-1 shrink-0 w-4 h-4 rounded-full bg-emerald-50 flex items-center justify-center">
                                <Check size={12} className="text-[#059669]" />
                              </div>
                              <span className="font-semibold leading-tight">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <a 
                        href={plans[selectedPlan].formUrl} 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block w-full py-4 bg-[#059669] hover:bg-emerald-700 text-white font-bold rounded-2xl text-center shadow-lg shadow-emerald-200 transition-all active:scale-[0.98] text-sm mt-auto"
                        style={{ fontWeight: 800 }}
                      >
                        {t.consultThisPlan}
                      </a>
                    </div>
                  </div>

                  {/* Right Side: Interactive Preview */}
                  <div className="flex-1 bg-gray-100 flex flex-col min-h-0 relative p-2 md:p-6">
                    {/* Interactive Showcase Bar */}
                    <div className="hidden md:flex items-center justify-between mb-4 px-2">
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                        <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">{t.samplePreview}</span>
                      </div>
                      <div className="flex gap-2">
                         <div className="w-2 h-2 rounded-full bg-gray-300"></div>
                         <div className="w-2 h-2 rounded-full bg-gray-300"></div>
                         <div className="w-2 h-2 rounded-full bg-gray-300"></div>
                      </div>
                    </div>

                    <div className="flex-1 min-h-0 relative group/browser">
                      <MiniBrowser 
                        url={plans[selectedPlan].url} 
                        className="h-full w-full rounded-xl md:rounded-2xl shadow-2xl border border-gray-200" 
                      >
                        <div className="h-full w-full bg-white relative">
                          <div className="absolute inset-0 overflow-y-auto custom-scrollbar" style={{ WebkitOverflowScrolling: 'touch' }}>
                            {(() => {
                              const Component = plans[selectedPlan].component;
                              return (
                                <Suspense fallback={
                                  <div className="h-full w-full flex items-center justify-center bg-white">
                                    <div className="flex flex-col items-center gap-3">
                                      <Loader2 className="w-8 h-8 text-[#059669] animate-spin" />
                                      <span className="text-xs font-bold text-gray-400 animate-pulse">PREVIEW LOADING...</span>
                                    </div>
                                  </div>
                                }>
                                  <Component />
                                </Suspense>
                              );
                            })()}
                          </div>
                        </div>
                      </MiniBrowser>
                    </div>

                    {/* Bottom Actions Bar (Fixed in the modal content) */}
                    <div className="mt-4 md:mt-6 flex flex-col md:flex-row items-center justify-center gap-3 shrink-0">
                      {/* Primary Contact CTA for Desktop/Tablet */}
                      <a 
                        href={plans[selectedPlan].formUrl} 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hidden md:flex items-center gap-2 px-10 py-4 bg-[#059669] hover:bg-emerald-700 text-white font-extrabold rounded-full transition-all shadow-xl hover:shadow-emerald-500/20 active:scale-95"
                      >
                        <Zap size={18} className="fill-current" />
                        <span>{t.consultThisPlan}</span>
                      </a>

                      <button
                        onClick={() => setSelectedPlan(null)}
                        className="group flex items-center gap-2 px-8 py-3 bg-white hover:bg-gray-50 text-gray-900 font-bold rounded-full transition-all shadow-md hover:shadow-lg border border-gray-200 active:scale-95"
                      >
                        <X size={18} className="group-hover:rotate-90 transition-transform duration-300" />
                        <span className="text-sm">CLOSE PREVIEW</span>
                      </button>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
