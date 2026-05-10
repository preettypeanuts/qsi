import type { Metadata } from "next";

import { CertificationProcess } from "@/components/certification-process";
import { CTA } from "@/components/cta";
import { HeroHome } from "@/components/hero-home";
import { ServicesPreview } from "@/components/service-preview";
import { ShortAbout } from "@/components/short-about";
import { WhyUs } from "@/components/why-us";

export const metadata: Metadata = {
  title:
    "Professional ISO Certification Services Indonesia",

  description:
    "QSI menyediakan layanan sertifikasi ISO profesional dan terpercaya untuk berbagai industri di Indonesia. Mulai dari ISO 9001, ISO 14001, ISO 45001, HACCP, hingga ISO 27001.",

  keywords: [
    "ISO Indonesia",
    "Sertifikasi ISO",
    "ISO 9001",
    "ISO 14001",
    "ISO 45001",
    "ISO 27001",
    "HACCP",
    "Lembaga Sertifikasi",
    "Audit ISO",
  ],

  openGraph: {
    title:
      "QSI Certification | Professional ISO Certification Services",

    description:
      "Trusted ISO certification services for businesses and industries across Indonesia.",

    url: "https://qsi-certification.com",

    siteName: "QSI Certification",

    locale: "id_ID",

    type: "website",

    images: [
      {
        url: "/og/home-og.jpg",
        width: 1200,
        height: 630,
        alt: "QSI Certification Homepage",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title:
      "QSI Certification | Professional ISO Certification Services",

    description:
      "Professional ISO certification services trusted by modern businesses in Indonesia.",

    images: ["/og/home-og.jpg"],
  },

  alternates: {
    canonical: "/",
  },
};

export default function Home() {
  return (
    <>
      <HeroHome />
      <ShortAbout />
      <WhyUs />
      <ServicesPreview />
      <CertificationProcess />
      <CTA />
    </>
  );
}