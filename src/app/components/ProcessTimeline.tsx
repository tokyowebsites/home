import React, { useState } from "react";
import { MessageSquare, FileText, Palette, Rocket, Clock, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export function ProcessTimeline() {
  const [expandedStep, setExpandedStep] = useState<number | null>(null);

  const steps = [
    {
      number: "01",
      titleJa: "ヒアリング",
      titleEn: "Consult",
      descJa: "現状とゴールを整理。必要なページと導線を決めます。",
      descEn: "Align on goals and structure.",
      icon: MessageSquare,
      details: [
        "ビジネス目標とターゲット顧客の明確化",
        "競合分析とポジショニング戦略",
        "必要な機能とコンテンツの洗い出し",
        "予算とスケジュールの調整"
      ]
    },
    {
      number: "02",
      titleJa: "ご提案",
      titleEn: "Proposal",
      descJa: "構成・デザイン方向性・納期を明確にして進行開始。",
      descEn: "Clear plan and timeline.",
      icon: FileText,
      details: [
        "サイト構成とワイヤーフレームの提示",
        "デザインコンセプトと配色案",
        "詳細な見積もりと工程表",
        "契約内容の最終確認"
      ]
    },
    {
      number: "03",
      titleJa: "制作",
      titleEn: "Build",
      descJa: "スピード制作。必要な修正だけ、最短で形にします。",
      descEn: "Fast build, focused revisions.",
      icon: Palette,
      details: [
        "デザインの作成とレビュー",
        "コーディングとCMS構築",
        "コンテンツの入力と最適化",
        "テストとブラウザ動作確認"
      ]
    },
    {
      number: "04",
      titleJa: "公開",
      titleEn: "Launch",
      descJa: "公開して終わりじゃない。運用しやすい状態に整えます。",
      descEn: "Launch + ready to operate.",
      icon: Rocket,
      details: [
        "本番環境へのデプロイ",
        "SEO設定とアナリティクス導入",
        "操作マニュアルの提供",
        "アフターサポート（1ヶ月無料）"
      ]
    },
  ];

  return (
    <section id="process" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3" style={{ fontWeight: 700 }}>
            制作の流れ
          </h2>
          <p className="text-gray-800" style={{ fontWeight: 600 }}>
            無駄を削ぎ落とした4ステップ。
            <span className="ml-2 font-bold text-[#059669]" style={{ fontWeight: 700 }}>最短4日で公開</span>
            <span className="block text-xs text-gray-700 mt-2">
              Simple process. Launch in as little as 4 days.
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

                  <div className="font-bold text-gray-900 text-lg" style={{ fontWeight: 700 }}>{step.titleJa}</div>
                  <div className="text-xs text-gray-700 font-semibold mt-1 mb-3" style={{ fontWeight: 600 }}>{step.titleEn}</div>

                  <p className="text-sm text-gray-800 leading-relaxed" style={{ fontWeight: 600 }}>
                    {step.descJa}
                  </p>

                  <button className="mt-4 w-full flex items-center justify-center gap-2 text-xs font-bold text-gray-900 hover:text-[#059669] transition-colors" style={{ fontWeight: 700 }}>
                    {expandedStep === index ? '詳細を閉じる' : '詳細を見る'}
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
            96時間以内に公開できるケースが多数
            <span className="text-xs opacity-70 font-semibold ml-2">Often within 96 hours</span>
          </div>
        </div>
      </div>
    </section>
  );
}
