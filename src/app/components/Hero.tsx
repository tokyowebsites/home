import React, { useMemo, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import {
  ArrowLeft,
  ArrowRight,
  Building2,
  CheckCircle,
  FileText,
  Home,
  Mail,
  MousePointer2,
  Phone,
  Sparkles,
  Smartphone,
  Cpu,
  Scissors,
  Zap,
} from "lucide-react";

import { MiniBrowser } from "./interactive-showcase/MiniBrowser";
import { useTranslation } from "../lib/TranslationContext";

type HeroView = "home" | "service" | "works" | "about" | "contact";

export function Hero() {
  const reduceMotion = useReducedMotion();
  const viewportRef = useRef<HTMLDivElement | null>(null);
  const [currentView, setCurrentView] = useState<HeroView>("home");
  const [submitting, setSubmitting] = useState(false);
  const { t } = useTranslation();

  const tabs = useMemo(
    () =>
      [
        { id: "home" as const, label: t.home, icon: Home },
        { id: "service" as const, label: t.strengths, icon: Sparkles },
      ] as const,
    [t],
  );

  const navigate = (view: HeroView) => {
    setCurrentView(view);
    if (viewportRef.current) viewportRef.current.scrollTop = 0;
  };

  const HomeView = () => (
    <div className="h-full w-full flex flex-col relative overflow-hidden group">
      {/* Background Gradient */}
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a]">
        {/* Subtle animated gradient overlay */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
          className="absolute inset-0 bg-gradient-to-br from-emerald-900/20 via-transparent to-[#059669]/10"
        />
      </div>

      {/* Large Hero Branding Overlay */}
      <div className="relative z-10 flex-1 flex flex-col justify-center items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="mb-4 md:mb-8 w-full"
        >
          <div className="flex items-center justify-center mb-3 md:mb-4 w-full">
            <h1>
              <img 
                src="/images/tokyo-websites-logo.png" 
                alt="Tokyo Websites - Web Design & Digital Branding in Tachikawa" 
                className="w-[85vw] max-w-[240px] sm:max-w-[450px] md:max-w-[600px] lg:max-w-[700px] h-auto drop-shadow-2xl"
                style={{ objectFit: 'contain', maxHeight: 'min(180px, 25vh)' }}
                loading="eager"
                decoding="async"
              />
            </h1>
          </div>
          <p className="mt-1 md:mt-3 text-[10px] md:text-sm text-[#5C81D9] font-bold tracking-wide uppercase">
            {t.slogan}
          </p>
          <p className="mt-2 md:mt-6 text-xs md:text-lg text-white/90 font-medium max-w-xl mx-auto leading-tight md:leading-relaxed drop-shadow-md px-2">
            {t.heroSubtitle}<span className="text-[#5C81D9] font-bold">{t.heroSubtitleHighlight}</span>{t.heroSubtitle2}<br className="hidden md:block"/>
            <span className="text-[10px] md:text-sm opacity-80 mt-1 md:mt-2 block font-bold">{t.heroDelivery}</span>
          </p>
        </motion.div>

        {/* Action Buttons */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex flex-col sm:flex-row gap-2 sm:gap-4 w-full max-w-2xl px-4 md:px-0 relative"
        >
          <a
            href="#plans"
            className="w-full sm:flex-1 bg-[#059669] text-white h-11 sm:h-14 rounded-full font-bold text-xs sm:text-sm flex items-center justify-center gap-2 hover:bg-emerald-600 transition-all active:scale-95 shadow-xl border-2 border-[#059669]/60"
            style={{ fontWeight: 700 }}
          >
            {t.viewPlans} <ArrowRight className="w-4 h-4" />
          </a>
          
          <div className="flex flex-row gap-2 sm:contents w-full">
            <button
              onClick={() => navigate("service")}
              className="flex-1 bg-white text-gray-900 h-11 sm:h-14 rounded-full font-bold text-[10px] sm:text-sm flex items-center justify-center gap-1 sm:gap-2 hover:bg-gray-100 transition-all active:scale-95 shadow-xl border-2 border-[#5C81D9]"
            >
              {t.whyCheap}
            </button>

            <button
              onClick={() => {
                const contactSection = document.getElementById('contact');
                if(contactSection) contactSection.scrollIntoView({ behavior: 'smooth' });
              }}
              className="flex-1 bg-[#5C81D9] text-white h-11 sm:h-14 rounded-full font-bold text-[10px] sm:text-sm flex items-center justify-center gap-1 sm:gap-2 hover:bg-[#4a6fc7] transition-all active:scale-95 shadow-xl"
            >
              {t.freeConsultation} <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Fake Cursor Animation */}
          <motion.div
            className="absolute z-50 pointer-events-none"
            initial={{ opacity: 0, x: 100, y: 100 }}
            animate={{ 
              opacity: [0, 1, 1, 0],
              x: [60, 40, 40], // Move towards button
              y: [60, 20, 20],
              scale: [1, 1, 0.9, 1] // Click effect
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              repeatDelay: 2,
              ease: "easeInOut",
              times: [0, 0.2, 0.8, 1]
            }}
          >
            <MousePointer2 className="w-6 h-6 text-black fill-white drop-shadow-xl" />
            <motion.div
              className="absolute -top-2 -left-2 w-8 h-8 rounded-full bg-[#5C81D9]/30"
              animate={{ scale: [0, 1.5], opacity: [0, 0.8, 0] }}
              transition={{ duration: 0.5, delay: 2.2, repeat: Infinity, repeatDelay: 4.5 }}
            />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );

  const ServiceView = () => {
    const { t } = useTranslation();
    return (
      <div className="h-full flex flex-col px-4 py-4 md:px-12 md:py-12 overflow-y-auto">
        <div className="flex items-center justify-between mb-3 md:mb-6">
          <div className="text-left">
            <h2 className="text-base md:text-4xl font-extrabold text-gray-900 mb-1 md:mb-2 leading-tight">
              {t.serviceTitle}<br/><span className="text-[#059669]">{t.serviceTitleHighlight}</span>{t.serviceTitle2}
            </h2>
            <p className="text-[10px] md:text-base text-gray-600 font-medium max-w-2xl leading-tight md:leading-relaxed">
              {t.serviceDesc}<br className="hidden md:block"/>
              {t.serviceDesc2}
            </p>
          </div>

          <button
            onClick={() => navigate("home")}
            className="hidden md:inline-flex items-center gap-1 px-3 py-1.5 text-xs font-bold text-gray-700 rounded-full border border-gray-200 hover:bg-gray-100 transition-colors"
          >
            {t.back}
          </button>
        </div>

        {/* Why cheap / affordability explanation */}
        <div className="bg-white border border-emerald-100 rounded-2xl p-3 md:p-5 shadow-sm mb-3 md:mb-6">
          <div className="flex items-start gap-3 mb-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center font-bold text-sm shrink-0">
              ¥
            </div>
            <div>
              <div className="text-sm md:text-lg font-extrabold text-gray-900 mb-1">{t.whyCheap}</div>
              <p className="text-[11px] md:text-sm text-gray-700 font-semibold leading-snug">
                {t.whyCheapIntro}
              </p>
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-2 md:gap-4">
            {[t.whyCheapPoint1, t.whyCheapPoint2, t.whyCheapPoint3].map((point, idx) => (
              <div key={idx} className="flex items-start gap-2 p-2.5 md:p-3 rounded-xl bg-emerald-50 border border-emerald-100">
                <div className="mt-0.5 w-2 h-2 rounded-full bg-emerald-500 shrink-0" />
                <div className="text-[11px] md:text-sm text-gray-800 font-bold leading-snug">{point}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-2 md:gap-6 max-w-5xl mx-auto w-full mb-2 md:mb-8">
          <div className="bg-indigo-50 border border-indigo-100 p-2 md:p-6 rounded-xl md:rounded-2xl flex flex-col">
            <Smartphone className="w-4 h-4 md:w-8 md:h-8 text-indigo-600 mb-1 md:mb-3 shrink-0" />
            <h3 className="font-bold text-gray-900 mb-0.5 md:mb-2 text-xs md:text-base shrink-0 leading-tight">{t.serviceFeature1Title}</h3>
            <p className="text-[9px] md:text-sm text-gray-600 leading-tight md:leading-relaxed">
              {t.serviceFeature1Desc}
            </p>
          </div>
          <div className="bg-emerald-50 border border-emerald-100 p-2 md:p-6 rounded-xl md:rounded-2xl flex flex-col">
            <Cpu className="w-4 h-4 md:w-8 md:h-8 text-[#059669] mb-1 md:mb-3 shrink-0" />
            <h3 className="font-bold text-gray-900 mb-0.5 md:mb-2 text-xs md:text-base shrink-0 leading-tight">{t.serviceFeature2Title}</h3>
            <p className="text-[9px] md:text-sm text-gray-600 leading-tight md:leading-relaxed">
              {t.serviceFeature2Desc}
            </p>
          </div>
          <div className="bg-slate-50 border border-slate-100 p-2 md:p-6 rounded-xl md:rounded-2xl flex flex-col">
            <Scissors className="w-4 h-4 md:w-8 md:h-8 text-slate-700 mb-1 md:mb-3 shrink-0" />
            <h3 className="font-bold text-gray-900 mb-0.5 md:mb-2 text-xs md:text-base shrink-0 leading-tight">{t.serviceFeature3Title}</h3>
            <p className="text-[9px] md:text-sm text-gray-600 leading-tight md:leading-relaxed">
              {t.serviceFeature3Desc}
            </p>
          </div>
        </div>
      </div>
    );
  };

  const WorksView = () => (
    <div className="h-full flex flex-col px-4 py-3 md:px-8 md:py-8">
      <div className="shrink-0 flex items-end justify-between gap-3">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-50 text-slate-800 border border-slate-200 text-[10px] md:text-xs font-bold">
            <FileText className="w-4 h-4" />
            実績（サンプル）
          </div>
          <div className="mt-2 text-xl md:text-3xl font-extrabold text-gray-900">
            業種別に「効く」形。
          </div>
          <div className="mt-1 text-xs md:text-sm text-gray-600 font-semibold">
            見た目より、成果が出る情報設計が主役です。
          </div>
        </div>
        <button
          onClick={() => navigate("contact")}
          className="hidden md:inline-flex items-center gap-2 rounded-full bg-[#059669] text-white px-5 py-2 text-xs font-bold shadow-lg shadow-emerald-200 hover:bg-emerald-600 transition-colors"
        >
          相談する <ArrowRight className="w-4 h-4" />
        </button>
      </div>

      <div className="mt-2 md:mt-6 grid grid-cols-2 gap-3 md:gap-4 flex-1 min-h-0">
        {[
          { tag: "リラクゼーション", title: "Ren Thai Massage", sub: "岐阜県多治見市" },
          { tag: "飲食店", title: "Sakura Bistro", sub: "東京都立川市" },
          { tag: "士業", title: "Law Office K", sub: "東京都新宿区" },
          { tag: "IT", title: "TechStart Inc.", sub: "東京都渋谷区" },
          { tag: "カフェ", title: "Green Leaf Cafe", sub: "埼玉県所沢市" },
        ].map((w, i) => (
          <button
            key={w.title}
            onClick={() => navigate("contact")}
            className="group text-left rounded-2xl border border-gray-200 bg-white p-3 md:p-5 shadow-sm hover:shadow-md transition-shadow overflow-hidden"
          >
            <div className="flex items-center justify-between gap-2">
              <div className="inline-flex items-center gap-2 text-[10px] md:text-xs font-bold text-gray-700">
                <span className="inline-block w-2 h-2 rounded-full bg-[#059669]" />
                {w.tag}
              </div>
              <div className="text-[10px] md:text-xs text-gray-400 font-bold">
                事例0{i + 1}
              </div>
            </div>
            <div className="mt-1 md:mt-2 text-xs md:text-lg font-extrabold text-gray-900 group-hover:text-[#059669] transition-colors">
              {w.title}
            </div>
            <div className="mt-1 text-[10px] md:text-xs text-gray-600 font-semibold">
              {w.sub}
            </div>
            <div className="mt-2 md:mt-3 h-[6px] rounded-full bg-gray-100 overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-[#059669] to-[#0f172a]"
                style={{ width: `${70 + i * 7}%` }}
              />
            </div>
          </button>
        ))}
      </div>
    </div>
  );

  const AboutView = () => (
    <div className="h-full flex flex-col px-4 py-3 md:px-10 md:py-10">
      <div className="shrink-0">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white text-gray-900 border border-gray-200 text-[10px] md:text-xs font-bold">
          <Building2 className="w-4 h-4 text-[#059669]" />
          会社概要
        </div>
        <div className="mt-2 text-xl md:text-3xl font-extrabold text-gray-900">
          小さな会社ほど、Webで差がつく。
        </div>
        <div className="mt-1 text-xs md:text-sm text-gray-600 font-semibold">
          立川から。東京の実店舗に特化して、最短で「ちゃんと効く」形にします。
        </div>
      </div>

      <div className="mt-3 md:mt-6 grid gap-2 md:gap-4">
        {[
          { k: "拠点", v: "東京都立川市" },
          { k: "納期", v: "最短4日（要件により）" },
          { k: "提供", v: "制作 / SEO / 運用導線 / ブランド整理" },
        ].map((r) => (
          <div
            key={r.k}
            className="rounded-2xl border border-gray-200 bg-gray-50 p-3 md:p-5"
          >
            <div className="text-[10px] md:text-xs font-bold text-gray-500">
              {r.k}
            </div>
            <div className="mt-1 text-sm md:text-lg font-extrabold text-gray-900">
              {r.v}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-auto pt-2 md:pt-3">
        <button
          onClick={() => navigate("contact")}
          className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-[#0f172a] text-white py-3 text-xs md:text-sm font-bold hover:bg-slate-800 transition-colors"
        >
          相談して要件を整理する <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );

  const ContactView = () => (
    <div className="h-full flex flex-col px-4 py-3 md:px-10 md:py-10">
      <div className="shrink-0">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-100 text-[10px] md:text-xs font-bold">
          <Mail className="w-4 h-4" />
          無料相談
        </div>
        <div className="mt-2 text-xl md:text-3xl font-extrabold text-gray-900">
          まずは1分で送信。
        </div>
        <div className="mt-1 text-xs md:text-sm text-gray-600 font-semibold">
          24時間以内に返信します（営業しません）。
        </div>
      </div>

      <div className="mt-2 md:mt-6 grid gap-2 md:gap-3">
        <div className="rounded-2xl border border-gray-200 bg-white p-3 md:p-4">
          <div className="text-[10px] font-bold text-gray-500">お名前</div>
          <div className="mt-1 md:mt-2 h-9 md:h-10 rounded-xl bg-gray-50 border border-gray-200" />
        </div>
        <div className="rounded-2xl border border-gray-200 bg-white p-3 md:p-4">
          <div className="text-[10px] font-bold text-gray-500">メール</div>
          <div className="mt-1 md:mt-2 h-9 md:h-10 rounded-xl bg-gray-50 border border-gray-200" />
        </div>
        <div className="rounded-2xl border border-gray-200 bg-white p-3 md:p-4">
          <div className="text-[10px] font-bold text-gray-500">相談内容</div>
          <div className="mt-1 md:mt-2 h-14 md:h-16 rounded-xl bg-gray-50 border border-gray-200" />
        </div>
      </div>

      <div className="mt-auto pt-2 md:pt-3 grid grid-cols-2 gap-2">
        <button
          onClick={() => navigate("home")}
          className="inline-flex items-center justify-center gap-2 rounded-full bg-white text-gray-900 py-3 text-xs font-bold border border-gray-200 hover:border-emerald-300 hover:text-[#059669] transition-colors"
        >
          戻る
        </button>
        <button
          disabled={submitting}
          onClick={() => {
            setSubmitting(true);
            window.setTimeout(() => setSubmitting(false), 900);
          }}
          className="inline-flex items-center justify-center gap-2 rounded-full bg-[#059669] text-white py-3 text-xs font-bold shadow-lg shadow-emerald-200 hover:bg-emerald-600 transition-colors disabled:opacity-70"
        >
          {submitting ? "送信中..." : "送信する"}
          {submitting ? null : <CheckCircle className="w-4 h-4" />}
        </button>
      </div>

      <div className="mt-2 md:mt-3 flex items-center justify-center gap-2 text-[10px] text-gray-600 font-semibold">
        <Phone className="w-3.5 h-3.5 text-[#059669]" />
        電話でもOK（準備中）
      </div>
    </div>
  );

  return (
    <section
      id="service"
      className="relative min-h-screen bg-gray-50 overflow-x-hidden"
    >
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

      {/* 
        Perfect centering within the *visible* hero area:
        - Header is fixed, so we reserve its height (approx 116px).
        - We also reserve a small bottom padding (48px).
        - The browser is centered inside the remaining stage.
      */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-[140px] pb-12">
        <div className="min-h-[calc(100vh-140px-48px)] flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: reduceMotion ? 0 : 0.6, ease: "easeOut" }}
            className="max-w-4xl mx-auto w-full flex justify-center"
          >
            <MiniBrowser
              url={`tokyowebsites.com/${currentView === "home" ? "home" : currentView}`}
              className="w-full rounded-3xl border-gray-200 bg-gray-50"
              dark={false}
              onBack={currentView !== "home" ? () => navigate("home") : undefined}
            >
              <div
                className="relative bg-white overflow-hidden"
                style={{
                  height:
                    "min(clamp(380px, 60vh, 750px), calc(100vh - 140px - 48px))",
                  maxHeight: "calc(100vh - 140px - 48px)",
                }}
              >
                {/* Internal scrolling enabled for content that exceeds height */}
                <div 
                  ref={viewportRef} 
                  className="h-full overflow-y-auto no-scrollbar"
                  style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                >
                  <div className={`h-full font-sans flex flex-col transition-colors duration-500 ${currentView === 'home' ? 'bg-gradient-to-br from-gray-50 to-white' : 'bg-white text-gray-900'}`}>
                    
                    {/* Demo Cursor Animation - Only on sub-pages to suggest "Back" */}
                    {currentView !== "home" && (
                    <motion.div
                      className="hidden md:block absolute z-50 pointer-events-none"
                      initial={{ x: "50%", y: "50%", opacity: 0 }}
                      animate={{ 
                        x: ["50%", "5%", "5%", "50%"], // Move to back arrow (top-left)
                        y: ["50%", "2%", "2%", "50%"],
                        opacity: [0, 1, 1, 0]
                      }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        repeatDelay: 2,
                        ease: "easeInOut",
                        times: [0, 0.4, 0.6, 1]
                      }}
                    >
                      <MousePointer2 className="w-5 h-5 text-black fill-black drop-shadow-md" />
                      <motion.div
                        className="absolute -top-3 -left-3 w-10 h-10 rounded-full bg-black/10"
                        animate={{ scale: [0, 1.5], opacity: [0.5, 0] }}
                        transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 3.5, delay: 1.6 }}
                      />
                    </motion.div>
                  )}

                  {/* Dynamic content area */}
                  <div className="flex-1 relative min-h-0">
                    <AnimatePresence mode="wait">
                      {currentView === "home" && (
                        <motion.div
                          key="home"
                          className="w-full h-full"
                          initial={{ opacity: 0, y: reduceMotion ? 0 : 8 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: reduceMotion ? 0 : 0.25 }}
                        >
                          <HomeView />
                        </motion.div>
                      )}
                      {currentView === "service" && (
                        <motion.div
                          key="service"
                          className="w-full min-h-full"
                          initial={{ opacity: 0, y: reduceMotion ? 0 : 8 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: reduceMotion ? 0 : 0.25 }}
                        >
                          <ServiceView />
                        </motion.div>
                      )}
                      {currentView === "works" && (
                        <motion.div
                          key="works"
                          className="w-full min-h-full"
                          initial={{ opacity: 0, y: reduceMotion ? 0 : 8 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: reduceMotion ? 0 : 0.25 }}
                        >
                          <WorksView />
                        </motion.div>
                      )}
                      {currentView === "about" && (
                        <motion.div
                          key="about"
                          className="w-full min-h-full"
                          initial={{ opacity: 0, y: reduceMotion ? 0 : 8 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: reduceMotion ? 0 : 0.25 }}
                        >
                          <AboutView />
                        </motion.div>
                      )}
                      {currentView === "contact" && (
                        <motion.div
                          key="contact"
                          className="w-full min-h-full"
                          initial={{ opacity: 0, y: reduceMotion ? 0 : 8 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: reduceMotion ? 0 : 0.25 }}
                        >
                          <ContactView />
                        </motion.div>
                      )}
                  </AnimatePresence>
                </div>
              </div>
            </div>
          </div>
        </MiniBrowser>
      </motion.div>
    </div>
  </div>
</section>
  );
}
