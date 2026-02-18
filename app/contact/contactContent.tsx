"use client";
import React from 'react'
import Image from "next/image";
import { Phone, Mail, MapPin, Clock, MessageCircle, Calendar } from "lucide-react";
import { motion, easeIn } from "framer-motion";
import Container from "@/components/ui/Container";
import Link from "next/link";

const heroHeaderIn = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 1, ease: easeIn },
  },
};


const subtleHeaderIn = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: easeIn },
  },
};

const leftCard = {
  hidden: { opacity: 0, x: -60 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: easeIn },
  },
};

const rightCard = {
  hidden: { opacity: 0, x: 60 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: easeIn },
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
export default function ContactPage() {
  const contactMethods = [
    {
      icon: Phone,
      title: "Call Us",
      secondary: "Monday - Friday, 8:00 AM - 5:00 PM",
      href: "tel:08080913334",
      iconBg: "bg-blue-100",
      iconColor: "text-blue-600",
      cta: "Call Now",
    },
    {
      icon: MessageCircle,
      title: "WhatsApp",
      secondary: "Fastest response time",
      href: "https://wa.me/2348080913334",
      iconBg: "bg-green-100",
      iconColor: "text-green-600",
      cta: "Start Chat",
    },
    {
      icon: Mail,
      title: "Email",
      primary: "praestantiaconsult@gmail.com",
      secondary: "We'll respond within 24 hours",
      href: "mailto:praestantiaconsult@gmail.com",
      iconBg: "bg-purple-100",
      iconColor: "text-purple-600",
      cta: "Send Email",
    },
  ];

  const officeInfo = {
    address: "Behind Davitech Oil, Lekki Epe Expressway, Lagos",
    hours: "Monday - Friday: 8:00 AM - 5:00 PM",
    weekends: "Weekends: By appointment only",
  };

  const faqs = [

    {
      question: "How quickly can you respond to urgent requests?",
      answer: "For urgent tax deadlines or time-sensitive issues, contact us via WhatsApp or phone. We prioritize urgent requests and can often accommodate same-day or next-day consultations depending on availability.",
    },
      {
      question: "How often can we communicate?",
      answer: "We maintain regular communication with our clients through scheduled meetings, email updates, and WhatsApp support. You can expect updates on your financial status at least once a month.",
    },


  ];

  return (
    <div>
        
    <section className="relative py-28 lg:py-32 overflow-hidden text-center">
      {/* Background Image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/contact-us.jpg"
          alt="Professional accounting consultation"
          fill
          className="object-cover brightness-[0.25]"
          priority
        />
      </div>

      {/* Decorative blur */}
      <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-purple-200 rounded-full blur-3xl opacity-50 z-10"></div>

      <div className="relative z-20 mx-auto w-full">
        <Container>
          <div className="flex flex-col space-y-4 text-white">

            <motion.div
              variants={heroHeaderIn}
              initial="hidden"
              animate="show"
            >
              <div className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-semibold mb-6">
                Get In Touch
              </div>
            </motion.div>

            <motion.div
              variants={heroHeaderIn}
              initial="hidden"
              animate="show"
              transition={{ delay: 0.2 }}
            >
              <h1 className="text-4xl lg:text-5xl font-bold mb-6">
                Let’s Talk About Your Business Finances
              </h1>
            </motion.div>

            <motion.div
              variants={heroHeaderIn}
              initial="hidden"
              animate="show"
              transition={{ delay: 0.4 }}
            >
              <p className="text-xl text-purple-100 leading-relaxed max-w-4xl mx-auto mb-8">
                Whether you need payroll setup, tax filing, or ongoing bookkeeping,
                we're here to help. Reach out today.
              </p>
            </motion.div>

          </div>
        </Container>
      </div>
    </section>

      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div
            className="text-center mb-16"
           
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Choose Your Preferred Contact Method
            </h2>
            <p className="text-lg text-gray-600">
              We're available through multiple channels for your convenience
            </p>
          </div>
          <div
            className="grid md:grid-cols-3 gap-8"
          
          >
            {contactMethods.map((method, index) => {
              const Icon = method.icon;
              return (
                <div key={index} className="bg-white rounded-2xl p-8 shadow-lg border-2 border-gray-200 hover:border-purple-300 transition-all text-center">
                  <div className={`w-20 h-20 ${method.iconBg} rounded-2xl flex items-center justify-center mx-auto mb-6`}>
                    <Icon className={`w-10 h-10 ${method.iconColor}`} />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    {method.title}
                  </h3>
                  <p className="text-lg font-semibold text-gray-900 mb-2">
                    {method.primary}
                  </p>
                  <p className="text-gray-600 mb-6">
                    {method.secondary}
                  </p>
                  <a
                    href={method.href}
                    className="inline-flex items-center justify-center gap-2 bg-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-all w-full"
                  >
                    {method.cta}
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </section>

  
      <section className="bg-white py-24">
        <div className="mx-auto px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={subtleHeaderIn}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Serving Businesses Across Nigeria
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed max-w-4xl mx-auto">
              While our main office is in Lagos, we work with clients nationwide through secure remote collaboration. From Abuja to Port Harcourt, from Kano to Ibadan, if you need professional accounting services, we're here to help.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="bg-gray-50 py-24">
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
              Before You Reach Out
            </h2>
            <p className="text-2xl text-gray-600 mx-auto">
              Quick answers to common questions
            </p>
          </motion.div>

          {/* Cards */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-6 overflow-hidden"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            
          >
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                variants={index % 2 === 0 ? leftCard : rightCard}
                className="bg-white p-8 rounded-lg border border-gray-100 hover:shadow-lg transition-shadow"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {faq.question}
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {faq.answer}
                </p>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </section>

      <section className="bg-gray-600 py-24 text-white">
      <div className="mx-auto px-6 lg:px-8">

        {/* Heading */}
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={subtleHeaderIn}
        >
          <h2 className="text-4xl font-bold mb-8">
            What Happens After You Contact Us?
          </h2>
        </motion.div>

        {/* Cards */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6 overflow-hidden"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          
        >
          {/* Card 1 */}
          <motion.div
            variants={leftCard}
            className="bg-white/10 backdrop-blur-sm p-8 rounded-lg hover:shadow-lg transition-shadow"
          >
            <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mb-4">
              <span className="text-2xl font-bold">1</span>
            </div>
            <h3 className="text-xl font-bold mb-2">Initial Response</h3>
            <p className="text-purple-100">
              We'll respond within 24 hours (often same-day) to acknowledge your inquiry.
            </p>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            variants={rightCard}
            className="bg-white/10 backdrop-blur-sm p-8 rounded-lg hover:shadow-lg transition-shadow"
          >
            <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mb-4">
              <span className="text-2xl font-bold">2</span>
            </div>
            <h3 className="text-xl font-bold mb-2">Vetting</h3>
            <p className="text-purple-100">
              We'll discuss to understand your needs and recommend the best solution.
            </p>
          </motion.div>

          {/* Card 3 */}
          <motion.div
            variants={leftCard}
            className="bg-white/10 backdrop-blur-sm p-8 rounded-lg hover:shadow-lg transition-shadow"
          >
            <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mb-4">
              <span className="text-2xl font-bold">3</span>
            </div>
            <h3 className="text-xl font-bold mb-2">Custom Proposal</h3>
            <p className="text-purple-100">
              You'll receive a detailed proposal with transparent pricing and timelines.
            </p>
          </motion.div>

        </motion.div>

      </div>
    </section>

    <section className="bg-white py-24">
    <div className="mx-auto px-6 lg:px-8">

      <motion.div
        className="text-center mb-8"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={subtleHeaderIn}
      >
        <h2 className="text-4xl font-bold text-gray-900 mb-6">
          Ready to Get Started?
        </h2>
        <p className="text-xl text-gray-600 mb-8">
          Don't let accounting stress hold your business back. Reach out today and let's solve it together.
        </p>
      </motion.div>

      <motion.div
        className="flex flex-col sm:flex-row gap-4 justify-center overflow-hidden"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        
      >
        <motion.a
          variants={leftCard}
          href="tel:08080913334"
          className="inline-flex items-center justify-center gap-2 bg-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-purple-700 transition-all shadow-lg"
        >
          <Phone className="w-5 h-5" />
          Call Us
        </motion.a>

        <motion.a
          variants={rightCard}
          href="https://wa.me/2348080913334"
          className="inline-flex items-center justify-center gap-2 border-2 text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-green-700 transition-all shadow-lg"
        >
          <MessageCircle className="w-5 h-5" />
          WhatsApp Us
        </motion.a>
      </motion.div>

    </div>
  </section>

    </div>
  )
}
