import Image from "next/image";
import Link from "next/link";
import { Users, FileText, Settings, BookOpen, ArrowRight } from "lucide-react";
import AnimatedHeading from "@/components/home/AnimatedHeading";
import CTA from "@/components/home/CTA";

export const metadata = {
  title: "Accounting Services in Lagos | Praestantia Consulting",
  description:
    "Professional accounting services for Lagos businesses: payroll management, tax advisory, accounting systems, and bookkeeping. ICAN certified with 25 years experience.",
};

export default function ServicesPage() {
  const services = [
    {
      title: "Payroll Management",
      slug: "payroll-management-lagos",
      description:
        "NTA 2025 compliant payroll systems designed for Lagos SMEs and startups. Automated tax calculations, monthly payslip generation, and full compliance.",
      icon: Users,
      iconBg: "bg-purple-500",
    },
    {
      title: "Tax Advisory & Filing",
      slug: "tax-advisory-lagos",
      description:
        "Expert tax planning and filing services for businesses and individuals. VAT returns, income tax, and annual returns filed accurately and on time.",
      icon: FileText,
      iconBg: "bg-purple-500",
    },
    {
      title: "Accounting System Design",
      slug: "accounting-system-setup",
      description:
        "Custom chart of accounts and workflows built specifically for your business needs. Complete setup, integration, and staff training.",
      icon: Settings,
      iconBg: "bg-purple-500",
    },
    {
      title: "Bookkeeping & Compliance",
      slug: "bookkeeping-services-lagos",
      description:
        "Monthly financial reports and ongoing compliance support. Keep your finances organized and tax-ready year-round.",
      icon: BookOpen,
      iconBg: "bg-purple-500",
    },
    {
      title: "Filing of Company Returns & Self Assessment",
      slug: "filing-company-returns-self-assessment",
      description:
        "Accurate and timely filing of company annual returns and self-assessment tax returns for businesses and individuals in Nigeria, ensuring full regulatory compliance and peace of mind.",
      icon: BookOpen,
      iconBg: "bg-purple-500",
    },
    {
      title: "Designing of Pricing Templates",
      slug: "pricing-template-design",
      description:
        "Custom pricing and costing templates designed to help SMEs and growing businesses in Nigeria set profitable prices, manage costs, and improve financial decision-making.",
      icon: BookOpen,
      iconBg: "bg-purple-500",
    },
    {
      title: "Recruitment & Training of Account Staff",
      slug: "recruitment-training-account-staff",
      description:
        "Professional recruitment and hands-on training of accounting personnel to ensure your finance team operates efficiently, accurately, and in compliance with Nigerian regulations.",
      icon: Users,
      iconBg: "bg-purple-500",
    },
    {
      title: "Monthly VAT Returns with FRS",
      slug: "monthly-vat-returns-FRS",
      description:
        "Preparation and filing of monthly VAT returns with the Nigerian Revenue Service (FRS), ensuring accurate reporting, timely submission, and full tax compliance.",
      icon: BookOpen,
      iconBg: "bg-purple-500",
    },
  ];

  return (
    <>
      {/* HERO SECTION */}
      <section className="relative py-28 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <Image
            src="/services.jpg"
            alt="Accounting Services in Lagos"
            fill
            className="object-cover brightness-[0.2]"
            priority
          />
        </div>

        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Our Professional{" "}
            <span className="text-purple-400">Accounting Services</span>
          </h2>

          <p className="text-xl text-gray-200 leading-relaxed mb-10">
            Comprehensive financial solutions designed to help Nigerian
            businesses stay compliant, profitable, and positioned for growth.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center bg-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-purple-700 transition-all shadow-md"
            >
              Explore Services
            </Link>

            <Link
              href="#services"
              className="inline-flex items-center justify-center bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold  hover:bg-purple-100 transition-all"
            >
              Get Started
            </Link>
          </div>
        </div>
      </section>

      {/* SERVICES GRID */}
      <section id="services" className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <AnimatedHeading
            title="Our Services"
            subtitle="Professional accounting solutions tailored for Nigerian businesses"
          />

          <div className="grid md:grid-cols-2 gap-8 mt-16">
            {services.map((service, index) => {
              const Icon = service.icon;

              return (
                <div
                  key={index}
                  className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 border border-gray-200"
                >
                  <div
                    className={`w-10 h-10 ${service.iconBg} rounded-lg flex items-center justify-center mb-4`}
                  >
                    <Icon className="w-6 h-6 text-white" />
                  </div>

                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {service.title}
                  </h3>

                  <p className="text-md text-gray-600 leading-relaxed mb-4">
                    {service.description}
                  </p>

                  {index < 4 && (
                    <Link
                      href={`/services/${service.slug}`}
                      className="inline-flex items-center gap-2 text-purple-600 font-semibold hover:text-purple-700 transition-colors"
                    >
                      Learn More
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* WHO WE SERVE */}
      <section className="bg-gray-50 py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <AnimatedHeading
            title="Who We Serve"
            subtitle="Supporting diverse Nigerian businesses with tailored accounting expertise"
          />

          <div className="grid md:grid-cols-2 gap-8 mt-16">
            <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-200">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                SMEs & Growing Businesses
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Helping small and medium-sized enterprises maintain compliance,
                structure their finances, and scale sustainably.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-200">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Startups
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Designing accounting systems from scratch to support innovation,
                investor readiness, and operational efficiency.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-200">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Corporate Organizations
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Providing structured financial oversight, compliance assurance,
                and reporting support for established companies.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-200">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Individuals & Directors
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Managing personal tax filings, self-assessments, and financial
                compliance with clarity and precision.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}