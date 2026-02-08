import Image from "next/image";
import Link from "next/link";
import Container from "../ui/Container";
export default function Hero() {
  return (
    <section className="relative bg-white text-center h-screen flex flex-col justify-center overflow-hidden">
      <div className="absolute inset-0 z-0 w-full h-full overflow-hidden">
        <Image
          src="/accountant-image.jpg"
          alt="Toyin Aregbesola - Fellow Chartered Accountant"
          fill
          className="object-cover brightness-[1]"
          priority
        />
      </div>

      <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-purple-200 rounded-full blur-3xl opacity-50 z-10"></div>

      <div className="relative z-20 mx-auto w-full">
        <Container>
          <div className="flex flex-col space-y-4">
            <div>
              <p className="text-5xl font-bold tracking-tight text-black">
                Professional <span className="text-purple-600">Accounting Services</span> for Lagos Businesses
              </p>
            </div>
            <div>
              <p className="mt-6 text-2xl text-gray-900 leading-relaxed">
                Chartered accountant with 25 years of experience helping SMEs and
                startups stay tax-compliant, financially organized, and growth-ready.
              </p>
            </div>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <Link href="/services" className="rounded-md bg-purple-600 px-8 py-4 text-sm font-semibold text-white shadow-sm hover:bg-purple-500 transition-colors">
                View services
              </Link>
              <Link href="/contact"
                className="rounded-md border border-purple-600 px-8 py-4 text-sm font-semibold text-purple-600 hover:bg-purple-50 transition-colors">
                Get started
              </Link>
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
}
