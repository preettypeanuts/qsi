import type { Metadata } from "next";

import {
  Geist_Mono,
  Plus_Jakarta_Sans,
} from "next/font/google";

import "./globals.css";
import { Navbar } from "@/components/common/navbar";
import { FloatingButtons } from "@/components/common/floating-buttons";
import { Footer } from "@/components/common/footer";

const pjs = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://qsi-certification.com"),

  title: {
    default:
      "Qualified Sertifikasi Indonesia | Professional ISO Certification Services Indonesia",

    template: "%s | Qualified Sertifikasi Indonesia",
  },

  description:
    "QSI menyediakan layanan sertifikasi ISO profesional dan terpercaya di Indonesia untuk berbagai industri. Mulai dari ISO 9001, ISO 14001, ISO 45001, HACCP, hingga ISO 27001.",

  keywords: [
    "ISO Certification Indonesia",
    "Sertifikasi ISO",
    "ISO 9001",
    "ISO 14001",
    "ISO 45001",
    "ISO 27001",
    "HACCP",
    "Qualified Sertifikasi Indonesia",
    "Lembaga Sertifikasi ISO",
    "Audit ISO Indonesia",
  ],

  authors: [
    {
      name: "Qualified Sertifikasi Indonesia",
    },
  ],

  creator: "Qualified Sertifikasi Indonesia",

  publisher: "Qualified Sertifikasi Indonesia",

  applicationName: "Qualified Sertifikasi Indonesia",

  category: "Business",

  alternates: {
    canonical: "/",
  },

  openGraph: {
    title:
      "Qualified Sertifikasi Indonesia | Professional ISO Certification Services",

    description:
      "Professional ISO certification services for modern industries across Indonesia.",

    url: "https://qsi-certification.com",

    siteName: "Qualified Sertifikasi Indonesia",

    locale: "id_ID",

    type: "website",

    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Qualified Sertifikasi Indonesia",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Qualified Sertifikasi Indonesia | Professional ISO Certification Services",

    description:
      "Trusted ISO certification services for businesses and industries in Indonesia.",

    images: ["/og-image.jpg"],
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

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="id"
      className={`${pjs.className} ${geistMono.variable} h-full scroll-smooth antialiased`}
    >
      <body className="flex min-h-full flex-col bg-background text-foreground">
        <Navbar />

        <FloatingButtons />

        <main className="flex-1">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}