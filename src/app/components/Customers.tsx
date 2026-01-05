import { Quote, Star, MapPin, ExternalLink, Play } from "lucide-react";
import { useTranslation } from "../lib/TranslationContext";

export function Customers() {
  const { t } = useTranslation();
  
  return (
    <section id="testimonials" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 mb-4">
            {t.testimonialsTitle}
          </h2>
          <p className="text-gray-600 text-lg">
            {t.testimonialsSubtitle}
          </p>
        </div>

        {/* Before & After Video Section */}
        <div className="max-w-6xl mx-auto mb-16">
          <div className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-6 md:p-10 border border-gray-200 shadow-lg">
            <div className="text-center mb-6">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                {t.beforeAfterTitle}
              </h3>
              <p className="text-gray-600">
                {t.beforeAfterSubtitle}
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 mb-6">
              {/* Before Video */}
              <div className="relative w-full">
                <div className="absolute top-2 left-2 bg-red-500 text-white px-3 py-1 rounded-full text-xs font-bold z-10">
                  {t.beforeLabel}
                </div>
                <video
                  src="/NanoOldSite.mov"
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-auto rounded-xl border-2 border-gray-200 shadow-md object-cover"
                  style={{ aspectRatio: '16/9' }}
                  onTimeUpdate={(e) => {
                    const video = e.currentTarget;
                    if (video.playbackRate !== 0.8) video.playbackRate = 0.8;
                  }}
                />
              </div>
              
              {/* After Video */}
              <div className="relative w-full">
                <div className="absolute top-2 left-2 bg-emerald-500 text-white px-3 py-1 rounded-full text-xs font-bold z-10">
                  {t.afterLabel}
                </div>
                <video
                  src="/NanoNewSite.mov"
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-auto rounded-xl border-2 border-emerald-200 shadow-md object-cover"
                  style={{ aspectRatio: '16/9' }}
                  onTimeUpdate={(e) => {
                    const video = e.currentTarget;
                    if (video.playbackRate !== 0.8) video.playbackRate = 0.8;
                  }}
                />
              </div>
            </div>
            
            {/* Link Button */}
            <div className="text-center">
              <a
                href="https://tokyowebsites.github.io/RenThaiMassage/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#059669] text-white font-bold rounded-full hover:bg-emerald-600 transition-all shadow-lg shadow-emerald-200 hover:shadow-xl"
              >
                <Play size={18} />
                {t.checkOutWebsite}
                <ExternalLink size={16} />
              </a>
            </div>
          </div>
        </div>

        {/* Original Testimonial */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-emerald-50 to-white rounded-3xl p-8 md:p-12 border border-emerald-100 shadow-lg">
            <div className="flex items-center gap-1 mb-6">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
              ))}
            </div>
            
            <Quote className="w-12 h-12 text-emerald-200 mb-6" />
            
            <blockquote className="text-xl md:text-2xl text-gray-800 leading-relaxed mb-8 font-medium">
              「{t.testimonial1Quote}」
            </blockquote>
            
            <div className="pt-6 border-t border-emerald-200">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-full bg-emerald-100 flex items-center justify-center">
                  <span className="text-2xl font-bold text-emerald-700">R</span>
                </div>
                <div>
                  <div className="font-bold text-gray-900 text-lg mb-1">
                    {t.testimonial1Name}
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <MapPin size={14} />
                    <span>{t.testimonial1Location}</span>
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
