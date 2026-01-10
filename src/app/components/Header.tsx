import { Menu, X, ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { useTranslation } from "../lib/TranslationContext";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { t } = useTranslation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: t.strengths, href: "#service" },
    { label: t.plans, href: "#plans" },
    { label: t.about, href: "#about" },
    { label: t.process, href: "#process" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 ${
        scrolled ? "shadow-lg" : "shadow-sm"
      } bg-white/95 backdrop-blur-xl border-b border-gray-200 transition-all duration-300`}
    >
      {/* Promo bar */}
      <div className="bg-[#059669] text-white text-xs md:text-sm font-bold">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 flex items-center gap-2 justify-center">
          <span className="px-2 py-0.5 rounded-full bg-white/20 border border-white/30">Free</span>
          <a
            href="https://docs.google.com/forms/d/1ocjF6YyypFDE_DKzlByTMPrYODsWYQkSmuIMl9zx9mU/edit"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline transition-all"
          >
            {t.promoCta}
          </a>
          <ArrowRight size={14} className="opacity-80" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-[76px]">
          {/* Wordmark */}
          <a
            href="#"
            className="relative flex items-center gap-3 group"
            aria-label="Tokyo Websites"
          >
            <div className="leading-none">
              <div className="flex items-baseline transition-transform group-hover:scale-[1.02]">
                <span className="text-xl font-bold tracking-tight text-[#5C81D9] font-sans">
                  Tokyo
                </span>
                <span className="text-xl font-bold tracking-tight text-[#5C81D9] ml-1 font-sans">
                  Websites
                </span>
              </div>
              <div className="text-[10px] text-gray-500 font-semibold tracking-wide mt-1">
                {t.slogan}
              </div>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-2">
            {navItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="px-4 py-2 rounded-full text-sm font-bold text-gray-700 hover:bg-slate-50 hover:text-[#0f172a] transition-colors"
                style={{ fontWeight: 600 }}
              >
                {item.label}
              </a>
            ))}
            <LanguageSwitcher />
            <a
              href="https://docs.google.com/forms/d/1ocjF6YyypFDE_DKzlByTMPrYODsWYQkSmuIMl9zx9mU/edit"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-3 inline-flex items-center gap-2 px-6 py-2.5 bg-[#5C81D9] text-white text-sm font-bold hover:bg-[#4a6fc7] transition-colors rounded-full shadow-lg shadow-[#5C81D9]/20"
              style={{ fontWeight: 700 }}
            >
              {t.freeConsultation}
              <ArrowRight size={16} className="opacity-80" />
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2.5 rounded-xl border border-gray-200 bg-white shadow-sm text-gray-700"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden pb-4 border-t border-gray-100 overflow-hidden bg-white">
            <div className="pt-4 grid gap-2">
              {navItems.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="flex items-center justify-between py-3 px-3 rounded-xl hover:bg-gray-50"
                >
                  <span className="text-gray-900 font-bold text-sm" style={{ fontWeight: 600 }}>{item.label}</span>
                  <ArrowRight size={16} className="text-gray-300" />
                </a>
              ))}
              <div className="px-3 py-2">
                <LanguageSwitcher />
              </div>
              <a
                href="https://docs.google.com/forms/d/1ocjF6YyypFDE_DKzlByTMPrYODsWYQkSmuIMl9zx9mU/edit"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsMenuOpen(false)}
                className="mt-2 inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#5C81D9] text-white text-sm font-bold hover:bg-[#4a6fc7] transition-colors rounded-xl text-center shadow-md"
                style={{ fontWeight: 700 }}
              >
                {t.freeConsultation}
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
