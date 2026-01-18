import React from "react";
import { Check, ArrowRight, Zap, UtensilsCrossed, ShoppingBag, Scissors, Coffee, Gift } from "lucide-react";
import { useTranslation } from "../lib/TranslationContext";
import { BackgroundGradient } from "./ui/BackgroundGradient";

export function Plans() {
  const { t } = useTranslation();
  
  const packages = [
    {
      id: "restaurant",
      title: t.pkg1Title,
      icon: UtensilsCrossed,
      color: "from-orange-500 to-red-500",
      items: [
        t.pkg1Item1,
        t.pkg1Item2,
        t.pkg1Item3,
        { text: t.pkg1Item4, free: true },
        { text: t.pkg1Item5, free: true },
        t.pkg1Item6,
      ],
      math: t.pkg1Math,
      standardPrice: t.pkg1StandardPrice,
      bundlePrice: t.pkg1BundlePrice,
      saveText: t.pkg1Save,
      sampleSite: "Sakura Bistro",
      formUrl: "https://docs.google.com/forms/d/e/1FAIpQLSeoV5sm7yOHKjnw9ceodaL-uUtpLf06H1dDM8L6UuQNk4mjfQ/viewform",
    },
    {
      id: "retail",
      title: t.pkg2Title,
      icon: ShoppingBag,
      color: "from-blue-500 to-indigo-500",
      items: [
        t.pkg2Item1,
        t.pkg2Item2,
        t.pkg2Item3,
      ],
      math: t.pkg2Math,
      standardPrice: t.pkg2StandardPrice,
      bundlePrice: t.pkg2BundlePrice,
      saveText: t.pkg2Save,
      sampleSite: "TechStart Inc.",
      formUrl: "https://docs.google.com/forms/d/e/1FAIpQLSeoV5sm7yOHKjnw9ceodaL-uUtpLf06H1dDM8L6UuQNk4mjfQ/viewform",
    },
    {
      id: "salon",
      title: t.pkg3Title,
      icon: Scissors,
      color: "from-pink-500 to-rose-500",
      items: [
        t.pkg3Item1,
        t.pkg3Item2,
        t.pkg3Item3,
        t.pkg3Item4,
      ],
      math: t.pkg3Math,
      standardPrice: t.pkg3StandardPrice,
      bundlePrice: t.pkg3BundlePrice,
      saveText: t.pkg3Save,
      sampleSite: "TOKYO歯科",
      formUrl: "https://docs.google.com/forms/d/e/1FAIpQLSeoV5sm7yOHKjnw9ceodaL-uUtpLf06H1dDM8L6UuQNk4mjfQ/viewform",
      highlighted: true,
    },
    {
      id: "cafe",
      title: t.pkg4Title,
      icon: Coffee,
      color: "from-emerald-500 to-teal-500",
      items: [
        t.pkg4Item1,
        t.pkg4Item2,
        t.pkg4Item3,
        { text: t.pkg4Item4, free: true },
        { text: t.pkg4Item5, free: true },
        t.pkg4Item6,
        t.pkg4Item7,
      ],
      math: t.pkg4Math,
      standardPrice: t.pkg4StandardPrice,
      bundlePrice: t.pkg4BundlePrice,
      saveText: t.pkg4Save,
      sampleSite: "Green Leaf Cafe",
      formUrl: "https://docs.google.com/forms/d/e/1FAIpQLSeoV5sm7yOHKjnw9ceodaL-uUtpLf06H1dDM8L6UuQNk4mjfQ/viewform",
      highlighted: true,
    },
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
            {t.packagesTitle}
          </h2>
          <p className="text-gray-600 text-lg md:text-xl font-bold">
            {t.packagesSubtitle}
          </p>
        </div>

        {/* Packages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-6xl mx-auto mb-16">
          {packages.map((pkg) => {
            const Icon = pkg.icon;
            return (
              <div 
                key={pkg.id} 
                className={`group relative border rounded-[2.5rem] p-8 md:p-10 transition-all duration-500 flex flex-col ${
                  pkg.highlighted 
                    ? "bg-white border-[#059669] shadow-2xl shadow-emerald-900/10 scale-[1.02]" 
                    : "bg-white/80 border-white/60 backdrop-blur-md hover:bg-white hover:shadow-xl"
                }`}
              >
                {/* Icon & Title */}
                <div className="flex items-start gap-4 mb-6">
                  <div className={`w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg bg-gradient-to-br ${pkg.color} text-white shrink-0`}>
                    <Icon size={32} strokeWidth={2} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl md:text-2xl font-black text-gray-900 leading-tight">
                      {pkg.title}
                    </h3>
                    <div className="mt-1 text-xs text-gray-500 font-bold">
                      {pkg.sampleSite}
                    </div>
                  </div>
                </div>

                {/* Items List */}
                <ul className="space-y-3 mb-6 flex-grow">
                  {pkg.items.map((item, i) => {
                    const isFree = typeof item === 'object' && item.free;
                    const text = typeof item === 'string' ? item : item.text;
                    return (
                      <li key={i} className="flex items-start gap-3 text-xs text-gray-700 font-bold leading-tight">
                        <div className={`mt-0.5 w-4 h-4 rounded-full flex items-center justify-center shrink-0 ${
                          isFree ? 'bg-emerald-100 text-emerald-600' : 'bg-slate-100 text-slate-600'
                        }`}>
                          <Check size={10} strokeWidth={4} />
                        </div>
                        <span className={isFree ? 'text-emerald-600' : ''}>{text}</span>
                      </li>
                    );
                  })}
                </ul>

                {/* Math */}
                <div className="text-[10px] text-gray-500 font-mono mb-4 border-t pt-4 border-gray-100">
                  {pkg.math}
                </div>

                {/* Pricing */}
                <div className="mb-6 pb-6 border-b border-gray-100">
                  <div className="text-xs text-gray-500 font-bold mb-1">
                    {t.packageStandardPrice}: <span className="line-through">{pkg.standardPrice}</span>
                  </div>
                  <div className="flex items-baseline gap-2">
                    <span className="text-xs text-gray-600 font-bold">{t.bundlePrice}:</span>
                    <span className={`text-3xl md:text-4xl font-black ${pkg.highlighted ? "text-[#059669]" : "text-gray-900"}`}>
                      {pkg.bundlePrice}
                    </span>
                  </div>
                  <div className="mt-2 inline-block bg-emerald-50 text-emerald-700 px-3 py-1 rounded-full text-[10px] font-black">
                    {pkg.saveText}
                  </div>
                </div>

                {/* CTA Button */}
                <a 
                  href={pkg.formUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full py-4 rounded-2xl text-xs font-black uppercase tracking-widest transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl active:scale-95 ${
                    pkg.highlighted 
                      ? 'bg-[#059669] text-white hover:bg-emerald-600' 
                      : 'bg-gray-900 text-white hover:bg-gray-800'
                  }`}
                >
                  {t.consultThisPackage} <ArrowRight size={14} />
                </a>
              </div>
            );
          })}
        </div>

        {/* Build Your Own Deal Section */}
        <div className="max-w-4xl mx-auto mt-20">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-violet-50 text-violet-900 text-xs font-black uppercase tracking-widest mb-4 border border-violet-200">
              <Gift size={14} />
              {t.buildYourOwnTitle}
            </div>
            <h3 className="text-3xl md:text-4xl font-black text-gray-900 mb-3">
              {t.buildYourOwnTitle}
            </h3>
            <p className="text-gray-600 text-base md:text-lg font-bold">
              {t.buildYourOwnSubtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Web Deal */}
            <div className="group bg-gradient-to-br from-blue-50 to-indigo-50 border-2 border-blue-200 rounded-3xl p-8 hover:shadow-xl transition-all duration-300">
              <div className="inline-block bg-blue-600 text-white px-4 py-2 rounded-xl text-sm font-black mb-4 shadow-lg">
                {t.webDealTitle}
              </div>
              <p className="text-gray-700 text-sm font-bold leading-relaxed">
                {t.webDealDesc}
              </p>
            </div>

            {/* Map Deal */}
            <div className="group bg-gradient-to-br from-emerald-50 to-teal-50 border-2 border-emerald-200 rounded-3xl p-8 hover:shadow-xl transition-all duration-300">
              <div className="inline-block bg-emerald-600 text-white px-4 py-2 rounded-xl text-sm font-black mb-4 shadow-lg">
                {t.mapDealTitle}
              </div>
              <p className="text-gray-700 text-sm font-bold leading-relaxed">
                {t.mapDealDesc}
              </p>
            </div>
          </div>
        </div>

        {/* Domain Note */}
        <div className="mt-16 text-center max-w-2xl mx-auto">
          <p className="text-gray-900 text-[10px] md:text-xs font-black leading-relaxed px-6 tracking-tight">
            <span className="text-emerald-600 mr-2 opacity-50 font-black">※</span>
            {t.domainFeeNote}
          </p>
        </div>
      </div>
    </section>
  );
}
