import type { Metadata } from "next";
import { Inter, DM_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://praestantia-consulting.vercel.app"),

  title: {
    default: "Chartered Accountant in Lagos | Praestantia Consulting",
    template: "%s | Praestantia Consulting",
  },

  description:
    "Professional accounting services for Lagos businesses and startups. 25 years experience in tax advisory, payroll, bookkeeping, and compliance. ICAN & CITN certified.",

  keywords: [
    "chartered accountant Lagos",
    "accounting firm Lagos",
    "tax advisory Lagos",
    "payroll services Lagos",
    "bookkeeping Lagos",
    "accounting for startups Nigeria",
    "VAT filing Nigeria",
    "ICAN accountant",
  ],

  authors: [{ name: "Praestantia Consulting Limited" }],

  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },

  openGraph: {
    type: "website",
    locale: "en_NG",
    url: "https://praestantia-consulting.vercel.app",
    siteName: "Praestantia Consulting",
    title: "Chartered Accountant in Lagos | Praestantia Consulting",
    description:
      "Professional accounting services for Lagos businesses and startups. 25 years experience.",
    images: [
      {
        url: "/accountant-og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Praestantia Consulting - Professional Accounting Services",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Chartered Accountant in Lagos | Praestantia Consulting",
    description:
      "Professional accounting services for Lagos businesses and startups.",
    images: ["/accountant-og-image.jpg"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${dmSans.variable}`}>
      <body className="antialiased">

  <Header />
  <main className="flex-1">{children}</main>
  <Footer />
</body>

    </html>
  );
}
