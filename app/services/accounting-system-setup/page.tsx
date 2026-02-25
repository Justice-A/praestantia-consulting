import Link from "next/link";
import { CheckCircle, ArrowRight, Settings, Clock, Shield, TrendingUp, Layers, BookOpen } from "lucide-react";
import Hero from "@/app/Hero";
import Image from "next/image";
import CTA from "@/components/home/CTA"
import AnimatedHeading from "@/components/home/AnimatedHeading";

export const metadata = {
  title: "Accounting System Design & Setup for Nigerian Startups & SMEs",
  description: "Custom accounting systems for Nigerian businesses. Chart of accounts design, software setup, and staff training. Lagos-based, serving clients nationwide.",
  keywords: "accounting system design Nigeria, chart of accounts Lagos, accounting software setup, QuickBooks Nigeria, accounting for startups Nigeria",
};

export default function AccountingSystemPage() {
  const features = [
    {
      icon: Layers,
      title: "Custom Design",
      description: "Tailored chart of accounts and workflows specific to your industry and business model",
    },
    {
      icon: BookOpen,
      title: "Staff Training",
      description: "Comprehensive training so your team can confidently use the system daily",
    },
    {
      icon: Shield,
      title: "Compliance Ready",
      description: "Systems designed with Nigerian tax and regulatory requirements built-in",
    },
  ];

  const whatWeDeliver = [
    {
      title: "Discovery & Analysis",
      description: "We study your business model, revenue streams, and reporting needs to design the perfect system.",
    },
    {
      title: "Chart of Accounts Design",
      description: "Custom account structure that matches your business operations and enables meaningful financial reports.",
    },
    {
      title: "Standard Operating Procedures",
      description: "Written documentation of processes: how to record transactions, run reports, close months, etc.",
    },
    {
      title: "Staff Training",
      description: "Hands-on training for your accounting team on the new system and processes.",
    },
    {
      title: "Ongoing Support",
      description: "Post-implementation support to ensure smooth operation and address any questions.",
    },
  ];

  const faqs = [
    {
      question: "How long does accounting system setup take?",
      answer: "Typical timeline is 3-6 weeks from kickoff to go-live. This includes discovery (1 week), system design (1-2 weeks), software configuration (1 week), data migration (1 week), and training (1 week). Complex businesses may need more time.",
    },
    {
      question: "Can you migrate data from our current system?",
      answer: "Yes. We handle data migration from Excel, old accounting software, or even manual records. We clean and validate data during migration to ensure accuracy in the new system.",
    },
    {
      question: "Do you provide ongoing support after setup?",
      answer: "Absolutely. We offer monthly retainer packages for ongoing support, troubleshooting, and system optimization. Many clients also bring us in quarterly to review reports and ensure the system is still meeting their needs.",
    },
  ];

  return (
    <>
      <section className="relative py-18  overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <Image
          src="/account-systems.jpg" 
          alt="Accounting Systems Nigeria"
          fill
          className="object-cover brightness-[0.1]"
          priority
        />
      </div>

      <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
        <Link
          href="/services"
          className="inline-flex items-center gap-2  text-blue-400 font-semibold hover:text-blue-600 mb-6"
        >
          <ArrowRight className="w-4 h-4 rotate-180" />
          Back to Services
        </Link>

        <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6">
          Custom <span className="text-blue-800"> Accounting Systems</span> for Nigerian Startups & SMEs Payroll Management
        </h1>

        <p className="text-xl text-gray-200 mb-10 leading-relaxed">
          Stop fighting with spreadsheets. Get an accounting system designed 
          for how your business actually works. Based in Lagos, serving startups 
          and SMEs across Nigeria with tailored accounting solutions.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 bg-blue-900 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-all shadow-lg"
          >
            View Services
          </Link>

          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-white text-blue-900 px-8 py-4 rounded-lg font-semibold border-2 border-blue-900 hover:bg-blue-100 transition-all"
          >
            Get Started
          </Link>
        </div>
      </div>
    </section>


      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <AnimatedHeading 
            title="Why Our Systems Work" 
            subtitle="Designed for Nigerian businesses, built to scale"
            />          
        </div>

        <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8">
        {features.map((feature, index) => {
          const Icon = feature.icon;
          return (
            // Added bg-gray-50, p-6, rounded-3xl here
            <div key={index} className="text-center bg-gray-50 p-6 rounded-3xl">
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Icon className="w-8 h-8 text-blue-900" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </div>
          );
        })}
      </div>
      </section>

      {/* What We Deliver */}
      <section className="bg-gray-50 py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <AnimatedHeading 
            title="Our Implementation Process"
            subtitle="From discovery to go-live in 3-6 weeks"
            />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whatWeDeliver.map((item, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-lg">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl font-bold text-blue-900">{index + 1}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
    </section>
      {/* FAQ */}
      <section className="bg-gray-50 py-24">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
             <AnimatedHeading 
            title="Common Questions"
            />
          </div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {faq.question}
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTA/>
    </>
  );
}