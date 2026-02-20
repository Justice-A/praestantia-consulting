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
              <h1 className="text-5xl font-bold tracking-tight text-stone-50">
               Practical <span className="text-purple-600">Finance Solutions</span> In Nigeria
              </h1>
            </motion.div>
            <motion.div variants={heroHeaderIn} initial="hidden" animate="show" transition={{ delay: 0.2 }}>
              <p className="mt-6 text-2xl text-stone-50 leading-relaxed max-w-6xl mx-auto">
               At Praestantia, we help businesses put structure and clarity into their finance and operations. From payroll and tax compliance to reporting, process improvement, and team capacity building, we deliver practical solutions that reduce risk, improve accuracy, and enable sustainable growth.
              </p>
            </motion.div>
             <motion.div variants={heroHeaderIn} initial="hidden" animate="show" transition={{ delay: 0.4 }}>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <Link href="/services" className="rounded-md bg-purple-600 px-8 py-4 text-sm font-semibold text-white shadow-sm hover:bg-purple-500 transition-colors">
                View services
              </Link>
              <Link href="/contact"
                className="rounded-md  bg-white px-8 py-4 text-sm font-semibold text-purple-600 hover:bg-purple-100 transition-colors">
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
