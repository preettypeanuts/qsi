import type { Metadata } from "next";

import { CompanyStory } from "@/components/company-story";
import { CoreValues } from "@/components/core-value";
import { CTA } from "@/components/cta";
import { ReusablePageHero } from "@/components/page-hero";
import { VisionMission } from "@/components/visi-misi";

import { pageHeroData } from "@/data/page-hero-data";

export const metadata: Metadata = {
    title:
        "Tentang QSI Certification",

    description:
        "Pelajari lebih lanjut tentang QSI Certification sebagai lembaga sertifikasi ISO profesional di Indonesia dengan komitmen terhadap kualitas, integritas, dan layanan sertifikasi terpercaya.",

    keywords: [
        "Tentang QSI",
        "QSI Certification",
        "Lembaga Sertifikasi ISO",
        "Sertifikasi ISO Indonesia",
        "Audit ISO",
        "ISO Certification Body",
        "Visi Misi QSI",
        "Perusahaan Sertifikasi",
    ],

    openGraph: {
        title:
            "Tentang QSI Certification | Professional ISO Certification Body",

        description:
            "QSI hadir sebagai lembaga sertifikasi profesional yang membantu berbagai industri mencapai standar internasional secara terpercaya dan independen.",

        url: "https://qsi-certification.com/about",

        siteName: "QSI Certification",

        locale: "id_ID",

        type: "website",

        images: [
            {
                url: "/og/about-og.jpg",
                width: 1200,
                height: 630,
                alt: "About QSI Certification",
            },
        ],
    },

    twitter: {
        card: "summary_large_image",

        title:
            "Tentang QSI Certification",

        description:
            "Kenali visi, misi, nilai perusahaan, dan komitmen QSI dalam menyediakan layanan sertifikasi ISO profesional.",

        images: ["/og/about-og.jpg"],
    },

    alternates: {
        canonical: "/about",
    },

    robots: {
        index: true,
        follow: true,
    },
};

export default function AboutUsPage() {
    const t = pageHeroData.about;

    return (
        <>
            <ReusablePageHero
                badge={t.badge}
                title={t.title}
                description={t.description}
                image={t.image}
                breadcrumbs={t.breadcrumbs}
            />

            <CompanyStory />

            <VisionMission />

            <CoreValues />

            <CTA />
        </>
    );
}