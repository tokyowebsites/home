import { motion } from "motion/react";
import { ArrowRight, Clock, MapPin, Menu, ShoppingBag, MousePointer2, Phone, Star, ShieldCheck, Sparkles, Quote, Search, User, Truck } from "lucide-react";
import { useMemo, useState } from "react";

// --- Shared Components ---

function MiniHeader({ title, subtitle, links = [] }: { title: string; subtitle: string; links?: string[] }) {
  return (
    <header className="px-5 py-4 flex items-center justify-between border-b border-gray-100 bg-white sticky top-0 z-50 shadow-sm">
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 bg-black text-white rounded-lg flex items-center justify-center font-bold text-sm">
          {title.charAt(0)}
        </div>
        <div className="leading-tight">
          <div className="font-bold text-sm text-gray-900">{title}</div>
          <div className="text-[10px] text-gray-500 uppercase tracking-wide">{subtitle}</div>
        </div>
      </div>
      <nav className="hidden sm:flex gap-3 text-[11px] font-bold text-gray-500">
        {links.map((l) => (
          <span key={l} className="hover:text-black cursor-pointer transition-colors">{l}</span>
        ))}
      </nav>
      <Menu className="sm:hidden w-4 h-4 text-gray-400" />
    </header>
  );
}

function MiniFooter() {
  return (
    <footer className="bg-gray-900 text-white p-8 text-center mt-auto">
      <div className="text-sm font-bold mb-2">Sample Business</div>
      <div className="text-[10px] text-gray-400">© 2025 tokyowebsites sample</div>
    </footer>
  );
}

