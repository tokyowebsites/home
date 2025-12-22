import { motion, AnimatePresence } from "motion/react";
import { ArrowRight, TrendingUp, Clock, DollarSign } from "lucide-react";
import { MiniBrowser } from "./interactive-showcase/MiniBrowser";
import { useRef, useState } from "react";

export function Hero() {
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const [currentView, setCurrentView] = useState<'home' | 'service'>('home');

  const handleNavClick = (view: 'home' | 'service') => {
    setCurrentView(view);
    if (scrollRef.current) scrollRef.current.scrollTop = 0;
  };

  const navigate = (view: 'home' | 'service') => {
    setCurrentView(view);
  };

  // --- Content Components for Fake Browser ---

  const HomeView = () => (
    <div className="h-full flex flex-col relative overflow-hidden">
      {/* Background Image with Semi-Transparent Overlay */}
      <div className="absolute inset-0 z-0">
        <motion.div 
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 10, ease: "easeOut" }}
          className="w-full h-full"
        >
          <img
            src="/tama-monorail.jpg"
            alt="Tokyo Cityscape"
            className="w-full h-full object-cover"
          />
        </motion.div>
        {/* Semi-transparent overlay for text readability */}
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Large Hero Branding Overlay - Cinematic Entrance */}
      <div className="relative z-10 flex-1 flex flex-col justify-center items-center text-center px-4 md:px-0">
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="mb-6 md:mb-8"
        >
          <div className="inline-flex items-center gap-2 mb-4 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-[10px] md:text-xs font-bold tracking-wider uppercase shadow-lg">
            <span className="w-2 h-2 rounded-full bg-[#059669] animate-pulse" />
            Tokyo Quality Global Standard
          </div>
          <h1 className="text-4xl md:text-7xl font-extrabold tracking-tighter text-white leading-tight drop-shadow-xl">
            <span style={{ fontFamily: 'Inter, sans-serif' }}>Tokyo</span>{' '}
            <span style={{ fontFamily: 'Playfair Display, serif' }} className="text-[#34d399]">Websites</span>
          </h1>
          <p className="mt-4 text-sm md:text-lg text-white/90 font-medium max-w-lg mx-auto leading-relaxed drop-shadow-md">
            立川発。実店舗の<span className="text-[#34d399] font-bold">デジタルブランド</span>を再定義する。
          </p>
        </motion.div>

        {/* Action Buttons */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex flex-row gap-3 md:gap-4 w-full max-w-sm px-4 md:px-0"
        >
          <button
            onClick={() => navigate("service")}
            className="flex-1 bg-white text-gray-900 h-12 md:h-14 rounded-full font-bold text-xs md:text-sm flex items-center justify-center gap-2 hover:bg-gray-100 transition-all active:scale-95 shadow-xl"
          >
            選ばれる理由
          </button>
          <a
            href="#contact"
            className="flex-1 bg-[#059669] text-white h-12 md:h-14 rounded-full font-bold text-xs md:text-sm flex items-center justify-center gap-2 hover:bg-emerald-600 transition-all active:scale-95 shadow-xl shadow-emerald-900/20"
          >
            無料相談 <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>
      </div>

      {/* Floating Glass Stats - Bottom */}
      <div className="relative z-10 p-4 md:p-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="grid grid-cols-3 gap-2 md:gap-4 max-w-3xl mx-auto"
        >
          {[
            { k: "+32%", l: "問い合わせ率" },
            { k: "+41%", l: "検索流入" },
            { k: "4Days", l: "最短納期" },
          ].map((x, i) => (
            <div
              key={i}
              className="bg-white/10 backdrop-blur-md border border-white/10 rounded-xl p-3 md:p-4 text-center text-white shadow-lg hover:bg-white/15 transition-colors"
            >
              <div className="text-xl md:text-2xl font-extrabold text-[#34d399] mb-1">{x.k}</div>
              <div className="text-[10px] md:text-xs font-bold text-white/80">{x.l}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );

  const ServiceView = () => (
    <div className="h-full flex flex-col px-4 py-6 md:px-8 md:py-10 overflow-y-auto">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-6 md:mb-8">
          <h2 className="text-xl md:text-3xl font-extrabold text-gray-900 mb-2">
            なぜ Tokyo Websites か？
          </h2>
          <p className="text-xs md:text-sm text-gray-600 font-semibold">
            選ばれる理由
          </p>
        </div>

        <div className="grid gap-3 md:gap-4 mb-6">
          {[
            { 
              i: TrendingUp, 
              t: "成果を最優先", 
              d: "見た目だけでなく、検索流入・問い合わせ率・来店予約まで改善。デジタルで実際に売上を伸ばします。" 
            },
            { 
              i: Clock, 
              t: "最短4日で納品", 
              d: "大手制作会社の半分以下の期間で公開可能。スピードを犠牲にせず、品質も妥協しません。" 
            },
            { 
              i: DollarSign, 
              t: "明朗会計・低価格", 
              d: "¥20,000〜の明確な料金体系。追加費用なし。東京の実店舗に特化することで、大手の1/3のコストを実現。" 
            },
          ].map((x, i) => (
            <div
              key={i}
              className="flex items-start gap-3 md:gap-4 p-3 md:p-4 rounded-xl border border-gray-200 bg-white shadow-sm hover:border-[#059669]/30 hover:shadow-md transition-all"
            >
              <div className="shrink-0 w-10 h-10 md:w-12 md:h-12 rounded-full bg-emerald-50 flex items-center justify-center">
                <x.i className="w-5 h-5 md:w-6 md:h-6 text-[#059669]" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-sm md:text-base font-bold text-gray-900 mb-1">
                  {x.t}
                </div>
                <div className="text-xs md:text-sm text-gray-600 leading-relaxed">
                  {x.d}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-4 md:p-6">
          <div className="text-sm md:text-base font-bold text-gray-900 mb-2">
            💼 実店舗のデジタル改革をサポート
          </div>
          <div className="text-xs md:text-sm text-gray-700 leading-relaxed">
            カフェ、美容室、クリニック、法律事務所など、東京の小規模実店舗に特化。
            競合と差をつけるブランディング + 検索で見つかる仕組みを、まとめて提供します。
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <section className="relative min-h-screen bg-gray-50 overflow-hidden">
      {/* Enhanced Animated Fluid Background - Green & Navy */}
      <div className="absolute inset-0 overflow-hidden">
        <div 
          className="animate-blob-1 absolute -top-[30%] -left-[20%] w-[90%] h-[90%] bg-gradient-to-br from-[#059669] via-emerald-500 to-transparent blur-[140px] opacity-50 mix-blend-multiply"
        />
        <div 
          className="animate-blob-2 absolute top-[10%] -right-[20%] w-[80%] h-[80%] bg-gradient-to-bl from-[#0f172a] via-[#1e40af] to-transparent blur-[140px] opacity-60 mix-blend-multiply"
        />
        <div 
          className="animate-blob-3 absolute bottom-[-20%] left-[20%] w-[60%] h-[60%] bg-white blur-[90px] opacity-70"
        />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.org/noise.svg')] opacity-30 brightness-100 contrast-150 mix-blend-overlay"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-6xl mx-auto"
        >
          <MiniBrowser url={`tokyowebsites.com/${currentView === 'home' ? '' : currentView}`} className="rounded-2xl shadow-2xl border-gray-700 bg-gray-900" dark>
            <div className="h-[450px] md:h-[700px] bg-white relative group">
              {/* Mobile: No scroll (static preview). Desktop: Scrollable but content switches. */}
              <div ref={scrollRef} className="h-full overflow-hidden custom-scrollbar scroll-smooth relative">
                
                {/* --- FAKE SITE CONTENT --- */}
                <div className="bg-white text-gray-900 font-sans relative min-h-full flex flex-col">
                  
                  {/* Fake Header */}
                  <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100 shrink-0">
                    <div className="max-w-5xl mx-auto px-4 md:px-6 h-14 md:h-16 flex items-center justify-between">
                      <div 
                        className="flex items-center gap-2 cursor-pointer"
                        onClick={() => handleNavClick('home')}
                      >
                        <div className="h-7 w-7 md:h-8 md:w-8 rounded-lg bg-[#059669] text-white flex items-center justify-center text-[10px] md:text-xs font-bold shadow-lg shadow-emerald-200">
                          TW
                        </div>
                      </div>

                      <nav className="hidden md:flex items-center gap-6 md:gap-8 text-xs md:text-sm text-gray-700" style={{ fontWeight: 600 }}>
                        <button
                          onClick={() => handleNavClick('service')}
                          className={`cursor-pointer transition-colors uppercase ${currentView === 'service' ? "text-[#059669]" : ""}`}
                        >
                          選ばれる理由
                        </button>
                      </nav>

                      <a
                        href="#contact"
                        className="px-3 py-1.5 md:px-5 md:py-2.5 text-white text-[10px] md:text-xs font-bold rounded-full transition-colors shadow-lg bg-[#059669] hover:bg-emerald-600 shadow-emerald-200"
                        style={{ fontWeight: 700 }}
                      >
                        無料相談
                      </a>
                    </div>
                  </header>

                  {/* Dynamic Content Area */}
                  <div className="flex-1 relative overflow-hidden">
                    <AnimatePresence mode="wait">
                      {currentView === 'home' && (
                        <motion.div key="home" exit={{ opacity: 0 }}>
                          <HomeView />
                        </motion.div>
                      )}
                      {currentView === 'service' && (
                        <motion.div key="service" exit={{ opacity: 0 }}>
                          <ServiceView />
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                </div>
                {/* --- END FAKE SITE --- */}

              </div>
              
              {/* Mobile overlay to indicate interactivity isn't scrolling */}
              <div className="md:hidden absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-white to-transparent pointer-events-none" />
            </div>
          </MiniBrowser>
        </motion.div>

        {/* Real CTA Below Browser */}
        <div className="mt-8 md:mt-12 text-center">
          <p className="text-xs md:text-sm text-gray-500 mb-4 md:mb-6 font-medium" style={{ fontWeight: 600 }}>東京の企業のデジタルブランドをサポートしています</p>
          <a
            href="#plans"
            className="inline-flex items-center gap-2 text-sm font-bold text-gray-900 border-b border-gray-900 pb-0.5 hover:text-[#059669] hover:border-[#059669] transition-colors"
            style={{ fontWeight: 700 }}
          >
            料金プランを見る <ArrowRight size={14} />
          </a>
        </div>
      </div>
    </section>
  );
}
