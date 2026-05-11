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
                label: "Home",
                href: "/",
            },
            {
                label: "About",
                href: "/about",
            },
            {
                label: "Services",
                href: "/services",
            },
            {
                label: "Industries",
                href: "/industries",
            },
            {
                label: "Process",
                href: "/process",
            },
            {
                label: "Blog",
                href: "/blog",
            },
            {
                label: "Contact",
                href: "/contact",
            },
        ],

        services: [
            {
                label: "ISO 9001",
                href: "/services/iso-9001",
            },
            {
                label: "ISO 14001",
                href: "/services/iso-14001",
            },
            {
                label: "ISO 45001",
                href: "/services/iso-45001",
            },
            {
                label: "ISO 22000",
                href: "/services/iso-22000",
            },
            {
                label: "ISO 27001",
                href: "/services/iso-27001",
            },
            {
                label: "HACCP",
                href: "/services/haccp",
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