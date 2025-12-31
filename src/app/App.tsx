import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { InteractiveShowcase } from "./components/interactive-showcase/InteractiveShowcase";
import { ProcessTimeline } from "./components/ProcessTimeline";
import { Contact } from "./components/Contact";
import { About } from "./components/About";
import { BackgroundGradient } from "./components/ui/BackgroundGradient";
import { Customers } from "./components/Customers";
import { ConsultingSuite } from "./components/ConsultingSuite";
import { useTranslation } from "./lib/TranslationContext";
import { Toaster } from "sonner";

export default function App() {
  const { t } = useTranslation();
  
  return (
    <div className="min-h-screen bg-white overflow-x-hidden font-sans text-gray-900">
      <Toaster position="top-center" />
      <Header />
      <Hero />
      
      {/* About / Mission Section */}
      <About />

      <Customers />

      <InteractiveShowcase />

      <ConsultingSuite />
      
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
                {t.footerTagline}
              </p>
              <p className="text-xs text-gray-700 mt-3 leading-relaxed" style={{ fontWeight: 600 }}>
                {t.footerTaglineEn}
              </p>
            </div>

            <div>
              <div className="text-sm font-bold mb-4" style={{ fontWeight: 700 }}>
                {t.quickLinks}
                <span className="block text-xs text-gray-700 mt-1" style={{ fontWeight: 600 }}>{t.quickLinksEn}</span>
              </div>
              <ul className="space-y-3 text-sm">
                {[
                  { label: t.strengths, href: "#service" },
                  { label: t.plans, href: "#plans" },
                  { label: t.about, href: "#about" },
                  { label: t.process, href: "#process" },
                  { label: t.consulting, href: "#consulting" },
                  { label: t.testimonials, href: "#testimonials" },
                ].map((l) => (
                  <li key={l.href}>
                    <a
                      href={l.href}
                      className="text-gray-900 hover:text-[#059669] transition-colors" style={{ fontWeight: 600 }}
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <div className="text-sm font-bold mb-4" style={{ fontWeight: 700 }}>
                {t.contactInfo}
                <span className="block text-xs text-gray-700 mt-1" style={{ fontWeight: 600 }}>{t.contactInfoEn}</span>
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
                  {t.tachikawaTokyo}
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-gray-400 text-center text-xs text-gray-800" style={{ fontWeight: 600 }}>
            <p>{t.copyright}</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
