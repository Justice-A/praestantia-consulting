"use client";

import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";
import { motion, easeIn } from "framer-motion";

const subtleHeaderIn = {
  hidden: { opacity: 0, y: 12 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: easeIn },
  },
};

export default function CTA() {
  return (
    <section className="bg-gray-600 py-16 lg:py-41 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          <motion.div
            className="text-center lg:text-left lg:max-w-2xl"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={subtleHeaderIn}
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Ready to Get Your Finances Organized?
            </h2>
            <p className="text-xl text-gray-100 leading-relaxed">
              Contact us today. Let's discuss how we can help your business start on the right path, stay tax-compliant and growth-ready.
            </p>
          </motion.div>
          <div className="flex flex-col sm:flex-row gap-4 shrink-0">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-white text-blue-900 px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition-all shadow-xl hover:shadow-2xl group"
            >
              Get Started Now
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}