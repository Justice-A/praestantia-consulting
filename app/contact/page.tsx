import Link from "next/link";
import { Phone, Mail, MapPin, Clock, MessageCircle, Calendar } from "lucide-react";

export const metadata = {
  title: "Contact Praestantia Consulting | Chartered Accountant in Lagos",
  description: "Get in touch with Praestantia Consulting. Call, email, or WhatsApp for accounting services across Nigeria. Office in Lekki, Lagos.",
  keywords: "contact accountant Lagos, accounting consultation Nigeria, Praestantia Consulting contact",
};

export default function ContactPage() {
  const contactMethods = [
    {
      icon: Phone,
      title: "Call Us",
      primary: "08080913334",
      secondary: "Monday - Friday, 8:00 AM - 5:00 PM",
      href: "tel:08080913334",
      iconBg: "bg-blue-100",
      iconColor: "text-blue-600",
      cta: "Call Now",
    },
    {
      icon: MessageCircle,
      title: "WhatsApp",
      primary: "Chat with us directly",
      secondary: "Fastest response time",
      href: "https://wa.me/2348080913334",
      iconBg: "bg-green-100",
      iconColor: "text-green-600",
      cta: "Start Chat",
    },
    {
      icon: Mail,
      title: "Email",
      primary: "praestantiaconsult@gmail.com",
      secondary: "We'll respond within 24 hours",
      href: "mailto:praestantiaconsult@gmail.com",
      iconBg: "bg-purple-100",
      iconColor: "text-purple-600",
      cta: "Send Email",
    },
  ];

  const officeInfo = {
    address: "Behind Davitech Oil, Lekki Epe Expressway, Lagos",
    hours: "Monday - Friday: 8:00 AM - 5:00 PM",
    weekends: "Weekends: By appointment only",
  };

  const faqs = [
    {
      question: "Do you offer free consultations?",
      answer: "Yes! We offer a free initial consultation (30 minutes) to discuss your needs and how we can help. This gives you a chance to meet us and understand our approach before making any commitment.",
    },
    {
      question: "How quickly can you respond to urgent requests?",
      answer: "For urgent tax deadlines or time-sensitive issues, contact us via WhatsApp or phone. We prioritize urgent requests and can often accommodate same-day or next-day consultations depending on availability.",
    },
    {
      question: "Can we meet virtually if I'm not in Lagos?",
      answer: "Absolutely. We serve clients across Nigeria through video calls (Zoom, Google Meet) and secure document sharing. Distance is no barrier to quality service.",
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-50 to-white py-20 lg:py-28">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <div className="inline-block px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-semibold mb-6">
            Get In Touch
          </div>

          <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
            Let's Talk About Your Business Finances
          </h1>

          <p className="text-xl text-gray-600 leading-relaxed mb-8">
            Whether you need payroll setup, tax filing, or ongoing bookkeeping, we're here to help. Reach out today for a free consultation.
          </p>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Choose Your Preferred Contact Method
            </h2>
            <p className="text-lg text-gray-600">
              We're available through multiple channels for your convenience
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {contactMethods.map((method, index) => {
              const Icon = method.icon;
              return (
                <div key={index} className="bg-white rounded-2xl p-8 shadow-lg border-2 border-gray-200 hover:border-purple-300 transition-all text-center">
                  <div className={`w-20 h-20 ${method.iconBg} rounded-2xl flex items-center justify-center mx-auto mb-6`}>
                    <Icon className={`w-10 h-10 ${method.iconColor}`} />
                  </div>

                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    {method.title}
                  </h3>

                  <p className="text-lg font-semibold text-gray-900 mb-2">
                    {method.primary}
                  </p>

                  <p className="text-gray-600 mb-6">
                    {method.secondary}
                  </p>
                  <a
                  
                    href={method.href}
                    className="inline-flex items-center justify-center gap-2 bg-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-all w-full"
                  >
                    {method.cta}
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Office Location & Hours */}
      <section className="bg-gray-50 py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Office Info */}
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-8">
                Visit Our Lagos Office
              </h2>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Office Address</h3>
                    <p className="text-gray-600 leading-relaxed">
                      {officeInfo.address}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center shrink-0">
                    <Clock className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Business Hours</h3>
                    <p className="text-gray-600">{officeInfo.hours}</p>
                    <p className="text-gray-600">{officeInfo.weekends}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center shrink-0">
                    <Calendar className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Appointments</h3>
                    <p className="text-gray-600">
                      Walk-ins welcome, but we recommend calling ahead to ensure availability.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map placeholder / Visual */}
            <div className="bg-linear-to-br from-purple-100 to-blue-100 rounded-2xl p-12 text-center">
              <MapPin className="w-32 h-32 text-purple-600 mx-auto mb-6" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Lekki, Lagos
              </h3>
              <p className="text-gray-700 mb-6">
                Conveniently located on Lekki Epe Expressway, easily accessible from Victoria Island, Ikoyi, and Ajah.
              </p>
              <a
                href="https://maps.google.com/?q=Behind+Davitech+Oil+Lekki+Epe+Expressway+Lagos"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-all"
              >
                Get Directions
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Service Coverage */}
      <section className="bg-white py-24">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Serving Businesses Across Nigeria
          </h2>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            While our main office is in Lagos, we work with clients nationwide through secure remote collaboration. From Abuja to Port Harcourt, from Kano to Ibadan—if you need professional accounting services, we're here to help.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="font-bold text-gray-900 mb-2">Lagos & Surrounding</h3>
              <p className="text-gray-600 text-sm">In-person meetings available</p>
            </div>
            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="font-bold text-gray-900 mb-2">Major Nigerian Cities</h3>
              <p className="text-gray-600 text-sm">Video consultations</p>
            </div>
            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="font-bold text-gray-900 mb-2">International Clients</h3>
              <p className="text-gray-600 text-sm">Remote collaboration</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-gray-50 py-24">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Before You Reach Out
            </h2>
            <p className="text-lg text-gray-600">
              Quick answers to common questions
            </p>
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

      {/* What to Expect */}
      <section className="bg-purple-600 py-24 text-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold mb-8">
            What Happens After You Contact Us?
          </h2>

          <div className="grid md:grid-cols-3 gap-8 text-left">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl font-bold">1</span>
              </div>
              <h3 className="font-bold text-xl mb-2">Initial Response</h3>
              <p className="text-purple-100">
                We'll respond within 24 hours (often same-day) to acknowledge your inquiry.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl font-bold">2</span>
              </div>
              <h3 className="font-bold text-xl mb-2">Free Consultation</h3>
              <p className="text-purple-100">
                We'll schedule a 30-minute call to understand your needs and discuss solutions.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl font-bold">3</span>
              </div>
              <h3 className="font-bold text-xl mb-2">Custom Proposal</h3>
              <p className="text-purple-100">
                You'll receive a detailed proposal with transparent pricing and timelines.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-white py-24">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Don't let accounting stress hold your business back. Reach out today and let's solve it together.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:08080913334"
              className="inline-flex items-center justify-center gap-2 bg-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-purple-700 transition-all shadow-lg"
            >
              <Phone className="w-5 h-5" />
              Call 08080913334
            </a>
            <a
              href="https://wa.me/2348080913334"
              className="inline-flex items-center justify-center gap-2 bg-green-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-green-700 transition-all shadow-lg"
            >
              <MessageCircle className="w-5 h-5" />
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>
    </>
  );
}