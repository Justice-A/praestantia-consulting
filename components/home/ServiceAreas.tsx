"use client";
import { MapPin, Globe, Phone, Clock } from "lucide-react";
import { motion, easeOut, easeIn } from "framer-motion";

const fadeIn = {
  hidden: { opacity: 0, y: 16 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: easeIn },
  },
};

export default function ServiceAreas() {
  const serviceAreas = [
    {
      icon: MapPin,
      title: "Main Office",
      description: "Behind Davitech Oil, Lekki Epe Expressway, Lagos",
      bgColor: "bg-purple-100",
      textColor: "text-purple-600",
    },
    {
      icon: Globe,
      title: "We Serve",
      description: "Lagos, Nigeria & remote clients worldwide",
      bgColor: "bg-blue-100",
      textColor: "text-blue-600",
    },
    {
      icon: Phone,
      title: "Call Us",
      description: "08080913334",
      bgColor: "bg-green-100",
      textColor: "text-green-600",
      isPhone: true,
    },
    {
      icon: Clock,
      title: "Business Hours",
      description: "Mon - Fri, 8:00 AM - 5:00 PM",
      bgColor: "bg-orange-100",
      textColor: "text-orange-600",
    },
  ];

  return (
    <section className="bg-white py-16 border-y border-gray-200 ">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
        >
          {serviceAreas.map((area, index) => {
            const Icon = area.icon;
            return (
              <motion.div
                key={index}
                variants={fadeIn}
                className="bg-white p-8 rounded-lg border border-gray-200 hover:shadow-lg transition-all hover:border-purple-200"
              >
                <div className="flex items-start gap-4">
                  <div className={`w-12 h-12 ${area.bgColor} rounded-lg flex items-center justify-center flex-shrink-0`}>
                    <Icon className={`w-6 h-6 ${area.textColor}`} />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">{area.title}</h3>
                    {area.isPhone ? (
                      <a
                        href="tel:08080913334"
                        className="text-sm text-gray-600 hover:text-purple-600 transition-colors"
                      >
                        {area.description}
                      </a>
                    ) : (
                      <p className="text-sm text-gray-600 leading-relaxed">
                        {area.description}
                      </p>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}