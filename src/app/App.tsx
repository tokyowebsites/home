import { Facebook, Instagram, Twitter } from "lucide-react";

export default function App() {
  const { t } = useTranslation();
  
  return (
    <div className="min-h-screen bg-white overflow-x-hidden font-sans text-gray-900">
      <SEO />
      <StructuredData />
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
          <div className="grid md:grid-cols-4 gap-10 text-gray-900">
            <div className="md:col-span-1">
              <div className="text-lg font-bold mb-3" style={{ fontWeight: 700 }}>
                tokyowebsites.com
              </div>
              <p className="text-sm text-gray-900 leading-relaxed" style={{ fontWeight: 600 }}>
                {t.footerTagline}
              </p>
              <p className="text-xs text-gray-700 mt-3 leading-relaxed" style={{ fontWeight: 600 }}>
                {t.footerTaglineEn}
              </p>
              
              {/* Social Links */}
              <div className="flex gap-4 mt-6">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-[#1877F2] transition-colors" aria-label="Facebook">
                  <Facebook size={20} />
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-[#E4405F] transition-colors" aria-label="Instagram">
                  <Instagram size={20} />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-[#1DA1F2] transition-colors" aria-label="Twitter">
                  <Twitter size={20} />
                </a>
              </div>
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

            <div className="md:col-span-2">
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
