"use client";

import { Award, Users, TrendingUp, CheckCircle } from "lucide-react";
import { motion, easeOut, easeIn } from "framer-motion";
import Container from "@/components/ui/Container";

const subtleHeaderIn = {
  hidden: { opacity: 0, y: 12 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: easeIn },
  },
};

const leftCard = {
  hidden: { x: -120, opacity: 0 },
  show: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.7, ease: easeOut },
  },
};

const rightCard = {
  hidden: { x: 120, opacity: 0 },
  show: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.7, ease: easeOut },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: easeOut },
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


export default function WhyChooseUs() {
  return (
    <section className="bg-white py-24">
      <Container>
        <div className="mx-auto px-6 lg:px-8">
          {/* Heading */}
          <motion.div
            className="text-center mb-16"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={subtleHeaderIn}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Choose Us?
            </h2>
            <p className="text-2xl text-gray-600 mx-auto">
              Professional expertise backed by real credentials
            </p>
          </motion.div>

          {/* Cards */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-6 overflow-hidden"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            transition={{ staggerChildren: 0.1 }}
          >
            {/* Card 1 */}
            <motion.div
              variants={leftCard}
              className="bg-gray-50 p-8 md:p-4 rounded-lg border border-gray-100 hover:shadow-lg transition-shadow"
            >
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <Award className="w-6 h-6 text-purple-600" />
              </div>
              <p className="text-2xl text-gray-900 mb-2">
                7+ Years Experience
              </p>
              <p className="text-gray-600 text-sm">
                Founder is a Fellow Chartered Accountant (FCA) with proven track record
              </p>
            </motion.div>

            {/* Card 2 */}
            <motion.div
              variants={rightCard}
              className="bg-gray-50 p-8 md:p-4 rounded-lg border border-gray-100 hover:shadow-lg transition-shadow"
            >
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <CheckCircle className="w-6 h-6 text-purple-600" />
              </div>
              <p className="text-2xl text-gray-900 mb-2">
                ICAN & CITN Certified
              </p>
              <p className="text-gray-600 text-sm">
                Fully licensed and regulated by professional bodies
              </p>
            </motion.div>

            {/* Card 3 */}
            <motion.div
              variants={leftCard}
              className="bg-gray-50 p-8 md:p-4 rounded-lg border border-gray-100 hover:shadow-lg transition-shadow"
            >
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-purple-600" />
              </div>
              <p className="text-2xl text-gray-900 mb-2">
                Startup & SME Specialists
              </p>
              <p className="text-gray-600 text-sm">
                Designed systems for 10+ businesses across Nigeria
              </p>
            </motion.div>

            {/* Card 4 */}
            <motion.div
              variants={rightCard}
              className="bg-gray-50 p-8 md:p-4 rounded-lg border border-gray-100 hover:shadow-lg transition-shadow"
            >
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <TrendingUp className="w-6 h-6 text-purple-600" />
              </div>
              <p className="text-2xl text-gray-900 mb-2">
                Serving Lagos & Beyond
              </p>
              <p className="text-gray-600 text-sm">
                Remote support available across Nigeria and worldwide
              </p>
            </motion.div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
