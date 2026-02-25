import Image from "next/image";
import Link from "next/link";
import { CheckCircle, ArrowRight, Users, Clock, Shield, TrendingUp } from "lucide-react";
import Hero from "@/app/Hero";
import CTA from "@/components/home/CTA";
import AnimatedHeading from "@/components/home/AnimatedHeading";

export const metadata = {
  title: "Payroll Management Services in Lagos | NTA 2025 Compliant",
  description: "Professional payroll services for Lagos SMEs. NTA 2025 compliant systems, automated tax calculations, and monthly payslip generation. ICAN certified accountant.",
  keywords: "payroll management Lagos, payroll services Nigeria, NTA 2025 compliance, payroll software Lagos, SME payroll",
};

export default function PayrollManagementPage() {
  const features = [
    {
      icon: Shield,
      title: "NTA 2025 Compliance",
      description: "Fully compliant with latest Nigerian tax regulations and reporting requirements",
    },
    {
      icon: Users,
      title: "Automated Processing",
      description: "Automated PAYE, Pension, and NHF calculations for accurate payroll every time",
    },
    {
      icon: Clock,
      title: "Time Savings",
      description: "Reduce payroll processing time by up to 80% with our efficient systems",
    },
    {
      icon: TrendingUp,
      title: "Scalable Solutions",
      description: "Systems that grow with your business, from 10 to 500+ employees",
    },
  ];

  const whatWeInclude = [
    "Complete payroll system design and implementation",
    "NTA 2025 compliance audit and updates",
    "Automated tax calculations (PAYE, Pension, NHF, ITF)",
    "Monthly payslip generation and distribution",
    "Annual tax remittance and filing support",
    "Integration with existing accounting software",
    "Payroll staff training and documentation",
    "Ongoing support and compliance monitoring",
  ];

  const whoItsFor = [
    {
      title: "Small Businesses (10-50 employees)",
      description: "Get professional payroll without hiring a full-time accountant",
    },
    {
      title: "Growing Startups",
      description: "Scale your payroll as you hire, without administrative headaches",
    },
    
    {
      title: "Service Businesses",
      description: "Commission-based pay, bonuses, and variable compensation managed seamlessly",
    },
    {
      title: "Companies Struggling with Compliance",
      description: "Ensure accurate PAYE, Pension, NHF, and statutory deductions while avoiding costly penalties and audit risks.",
    },
  ];

  const faqs = [
    {
      question: "How long does payroll system setup take?",
      answer: "Typical setup takes 2-4 weeks depending on company size and complexity. This includes system design, software configuration, data migration, testing, and staff training.",
    },
    {
      question: "Can you handle retroactive payroll corrections?",
      answer: "Yes. We can audit past payroll periods, identify errors, and make corrections while ensuring proper tax adjustments and compliance documentation.",
    },
    {
      question: "Do I need special software?",
      answer: "We work with your existing software or recommend solutions based on your needs and budget. We're software-agnostic and focus on what works best for your business.",
    },
  ];

  return (
    <>
   
    <section className="relative py-18  overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <Image
          src="/payroll-image.jpg" 
          alt="Payroll Management Lagos"
          fill
          className="object-cover brightness-[0.1]"
          priority
        />
      </div>

      <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
        <Link
          href="/services"
          className="inline-flex items-center gap-2 text-blue-400 font-semibold hover:text-blue-600 mb-6"
        >
          <ArrowRight className="w-4 h-4 rotate-180" />
          Back to Services
        </Link>

        <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6">
          NTA 2025 Compliant <span className="text-blue-800"> Payroll Management</span> for Businesses
        </h1>

        <p className="text-xl text-gray-200 mb-10 leading-relaxed">
          Professional payroll systems designed for SMEs and startups.
          Automated tax calculations, monthly payslips, and full compliance
          with Nigerian regulations.
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

      {/* Key Features */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
             <AnimatedHeading 
              title=" Why Our Payroll Service Stands Out"
              />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-blue-600" />
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
        </div>
      </section>

        {/* What's Included */}
      <section className="bg-gray-50 py-24">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
           <AnimatedHeading 
            title="What's Included in Our Payroll Service"
            subtitle="Comprehensive payroll management from setup to ongoing support"
           />
          <div className="max-w-5xl mx-auto p-4">
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6 justify-items-center">
              {whatWeInclude.map((item, index) => (
                <li key={index} className="flex items-start gap-4 text-left w-full">
                  <CheckCircle className="w-6 h-6 text-blue-900 flex-shrink-0 mt-1" />
                  <span className="text-gray-700 text-lg leading-snug">{item}</span>
                </li>
              ))}
            </ul>
          </div>


        </div>
      </section>
      {/* Who It's For */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
             <AnimatedHeading 
              title="Who This Service Is For"
              subtitle="Tailored solutions for different business types"
              />
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {whoItsFor.map((item, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
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
              title="Frequently Asked Questions"
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