import Link from "next/link";
import { CheckCircle, ArrowRight, BookOpen, Clock, Shield, TrendingUp, FileCheck, Calendar } from "lucide-react";
import Image from "next/image";
import CTA from "@/components/home/CTA";

export const metadata = {
  title: "Bookkeeping & Compliance Services for Nigerian Businesses",
  description: "Professional bookkeeping services for Nigerian SMEs and startups. Monthly financial reports, bank reconciliation, and compliance support. Lagos-based, serving clients nationwide.",
  keywords: "bookkeeping services Nigeria, bookkeeping Lagos, monthly financial reports, bank reconciliation Nigeria, small business accounting Lagos",
};

export default function BookkeepingPage() {
  const features = [
    {
      icon: Clock,
      title: "Monthly Service",
      description: "Regular, scheduled bookkeeping keeps your finances current and tax-ready",
    },
    {
      icon: FileCheck,
      title: "Accurate Records",
      description: "Every transaction properly recorded, categorized, and reconciled",
    },
    {
      icon: Calendar,
      title: "Timely Reports",
      description: "Get financial statements by the 10th of each month for the previous month",
    },
    {
      icon: Shield,
      title: "Compliance Ready",
      description: "Books maintained to meet Nigerian tax and regulatory requirements",
    },
  ];

  const monthlyServices = [
    "Transaction recording and categorization",
    "Bank and credit card reconciliation",
    "Accounts payable management",
    "Accounts receivable tracking",
    "Monthly financial statements (P&L, Balance Sheet, Cash Flow)",
    "Expense tracking and analysis",
    "Receipt and invoice organization",
    "Tax provision calculations",
    "Management reports and insights",
    "Year-end preparation for tax filing",
  ];

  const whoItsFor = [
    {
      title: "Busy Business Owners",
      description: "You're building your business—let us handle the books so you can focus on growth.",
      icon: TrendingUp,
    },
    {
      title: "Startups Without In-House Accounting",
      description: "Get professional bookkeeping without hiring a full-time accountant.",
      icon: BookOpen,
    },
    {
      title: "Growing Businesses",
      description: "Your Excel spreadsheets can't keep up anymore. Time for professional systems.",
      icon: Shield,
    },
    {
      title: "Businesses Preparing for Investment",
      description: "Investors want clean books. We ensure your financials are investor-ready.",
      icon: FileCheck,
    },
  ];

  const pricingTiers = [
    {
      name: "Micro Business",
      description: "Under 20 transactions/month",
      price: "₦40,000",
      features: [
        "Monthly transaction recording",
        "Bank reconciliation",
        "Basic financial statements",
        "Email support",
      ],
    },
    {
      name: "Small Business",
      description: "20-100 transactions/month",
      price: "₦80,000",
      features: [
        "Everything in Micro",
        "AP/AR management",
        "Detailed financial reports",
        "Monthly review call",
        "Tax provision calculations",
      ],
      popular: true,
    },
    {
      name: "Growing Business",
      description: "100+ transactions/month",
      price: "₦150,000+",
      features: [
        "Everything in Small",
        "Multi-entity consolidation",
        "Custom reporting",
        "Priority support",
        "Quarterly business review",
      ],
    },
  ];

  const faqs = [
    {
      question: "What's the difference between bookkeeping and accounting?",
      answer: "Bookkeeping is the day-to-day recording of transactions, reconciliation, and basic reporting. Accounting involves analyzing that data, tax planning, financial strategy, and compliance. As a chartered accountant, I provide both—but many businesses just need regular bookkeeping with periodic accounting guidance.",
    },
    {
      question: "How often do you need access to my records?",
      answer: "Ideally, we receive bank statements, receipts, and invoices monthly. Many clients use cloud accounting software (like QuickBooks) which gives us real-time access. For others, we collect documents monthly via email or shared drive. The more current your records, the more valuable your reports.",
    },
    {
      question: "Can you clean up past months if I'm behind?",
      answer: "Absolutely. We offer catch-up bookkeeping services to bring you current. Depending on how far behind you are (3 months vs 2 years), we'll provide a fixed quote for the cleanup work before starting ongoing monthly service.",
    },
    {
      question: "Do I need accounting software, or can you use Excel?",
      answer: "For ongoing bookkeeping, I strongly recommend proper accounting software (QuickBooks, Zoho Books, etc). It's more accurate, easier to maintain, and provides better reports. However, if you're committed to Excel, I can work with that for very small businesses—though I'll eventually recommend upgrading.",
    },
    {
      question: "What if I find an error in my books?",
      answer: "Errors happen—especially when catching up past months. If you spot an error, we'll investigate, correct it, and adjust any affected reports. All corrections are documented for audit trail purposes. Our goal is 100% accuracy.",
    },
  ];

  return (
    <>

      <section className="relative py-20 lg:py-32 overflow-hidden">
          <div className="absolute inset-0 -z-10">
            <Image
              src="/happy-customers.jpg" 
              alt="Success stories background"
              fill
              className="object-cover brightness-[0.1]" 
              priority
            />
          </div>
         <div className="max-w-7xl mx-auto px-6 lg:px-4">
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
              <h1 className="text-4xl lg:text-4xl font-bold text-white mb-6">
                Professional Bookkeeping for Nigerian Businesses
              </h1>

              <p className="text-xl text-white mb-4 leading-relaxed">
                Monthly bookkeeping and financial reporting that keeps your business organized and tax-ready.
              </p>

              <p className="text-lg text-white mb-8 leading-relaxed">
                Based in Lagos, serving SMEs and startups across Nigeria with reliable bookkeeping you can count on.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-purple-700 transition-all shadow-lg"
                >
                  Get Free Consultation
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
              <div className="bg-purple-100 rounded-2xl p-12 text-center">
                <BookOpen className="w-32 h-32 text-purple-600 mx-auto mb-6" />
                <div className="space-y-4">
                  <div className="bg-white rounded-lg p-4 shadow-lg">
                    <div className="text-3xl font-bold text-purple-600">10th</div>
                    <div className="text-sm text-gray-600">Monthly Reports Delivered</div>
                  </div>
                  <div className="bg-white rounded-lg p-4 shadow-lg">
                    <div className="text-3xl font-bold text-purple-600">100%</div>
                    <div className="text-sm text-gray-600">Accurate Records</div>
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
              What Makes Our Bookkeeping Different
            </h2>
            <p className="text-lg text-gray-600">
              More than data entry—strategic financial management
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-purple-600" />
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

      {/* Monthly Services */}
      <section className="bg-gray-50 py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl lg:text-4xl font-bold text-gray-900 mb-8">
                What's Included Monthly
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Comprehensive bookkeeping services delivered on schedule, every month
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-xl">
              <ul className="space-y-4">
                {monthlyServices.map((service, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 text-lg">{service}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Who It's For */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-4xl font-bold text-gray-900 mb-4">
              Perfect For
            </h2>
            <p className="text-lg text-gray-600">
              Bookkeeping solutions for every business stage
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {whoItsFor.map((item, index) => {
              const Icon = item.icon;
              return (
                <div key={index} className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-purple-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-lg">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="bg-gray-50 py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-4xl font-bold text-gray-900 mb-4">
              Simple, Transparent Pricing
            </h2>
            <p className="text-lg text-gray-600">
              Choose the plan that fits your business size
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {pricingTiers.map((tier, index) => (
              <div 
                key={index} 
                className={`bg-white rounded-2xl p-8 shadow-lg ${
                  tier.popular ? 'border-2 border-purple-600 relative' : 'border border-gray-200'
                }`}
              >
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="bg-purple-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}

                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {tier.name}
                </h3>
                <p className="text-gray-600 mb-6">
                  {tier.description}
                </p>

                <div className="mb-6">
                  <span className="text-4xl font-bold text-gray-900">{tier.price}</span>
                  <span className="text-gray-600">/month</span>
                </div>

                <ul className="space-y-3 mb-8">
                  {tier.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href="/contact"
                  className={`block text-center px-6 py-3 rounded-lg font-semibold transition-all ${
                    tier.popular
                      ? 'bg-purple-600 text-white hover:bg-purple-700'
                      : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                  }`}
                >
                  Get Started
                </Link>
              </div>
            ))}
          </div>

          <p className="text-center text-gray-600 mt-8">
            Not sure which plan? <Link href="/contact" className="text-purple-600 font-semibold hover:text-purple-700">Schedule a free consultation</Link> and we'll recommend the best fit.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white py-24">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-4xl font-bold text-gray-900 mb-4">
              Common Questions
            </h2>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-8 shadow-lg">
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