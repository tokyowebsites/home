import React, { useMemo, useState } from "react";
import { Check, ArrowRight, Zap } from "lucide-react";
import { useTranslation } from "../lib/TranslationContext";
import { BackgroundGradient } from "./ui/BackgroundGradient";

type Tool = {
  id: string;
  label: string;
  price: number;
  priceLabel?: string;
};

export function Plans() {
  const { t, language } = useTranslation();
  const STANDARD_TOOL_PRICE = 6000;
  const ADVANCED_TOOL_PRICE = 18000;
  const BASE_WEBSITE_PRICE = 25000;
  const [selectedTools, setSelectedTools] = useState<Record<string, boolean>>({});
  const multiLangPriceLabel =
    language === "ja" ? "¥6,000 / 1言語" : t.standardToolsPrice;
  const plans = [
    {
      id: "basic",
      title: t.basicPlanTitle,
      price: t.basicPlanPrice,
      standardTools: 1,
      advancedTools: 0,
      bonus: t.planBonusNone,
      highlighted: false,
      formUrl: "https://docs.google.com/forms/d/e/1FAIpQLScDauTW9PD2UFXS1QlSxltGuZe4fan4xIcapLwnBWBa7BAQ9w/viewform?usp=dialog",
    },
    {
      id: "standard",
      title: t.standardPlanTitle,
      price: t.standardPlanPrice,
      standardTools: 2,
      advancedTools: 1,
      bonus: t.planBonusNone,
      extraIncludes: [t.planWebsiteRedesign],
      highlighted: true,
      formUrl: "https://docs.google.com/forms/d/e/1FAIpQLSeoV5sm7yOHKjnw9ceodaL-uUtpLf06H1dDM8L6UuQNk4mjfQ/viewform?usp=dialog",
    },
    {
      id: "premium",
      title: t.premiumPlanTitle,
      price: t.premiumPlanPrice,
      standardTools: 5,
      advancedTools: 3,
      bonus: t.planBonusNone,
      extraIncludes: [t.planWebsiteRedesign],
      highlighted: false,
      formUrl: "https://docs.google.com/forms/d/e/1FAIpQLSc4v9fQpzivhHACffG_r4MEhS4TJIpR-u-XqdG31jyRiGxbug/viewform?usp=dialog",
    },
  ];

  const standardTools: Tool[] = [
    { id: "contactForm", label: t.toolContactForm, price: STANDARD_TOOL_PRICE },
    { id: "instagramFeed", label: t.toolInstagramFeed, price: STANDARD_TOOL_PRICE },
    { id: "googleMapEmbed", label: t.toolGoogleMapEmbed, price: STANDARD_TOOL_PRICE },
    {
      id: "multiLangButtons",
      label: t.toolMultiLangButtons,
      price: STANDARD_TOOL_PRICE,
      priceLabel: multiLangPriceLabel,
    },
    { id: "chatbot", label: t.toolChatbot, price: STANDARD_TOOL_PRICE },
    { id: "dynamicMenu", label: t.toolDynamicMenu, price: STANDARD_TOOL_PRICE },
    { id: "logoCreate", label: t.toolLogoCreate, price: STANDARD_TOOL_PRICE },
  ];

  const advancedTools: Tool[] = [
    { id: "stripeMarketplace", label: t.toolStripeMarketplace, price: ADVANCED_TOOL_PRICE },
    { id: "bookingSystem", label: t.toolBookingSystem, price: ADVANCED_TOOL_PRICE },
    { id: "loyaltySystem", label: t.toolLoyaltySystem, price: ADVANCED_TOOL_PRICE },
    { id: "mailingList", label: t.toolMailingList, price: ADVANCED_TOOL_PRICE },
    { id: "adminPanel", label: t.toolAdminPanel, price: ADVANCED_TOOL_PRICE },
  ];

  const totals = useMemo(() => {
    const standardCount = standardTools.reduce(
      (acc, tool) => acc + (selectedTools[tool.id] ? 1 : 0),
      0,
    );
    const advancedCount = advancedTools.reduce(
      (acc, tool) => acc + (selectedTools[tool.id] ? 1 : 0),
      0,
    );
    const toolsTotal =
      standardCount * STANDARD_TOOL_PRICE + advancedCount * ADVANCED_TOOL_PRICE;
    const total = toolsTotal + BASE_WEBSITE_PRICE;

    const eligiblePlans = plans.filter(
      (plan) =>
        standardCount <= plan.standardTools &&
        advancedCount <= plan.advancedTools,
    );
    // Only recommend a plan if it's actually cheaper than buying individually
    const recommendedPlan =
      eligiblePlans.length > 0
        ? (() => {
            const cheapestPlan = eligiblePlans.reduce((cheapest, plan) =>
              parseInt(plan.price.replace(/[^\d]/g, ""), 10) <
              parseInt(cheapest.price.replace(/[^\d]/g, ""), 10)
                ? plan
                : cheapest,
            );
            const planPrice = parseInt(cheapestPlan.price.replace(/[^\d]/g, ""), 10);
            // Only recommend if plan is cheaper than individual total
            return planPrice < total ? cheapestPlan : null;
          })()
        : null;

    return {
      standardCount,
      advancedCount,
      toolsTotal,
      total,
      recommendedPlan,
    };
  }, [advancedTools, plans, selectedTools, standardTools]);

  const toggleTool = (id: string) => {
    setSelectedTools((prev) => ({ ...prev, [id]: !prev[id] }));
  };

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
        <div className="max-w-6xl mx-auto mb-16">
          <div className="flex overflow-x-auto pb-6 px-4 -mx-4 md:mx-0 md:px-0 md:grid md:grid-cols-3 gap-6 snap-x no-scrollbar md:overflow-visible">
            {plans.map((plan) => (
              <div
                key={plan.id}
                className={`rounded-3xl border p-6 md:p-7 flex flex-col h-full min-w-[260px] sm:min-w-[320px] md:min-w-0 snap-center ${
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
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-[10px] font-black uppercase tracking-widest mb-5">
                {t.monthlyFeeAddon}
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
                {plan.extraIncludes?.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-gray-800">
                    <span className="w-5 h-5 rounded-full bg-slate-100 text-slate-600 flex items-center justify-center">
                      <Check size={12} strokeWidth={3} />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>

              <a
                href={plan.formUrl}
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
        </div>

        {/* Tools Menu */}
        <div className="max-w-5xl mx-auto mb-16">
          <div className="text-center mb-6">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900 text-white text-xs font-black uppercase tracking-widest">
              {t.toolsMenuTitle}
            </div>
            <h3 className="text-2xl md:text-3xl font-black text-gray-900 mt-4">
              {t.toolsMenuSubtitle}
            </h3>
            <p className="text-sm md:text-base font-bold text-gray-600 mt-2">
              {t.toolsMenuHint}
            </p>
            <div className="mt-2 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 text-xs font-black">
              {t.baseWebsitePriceNote}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-6">
            <div className="grid grid-cols-1 md:grid-cols-2 border border-gray-200 rounded-2xl overflow-hidden bg-white shadow-sm">
              <div className="border-b md:border-b-0 md:border-r border-gray-200 bg-emerald-50/30">
                <div className="bg-emerald-100/50 px-5 py-4 text-sm font-black text-gray-900 flex items-center justify-between">
                  <span>{t.standardToolsTitle}</span>
                  <span className="text-emerald-700">{t.standardToolsPrice}</span>
                </div>
                <ul className="divide-y divide-gray-200 text-sm font-semibold text-gray-800">
                  {standardTools.map((tool) => (
                    <li key={tool.id} className="px-5 py-4">
                      <label className="flex items-center gap-3 cursor-pointer">
                        <input
                          type="checkbox"
                          className="h-4 w-4 accent-emerald-600"
                          checked={!!selectedTools[tool.id]}
                          onChange={() => toggleTool(tool.id)}
                        />
                        <span>{tool.label}</span>
                      </label>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-violet-50/30">
                <div className="bg-violet-100/50 px-5 py-4 text-sm font-black text-gray-900 flex items-center justify-between">
                  <span>{t.advancedToolsTitle}</span>
                  <span className="text-violet-700">{t.advancedToolsPrice}</span>
                </div>
                <ul className="divide-y divide-gray-200 text-sm font-semibold text-gray-800">
                  {advancedTools.map((tool) => (
                    <li key={tool.id} className="px-5 py-4">
                      <label className="flex items-center gap-3 cursor-pointer">
                        <input
                          type="checkbox"
                          className="h-4 w-4 accent-violet-600"
                          checked={!!selectedTools[tool.id]}
                          onChange={() => toggleTool(tool.id)}
                        />
                        <span>{tool.label}</span>
                      </label>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="bg-white rounded-3xl border border-gray-100 p-6 shadow-lg">
              <div className="text-xs font-black uppercase tracking-widest text-gray-500 mb-2">
                {t.selectionSummaryTitle}
              </div>
              <div className="space-y-2 text-sm font-bold text-gray-700">
                <div className="flex items-center justify-between">
                  <span>{t.planStandardToolsLabel}</span>
                  <span>{totals.standardCount}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>{t.planAdvancedToolsLabel}</span>
                  <span>{totals.advancedCount}</span>
                </div>
                <div className="flex items-center justify-between text-blue-700">
                  <span>{t.baseWebsiteLabel}</span>
                  <span>¥{BASE_WEBSITE_PRICE.toLocaleString("en-US")}</span>
                </div>
              </div>

              <div className="mt-5 pt-5 border-t border-gray-100">
                <div className="text-xs font-black uppercase tracking-widest text-gray-500 mb-2">
                  {t.toolsTotalTitle}
                </div>
                <div className="text-3xl font-black text-gray-900">
                  ¥{totals.total.toLocaleString("en-US")}
                </div>
                <div className="mt-2 text-[11px] font-bold text-gray-500">
                  {t.toolsTotalNote}
                </div>
              </div>

              <div className="mt-5 pt-5 border-t border-gray-100">
                <div className="text-xs font-black uppercase tracking-widest text-gray-500 mb-2">
                  {t.recommendedPlanTitle}
                </div>
                {totals.standardCount + totals.advancedCount === 0 && (
                  <div className="text-sm font-bold text-gray-500">
                    {t.recommendedPlanEmpty}
                  </div>
                )}
                {totals.standardCount + totals.advancedCount > 0 &&
                  totals.recommendedPlan && (
                    <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-4">
                      <div className="text-sm font-black text-emerald-800">
                        {totals.recommendedPlan.title}
                      </div>
                      <div className="text-xs font-black text-red-600 line-through">
                        ¥{totals.total.toLocaleString("en-US")}
                      </div>
                      <div className="text-2xl font-black text-emerald-700">
                        {totals.recommendedPlan.price}
                      </div>
                      <div className="mt-1 text-[11px] font-bold text-emerald-700">
                        {t.recommendedPlanWhy}
                      </div>
                      <a
                        href={totals.recommendedPlan.formUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-3 inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest text-emerald-800"
                      >
                        {t.recommendedPlanCta} <ArrowRight size={12} />
                      </a>
                    </div>
                  )}
                {totals.standardCount + totals.advancedCount > 0 &&
                  !totals.recommendedPlan && (
                    <div className="text-sm font-bold text-gray-600">
                      {t.recommendedPlanCustom}
                    </div>
                  )}
              </div>
            </div>
          </div>
        </div>

        {/* Domain Note + Graphic */}
        <div className="mt-16 max-w-5xl mx-auto">
          <div className="mb-6 rounded-[28px] border border-blue-200 bg-blue-50/80 p-5 md:p-6 shadow-sm text-center">
            <div className="text-xs md:text-sm font-black uppercase tracking-widest text-blue-700 mb-2">
              {t.monthlyServiceTitle}
            </div>
            <div className="text-sm md:text-base font-bold text-gray-800">
              {t.monthlyServiceDesc}
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
            <div className="order-2 md:order-1 text-center md:text-left">
              <p className="text-gray-900 text-[10px] md:text-xs font-black leading-relaxed px-6 md:px-0 tracking-tight">
                <span className="text-emerald-600 mr-2 opacity-50 font-black">※</span>
                {t.monthlyServiceNote}
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
