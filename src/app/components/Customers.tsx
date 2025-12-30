import { Quote, Star, MapPin } from "lucide-react";

export function Customers() {
  return (
    <section id="testimonials" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 mb-4">
            お客様の声
          </h2>
          <p className="text-gray-600 text-lg">
            Customer Testimonials
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-emerald-50 to-white rounded-3xl p-8 md:p-12 border border-emerald-100 shadow-lg">
            <div className="flex items-center gap-1 mb-6">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
              ))}
            </div>
            
            <Quote className="w-12 h-12 text-emerald-200 mb-6" />
            
            <blockquote className="text-xl md:text-2xl text-gray-800 leading-relaxed mb-8 font-medium">
              「素晴らしく迅速なサービスで、技術に詳しくない私の負担を軽減してくれました。」
            </blockquote>
            
            <div className="pt-6 border-t border-emerald-200">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-full bg-emerald-100 flex items-center justify-center">
                  <span className="text-2xl font-bold text-emerald-700">R</span>
                </div>
                <div>
                  <div className="font-bold text-gray-900 text-lg mb-1">
                    Ren Thai Massage
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <MapPin size={14} />
                    <span>岐阜県多治見市</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

