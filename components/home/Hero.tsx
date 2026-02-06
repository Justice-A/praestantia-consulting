import Link from "next/link";
export default function Hero() {
  return (
    <section className="bg-white text-center background h-screen flex flex-col justify-center">
      <div className="mx-auto ">
        
         <h1 className="text-9xl md:text-9xl font-bold tracking-tight text-gray-900">
            Professional <span className="text-purple-600">Accounting Services</span> for Lagos Businesses
          </h1>

          {/* Subtitle */}
          <p className="mt-6 text-lg text-gray-600 leading-relaxed">
            Chartered accountant with 25 years of experience helping SMEs and
            startups stay tax-compliant, financially organized, and growth-ready.
          </p>

          {/* Buttons */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Link href="/services" className="rounded-md bg-purple-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-purple-500 transition-colors">
              View services
            </Link>
            <Link href="/contact"
             className="rounded-md border border-purple-600 px-6 py-3 text-sm font-semibold text-purple-600 hover:bg-purple-50 transition-colors">
              Get started
            </Link>
          </div>
      </div>
    </section>
  );
}
