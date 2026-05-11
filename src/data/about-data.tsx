// data/about-data.tsx

import {
    Award,
    BadgeCheck,
    BriefcaseBusiness,
    Building2,
    CheckCircle2,
    Globe,
    Handshake,
    Lightbulb,
    ShieldCheck,
    Sparkles,
    Target,
    Users,
} from "lucide-react";

export const aboutPageData = {
    companyStory: {
        badge: "Company Story",

        title:
            "Driven By Trust, Built For Professional Certification Excellence",

        description:
            "QSI didirikan atas komitmen kuat terhadap pentingnya penerapan sistem manajemen di setiap organisasi dengan menghadirkan layanan sertifikasi yang independen, konsisten, dan terpercaya.",

        image:
            "/about.webp",

        timeline: [
            {
                year: "2018",
                title: "QSI Established",
                description:
                    "Memulai layanan sertifikasi sistem manajemen dengan fokus pada kualitas dan profesionalisme.",
            },

            {
                year: "2020",
                title: "National Expansion",
                description:
                    "Melayani berbagai sektor industri di berbagai wilayah Indonesia.",
            },

            {
                year: "2022",
                title: "International Standards",
                description:
                    "Mengembangkan layanan sertifikasi berbasis standar internasional ISO.",
            },

            {
                year: "2025",
                title: "Trusted Certification Partner",
                description:
                    "Menjadi partner terpercaya bagi perusahaan dalam meningkatkan kredibilitas bisnis.",
            },
        ],
    },

    visionMission: {
        badge: "Vision & Mission",

        title:
            "Building Reliable Certification Services For Sustainable Business Growth",

        vision: {
            icon: Target,

            title: "Our Vision",

            description:
                "Menjadi lembaga penilaian kesesuaian terdepan di Indonesia dengan layanan sertifikasi sistem manajemen yang profesional, kompeten, dan terpercaya.",
        },

        missions: [
            {
                icon: BadgeCheck,

                title:
                    "Mengembangkan sistem sesuai ISO/IEC 17021-1:2015",
            },

            {
                icon: Users,

                title:
                    "Membangun SDM profesional dan kompeten",
            },

            {
                icon: Handshake,

                title:
                    "Fokus pada kebutuhan pelanggan",
            },

            {
                icon: Globe,

                title:
                    "Menyediakan layanan sertifikasi berstandar internasional",
            },
        ],
    },

    coreValues: {
        badge: "Core Values",

        title:
            "The Principles That Shape Every Certification Process",

        values: [
            {
                icon: ShieldCheck,
                title: "Integrity",
                description:
                    "Menjunjung tinggi kejujuran, independensi, dan etika profesional.",
            },

            {
                icon: BriefcaseBusiness,
                title: "Professionalism",
                description:
                    "Memberikan layanan dengan standar kerja profesional dan kompeten.",
            },

            {
                icon: Handshake,
                title: "Trust",
                description:
                    "Membangun hubungan yang terpercaya dengan seluruh klien dan mitra.",
            },

            {
                icon: Award,
                title: "Excellence",
                description:
                    "Berkomitmen menghadirkan kualitas layanan terbaik secara konsisten.",
            },

            {
                icon: CheckCircle2,
                title: "Commitment",
                description:
                    "Fokus terhadap kepuasan pelanggan dan keberhasilan sertifikasi.",
            },

            {
                icon: Lightbulb,
                title: "Innovation",
                description:
                    "Terus berkembang mengikuti kebutuhan industri modern.",
            },
        ],
    },

    whyTrustQSI: {
        badge: "Why Trust QSI",

        title:
            "Professional Certification Partner Trusted Across Industries",

        features: [
            {
                icon: ShieldCheck,
                title: "Independent Certification Body",
            },

            {
                icon: BadgeCheck,
                title: "ISO/IEC 17021-1 Based System",
            },

            {
                icon: Users,
                title: "Experienced Professional Auditors",
            },

            {
                icon: Building2,
                title: "Serving Various Industries",
            },

            {
                icon: Sparkles,
                title: "Fast & Transparent Process",
            },

            {
                icon: Globe,
                title: "International Standard Services",
            },
        ],

        stats: [
            {
                value: "500+",
                label: "Certified Organizations",
            },

            {
                value: "10+",
                label: "Supported Industries",
            },

            {
                value: "50+",
                label: "Professional Auditors",
            },
        ],

        certifications: [
            "ISO/IEC 17021-1:2015",
            "International Management System",
            "Professional Audit Process",
            "Reliable Certification Services",
        ],
    },
};