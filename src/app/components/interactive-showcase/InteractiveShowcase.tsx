import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, Check, ArrowRight, Zap, FileText, Files, Building2, Sparkles } from "lucide-react";
import { MiniBrowser } from "./MiniBrowser";
import { EntryPreview, StandardPreview, BusinessPreview, PremiumPreview } from "./PlanPreviews";

// --- Plans Data ---

const plans = [
  {
    id: "entry",
    nameJa: "エントリー",
    nameEn: "Entry Plan",
    price: "¥20,000",
    desc: "名刺代わりの1ページ。スマホ対応で、まずはWeb上の拠点を作りたい方に。",
    features: ["1 Page Landing", "Mobile Optimized", "Google Maps", "Social Links", "Contact Form"],
    url: "tokyowebsites.com/entry-sample",
    component: EntryPreview,
    icon: FileText,
    color: "bg-emerald-50 text-emerald-900",
  },
  {
    id: "standard",
    nameJa: "スタンダード",
    nameEn: "Standard Plan",
    price: "¥50,000",
    desc: "3〜5ページの本格構成。サービス紹介や会社概要など、信頼感を高める標準プラン。",
    features: ["3-5 Pages", "CMS Integration", "SEO Basics", "Blog Function", "Analytics"],
    url: "tokyowebsites.com/standard-sample",
    component: StandardPreview,
    icon: Files,
    color: "bg-emerald-50 text-emerald-900",
  },
  {
    id: "business",
    nameJa: "ビジネス",
    nameEn: "Business Plan",
    price: "¥80,000",
    desc: "CMS（ブログ）機能付きで、自分たちで更新可能。集客と情報発信を強化したい企業へ。",
    features: ["Custom CMS", "Advanced SEO", "Multi-language Ready", "Newsletter", "Priority Support"],
    url: "tokyowebsites.com/business-sample",
    component: BusinessPreview,
    icon: Building2,
    color: "bg-emerald-50 text-emerald-900",
  },
  {
    id: "premium",
    nameJa: "プレミアム",
    nameEn: "Premium Plan",
    price: "¥120,000~",
    desc: "EC機能や予約システムなど、高度な機能を搭載。ビジネスを加速させるフルオーダー。",
    features: ["E-commerce / Booking", "Custom Animation", "API Integration", "Brand Strategy", "24/7 Support"],
    url: "tokyowebsites.com/premium-sample",
    component: PremiumPreview,
    icon: Sparkles,
    color: "bg-emerald-50 text-emerald-900",
  },
];

