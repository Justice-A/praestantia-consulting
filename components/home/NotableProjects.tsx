"use client";
import { CheckCircle } from "lucide-react";
import { motion, easeOut, easeIn } from "framer-motion";
import Link from "next/link";

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

const fadeUpDelayed = {
  hidden: { opacity: 0, y: 16 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: 0.15, ease: easeOut },
  },
};

export default function NotableProjects() {
  const projects = [
    "Designed NTA 2025 compliant payroll system for Lagos manufacturing company",
    "Built complete accounting department from scratch for tech startup",
    "Created costing and pricing templates for offshore cleaning services",
    "Set up chart of accounts for accounting software implementation"
  ];

  return (
    <section className="bg-gray-50 py-24">
      <div className=" mx-auto px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={subtleHeaderIn}
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Recent Client Wins
          </h2>
          <p className="text-2xl text-gray-600  mx-auto">
            Real results for real businesses
          </p>
        </motion.div>
          <motion.div
                    className="grid md:grid-cols-2 gap-6 mb-12"
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: "-80px" }}>
          {projects.map((project, index) => (
            <motion.div 
              key={index}
              variants={fadeIn}
              className="bg-white p-8 rounded-lg border border-gray-200 hover:shadow-lg transition-all hover:border-purple-200"
            >
              <div className="flex items-start gap-4">
                <div className="shrink-0">
                  <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                    <CheckCircle className="w-6 h-6 text-purple-600" />
                  </div>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  {project}
                </p>
              </div>
            </motion.div>
          ))}
           </motion.div>

        <div className="text-center\">
          <Link 
            href="/case-studies" 
            className="inline-flex items-center gap-2 text-purple-600 font-semibold hover:text-purple-700 transition-colors text-lg"
          >
            See Case Studies
            <svg 
              className="w-5 h-5" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M17 8l4 4m0 0l-4 4m4-4H3" 
              />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}