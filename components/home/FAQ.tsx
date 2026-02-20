"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import Link from "next/link";
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

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "How much does a chartered accountant cost in Nigeria?",
      answer: "Accounting fees vary based on your business size and needs. For SMEs, monthly bookkeeping typically starts from ₦50,000, while one-time projects like annual returns or payroll setup are quoted individually. We offer a free consultation to assess your needs and provide transparent pricing with no hidden fees."
    },
    {
      question: "Do I need an accountant for my small business in Nigeria?",
      answer: "If you're handling payroll, filing taxes, or preparing financial statements, professional accounting ensures compliance and saves money in the long run. We help startups and SMEs avoid costly penalties, stay tax-compliant, and make informed financial decisions. Even small businesses benefit from proper bookkeeping and tax planning."
    },
    {
      question: "What is ICAN certification and why does it matter?",
      answer: "ICAN (Institute of Chartered Accountants of Nigeria) is Nigeria's premier accounting certification body. As a Fellow Chartered Accountant (FCA), I've met the highest standards of professional competence and ethics, with 25 years of experience serving businesses across Nigeria. ICAN certification ensures you're working with a qualified, regulated professional."
    },
    {
      question: "Can you help with VAT filing and monthly returns?",
      answer: "Yes. We prepare and file VAT returns with the Nigerian Revenue Service (NRS), ensuring accurate calculations and timely submissions to avoid penalties. This includes reconciliation, documentation, and ongoing compliance support. We also handle corrections if you've fallen behind on VAT filings."
    },
    {
      question: "What is NTA 2025 and does my payroll comply?",
      answer: "The Nigeria Tax Administration (NTA) 2025 introduces new compliance requirements for payroll systems, including stricter reporting and tax calculations. We design and implement payroll systems that meet these standards, ensuring your business avoids penalties and maintains full compliance with current regulations."
    },
    {
      question: "Do you work with businesses outside Lagos?",
      answer: "Yes! We provide remote accounting services to businesses across Nigeria and internationally. We use secure cloud-based systems and conferencing to collaborate with clients anywhere in the world. Distance is no barrier to quality service."
    },
    {
      question: "What's the difference between a bookkeeper and an accountant?",
      answer: "Bookkeepers record daily transactions and maintain financial records. Accountants (especially chartered accountants) analyze financial data, prepare tax returns, provide strategic advice, and ensure regulatory compliance. As a chartered accountant, I offer both bookkeeping services and high-level financial consulting and tax planning."
    },
    {
      question: "How quickly can you help with urgent tax filings?",
      answer: "We prioritize urgent requests and can often accommodate same-week filings for tax returns, VAT submissions, or annual returns, depending on complexity and document availability. Contact us immediately if you're facing a deadline—we'll assess your situation and provide a realistic timeline during our free consultation."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-white py-24">
      <div className=" mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={subtleHeaderIn}
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
            <span className="block w-24 h-1 bg-purple-500 mx-auto mt-3"></span>
          </h2>
          <p className="text-2xl text-gray-600">
            Quick answers to common questions about our accounting services
          </p>
        </motion.div>

        {/* FAQ Accordion */}
        <motion.div
          className="space-y-4"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          transition={{ staggerChildren: 0.1 }}
        >
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <motion.div
                key={index}
                variants={fadeIn}
                className="bg-white border-2 border-gray-200 rounded-xl overflow-hidden hover:border-purple-200 transition-colors "
              >
                {/* Question Button */}
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
                >
                  <span className="font-semibold text-lg text-gray-900 pr-8">
                    {faq.question}
                  </span>
                  
                  {/* Plus/Minus Icon */}
                  <div className={`shrink-0 w-8 h-8 rounded-lg flex items-center justify-center transition-all ${
                    isOpen ? 'bg-purple-600 rotate-180' : 'bg-gray-100'
                  }`}>
                    {isOpen ? (
                      <Minus className="w-5 h-5 text-white" />
                    ) : (
                      <Plus className="w-5 h-5 text-gray-600" />
                    )}
                  </div>
                </button>

                {/* Answer */}
                {isOpen && (
                  <div className="px-6 pb-6 pt-2 animate-fade-in-up">
                    <p className="text-gray-700 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}