import { Globe, Users, Rocket } from "lucide-react";

export function About() {
  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-800 text-xs font-bold mb-6 border border-blue-100">
            <Rocket size={14} className="fill-current" />
            私たちのミッション
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
            日本の「おもてなし」を、<br />
            <span className="text-blue-600">言葉の壁を越えて</span>世界中へ。
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            私たちは、日本の小規模事業者様のウェブサイト制作・運営を支援するコンサルティングチームです。<br />
            ただサイトを作るだけではありません。あなたのビジネスを世界中の人々に知ってもらうための架け橋となります。
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100">
            <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-sm mb-6 text-blue-600">
              <Users size={24} />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">地域ビジネスのデジタル化</h3>
            <p className="text-gray-600 leading-relaxed">
              古くなったウェブサイトを最新技術でリニューアル。
              サーバー管理から保守まで一貫してサポートし、
              本業に集中できる環境を整えます。
            </p>
          </div>

          <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100">
            <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-sm mb-6 text-blue-600">
              <Globe size={24} />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">4ヶ国語対応を標準に</h3>
            <p className="text-gray-600 leading-relaxed">
              日本語に加え、英語・中国語・韓国語への対応をサポート。
              インバウンド需要を取り込み、
              新たな顧客層との接点を創出します。
            </p>
          </div>

          <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100">
            <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-sm mb-6 text-blue-600">
              <Rocket size={24} />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">海外への発信力</h3>
            <p className="text-gray-600 leading-relaxed">
              オンラインでの検索対策（SEO）を含め、
              海外のお客様があなたのお店やサービスを
              見つけやすくするための戦略を提案します。
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

