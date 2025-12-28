import { useState, useEffect, lazy, Suspense } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, Check, ArrowRight, Zap, FileText, Files, Building2, Sparkles, Loader2 } from "lucide-react";
import { MiniBrowser } from "./MiniBrowser";

const EntryPreview = lazy(() => import("./PlanPreviews").then(module => ({ default: module.EntryPreview })));
const StandardPreview = lazy(() => import("./PlanPreviews").then(module => ({ default: module.StandardPreview })));
const BusinessPreview = lazy(() => import("./PlanPreviews").then(module => ({ default: module.BusinessPreview })));
const PremiumPreview = lazy(() => import("./PlanPreviews").then(module => ({ default: module.PremiumPreview })));

// --- Plans Data ---

const plans = [
  {
    id: "entry",
    nameJa: "エントリー",
    nameEn: "Entry Plan",
    price: "¥20,000",
    desc: "名刺代わりの1ページ。スマホ対応で、まずはWeb上の拠点を作りたい方に。",
    features: ["1ページ構成", "スマホ対応", "Googleマップ", "SNSリンク", "お問い合わせフォーム"],
    url: "tokyowebsites.com/entry-sample",
    component: EntryPreview,
    icon: FileText,
    color: "bg-emerald-50 text-emerald-900",
  },
  {
    id: "standard",
    nameJa: "スタンダード",
    nameEn: "Standard Plan",
    price: "¥70,000",
    desc: "自分たちでニュースやブログを更新できるプランです。お店のファンを増やしたい方に。",
    features: ["ブログ機能（更新機能）", "検索対策（SEO）", "多言語対応（準備）", "ニュースレター", "優先サポート"],
    url: "tokyowebsites.com/standard-sample",
    component: StandardPreview,
    icon: Building2,
    color: "bg-emerald-50 text-emerald-900",
  },
  {
    id: "premium",
    nameJa: "プレミアム",
    nameEn: "Premium Plan",
    price: "¥100,000~",
    desc: "ネットショップや予約システムなど、高度な機能でビジネスを加速させます。",
    features: ["ネットショップ / 予約", "アニメーション", "外部システム連携", "ブランド戦略", "24時間サポート"],
    url: "tokyowebsites.com/premium-sample",
    component: BusinessPreview,
    icon: Sparkles,
    color: "bg-emerald-50 text-emerald-900",
  },
];

// --- Plan Card Component ---
const PlanCard = ({ plan, index, onClick }: { plan: typeof plans[0]; index: number; onClick: () => void }) => {
  const Icon = plan.icon;
  const [expanded, setExpanded] = useState(false);

  return (
    <div
      onClick={onClick}
      className="group relative bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-xl hover:shadow-blue-200/50 hover:border-blue-500/50 transition-all duration-300 cursor-pointer flex flex-col h-auto min-h-0 overflow-visible"
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

      <p className="relative text-sm text-gray-600 leading-relaxed mb-6">
        {plan.desc}
      </p>

      <ul className="relative space-y-3 mb-8 flex-grow">
        {(expanded ? plan.features : plan.features.slice(0, 3)).map((feature, i) => (
          <li key={i} className="flex items-center gap-3 text-xs font-bold text-gray-500">
            <Check size={14} className="text-[#0f172a] shrink-0" />
            {feature}
          </li>
        ))}
        {plan.features.length > 3 && (
          <li
            className="text-xs text-gray-400 pl-7 cursor-pointer hover:text-emerald-600 transition-colors flex items-center gap-1"
            onClick={(e) => {
              e.stopPropagation();
              setExpanded(!expanded);
            }}
          >
            {expanded ? "- less" : "+ more"}
          </li>
        )}
      </ul>

      <div className="relative mt-auto">
        <button className="w-full py-3 rounded-xl bg-[#059669] text-white text-sm font-bold group-hover:bg-emerald-600 transition-all duration-300 flex items-center justify-center gap-2 shadow-lg shadow-emerald-200" style={{ fontWeight: 700 }}>
          詳細・サンプルを見る <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </div>
  );
};

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
          <p className="text-gray-400 text-lg mb-6">
            追加料金なしの明朗会計。<br className="hidden sm:block"/>
            ビジネスの規模に合わせて最適なプランをお選びください。
          </p>
          
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-gray-300 text-xs font-medium">
            <span>🌐</span>
            <span>日本語・英語・韓国語・中国語に対応しています</span>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 relative z-10 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <PlanCard 
              key={plan.id} 
              plan={plan} 
              index={index} 
              onClick={() => setSelectedPlan(index)} 
            />
          ))}
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
                        相談する
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
                    <div className="text-3xl font-bold text-[#059669] mb-2">{plans[selectedPlan].price}</div>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {plans[selectedPlan].desc}
                    </p>
                  </div>

                  <div className="mb-6 flex-1">
                    <h4 className="text-xs font-bold text-gray-900 uppercase tracking-wider mb-3">含まれる機能</h4>
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
                    このプランで相談する
                  </a>
                </div>

                {/* Preview area - takes remaining space */}
                <div className="flex-1 bg-slate-200 p-2 md:p-6 flex flex-col min-h-0 relative">
                  <div className="text-center mb-2 hidden md:block">
                    <span className="bg-white/70 backdrop-blur px-3 py-1 rounded-full text-[10px] font-bold text-gray-500 border border-gray-200/50">
                      サンプルプレビュー
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
