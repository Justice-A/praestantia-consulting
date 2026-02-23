"use client";

import Image from "next/image";
import Link from "next/link";
import Container from "../components/ui/Container";
import { motion, easeIn } from "framer-motion";

const heroHeaderIn = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 1, ease: easeIn },
  },
};

export default function Hero() {
  return (
    <section className="relative text-center overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <Image
          src="/hero-image.jpg"
          alt="Hero image of an accountant working at a desk with financial documents and a laptop"
          fill
          className="object-cover brightness-[0.2]"
          priority
        />
      </div>
      <div className="relative z-20 mx-auto h-screen flex flex-col justify-center w-full">
        <Container>
          <div className="flex flex-col space-y-4">
            <motion.div variants={heroHeaderIn} initial="hidden" animate="show">
              <h1 className="text-4xl lg:text-5xl font-bold tracking-tight text-stone-50">
               Practical <span className="text-blue-900">Finance</span> And <span className="text-blue-900">Accounting</span> Solutions 
              </h1>
            </motion.div>
            <motion.div variants={heroHeaderIn} initial="hidden" animate="show" transition={{ delay: 0.2 }}>
              <p className="mt-6 text-xl text-stone-50 leading-relaxed max-w-6xl mx-auto">
               At Praestantia, we help businesses put structure and clarity into their finance and operations from payroll management to tax advisory
              </p>
            </motion.div>
             <motion.div variants={heroHeaderIn} initial="hidden" animate="show" transition={{ delay: 0.4 }}>
            <div className="mt-10 flex flex-row items-center justify-center gap-4">
              <Link href="/services" className="rounded-md bg-blue-900 px-5 py-2 lg:px-8 lg:py-4  text-sm font-semibold text-white shadow-sm hover:bg-blue-800 transition-colors">
                View services
              </Link>
              <Link href="/contact"
                className="rounded-md  bg-white  px-5 py-3 lg:px-8 lg:py-4 text-sm font-semibold text-blue-900 hover:bg-purple-100 transition-colors">
                Get started
              </Link>
            </div>
            </motion.div>
          </div>
        </Container>
      </div>
    </section>
  );
}
