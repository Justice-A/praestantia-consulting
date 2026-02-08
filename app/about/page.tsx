import Image from "next/image";
import Link from "next/link";
import { Award, Users, TrendingUp, CheckCircle, Briefcase, GraduationCap } from "lucide-react";

export default function AboutPage() {
  const credentials = [
    {
      icon: Award,
      title: "Fellow Chartered Accountant (FCA)",
      description: "Highest professional qualification from ICAN",
      iconBg: "bg-purple-100",
      iconColor: "text-purple-600",
    },
    {
      icon: GraduationCap,
      title: "ICAN & CITN Member",
      description: "Certified by Nigeria's premier accounting bodies",
      iconBg: "bg-blue-100",
      iconColor: "text-blue-600",
    },
    {
      icon: Briefcase,
      title: "25 Years Experience",
      description: "Proven track record since 1999",
      iconBg: "bg-green-100",
      iconColor: "text-green-600",
    },
    {
      icon: Users,
      title: "100+ Businesses Served",
      description: "Trusted by SMEs across Nigeria",
      iconBg: "bg-orange-100",
      iconColor: "text-orange-600",
    },
  ];

  const expertise = [
    "Payroll system design and NTA 2025 compliance",
    "Tax planning and filing (VAT, income tax, annual returns)",
    "Accounting system setup for startups and SMEs",
    "Financial reporting and bookkeeping",
    "Recruitment and training of accounting staff",
    "Pricing templates and cost analysis",
  ];

  const industries = [
    "Manufacturing",
    "Technology & Startups",
    "Retail & E-commerce",
    "Professional Services",
    "Hospitality & Tourism",
    "Import/Export",
    "And many more...",
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="bg-linear-to-br from-purple-50 to-white py-20 lg:py-28">
        <div className=" mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div>
              <div className="inline-block px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-semibold mb-6">
                About Our Founder
              </div>
              
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Meet Toyin Aregbesola
              </h1>
              
              <p className="text-xl text-gray-600 mb-6 leading-relaxed">
                Fellow Chartered Accountant with 25 years of experience helping Lagos businesses achieve financial clarity and compliance.
              </p>

              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                Since establishing Praestantia Consulting Limited in 2019, I've been dedicated to providing personalized accounting solutions for SMEs, startups, and individuals across Nigeria. My mission is simple: make professional accounting accessible, understandable, and valuable for businesses at every stage of growth.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-all shadow-lg"
                >
                  Schedule a Consultation
                </Link>
                <Link
                  href="/services"
                  className="inline-flex items-center gap-2 bg-white text-purple-600 px-6 py-3 rounded-lg font-semibold border-2 border-purple-600 hover:bg-purple-50 transition-all"
                >
                  View Services
                </Link>
              </div>
            </div>

            {/* Image */}
            <div className="relative">
              <div className="relative w-96 aspect-square lg:aspect-4/5 rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/chartered-accountant.png"
                  alt="Toyin Aregbesola - Fellow Chartered Accountant"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              {/* Decorative element */}
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-purple-200 rounded-full blur-3xl opacity-50 -z-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Credentials Section */}
      <section className="bg-white py-24 h-72">
        <div className="mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-4xl lg:text-3xl font-bold text-gray-900 mb-4">
              Professional Credentials
            </p>
            <p className="text-2xl text-gray-600 mx-auto">
              Qualified, certified, and committed to the highest standards
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {credentials.map((credential, index) => {
              const Icon = credential.icon;
              return (
                <div key={index} className="text-center">
                  <div className={`w-16 h-16 ${credential.iconBg} rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                    <Icon className={`w-8 h-8 ${credential.iconColor}`} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {credential.title}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {credential.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="bg-gray-50 py-24 h-72">
        <div className="mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-4xl lg:text-3xl font-bold text-gray-900 mb-4">
              My Journey
            </p>
            <p className="text-2xl text-gray-600">
              25 years of dedication to excellence in accounting
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-lg">
            <div className="space-y-6 text-gray-700 leading-relaxed">
              <p className="text-lg">
                My accounting journey began over two decades ago, driven by a passion for helping businesses make sense of their finances. After earning my chartered accountant certification from ICAN and becoming a Fellow (FCA), I spent years working with diverse organizations across Nigeria.
              </p>

              <p className="text-lg">
                In November 2019, I founded <span className="font-semibold text-purple-600">Praestantia Consulting Limited</span> with a clear vision: to provide SMEs and startups with the same level of professional accounting expertise that large corporations enjoy.
              </p>

              <p className="text-lg">
                What sets my approach apart is personalization. I don't believe in one-size-fits-all solutions. Whether I'm designing a payroll system for a manufacturing company, setting up accounting processes for a tech startup, or advising on tax strategy, I take the time to understand each client's unique needs and challenges.
              </p>

              <p className="text-lg">
                Over the years, I've had the privilege of helping over 100 businesses across various industries achieve financial clarity, maintain compliance, and make confident growth decisions. Every client relationship is built on trust, transparency, and results.
              </p>

              <p className="text-lg font-semibold text-purple-600">
                My commitment: To be more than just an accountant—to be a trusted financial partner who genuinely cares about your business success.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Expertise & Industries Section */}
      <section className="bg-white py-24">
        <div className="mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Areas of Expertise */}
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-8">
                Areas of Expertise
              </h2>
              <div className="space-y-4">
                {expertise.map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center mt-1">
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

      {/* Stats Section */}
      <section className="bg-purple-600 py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 text-center text-white">
            <div>
              <div className="text-5xl lg:text-6xl font-bold mb-2">25</div>
              <div className="text-xl text-purple-100">Years of Experience</div>
            </div>
            <div>
              <div className="text-5xl lg:text-6xl font-bold mb-2">100+</div>
              <div className="text-xl text-purple-100">Businesses Served</div>
            </div>
            <div>
              <div className="text-5xl lg:text-6xl font-bold mb-2">100%</div>
              <div className="text-xl text-purple-100">Compliance Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Work With Me Section */}
      <section className="bg-white py-24">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-8">
            Why Work With Praestantia?
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 text-left">
            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Personalized Service</h3>
              <p className="text-gray-600">
                You're not just a number. I take time to understand your business and provide tailored solutions.
              </p>
            </div>

            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Deep Expertise</h3>
              <p className="text-gray-600">
                25 years of experience means I've seen it all—and I know how to solve complex accounting challenges.
              </p>
            </div>

            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Proactive Guidance</h3>
              <p className="text-gray-600">
                I don't just file your taxes—I help you plan ahead and make strategic financial decisions.
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
    </>
  );
}