import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { InteractiveShowcase } from "./components/interactive-showcase/InteractiveShowcase";
import { ProcessTimeline } from "./components/ProcessTimeline";
import { Contact } from "./components/Contact";
import { BackgroundGradient } from "./components/ui/BackgroundGradient";

export default function App() {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden font-sans text-gray-900">
      <Header />
      <Hero />
      <InteractiveShowcase />
      
      {/* Process Section with Hero Gradient */}
      <div className="relative bg-gray-50 overflow-hidden min-h-[600px]">
        <BackgroundGradient />
        <ProcessTimeline />
      </div>

      {/* Contact Section (Dark) */}
      <div className="bg-gray-900 text-white relative overflow-hidden">
        <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-[#0f172a] to-transparent pointer-events-none" />
        <Contact />
      </div>

      {/* Footer with Hero Gradient */}
      <footer className="relative overflow-hidden py-16 bg-gray-50 min-h-[400px]">
        <BackgroundGradient />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid md:grid-cols-3 gap-10 text-gray-900">
            <div>
              <div className="text-lg font-bold mb-3" style={{ fontWeight: 700 }}>
                tokyowebsites.com
              </div>
              <p className="text-sm text-gray-900 leading-relaxed" style={{ fontWeight: 600 }}>
                東京の小規模実店舗向けに、最短4日で"ちゃんと効く"ウェブサイトを制作します。
              </p>
              <p className="text-xs text-gray-700 mt-3 leading-relaxed" style={{ fontWeight: 600 }}>
                Digital brand consulting + web redesign for small businesses in Tokyo.
              </p>
            </div>

            <div>
              <div className="text-sm font-bold mb-4" style={{ fontWeight: 700 }}>
                クイックリンク
                <span className="block text-xs text-gray-700 mt-1" style={{ fontWeight: 600 }}>Quick links</span>
              </div>
              <ul className="space-y-3 text-sm">
                {[
                  { ja: "プラン", en: "Plans", href: "#plans" },
                  { ja: "制作の流れ", en: "Process", href: "#process" },
                  { ja: "お問い合わせ", en: "Contact", href: "#contact" },
                ].map((l) => (
                  <li key={l.href}>
                    <a
                      href={l.href}
                      className="text-gray-900 hover:text-[#059669] transition-colors" style={{ fontWeight: 600 }}
                    >
                      {l.ja}
                      <span className="ml-2 text-xs text-gray-700">{l.en}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <div className="text-sm font-bold mb-4" style={{ fontWeight: 700 }}>
                連絡先
                <span className="block text-xs text-gray-700 mt-1" style={{ fontWeight: 600 }}>Contact</span>
              </div>
              <ul className="space-y-3 text-sm text-gray-900">
                <li>
                  <a
                    href="mailto:contact@tokyowebsites.com"
                    className="hover:text-[#059669] transition-colors" style={{ fontWeight: 600 }}
                  >
                    contact@tokyowebsites.com
                  </a>
                </li>
                <li className="text-gray-800" style={{ fontWeight: 600 }}>
                  東京都立川市
                  <span className="block text-xs mt-1 text-gray-700">
                    Tachikawa, Tokyo
                  </span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-gray-400 text-center text-xs text-gray-800" style={{ fontWeight: 600 }}>
            <p>© 2025 Tokyo Websites. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
