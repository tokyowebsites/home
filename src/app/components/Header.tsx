import { Menu, X, ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { ja: "プラン", en: "Plans", href: "#plans" },
    { ja: "制作の流れ", en: "Process", href: "#process" },
    { ja: "お問い合わせ", en: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 ${
        scrolled ? "shadow-lg" : "shadow-sm"
      } bg-white/95 backdrop-blur-xl border-b border-gray-200 transition-all duration-300`}
    >
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
                <span className="text-xl font-bold tracking-tight text-gray-900" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 700 }}>
                  Tokyo
                </span>
                <span className="text-xl font-bold tracking-tight text-[#0f172a] ml-1" style={{ fontFamily: 'Playfair Display, serif', fontWeight: 700 }}>
                  Websites
                </span>
              </div>
              <div className="text-[10px] text-gray-500 font-semibold tracking-wide mt-1" style={{ fontWeight: 600 }}>
                東京のビジネスを、世界水準へ
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
                <span>{item.ja}</span>
                <span className="text-[10px] text-gray-400 ml-1 group-hover:text-slate-400 transition-colors">{item.en}</span>
              </a>
            ))}
            <a
              href="#contact"
              className="ml-3 inline-flex items-center gap-2 px-6 py-2.5 bg-[#059669] text-white text-sm font-bold hover:bg-emerald-600 transition-colors rounded-full shadow-lg shadow-emerald-100"
              style={{ fontWeight: 700 }}
            >
              無料相談
              <span className="text-xs opacity-80 font-normal">Free consult</span>
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
                  <div className="flex flex-col">
                    <span className="text-gray-900 font-bold text-sm" style={{ fontWeight: 600 }}>{item.ja}</span>
                    <span className="text-xs text-gray-400 font-semibold">{item.en}</span>
                  </div>
                  <ArrowRight size={16} className="text-gray-300" />
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setIsMenuOpen(false)}
                className="mt-2 inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#059669] text-white text-sm font-bold hover:bg-emerald-600 transition-colors rounded-xl text-center shadow-md"
                style={{ fontWeight: 700 }}
              >
                無料相談
                <span className="text-xs opacity-80">Free consult</span>
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
