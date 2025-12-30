import { Quote } from "lucide-react";

export function Testimonials() {
  const testimonials = [
    {
      name: "Nano Website",
      role: "First Customer",
      content: "Tokyo Websites transformed our online presence. The team understood our vision and delivered a website that truly represents our brand. The turnaround time was impressive, and the quality exceeded our expectations.",
      rating: 5,
      ja: "東京ウェブサイトは私たちのオンラインプレゼンスを変えました。チームは私たちのビジョンを理解し、ブランドを真に表現するウェブサイトを提供してくれました。納期も印象的で、品質は期待を超えていました。",
    },
  ];

  return (
    <section id="testimonials" className="py-24 bg-gray-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 mb-4">
            お客様の声
          </h2>
          <p className="text-gray-600 text-lg">
            Customer Testimonials
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="text-yellow-400">★</span>
                ))}
              </div>
              <Quote className="w-8 h-8 text-emerald-200 mb-4" />
              <p className="text-gray-700 leading-relaxed mb-4 italic">
                "{testimonial.content}"
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-sm">
                "{testimonial.ja}"
              </p>
              <div className="pt-4 border-t border-gray-100">
                <div className="font-bold text-gray-900">{testimonial.name}</div>
                <div className="text-sm text-gray-500">{testimonial.role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

