import React, { useState } from "react";
import { MessageSquare, FileText, Palette, Rocket, Clock, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { useTranslation } from "../lib/TranslationContext";

export function ProcessTimeline() {
  const { t } = useTranslation();
  const [expandedStep, setExpandedStep] = useState<number | null>(null);

  const steps = [
    {
      number: "01",
      title: t.step1Title,
      titleEn: t.step1TitleEn,
      desc: t.step1Desc,
      icon: MessageSquare,
      details: [
        t.step1Detail1,
        t.step1Detail2,
        t.step1Detail3,
        t.step1Detail4,
      ]
    },
    {
      number: "02",
      title: t.step2Title,
      titleEn: t.step2TitleEn,
      desc: t.step2Desc,
      icon: FileText,
      details: [
        t.step2Detail1,
        t.step2Detail2,
        t.step2Detail3,
        t.step2Detail4,
      ]
    },
    {
      number: "03",
      title: t.step3Title,
      titleEn: t.step3TitleEn,
      desc: t.step3Desc,
      icon: Palette,
      details: [
        t.step3Detail1,
        t.step3Detail2,
        t.step3Detail3,
        t.step3Detail4,
      ]
    },
    {
      number: "04",
      title: t.step4Title,
      titleEn: t.step4TitleEn,
      desc: t.step4Desc,
      icon: Rocket,
      details: [
        t.step4Detail1,
        t.step4Detail2,
        t.step4Detail3,
        t.step4Detail4,
      ]
    },
  ];

  return (
    <section id="process" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3" style={{ fontWeight: 700 }}>
            {t.processTitle}
          </h2>
          <p className="text-gray-900" style={{ fontWeight: 600 }}>
            {t.processSubtitle}
            <span className="ml-2 font-bold text-gray-900" style={{ fontWeight: 700 }}>{t.processHighlight}</span>
            <span className="block text-xs text-gray-700 mt-2">
              {t.processSubtitleEn}
            </span>
          </p>
        </div>

        <div className="flex overflow-x-auto pb-12 px-6 -mx-6 md:mx-0 md:px-0 md:pb-0 md:grid md:grid-cols-4 gap-5 snap-x no-scrollbar md:overflow-visible">
          {steps.map((step, index) => (
            <div key={index} className="min-w-[280px] md:min-w-0 snap-center relative">
              {/* Progress Line (Desktop) */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-11 left-[calc(50%+24px)] w-[calc(100%-48px)] h-px bg-gray-200 z-0">
                  <div className="absolute top-1/2 left-0 w-2 h-2 -translate-y-1/2 rounded-full bg-gray-200" />
                </div>
              )}

              <div 
                onClick={() => setExpandedStep(expandedStep === index ? null : index)}
                className={`h-full rounded-3xl border transition-all duration-500 cursor-pointer overflow-hidden relative z-10 group ${
                  expandedStep === index 
                    ? 'border-[#0f172a] bg-white shadow-2xl scale-[1.02]' 
                    : 'border-gray-100 bg-white shadow-sm hover:shadow-xl hover:-translate-y-1'
                }`}
              >
                <div className="p-6 md:p-8">
                  <div className="flex items-center justify-between mb-6">
                    <div className={`w-14 h-14 rounded-2xl flex items-center justify-center shadow-sm transition-colors duration-300 ${
                      expandedStep === index ? 'bg-gray-900 text-white' : 'bg-slate-50 text-gray-900 group-hover:bg-gray-900 group-hover:text-white'
                    }`}>
                      <step.icon className="w-6 h-6" />
                    </div>
                    <div className="text-sm font-black text-gray-300 group-hover:text-[#059669] transition-colors">{step.number}</div>
                  </div>

                  <h3 className="font-bold text-gray-900 text-xl tracking-tight" style={{ fontWeight: 800 }}>{step.title}</h3>
                  <div className="text-[10px] text-[#059669] font-black uppercase tracking-[0.2em] mt-1 mb-4">{step.titleEn}</div>

                  <p className="text-sm text-gray-600 leading-relaxed font-medium">
                    {step.desc}
                  </p>

                  <div className={`mt-6 flex items-center gap-2 text-[10px] font-black tracking-widest uppercase transition-colors ${
                    expandedStep === index ? 'text-[#059669]' : 'text-gray-400 group-hover:text-gray-900'
                  }`}>
                    {expandedStep === index ? t.closeDetails : t.viewDetails}
                    <ChevronDown className={`w-3 h-3 transition-transform duration-500 ${expandedStep === index ? 'rotate-180' : ''}`} />
                  </div>
                </div>

                <AnimatePresence>
                  {expandedStep === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-8 pt-2 bg-slate-50">
                        <div className="w-full h-px bg-gray-200 mb-6" />
                        <ul className="space-y-3">
                          {step.details.map((detail, i) => (
                            <li key={i} className="flex items-start gap-3 text-xs text-gray-700 font-bold leading-tight">
                              <div className="w-1.5 h-1.5 rounded-full bg-[#059669] mt-1 shrink-0" />
                              {detail}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-gray-900 text-white rounded-full font-bold text-sm shadow-lg">
            <Clock className="w-4 h-4 text-[#059669]" />
            {t.processFooter}
            <span className="text-xs opacity-70 font-semibold ml-2">{t.processFooterEn}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
