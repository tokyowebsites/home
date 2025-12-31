import { MapPin, Globe, Camera, MessageSquare, Star } from "lucide-react";

export function ConsultingSuite() {
  const services = [
    {
      icon: Star,
      title: "食べログサポート",
      desc: "食べログの登録と最適化をサポートし、認知度向上と顧客エンゲージメントの改善を実現します。",
    },
    {
      icon: MapPin,
      title: "マップサービス（MEO）",
      desc: "Googleマップの最適化により、地域検索結果でお店が目立つようにサポートします。",
    },
    {
      icon: Globe,
      title: "多言語サポート",
      desc: "メニュー翻訳や観光客向けアクセシビリティのウェブコンサルティングで、海外のお客様を集客します。",
    },
    {
      icon: MessageSquare,
      title: "SNSサポート",
      desc: "ソーシャルメディアアカウントの設定と管理をサポート。継続的な管理のためのサブスクリプションモデルもご用意しています。",
    },
    {
      icon: Camera,
      title: "写真・PRサポート",
      desc: "ブランドイメージ向上のためのプロフェッショナルな写真撮影と、パブリックリレーションズサポートを提供します。",
    },
  ];

  return (
    <section id="consulting" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 text-xs font-bold mb-6 border border-emerald-200">
            <Star size={14} className="fill-current" />
            コンサルティングスイート
          </div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 mb-4">
            コンサルティングサービス
          </h2>
          <p className="text-gray-600 text-lg mb-2">
            「コンサルティング」というタイトルを正当化し、継続的な収益・価値を高めるため、
          </p>
          <p className="text-gray-600 text-lg">
            ウェブデザインを超えた5つの具体的なサポートサービスを提供しています。
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

