import { motion } from "motion/react";
import { ArrowRight, Clock, MapPin, Menu, ShoppingBag, MousePointer2, Phone, Star, ShieldCheck, Sparkles, Quote, Search, User, Truck } from "lucide-react";
import { useMemo, useState } from "react";

// --- Shared Components ---

function MiniHeader({ title, subtitle, links = [] }: { title: string; subtitle: string; links?: string[] }) {
  return (
    <header className="px-3 py-2.5 flex items-center justify-between border-b border-gray-100 bg-white sticky top-0 z-50 shadow-sm">
      <div className="flex items-center gap-2">
        <div className="w-7 h-7 bg-black text-white rounded-md flex items-center justify-center font-bold text-xs">
          {title.charAt(0)}
        </div>
        <div className="leading-tight">
          <div className="font-bold text-xs text-gray-900">{title}</div>
          <div className="text-[9px] text-gray-500 uppercase tracking-wide">{subtitle}</div>
        </div>
      </div>
      <nav className="hidden sm:flex gap-2 text-[10px] font-bold text-gray-500">
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
    <footer className="bg-gray-900 text-white p-4 text-center mt-auto">
      <div className="text-xs font-bold mb-1">Sample Business</div>
      <div className="text-[9px] text-gray-400">© 2025 tokyowebsites sample</div>
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
      <MiniHeader title="BAR TACHI" subtitle="TACHIKAWA" links={["Menu", "Access"]} />

      {/* Random Cursors */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-1/4"><FloatingCursor delay={0.5} seed={11} /></div>
        <div className="absolute bottom-1/3 right-1/4"><FloatingCursor delay={2.2} seed={12} /></div>
      </div>

      <div className="relative h-40 sm:h-52 bg-gray-900 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10" />
        <img 
          src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=80&w=800" 
          alt="Bar Interior" 
          className="w-full h-full object-cover opacity-80"
          loading="lazy"
        />
        <div className="absolute bottom-0 left-0 right-0 p-4 z-20 text-white">
          <div className="inline-flex items-center gap-1 text-[9px] font-bold tracking-wider uppercase bg-emerald-600 px-2 py-0.5 rounded mb-1">
            Open Today
          </div>
          <h1 className="text-xl sm:text-2xl font-bold mb-1">大人の隠れ家</h1>
          <p className="text-xs text-gray-300">立川駅徒歩5分。極上のカクテルと時間を。</p>
        </div>
      </div>

      <div className="p-3 sm:p-4 grid gap-3">
        <div className="grid grid-cols-3 gap-2">
          {[
            { label: "評価", value: "4.8", icon: Star },
            { label: "席数", value: "18", icon: Sparkles },
            { label: "電話", value: "OK", icon: Phone },
          ].map((k, i) => (
            <div key={i} className="bg-white p-2.5 rounded-lg border border-gray-100 shadow-sm">
              <div className="flex items-center gap-1 text-[9px] text-gray-500 font-bold">
                <k.icon className="w-3 h-3 text-emerald-600" />
                {k.label}
              </div>
              <div className="mt-1 text-sm font-bold text-gray-900">{k.value}</div>
            </div>
          ))}
        </div>

        <div className="bg-white p-3 rounded-lg border border-gray-100 shadow-sm">
          <div className="flex items-center gap-2 mb-2">
            <Clock className="w-3 h-3 text-gray-600" />
            <span className="font-bold text-xs">営業時間</span>
          </div>
          <div className="space-y-1 text-xs">
            <div className="flex justify-between">
              <span className="text-gray-500">Mon - Thu</span>
              <span className="font-bold">18:00 - 24:00</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-500">Fri - Sat</span>
              <span className="font-bold">18:00 - 02:00</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-2">
          <div className="bg-white p-2 rounded-lg border border-gray-100 shadow-sm">
            <div className="aspect-square bg-gray-100 rounded mb-1.5 overflow-hidden">
              <img src="https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&q=80&w=400" alt="Old Fashioned" className="w-full h-full object-cover" loading="lazy" />
            </div>
            <div className="text-[10px] font-bold">Old Fashioned</div>
            <div className="text-[10px] text-emerald-600 font-bold">¥1,200</div>
          </div>
          <div className="bg-white p-2 rounded-lg border border-gray-100 shadow-sm">
            <div className="aspect-square bg-gray-100 rounded mb-1.5 overflow-hidden">
              <img src="https://images.unsplash.com/photo-1572116469696-31de0f17cc34?auto=format&fit=crop&q=80&w=400" alt="Gin Tonic" className="w-full h-full object-cover" loading="lazy" />
            </div>
            <div className="text-[10px] font-bold">Gin Tonic</div>
            <div className="text-[10px] text-emerald-600 font-bold">¥900</div>
          </div>
        </div>

        <div className="bg-white rounded-lg border border-gray-100 shadow-sm p-3">
          <div className="text-[10px] font-bold text-gray-900 mb-1 flex items-center gap-1">
            <MapPin className="w-3 h-3 text-gray-600" />
            アクセス
          </div>
          <div className="text-[10px] text-gray-600 mb-2">東京都立川市 ○○1-2-3</div>
          <div className="grid grid-cols-2 gap-2">
            <button className="w-full bg-gray-900 text-white py-2 rounded-lg font-bold text-[10px] flex items-center justify-center gap-1">
              <MapPin size={10} /> Map
            </button>
            <button className="w-full bg-emerald-600 text-white py-2 rounded-lg font-bold text-[10px] flex items-center justify-center gap-1">
              <Phone size={10} /> 電話
            </button>
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
      <MiniHeader title="TOKYO LEGAL" subtitle="法律事務所" links={["サービス", "実績"]} />
      
      {/* Random Cursors */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/3 left-1/2"><FloatingCursor delay={1.0} seed={21} /></div>
        <div className="absolute bottom-1/4 right-10"><FloatingCursor delay={3.5} seed={22} /></div>
      </div>

      {/* Hero Section */}
      <div className="relative h-44 sm:h-56 bg-gradient-to-br from-slate-900 to-slate-700 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img 
            src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80&w=800" 
            alt="Office" 
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center p-4 z-10">
          <div className="inline-flex items-center gap-1 px-2 py-0.5 bg-emerald-500/30 border border-emerald-400/50 rounded-full text-[10px] font-bold mb-2 text-emerald-300">
            <ShieldCheck size={10} />
            創業25年
          </div>
          <h1 className="text-xl sm:text-2xl font-bold mb-2 leading-tight">
            ビジネスを法律面から支える。
          </h1>
          <p className="text-[10px] sm:text-xs opacity-90 max-w-xs mb-3">
            企業法務から個人相談まで、経験豊富な弁護士がサポート。
          </p>
          <button className="bg-emerald-600 text-white px-4 py-2 rounded-lg text-xs font-bold hover:bg-emerald-500 transition-colors shadow-lg">
            無料相談を予約
          </button>
        </div>
      </div>

      {/* Features Grid */}
      <div className="py-4 px-3 bg-gray-50">
        <div className="grid grid-cols-3 gap-2 mb-4">
          {[
            { title: "初回相談", value: "無料", icon: Sparkles, color: "bg-emerald-50 text-emerald-700" },
            { title: "対応実績", value: "1,200+", icon: Star, color: "bg-blue-50 text-blue-700" },
            { title: "即日対応", value: "可能", icon: Clock, color: "bg-amber-50 text-amber-700" },
          ].map((k, i) => (
            <div key={i} className={`${k.color} rounded-lg p-2 text-center`}>
              <k.icon className="w-4 h-4 mx-auto mb-1" />
              <div className="text-[9px] font-bold">{k.title}</div>
              <div className="text-sm font-bold">{k.value}</div>
            </div>
          ))}
        </div>

        {/* Practice Areas */}
        <h2 className="text-sm font-bold text-gray-900 mb-3 text-center">取扱分野</h2>
        <div className="grid grid-cols-2 gap-2">
          {[
            { icon: "🏢", title: "企業法務", price: "¥50,000~/月" },
            { icon: "⚖️", title: "訴訟・紛争", price: "¥300,000~" },
            { icon: "🏠", title: "不動産法務", price: "¥150,000~" },
            { icon: "👨‍👩‍👧", title: "相続・遺言", price: "¥200,000~" },
          ].map((item, i) => (
            <div key={i} className="bg-white rounded-lg border border-gray-200 p-3">
              <div className="text-lg mb-1">{item.icon}</div>
              <h3 className="font-bold text-xs text-gray-900">{item.title}</h3>
              <div className="text-[10px] font-bold text-emerald-600">{item.price}</div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-slate-900 text-white py-6 px-4 text-center">
        <h2 className="text-sm font-bold mb-2">まずは無料でご相談</h2>
        <p className="text-[10px] opacity-80 mb-3">24時間以内に返信</p>
        <button className="bg-emerald-600 text-white py-2 px-6 rounded-lg font-bold text-xs">
          📞 お電話する
        </button>
      </div>

      <MiniFooter />
    </div>
  );
}

export function BusinessPreview() {
  return (
    <div className="min-h-full bg-slate-50 relative">
      <MiniHeader title="TOKYO MARKET" subtitle="オンラインショップ" links={["商品", "お知らせ"]} />
      
      {/* Random Cursors */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[10%] left-[80%]"><FloatingCursor delay={0.2} seed={31} /></div>
        <div className="absolute top-[50%] left-[20%]"><FloatingCursor delay={1.8} seed={32} /></div>
      </div>

      <div className="relative h-40 sm:h-48 bg-gradient-to-br from-slate-900 to-slate-700 overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <img 
            src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=800" 
            alt="Store" 
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center p-4 z-10">
          <div className="text-[10px] font-bold tracking-widest uppercase mb-2 text-emerald-400">新商品入荷</div>
          <h2 className="text-xl sm:text-2xl font-bold mb-2">冬のセール開催中</h2>
          <p className="text-xs opacity-90 mb-3">全商品最大30%OFF</p>
          <button className="bg-emerald-600 text-white px-5 py-2 text-xs font-bold rounded-full hover:bg-emerald-500 transition-colors shadow-lg">
            今すぐチェック
          </button>
        </div>
      </div>

      <div className="p-3">
        <div className="grid grid-cols-3 gap-2 mb-4">
          {[
            { title: "送料無料", sub: "¥5,000~", icon: Truck },
            { title: "即日発送", sub: "15時迄", icon: Sparkles },
            { title: "安心決済", sub: "各種対応", icon: ShieldCheck },
          ].map((k, i) => (
            <div key={i} className="bg-white rounded-lg border border-gray-100 p-2 text-center shadow-sm">
              <k.icon className="w-4 h-4 text-gray-600 mx-auto mb-1" />
              <div className="text-[9px] font-bold text-gray-900">{k.title}</div>
              <div className="text-[8px] text-gray-500 font-semibold">{k.sub}</div>
            </div>
          ))}
        </div>

        <div className="flex items-center justify-between mb-3">
          <h3 className="font-bold text-sm text-gray-900">人気商品</h3>
          <span className="text-[10px] text-gray-400">→ もっと見る</span>
        </div>
        <div className="grid grid-cols-2 gap-2">
          {[
            { name: "ワイヤレスイヤホン", price: "¥8,980", tag: "NEW", img: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&q=80&w=400" },
            { name: "スマートウォッチ", price: "¥15,800", tag: "人気", img: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&q=80&w=400" },
            { name: "モバイルバッテリー", price: "¥3,980", tag: "SALE", img: "https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?auto=format&fit=crop&q=80&w=400" },
            { name: "ワイヤレス充電器", price: "¥4,580", tag: "", img: "https://images.unsplash.com/photo-1591290619762-d7b36440a45e?auto=format&fit=crop&q=80&w=400" },
          ].map((product, i) => (
            <div key={i} className="group cursor-pointer">
              <div className="aspect-square bg-white rounded-lg mb-1.5 overflow-hidden relative border border-gray-200 shadow-sm">
                <img src={product.img} alt={product.name} className="w-full h-full object-cover" loading="lazy" />
                {product.tag && (
                  <div className="absolute top-1.5 left-1.5 bg-slate-900 text-white text-[8px] font-bold px-1.5 py-0.5 rounded">
                    {product.tag}
                  </div>
                )}
                <button className="absolute bottom-1.5 right-1.5 w-7 h-7 bg-white rounded-full flex items-center justify-center shadow-md">
                  <ShoppingBag size={12} className="text-gray-900" />
                </button>
              </div>
              <div className="text-xs font-bold text-gray-900 truncate">{product.name}</div>
              <div className="text-xs text-emerald-600 font-bold">{product.price}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="px-3 pb-4">
        <div className="bg-white rounded-lg border border-gray-100 shadow-sm p-3">
          <div className="text-xs font-bold text-gray-900 mb-2 flex items-center gap-1">
            <Star className="w-3 h-3 text-amber-400 fill-amber-400" />
            お客様の声
          </div>
          <div className="space-y-2">
            {[
              { n: "田中様", t: "配送が早くて助かりました。", rating: 5 },
              { n: "佐藤様", t: "商品の品質が素晴らしい。", rating: 5 },
            ].map((r, i) => (
              <div key={i} className="bg-gray-50 rounded-md p-2 flex items-start gap-2">
                <div className="flex-1 min-w-0">
                  <div className="text-[10px] font-bold text-gray-700">{r.n}</div>
                  <div className="text-[10px] text-gray-600 truncate">{r.t}</div>
                </div>
                <div className="flex items-center gap-0.5 shrink-0">
                  {Array.from({ length: r.rating }).map((_, j) => (
                    <Star key={j} className="w-2 h-2 text-amber-400 fill-amber-400" />
                  ))}
                </div>
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
    "https://images.unsplash.com/photo-1600607686527-6fb886090705?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&q=80&w=800"
  ];

  return (
    <div className="min-h-full bg-white relative font-sans text-gray-900">
      {/* Random Cursors */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-50">
        <div className="absolute top-[15%] right-[20%]"><FloatingCursor delay={0.8} seed={41} /></div>
        <div className="absolute bottom-[30%] left-[10%]"><FloatingCursor delay={2.5} seed={42} /></div>
      </div>

      {/* Modern Transparent Header */}
      <div className="absolute top-0 left-0 right-0 z-20 flex items-center justify-between px-4 py-3 text-white mix-blend-difference">
        <div className="text-sm font-bold tracking-widest uppercase">L U X E</div>
        <Menu size={18} />
      </div>

      {/* Hero Slider */}
      <div className="relative h-48 sm:h-64 bg-gray-900 overflow-hidden">
        {images.map((img, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0 }}
            animate={{ opacity: i === activeImg ? 1 : 0 }}
            transition={{ duration: 0.8 }}
            className="absolute inset-0"
          >
            <img src={img} alt="Architecture" className="w-full h-full object-cover opacity-80" loading="lazy" />
          </motion.div>
        ))}
        <div className="absolute inset-0 flex flex-col justify-center px-4 z-10">
          <h1 className="text-xl sm:text-2xl font-light text-white leading-tight mb-2">
            Design for <span className="font-bold">Eternity</span>.
          </h1>
          <button className="self-start px-4 py-2 border border-white text-white text-[10px] tracking-widest uppercase hover:bg-white hover:text-black transition-colors">
            View Projects
          </button>
        </div>
        
        {/* Slider dots */}
        <div className="absolute bottom-3 left-4 flex gap-2 z-20">
          {images.map((_, i) => (
            <button 
              key={i}
              onClick={() => setActiveImg(i)}
              className={`w-1.5 h-1.5 rounded-full transition-all ${i === activeImg ? "bg-white scale-125" : "bg-white/50"}`}
            />
          ))}
        </div>
      </div>

      <div className="py-6 px-4 bg-white">
        <div className="flex justify-between items-end mb-4">
          <div>
            <div className="text-[9px] font-bold text-gray-400 uppercase tracking-widest mb-1">Philosophy</div>
            <h2 className="text-lg font-light leading-snug">
              Creating space that inspires.
            </h2>
          </div>
          <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
            <ArrowRight size={14} className="text-gray-900" />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3">
          {[
            { t: "Residential", img: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=400" },
            { t: "Commercial", img: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=400" },
          ].map((item, i) => (
            <div key={i} className="group cursor-pointer">
              <div className="aspect-[4/3] overflow-hidden mb-2 bg-gray-100 rounded-sm">
                <img src={item.img} alt={item.t} className="w-full h-full object-cover" loading="lazy" />
              </div>
              <div className="flex justify-between items-center border-b border-gray-200 pb-1">
                <span className="text-[10px] font-bold tracking-wide uppercase">{item.t}</span>
                <span className="text-[9px] text-gray-400">0{i+1}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-gray-50 py-6 px-4">
        <div className="text-center mb-4">
          <h3 className="text-sm font-light mb-1">Our Services</h3>
          <div className="w-6 h-0.5 bg-gray-900 mx-auto"></div>
        </div>
        <div className="grid gap-2">
          {[
            { t: "Architecture", d: "Comprehensive design." },
            { t: "Interior", d: "Space planning & styling." },
            { t: "Landscape", d: "Sustainable outdoor living." },
          ].map((s, i) => (
            <div key={i} className="bg-white p-3 shadow-sm border-l-2 border-gray-900">
              <h4 className="text-xs font-bold">{s.t}</h4>
              <p className="text-[10px] text-gray-500">{s.d}</p>
            </div>
          ))}
        </div>
      </div>

      <footer className="bg-black text-white py-6 px-4">
        <div className="text-sm font-bold tracking-widest uppercase mb-4">L U X E</div>
        <div className="grid grid-cols-2 gap-4 text-[9px] text-gray-400 uppercase tracking-wider mb-4">
          <div className="space-y-1">
            <div>Projects</div>
            <div>Studio</div>
          </div>
          <div className="space-y-1">
            <div>Contact</div>
            <div>Careers</div>
          </div>
        </div>
        <div className="text-[8px] text-gray-600 text-center">
          © 2025 LUXE ARCHITECTS
        </div>
      </footer>
    </div>
  );
}
