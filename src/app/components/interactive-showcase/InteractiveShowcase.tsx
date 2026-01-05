import { useState, useEffect, lazy, Suspense } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, Check, ArrowRight, Zap, FileText, Files, Building2, Sparkles, Loader2 } from "lucide-react";
import { MiniBrowser } from "./MiniBrowser";
import { CountdownTimer } from "../CountdownTimer";
import { useTranslation } from "../../lib/TranslationContext";

const EntryPreview = lazy(() => import("./PlanPreviews").then(module => ({ default: module.EntryPreview })));
const StandardPreview = lazy(() => import("./PlanPreviews").then(module => ({ default: module.StandardPreview })));
const BusinessPreview = lazy(() => import("./PlanPreviews").then(module => ({ default: module.BusinessPreview })));
const PremiumPreview = lazy(() => import("./PlanPreviews").then(module => ({ default: module.PremiumPreview })));

// Plans are now defined inside InteractiveShowcase component to use translations

// --- Plan Card Component ---
const PlanCard = ({ plan, index, onClick }: { plan: typeof plans[0]; index: number; onClick: () => void }) => {
  const Icon = plan.icon;
  const [expanded, setExpanded] = useState(false);
  const isHighlighted = plan.highlighted;
  const { t } = useTranslation();

  return (
    <div
      onClick={onClick}
      className={`group relative bg-white border rounded-2xl p-6 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 cursor-pointer flex flex-col h-auto min-h-0 overflow-visible ${
        isHighlighted 
          ? "border-2 border-emerald-500 shadow-xl shadow-emerald-900/20 scale-100 md:scale-110 z-10" 
          : "border-gray-800 bg-gray-800/50 backdrop-blur-sm text-gray-100 hover:bg-gray-800 hover:border-gray-600"
      }`}
    >
      {isHighlighted && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-full text-center">
          <div className="inline-block bg-gradient-to-r from-emerald-500 to-emerald-400 text-white px-4 py-1.5 rounded-full text-xs font-bold shadow-lg shadow-emerald-900/40 tracking-wide uppercase">
            {t.januarySale}
          </div>
        </div>
      )}
      
      {/* Glow effect for highligted card */}
      {isHighlighted && <div className="absolute inset-0 bg-emerald-500/5 rounded-2xl pointer-events-none" />}
      
      <div className={`absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none ${plan.color.split(" ")[0]}`}></div>

      <div className="relative mb-8 pt-2">
        <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-5 ${isHighlighted ? plan.color : 'bg-gray-700/50 text-gray-300'}`}>
          <Icon size={28} />
        </div>
        <h3 className={`text-2xl font-bold ${isHighlighted ? 'text-gray-900' : 'text-white'}`}>{plan.nameJa}</h3>
        <div className={`text-xs font-bold uppercase tracking-wider mt-1.5 ${isHighlighted ? 'text-gray-500' : 'text-gray-400'}`}>{plan.nameEn}</div>
      </div>

      {isHighlighted && (
        <div className="relative mb-6">
          <CountdownTimer />
        </div>
      )}

      <div className={`relative mb-8 pb-8 border-b ${isHighlighted ? 'border-gray-100' : 'border-gray-700'}`}>
        <div className="flex items-baseline gap-2 flex-wrap mb-1">
          {plan.originalPrice && (
            <span className="text-lg text-gray-400 line-through font-bold">{plan.originalPrice}</span>
          )}
          <span className={`text-4xl font-extrabold tracking-tight ${isHighlighted ? "text-[#059669]" : "text-white"}`} style={{ fontWeight: 800 }}>{plan.price}</span>
        </div>
        <div className={`text-xs font-bold ${isHighlighted ? 'text-gray-500' : 'text-gray-400'}`}>{t.oneTime}</div>
        
        {plan.turnaround && (
          <div className={`mt-3 text-xs font-semibold flex items-center gap-1.5 ${isHighlighted ? 'text-gray-600' : 'text-gray-300'}`}>
            <span className="w-1.5 h-1.5 rounded-full bg-blue-500 inline-block"></span>
            {t.turnaround}: {plan.turnaround}
          </div>
        )}
      </div>

      <p className={`relative text-sm leading-relaxed mb-8 font-medium ${isHighlighted ? 'text-gray-600' : 'text-gray-300'}`}>
        {plan.desc}
      </p>

      <ul className="relative space-y-4 mb-8 flex-grow">
        {(expanded ? plan.features : plan.features.slice(0, 5)).map((feature, i) => (
          <li key={i} className={`flex items-start gap-3 text-xs font-bold ${isHighlighted ? 'text-gray-600' : 'text-gray-300'}`}>
            <div className={`mt-0.5 w-4 h-4 rounded-full flex items-center justify-center shrink-0 ${isHighlighted ? 'bg-emerald-100 text-emerald-600' : 'bg-gray-700 text-gray-400'}`}>
               <Check size={10} strokeWidth={3} />
            </div>
            {feature}
          </li>
        ))}
        {plan.features.length > 5 && (
          <li
            className={`text-xs pl-7 cursor-pointer transition-colors flex items-center gap-1 font-bold ${isHighlighted ? 'text-emerald-600 hover:text-emerald-700' : 'text-blue-400 hover:text-blue-300'}`}
            onClick={(e) => {
              e.stopPropagation();
              setExpanded(!expanded);
            }}
          >
            {expanded ? t.less : t.more}
          </li>
        )}
      </ul>

      <div className="relative mt-auto">
        <button className={`w-full py-4 rounded-xl text-sm font-bold transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl ${
            isHighlighted 
              ? 'bg-[#059669] text-white hover:bg-emerald-600 shadow-emerald-200/50' 
              : 'bg-gray-700 text-white hover:bg-gray-600 border border-gray-600'
          }`} 
          style={{ fontWeight: 700 }}
        >
          {t.seeMore} <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
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
      component: StandardPreview,
      icon: FileText,
      color: "bg-blue-50 text-blue-900",
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
        t.meoStandardBonus, // Added bonus
      ],
      url: "tokyowebsites.com/standard-sample",
      component: EntryPreview,
      icon: Building2,
      color: "bg-emerald-50 text-emerald-900",
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
        t.meoPremiumBonus, // Added bonus
      ],
      url: "tokyowebsites.com/premium-sample",
      component: BusinessPreview,
      icon: Sparkles,
      color: "bg-purple-50 text-purple-900",
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

        <div className="grid md:grid-cols-3 gap-8 relative z-10 max-w-6xl mx-auto items-start">
          {plans.map((plan, index) => (
            <PlanCard 
              key={plan.id} 
              plan={plan} 
              index={index} 
              onClick={() => setSelectedPlan(index)} 
            />
          ))}
        </div>

        <div className="mt-16 text-center max-w-2xl mx-auto">
          <p className="text-gray-500 text-xs md:text-sm bg-gray-800/50 p-4 rounded-xl border border-gray-700">
            {t.domainFeeNote}
          </p>
        </div>

        <AnimatePresence>
          {selectedPlan !== null && (
            <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 isolate overflow-hidden">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedPlan(null)}
                className="absolute inset-0 bg-black/80 backdrop-blur-sm"
              />

              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                className="relative w-full max-w-6xl h-[90vh] bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col md:flex-row z-10"
              >
                <button
                  onClick={() => setSelectedPlan(null)}
                  className="absolute top-3 right-3 md:top-4 md:right-4 z-50 p-2 bg-white/90 backdrop-blur rounded-full hover:bg-white transition-colors shadow-md hover:rotate-90 duration-300"
                >
                  <X size={18} className="text-gray-900" />
                </button>

                {/* Mobile: Ultra-compact info bar */}
                <div className="md:hidden shrink-0 bg-white border-b border-gray-100 px-3 py-2">
                  <div className="flex items-center justify-between gap-2">
                    <div className="flex items-center gap-2 min-w-0">
                      <div className={`shrink-0 p-1.5 rounded-lg ${plans[selectedPlan].color}`}>
                        {(() => {
                          const Icon = plans[selectedPlan].icon;
                          return <Icon size={14} />;
                        })()}
                      </div>
                      <div className="min-w-0 flex flex-col justify-center">
                        <h3 className="text-sm font-bold text-gray-900 truncate leading-tight">{plans[selectedPlan].nameJa}</h3>
                        <div className="text-[9px] font-bold text-[#059669] leading-tight">{plans[selectedPlan].price}</div>
                      </div>
                    </div>
                    <div className="shrink-0 text-right">
                      <a 
                        href="#contact" 
                        onClick={() => setSelectedPlan(null)}
                        className="inline-block px-3 py-1.5 rounded-full bg-[#059669] text-white text-[10px] font-bold shadow-sm"
                      >
                        {t.freeConsultation}
                      </a>
                    </div>
                  </div>
                </div>

                {/* Desktop: Full info panel */}
                <div className="hidden md:flex md:w-[320px] shrink-0 bg-gray-50 p-6 border-r border-gray-100 flex-col">
                  <div className="mb-6">
                    <div className={`inline-flex p-3 rounded-xl mb-3 ${plans[selectedPlan].color}`}>
                      {(() => {
                        const Icon = plans[selectedPlan].icon;
                        return <Icon size={24} />;
                      })()}
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-1">{plans[selectedPlan].nameJa}</h3>
                    <div className="text-sm text-gray-500 font-bold uppercase tracking-wider">{plans[selectedPlan].nameEn}</div>
                  </div>

                  <div className="mb-6">
                    <div className="flex items-baseline gap-2 mb-2">
                      {plans[selectedPlan].originalPrice && (
                        <span className="text-lg text-gray-400 line-through font-bold">{plans[selectedPlan].originalPrice}</span>
                      )}
                      <span className="text-3xl font-bold text-[#059669]">{plans[selectedPlan].price}</span>
                    </div>
                    {plans[selectedPlan].turnaround && (
                      <div className="text-sm text-gray-500 font-semibold mb-2">
                        {t.turnaround}: {plans[selectedPlan].turnaround}
                      </div>
                    )}
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {plans[selectedPlan].desc}
                    </p>
                  </div>

                  <div className="mb-6 flex-1">
                    <h4 className="text-xs font-bold text-gray-900 uppercase tracking-wider mb-3">{t.includedFeatures}</h4>
                    <ul className="space-y-2">
                      {plans[selectedPlan].features.map((feature, i) => (
                        <li key={i} className="flex items-center gap-2 text-sm text-gray-600">
                          <Check size={14} className="text-[#059669] shrink-0" />
                          <span className="font-medium">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <a 
                    href="#contact" 
                    onClick={() => setSelectedPlan(null)}
                    className="block w-full py-3 bg-[#059669] hover:bg-emerald-600 text-white font-bold rounded-xl text-center shadow-lg shadow-emerald-200 transition-all active:scale-[0.98] text-sm mt-auto"
                    style={{ fontWeight: 700 }}
                  >
                    {t.consultThisPlan}
                  </a>
                </div>

                {/* Preview area - takes remaining space */}
                <div className="flex-1 bg-slate-200 p-2 md:p-6 flex flex-col min-h-0 relative">
                  <div className="text-center mb-2 hidden md:block">
                    <span className="bg-white/70 backdrop-blur px-3 py-1 rounded-full text-[10px] font-bold text-gray-500 border border-gray-200/50">
                      {t.samplePreview}
                    </span>
                  </div>
                  
                  <div className="flex-1 min-h-0 relative">
                    <MiniBrowser url={plans[selectedPlan].url} className="h-full w-full rounded-lg md:rounded-xl shadow-lg border border-gray-700" dark>
                      <div className="h-full w-full bg-white relative">
                        <div className="absolute inset-0 overflow-y-auto custom-scrollbar" style={{ WebkitOverflowScrolling: 'touch' }}>
                          {(() => {
                            const Component = plans[selectedPlan].component;
                            return (
                              <Suspense fallback={
                                <div className="h-full w-full flex items-center justify-center bg-white">
                                  <Loader2 className="w-6 h-6 text-[#059669] animate-spin" />
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
                </div>

              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
