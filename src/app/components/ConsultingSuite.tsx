import { MapPin, Globe, Camera, MessageSquare, Star } from "lucide-react";
import { useTranslation } from "../lib/TranslationContext";

export function ConsultingSuite() {
  const { t } = useTranslation();
  
  const services = [
    {
      icon: Star,
      title: t.consultingService1,
      desc: t.consultingService1Desc,
    },
    {
      icon: MapPin,
      title: t.consultingService2,
      desc: t.consultingService2Desc,
    },
    {
      icon: Globe,
      title: t.consultingService3,
      desc: t.consultingService3Desc,
    },
    {
      icon: MessageSquare,
      title: t.consultingService4,
      desc: t.consultingService4Desc,
    },
    {
      icon: Camera,
      title: t.consultingService5,
      desc: t.consultingService5Desc,
    },
  ];

  return (
    <section id="consulting" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 text-xs font-bold mb-6 border border-emerald-200">
            <Star size={14} className="fill-current" />
            {t.consultingBadge}
          </div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 mb-4">
            {t.consultingTitle}
          </h2>
          <p className="text-gray-600 text-lg mb-2">
            {t.consultingDesc}
          </p>
          <p className="text-gray-600 text-lg">
            {t.consultingDesc2}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="bg-gray-50 rounded-2xl p-6 border border-gray-100 hover:shadow-lg hover:border-emerald-200 transition-all"
              >
                <div className="w-12 h-12 rounded-xl bg-emerald-100 flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-[#059669]" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {service.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

