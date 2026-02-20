import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";
import Container from "../ui/Container";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-16">
      
      <Container>
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">P</span>
              </div>
              <div>
                <div className="font-semibold text-white">Praestantia</div>
                <div className="text-xs text-gray-400">Consulting limited</div>
              </div>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed">
              Professional accounting services for Lagos businesses since 2019
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-white mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/services/payroll-management-lagos" className="hover:text-purple-400 transition-colors">
                  Payroll Management
                </Link>
              </li>
              <li>
                <Link href="/services/tax-advisory-lagos" className="hover:text-purple-400 transition-colors">
                  Tax Advisory
                </Link>
              </li>
              <li>
                <Link href="/services/accounting-system-setup" className="hover:text-purple-400 transition-colors">
                  Accounting Systems
                </Link>
              </li>
              <li>
                <Link href="/services/bookkeeping-services-lagos" className="hover:text-purple-400 transition-colors">
                  Bookkeeping
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold text-white mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="hover:text-purple-400 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/case-studies" className="hover:text-purple-400 transition-colors">
                  Case Studies
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-purple-400 transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-purple-400 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-white mb-4">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <Phone className="w-4 h-4 mt-0.5 text-purple-400 flex-shrink-0" />
                <a href="tel:08080913334" className="hover:text-purple-400 transition-colors">
                  08080913334
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="w-4 h-4 mt-0.5 text-purple-400 flex-shrink-0" />
                <a 
                  href="mailto:praestantiaconsult@gmail.com" 
                  className="hover:text-purple-400 transition-colors break-all"
                >
                  praestantiaconsult@gmail.com
                </a>
              </li>
              {/* <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 text-purple-400 flex-shrink-0" />
                <span className="leading-relaxed">
                  Behind Davitech Oil, Lekki Epe Expressway, Lagos
                </span>
              </li> */}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} Praestantia Consulting Limited. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <Link href="/privacy" className="hover:text-purple-400 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-purple-400 transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}