"use client";

import Image from "next/image";
import Link from "next/link";
import { Award, CheckCircle, Target, Users, Briefcase, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";
import CTA from "@/components/home/CTA";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const fadeIn = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.8 } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.9 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
};
import React from 'react'

export default function About() {
  return (
    <div>
    <section className="bg-white py-24">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              About Us
              <span className="block w-24 h-1 bg-blue-800 mx-auto mt-3"></span>
            </h2>
          </motion.div>

          <motion.div
            className="space-y-6 text-lg text-gray-700 leading-relaxed"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.p variants={fadeInUp}>
              Praestantia is built on the principle that sound financial structure is the backbone of every sustainable business.
            </motion.p>

            <motion.p variants={fadeInUp}>
              Many organisations start with strong ideas and capable people but lack the systems needed to support growth, ensure compliance, and maintain accountability. What once worked informally can begin to create risk, inefficiency, and uncertainty.
            </motion.p>

            <motion.p variants={fadeInUp}>
              Praestantia partners with businesses to put the right structures in place—establishing practical financial frameworks, strengthening accountability, and aligning operations with regulatory and reporting requirements.
            </motion.p>

            <motion.p
              className="text-xl font-semibold text-gray-600 pt-4"
              variants={fadeInUp}
            >
              We provide experienced, hands-on support to organisations that need sound financial management without immediately building a full in-house finance function.
            </motion.p>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
