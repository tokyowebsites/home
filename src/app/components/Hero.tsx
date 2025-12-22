import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import {
  ArrowRight,
  Building2,
  CheckCircle,
  FileText,
  Home,
  Mail,
  Phone,
  Sparkles,
  Zap,
} from "lucide-react";
import { useMemo, useRef, useState } from "react";

import { MiniBrowser } from "./interactive-showcase/MiniBrowser";

type HeroView = "home" | "service" | "works" | "about" | "contact";

export function Hero() {
  const reduceMotion = useReducedMotion();
  const viewportRef = useRef<HTMLDivElement | null>(null);
  const [currentView, setCurrentView] = useState<HeroView>("home");
  const [submitting, setSubmitting] = useState(false);

  const tabs = useMemo(
    () =>
      [
        { id: "home" as const, label: "ホーム", icon: Home },
        { id: "service" as const, label: "サービス", icon: Sparkles },
        { id: "works" as const, label: "実績", icon: FileText },
        { id: "about" as const, label: "会社", icon: Building2 },
        { id: "contact" as const, label: "相談", icon: Mail },
      ] as const,
    [],
  );

  const navigate = (view: HeroView) => {
    setCurrentView(view);
    // No internal scrolling, but keep this to avoid any accidental offset.
    if (viewportRef.current) viewportRef.current.scrollTop = 0;
  };

  const HomeView = () => (
    <div className="h-full flex flex-col">
      {/* Image hero (your photo) */}
      <div className="relative shrink-0 h-[160px] md:h-[280px] overflow-hidden">
        <img
          src="/tama-monorail.jpg"
          alt="立川のモノレール"
          className="absolute inset-0 w-full h-full object-cover"
          loading="eager"
          decoding="async"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />
        <div className="absolute top-3 left-3 md:top-6 md:left-6 inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-[10px] md:text-xs font-bold text-white backdrop-blur border border-white/15">
          <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#059669]" />
          立川・東京 / 実店舗向け
        </div>

        <div className="absolute bottom-3 left-3 right-3 md:bottom-6 md:left-6 md:right-6">
          <div className="text-white font-bold tracking-tight leading-tight">
            <div className="text-xl md:text-4xl" style={{ fontWeight: 800 }}>
              東京の実店舗に、<span className="text-[#34d399]">成果が出る</span>Webを。
            </div>
            <div className="mt-1 md:mt-2 text-[11px] md:text-sm text-white/85 font-semibold">
              最短4日で公開。検索・導線・信頼を「最初から」整えます。
            </div>
          </div>
        </div>
      </div>

      {/* Body */}
      <div className="flex-1 min-h-0 px-3 py-3 md:px-6 md:py-6">
        <div className="grid grid-cols-3 gap-2 md:gap-4">
          {[
            { k: "+32%", l: "問い合わせ率", s: "導線最適化" },
            { k: "+41%", l: "検索流入", s: "構造SEO" },
            { k: "2.1倍", l: "来店予約", s: "スマホ導線" },
          ].map((x) => (
            <div
              key={x.l}
              className="rounded-2xl border border-gray-200 bg-white/70 backdrop-blur p-3 md:p-4 shadow-sm"
            >
              <div className="text-[#059669] text-sm md:text-xl font-extrabold">
                {x.k}
              </div>
              <div className="text-[10px] md:text-xs text-gray-900 font-bold mt-0.5">
                {x.l}
              </div>
              <div className="text-[9px] md:text-[11px] text-gray-600 font-semibold mt-1">
                {x.s}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-3 md:mt-6 flex items-center gap-2 md:gap-3">
          <button
            onClick={() => navigate("contact")}
            className="flex-1 inline-flex items-center justify-center gap-2 rounded-full bg-[#059669] text-white py-3 md:py-3.5 text-xs md:text-sm font-bold shadow-lg shadow-emerald-200 hover:bg-emerald-600 transition-colors"
          >
            無料相談へ
            <ArrowRight className="w-4 h-4" />
          </button>
          <button
            onClick={() => navigate("service")}
            className="flex-1 inline-flex items-center justify-center gap-2 rounded-full bg-white text-gray-900 py-3 md:py-3.5 text-xs md:text-sm font-bold border border-gray-200 hover:border-emerald-300 hover:text-[#059669] transition-colors"
          >
            できること
            <Sparkles className="w-4 h-4" />
          </button>
        </div>

        <div className="mt-2 md:mt-4 text-center text-[10px] md:text-xs text-gray-500 font-semibold">
          ※ これはサンプルUIです（クリックでページが切り替わります）
        </div>
      </div>
    </div>
  );

  const ServiceView = () => (
    <div className="h-full flex flex-col px-4 py-4 md:px-8 md:py-8">
      <div className="shrink-0">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-100 text-[10px] md:text-xs font-bold">
          <Sparkles className="w-4 h-4" />
          サービス
        </div>
        <div className="mt-2 text-xl md:text-3xl font-extrabold text-gray-900">
          「売れる」ための設計だけ。
        </div>
        <div className="mt-1 text-xs md:text-sm text-gray-600 font-semibold">
          余計な機能は削って、成果に直結する部分だけを磨きます。
        </div>
      </div>

      <div className="mt-4 md:mt-6 grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4 flex-1 min-h-0">
        {[
          { icon: Zap, t: "爆速", d: "体感0.8秒を目標に" },
          { icon: FileText, t: "導線", d: "CTA/フォーム最適化" },
          { icon: Sparkles, t: "デザイン", d: "信頼が伝わる見た目" },
          { icon: Building2, t: "店舗向け", d: "地図/営業時間/予約" },
          { icon: Phone, t: "相談", d: "要件整理から伴走" },
          { icon: CheckCircle, t: "最短4日", d: "スピード公開" },
        ].map((x) => (
          <div
            key={x.t}
            className="rounded-2xl border border-gray-200 bg-white p-3 md:p-5 shadow-sm"
          >
            <x.icon className="w-5 h-5 md:w-6 md:h-6 text-[#059669]" />
            <div className="mt-2 text-sm md:text-base font-extrabold text-gray-900">
              {x.t}
            </div>
            <div className="mt-1 text-[10px] md:text-xs text-gray-600 font-semibold leading-relaxed">
              {x.d}
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const WorksView = () => (
    <div className="h-full flex flex-col px-4 py-4 md:px-8 md:py-8">
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

      <div className="mt-4 md:mt-6 grid grid-cols-2 gap-3 md:gap-4 flex-1 min-h-0">
        {[
          { tag: "飲食店", title: "予約が増えるLP", sub: "立川 / バー" },
          { tag: "士業", title: "信頼感の会社サイト", sub: "東京 / 法律" },
          { tag: "小売", title: "商品が探しやすいEC", sub: "多摩 / 雑貨" },
          { tag: "美容", title: "指名が増える導線", sub: "中央線沿線" },
        ].map((w, i) => (
          <button
            key={w.title}
            onClick={() => navigate("contact")}
            className="group text-left rounded-2xl border border-gray-200 bg-white p-4 md:p-5 shadow-sm hover:shadow-md transition-shadow overflow-hidden"
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
            <div className="mt-2 text-sm md:text-lg font-extrabold text-gray-900 group-hover:text-[#059669] transition-colors">
              {w.title}
            </div>
            <div className="mt-1 text-[10px] md:text-xs text-gray-600 font-semibold">
              {w.sub}
            </div>
            <div className="mt-3 h-[6px] rounded-full bg-gray-100 overflow-hidden">
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
    <div className="h-full flex flex-col px-4 py-4 md:px-10 md:py-10">
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

      <div className="mt-4 md:mt-6 grid gap-3 md:gap-4">
        {[
          { k: "拠点", v: "東京都立川市" },
          { k: "納期", v: "最短4日（要件により）" },
          { k: "提供", v: "制作 / SEO / 運用導線 / ブランド整理" },
        ].map((r) => (
          <div
            key={r.k}
            className="rounded-2xl border border-gray-200 bg-gray-50 p-4 md:p-5"
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

      <div className="mt-auto pt-3">
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
    <div className="h-full flex flex-col px-4 py-4 md:px-10 md:py-10">
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

      <div className="mt-4 md:mt-6 grid gap-3">
        <div className="rounded-2xl border border-gray-200 bg-white p-4">
          <div className="text-[10px] font-bold text-gray-500">お名前</div>
          <div className="mt-2 h-10 rounded-xl bg-gray-50 border border-gray-200" />
        </div>
        <div className="rounded-2xl border border-gray-200 bg-white p-4">
          <div className="text-[10px] font-bold text-gray-500">メール</div>
          <div className="mt-2 h-10 rounded-xl bg-gray-50 border border-gray-200" />
        </div>
        <div className="rounded-2xl border border-gray-200 bg-white p-4">
          <div className="text-[10px] font-bold text-gray-500">相談内容</div>
          <div className="mt-2 h-16 rounded-xl bg-gray-50 border border-gray-200" />
        </div>
      </div>

      <div className="mt-auto pt-3 grid grid-cols-2 gap-2">
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

      <div className="mt-3 flex items-center justify-center gap-2 text-[10px] text-gray-600 font-semibold">
        <Phone className="w-3.5 h-3.5 text-[#059669]" />
        電話でもOK（準備中）
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
          transition={{ duration: reduceMotion ? 0 : 0.6, ease: "easeOut" }}
          className="max-w-6xl mx-auto"
        >
          <MiniBrowser
            url={`tokyowebsites.com/${currentView === "home" ? "home" : currentView}`}
            className="rounded-2xl shadow-2xl border-gray-700 bg-gray-900"
            dark
          >
            <div className="h-[520px] sm:h-[560px] md:h-[760px] bg-white relative">
              {/* No internal scrolling: everything must fit. */}
              <div ref={viewportRef} className="h-full overflow-hidden">
                <div className="h-full bg-white text-gray-900 font-sans flex flex-col">
                  {/* Fake Site Header */}
                  <header className="shrink-0 bg-white/90 backdrop-blur-md border-b border-gray-100">
                    <div className="h-14 md:h-16 px-3 md:px-6 flex items-center justify-between">
                      <button
                        type="button"
                        onClick={() => navigate("home")}
                        className="flex items-center gap-2"
                        aria-label="ホームへ"
                      >
                        <div className="h-8 w-8 rounded-xl bg-[#059669] text-white flex items-center justify-center text-xs font-extrabold shadow-lg shadow-emerald-200">
                          TW
                        </div>
                        <div className="hidden md:block leading-tight text-left">
                          <div className="text-sm font-extrabold text-gray-900">
                            Tokyo Websites
                          </div>
                          <div className="text-[10px] font-semibold text-gray-500">
                            立川・東京 / 実店舗向け
                          </div>
                        </div>
                      </button>

                      {/* Desktop nav */}
                      <nav className="hidden md:flex items-center gap-2">
                        {[
                          { id: "service" as const, label: "サービス" },
                          { id: "works" as const, label: "実績" },
                          { id: "about" as const, label: "会社概要" },
                        ].map((n) => (
                          <button
                            key={n.id}
                            type="button"
                            onClick={() => navigate(n.id)}
                            className={`px-4 py-2 rounded-full text-xs font-extrabold border transition-colors ${
                              currentView === n.id
                                ? "bg-emerald-50 border-emerald-200 text-emerald-800"
                                : "bg-white border-gray-200 text-gray-700 hover:border-emerald-200 hover:text-[#059669]"
                            }`}
                          >
                            {n.label}
                          </button>
                        ))}
                        <button
                          type="button"
                          onClick={() => navigate("contact")}
                          className="ml-2 px-5 py-2 rounded-full bg-[#059669] text-white text-xs font-extrabold shadow-lg shadow-emerald-200 hover:bg-emerald-600 transition-colors"
                        >
                          無料相談
                        </button>
                      </nav>
                    </div>
                  </header>

                  {/* Dynamic content area */}
                  <div className="flex-1 min-h-0 relative overflow-hidden">
                    <AnimatePresence mode="wait">
                      {currentView === "home" && (
                        <motion.div
                          key="home"
                          className="absolute inset-0"
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
                          className="absolute inset-0"
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
                          className="absolute inset-0"
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
                          className="absolute inset-0"
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
                          className="absolute inset-0"
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

                  {/* Mobile bottom tabs (so the fake site feels like an app) */}
                  <div className="md:hidden shrink-0 border-t border-gray-100 bg-white">
                    <div className="grid grid-cols-5">
                      {tabs.map((t) => {
                        const Icon = t.icon;
                        const active = currentView === t.id;
                        return (
                          <button
                            key={t.id}
                            type="button"
                            onClick={() => navigate(t.id)}
                            className={`py-2.5 flex flex-col items-center justify-center gap-1 ${
                              active ? "text-[#059669]" : "text-gray-500"
                            }`}
                            aria-label={t.label}
                          >
                            <Icon className="w-4 h-4" />
                            <span className="text-[10px] font-bold">{t.label}</span>
                          </button>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </MiniBrowser>
        </motion.div>

        {/* Real CTA Below Browser */}
        <div className="mt-8 md:mt-12 text-center">
          <p
            className="text-xs md:text-sm text-gray-700 mb-4 md:mb-6 font-semibold"
            style={{ fontWeight: 600 }}
          >
            東京の実店舗向けに、成果直結のWeb制作（2025–）
          </p>
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
