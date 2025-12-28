import { Building2, MapPin } from "lucide-react";

export function Customers() {
  const customers = [
    {
      name: "Ren Thai Massage",
      location: "Tajimi, Gifu",
      category: "Relaxation",
      desc: "Traditional Thai massage salon",
    },
    {
      name: "Cafe Horizon",
      location: "Kunitachi, Tokyo",
      category: "Cafe & Bar",
      desc: "Modern cafe with antique furniture",
    },
    {
      name: "Smile Dental Clinic",
      location: "Hino, Tokyo",
      category: "Medical",
      desc: "Community-focused dental care",
    },
    {
      name: "Yamada Accounting",
      location: "Tachikawa, Tokyo",
      category: "Professional Services",
      desc: "Tax and accounting for SMEs",
    },
    {
      name: "Beauty Salon Eclat",
      location: "Fuchu, Tokyo",
      category: "Beauty",
      desc: "Private salon for total beauty",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Trusted by Local Businesses
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We help businesses across various industries establish their digital presence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {customers.map((customer, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-2xl p-6 border border-gray-100 hover:shadow-md transition-shadow"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="p-3 bg-white rounded-xl shadow-sm">
                  <Building2 className="w-6 h-6 text-[#059669]" />
                </div>
                <span className="inline-flex items-center gap-1 text-xs font-bold text-gray-500 bg-white px-2 py-1 rounded-full border border-gray-100">
                  <MapPin size={12} />
                  {customer.location}
                </span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {customer.name}
              </h3>
              <div className="text-xs font-bold text-[#059669] mb-3 uppercase tracking-wider">
                {customer.category}
              </div>
              <p className="text-sm text-gray-600">
                {customer.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

