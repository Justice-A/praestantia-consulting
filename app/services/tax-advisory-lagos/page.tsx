import Link from "next/link";
import Image from "next/image";
import { CheckCircle, ArrowRight, FileText, Clock, Shield, TrendingUp, Calculator, Users } from "lucide-react";
import Hero from "@/app/Hero";
import CTA from "@/components/home/CTA";
import AnimatedHeading from "@/components/home/AnimatedHeading";
export const metadata = {
  title: "Expert Tax Advisory & Filing for Businesses",
  description: "Strategic tax planning and filing services for businesses and individuals across Nigeria.",
  keywords: "tax advisory Nigeria, tax filing Lagos, VAT returns Nigeria, income tax filing, corporate tax Nigeria, tax consultant Lagos",
};

export default function TaxAdvisoryPage() {
  const features = [
    {
      icon: Shield,
      title: "Full Compliance",
      description: "Stay compliant with NRS, IRS, and all Nigerian tax regulations",
    },
    {
      icon: Calculator,
      title: "Tax Optimization",
      description: "Strategic planning to minimize tax liability while maintaining full compliance",
    },
    {
      icon: Clock,
      title: "Timely Filing",
      description: "Never miss a deadline—we track and file all returns on time",
    },
    {
      icon: Users,
      title: "Personal & Corporate",
      description: "Services for both businesses and individuals across Nigeria",
    },
  ];

  const servicesOffered = [
    {
      title: "Corporate Tax Services",
      items: [
        "Corporate income tax filing and planning",
        "Tax provision calculations and reviews",
        "Transfer pricing documentation",
        "Tax audit support and representation",
      ],
    },
    {
      title: "VAT & Withholding Tax",
      items: [
        "Monthly VAT returns preparation and filing",
        "WHT compliance and remittance",
        "VAT registration",
        "Input VAT recovery strategies",
      ],
    },
    {
      title: "Personal Income Tax",
      items: [
        "Self-assessment for individuals",
        "Tax planning for high earners",
        "PAYE compliance for employers",
        "Tax clearance processing",
      ],
    },
    {
      title: "Annual Returns & Compliance",
      items: [
        "Company annual returns (CAC)",
        "Annual tax returns (NRS & IRS)",
        "Industry-specific returns",
        "Penalty abatement support",
      ],
    },
  ];

  const whoItsFor = [
    {
      title: "SMEs & Startups",
      description: "Get your tax foundation right from day one. Avoid costly mistakes and penalties.",
    },
    {
      title: "Growing Businesses",
      description: "Strategic tax planning as you scale. Optimize structure and minimize liabilities.",
    },
    {
      title: "Individuals & Professionals",
      description: "Personal tax filing, self-assessment, and planning for entrepreneurs and executives.",
    },
    {
      title: "Foreign Companies",
      description: "Navigate Nigerian tax laws with confidence. We handle registration, filing, and compliance.",
    },
  ];

  return (
    <>

      <section className="relative py-24 overflow-hidden">
              <div className="absolute inset-0 -z-10">
                <Image
                  src="/tax-advisory.jpg"
                  alt="Tax Advisory Services Nigeria"
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
            Expert <span className="text-blue-800">Tax Advisory</span> &  <span className="text-blue-900">Filing</span> for Businesses
          </h1>

          <p className="text-xl text-gray-200 mb-10 leading-relaxed">
            Strategic tax planning and filing services for businesses and individuals across Nigeria.
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
              title="Comprehensive Tax Services"
              subtitle="Everything you need for tax compliance and optimization"
              />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="text-center">
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

      {/* Services Offered */}
      <section className="bg-gray-50 py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
             <AnimatedHeading 
              title="What We Cover"
              subtitle=" Full-spectrum tax services for Nigerian businesses"
              />
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {servicesOffered.map((service, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-6">
                  {service.title}
                </h3>
                <ul className="space-y-3">
                  {service.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-blue-900 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who It's For */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
             <AnimatedHeading 
              title="Who We Serve"
              subtitle="Tax solutions for every business stage"
              />
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {whoItsFor.map((item, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-lg">
                  {item.description}
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