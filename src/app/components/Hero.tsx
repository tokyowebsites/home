import { motion } from "motion/react";
import { Zap, Smartphone, Search, MousePointer2, ArrowRight, CheckCircle } from "lucide-react";
import { MiniBrowser } from "./interactive-showcase/MiniBrowser";
import { useRef, useState } from "react";

export function Hero() {
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const detailsRef = useRef<HTMLDivElement | null>(null);
  const [activeNav, setActiveNav] = useState<string | null>(null);
  const [buttonClicked, setButtonClicked] = useState(false);
  const [ctaClicked, setCtaClicked] = useState(false);

  const scrollToDetails = () => {
    detailsRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const handleNavClick = (item: string) => {
    setActiveNav(item);
    setTimeout(() => setActiveNav(null), 1000);
  };

  const handleButtonClick = () => {
    setButtonClicked(true);
    setTimeout(() => setButtonClicked(false), 2000);
  };

  const handleCtaClick = () => {
    setCtaClicked(true);
    setTimeout(() => setCtaClicked(false), 2000);
  };

  return (
    <section className="relative min-h-screen bg-gray-50 overflow-hidden">
      {/* Enhanced Animated Fluid Background - Green & Navy */}
      <div className="absolute inset-0 overflow-hidden">
        <div 
          className="animate-blob-1 absolute -top-[30%] -left-[20%] w-[90%] h-[90%] bg-gradient-to-br from-[#059669] via-emerald-500 to-transparent blur-[140px] opacity-50 mix-blend-multiply"
        />
        <div 
          className="animate-blob-2 absolute top-[10%] -right-[20%] w-[80%] h-[80%] bg-gradient-to-bl from-[#0f172a] via-[#1e40af] to-transparent blur-[120px] opacity-60 mix-blend-multiply"
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
          <MiniBrowser url="tokyowebsites.com/home" className="rounded-2xl shadow-2xl border-gray-700 bg-gray-900" dark>
            <div className="h-[700px] bg-white relative">
              <div ref={scrollRef} className="h-full overflow-y-auto custom-scrollbar scroll-smooth">
                
                {/* --- FAKE SITE CONTENT --- */}
                <div className="bg-white text-gray-900 font-sans relative">
                  
                  {/* Fake Header (no brand name text) */}
                  <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100">
                    <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="h-8 w-8 rounded-lg bg-[#059669] text-white flex items-center justify-center text-xs font-bold shadow-lg shadow-emerald-200">
                          TW
                        </div>
                      </div>

                      <nav className="hidden md:flex items-center gap-8 text-sm text-gray-700" style={{ fontWeight: 600 }}>
                        <motion.button
                          onClick={() => handleNavClick("service")}
                          whileHover={{ scale: 1.05, color: "#059669" }}
                          whileTap={{ scale: 0.95 }}
                          className={`cursor-pointer transition-colors ${activeNav === "service" ? "text-[#059669]" : ""}`}
                        >
                          サービス
                        </motion.button>
                        <motion.button
                          onClick={() => handleNavClick("works")}
                          whileHover={{ scale: 1.05, color: "#059669" }}
                          whileTap={{ scale: 0.95 }}
                          className={`cursor-pointer transition-colors ${activeNav === "works" ? "text-[#059669]" : ""}`}
                        >
                          実績
                        </motion.button>
                        <motion.button
                          onClick={() => handleNavClick("about")}
                          whileHover={{ scale: 1.05, color: "#059669" }}
                          whileTap={{ scale: 0.95 }}
                          className={`cursor-pointer transition-colors ${activeNav === "about" ? "text-[#059669]" : ""}`}
                        >
                          料金
                        </motion.button>
                      </nav>

                      <motion.button
                        onClick={() => handleNavClick("contact")}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-5 py-2.5 bg-[#059669] text-white text-xs font-bold rounded-full hover:bg-emerald-600 transition-colors shadow-lg shadow-emerald-200"
                        style={{ fontWeight: 700 }}
                      >
                        {activeNav === "contact" ? "✓ 送信済み" : "無料相談"}
                      </motion.button>
                    </div>
                  </header>

                  {/* Fake Hero Section */}
                  <div className="relative pt-24 pb-32 px-6 overflow-hidden">
                    <div className="max-w-4xl mx-auto text-center relative z-10">
                      
                      <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-8 leading-[1.1]" style={{ fontWeight: 700 }}>
                        <span className="block"><span className="text-[#059669]">新時代</span><span className="text-[#0f172a]">の</span></span>
                        <span className="block"><span className="text-[#059669]">ウェブコンサルティング</span><span className="text-[#0f172a]">。</span></span>
                      </h1>
                      
                      <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto mb-8 leading-relaxed" style={{ fontWeight: 600 }}>
                        “見た目が良い”だけで終わらせません。<br />
                        <span className="text-gray-900" style={{ fontWeight: 700 }}>検索で見つかる</span>・
                        <span className="text-gray-900" style={{ fontWeight: 700 }}>問い合わせが増える</span>・
                        <span className="text-gray-900" style={{ fontWeight: 700 }}>信頼が伝わる</span>。\n                        <br />
                        東京の小規模実店舗に特化した、<span className="text-[#059669]" style={{ fontWeight: 700 }}>新時代のウェブコンサル</span>です。
                      </p>

                      <div className="relative flex flex-col sm:flex-row items-center justify-center gap-4">
                        <motion.button 
                          onClick={handleButtonClick}
                          whileHover={{ scale: 1.05, y: -2 }}
                          whileTap={{ scale: 0.95 }}
                          className="px-8 py-4 bg-[#059669] text-white font-bold rounded-full shadow-xl shadow-emerald-200 hover:shadow-emerald-300 transition-all duration-300 flex items-center gap-2 group"
                          style={{ fontWeight: 700 }}
                        >
                          {buttonClicked ? (
                            <>
                              <CheckCircle size={18} /> 送信完了
                            </>
                          ) : (
                            <>
                              プロジェクトを開始 <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                            </>
                          )}
                        </motion.button>
                        <motion.button 
                          onClick={handleCtaClick}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="px-8 py-4 bg-white text-gray-900 font-bold rounded-full border border-gray-200 hover:border-[#059669] hover:text-[#059669] transition-all duration-300"
                          style={{ fontWeight: 600 }}
                        >
                          {ctaClicked ? '✓ 実績ページへ' : '制作実績を見る'}
                        </motion.button>
                      </div>

                      {/* Outcome strip: shows \"digital presence\" impact when interacting */}
                      <div className="mt-8 grid grid-cols-3 gap-3 max-w-2xl mx-auto">
                        {[
                          { kpi: "+32%", label: "問い合わせ率", hint: "導線/CTA最適化" },
                          { kpi: "+41%", label: "検索流入", hint: "構造/SEO改善" },
                          { kpi: "2.1x", label: "来店予約", hint: "スマホ導線強化" },
                        ].map((x, i) => (
                          <div key={i} className="bg-white rounded-2xl border border-gray-200 p-4 shadow-sm">
                            <div className="text-lg text-[#059669]" style={{ fontWeight: 800 }}>{x.kpi}</div>
                            <div className="text-xs text-gray-900" style={{ fontWeight: 700 }}>{x.label}</div>
                            <div className="text-[10px] text-gray-600 mt-1" style={{ fontWeight: 600 }}>{x.hint}</div>
                          </div>
                        ))}
                      </div>

                      {/* Persistent roaming cursor (desktop only) */}
                      <motion.div
                        className="hidden md:block absolute inset-0 pointer-events-none z-50"
                        animate={{
                          x: ["10%", "72%", "72%", "20%", "48%"],
                          y: ["12%", "20%", "58%", "62%", "38%"],
                        }}
                        transition={{
                          duration: 7,
                          repeat: Infinity,
                          ease: "easeInOut",
                          times: [0, 0.22, 0.48, 0.72, 1],
                        }}
                      >
                        <div className="relative">
                          <MousePointer2 className="w-7 h-7 text-black fill-black drop-shadow-md" />
                          <motion.div
                            className="absolute -top-3 -left-3 w-10 h-10 rounded-full bg-[#059669]/25"
                            animate={{ scale: [0.7, 1.3], opacity: [0.55, 0] }}
                            transition={{ duration: 0.9, repeat: Infinity, ease: "easeOut" }}
                          />
                        </div>
                      </motion.div>
                    </div>
                  </div>

                  {/* Fake Features Grid */}
                  <div ref={detailsRef} className="bg-gray-50 py-24 px-6 border-t border-gray-100 relative z-10">
                    <div className="max-w-5xl mx-auto">
                      <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold mb-4 text-gray-900" style={{ fontWeight: 700 }}>
                          Why{" "}
                          <span style={{ fontFamily: "Inter, sans-serif", fontWeight: 700 }}>Tokyo</span>{" "}
                          <span style={{ fontFamily: "Playfair Display, serif", fontWeight: 700 }}>Websites</span>
                          ?
                        </h2>
                        <p className="text-gray-600 text-sm font-medium" style={{ fontWeight: 600 }}>
                          選ばれるには理由があります。
                        </p>
                      </div>

                      <div className="grid md:grid-cols-3 gap-8">
                        {[
                          { icon: Zap, title: "Speed", desc: "ユーザーを待たせない、圧倒的なパフォーマンス。", price: "0.8秒" },
                          { icon: Smartphone, title: "Mobile First", desc: "スマホでの体験を最優先に設計。", price: "100%" },
                          { icon: Search, title: "SEO Ready", desc: "検索エンジンに好かれる構造で構築。", price: "上位表示" },
                        ].map((feature, i) => (
                          <motion.div 
                            key={i} 
                            whileHover={{ y: -4, scale: 1.02 }}
                            className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300 cursor-pointer"
                          >
                            <div className="w-12 h-12 bg-emerald-50 rounded-xl flex items-center justify-center mb-6 text-[#059669]">
                              <feature.icon size={24} />
                            </div>
                            <h3 className="font-bold text-lg mb-2 text-gray-900" style={{ fontWeight: 700 }}>{feature.title}</h3>
                            <p className="text-sm text-gray-500 leading-relaxed font-medium mb-3" style={{ fontWeight: 600 }}>{feature.desc}</p>
                            <div className="text-lg font-bold text-[#059669]" style={{ fontWeight: 700 }}>{feature.price}</div>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </div>

                </div>
                {/* --- END FAKE SITE --- */}

              </div>
            </div>
          </MiniBrowser>
        </motion.div>

        {/* Real CTA Below Browser */}
        <div className="mt-12 text-center">
          <p className="text-sm text-gray-500 mb-6 font-medium" style={{ fontWeight: 600 }}>Helping Tokyo companies' digital image since 2025</p>
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
