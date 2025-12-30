import { MapPin, Globe, Camera, MessageSquare, Star } from "lucide-react";

export function ConsultingSuite() {
  const services = [
    {
      icon: Star,
      title: "Taberogu Support",
      desc: "Assisting with setup and optimization of Taberogu listings to improve visibility and customer engagement.",
      ja: "食べログサポート",
    },
    {
      icon: MapPin,
      title: "Map Services (MEO)",
      desc: "Google Maps optimization to ensure your business appears prominently in local search results.",
      ja: "マップサービス（MEO）",
    },
    {
      icon: Globe,
      title: "Multi-Language Support",
      desc: "Web consulting for menu translation and tourist accessibility to attract international customers.",
      ja: "多言語サポート",
    },
    {
      icon: MessageSquare,
      title: "Social Media Support",
      desc: "Set up and manage social media accounts with potential subscription model for ongoing management.",
      ja: "SNSサポート",
    },
    {
      icon: Camera,
      title: "Photography & PR",
      desc: "Professional photo shoots to improve brand image and Public Relations support for your business.",
      ja: "写真・PRサポート",
    },
  ];

  return (
    <section id="consulting" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 text-xs font-bold mb-6 border border-emerald-200">
            <Star size={14} className="fill-current" />
            The Consulting Suite
          </div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 mb-4">
            コンサルティングサービス
          </h2>
          <p className="text-gray-600 text-lg mb-2">
            To justify the title of "Consulting" and increase recurring revenue/value,
          </p>
          <p className="text-gray-600 text-lg">
            we offer 5 specific support services beyond web design.
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
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {service.title}
                </h3>
                <div className="text-sm text-emerald-700 font-bold mb-3">
                  {service.ja}
                </div>
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

