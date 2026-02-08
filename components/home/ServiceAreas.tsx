import { MapPin, Globe, Phone, Clock } from "lucide-react";

export default function ServiceAreas() {
  return (
    <section className="bg-white py-16 border-y border-gray-200 ">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 items-center">
          {/* Main Office Location */}
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
              <MapPin className="w-6 h-6 text-purple-600" />
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1">Main Office</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Behind Davitech Oil, Lekki Epe Expressway, Lagos
              </p>
            </div>
          </div>

          {/* Service Coverage */}
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
              <Globe className="w-6 h-6 text-blue-600" />
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1">We Serve</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Lagos, Nigeria & remote clients worldwide
              </p>
            </div>
          </div>

          {/* Contact */}
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
              <Phone className="w-6 h-6 text-green-600" />
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1">Call Us</h3>
              <a 
                href="tel:08080913334" 
                className="text-sm text-gray-600 hover:text-purple-600 transition-colors"
              >
                08080913334
              </a>
            </div>
          </div>

          {/* Business Hours */}
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
              <Clock className="w-6 h-6 text-orange-600" />
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1">Business Hours</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Mon - Fri, 8:00 AM - 5:00 PM
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}