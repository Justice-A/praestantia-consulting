"use client";

import Link from "next/link";
import { ArrowRight, Users, FileText, Settings, BookOpen } from "lucide-react";
import { motion, easeIn } from "framer-motion";

const subtleHeaderIn = {
  hidden: { opacity: 0, y: 12 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: easeIn },
  },
};

const fadeIn = {
  hidden: { opacity: 0, y: 16 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: easeIn },
  },
};

export default function Services() {
  const services = [
    {
      title: "Payroll Management",
      slug: "payroll-management-lagos",
      description: "NTA 2025 compliant payroll systems designed for Lagos SMEs and startups. Automated tax calculations, monthly payslip generation, and full compliance with Nigerian tax regulations.",
      icon: Users,
      iconBg: "bg-blue-500",
    },
    {
      title: "Tax Advisory & Filing",
      slug: "tax-advisory-lagos",
      description: "VAT returns, income tax, and annual returns filed accurately and on time. Expert tax planning and optimization strategies to minimize liabilities while staying compliant.",
      icon: FileText,
      iconBg: "bg-purple-500",
    },
    {
      title: "Accounting System Design",
      slug: "accounting-system-setup",
      description: "Custom chart of accounts and workflows built specifically for your business needs. Complete setup, software integration, and comprehensive staff training included.",
      icon: Settings,
      iconBg: "bg-green-500",
    },
    {
      title: "Bookkeeping & Compliance",
      slug: "bookkeeping-services-lagos",
      description: "Monthly financial reports and ongoing compliance support to keep your finances organized. Bank reconciliation, transaction recording, and tax-ready reporting year-round.",
      icon: BookOpen,
      iconBg: "bg-orange-500",
    },
  ];

  return (
    <section className="bg-gray-50 py-24 ">
      <div className="mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={subtleHeaderIn}
        >
          <h3 className="text-4xl lg:text-4xl font-bold text-gray-900 mb-4">
            How We Help Lagos Businesses
          </h3>
          <p className="text-lg text-gray-600 mx-auto">
            Comprehensive accounting services tailored for SMEs, startups, and individuals
          </p>
        </motion.div>

        {/* Services Grid - 3 columns */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          transition={{ staggerChildren: 0.1 }}
        >
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.div key={index} variants={fadeIn}>
                <Link
                  href={`/services/${service.slug}`}
                  className="group"
                >
      
                  <div className="bg-white rounded-2xl p-10 shadow-md hover:shadow-2xl transition-all duration-300 min-h-105 flex flex-col">
                  {/* Colored Icon */}
                  <div
                    className={`w-20 h-20 ${service.iconBg} rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <Icon className="w-10 h-10 text-white" />
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-purple-600 transition-colors">
                    {service.title}
                  </h3>

                  {/* Description - flex-grow pushes CTA to bottom */}
                  <p className="text-gray-600 leading-relaxed mb-6 grow">
                    {service.description}
                  </p>

                  {/* CTA at bottom */}
                  <div className="flex items-center gap-2 text-purple-600 font-semibold group-hover:gap-3 transition-all mt-auto">
                    <span>Learn more</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 bg-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-purple-700 transition-all shadow-lg hover:shadow-xl"
          >
            View All Services
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}