"use client";

import { motion } from "framer-motion";

interface Props {
  title: string;
  subtitle?: string;
}

export default function AnimatedHeading({ title, subtitle }: Props) {
  return (
    <div className="text-center mb-16">
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
        className="text-3xl font-bold text-gray-900 mb-4 "
        
      >
        {title}
        <span className="block w-24 h-1 bg-purple-500 mx-auto mt-3"></span>
      </motion.h2>

      {subtitle && (
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
          viewport={{ once: true }}
          className="text-xl text-gray-600 mx-auto"
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}
