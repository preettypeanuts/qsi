import { CekSertifikat } from "@/components/cek-sertifikat";
import type { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
    title:
        "Cek Sertifikat ISO Resmi | Verifikasi Sertifikat Qualified Sertifikasi Indonesia",
    description:
        "Verifikasi keaslian sertifikat ISO resmi dari Qualified Sertifikasi Indonesia secara online. Cek status aktif sertifikasi ISO 9001, ISO 14001, ISO 45001, ISO 22000, dan standar internasional lainnya.",

    keywords: [
        "cek sertifikat ISO",
        "verifikasi sertifikat ISO",
        "Qualified Sertifikasi Indonesia",
        "sertifikat ISO resmi",
        "validasi sertifikat",
        "ISO 9001",
        "ISO 14001",
        "ISO 45001",
        "sertifikasi ISO Indonesia",
        "cek keaslian sertifikat",
    ],

    alternates: {
        canonical: "https://qsicerti.co.id/cek-sertifikat",
    },

    openGraph: {
        title:
            "Cek Sertifikat ISO Resmi | Qualified Sertifikasi Indonesia",
        description:
            "Verifikasi keaslian dan status sertifikat ISO resmi yang diterbitkan oleh Qualified Sertifikasi Indonesia.",
        url: "https://qsicerti.co.id/cek-sertifikat",
        siteName: "Qualified Sertifikasi Indonesia",
        locale: "id_ID",
        type: "website",
        images: [
            {
                url: "/og/cek-sertifikat.jpg",
                width: 1200,
                height: 630,
                alt: "Cek Sertifikat ISO Qualified Sertifikasi Indonesia",
            },
        ],
    },

    twitter: {
        card: "summary_large_image",
        title:
            "Cek Sertifikat ISO Resmi | Qualified Sertifikasi Indonesia",
        description:
            "Verifikasi sertifikat ISO resmi secara online dengan sistem validasi Qualified Sertifikasi Indonesia.",
        images: ["/og/cek-sertifikat.jpg"],
    },

    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            "max-image-preview": "large",
            "max-video-preview": -1,
            "max-snippet": -1,
        },
    },

    category: "Certification",
};

export default function Page() {
    return (
        <>
            {/* JSON-LD Structured Data */}
            <Script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "WebPage",
                        name: "Cek Sertifikat ISO QSI",
                        url: "https://qsicerti.co.id/cek-sertifikat",
                        description:
                            "Halaman verifikasi sertifikat ISO resmi Qualified Sertifikasi Indonesia.",
                        publisher: {
                            "@type": "Organization",
                            name: "Qualified Sertifikasi Indonesia",
                            url: "https://qsicerti.co.id",
                            logo: {
                                "@type": "ImageObject",
                                url: "https://qsicerti.co.id/logo.png",
                            },
                        },
                    }),
                }}
            />

            <CekSertifikat />
        </>
    );
}