import React from "react";
import { Check, ArrowRight, Zap } from "lucide-react";
import { useTranslation } from "../lib/TranslationContext";
import { BackgroundGradient } from "./ui/BackgroundGradient";

export function Plans() {
  const { t } = useTranslation();
  const plans = [
    {
      id: "basic",
      title: t.basicPlanTitle,
      price: t.basicPlanPrice,
      standardTools: 1,
      advancedTools: 0,
      bonus: t.planBonusMeo,
      highlighted: false,
    },
    {
      id: "standard",
      title: t.standardPlanTitle,
      price: t.standardPlanPrice,
      standardTools: 2,
      advancedTools: 1,
      bonus: t.planBonusMeo,
      highlighted: true,
    },
    {
      id: "premium",
      title: t.premiumPlanTitle,
      price: t.premiumPlanPrice,
      standardTools: 5,
      advancedTools: 3,
      bonus: t.planBonusNone,
      highlighted: false,
    },
  ];

  const standardTools = [
    t.toolContactForm,
    t.toolInstagramFeed,
    t.toolGoogleMapEmbed,
    t.toolMultiLangButtons,
    t.toolChatbot,
    t.toolDynamicMenu,
    t.toolWebsiteRedesign,
    t.toolLogoCreate,
  ];

  const advancedTools = [
    t.toolStripeMarketplace,
    t.toolBookingSystem,
    t.toolLoyaltySystem,
    t.toolWifiMarketing,
    t.toolMailingList,
    t.toolAdminPanel,
  ];

  return (
    <section id="plans" className="py-24 bg-gray-50 relative overflow-hidden">
      <BackgroundGradient />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#059669]/10 text-gray-900 text-xs font-black uppercase tracking-widest mb-6 border border-[#059669]/20 shadow-sm">
             <Zap size={14} className="fill-[#059669] text-[#059669]" />
             {t.deliveryPossible}
          </div>
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-gray-900 mb-6 leading-tight">
            {t.plansTitle}
          </h2>
          <p className="text-gray-600 text-lg md:text-xl font-bold">
            {t.plansSubtitle}
          </p>
        </div>

        {/* Plans Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto mb-16">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className={`rounded-3xl border p-6 md:p-7 flex flex-col h-full ${
                plan.highlighted
                  ? "bg-white border-[#059669] shadow-2xl shadow-emerald-900/10 ring-1 ring-emerald-200"
                  : "bg-white/90 border-white/70 shadow-lg"
              }`}
            >
              <div className="text-xs font-black uppercase tracking-widest text-gray-500 mb-2">
                {t.planLabel}
              </div>
              <h3 className="text-2xl font-black text-gray-900 mb-3">
                {plan.title}
              </h3>
              <div className="text-4xl font-black text-gray-900 mb-1">
                {plan.price}
              </div>
              <div className="text-xs font-bold text-gray-500 mb-5">
                {t.oneTime}
              </div>

              <div className="text-xs font-black uppercase tracking-widest text-gray-500 mb-3">
                {t.planIncludesTitle}
              </div>
              <ul className="space-y-2 text-sm font-bold text-gray-800 mb-6">
                <li className="flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center">
                    <Check size={12} strokeWidth={3} />
                  </span>
                  {t.planStandardToolsLabel} {plan.standardTools}
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-slate-100 text-slate-600 flex items-center justify-center">
                    <Check size={12} strokeWidth={3} />
                  </span>
                  {t.planAdvancedToolsLabel} {plan.advancedTools}
                </li>
                {plan.bonus && (
                  <li className="flex items-center gap-2 text-emerald-700">
                    <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center">
                      <Check size={12} strokeWidth={3} />
                    </span>
                    {plan.bonus}
                  </li>
                )}
              </ul>

              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSf1sejWp_jKe4SxmAtVtNxCoBnU78Ul6TynXUWtD_9GFRcnUQ/viewform?usp=sharing&ouid=109641339829497082567"
                target="_blank"
                rel="noopener noreferrer"
                className={`mt-auto inline-flex items-center justify-center gap-2 w-full py-3 rounded-2xl text-[11px] md:text-xs font-black uppercase tracking-widest transition-all duration-300 ${
                  plan.highlighted ? "bg-[#059669] text-white hover:bg-emerald-600" : "bg-gray-900 text-white hover:bg-gray-800"
                }`}
              >
                {t.consultThisPlan}
                <ArrowRight size={14} />
              </a>
            </div>
          ))}
        </div>

        {/* Tools Table */}
        <div className="max-w-5xl mx-auto mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 border border-gray-200 rounded-2xl overflow-hidden bg-white shadow-sm">
            <div className="border-b md:border-b-0 md:border-r border-gray-200">
              <div className="bg-gray-50 px-5 py-4 text-sm font-black text-gray-900">
                {t.standardToolsTitle}
              </div>
              <ul className="divide-y divide-gray-200 text-sm font-semibold text-gray-800">
                {standardTools.map((tool) => (
                  <li key={tool} className="px-5 py-4">
                    {tool}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <div className="bg-gray-50 px-5 py-4 text-sm font-black text-gray-900">
                {t.advancedToolsTitle}
              </div>
              <ul className="divide-y divide-gray-200 text-sm font-semibold text-gray-800">
                {advancedTools.map((tool) => (
                  <li key={tool} className="px-5 py-4">
                    {tool}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Domain Note + Graphic */}
        <div className="mt-16 max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
            <div className="order-2 md:order-1 text-center md:text-left">
              <p className="text-gray-900 text-[10px] md:text-xs font-black leading-relaxed px-6 md:px-0 tracking-tight">
                <span className="text-emerald-600 mr-2 opacity-50 font-black">※</span>
                {t.domainFeeNote}
              </p>
            </div>
            <div className="order-1 md:order-2">
              <div className="rounded-[28px] border border-emerald-200 bg-emerald-50/70 p-5 md:p-6 shadow-sm">
                <div className="text-center text-sm md:text-base font-black text-gray-900 mb-4">
                  {t.toolsNoteTitle}
                </div>
                <div className="text-center text-xs md:text-sm font-bold text-gray-700">
                  {t.toolsNoteBody}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
