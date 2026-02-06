"use client";

import { useState } from "react";
import Link from "next/link";
import { BUSINESS_INFO } from "@/lib/constants";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-stone-900 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-primary-700 flex items-center justify-center">
              <span className="text-black font-bold text-lg">P</span>
            </div>
            <div>
              <div className="text-stone-950 font-semibold leading-tight">
                {BUSINESS_INFO.name.split(" ")[0]}
              </div>
              <div className="text-xs text-stone-900">
                Chartered Accountants
              </div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {["Services", "About", "Case studies", "Contact us"].map((item) => (
              <Link
                key={item}
                href={`/${item.toLowerCase().replace(" ", "-")}`}
                className="text-black hover:text-black transition font-medium"
              >
                {item}
              </Link>
            ))}

            <Link
              href="/contact"
              className="ml-4 px-4 py-2 md:px-10 md:py-4 rounded-lg bg-purple-600  text-white font-semibold hover:opacity-90 transition"
            >
              Get started
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-stone-800"
            aria-label="Toggle menu"
          >
            ☰
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 space-y-3">
            {["Services", "About", "Case studies", "Contact us"].map((item) => (
              <Link
                key={item}
                href={`/${item.toLowerCase().replace(" ", "-")}`}
                className="block text-stone-950 hover:text-black"
              >
                {item}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
