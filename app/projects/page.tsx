import Image from "next/image";
import Link from "next/link";
import { CheckCircle, ArrowRight, TrendingUp, Clock, DollarSign, Users } from "lucide-react";
import CTA from "@/components/home/CTA";
export const metadata = {
  title: "Projects | Real Results from Praestantia Consulting",
  description: "See how we've helped Nigerian businesses with payroll systems, tax filing, accounting setup, and bookkeeping. Real stories, real results.",
  keywords: "accounting projects Nigeria, tax success stories Lagos, payroll implementation Nigeria, accounting testimonials",
};

export default function CaseStudiesPage() {
  const caseStudies = [
     {
      title: "NTA 2025 Compliant Payroll for Manufacturing Company",
      industry: "Manufacturing",
      location: "Lagos",
      challenge: "A mid-sized manufacturing company with 50+ employees was processing payroll manually using Excel. This led to frequent calculation errors, missed tax deadlines, and employee complaints about incorrect payslips. They faced potential penalties from FIRS for non-compliance with new NTA 2025 regulations.",
      solution: "We conducted a full payroll audit, designed a custom NTA 2025 compliant payroll system, and integrated it with their existing HR software. The system automated PAYE, pension, NHF, and ITF calculations. We trained their HR and finance teams on the new system and provided documentation for all processes.",
      results: [
        "80% reduction in payroll processing time (from 5 days to 1 day)",
        "Zero tax penalties in 12 consecutive months",
        "100% employee satisfaction with accurate, timely payslips",
        "Automated tax remittances saved ₦120,000 in potential penalties",
      ],
      stats: [
        { label: "Time Saved", value: "80%", icon: Clock },
        { label: "Penalty-Free Months", value: "12", icon: CheckCircle },
        { label: "Employees Covered", value: "50+", icon: Users },
        { label: "Annual Savings", value: "₦120K", icon: DollarSign },
      ],
      color: "blue",
    },
    {
      title: "Tax Compliance Rescue for Tech Startup",
      industry: "Technology / SaaS",
      location: "Lagos",
      challenge: "A rapidly growing tech startup had not filed VAT returns for 3 years due to lack of internal accounting capacity. They faced ₦2.5M in potential penalties and were at risk of business closure. The founders were overwhelmed and didn't know where to start.",
      solution: "We initiated a voluntary disclosure program with FIRS, prepared and filed all back returns with proper documentation, negotiated penalty reductions, and established a payment plan. We then set up monthly VAT compliance processes to prevent future issues.",
      results: [
        "All 36 months of VAT returns filed and accepted by FIRS",
        "Penalties reduced by 70% through negotiation (from ₦2.5M to ₦750K)",
        "12-month payment plan established, avoiding immediate cash flow crisis",
        "Business continued operations without disruption",
        "Ongoing monthly compliance prevents future penalties",
      ],
      stats: [
        { label: "Returns Filed", value: "36", icon: CheckCircle },
        { label: "Penalty Reduction", value: "70%", icon: TrendingUp },
        { label: "Payment Plan", value: "12mo", icon: Clock },
        { label: "Penalties Saved", value: "₦1.75M", icon: DollarSign },
      ],
      color: "purple",
    },
    {
      title: "Accounting System Setup for Growing E-commerce Business",
      industry: "E-commerce / Retail",
      location: "Abuja (Remote Service)",
      challenge: "An e-commerce startup experiencing rapid growth was tracking finances in multiple Excel spreadsheets. They couldn't answer basic questions like 'Are we profitable?' or 'Which products make money?' Investors were asking for financial statements, but the founders couldn't produce them.",
      solution: "We designed a custom chart of accounts for their business model (multiple revenue streams, inventory, COGs), implemented QuickBooks Online integrated with their payment processors and inventory system, migrated historical data, and trained their team. We created custom dashboards for real-time metrics.",
      results: [
        "Real-time visibility into revenue by product category and customer segment",
        "Monthly financial close reduced from 2+ weeks to 3 days",
        "Successfully raised Series A funding with clean, investor-ready financials",
        "Identified unprofitable product line, discontinued it, saving ₦400K/month",
        "Automated reporting freed up 40+ hours/month of founder time",
      ],
      stats: [
        { label: "Close Time Reduction", value: "85%", icon: Clock },
        { label: "Monthly Savings", value: "₦400K", icon: DollarSign },
        { label: "Funding Raised", value: "Series A", icon: TrendingUp },
        { label: "Time Freed", value: "40hr/mo", icon: Users },
      ],
      color: "green",
    },
    {
      title: "Bookkeeping Transformation for Professional Services Firm",
      industry: "Consulting / Professional Services",
      location: "Port Harcourt (Remote Service)",
      challenge: "A consulting firm with 10 employees had outsourced bookkeeping to a provider who consistently delivered reports 6-8 weeks late with numerous errors. The managing partner couldn't make informed business decisions and was blindsided by cash flow issues. Tax filings were always rushed and stressful.",
      solution: "We took over monthly bookkeeping, implemented proper accrual accounting (they were on cash basis), set up project-based profitability tracking, established a monthly close calendar (reports by the 10th), and proactively flagged tax obligations 60 days in advance.",
      results: [
        "Financial statements delivered by the 10th of each month (100% on-time for 18 months)",
        "Project profitability tracking revealed that 30% of projects were unprofitable—pricing was adjusted",
        "Proactive tax planning eliminated last-minute scrambles and enabled ₦180K in tax savings through proper deductions",
        "Managing partner now has confidence to make hiring and investment decisions based on real data",
      ],
      stats: [
        { label: "On-Time Reports", value: "100%", icon: CheckCircle },
        { label: "Tax Savings", value: "₦180K", icon: DollarSign },
        { label: "Service Duration", value: "18mo+", icon: Clock },
        { label: "Projects Analyzed", value: "50+", icon: TrendingUp },
      ],
      color: "orange",
    },
    {
      title: "Annual Returns & Compliance for Hospitality Business",
      industry: "Hospitality / Tourism",
      location: "Lagos",
      challenge: "A boutique hotel had fallen behind on corporate annual returns filings with CAC and tax authorities. They received multiple notices threatening to strike their company off the register. The owner was focused on operations and had neglected administrative compliance.",
      solution: "We immediately filed overdue annual returns with CAC, prepared and submitted back tax returns with FIRS and Lagos State, applied for penalty waivers where applicable, and set up a compliance calendar with automated reminders for all future filings.",
      results: [
        "Company status restored to 'active' with CAC after filing 3 years of back returns",
        "All tax obligations brought current with FIRS and LIRS",
        "₦85,000 in penalties waived through proper documentation and negotiation",
        "Automated compliance calendar ensures no future missed deadlines",
        "Owner has peace of mind knowing compliance is handled proactively",
      ],
      stats: [
        { label: "Years Caught Up", value: "3", icon: CheckCircle },
        { label: "Penalties Waived", value: "₦85K", icon: DollarSign },
        { label: "Compliance Rate", value: "100%", icon: TrendingUp },
        { label: "Future Deadlines", value: "Auto-Tracked", icon: Clock },
      ],
      color: "purple",
    },
  ];

  const colorClasses = {
    blue: {
      bg: "from-blue-50 to-white",
      statBg: "bg-blue-100",
      statText: "text-blue-600",
      badge: "bg-blue-100 text-blue-700",
    },
    purple: {
      bg: "from-purple-50 to-white",
      statBg: "bg-purple-100",
      statText: "text-purple-600",
      badge: "bg-purple-100 text-purple-700",
    },
    green: {
      bg: "from-green-50 to-white",
      statBg: "bg-green-100",
      statText: "text-green-600",
      badge: "bg-green-100 text-green-700",
    },
    orange: {
      bg: "from-orange-50 to-white",
      statBg: "bg-orange-100",
      statText: "text-orange-600",
      badge: "bg-orange-100 text-orange-700",
    },
  };

  return (
    <>
     <section className="relative py-24 lg:py-36 overflow-hidden"> 
          <div className="absolute inset-0 -z-10"> 
            <Image src="/happy-customers.jpg" 
            alt="Success stories background" 
            fill className="object-cover brightness-[0.2]" 
            priority /> 
            </div> 
          <div className="max-w-7xl mx-auto px-6 lg:px-8 relative text-white">
          <div className="text-center ">
            <h2 className="text-4xl lg:text-4xl font-bold mb-6">
              How We've Helped <span className="text-purple-600">Nigerian Businesses</span> Succeed
            </h2>

            <p className="text-xl text-purple-100 max-w-3xl mx-auto leading-relaxed">
              From startups to established SMEs, see the tangible impact of professional accounting services. These are real stories from real clients across Nigeria.
            </p>
          </div>
            <div className="flex flex-col sm:flex-row justify-center gap-4 mt-6">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center bg-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-purple-700 transition-all shadow-md"
          >
            Get Started
          </Link>

          <Link
            href="#services"
            className="inline-flex items-center justify-center bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold border-2 border-purple-600 hover:bg-purple-50 transition-all"
          >
            Explore Services
          </Link>
        </div>
    
        </div>
          </section>
      {/* projects */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="space-y-24">
            {caseStudies.map((study, index) => {
              const colors = colorClasses[study.color as keyof typeof colorClasses];
              const isEven = index % 2 === 0;

              return (
                <div key={index} className={`bg-linear-to-br ${colors.bg} rounded-3xl p-8 lg:p-12 shadow-xl`}>
                  {/* Header */}
                  <div className="flex flex-wrap gap-3 mb-6">
                    <span className={`px-4 py-2 ${colors.badge} rounded-full text-sm font-semibold`}>
                      {study.industry}
                    </span>
                    <span className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-semibold">
                      {study.location}
                    </span>
                  </div>

                  <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-8">
                    {study.title}
                  </h2>

                  {/* Challenge, Solution, Results */}
                  <div className="grid lg:grid-cols-3 gap-8 mb-12">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                         The Challenge
                      </h3>
                      <p className="text-gray-700 leading-relaxed">
                        {study.challenge}
                      </p>
                    </div>

                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                        Our Solution
                      </h3>
                      <p className="text-gray-700 leading-relaxed">
                        {study.solution}
                      </p>
                    </div>

                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                       The Results
                      </h3>
                      <ul className="space-y-2">
                        {study.results.map((result, resultIndex) => (
                          <li key={resultIndex} className="flex items-start gap-2">
                            <CheckCircle className="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
                            <span className="text-gray-700 text-sm">{result}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Stats */}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {study.stats.map((stat, statIndex) => {
                      const Icon = stat.icon;
                      return (
                        <div key={statIndex} className="bg-white rounded-xl p-6 shadow-lg text-center">
                          <div className={`w-12 h-12 ${colors.statBg} rounded-lg flex items-center justify-center mx-auto mb-3`}>
                            <Icon className={`w-6 h-6 ${colors.statText}`} />
                          </div>
                          <div className={`text-3xl font-bold ${colors.statText} mb-1`}>
                            {stat.value}
                          </div>
                          <div className="text-sm text-gray-600">
                            {stat.label}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>


      {/* Why These Results Matter */}
      <section className="bg-white py-24">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <h2 className="text-4xl lg:text-4xl font-bold text-gray-900 mb-8 text-center">
            What Makes These Results Possible?
          </h2>

          <div className="space-y-6">
            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">25 Years of Experience</h3>
              <p className="text-gray-700">
                We've seen every scenario. From startups to established businesses, from simple to complex—we know how to solve problems efficiently.
              </p>
            </div>

            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Chartered Accountant (FCA)</h3>
              <p className="text-gray-700">
                Professional certification and ethics mean you get accurate, compliant, trustworthy service every time.
              </p>
            </div>

            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Customized Solutions</h3>
              <p className="text-gray-700">
                No cookie-cutter approaches. We design solutions based on YOUR business model, industry, and goals.
              </p>
            </div>

            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Proactive Partnership</h3>
              <p className="text-gray-700">
                We don't just file your taxes—we plan ahead, flag issues early, and help you make better financial decisions.
              </p>
            </div>
          </div>
        </div>
        <CTA/>
      </section>
    </>
  );
}