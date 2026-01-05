import { MapPin, TrendingUp, MessageSquare, Camera, Check } from "lucide-react";
import { useTranslation } from "../lib/TranslationContext";
import { stripePromise } from "../lib/stripe";

export function MEOConsulting() {
  const { t } = useTranslation();

  const features = [
    { icon: TrendingUp, text: t.meoFeature1 },
    { icon: MessageSquare, text: t.meoFeature2 },
    { icon: Camera, text: t.meoFeature3 },
  ];

  const handleSubscribe = async () => {
    // In a real application, you would call your backend to create a Checkout Session.
    // const response = await fetch('/create-checkout-session', { method: 'POST' });
    // const session = await response.json();
    
    // Then redirect to Checkout:
    // const stripe = await stripePromise;
    // const { error } = await stripe?.redirectToCheckout({ sessionId: session.id });

    // Since we don't have a backend in this prototype, we'll use a placeholder Payment Link.
    // Replace this with your actual Stripe Payment Link or backend integration.
    window.open('https://buy.stripe.com/test_...', '_blank');
  };

  return (
    <section id="meo-consulting" className="py-20 bg-emerald-50 relative overflow-hidden">
      <div className="absolute top-0 right-0 -mt-20 -mr-20 w-80 h-80 bg-emerald-100 rounded-full blur-3xl opacity-50" />
      <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-80 h-80 bg-blue-100 rounded-full blur-3xl opacity-50" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white text-emerald-800 text-xs font-bold mb-6 border border-emerald-200 shadow-sm">
              <MapPin size={14} className="fill-current" />
              MEO Boost
            </div>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-gray-900 mb-4 leading-tight">
              {t.meoTitle}
            </h2>
            <p className="text-xl text-[#059669] font-bold mb-6">
              {t.meoSubtitle}
            </p>
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              {t.meoDesc}
            </p>

            <div className="space-y-4 mb-8">
              {features.map((f, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-[#059669] shadow-sm">
                    <f.icon size={20} />
                  </div>
                  <span className="font-bold text-gray-800">{f.text}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-3xl p-8 shadow-2xl border border-emerald-100 relative">
            <div className="absolute top-0 right-0 -mt-4 -mr-4 bg-red-500 text-white text-xs font-bold px-4 py-2 rounded-full shadow-lg rotate-3">
              Hot
            </div>
            
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Monthly MEO Plan</h3>
            <div className="flex items-baseline gap-2 mb-6">
              <span className="text-4xl font-extrabold text-[#059669]">{t.meoPrice}</span>
            </div>

            <div className="space-y-3 mb-8">
              <div className="p-3 bg-emerald-50 rounded-lg text-xs font-bold text-emerald-800 flex items-center gap-2">
                <Check size={14} /> {t.meoStandardBonus}
              </div>
              <div className="p-3 bg-indigo-50 rounded-lg text-xs font-bold text-indigo-800 flex items-center gap-2">
                <Check size={14} /> {t.meoPremiumBonus}
              </div>
            </div>

            <button
              onClick={handleSubscribe}
              className="block w-full py-4 rounded-xl bg-[#059669] text-white text-center font-bold text-lg hover:bg-emerald-600 transition-all shadow-lg hover:shadow-xl active:scale-95"
            >
              {t.meoSubscribe}
            </button>
            
            <p className="mt-4 text-xs text-center text-gray-400">
              Powered by Stripe. Secure payment.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
