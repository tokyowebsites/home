import React, { useMemo, useState } from "react";
import { Check, ArrowRight, Zap, UtensilsCrossed, ShoppingBag, Scissors, Coffee, Gift } from "lucide-react";
import { useTranslation } from "../lib/TranslationContext";
import { BackgroundGradient } from "./ui/BackgroundGradient";

export function Plans() {
  const { t } = useTranslation();
  const [selectedServices, setSelectedServices] = useState<Record<string, boolean>>({});

  const services = useMemo(
    () => [
      { id: "website", label: t.serviceWebsite, price: 20000, category: "web" as const },
      { id: "booking", label: t.serviceBooking, price: 15000, category: "web" as const },
      { id: "multiButtons", label: t.serviceMultiButtons, price: 9000, category: "web" as const },
      { id: "multiMenu", label: t.serviceMultiMenu, price: 0, category: "web" as const },
      { id: "stripeMarketplace", label: t.serviceStripeMarketplace, price: 25000, category: "web" as const },
      { id: "photoshoot", label: t.servicePhotoshoot, price: 9000, category: "web" as const },
      { id: "wifiCampaign", label: t.serviceWifiCampaign, price: 7000, category: "web" as const },
      { id: "instagramEmbed", label: t.serviceInstagramEmbed, price: 1000, category: "web" as const },
      { id: "mapsMaintenance", label: t.serviceMapsMaintenance, price: 0, category: "map" as const },
      { id: "mapsPhotoMenu", label: t.serviceMapsPhotoMenu, price: 10000, category: "map" as const },
      { id: "mapsPhotoUpdates", label: t.serviceMapsPhotoUpdates, price: 10000, category: "map" as const },
      { id: "nfcReviewCard", label: t.serviceNfcReviewCard, price: 8000, category: "map" as const },
      { id: "reviewsConsulting", label: t.serviceReviewsConsulting, price: 6000, category: "map" as const },
    ],
    [t],
  );

  const totals = useMemo(() => {
    let webTotal = 0;
    let mapTotal = 0;

    services.forEach((service) => {
      if (!selectedServices[service.id]) return;
      if (service.category === "web") webTotal += service.price;
      if (service.category === "map") mapTotal += service.price;
    });

    const webDealEligible = webTotal >= 35000 && mapTotal > 0;
    const mapDealEligible = mapTotal >= 15000 && webTotal > 0;

    const webDealDiscount = webDealEligible ? 5000 : 0; // Applies to map services
    const mapDealDiscount = mapDealEligible ? 10000 : 0; // Applies to website services

    const totalDiscount =
      Math.min(mapTotal, webDealDiscount) + Math.min(webTotal, mapDealDiscount);

    const total = webTotal + mapTotal - totalDiscount;

    return {
      webTotal,
      mapTotal,
      totalDiscount,
      total,
      webDealDiscount,
      mapDealDiscount,
      webDealEligible,
      mapDealEligible,
    };
  }, [selectedServices, services]);

  const toggleService = (id: string) => {
    setSelectedServices((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const formatYen = (value: number) => `¥${value.toLocaleString("en-US")}`;
  
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
      sampleSite: t.sampleRestaurantName,
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
      sampleSite: t.sampleRetailName,
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
      sampleSite: t.sampleSalonName,
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
      sampleSite: t.sampleCafeName,
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

        {/* Mix & Match Service Menu */}
        <div className="max-w-6xl mx-auto mt-20">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900 text-white text-xs font-black uppercase tracking-widest mb-4">
              {t.mixMatchTitle}
            </div>
            <h3 className="text-3xl md:text-4xl font-black text-gray-900 mb-3">
              {t.mixMatchTitle}
            </h3>
            <p className="text-gray-600 text-base md:text-lg font-bold">
              {t.mixMatchSubtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 space-y-6">
              {[
                { key: "web", label: t.webServicesLabel },
                { key: "map", label: t.mapServicesLabel },
              ].map((group) => (
                <div key={group.key} className="bg-white rounded-3xl border border-gray-100 p-6 shadow-sm">
                  <div className="text-sm font-black text-gray-900 mb-4">
                    {group.label}
                  </div>
                  <div className="space-y-3">
                    {services
                      .filter((service) => service.category === group.key)
                      .map((service) => (
                        <label
                          key={service.id}
                          className="flex items-center gap-3 rounded-2xl border border-gray-100 px-4 py-3 hover:border-emerald-200 hover:bg-emerald-50/30 transition-colors cursor-pointer"
                        >
                          <input
                            type="checkbox"
                            checked={!!selectedServices[service.id]}
                            onChange={() => toggleService(service.id)}
                            className="h-4 w-4 accent-emerald-600"
                          />
                          <span className="text-sm font-bold text-gray-900">
                            {service.label}
                          </span>
                          <span className="ml-auto text-xs font-black text-gray-700">
                            {service.price === 0 ? t.free : formatYen(service.price)}
                          </span>
                        </label>
                      ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-white rounded-3xl border border-gray-100 p-6 shadow-lg h-fit">
              <div className="text-xs font-black uppercase tracking-widest text-gray-500 mb-2">
                {t.selectedTotalLabel}
              </div>
              <div className="space-y-2 text-sm font-bold text-gray-700">
                <div className="flex items-center justify-between">
                  <span>{t.webServicesLabel}</span>
                  <span>{formatYen(totals.webTotal)}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>{t.mapServicesLabel}</span>
                  <span>{formatYen(totals.mapTotal)}</span>
                </div>
              </div>

              <div className="mt-5 pt-5 border-t border-gray-100">
                <div className="text-xs font-black uppercase tracking-widest text-gray-500 mb-2">
                  {t.discountsLabel}
                </div>
                <div className="space-y-2 text-sm font-bold">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-700">{t.webDealTitle}</span>
                    <span className={totals.webDealEligible ? "text-emerald-600" : "text-gray-400"}>
                      -{formatYen(Math.min(totals.mapTotal, totals.webDealDiscount))}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-700">{t.mapDealTitle}</span>
                    <span className={totals.mapDealEligible ? "text-emerald-600" : "text-gray-400"}>
                      -{formatYen(Math.min(totals.webTotal, totals.mapDealDiscount))}
                    </span>
                  </div>
                  <div className="text-[10px] text-gray-400 font-semibold">
                    {t.autoDiscountNote}
                  </div>
                </div>
              </div>

              <div className="mt-5 pt-5 border-t border-gray-100">
                <div className="text-xs font-black uppercase tracking-widest text-gray-500 mb-2">
                  {t.estimatedTotalLabel}
                </div>
                <div className="text-3xl font-black text-gray-900">
                  {formatYen(totals.total)}
                </div>
                {totals.totalDiscount > 0 && (
                  <div className="mt-2 inline-block bg-emerald-50 text-emerald-700 px-3 py-1 rounded-full text-[10px] font-black">
                    {t.discountsLabel}: {formatYen(totals.totalDiscount)}
                  </div>
                )}
                {totals.webTotal + totals.mapTotal === 0 && (
                  <div className="mt-3 text-[10px] text-gray-500 font-semibold">
                    {t.noSelectionLabel}
                  </div>
                )}
              </div>
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
