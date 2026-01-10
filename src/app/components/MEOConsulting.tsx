import { MapPin, TrendingUp, MessageSquare, Camera } from "lucide-react";
import { useTranslation } from "../lib/TranslationContext";

export function MEOConsulting() {
  const { t } = useTranslation();
  const surveyLink = "https://docs.google.com/forms/d/e/1FAIpQLSf1sejWp_jKe4SxmAtVtNxCoBnU78Ul6TynXUWtD_9GFRcnUQ/viewform?usp=sharing&ouid=109641339829497082567";

  const features = [
    { icon: TrendingUp, text: t.meoFeature1 },
    { icon: MessageSquare, text: t.meoFeature2 },
    { icon: Camera, text: t.meoFeature3 },
  ];

  return (
    <section id="meo-consulting" className="py-12 bg-emerald-50 relative overflow-hidden">
      <div className="absolute top-0 right-0 -mt-16 -mr-16 w-64 h-64 bg-emerald-100 rounded-full blur-3xl opacity-40" />
      <div className="absolute bottom-0 left-0 -mb-16 -ml-16 w-64 h-64 bg-blue-100 rounded-full blur-3xl opacity-40" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 transform scale-95 md:scale-90 origin-center">
        <div className="bg-white rounded-2xl p-5 md:p-7 shadow-xl border border-emerald-100 flex flex-col gap-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 text-xs font-bold border border-emerald-100 shadow-sm w-fit">
            <MapPin size={14} className="fill-current" />
            MEO Boost
          </div>

          <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 leading-snug">
            {t.meoSubtitle}
          </h2>
          <p className="text-sm md:text-base text-gray-800 font-bold leading-relaxed">
            {t.meoUrgency}
          </p>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed">
            {t.meoDesc}
          </p>

          <div className="grid md:grid-cols-3 gap-3">
            {features.map((f, i) => (
              <div key={i} className="flex items-center gap-2 p-2.5 rounded-xl bg-emerald-50 border border-emerald-100">
                <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-[#059669] shadow-sm">
                  <f.icon size={16} />
                </div>
                <span className="text-xs md:text-sm font-bold text-gray-800 leading-snug">{f.text}</span>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
            <div className="text-xs text-gray-500 font-semibold">
              {t.securePayment}
            </div>
            <a
              href={surveyLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-4 py-2 bg-[#059669] text-white font-bold rounded-lg shadow-md hover:bg-emerald-600 transition-colors text-sm w-full sm:w-auto"
            >
              {t.meoSurveyCta}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
