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

export default function AboutPage() {
  const credentials = [
    {
      icon: Award,
      title: "Fellow Chartered Accountant (FCA)",
      description: "Highest professional qualification from ICAN",
    },
    {
      icon: CheckCircle,
      title: "ICAN & CITN Certified",
      description: "Licensed by Nigeria's premier accounting bodies",
    },
    {
      icon: Briefcase,
      title: "25 Years Experience",
      description: "Proven track record since 1999",
    },
    {
      icon: Users,
      title: "100+ Businesses Served",
      description: "Trusted by SMEs across Nigeria",
    },
  ];

  const approach = [
    {
      number: "01",
      title: "Assess",
      description: "Evaluate current practices and identify operational gaps in financial systems",
    },
    {
      number: "02",
      title: "Design",
      description: "Create practical, compliant financial structures tailored to your business",
    },
    {
      number: "03",
      title: "Implement",
      description: "Deploy systems realistic for your organization's size and stage",
    },
    {
      number: "04",
      title: "Transfer Knowledge",
      description: "Ensure your team can maintain systems for long-term sustainability",
    },
  ];

  const whatWeDo = [
    "Transition to compliant and well-structured payroll and tax systems",
    "Build reliable financial management and reporting processes",
    "Strengthen internal controls and operational accountability",
    "Prepare for growth, regulatory review, or organisational change",
  ];

  const whoWeServe = [
    {
      title: "Small & Medium Enterprises",
      description: "Strengthening financial discipline and building robust frameworks",
      icon: TrendingUp,
    },
    {
      title: "Startups",
      description: "Establishing foundational finance and payroll structures from day one",
      icon: Target,
    },
    {
      title: "Organizations in Transition",
      description: "Navigating regulatory, tax, or operational changes",
      icon: Briefcase,
    },
    {
      title: "Business Owners",
      description: "Providing experienced oversight without a full in-house team",
      icon: Users,
    },
  ];

  return (
    <>
      {/* HERO SECTION */}
      <section className="relative py-24 lg:py-36 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 -z-10">
          <Image
            src="/about-us.jpg"
            alt="About Praestantia Consulting"
            fill
            className="object-cover brightness-[0.2]"
            priority
          />
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative text-white">
          <motion.div
            className="text-center max-w-4xl mx-auto"
            initial="hidden"
            animate="show"
            variants={fadeIn}
          >
            <motion.h1
              className="text-4xl lg:text-5xl font-bold mb-6"
              variants={fadeInUp}
            >
              About{" "}
              
              <span className="text-purple-400">Praestantia Consulting</span>{" "}
              
            </motion.h1>

            <motion.p
              className="text-xl text-gray-200 leading-relaxed"
              variants={fadeInUp}
            >
              Many organizations begin with strong vision and momentum, but over time, financial processes become difficult to manage without deliberate systems in place. Praestantia exists to bridge that gap.
            </motion.p>

            {/* HERO BUTTONS */}
            <motion.div
              className="flex flex-col sm:flex-row justify-center gap-4 mt-8"
              variants={fadeInUp}
            >
              <Link
                href="/contact"
                className="inline-flex items-center justify-center bg-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-purple-700 transition-all shadow-md"
              >
                Get Started
              </Link>

              <Link
                href="/services"
                className="inline-flex items-center justify-center bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold border-2 border-white hover:bg-gray-100 transition-all"
              >
                Explore Services
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Our Foundation */}
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
              About Praestantia
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
              Praestantia is built on the principle that <strong className="text-purple-600">sound financial structure is the backbone of every sustainable business</strong>.
            </motion.p>

            <motion.p variants={fadeInUp}>
              Many organisations start with strong ideas and capable people but lack the systems needed to support growth, ensure compliance, and maintain accountability. What once worked informally can begin to create risk, inefficiency, and uncertainty.
            </motion.p>

            <motion.p variants={fadeInUp}>
              Praestantia partners with businesses to put those structures in place—establishing practical financial frameworks, strengthening accountability, and aligning operations with regulatory and reporting requirements.
            </motion.p>

            <motion.p
              className="text-xl font-semibold text-purple-600 pt-4"
              variants={fadeInUp}
            >
              We provide experienced, hands-on support to organisations that need sound financial management without immediately building a full in-house finance function.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Professional Credentials */}
      <section className="bg-gray-50 py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Professional Credentials
            </h2>
            <p className="text-lg text-gray-600">
              Qualified, certified, and committed to the highest standards
            </p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            {credentials.map((credential, index) => {
              const Icon = credential.icon;
              return (
                <motion.div
                  key={index}
                  className="bg-white rounded-xl p-6 shadow-lg text-center hover:shadow-xl transition-shadow"
                  variants={scaleIn}
                >
                  <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-purple-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {credential.title}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {credential.description}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* What We Do */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-8">
                What We Do
              </h2>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                We help businesses move from informal or reactive practices to structured, reliable systems that support decision-making, regulatory alignment, and long-term stability.
              </p>

              <motion.div
                className="space-y-4"
                variants={staggerContainer}
              >
                {whatWeDo.map((item, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start gap-4"
                    variants={fadeInUp}
                  >
                    <div className="flex-shrink-0 w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center mt-1">
                      <CheckCircle className="w-5 h-5 text-purple-600" />
                    </div>
                    <p className="text-gray-700 leading-relaxed">{item}</p>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            {/* Visual / Stats */}
            <motion.div
              className="bg-gradient-to-br from-purple-100 to-indigo-100 rounded-2xl p-12"
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={scaleIn}
            >
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Goal</h3>
                <p className="text-gray-700 text-lg leading-relaxed">
                  To move businesses from managing finances reactively to operating with structure that supports sustainable growth.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white rounded-xl p-4 text-center shadow-lg">
                  <div className="text-3xl font-bold text-purple-600">100+</div>
                  <div className="text-sm text-gray-600">Businesses Served</div>
                </div>
                <div className="bg-white rounded-xl p-4 text-center shadow-lg">
                  <div className="text-3xl font-bold text-purple-600">25</div>
                  <div className="text-sm text-gray-600">Years Experience</div>
                </div>
                <div className="bg-white rounded-xl p-4 text-center shadow-lg">
                  <div className="text-3xl font-bold text-purple-600">100%</div>
                  <div className="text-sm text-gray-600">Compliance Rate</div>
                </div>
                <div className="bg-white rounded-xl p-4 text-center shadow-lg">
                  <div className="text-3xl font-bold text-purple-600">FCA</div>
                  <div className="text-sm text-gray-600">ICAN Fellow</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="bg-gray-50 py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Our Approach
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Praestantia combines technical knowledge with implementation-focused support. The emphasis is not only on advising, but on ensuring that solutions are workable, understood, and embedded into daily operations.
            </p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            {approach.map((step, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-xl p-8 shadow-lg relative hover:shadow-xl transition-shadow"
                variants={scaleIn}
              >
                <div className="text-6xl font-bold text-purple-100 absolute top-4 right-4">
                  {step.number}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 relative z-10">
                  {step.title}
                </h3>
                <p className="text-gray-600 relative z-10 leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Who We Serve */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Who We Serve
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Praestantia works with individuals, startups, and small to medium-sized organisations seeking to operate with greater clarity, confidence, and control.
            </p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 gap-8"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            {whoWeServe.map((client, index) => {
              const Icon = client.icon;
              return (
                <motion.div
                  key={index}
                  className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow"
                  variants={fadeInUp}
                >
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-purple-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    {client.title}
                  </h3>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    {client.description}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

        {/* Our Commitment */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Our Commitment
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
              Praestantia is committed to clarity, professionalism, confidentiality, and practical execution—delivering solutions that support both immediate needs and future growth.
            </p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-4 gap-6"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.div
              className="bg-gray-50 rounded-xl p-6 border-l-4 border-purple-600"
              variants={scaleIn}
            >
              <h3 className="font-bold text-xl text-gray-900 mb-2">Clarity</h3>
              <p className="text-gray-600 text-sm">Transparent communication and straightforward solutions</p>
            </motion.div>
            
            <motion.div
              className="bg-gray-50 rounded-xl p-6 border-l-4 border-purple-600"
              variants={scaleIn}
            >
              <h3 className="font-bold text-xl text-gray-900 mb-2">Professionalism</h3>
              <p className="text-gray-600 text-sm">Highest standards in every engagement</p>
            </motion.div>
            
            <motion.div
              className="bg-gray-50 rounded-xl p-6 border-l-4 border-purple-600"
              variants={scaleIn}
            >
              <h3 className="font-bold text-xl text-gray-900 mb-2">Confidentiality</h3>
              <p className="text-gray-600 text-sm">Your business information is protected</p>
            </motion.div>
            
            <motion.div
              className="bg-gray-50 rounded-xl p-6 border-l-4 border-purple-600"
              variants={scaleIn}
            >
              <h3 className="font-bold text-xl text-gray-900 mb-2">Execution</h3>
              <p className="text-gray-600 text-sm">Practical implementation, not just advice</p>
            </motion.div>
          </motion.div>
        </div>
      </section>
      <CTA />
    </>
  );
}