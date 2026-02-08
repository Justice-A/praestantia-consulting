import Image from "next/image";
import Link from "next/link";
import { Users, FileText, Settings, BookOpen, ArrowRight, CheckCircle } from "lucide-react";

export const metadata = {
  title: "Accounting Services in Lagos | Praestantia Consulting",
  description: "Professional accounting services for Lagos businesses: payroll management, tax advisory, accounting systems, and bookkeeping. ICAN certified with 25 years experience.",
};

export default function ServicesPage() {
  const services = [
    {
      title: "Payroll Management",
      slug: "payroll-management-lagos",
      description: "NTA 2025 compliant payroll systems designed for Lagos SMEs and startups. Automated tax calculations, monthly payslip generation, and full compliance.",
      icon: Users,
      iconBg: "bg-blue-500",
      features: [
        "NTA 2025 compliant payroll design",
        "Automated PAYE, Pension, NHF calculations",
        "Monthly payslip generation",
        "Annual tax remittance support",
      ],
    },
    {
      title: "Tax Advisory & Filing",
      slug: "tax-advisory-lagos",
      description: "Expert tax planning and filing services for businesses and individuals. VAT returns, income tax, and annual returns filed accurately and on time.",
      icon: FileText,
      iconBg: "bg-purple-500",
      features: [
        "Personal income tax (self-assessment)",
        "Corporate tax filing",
        "Monthly VAT returns with NRS",
        "Annual company returns (IRS & NRS)",
      ],
    },
    {
      title: "Accounting System Design",
      slug: "accounting-system-setup",
      description: "Custom chart of accounts and workflows built specifically for your business needs. Complete setup, integration, and staff training.",
      icon: Settings,
      iconBg: "bg-green-500",
      features: [
        "Chart of accounts design",
        "Accounting software selection",
        "Standard operating procedures",
        "Staff training and support",
      ],
    },
    {
      title: "Bookkeeping & Compliance",
      slug: "bookkeeping-services-lagos",
      description: "Monthly financial reports and ongoing compliance support. Keep your finances organized and tax-ready year-round.",
      icon: BookOpen,
      iconBg: "bg-orange-500",
      features: [
        "Daily transaction recording",
        "Bank reconciliation",
        "Monthly financial statements",
        "Accounts payable/receivable",
      ],
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-50 to-white py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <div className="inline-block px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-semibold mb-6">
            Our Services
          </div>
          
          <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
            Professional Accounting Services for Lagos Businesses
          </h1>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            From payroll management to tax filing, we provide comprehensive accounting solutions tailored for SMEs, startups, and individuals across Nigeria.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;

              return (
                <div key={index} className="bg-white rounded-2xl p-10 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 hover:border-purple-300">
                  {/* Icon */}
                  <div className={`w-20 h-20 ${service.iconBg} rounded-2xl flex items-center justify-center mb-8`}>
                    <Icon className="w-10 h-10 text-white" />
                  </div>

                  {/* Title */}
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">
                    {service.title}
                  </h2>

                  {/* Description */}
                  <p className="text-gray-600 leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <Link
                    href={`/services/${service.slug}`}
                    className="inline-flex items-center gap-2 bg-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-all"
                  >
                    Learn More
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Our Services */}
      <section className="bg-gray-50 py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Why Choose Praestantia?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Professional expertise you can trust
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <CheckCircle className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                25 Years Experience
              </h3>
              <p className="text-gray-600">
                Fellow Chartered Accountant (FCA) with proven expertise across industries and business sizes.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <CheckCircle className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Tailored Solutions
              </h3>
              <p className="text-gray-600">
                No cookie-cutter approaches. Every service is customized to your specific business needs.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <CheckCircle className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Full Compliance
              </h3>
              <p className="text-gray-600">
                Stay ahead of regulations with up-to-date knowledge of Nigerian tax law and accounting standards.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-white py-24">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Schedule a free consultation to discuss which services are right for your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-purple-700 transition-all shadow-lg"
            >
              Schedule Consultation
              <ArrowRight className="w-5 h-5" />
            </Link>
            <a
              href="tel:08080913334"
              className="inline-flex items-center justify-center gap-2 bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold border-2 border-purple-600 hover:bg-purple-50 transition-all"
            >
              Call 08080913334
            </a>
          </div>
        </div>
      </section>
    </>
  );
}