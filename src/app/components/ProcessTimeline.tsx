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

        <div className="grid md:grid-cols-4 gap-4">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div 
                onClick={() => setExpandedStep(expandedStep === index ? null : index)}
                className={`h-full rounded-2xl border transition-all duration-300 cursor-pointer ${
                  expandedStep === index 
                    ? 'border-[#0f172a] bg-slate-50 shadow-xl' 
                    : 'border-gray-200 bg-white shadow-sm hover:shadow-md'
                }`}
              >
                <div className="p-5">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-2xl bg-gray-900 text-white flex items-center justify-center shadow-sm">
                      <step.icon className="w-5 h-5" />
                    </div>
                    <div className="text-xs font-bold text-gray-600">{step.number}</div>
                  </div>

                  <div className="font-bold text-gray-900 text-lg" style={{ fontWeight: 700 }}>{step.title}</div>
                  <div className="text-xs text-gray-700 font-semibold mt-1 mb-3" style={{ fontWeight: 600 }}>{step.titleEn}</div>

                  <p className="text-sm text-gray-800 leading-relaxed" style={{ fontWeight: 600 }}>
                    {step.desc}
                  </p>

                  <button className="mt-4 w-full flex items-center justify-center gap-2 text-xs font-bold text-gray-900 hover:text-[#059669] transition-colors" style={{ fontWeight: 700 }}>
                    {expandedStep === index ? t.closeDetails : t.viewDetails}
                    <ChevronDown className={`w-4 h-4 transition-transform ${expandedStep === index ? 'rotate-180' : ''}`} />
                  </button>
                </div>

                <AnimatePresence>
                  {expandedStep === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden border-t border-gray-200"
                    >
                      <div className="p-5 bg-white">
                        <ul className="space-y-2">
                          {step.details.map((detail, i) => (
                            <li key={i} className="flex items-start gap-2 text-xs text-gray-800" style={{ fontWeight: 600 }}>
                              <div className="w-1.5 h-1.5 rounded-full bg-[#059669] mt-1.5 shrink-0" />
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
