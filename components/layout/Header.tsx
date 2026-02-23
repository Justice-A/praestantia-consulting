"use client";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import { ChevronDown } from "lucide-react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);

  const services = [
    { name: "Payroll Management", href: "/services/payroll-management-lagos" },
    { name: "Tax Advisory & Filing", href: "/services/tax-advisory-lagos" },
    { name: "Accounting System Design", href: "/services/accounting-system-setup" },
    { name: "Bookkeeping & Compliance", href: "/services/bookkeeping-services-lagos" },
  ];

  return (
    <nav className="border-b border-gray-200 sticky top-0 z-50 backdrop-blur-sm bg-white/95 shadow-sm">
      <div className="mx-auto px-6 lg:px-8 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/logo.svg.svg"
              alt="Praestantia Consulting Ltd"
              width={40}
              height={40}
              priority
            />

            <div className="flex flex-col justify-center leading-tight">
              <span className="font-semibold text-sm text-gray-900">
                Praestantia
              </span>
              <span className="text-sm text-gray-600">
                Consulting Limited
              </span>
            </div>
          </Link>
          {/* Desktop Navigation */}
          <div className="hidden md:flex gap-8 items-center">
            <Link href="/" className="text-gray-700 hover:text-blue-900 transition-colors font-medium">
              Home
            </Link>
            
            <Link href="/about" className="text-gray-700 hover:text-blue-900 transition-colors font-medium">
              About
            </Link>
            {/* Services Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setServicesDropdownOpen(true)}
              onMouseLeave={() => setServicesDropdownOpen(false)}
            >
              <div className="flex items-center gap-1 text-gray-700  font-medium hover:text-blue-900 transition-colors">
                 <Link
                      href="/services"
                     
                    >
                Services
                </Link>
                <ChevronDown className={`w-4 h-4 transition-transform ${servicesDropdownOpen ? 'rotate-180' : ''}`} />
              </div>

              {/* Dropdown Menu */}
              {servicesDropdownOpen && (
                <div className="absolute top-full left-0  w-64 bg-white rounded-lg shadow-xl border border-gray-200 py-2 space-y-2 animate-fade-in-up">
                  {services.map((service, index) => (
                    <Link
                      key={index}
                      href={service.href}
                      className="block px-4 py-3 text-gray-700 hover:bg-purple-50 hover:text-blue-900 transition-colors font-medium"
                    >
                      {service.name}
                    </Link>
                  ))}
                  <div className="border-t border-gray-200 mt-2 pt-2">
                    <Link
                      href="/services"
                      className="block px-4 py-3 text-blue-900  hover:bg-purple-50 transition-colors"
                    >
                      View All Services →
                    </Link>
                  </div>
                </div>
              )}
            </div>
            {/* <Link href="/projects" className="text-gray-700 hover:text-blue-900 transition-colors font-medium">
              Projects
            </Link> */}
            <Link href="/contact" className="text-gray-700 hover:text-blue-900 transition-colors font-medium">
              Contact us
            </Link>

            {/* Theme toggle will go here when implementing dark mode */}

            <Link 
              href="/contact" 
              className="bg-blue-900 text-white px-6 py-2.5 rounded-lg hover:bg-purple-700 transition-all"
            >
              Get started
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2"
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden pt-4 pb-2 space-y-2 border-t border-gray-200 mt-4">
            <Link
              href="/"
              className="block py-2 text-gray-700 hover:text-blue-900 font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
                 <Link 
              href="/about" 
              className="block py-2 text-gray-700 hover:text-blue-900 font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </Link>

            {/* Services - Accordion style on mobile */}
            <div>
              <button
                onClick={() => setServicesDropdownOpen(!servicesDropdownOpen)}
                className="w-full flex items-center justify-between py-2 text-gray-700 hover:text-blue-900 font-medium"
              >
                Services
                <ChevronDown className={`w-4 h-4 transition-transform ${servicesDropdownOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {servicesDropdownOpen && (
                <div className="pl-4 space-y-2 mt-2">
                  {services.map((service, index) => (
                    <Link
                      key={index}
                      href={service.href}
                      className="block py-2 text-sm text-gray-600 font-medium hover:text-blue-900"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {service.name}
                    </Link>
                  ))}
                  <Link
                    href="/services"
                    className="block py-2 text-sm text-blue-900 font-semibold"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    View All Services →
                  </Link>
                </div>
              )}
            </div>
            {/* <Link 
              href="/projects" 
              className="block py-2 text-gray-700 hover:text-blue-900 font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              Projects
            </Link> */}
            <Link 
              href="/contact" 
              className="block py-2 text-gray-700 hover:text-blue-900 font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact us
            </Link>
            <Link 
              href="/contact" 
              className="block py-2 text-blue-900 font-semibold border-t border-gray-200 mt-2 pt-4"
              onClick={() => setMobileMenuOpen(false)}
            >
              Get started
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}