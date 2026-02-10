import React from "react";
import { Instagram, Twitter, MessageCircle } from "lucide-react";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Solutions } from "./components/Solutions";
import { Plans } from "./components/Plans";
import { Contact } from "./components/Contact";
import { BackgroundGradient } from "./components/ui/BackgroundGradient";
import { Customers } from "./components/Customers";
import { useTranslation } from "./lib/TranslationContext";
import { Toaster } from "sonner";
import { SEO } from "./components/SEO";
import { StructuredData } from "./components/StructuredData";

export default function App() {
  const { t } = useTranslation();
  
  return (
    <div className="min-h-screen bg-white overflow-x-hidden font-sans text-gray-900">
      <SEO />
      <StructuredData />
      <Toaster position="top-center" />
      <Header />
      <Hero />

      <section className="py-20 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-[2.5rem] overflow-hidden border border-gray-200 shadow-2xl">
            <img
              src="/images/tachikawa-station.jpg"
              alt="Tachikawa Station North Exit"
              className="w-full h-[280px] md:h-[420px] object-cover"
              loading="lazy"
              decoding="async"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
            <div className="absolute inset-0 flex items-end">
              <div className="p-6 md:p-10 text-white max-w-2xl">
                <div className="text-2xl md:text-4xl font-black leading-tight">
                  {t.slogan}
                </div>
                <div className="mt-2 text-xs md:text-sm font-bold text-white/80">
                  {t.heroTagline}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Solutions />

      <Plans />

      <Customers />

      {/* Contact Section (Light with Gradient) */}
      <div className="bg-gray-50 text-gray-900 relative overflow-hidden min-h-[600px]">
        <BackgroundGradient />
        <Contact />
      </div>

      {/* Footer (Light - matching Header) */}
      <footer className="relative overflow-hidden py-10 bg-white/95 backdrop-blur-xl border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 border-b border-gray-100 pb-8">
            <div className="flex flex-col items-center md:items-start text-center md:text-left">
              <a href="#" className="flex items-baseline transition-transform hover:scale-[1.02]">
                <span className="text-xl font-bold tracking-tight text-[#5C81D9]">
                  Tokyo
                </span>
                <span className="text-xl font-bold tracking-tight text-[#5C81D9] ml-1">
                  Websites
                </span>
              </a>
              <p className="text-[10px] md:text-xs text-gray-500 font-bold mt-1 uppercase tracking-widest">
                {t.footerTaglineEn}
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-x-8 gap-y-4">
              {[
                { label: t.home, href: "#" },
                { label: t.plans, href: "#plans" },
                { label: t.about, href: "#solutions" },
                { label: t.process, href: "#process" },
                { label: t.testimonials, href: "#testimonials" },
              ].map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  className="text-xs font-black text-gray-700 hover:text-[#5C81D9] transition-colors uppercase tracking-wider"
                >
                  {l.label}
                </a>
              ))}
            </div>

            <div className="flex flex-wrap items-center justify-center gap-3">
              <a
                href="https://lin.ee/Dtx54uY"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#06C755] text-white text-[10px] md:text-xs font-black uppercase tracking-widest hover:bg-[#06b54c] transition-colors shadow-md shadow-emerald-900/10"
              >
                <MessageCircle size={14} />
                {t.addUsOnLine}
              </a>
              <a
                href="https://open.kakao.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#FEE500] text-gray-900 text-[10px] md:text-xs font-black uppercase tracking-widest hover:bg-[#f7dc00] transition-colors shadow-md shadow-amber-900/10"
              >
                <MessageCircle size={14} />
                {t.addUsOnKakao}
              </a>
              <a 
                href="https://instagram.com/TokyoWebsites" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-10 h-10 flex items-center justify-center bg-white border border-gray-200 rounded-full text-gray-700 hover:bg-gradient-to-r hover:from-[#E4405F] hover:to-[#F56040] hover:text-white hover:border-transparent transition-all shadow-sm hover:scale-110"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
              <a 
                href="https://x.com/Tokyowebsites" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-10 h-10 flex items-center justify-center bg-white border border-gray-200 rounded-full text-gray-700 hover:bg-black hover:text-white hover:border-transparent transition-all shadow-sm hover:scale-110"
                aria-label="X (Twitter)"
              >
                <Twitter size={18} />
              </a>
            </div>
          </div>

          <div className="mt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-[10px] md:text-xs text-gray-500 font-bold uppercase tracking-widest">
            <p>{t.copyright}</p>
            <div className="flex gap-6">
              <a href="mailto:contact@tokyowebsites.com" className="hover:text-gray-900 transition-colors">
                contact@tokyowebsites.com
              </a>
              <span className="hidden md:inline text-gray-200">|</span>
              <span>{t.tachikawaTokyo}</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
