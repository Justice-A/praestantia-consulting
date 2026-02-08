import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";

export default function CTA() {
  return (
    <section className="bg-purple-600 py-16 lg:py-20 relative overflow-hidden h-44">
      {/* Decorative background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          {/* Text Content */}
          <div className="text-center lg:text-left lg:max-w-2xl">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Ready to Get Your Finances Organized?
            </h2>
            <p className="text-lg text-purple-100 leading-relaxed">
              Schedule a free consultation with a chartered accountant today. Let's discuss how we can help your business stay tax-compliant and growth-ready.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 shrink-0">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-white text-purple-600 px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition-all shadow-xl hover:shadow-2xl group"
            >
              Get Started Now
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <a
              href="tel:08080913334"
              className="inline-flex items-center justify-center gap-2 bg-purple-700 text-white px-8 py-4 rounded-lg font-bold hover:bg-purple-800 transition-all border-2 border-white/20">
              <Phone className="w-5 h-5" />
              Call Us Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}