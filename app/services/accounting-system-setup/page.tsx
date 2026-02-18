import Link from "next/link";
import { CheckCircle, ArrowRight, Settings, Clock, Shield, TrendingUp, Layers, BookOpen } from "lucide-react";
import Hero from "@/components/home/Hero";

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
      icon: Settings,
      title: "Software Integration",
      description: "Expert setup of QuickBooks, Sage, Xero, or other platforms to match your needs",
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
      title: "Software Selection & Setup",
      description: "We recommend and configure the best accounting software for your size, industry, and budget.",
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

  const commonChallenges = [
    {
      challenge: "Using Excel spreadsheets that break as the business grows",
      solution: "We implement scalable software that handles growth seamlessly",
    },
    {
      challenge: "Can't get accurate financial reports when needed",
      solution: "Custom chart of accounts enables real-time, meaningful reports",
    },
    {
      challenge: "Accounting staff don't know how to use the software properly",
      solution: "Comprehensive training ensures confident, correct usage",
    },
    {
      challenge: "System doesn't match how the business actually operates",
      solution: "We design workflows around YOUR processes, not generic templates",
    },
  ];

  const faqs = [
    {
      question: "How long does accounting system setup take?",
      answer: "Typical timeline is 3-6 weeks from kickoff to go-live. This includes discovery (1 week), system design (1-2 weeks), software configuration (1 week), data migration (1 week), and training (1 week). Complex businesses may need more time.",
    },
    {
      question: "What accounting software do you recommend?",
      answer: "It depends on your needs. For small businesses (under 20 employees), we often recommend QuickBooks Online or Zoho Books. For growing businesses, Sage 50 or QuickBooks Desktop. For enterprises, we implement ERP systems. We're software-agnostic and choose what fits best.",
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

      <section className="bg-linear-to-br from-green-50 to-white py-20 lg:py-28">
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

              <h1 className="text-4xl lg:text-4xl font-bold text-gray-900 mb-6">
                Custom Accounting Systems for Nigerian Startups & SMEs
              </h1>

              <p className="text-xl text-gray-600 mb-4 leading-relaxed">
                Stop fighting with spreadsheets. Get an accounting system designed for how YOUR business actually works.
              </p>

              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Based in Lagos, serving startups and SMEs across Nigeria with tailored accounting solutions.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-purple-700 transition-all shadow-lg"
                >
                  Get Free System Assessment
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

            {/* Visual */}
            <div className="relative">
              <div className="bg-green-100 rounded-2xl p-12 text-center">
                <Settings className="w-32 h-32 text-green-600 mx-auto mb-6" />
                <div className="space-y-4">
                  <div className="bg-white rounded-lg p-4 shadow-lg">
                    <div className="text-3xl font-bold text-green-600">100+</div>
                    <div className="text-sm text-gray-600">Systems Implemented</div>
                  </div>
                  <div className="bg-white rounded-lg p-4 shadow-lg">
                    <div className="text-3xl font-bold text-purple-600">3-6</div>
                    <div className="text-sm text-gray-600">Weeks to Go-Live</div>
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
              Why Our Systems Work
            </h2>
            <p className="text-lg text-gray-600">
              Designed for Nigerian businesses, built to scale
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-green-600" />
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

      {/* What We Deliver */}
      <section className="bg-gray-50 py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-4xl font-bold text-gray-900 mb-4">
              Our Implementation Process
            </h2>
            <p className="text-lg text-gray-600">
              From discovery to go-live in 3-6 weeks
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whatWeDeliver.map((item, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-lg">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl font-bold text-purple-600">{index + 1}</span>
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

      {/* Common Challenges */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-4xl font-bold text-gray-900 mb-4">
              Problems We Solve
            </h2>
            <p className="text-lg text-gray-600">
              Sound familiar? We can help.
            </p>
          </div>

          <div className="space-y-6">
            {commonChallenges.map((item, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-8 border-l-4 border-purple-600">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold text-red-600 mb-2">❌ The Problem:</h3>
                    <p className="text-gray-700">{item.challenge}</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-green-600 mb-2">✅ Our Solution:</h3>
                    <p className="text-gray-700">{item.solution}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Story */}
      <section className="bg-green-600 py-24 text-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-4xl font-bold mb-4">
              Real Result: Tech Startup
            </h2>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 lg:p-12">
            <div className="space-y-4">
              <p className="text-lg">
                <strong className="text-green-200">Challenge:</strong> Fast-growing SaaS startup tracking revenue in Excel. Couldn't tell which products were profitable or get investor-ready financials.
              </p>
              <p className="text-lg">
                <strong className="text-green-200">Solution:</strong> Implemented QuickBooks Online with custom chart of accounts for subscription revenue, integrated with their payment processor, designed dashboards for real-time metrics.
              </p>
              <p className="text-lg">
                <strong className="text-green-200">Results:</strong>
              </p>
              <ul className="space-y-2 pl-4 text-lg">
                <li>• Real-time revenue tracking by product and customer</li>
                <li>• Monthly financial close reduced from 2 weeks to 3 days</li>
                <li>• Successfully raised Series A with clean financials</li>
                <li>• Identified and discontinued unprofitable product line, saving ₦400k/month</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-gray-50 py-24">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-4xl font-bold text-gray-900 mb-4">
              Common Questions
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

      {/* Pricing */}
      <section className="bg-white py-24">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl lg:text-4xl font-bold text-gray-900 mb-6">
            Investment & Pricing
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            System design and implementation typically ranges from ₦200,000 - ₦800,000 depending on business complexity, software chosen, and level of customization. Most SMEs invest ₦300,000 - ₦500,000.
          </p>
          <p className="text-lg text-gray-600 mb-8">
            We offer a <strong className="text-purple-600">free system assessment</strong> to evaluate your needs and provide detailed, transparent pricing.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-purple-700 transition-all shadow-lg"
          >
            Get Free Assessment
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </>
  );
}