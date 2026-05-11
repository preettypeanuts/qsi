import type { Metadata } from "next";

import { ContactSection } from "@/components/contact-section";
import { FaqContact } from "@/components/faq";
import { Maps } from "@/components/maps";
import { ReusablePageHero } from "@/components/page-hero";

import { pageHeroData } from "@/data/page-hero-data";
import { Reveal } from "@/components/animate-reveal";

export const metadata: Metadata = {
    title:
        "Kontak Qualified Sertifikasi Indonesia",

    description:
        "Hubungi Qualified Sertifikasi Indonesia untuk konsultasi sertifikasi ISO, audit, dan layanan sertifikasi profesional di Indonesia. Tim kami siap membantu kebutuhan organisasi Anda.",

    keywords: [
        "Kontak QSI",
        "Qualified Sertifikasi Indonesia",
        "Konsultasi ISO",
        "Sertifikasi ISO Indonesia",
        "Lembaga Sertifikasi",
        "Audit ISO",
        "Kontak Sertifikasi ISO",
        "ISO 9001 Indonesia",
        "ISO 14001",
        "ISO 45001",
    ],

    openGraph: {
        title:
            "Kontak Qualified Sertifikasi Indonesia | Konsultasi Sertifikasi ISO",

        description:
            "Hubungi tim profesional QSI untuk kebutuhan sertifikasi ISO, audit, dan konsultasi bisnis Anda.",

        url: "https://qsi-certification.com/contact",

        siteName: "Qualified Sertifikasi Indonesia",

        locale: "id_ID",

        type: "website",

        images: [
            {
                url: "/og-images.webp",
                width: 1200,
                height: 630,
                alt: "Contact Qualified Sertifikasi Indonesia",
            },
        ],
    },

    twitter: {
        card: "summary_large_image",

        title:
            "Kontak Qualified Sertifikasi Indonesia",

        description:
            "Konsultasikan kebutuhan sertifikasi ISO perusahaan Anda bersama tim profesional QSI.",

        images: ["/og-images.webp"],
    },

    alternates: {
        canonical: "/contact",
    },

    robots: {
        index: true,
        follow: true,
    },
};

export default function KontakPage() {
    const t = pageHeroData.contact;

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
                <ContactSection />
            </Reveal>
            <Reveal variant="fade-up" delay={200}>
                <Maps />
            </Reveal>
            <Reveal variant="fade-up" delay={200}>
                <FaqContact />
            </Reveal>
        </>
    );
}