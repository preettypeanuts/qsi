import type { Metadata } from "next";

import { CompanyStory } from "@/components/company-story";
import { CoreValues } from "@/components/core-value";
import { CTA } from "@/components/cta";
import { ReusablePageHero } from "@/components/page-hero";
import { VisionMission } from "@/components/visi-misi";

import { pageHeroData } from "@/data/page-hero-data";
import { Reveal } from "@/components/animate-reveal";

export const metadata: Metadata = {
    title:
        "Tentang Qualified Sertifikasi Indonesia",

    description:
        "Pelajari lebih lanjut tentang Qualified Sertifikasi Indonesia sebagai lembaga sertifikasi ISO profesional di Indonesia dengan komitmen terhadap kualitas, integritas, dan layanan sertifikasi terpercaya.",

    keywords: [
        "Tentang QSI",
        "Qualified Sertifikasi Indonesia",
        "Lembaga Sertifikasi ISO",
        "Sertifikasi ISO Indonesia",
        "Audit ISO",
        "ISO Certification Body",
        "Visi Misi QSI",
        "Perusahaan Sertifikasi",
    ],

    openGraph: {
        title:
            "Tentang Qualified Sertifikasi Indonesia | Professional ISO Certification Body",

        description:
            "QSI hadir sebagai lembaga sertifikasi profesional yang membantu berbagai industri mencapai standar internasional secara terpercaya dan independen.",

        url: "https://qsi-certification.com/about",

        siteName: "Qualified Sertifikasi Indonesia",

        locale: "id_ID",

        type: "website",

        images: [
            {
                url: "/og-images.webp",
                width: 1200,
                height: 630,
                alt: "About Qualified Sertifikasi Indonesia",
            },
        ],
    },

    twitter: {
        card: "summary_large_image",

        title:
            "Tentang Qualified Sertifikasi Indonesia",

        description:
            "Kenali visi, misi, nilai perusahaan, dan komitmen QSI dalam menyediakan layanan sertifikasi ISO profesional.",

        images: ["/og-images.webp"],
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
            <Reveal variant="fade-up" delay={200}>
                <CompanyStory />
            </Reveal>
            <Reveal variant="fade-up" delay={200}>
                <VisionMission />
            </Reveal>
            <Reveal variant="fade-up" delay={200}>
                <CoreValues />
            </Reveal>
            <Reveal variant="fade-up" delay={200}>
                <CTA />
            </Reveal>
        </>
    );
}