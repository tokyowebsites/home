import { Mail, MapPin, Clock, ArrowRight, Loader2, CheckCircle } from "lucide-react";
import React, { useState } from "react";
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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          
          {/* Left: Heading & Info */}
          <div>
            <h2 className="text-4xl md:text-5xl font-black mb-6 tracking-tighter text-gray-900 leading-tight">
              {t.readyToLevelUp} <br/><span className="text-[#059669]">{t.readyToLevelUpQuestion}</span>
            </h2>
            <p className="text-gray-600 text-lg md:text-xl font-bold mb-10 max-w-md leading-relaxed">
              {t.consultationFree}<br/>
              {t.contactUs}
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-4 group">
                <div className="w-12 h-12 rounded-xl bg-white border border-gray-200 flex items-center justify-center shadow-sm transition-all group-hover:border-[#059669]">
                  <Mail size={20} className="text-gray-600 group-hover:text-[#059669] transition-colors" />
                </div>
                <div>
                  <div className="text-sm font-black text-gray-900 uppercase tracking-widest mb-1">{t.email}</div>
                  <a
                    href="mailto:contact@tokyowebsites.com"
                    className="text-gray-600 hover:text-[#059669] font-bold transition-colors underline underline-offset-4"
                  >
                    contact@tokyowebsites.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 group">
                <div className="w-12 h-12 rounded-xl bg-white border border-gray-200 flex items-center justify-center shadow-sm transition-all group-hover:border-[#059669]">
                  <Clock size={20} className="text-gray-600 group-hover:text-[#059669] transition-colors" />
                </div>
                <div>
                  <div className="text-sm font-black text-gray-900 uppercase tracking-widest mb-1">{t.responseTime}</div>
                  <div className="text-gray-600 font-bold">{t.within24Hours}</div>
                </div>
              </div>

              <div className="flex items-start gap-4 group">
                <div className="w-12 h-12 rounded-xl bg-white border border-gray-200 flex items-center justify-center shadow-sm transition-all group-hover:border-[#059669]">
                  <MapPin size={20} className="text-gray-600 group-hover:text-[#059669] transition-colors" />
                </div>
                <div>
                  <div className="text-sm font-black text-gray-900 uppercase tracking-widest mb-1">{t.location}</div>
                  <div className="text-gray-600 font-bold">{t.tachikawaTokyo}</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Minimal Form */}
          <div className="bg-white/60 p-8 rounded-[2.5rem] border border-white shadow-2xl backdrop-blur-md">
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
                <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest pl-1">{t.name}</label>
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-white border border-gray-100 rounded-xl px-4 py-3 text-gray-900 placeholder-gray-400 focus:border-[#059669] focus:ring-1 focus:ring-[#059669] outline-none transition-all shadow-sm"
                  placeholder={t.name}
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest pl-1">{t.phone}</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full bg-white border border-gray-100 rounded-xl px-4 py-3 text-gray-900 placeholder-gray-400 focus:border-[#059669] focus:ring-1 focus:ring-[#059669] outline-none transition-all shadow-sm"
                  placeholder={t.phone}
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest pl-1">{t.email}</label>
              <input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full bg-white border border-gray-100 rounded-xl px-4 py-3 text-gray-900 placeholder-gray-400 focus:border-[#059669] focus:ring-1 focus:ring-[#059669] outline-none transition-all shadow-sm"
                placeholder="email@example.com"
              />
            </div>

            <div className="space-y-2">
              <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest pl-1">{t.message}</label>
              <textarea
                name="message"
                required
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="w-full bg-white border border-gray-100 rounded-xl px-4 py-3 text-gray-900 placeholder-gray-400 focus:border-[#059669] focus:ring-1 focus:ring-[#059669] outline-none transition-all shadow-sm resize-none"
                placeholder={t.message}
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-gray-900 text-white font-black uppercase tracking-widest text-xs py-4 rounded-xl shadow-lg hover:bg-black transition-all active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
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
              <div className="text-xs text-red-600 bg-red-50 border border-red-100 rounded-lg p-3 font-bold">
                送信エラー: {lastError}
              </div>
            )}
            
            {/* Brief MEO survey CTA */}
            <div className="mt-8 p-5 rounded-2xl border border-[#059669]/20 bg-[#059669]/5 shadow-sm">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-2 h-2 rounded-full bg-[#059669] animate-pulse" />
                <div className="text-[10px] font-black text-[#059669] uppercase tracking-widest">Google Maps / MEO quick check</div>
              </div>
              <p className="text-xs text-gray-600 font-bold leading-relaxed mb-4">
                {t.meoUrgency}
              </p>
              <a
                href={meoSurveyLink}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center gap-2 w-full py-3 bg-[#059669] hover:bg-emerald-600 text-white text-[10px] font-black uppercase tracking-widest rounded-xl transition-all shadow-md active:scale-95"
              >
                {t.meoSurveyCta}
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}
