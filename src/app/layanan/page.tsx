import type { Metadata } from "next";

import { FaqService } from "@/components/faq-service";
import { ReusablePageHero } from "@/components/page-hero";
import { ServicesGrid } from "@/components/service-grid";

import { pageHeroData } from "@/data/page-hero-data";

export const metadata: Metadata = {
    title:
        "Layanan Sertifikasi ISO Indonesia",

    description:
        "Temukan layanan sertifikasi ISO profesional dari QSI mulai dari ISO 9001, ISO 14001, ISO 45001, ISO 27001, HACCP, GDP, hingga standar internasional lainnya untuk berbagai industri di Indonesia.",

    keywords: [
        "Layanan ISO",
        "Sertifikasi ISO Indonesia",
        "ISO 9001",
        "ISO 14001",
        "ISO 45001",
        "ISO 27001",
        "ISO 22000",
        "ISO 37001",
        "ISO 17025",
        "HACCP",
        "GDP",
        "Audit Sertifikasi",
        "Lembaga Sertifikasi ISO",
        "QSI Certification",
    ],

    openGraph: {
        title:
            "Layanan Sertifikasi ISO Profesional | QSI Certification",

        description:
            "Layanan sertifikasi ISO terpercaya untuk meningkatkan kualitas, keamanan, efisiensi, dan kredibilitas bisnis Anda.",

        url: "https://qsi-certification.com/services",

        siteName: "QSI Certification",

        locale: "id_ID",

        type: "website",

        images: [
            {
                url: "/og/services-og.jpg",
                width: 1200,
                height: 630,
                alt: "QSI Certification Services",
            },
        ],
    },

    twitter: {
        card: "summary_large_image",

        title:
            "Layanan Sertifikasi ISO Profesional | QSI Certification",

        description:
            "Jelajahi layanan sertifikasi ISO internasional untuk berbagai kebutuhan industri modern.",

        images: ["/og/services-og.jpg"],
    },

    alternates: {
        canonical: "/services",
    },

    robots: {
        index: true,
        follow: true,
    },
};

export default function LayananPage() {
    const t = pageHeroData.services;

    return (
        <>
            <ReusablePageHero
                badge={t.badge}
                title={t.title}
                description={t.description}
                image={t.image}
                breadcrumbs={t.breadcrumbs}
            />

            <ServicesGrid />

            <FaqService />
        </>
    );
}