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
      const fd = new FormData(formEl);

      // Web3Forms API endpoint
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { Accept: "application/json" },
        body: fd,
      });

      const data = await response.json();

      if (!response.ok || !data.success) {
        const reason = data.message || "Form submission failed";
        setLastError(reason);
        throw new Error(reason);
      }

      setIsSuccess(true);
      toast.success(t.contactSuccess);
      setFormData({ name: "", email: "", phone: "", plan: "", message: "" });
      formEl.reset();
      setTimeout(() => setIsSuccess(false), 5000);
    } catch (error) {
      console.error(error);
      toast.error(t.contactError);
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
              <span className="text-gray-900">{t.readyToLevelUp}</span> <br/><span className="text-[#5C81D9]">{t.readyToLevelUpQuestion}</span>
            </h2>
            <p className="text-gray-900 text-lg md:text-xl font-black mb-10 max-w-md leading-relaxed">
              {t.consultationFree}<br/>
              {t.contactUs}
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-4 group">
                <div className="w-12 h-12 rounded-xl bg-white border border-gray-200 flex items-center justify-center shadow-sm transition-all group-hover:border-[#059669]">
                  <Mail size={20} className="text-gray-900 group-hover:text-[#059669] transition-colors" />
                </div>
                <div>
                  <div className="text-sm font-black text-gray-900 uppercase tracking-widest mb-1">{t.email}</div>
                  <a
                    href="mailto:contact@tokyowebsites.com"
                    className="text-gray-900 hover:text-[#059669] font-black transition-colors underline underline-offset-4"
                  >
                    contact@tokyowebsites.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 group">
                <div className="w-12 h-12 rounded-xl bg-white border border-gray-200 flex items-center justify-center shadow-sm transition-all group-hover:border-[#059669]">
                  <Clock size={20} className="text-gray-900 group-hover:text-[#059669] transition-colors" />
                </div>
                <div>
                  <div className="text-sm font-black text-gray-900 uppercase tracking-widest mb-1">{t.responseTime}</div>
                  <div className="text-gray-900 font-black">{t.within24Hours}</div>
                </div>
              </div>

              <div className="flex items-start gap-4 group">
                <div className="w-12 h-12 rounded-xl bg-white border border-gray-200 flex items-center justify-center shadow-sm transition-all group-hover:border-[#059669]">
                  <MapPin size={20} className="text-gray-900 group-hover:text-[#059669] transition-colors" />
                </div>
                <div>
                  <div className="text-sm font-black text-gray-900 uppercase tracking-widest mb-1">{t.location}</div>
                  <div className="text-gray-900 font-black">{t.tachikawaTokyo}</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Minimal Form */}
          <div className="bg-white/80 p-8 rounded-[2.5rem] border border-white shadow-2xl backdrop-blur-md">
            <form
              onSubmit={handleSubmit}
              className="space-y-5"
            >
              {/* Web3Forms Access Key - Get yours free at https://web3forms.com */}
              <input type="hidden" name="access_key" value="6ccfac36-fbb6-4934-afd0-4a27870c602e" />
              <input type="hidden" name="subject" value="New Consultation Inquiry from Tokyo Websites" />
              <input type="hidden" name="from_name" value="Tokyo Websites Contact Form" />
              <div className="grid grid-cols-2 gap-5">
              <div className="space-y-2">
                <label className="text-[10px] font-black text-gray-500 uppercase tracking-widest pl-1">{t.name}</label>
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-slate-50 border border-gray-200 rounded-xl px-4 py-3 text-gray-900 placeholder-gray-400 focus:border-[#059669] focus:ring-1 focus:ring-[#059669] outline-none transition-all shadow-sm"
                  placeholder={t.name}
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black text-gray-500 uppercase tracking-widest pl-1">{t.phone}</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full bg-slate-50 border border-gray-200 rounded-xl px-4 py-3 text-gray-900 placeholder-gray-400 focus:border-[#059669] focus:ring-1 focus:ring-[#059669] outline-none transition-all shadow-sm"
                  placeholder={t.phone}
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-[10px] font-black text-gray-500 uppercase tracking-widest pl-1">{t.email}</label>
              <input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full bg-slate-50 border border-gray-200 rounded-xl px-4 py-3 text-gray-900 placeholder-gray-400 focus:border-[#059669] focus:ring-1 focus:ring-[#059669] outline-none transition-all shadow-sm"
                placeholder="email@example.com"
              />
            </div>

            <div className="space-y-2">
              <label className="text-[10px] font-black text-gray-500 uppercase tracking-widest pl-1">{t.message}</label>
              <textarea
                name="message"
                required
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="w-full bg-slate-50 border border-gray-200 rounded-xl px-4 py-3 text-gray-900 placeholder-gray-400 focus:border-[#059669] focus:ring-1 focus:ring-[#059669] outline-none transition-all shadow-sm resize-none"
                placeholder={t.message}
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-[#059669] text-white font-black uppercase tracking-widest text-xs py-4 rounded-xl shadow-lg hover:bg-emerald-600 transition-all active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
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
                {t.sendError}: {lastError}
              </div>
            )}
            
            {/* Brief MEO survey CTA - Improved Mobile Formatting */}
            <div className="mt-10 p-6 md:p-8 rounded-[2rem] border-2 border-emerald-500/20 bg-emerald-50 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-2.5 h-2.5 rounded-full bg-[#059669] animate-pulse" />
                <div className="text-[11px] font-black text-[#059669] uppercase tracking-[0.2em]">{t.meoQuickCheck}</div>
              </div>
              <p className="text-sm text-emerald-900 font-bold leading-relaxed mb-6">
                {t.meoUrgency}
              </p>
              <a
                href={meoSurveyLink}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center gap-2 w-full py-4 bg-[#059669] hover:bg-emerald-600 text-white text-[11px] font-black uppercase tracking-widest rounded-xl transition-all shadow-md active:scale-95"
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
