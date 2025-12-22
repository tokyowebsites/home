import { motion, AnimatePresence } from "motion/react";
import { Zap, Smartphone, Search, MousePointer2, ArrowRight, CheckCircle, Briefcase, Mail, Info, FileText } from "lucide-react";
import { MiniBrowser } from "./interactive-showcase/MiniBrowser";
import { useRef, useState } from "react";

export function Hero() {
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const [currentView, setCurrentView] = useState<'home' | 'service' | 'works' | 'about' | 'contact'>('home');
  const [buttonClicked, setButtonClicked] = useState(false);
  const [ctaClicked, setCtaClicked] = useState(false);

  const handleNavClick = (view: 'home' | 'service' | 'works' | 'about' | 'contact') => {
    setCurrentView(view);
    // Reset scroll on view change
    if (scrollRef.current) scrollRef.current.scrollTop = 0;
  };

  const handleButtonClick = () => {
    setButtonClicked(true);
    setTimeout(() => {
      setButtonClicked(false);
      setCurrentView('contact'); // Auto-navigate to contact
    }, 1500);
  };

  const handleCtaClick = () => {
    setCtaClicked(true);
    setTimeout(() => {
      setCtaClicked(false);
      setCurrentView('works'); // Auto-navigate to works
    }, 1500);
  };

  // --- Content Components for Fake Browser ---

  const HomeView = () => (
    <div className="max-w-4xl mx-auto text-center relative z-10 pt-12 pb-16 md:pt-24 md:pb-32 px-4 md:px-6">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
        <h1 className="text-3xl md:text-7xl font-extrabold tracking-tight mb-6 md:mb-8 leading-[1.1]" style={{ fontWeight: 700 }}>
          <span className="block"><span className="text-[#059669]">新時代</span><span className="text-[#0f172a]">の</span></span>
          <span className="block"><span className="text-[#059669]">ウェブコンサル</span><span className="text-[#0f172a]">。</span></span>
        </h1>
        
        <p className="text-xs md:text-lg text-gray-600 max-w-2xl mx-auto mb-8 leading-relaxed font-medium">
          “見た目が良い”だけで終わらせません。<br className="md:hidden" />
          <span className="text-gray-900 font-bold">検索で見つかる</span>・
          <span className="text-gray-900 font-bold">信頼が伝わる</span>。
        </p>

        <div className="relative flex flex-row items-center justify-center gap-3 md:gap-4">
          <motion.button 
            onClick={handleButtonClick}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="px-5 py-3 md:px-8 md:py-4 bg-[#059669] text-white font-bold rounded-full shadow-xl shadow-emerald-200 hover:shadow-emerald-300 transition-all duration-300 flex items-center gap-2 group text-xs md:text-sm"
            style={{ fontWeight: 700 }}
          >
            {buttonClicked ? <CheckCircle size={16} /> : (
              <>
                開始 <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </>
            )}
          </motion.button>
          <motion.button 
            onClick={handleCtaClick}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-5 py-3 md:px-8 md:py-4 bg-white text-gray-900 font-bold rounded-full border border-gray-200 hover:border-[#059669] hover:text-[#059669] transition-all duration-300 text-xs md:text-sm"
            style={{ fontWeight: 600 }}
          >
            実績
          </motion.button>
        </div>
      </motion.div>
    </div>
  );

  const ServiceView = () => (
    <div className="max-w-5xl mx-auto px-6 py-12 md:py-20">
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center mb-10">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">Our Services</h2>
        <p className="text-gray-500 text-sm">お客様のビジネスに最適なソリューションを。</p>
      </motion.div>
      <div className="grid md:grid-cols-3 gap-6">
        {[
          { icon: Zap, title: "Speed", desc: "圧倒的な表示速度で離脱を防ぎます。" },
          { icon: Smartphone, title: "Mobile", desc: "スマホファーストの設計思想。" },
          { icon: Search, title: "SEO", desc: "検索エンジン最適化を標準装備。" },
        ].map((item, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="bg-gray-50 p-6 rounded-xl border border-gray-100"
          >
            <item.icon className="w-8 h-8 text-[#059669] mb-4" />
            <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
            <p className="text-xs text-gray-600 leading-relaxed">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );

  const WorksView = () => (
    <div className="max-w-5xl mx-auto px-6 py-12 md:py-20">
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center mb-10">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">Selected Works</h2>
        <p className="text-gray-500 text-sm">制作実績の一部をご紹介します。</p>
      </motion.div>
      <div className="grid grid-cols-2 gap-4">
        {[1, 2, 3, 4].map((i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.1 }}
            className="aspect-video bg-gray-100 rounded-lg overflow-hidden relative group cursor-pointer"
          >
             <div className="absolute inset-0 flex items-center justify-center text-gray-400 font-bold text-xs uppercase bg-gray-200">
               Project 0{i}
             </div>
             <div className="absolute inset-0 bg-[#059669]/90 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white font-bold text-sm">
               View Case
             </div>
          </motion.div>
        ))}
      </div>
    </div>
  );

  const AboutView = () => (
    <div className="max-w-4xl mx-auto px-6 py-12 md:py-20 text-center">
       <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}>
        <h2 className="text-2xl md:text-3xl font-bold mb-8">About Us</h2>
        <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100 inline-block text-left">
          <div className="space-y-4 text-sm text-gray-600">
             <div className="flex gap-4">
               <span className="font-bold text-gray-900 w-24">社名</span>
               <span>Tokyo Websites</span>
             </div>
             <div className="flex gap-4">
               <span className="font-bold text-gray-900 w-24">設立</span>
               <span>2025年</span>
             </div>
             <div className="flex gap-4">
               <span className="font-bold text-gray-900 w-24">所在地</span>
               <span>東京都立川市</span>
             </div>
             <div className="flex gap-4">
               <span className="font-bold text-gray-900 w-24">事業内容</span>
               <span>ウェブサイト制作、デジタルコンサルティング</span>
             </div>
          </div>
        </div>
       </motion.div>
    </div>
  );

  const ContactView = () => (
    <div className="max-w-md mx-auto px-6 py-12 md:py-20">
      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="text-center">
        <Mail className="w-12 h-12 text-[#059669] mx-auto mb-6" />
        <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
        <p className="text-gray-500 text-sm mb-8">お気軽にご相談ください。</p>
        <button className="w-full py-3 bg-[#059669] text-white font-bold rounded-xl shadow-lg hover:bg-emerald-600 transition-colors">
          フォームを開く
        </button>
      </motion.div>
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

                      <nav className="hidden md:flex items-center gap-8 text-sm text-gray-700" style={{ fontWeight: 600 }}>
                        {[
                          { id: 'service', label: 'サービス' },
                          { id: 'works', label: '実績' },
                          { id: 'about', label: '会社概要' }
                        ].map((item) => (
                           <motion.button
                            key={item.id}
                            onClick={() => handleNavClick(item.id as any)}
                            whileHover={{ scale: 1.05, color: "#059669" }}
                            whileTap={{ scale: 0.95 }}
                            className={`cursor-pointer transition-colors uppercase text-xs ${currentView === item.id ? "text-[#059669]" : ""}`}
                          >
                            {item.label}
                          </motion.button>
                        ))}
                      </nav>

                      <motion.button
                        onClick={() => handleNavClick("contact")}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className={`px-4 py-2 md:px-5 md:py-2.5 text-white text-[10px] md:text-xs font-bold rounded-full transition-colors shadow-lg ${currentView === 'contact' ? 'bg-gray-900' : 'bg-[#059669] hover:bg-emerald-600 shadow-emerald-200'}`}
                        style={{ fontWeight: 700 }}
                      >
                        {currentView === "contact" ? "お問い合わせ" : "無料相談"}
                      </motion.button>
                    </div>
                  </header>

                  {/* Dynamic Content Area */}
                  <div className="flex-1 relative overflow-hidden">
                    <AnimatePresence mode="wait">
                      {currentView === 'home' && (
                        <motion.div key="home" className="h-full" exit={{ opacity: 0 }}>
                           <HomeView />
                           {/* Features Grid (Home Only, Desktop Only) */}
                           <div className="hidden md:block bg-gray-50 py-24 px-6 border-t border-gray-100">
                             <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8">
                               {[
                                 { icon: Zap, title: "Speed", desc: "圧倒的なパフォーマンス。", price: "0.8s" },
                                 { icon: Smartphone, title: "Mobile", desc: "スマホ完全対応。", price: "100%" },
                                 { icon: Search, title: "SEO", desc: "検索上位表示。", price: "Rank 1" },
                               ].map((feature, i) => (
                                 <div key={i} className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
                                   <feature.icon className="w-8 h-8 text-[#059669] mb-4" />
                                   <h3 className="font-bold text-gray-900">{feature.title}</h3>
                                   <p className="text-xs text-gray-500 mt-2">{feature.desc}</p>
                                   <div className="text-lg font-bold text-[#059669] mt-2">{feature.price}</div>
                                 </div>
                               ))}
                             </div>
                           </div>
                        </motion.div>
                      )}
                      {currentView === 'service' && <motion.div key="service" exit={{ opacity: 0 }}><ServiceView /></motion.div>}
                      {currentView === 'works' && <motion.div key="works" exit={{ opacity: 0 }}><WorksView /></motion.div>}
                      {currentView === 'about' && <motion.div key="about" exit={{ opacity: 0 }}><AboutView /></motion.div>}
                      {currentView === 'contact' && <motion.div key="contact" exit={{ opacity: 0 }}><ContactView /></motion.div>}
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
          <p className="text-xs md:text-sm text-gray-500 mb-4 md:mb-6 font-medium" style={{ fontWeight: 600 }}>Helping Tokyo companies' digital image since 2025</p>
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
