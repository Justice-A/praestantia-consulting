import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-stone-950 text-stone-300">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
        <div className="grid gap-10 md:grid-cols-4 mb-16">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-white text-stone-900 flex items-center justify-center font-serif font-bold text-lg">
                P
              </div>
              <div>
                <div className="text-white font-semibold font-serif">
                  Praestantia Consulting
                </div>
                <div className="text-xs text-stone-400">
                  Chartered Accountants
                </div>
              </div>
            </div>
            <p className="text-sm text-stone-400 leading-relaxed">
              Professional accounting services for Lagos businesses, startups,
              and growing enterprises.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              {[
                ["Payroll Management", "/services/payroll-management-lagos"],
                ["Tax Advisory", "/services/tax-advisory-lagos"],
                ["Accounting Systems", "/services/accounting-system-setup"],
                ["Bookkeeping", "/services/bookkeeping-services-lagos"],
              ].map(([label, href]) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="hover:text-white transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              {[
                ["About Us", "/about"],
                ["Case Studies", "/case-studies"],
                ["FAQ", "/faq"],
                ["Contact", "/contact"],
              ].map(([label, href]) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="hover:text-white transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 mt-1 text-stone-400" />
                <a
                  href="tel:08080913334"
                  className="hover:text-white transition-colors"
                >
                  0808 091 3334
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-4 h-4 mt-1 text-stone-400" />
                <a
                  href="mailto:praestantiaconsult@gmail.com"
                  className="hover:text-white transition-colors break-all"
                >
                  praestantiaconsult@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 mt-1 text-stone-400" />
                <span className="text-stone-400 leading-relaxed">
                  Behind Davitech Oil, Lekki-Epe Expressway, Lagos
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-stone-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-stone-500">
            © {new Date().getFullYear()} Praestantia Consulting Limited. All rights
            reserved.
          </p>
          <div className="flex gap-6 text-xs">
            <Link
              href="/privacy"
              className="hover:text-white transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="hover:text-white transition-colors"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
