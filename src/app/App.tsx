import React from "react";
import { Instagram, Twitter } from "lucide-react";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Solutions } from "./components/Solutions";
import { InteractiveShowcase } from "./components/interactive-showcase/InteractiveShowcase";
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
      
      <Solutions />

      <InteractiveShowcase />

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

            <div className="flex gap-4">
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
