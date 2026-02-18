import Image from "next/image";
import Link from "next/link";
import { Award, Users, TrendingUp, CheckCircle, Briefcase, GraduationCap } from "lucide-react";
import Hero from "@/components/home/Hero";
import CTA from "@/components/home/CTA";

export default function AboutPage() {
    const expertise = [
    "Payroll system design and NTA 2025 compliance",
    "Tax planning and filing (VAT, income tax, annual returns)",
    "Accounting system setup for startups and SMEs",
    "Financial reporting and bookkeeping",
    "Recruitment and training of accounting staff",
    "Pricing templates and cost analysis",
  ];

  const industries = [
    "Technology & Startups",
    "Retail & E-commerce",
    "Professional Services",
    "Hospitality & Tourism",
    "Import/Export",
    "And many more...",
  ];

return (
  <>
 {/* HERO SECTION */}
<section className="relative py-24 lg:py-36 overflow-hidden">
  {/* Background Image */}
  <div className="absolute inset-0 -z-10">
    <Image
      src="/about-us.jpg"
      alt="About Praestantia Consulting"
      fill
      className="object-cover brightness-[0.2]"
      priority
    />
  </div>

  <div className="max-w-7xl mx-auto px-6 lg:px-8 relative text-white">
    <div className="text-center">
      <h1 className="text-4xl lg:text-5xl font-bold mb-6">
        About{" "}
        <span className="text-purple-400">
          Praestantia Consulting
        </span>
      </h1>

      <p className="text-xl text-gray-200 max-w-3xl mx-auto">
        Praestanta Consulting Limited is an Accounting Company based in Lagos, Nigeria.
        We are focused on helping SMEs and startups stay tax-compliant, financially
        organized, and growth-ready with the best services available.
      </p>
    </div>
        {/* HERO BUTTONS */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 mt-6">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center bg-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-purple-700 transition-all shadow-md"
          >
            Get Started
          </Link>

          <Link
            href="#services"
            className="inline-flex items-center justify-center bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold border-2 border-purple-600 hover:bg-purple-100 transition-all"
          >
            Explore Services
          </Link>
        </div>

  </div>
</section>



 {/* MISSION & VISION SECTION */}
<section className="bg-gradient-to-br from-purple-50 to-white py-20 lg:py-28">
  <div className="max-w-6xl mx-auto px-6 lg:px-8 text-center">
    
    <h2 className="text-4xl font-bold text-gray-900 mb-4">
      Our Mission & Vision
    </h2>
    <p className="text-lg text-gray-600 mb-16 max-w-3xl mx-auto">
      Guided by integrity, professionalism, and excellence, we are committed
      to strengthening businesses across Nigeria through sound financial
      systems and strategic advisory.
    </p>

    <div className="grid md:grid-cols-2 gap-8">
      
      {/* Mission */}
      <div className="bg-white rounded-2xl p-10 shadow-md hover:shadow-lg transition-all border border-gray-100">
        <h3 className="text-2xl font-semibold text-purple-600 mb-4">
          Our Mission
        </h3>
        <p className="text-gray-600 leading-relaxed text-lg">
          To provide reliable, accessible, and high-quality accounting
          services that empower Nigerian businesses to remain compliant,
          profitable, and confident in their financial decisions.
        </p>
      </div>

      {/* Vision */}
      <div className="bg-white rounded-2xl p-10 shadow-md hover:shadow-lg transition-all border border-gray-100">
        <h3 className="text-2xl font-semibold text-purple-600 mb-4">
          Our Vision
        </h3>
        <p className="text-gray-600 leading-relaxed text-lg">
          To become a trusted accounting partner for SMEs and growing
          enterprises across Nigeria, recognized for excellence,
          integrity, and long-term value creation.
        </p>
      </div>

    </div>

  </div>
</section>


      {/* Story Section */}
      <section className="bg-gray-50 py-24">
        <div className="mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-4xl lg:text-3xl font-bold text-gray-900 mb-4">
             Our Journey
            </p>
            <p className="text-2xl text-gray-600">
              Years of dedication to excellence
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-lg">
            <div className="space-y-6 text-gray-700 leading-relaxed">
              <p className="text-lg">
                In November 2019, we founded <span className="font-semibold text-purple-600">Praestantia Consulting Limited</span> with a clear vision: to provide SMEs and startups with the same level of professional accounting expertise that large corporations enjoy.
              </p>
              <p className="text-lg">
                Over the past 7 years, we've have helped various startups and small businesses set up an account department, re organise the department and traine up-coming Accountants.
              </p>
              <p className="text-lg">
               We've had the privilege of helping over 10 enterprise businesses across various industries achieve financial clarity, maintain compliance, and make confident growth decisions. Every client relationship is built on trust, transparency, and results.
              </p>
              <p className="text-lg font-semibold text-purple-600">
                Our commitment: To be more than just an accountant—to be a trusted financial partner who genuinely cares about your business success.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Expertise & Industries Section */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Areas of Expertise */}
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-8">
                Areas of Expertise
              </h2>
              <div className="space-y-4">
                {expertise.map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="shrink-0 w-6 h-6 bg-purple-50 rounded-full flex items-center justify-center mt-1">
                      <CheckCircle className="w-4 h-4 text-purple-600" />
                    </div>
                    <p className="text-gray-700 leading-relaxed">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Industries Served */}
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-8">
                Industries We Serve
              </h2>
              <div className="bg-gray-50 rounded-2xl p-8">
                <p className="text-gray-600 mb-6">
                  Our services span across various industries, giving us unique insights into different business models and compliance requirements:
                </p>
                <div className="grid grid-cols-2 gap-4">
                  {industries.map((industry, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                      <span className="text-gray-700">{industry}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Work With Me Section */}
      <section className="bg-white py-24">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl lg:text-4xl font-bold text-gray-900 mb-8">
            Why Work With Praestantia?
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 text-left">
            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Personalized Service</h3>
              <p className="text-gray-600">
                You're not just a number. We take time to understand your business and provide tailored solutions.
              </p>
            </div>

            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Deep Expertise</h3>
              <p className="text-gray-600">
                nd We know how to solve complex accounting challenges.
              </p>
            </div>

            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Proactive Guidance</h3>
              <p className="text-gray-600">
                We don't just file your taxes, we help you plan ahead and make strategic financial decisions.
              </p>
            </div>

            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Full Compliance</h3>
              <p className="text-gray-600">
                Stay ahead of regulations with up-to-date knowledge of Nigerian tax law and accounting standards.
              </p>
            </div>
          </div>
        </div>
      </section>
      <CTA/>
    </>
  );
}