export function InteractiveShowcase() {
  const [selectedPlan, setSelectedPlan] = useState<number | null>(null);

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
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0f172a]/30 text-blue-400 text-xs font-bold mb-6 border border-blue-900/50">
             <Zap size={14} className="fill-current" />
             最短4日で納品可能
          </div>
          <h2 className="text-4xl font-bold tracking-tight text-white mb-4">
            明確な料金プラン。
          </h2>
          <p className="text-gray-400 text-lg">
            追加料金なしの明朗会計。<br className="hidden sm:block"/>
            ビジネスの規模に合わせて最適なプランをお選びください。
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
          {plans.map((plan, index) => {
             const Icon = plan.icon;
             return (
              <div
                key={plan.id}
                onClick={() => setSelectedPlan(index)}
                className="group relative bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-xl hover:shadow-blue-200/50 hover:border-blue-500/50 transition-all duration-300 cursor-pointer flex flex-col h-full overflow-hidden"
              >
                <div className={`absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none ${plan.color.split(" ")[0]}`}></div>

                <div className="relative mb-6">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${plan.color}`}>
                    <Icon size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">{plan.nameJa}</h3>
                  <div className="text-xs text-gray-500 font-bold uppercase tracking-wider mt-1">{plan.nameEn}</div>
                </div>

                <div className="relative mb-6 pb-6 border-b border-gray-100">
                  <div className="flex items-baseline gap-1">
                    <span className="text-3xl font-bold text-[#059669] tracking-tight" style={{ fontWeight: 700 }}>{plan.price}</span>
                    <span className="text-xs text-gray-500 font-bold" style={{ fontWeight: 600 }}>/ one-time</span>
                  </div>
                </div>

                <p className="relative text-sm text-gray-600 leading-relaxed mb-6 flex-grow">
                  {plan.desc}
                </p>

                <ul className="relative space-y-3 mb-8">
                  {plan.features.slice(0, 3).map((feature, i) => (
                    <li key={i} className="flex items-center gap-3 text-xs font-bold text-gray-500">
                      <Check size={14} className="text-[#0f172a] shrink-0" />
                      {feature}
                    </li>
                  ))}
                  {plan.features.length > 3 && (
                    <li className="text-xs text-gray-400 pl-7">+ more</li>
                  )}
                </ul>

                <div className="relative mt-auto">
                  <button className="w-full py-3 rounded-xl bg-[#059669] text-white text-sm font-bold group-hover:bg-emerald-600 transition-all duration-300 flex items-center justify-center gap-2 shadow-lg shadow-emerald-200" style={{ fontWeight: 700 }}>
                    詳細・サンプルを見る <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            );
          })}
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
                  className="absolute top-4 right-4 z-50 p-2 bg-white/80 backdrop-blur rounded-full hover:bg-white transition-colors shadow-sm hover:rotate-90 duration-300"
                >
                  <X size={20} className="text-gray-900" />
                </button>

                <div className="md:w-[350px] shrink-0 bg-gray-50 p-5 md:p-8 border-r border-gray-100 overflow-y-auto md:overflow-y-auto max-h-[25vh] md:max-h-full">
                  <div className="mb-4 md:mb-8">
                     <div className={`inline-flex p-3 rounded-xl mb-2 md:mb-4 ${plans[selectedPlan].color}`}>
                        {(() => {
                          const Icon = plans[selectedPlan].icon;
                          return <Icon size={24} />;
                        })()}
                     </div>
                    <h3 className="text-lg md:text-2xl font-bold text-gray-900 mb-1">{plans[selectedPlan].nameJa}</h3>
                    <div className="text-xs md:text-sm text-gray-500 font-bold uppercase tracking-wider">{plans[selectedPlan].nameEn}</div>
                  </div>

                  <div className="mb-4 md:mb-8">
                    <div className="text-2xl md:text-4xl font-bold text-gray-900 mb-2">{plans[selectedPlan].price}</div>
                    <p className="text-xs md:text-sm text-gray-600 leading-relaxed">
                      {plans[selectedPlan].desc}
                    </p>
                  </div>

                  <div className="mb-4 md:mb-8">
                    <h4 className="text-[10px] md:text-xs font-bold text-gray-900 uppercase tracking-wider mb-2 md:mb-4">含まれる機能</h4>
                    <ul className="space-y-2 md:space-y-3">
                      {plans[selectedPlan].features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-3 text-xs md:text-sm text-gray-600">
                          <Check size={16} className="text-[#0f172a] mt-0.5 shrink-0" />
                          <span className="font-medium">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <a 
                    href="#contact" 
                    onClick={() => setSelectedPlan(null)}
                    className="block w-full py-3 md:py-4 bg-[#059669] hover:bg-emerald-600 text-white font-bold rounded-xl text-center shadow-lg shadow-emerald-200 transition-all active:scale-[0.98] text-sm md:text-base"
                    style={{ fontWeight: 700 }}
                  >
                    このプランで相談する
                  </a>
                </div>

                <div className="flex-1 bg-slate-100 p-2 md:p-8 flex flex-col min-h-0 relative">
                  <div className="text-center mb-4 hidden md:block">
                    <span className="bg-white/50 backdrop-blur px-3 py-1 rounded-full text-xs font-bold text-gray-500 border border-gray-200/50">
                       インタラクティブ・プレビュー
                    </span>
                  </div>
                  
                  <div className="flex-1 min-h-0 relative h-full">
                    <MiniBrowser url={plans[selectedPlan].url} className="h-full w-full rounded-xl shadow-lg border border-gray-700" dark>
                      <div className="h-full w-full bg-slate-50 relative group">
                        <div className="absolute inset-0 overflow-y-auto custom-scrollbar -webkit-overflow-scrolling-touch">
                          {(() => {
                            const Component = plans[selectedPlan].component;
                            return <Component />;
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
