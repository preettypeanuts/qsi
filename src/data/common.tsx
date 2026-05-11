// data/common.tsx

import {
    Building2,
    Camera,
    Mail,
    MapPin,
    Phone,
} from "lucide-react";

export const commonData = {
    footer: {
        company: {
            name: "Qualified Sertifikasi Indonesia",
            tagline:
                "Professional Certification Services for Sustainable Business Excellence",

            description:
                "PT. Qualified Sertifikasi Indonesia (QSI) adalah lembaga sertifikasi sistem manajemen internasional yang berkomitmen menghadirkan proses audit dan sertifikasi yang profesional, independen, dan terpercaya.",

            logo: "/logo.png",
        },

        navigation: [
            {
                label: "Beranda",
                href: "/",
            },
            {
                label: "Tentang Kami",
                href: "/tentang-kami",
            },
            {
                label: "Layanan",
                href: "/Layanan",
            },
            {
                label: "Cek Sertifikat",
                href: "/cek-sertifikat"
            },

            {
                label: "Kontak",
                href: "/kontak",
            },
        ],

        services: [
            {
                label: "ISO 9001",
                href: "/layanan/iso-9001",
            },
            {
                label: "ISO 14001",
                href: "/layanan/iso-14001",
            },
            {
                label: "ISO 45001",
                href: "/layanan/iso-45001",
            },
            {
                label: "ISO 22000",
                href: "/layanan/iso-22000",
            },
            {
                label: "ISO 27001",
                href: "/layanan/iso-27001",
            },
            {
                label: "HACCP",
                href: "/layanan/haccp",
            },
              {
                label: "Cek Semua Layanan",
                href: "/layanan",
            },
        ],

        contact: [
            {
                icon: MapPin,
                label: "Address",
                value: "Jakarta, Indonesia",
                href: "#",
            },
            {
                icon: Phone,
                label: "Phone",
                value: "+62 812 0000 0000",
                href: "tel:+6281200000000",
            },
            {
                icon: Mail,
                label: "Email",
                value: "info@qsi-certification.com",
                href: "mailto:info@qsi-certification.com",
            },
            {
                icon: Camera,
                label: "Instagram",
                value: "@qsi.certification",
                href: "https://instagram.com",
            },
        ],

        legal: [
            {
                label: "Privacy Policy",
                href: "/privacy-policy",
            },
            {
                label: "Terms & Conditions",
                href: "/terms-and-conditions",
            },
        ],

        cta: {
            title: "Start Your Certification Journey",
            button: "Free Consultation",
            href: "/contact",
        },
    },
};