// --- Floating Cursor Component ---
function mulberry32(seed: number) {
  return function () {
    let t = (seed += 0x6d2b79f5);
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function FloatingCursor({ delay = 0, seed = 1 }: { delay?: number; seed?: number }) {
  const cfg = useMemo(() => {
    const rnd = mulberry32(seed);
    const startX = rnd() * 220 - 110;
    const startY = rnd() * 220 - 110;
    const dx1 = rnd() * 120 - 60;
    const dy1 = rnd() * 120 - 60;
    const dx2 = rnd() * 120 - 60;
    const dy2 = rnd() * 120 - 60;
    const repeatDelay = rnd() * 3 + 2;
    return { startX, startY, dx1, dy1, dx2, dy2, repeatDelay };
  }, [seed]);

  return (
    <motion.div
      initial={{ opacity: 0, x: cfg.startX, y: cfg.startY }}
      animate={{ 
        opacity: [0, 1, 1, 0],
        x: [0, cfg.dx1, cfg.dx2],
        y: [0, cfg.dy1, cfg.dy2],
      }}
      transition={{
        duration: 4,
        delay: delay,
        repeat: Infinity,
        repeatDelay: cfg.repeatDelay,
      }}
      className="absolute z-50 pointer-events-none"
    >
      <MousePointer2 className="w-4 h-4 text-black fill-black drop-shadow-md" />
      <motion.div
        animate={{ scale: [1, 1.5], opacity: [0.5, 0] }}
        transition={{ duration: 0.5, delay: 0.5, repeat: Infinity, repeatDelay: 2 }}
        className="absolute -top-2 -left-2 w-8 h-8 bg-black/10 rounded-full"
      />
    </motion.div>
  );
}

// --- Plan Previews ---

export function EntryPreview() {
  return (
    <div className="min-h-full bg-slate-50 relative">
      <MiniHeader title="BAR TACHI" subtitle="TACHIKAWA, TOKYO" links={["Menu", "Access"]} />

      {/* Random Cursors */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-1/4"><FloatingCursor delay={0.5} seed={11} /></div>
        <div className="absolute bottom-1/3 right-1/4"><FloatingCursor delay={2.2} seed={12} /></div>
      </div>

      <div className="relative h-64 bg-gray-900 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10" />
        <img 
          src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=80" 
          alt="Bar Interior" 
          className="w-full h-full object-cover opacity-80"
        />
        <div className="absolute bottom-0 left-0 right-0 p-6 z-20 text-white">
          <div className="inline-flex items-center gap-2 text-[10px] font-bold tracking-wider uppercase bg-[#0f172a] px-2 py-1 rounded mb-2">
            Open Today
          </div>
          <h1 className="text-3xl font-bold mb-2">大人の隠れ家</h1>
          <p className="text-sm text-gray-300">立川駅徒歩5分。極上のカクテルと時間を。</p>
        </div>
      </div>

      <div className="p-6 grid gap-6">
        <div className="grid grid-cols-3 gap-3">
          {[
            { label: "評価", value: "4.8", icon: Star },
            { label: "席数", value: "18", icon: Sparkles },
            { label: "電話", value: "OK", icon: Phone },
          ].map((k, i) => (
            <div key={i} className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
              <div className="flex items-center gap-2 text-[10px] text-gray-500 font-bold">
                <k.icon className="w-4 h-4 text-[#0f172a]" />
                {k.label}
              </div>
              <div className="mt-2 text-lg font-bold text-gray-900">{k.value}</div>
            </div>
          ))}
        </div>

        <div className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm">
          <div className="flex items-center gap-2 mb-4">
            <Clock className="w-4 h-4 text-[#0f172a]" />
            <span className="font-bold text-sm">営業時間</span>
          </div>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between border-b border-gray-100 pb-1">
              <span>Mon - Thu</span>
              <span className="font-bold">18:00 - 24:00</span>
            </div>
            <div className="flex justify-between border-b border-gray-100 pb-1">
              <span>Fri - Sat</span>
              <span className="font-bold">18:00 - 02:00</span>
            </div>
            <div className="flex justify-between text-gray-400">
              <span>Sunday</span>
              <span>Closed</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3">
          <div className="bg-white p-3 rounded-xl border border-gray-100 shadow-sm">
            <div className="aspect-square bg-gray-100 rounded-lg mb-2 overflow-hidden">
               <img src="https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&q=80" className="w-full h-full object-cover" />
            </div>
            <div className="text-xs font-bold">Old Fashioned</div>
            <div className="text-[10px] text-[#059669] font-bold">¥1,200</div>
          </div>
           <div className="bg-white p-3 rounded-xl border border-gray-100 shadow-sm">
            <div className="aspect-square bg-gray-100 rounded-lg mb-2 overflow-hidden">
               <img src="https://images.unsplash.com/photo-1572116469696-31de0f17cc34?auto=format&fit=crop&q=80" className="w-full h-full object-cover" />
            </div>
            <div className="text-xs font-bold">Gin Tonic</div>
            <div className="text-[10px] text-[#059669] font-bold">¥900</div>
          </div>
        </div>

        <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-5">
          <div className="text-xs font-bold text-gray-900 mb-2 flex items-center gap-2">
            <MapPin className="w-4 h-4 text-[#0f172a]" />
            アクセス
          </div>
          <div className="text-xs text-gray-600 leading-relaxed">
            東京都立川市 ○○1-2-3 / 立川駅北口より徒歩5分
          </div>
          <div className="mt-4 grid grid-cols-2 gap-3">
            <button className="w-full bg-black text-white py-3 rounded-xl font-bold text-xs flex items-center justify-center gap-2 hover:bg-gray-800 transition-colors">
              <MapPin size={14} /> Google Map
            </button>
            <button className="w-full bg-[#059669] text-white py-3 rounded-xl font-bold text-xs flex items-center justify-center gap-2 hover:bg-emerald-700 transition-colors">
              <Phone size={14} /> 電話する
            </button>
          </div>
        </div>

        <div className="bg-white rounded-xl border border-gray-100 p-5 shadow-sm">
          <div className="text-xs font-bold text-gray-900 mb-3 flex items-center gap-2">
            <Quote className="w-4 h-4 text-[#0f172a]" /> 口コミ
          </div>
          <div className="space-y-3">
            {[
              { name: "K.S.", text: "雰囲気が最高。スタッフの対応も丁寧で、また来たいと思いました。" },
              { name: "M.T.", text: "カクテルが本格的。静かに過ごせる大人のバー。" },
            ].map((r, i) => (
              <div key={i} className="bg-gray-50 rounded-lg border border-gray-100 p-4">
                <div className="text-[10px] font-bold text-gray-500 mb-1">{r.name}</div>
                <div className="text-xs text-gray-700 leading-relaxed">{r.text}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <MiniFooter />
    </div>
  );
}

export function StandardPreview() {
  return (
    <div className="min-h-full bg-white relative">
      <MiniHeader title="TOKYO LEGAL PARTNERS" subtitle="東京法律事務所" links={["サービス", "弁護士紹介", "実績", "お問い合わせ"]} />
      
       {/* Random Cursors */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/3 left-1/2"><FloatingCursor delay={1.0} seed={21} /></div>
        <div className="absolute bottom-1/4 right-10"><FloatingCursor delay={3.5} seed={22} /></div>
      </div>

      {/* Hero Section with Image */}
      <div className="relative h-80 bg-gradient-to-br from-slate-900 to-slate-700 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img 
            src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80" 
            alt="Office" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center p-8 z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#059669]/20 border border-[#059669]/50 rounded-full text-xs font-bold mb-4 text-[#059669]">
            <ShieldCheck size={12} />
            創業25年の実績
          </div>
          <h1 className="text-4xl font-bold mb-4 leading-tight">
            ビジネスの成長を<br/>法律面から支える。
          </h1>
          <p className="text-sm opacity-90 max-w-md mb-6">
            企業法務から個人の法律相談まで、<br/>経験豊富な弁護士が最適な解決策を提供します。
          </p>
          <div className="flex gap-3">
            <button className="bg-[#059669] text-white px-6 py-3 rounded-xl text-sm font-bold hover:bg-emerald-600 transition-colors shadow-lg">
              無料相談を予約
            </button>
            <button className="bg-white/10 backdrop-blur text-white px-6 py-3 rounded-xl text-sm font-bold border border-white/20 hover:bg-white/20 transition-colors">
              料金表を見る
            </button>
          </div>
        </div>
      </div>

      {/* Features Grid */}
      <div className="py-12 px-6 bg-gray-50">
        <div className="grid grid-cols-3 gap-4 mb-10">
          {[
            { title: "初回相談", value: "無料", sub: "30分まで", icon: Sparkles, color: "bg-emerald-50 text-emerald-700" },
            { title: "対応実績", value: "1,200+", sub: "件以上", icon: Star, color: "bg-blue-50 text-blue-700" },
            { title: "即日対応", value: "可能", sub: "緊急案件", icon: Clock, color: "bg-amber-50 text-amber-700" },
          ].map((k, i) => (
            <div key={i} className={`${k.color} rounded-2xl shadow-sm p-4 text-center`}>
              <k.icon className="w-6 h-6 mx-auto mb-2" />
              <div className="text-xs font-bold mb-1">{k.title}</div>
              <div className="text-2xl font-bold mb-1">{k.value}</div>
              <div className="text-[10px] opacity-70">{k.sub}</div>
            </div>
          ))}
        </div>

        {/* Practice Areas Cards */}
        <h2 className="text-xl font-bold text-gray-900 mb-6 text-center">取扱分野</h2>
        <div className="grid grid-cols-2 gap-4">
          {[
            { icon: "🏢", title: "企業法務", desc: "契約書作成・顧問業務", price: "月額 ¥50,000~" },
            { icon: "⚖️", title: "訴訟・紛争", desc: "民事・商事訴訟対応", price: "¥300,000~" },
            { icon: "🏠", title: "不動産法務", desc: "売買・賃貸トラブル", price: "¥150,000~" },
            { icon: "👨‍👩‍👧", title: "相続・遺言", desc: "遺産分割・相続手続", price: "¥200,000~" },
          ].map((item, i) => (
            <div key={i} className="bg-white rounded-xl border border-gray-200 p-5 hover:shadow-lg transition-shadow cursor-pointer group">
              <div className="text-3xl mb-3">{item.icon}</div>
              <h3 className="font-bold text-sm text-gray-900 mb-1 group-hover:text-[#0f172a] transition-colors">{item.title}</h3>
              <p className="text-xs text-gray-500 mb-3">{item.desc}</p>
              <div className="text-xs font-bold text-[#059669]">{item.price}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Success Stories */}
      <div className="py-10 px-6 bg-white">
        <h2 className="text-lg font-bold text-gray-900 mb-6 flex items-center gap-2">
          <Star className="w-5 h-5 text-amber-400 fill-amber-400" />
          解決実績
        </h2>
        <div className="space-y-4">
          {[
            { cat: "企業法務", title: "大手企業との契約交渉を成功裏に完了", result: "5000万円の損害賠償請求を回避" },
            { cat: "不動産", title: "不動産売買トラブルを2週間で解決", result: "全額返金 + 慰謝料獲得" },
          ].map((item, i) => (
            <div key={i} className="bg-gray-50 rounded-xl border border-gray-100 p-5">
              <div className="inline-flex items-center px-2 py-1 bg-[#0f172a] text-white text-[10px] font-bold rounded mb-2">
                {item.cat}
              </div>
              <h3 className="font-bold text-sm text-gray-900 mb-2">{item.title}</h3>
              <p className="text-xs text-[#059669] font-bold">✓ {item.result}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-br from-slate-900 to-slate-700 text-white py-10 px-6 text-center">
        <h2 className="text-xl font-bold mb-3">まずは無料でご相談ください</h2>
        <p className="text-sm opacity-90 mb-6">24時間以内に返信いたします</p>
        <div className="flex flex-col gap-3 max-w-xs mx-auto">
          <button className="bg-[#059669] text-white py-3 rounded-xl font-bold hover:bg-emerald-600 transition-colors shadow-lg">
            📞 03-XXXX-XXXX
          </button>
          <button className="bg-white/10 backdrop-blur border border-white/20 text-white py-3 rounded-xl font-bold hover:bg-white/20 transition-colors">
            ✉️ メールで相談
          </button>
        </div>
      </div>

      <MiniFooter />
    </div>
  );
}

export function BusinessPreview() {
  return (
    <div className="min-h-full bg-slate-50 relative">
      <MiniHeader title="TOKYO MARKET" subtitle="オンラインショップ" links={["商品一覧", "お知らせ", "お問い合わせ"]} />
      
       {/* Random Cursors */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[10%] left-[80%]"><FloatingCursor delay={0.2} seed={31} /></div>
        <div className="absolute top-[50%] left-[20%]"><FloatingCursor delay={1.8} seed={32} /></div>
        <div className="absolute bottom-[10%] right-[30%]"><FloatingCursor delay={4.0} seed={33} /></div>
      </div>

      <div className="relative h-72 bg-gradient-to-br from-slate-900 to-slate-700 mb-6 group overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img 
            src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80" 
            alt="Store" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center p-6 z-10">
          <div className="text-xs font-bold tracking-widest uppercase mb-3 text-emerald-400">新商品入荷</div>
          <h2 className="text-4xl font-bold mb-3">冬のセール開催中</h2>
          <p className="text-sm mb-6 opacity-90 max-w-md">全商品最大30%OFF。この機会をお見逃しなく。</p>
          <button className="bg-[#059669] text-white px-8 py-3 text-sm font-bold rounded-full hover:bg-emerald-600 transition-colors shadow-lg shadow-emerald-200" style={{ fontWeight: 700 }}>
            今すぐチェック
          </button>
        </div>
      </div>

      <div className="px-6 mb-10">
        <div className="grid grid-cols-3 gap-3 mb-8">
          {[
            { title: "送料無料", sub: "¥5,000以上", icon: Truck },
            { title: "即日発送", sub: "15時まで", icon: Sparkles },
            { title: "安心決済", sub: "各種対応", icon: ShieldCheck },
          ].map((k, i) => (
            <div key={i} className="bg-white rounded-xl border border-gray-100 p-4 text-center shadow-sm">
              <k.icon className="w-5 h-5 text-[#0f172a] mx-auto mb-2" />
              <div className="text-xs font-bold text-gray-900">{k.title}</div>
              <div className="text-[10px] text-gray-500 font-semibold">{k.sub}</div>
            </div>
          ))}
        </div>

        <div className="flex items-center justify-between mb-6">
          <h3 className="font-bold text-xl text-gray-900">人気商品</h3>
          <a href="#" className="text-xs text-gray-500 border-b border-gray-300 pb-0.5 hover:text-gray-900 transition-colors">もっと見る</a>
        </div>
        <div className="grid grid-cols-2 gap-4">
          {[
            { name: "ワイヤレスイヤホン", price: "¥8,980", tag: "NEW", img: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&q=80&w=400" },
            { name: "スマートウォッチ", price: "¥15,800", tag: "人気", img: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&q=80&w=400" },
            { name: "モバイルバッテリー", price: "¥3,980", tag: "SALE", img: "https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?auto=format&fit=crop&q=80&w=400" },
            { name: "ワイヤレス充電器", price: "¥4,580", tag: "", img: "https://images.unsplash.com/photo-1591290619762-d7b36440a45e?auto=format&fit=crop&q=80&w=400" },
          ].map((product, i) => (
            <div key={i} className="group cursor-pointer">
              <div className="aspect-square bg-white rounded-xl mb-3 overflow-hidden relative border border-gray-200 shadow-sm">
                 <img src={product.img} alt={product.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                 {product.tag && (
                   <div className="absolute top-2 left-2 bg-[#0f172a] text-white text-[10px] font-bold px-2 py-1 rounded">
                     {product.tag}
                   </div>
                 )}
                 <button className="absolute bottom-2 right-2 w-9 h-9 bg-white rounded-full flex items-center justify-center shadow-lg opacity-0 group-hover:opacity-100 transition-opacity">
                    <ShoppingBag size={16} className="text-gray-900" />
                 </button>
              </div>
              <div className="text-sm font-bold text-gray-900">{product.name}</div>
              <div className="text-sm text-[#059669] font-bold" style={{ fontWeight: 700 }}>{product.price}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="px-6 pb-10">
        <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6">
          <div className="text-sm font-bold text-gray-900 mb-4 flex items-center gap-2">
            <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
            お客様の声
          </div>
          <div className="grid grid-cols-1 gap-4">
            {[
              { n: "田中様", t: "配送が早くて助かりました。梱包も丁寧で安心です。", rating: 5 },
              { n: "佐藤様", t: "商品の品質が素晴らしい。また利用したいです。", rating: 5 },
            ].map((r, i) => (
              <div key={i} className="bg-gray-50 rounded-lg border border-gray-100 p-4">
                <div className="flex items-center justify-between mb-2">
                  <div className="text-xs font-bold text-gray-900">{r.n}</div>
                  <div className="flex items-center gap-1">
                    {Array.from({ length: r.rating }).map((_, j) => (
                      <Star key={j} className="w-3 h-3 text-amber-400 fill-amber-400" />
                    ))}
                  </div>
                </div>
                <div className="text-xs text-gray-700 leading-relaxed">{r.t}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <MiniFooter />
    </div>
  );
}

// --- Premium Preview: High-End Architecture/Luxury ---
export function PremiumPreview() {
  const [activeImg, setActiveImg] = useState(0);
  const images = [
    "https://images.unsplash.com/photo-1600607686527-6fb886090705?auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&q=80"
  ];

  return (
    <div className="min-h-full bg-white relative font-sans text-gray-900">
       {/* Random Cursors */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-50">
        <div className="absolute top-[15%] right-[20%]"><FloatingCursor delay={0.8} seed={41} /></div>
        <div className="absolute bottom-[30%] left-[10%]"><FloatingCursor delay={2.5} seed={42} /></div>
      </div>

      {/* Modern Transparent Header */}
      <div className="absolute top-0 left-0 right-0 z-20 flex items-center justify-between px-6 py-6 text-white mix-blend-difference">
        <div className="text-lg font-bold tracking-widest uppercase">L U X E</div>
        <Menu size={24} />
      </div>

      {/* Fullscreen Hero Slider */}
      <div className="relative h-[500px] bg-gray-900 overflow-hidden">
        {images.map((img, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0 }}
            animate={{ opacity: i === activeImg ? 1 : 0 }}
            transition={{ duration: 1 }}
            className="absolute inset-0"
          >
            <img src={img} className="w-full h-full object-cover opacity-80" />
          </motion.div>
        ))}
        <div className="absolute inset-0 flex flex-col justify-center px-8 z-10">
          <motion.h1 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-4xl font-light text-white leading-tight mb-4"
          >
            Design for <br/><span className="font-bold">Eternity</span>.
          </motion.h1>
          <motion.button 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="self-start px-6 py-3 border border-white text-white text-xs tracking-widest uppercase hover:bg-white hover:text-black transition-colors"
          >
            View Projects
          </motion.button>
        </div>
        
        {/* Slider dots */}
        <div className="absolute bottom-8 left-8 flex gap-3 z-20">
          {images.map((_, i) => (
            <button 
              key={i}
              onClick={() => setActiveImg(i)}
              className={`w-2 h-2 rounded-full transition-all ${i === activeImg ? "bg-white scale-125" : "bg-white/50"}`}
            />
          ))}
        </div>
      </div>

      <div className="py-16 px-8 bg-white">
        <div className="flex justify-between items-end mb-12">
          <div>
            <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2">Philosophy</div>
            <h2 className="text-2xl font-light leading-snug">
              Creating space<br/>that inspires.
            </h2>
          </div>
          <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center">
            <ArrowRight size={20} className="text-gray-900" />
          </div>
        </div>

        <div className="grid gap-8">
          {[
            { t: "Residential", img: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80" },
            { t: "Commercial", img: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80" },
          ].map((item, i) => (
            <div key={i} className="group cursor-pointer">
              <div className="aspect-[4/3] overflow-hidden mb-4 bg-gray-100">
                <img src={item.img} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="flex justify-between items-center border-b border-gray-200 pb-2">
                <span className="text-sm font-bold tracking-wide uppercase">{item.t}</span>
                <span className="text-xs text-gray-400">0{i+1}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-gray-50 py-16 px-8">
        <div className="text-center mb-10">
          <h3 className="text-xl font-light mb-2">Our Services</h3>
          <div className="w-8 h-0.5 bg-[#0f172a] mx-auto"></div>
        </div>
        <div className="grid gap-4">
          {[
            { t: "Architecture", d: "Comprehensive design services." },
            { t: "Interior", d: "Space planning and styling." },
            { t: "Landscape", d: "Sustainable outdoor living." },
          ].map((s, i) => (
            <div key={i} className="bg-white p-6 shadow-sm border-l-2 border-[#0f172a]">
              <h4 className="text-sm font-bold mb-1">{s.t}</h4>
              <p className="text-xs text-gray-500">{s.d}</p>
            </div>
          ))}
        </div>
      </div>

      <footer className="bg-black text-white py-12 px-8">
        <div className="text-2xl font-bold tracking-widest uppercase mb-8">L U X E</div>
        <div className="grid grid-cols-2 gap-8 text-[10px] text-gray-400 uppercase tracking-wider mb-12">
          <div className="space-y-2">
            <div>Projects</div>
            <div>Studio</div>
            <div>News</div>
          </div>
          <div className="space-y-2">
            <div>Contact</div>
            <div>Careers</div>
            <div>Legal</div>
          </div>
        </div>
        <div className="text-[9px] text-gray-600 text-center">
          © 2025 LUXE ARCHITECTS
        </div>
      </footer>
    </div>
  );
}
