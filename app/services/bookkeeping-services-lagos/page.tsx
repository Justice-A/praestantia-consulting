import Link from "next/link";
import { CheckCircle, ArrowRight, BookOpen, Clock, Shield, TrendingUp, FileCheck, Calendar } from "lucide-react";
import Image from "next/image";
import CTA from "@/components/home/CTA";
import AnimatedHeading from "@/components/home/AnimatedHeading";
export const metadata = {
  title:"Professional Bookkeeping</span> for Businesses",
  description: "Bookkeeping and financial reporting that keeps your business organized, compliant, and financially transparent.",
  keywords: "bookkeeping services Nigeria, bookkeeping Lagos, monthly financial reports, bank reconciliation Nigeria, small business accounting Lagos",
};

export default function BookkeepingPage() {
  const features = [
    {
      icon: Clock,
      title: "Monthly Service",
      description: "Regular, scheduled bookkeeping keeps your finances current.",
    },
    {
      icon: FileCheck,
      title: "Accurate Records",
      description: "Every transaction properly recorded, categorized, and reconciled",
    },
    {
      icon: Calendar,
      title: "Timely Reports",
      description: "Get financial statements in real-time",
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
      description: "Your Excel spreadsheets can't keep up anymore. Time for structured systems.",
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

  return (
    <>
      <section className="relative py-24  overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <Image
            src="/book-keeping.jpg" 
            alt="Bookeeping Services Nigeria"
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
            Professional <span className="text-blue-800"> Bookkeeping</span> for Businesses
          </h1>

          <p className="text-xl text-gray-200 mb-10 leading-relaxed">
            Bookkeeping and financial reporting that keeps your business organized, compliant, and financially transparent.
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
          <div className="text-center mb-16">
             <AnimatedHeading 
              title="What Makes Our Bookkeeping Different"
              />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
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
        </div>
      </section>

      {/* Who It's For */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
             <AnimatedHeading 
              title="Perfect For"
              />
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {whoItsFor.map((item, index) => {
              const Icon = item.icon;
              return (
                <div key={index} className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-blue-900" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 ">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <CTA/>
    </>
  );
}