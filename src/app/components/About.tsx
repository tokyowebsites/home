import { Globe, Users, Rocket, MapPin } from "lucide-react";
import { useTranslation } from "../lib/TranslationContext";

export function About() {
  const { t } = useTranslation();
  
  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-800 text-xs font-bold mb-6 border border-blue-100">
            <Rocket size={14} className="fill-current" />
            {t.mission}
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
            {t.aboutTitle}<br />
            <span className="text-blue-600">{t.aboutTitleHighlight}</span>{t.aboutTitle2}
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            {t.aboutDesc}<br />
            {t.aboutDesc2}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100">
            <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-sm mb-6 text-blue-600">
              <Users size={24} />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">{t.aboutCard1Title}</h3>
            <p className="text-gray-600 leading-relaxed">
              {t.aboutCard1Desc}
            </p>
          </div>

          <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100">
            <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-sm mb-6 text-blue-600">
              <MapPin size={24} />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">{t.aboutCard2Title}</h3>
            <p className="text-gray-600 leading-relaxed">
              {t.aboutCard2Desc}
            </p>
          </div>

          <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100">
            <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-sm mb-6 text-blue-600">
              <Rocket size={24} />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">{t.aboutCard3Title}</h3>
            <p className="text-gray-600 leading-relaxed">
              {t.aboutCard3Desc}
            </p>
          </div>

          <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100">
            <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-sm mb-6 text-blue-600">
              <Globe size={24} />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">{t.aboutCard4Title}</h3>
            <p className="text-gray-600 leading-relaxed">
              {t.aboutCard4Desc}
            </p>
          </div>
        </div>

        {/* Differentiators */}
        <div className="mt-12 bg-gray-50 border border-gray-100 rounded-2xl p-6 md:p-8 shadow-sm">
          <h3 className="text-xl md:text-2xl font-extrabold text-gray-900 mb-4">
            {t.diffTitle}
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-4 bg-white rounded-xl border border-gray-100 shadow-sm">
              <div className="text-sm font-bold text-[#059669] mb-1">{t.diffFastTitle}</div>
              <p className="text-sm text-gray-700 leading-relaxed">{t.diffFastDesc}</p>
            </div>
            <div className="p-4 bg-white rounded-xl border border-gray-100 shadow-sm">
              <div className="text-sm font-bold text-[#059669] mb-1">{t.diffCasualTitle}</div>
              <p className="text-sm text-gray-700 leading-relaxed">{t.diffCasualDesc}</p>
            </div>
            <div className="p-4 bg-white rounded-xl border border-gray-100 shadow-sm">
              <div className="text-sm font-bold text-[#059669] mb-1">{t.diffMapsTitle}</div>
              <p className="text-sm text-gray-700 leading-relaxed">{t.diffMapsDesc}</p>
            </div>
            <div className="p-4 bg-white rounded-xl border border-gray-100 shadow-sm">
              <div className="text-sm font-bold text-[#059669] mb-1">{t.diffMultiTitle}</div>
              <p className="text-sm text-gray-700 leading-relaxed">{t.diffMultiDesc}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

