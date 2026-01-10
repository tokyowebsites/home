import { Quote, Star, MapPin, ExternalLink, Play } from "lucide-react";
import { useTranslation } from "../lib/TranslationContext";
import { useEffect, useRef } from "react";

export function Customers() {
  const { t } = useTranslation();
  const beforeVideoRef = useRef<HTMLVideoElement>(null);
  const afterVideoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    // Ensure videos play smoothly when component mounts
    const playVideos = async () => {
      if (beforeVideoRef.current) {
        try {
          beforeVideoRef.current.playbackRate = 1.0;
          await beforeVideoRef.current.play();
        } catch (error) {
          console.log('Before video autoplay prevented:', error);
        }
      }
      if (afterVideoRef.current) {
        try {
          afterVideoRef.current.playbackRate = 1.0;
          await afterVideoRef.current.play();
        } catch (error) {
          console.log('After video autoplay prevented:', error);
        }
      }
    };

    // Small delay to ensure videos are loaded
    const timer = setTimeout(playVideos, 100);
    return () => clearTimeout(timer);
  }, []);
  
  return (
    <section id="testimonials" className="py-24 bg-gray-900 relative overflow-hidden">
      {/* Subtle grid pattern for texture */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]" style={{ backgroundImage: "radial-gradient(#ffffff 1px, transparent 1px)", backgroundSize: "32px 32px" }}></div>
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-white mb-4">
            {t.testimonialsTitle}
          </h2>
          <p className="text-gray-400 text-lg font-bold">
            {t.testimonialsSubtitle}
          </p>
        </div>

        {/* Before & After Video Section */}
        <div className="max-w-6xl mx-auto mb-16">
          <div className="bg-gray-800/40 rounded-[2.5rem] p-6 md:p-10 border border-gray-700/50 shadow-2xl backdrop-blur-sm">
            <div className="text-center mb-10">
              <h3 className="text-2xl md:text-3xl font-black text-white mb-2 tracking-tight">
                {t.beforeAfterTitle}
              </h3>
              <p className="text-gray-400 font-bold">
                {t.beforeAfterSubtitle}
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-8 mb-8">
              {/* Before Video */}
              <div className="relative w-full group">
                <div className="absolute top-4 left-4 bg-red-500/90 backdrop-blur-md text-white px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest z-10 shadow-lg">
                  {t.beforeLabel}
                </div>
                <video
                  ref={beforeVideoRef}
                  src="/NanoOldSite.mov"
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="auto"
                  className="w-full h-auto rounded-[2rem] border-2 border-white/5 shadow-2xl object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                  style={{ aspectRatio: '16/9' }}
                />
              </div>
              
              {/* After Video */}
              <div className="relative w-full group">
                <div className="absolute top-4 left-4 bg-[#059669]/90 backdrop-blur-md text-white px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest z-10 shadow-lg">
                  {t.afterLabel}
                </div>
                <video
                  ref={afterVideoRef}
                  src="/NanoNewSite.mov"
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="auto"
                  className="w-full h-auto rounded-[2rem] border-2 border-[#059669]/30 shadow-2xl object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                  style={{ aspectRatio: '16/9' }}
                />
              </div>
            </div>
            
            {/* Link Button */}
            <div className="text-center">
              <a
                href="https://tokyowebsites.github.io/RenThaiMassage/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 bg-[#059669] text-white font-black uppercase tracking-widest text-xs rounded-full hover:bg-emerald-600 transition-all shadow-xl shadow-emerald-900/20 active:scale-95"
              >
                <Play size={18} className="fill-current" />
                {t.checkOutWebsite}
                <ExternalLink size={16} />
              </a>
            </div>
          </div>
        </div>

        {/* Original Testimonial */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-gray-800/60 to-gray-900/60 rounded-[3rem] p-8 md:p-16 border border-white/5 shadow-2xl relative overflow-hidden">
            {/* Decoration */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#059669]/5 blur-[100px] rounded-full -mr-32 -mt-32" />
            
            <div className="relative z-10">
              <div className="flex items-center gap-1 mb-8">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              
              <Quote className="w-16 h-16 text-[#059669]/20 mb-8" />
              
              <blockquote className="text-2xl md:text-4xl font-black text-white leading-[1.3] mb-12 tracking-tighter italic">
                「{t.testimonial1Quote}」
              </blockquote>
              
              <div className="pt-8 border-t border-white/10">
                <div className="flex items-center gap-6">
                  <div className="w-20 h-20 rounded-3xl bg-[#059669] text-white flex items-center justify-center shadow-xl shadow-emerald-900/20">
                    <span className="text-3xl font-black">R</span>
                  </div>
                  <div>
                    <div className="font-black text-white text-xl md:text-2xl mb-1 tracking-tight">
                      {t.testimonial1Name}
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-400 font-bold uppercase tracking-widest">
                      <MapPin size={14} className="text-[#059669]" />
                      <span>{t.testimonial1Location}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
