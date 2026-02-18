import Image from "next/image";
import Link from "next/link";
import { CheckCircle, ArrowRight, Users, Clock, Shield, TrendingUp } from "lucide-react";
import Hero from "@/app/Hero";

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
  ];

  const faqs = [
    {
      question: "What is NTA 2025 and why does it matter?",
      answer: "The Nigeria Tax Administration (NTA) 2025 introduces stricter compliance requirements for payroll systems, including enhanced reporting and tax calculation accuracy. Non-compliance can result in penalties. Our systems are built to meet these standards from day one.",
    },
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
   
      <section className="bg-linear-to-br from-blue-50 to-white py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div>
              <Link
                href="/services"
                className="inline-flex items-center gap-2 text-purple-600 font-semibold hover:text-purple-700 mb-6"
              >
                <ArrowRight className="w-4 h-4 rotate-180" />
                Back to Services
              </Link>
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                NTA 2025 Compliant Payroll Management for Lagos Businesses
              </h1>

              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Professional payroll systems designed for SMEs and startups. Automated tax calculations, monthly payslips, and full compliance with Nigerian regulations.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-purple-700 transition-all shadow-lg"
                >
                  View services
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <a
                  href="tel:08080913334"
                  className="inline-flex items-center gap-2 bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold border-2 border-purple-600 hover:bg-purple-50 transition-all"
                >
                  Call 08080913334
                </a>
              </div>
            </div>

            {/* Image/Visual */}
            <div className="relative">
              <div className="bg-blue-100 rounded-2xl p-12 text-center">
                <Users className="w-32 h-32 text-blue-600 mx-auto mb-6" />
                <div className="space-y-4">
                  <div className="bg-white rounded-lg p-4 shadow-lg">
                    <div className="text-3xl font-bold text-blue-600">80%</div>
                    <div className="text-sm text-gray-600">Time Savings</div>
                  </div>
                  <div className="bg-white rounded-lg p-4 shadow-lg">
                    <div className="text-3xl font-bold text-green-600">100%</div>
                    <div className="text-sm text-gray-600">NTA Compliant</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-4xl font-bold text-gray-900 mb-4">
              Why Our Payroll Service Stands Out
            </h2>
            <p className="text-lg text-gray-600">
              More than just processing—strategic payroll management
            </p>
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
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl lg:text-4xl font-bold text-gray-900 mb-8">
                What's Included in Our Payroll Service
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Comprehensive payroll management from setup to ongoing support
              </p>
              <ul className="space-y-4">
                {whatWeInclude.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 text-lg">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Recent Success Story
              </h3>
              <div className="space-y-4 text-gray-700">
                <p>
                  <strong className="text-purple-600">Challenge:</strong> A Lagos-based manufacturing company with 50+ employees was processing payroll manually, leading to errors and missed tax deadlines.
                </p>
                <p>
                  <strong className="text-purple-600">Solution:</strong> We designed and implemented a custom NTA 2025 compliant payroll system with automated tax calculations.
                </p>
                <p>
                  <strong className="text-purple-600">Results:</strong>
                </p>
                <ul className="space-y-2 pl-4">
                  <li>• 80% reduction in payroll processing time</li>
                  <li>• Zero tax penalties in 12 months</li>
                  <li>• 100% employee satisfaction with timely, accurate payslips</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who It's For */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-4xl font-bold text-gray-900 mb-4">
              Who This Service Is For
            </h2>
            <p className="text-lg text-gray-600">
              Tailored solutions for different business types
            </p>
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
            <h2 className="text-4xl lg:text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
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
    </>
  );
}