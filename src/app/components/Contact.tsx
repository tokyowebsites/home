import { Mail, MapPin, Clock, ArrowRight, CheckCircle, Loader2 } from "lucide-react";
import { useState } from "react";
import { db } from "../lib/db";
import { toast } from "sonner";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    plan: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      await db.createInquiry(formData);
      setIsSuccess(true);
      toast.success("お問い合わせを受け付けました。");
      setFormData({ name: "", email: "", phone: "", plan: "", message: "" });
      
      // Reset success message after a delay
      setTimeout(() => setIsSuccess(false), 5000);
    } catch (error) {
      console.error(error);
      toast.error("送信に失敗しました。もう一度お試しください。");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Subtle Grid Background */}
      <div className="absolute inset-0 opacity-10" style={{ 
        backgroundImage: "linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)", 
        backgroundSize: "40px 40px" 
      }}></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          
          {/* Left: Heading & Info */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight leading-tight">
              レベルアップの準備は<br/><span className="text-[#059669]">できていますか？</span>
            </h2>
            <p className="text-gray-400 text-lg mb-10 max-w-md leading-relaxed">
              ご相談・お見積もりは無料です。<br/>
              まずはお気軽にお問い合わせください。
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-4 group">
                <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center border border-white/10 group-hover:border-[#0f172a]/50 transition-colors">
                  <Mail size={20} className="text-gray-300 group-hover:text-[#0f172a] transition-colors" />
                </div>
                <div>
                  <div className="text-sm font-bold text-white mb-1">メール</div>
                  <div className="text-gray-400">contact@tokyowebsites.com</div>
                </div>
              </div>

              <div className="flex items-start gap-4 group">
                <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center border border-white/10 group-hover:border-[#0f172a]/50 transition-colors">
                  <Clock size={20} className="text-gray-300 group-hover:text-[#0f172a] transition-colors" />
                </div>
                <div>
                  <div className="text-sm font-bold text-white mb-1">返信時間</div>
                  <div className="text-gray-400">24時間以内</div>
                </div>
              </div>

              <div className="flex items-start gap-4 group">
                <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center border border-white/10 group-hover:border-[#0f172a]/50 transition-colors">
                  <MapPin size={20} className="text-gray-300 group-hover:text-[#0f172a] transition-colors" />
                </div>
                <div>
                  <div className="text-sm font-bold text-white mb-1">所在地</div>
                  <div className="text-gray-400">東京都立川市</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Minimal Form */}
          <div className="bg-slate-900/50 p-8 rounded-3xl border border-white/10 shadow-2xl backdrop-blur-sm">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-2 gap-5">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-500 uppercase tracking-wider">Name</label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:border-[#0f172a] focus:ring-1 focus:ring-[#0f172a] outline-none transition-all"
                    placeholder="お名前"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-500 uppercase tracking-wider">Phone</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:border-[#0f172a] focus:ring-1 focus:ring-[#0f172a] outline-none transition-all"
                    placeholder="電話番号"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-gray-500 uppercase tracking-wider">Email</label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:border-[#0f172a] focus:ring-1 focus:ring-[#0f172a] outline-none transition-all"
                  placeholder="email@example.com"
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-gray-500 uppercase tracking-wider">Message</label>
                <textarea
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:border-[#0f172a] focus:ring-1 focus:ring-[#0f172a] outline-none transition-all resize-none"
                  placeholder="ご相談内容"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting || isSuccess}
                className="w-full bg-[#059669] text-white font-bold py-4 rounded-xl shadow-lg hover:bg-emerald-600 transition-all active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    送信中...
                  </>
                ) : isSuccess ? (
                  <>
                    <CheckCircle className="w-5 h-5" />
                    送信完了
                  </>
                ) : (
                  <>
                    無料相談を申し込む
                    <ArrowRight className="w-5 h-5" />
                  </>
                )}
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}
