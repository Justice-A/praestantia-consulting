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
    "Designed NTA 2025 compliant payroll system for Lagos service company",
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
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Recent Client Wins
            <span className="block w-24 h-1 bg-purple-500 mx-auto mt-3"></span>
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

  
      </div>
    </section>
  );
}