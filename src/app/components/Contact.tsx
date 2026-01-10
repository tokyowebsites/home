import { Mail, MapPin, Clock, ArrowRight, Loader2, CheckCircle } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { useTranslation } from "../lib/TranslationContext";

export function Contact() {
  const { t } = useTranslation();
  const meoSurveyLink = "https://docs.google.com/forms/d/e/1FAIpQLSf1sejWp_jKe4SxmAtVtNxCoBnU78Ul6TynXUWtD_9GFRcnUQ/viewform?usp=sharing&ouid=109641339829497082567";
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    plan: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [lastError, setLastError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setLastError(null);

    try {
      const formEl = e.currentTarget;
      const action = formEl.action || "https://formspree.io/f/mkoglvvk";
      const fd = new FormData(formEl);

      // Ensure Formspree helper fields are set
      fd.set("_replyto", formData.email);
      fd.set("_subject", "New Consultation Inquiry");
      fd.set("_formname", "Tokyo Websites Contact");

      const response = await fetch(action, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: fd,
      });

      if (!response.ok) {
        let reason = "Form submission failed";
        try {
          const errorData = await response.json();
          if (errorData?.error) reason = errorData.error;
          if (errorData?.errors?.length) reason = errorData.errors.map((e: any) => e.message).join("; ");
        } catch (_) {
          // ignore parse errors
        }
        setLastError(reason);
        throw new Error(reason);
      }

      setIsSuccess(true);
      toast.success("お問い合わせを受け付けました。");
      setFormData({ name: "", email: "", phone: "", plan: "", message: "" });
      formEl.reset();
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
              {t.readyToLevelUp} <br/><span className="text-[#059669]">{t.readyToLevelUpQuestion}</span>
            </h2>
            <p className="text-gray-400 text-lg mb-10 max-w-md leading-relaxed">
              {t.consultationFree}<br/>
              {t.contactUs}
            </p>

            {/* Brief MEO survey CTA */}
            <div className="mt-4 mb-8 p-4 rounded-2xl border border-emerald-200 bg-emerald-50 text-emerald-900 shadow-sm max-w-xl">
              <div className="text-sm font-extrabold mb-1">Google Maps / MEO quick check</div>
              <p className="text-sm text-emerald-800 font-semibold leading-relaxed mb-3">
                {t.meoUrgency}
              </p>
              <a
                href={meoSurveyLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-[#059669] text-white text-sm font-bold rounded-lg shadow hover:bg-emerald-600 transition-colors"
              >
                {t.meoSurveyCta}
                <ArrowRight size={16} />
              </a>
            </div>

            <div className="space-y-8">
              <div className="flex items-start gap-4 group">
                <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center border border-white/10 group-hover:border-[#0f172a]/50 transition-colors">
                  <Mail size={20} className="text-gray-300 group-hover:text-[#0f172a] transition-colors" />
                </div>
                <div>
                  <div className="text-sm font-bold text-white mb-1">{t.email}</div>
                  <a
                    href="mailto:contact@tokyowebsites.com"
                    className="text-gray-400 hover:text-white transition-colors underline underline-offset-4"
                  >
                    contact@tokyowebsites.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 group">
                <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center border border-white/10 group-hover:border-[#0f172a]/50 transition-colors">
                  <Clock size={20} className="text-gray-300 group-hover:text-[#0f172a] transition-colors" />
                </div>
                <div>
                  <div className="text-sm font-bold text-white mb-1">{t.responseTime}</div>
                  <div className="text-gray-400">{t.within24Hours}</div>
                </div>
              </div>

              <div className="flex items-start gap-4 group">
                <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center border border-white/10 group-hover:border-[#0f172a]/50 transition-colors">
                  <MapPin size={20} className="text-gray-300 group-hover:text-[#0f172a] transition-colors" />
                </div>
                <div>
                  <div className="text-sm font-bold text-white mb-1">{t.location}</div>
                  <div className="text-gray-400">{t.tachikawaTokyo}</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Minimal Form */}
          <div className="bg-slate-900/50 p-8 rounded-3xl border border-white/10 shadow-2xl backdrop-blur-sm">
            <form
              onSubmit={handleSubmit}
              action="https://formspree.io/f/mkoglvvk"
              method="POST"
              encType="multipart/form-data"
              className="space-y-5"
            >
              <input type="hidden" name="_replyto" value={formData.email} />
              <input type="hidden" name="_subject" value="New Consultation Inquiry" />
              <input type="hidden" name="_formname" value="Tokyo Websites Contact" />
              <div className="grid grid-cols-2 gap-5">
              <div className="space-y-2">
                <label className="text-xs font-bold text-gray-500 uppercase tracking-wider">{t.name}</label>
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:border-[#0f172a] focus:ring-1 focus:ring-[#0f172a] outline-none transition-all"
                  placeholder={t.name}
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-gray-500 uppercase tracking-wider">{t.phone}</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:border-[#0f172a] focus:ring-1 focus:ring-[#0f172a] outline-none transition-all"
                  placeholder={t.phone}
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold text-gray-500 uppercase tracking-wider">{t.email}</label>
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
              <label className="text-xs font-bold text-gray-500 uppercase tracking-wider">{t.message}</label>
              <textarea
                name="message"
                required
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:border-[#0f172a] focus:ring-1 focus:ring-[#0f172a] outline-none transition-all resize-none"
                placeholder={t.message}
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-[#059669] text-white font-bold py-4 rounded-xl shadow-lg hover:bg-emerald-600 transition-all active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  {t.submitting}
                </>
              ) : isSuccess ? (
                <>
                  <CheckCircle className="w-5 h-5" />
                  {t.submitted}
                </>
              ) : (
                <>
                  {t.submit}
                  <ArrowRight className="w-5 h-5" />
                </>
              )}
            </button>
            {lastError && (
              <div className="text-xs text-red-300 bg-red-900/40 border border-red-700/40 rounded-lg p-3">
                送信エラー: {lastError}
              </div>
            )}
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}
