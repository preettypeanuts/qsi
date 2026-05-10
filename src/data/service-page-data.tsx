// data/services-page-data.tsx

import {
    Activity,
    BadgeCheck,
    Banknote,
    Beaker,
    Building2,
    Factory,
    FileCheck2,
    Flame,
    Globe,
    GraduationCap,
    HeartPulse,
    Leaf,
    Lock,
    ShieldCheck,
    Truck,
    UtensilsCrossed,
} from "lucide-react";

export const servicesPageData = {
    hero: {
        badge: "Certification Services",

        title:
            "International ISO Certification Services For Modern Industries",

        description:
            "QSI menyediakan layanan sertifikasi sistem manajemen internasional yang profesional, independen, dan terpercaya untuk membantu bisnis meningkatkan kualitas, kepatuhan, dan kredibilitas.",

        image:
            "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a",
    },

    services: [
        {
            id: 1,

            slug: "iso-9001",

            icon: BadgeCheck,

            name: "ISO 9001",

            shortDescription:
                "Sistem Manajemen Mutu untuk meningkatkan kualitas proses dan kepuasan pelanggan.",

            image:
                "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40",

            overview:
                "ISO 9001 membantu organisasi membangun sistem manajemen mutu yang konsisten untuk meningkatkan efisiensi operasional dan kepuasan pelanggan.",

            benefits: [
                "Meningkatkan kualitas produk dan layanan",
                "Meningkatkan kepuasan pelanggan",
                "Meningkatkan efisiensi proses bisnis",
                "Memperkuat kredibilitas perusahaan",
            ],

            targetIndustries: [
                "Manufacturing",
                "Healthcare",
                "Construction",
                "Education",
            ],

            certificationProcess: [
                "Consultation",
                "Document Review",
                "Audit Process",
                "Certification Decision",
            ],

            estimatedTimeline: "1-3 Months",

            faq: [
                {
                    question:
                        "Apa manfaat utama ISO 9001?",
                    answer:
                        "Meningkatkan kualitas operasional dan kepuasan pelanggan.",
                },

                {
                    question:
                        "Apakah cocok untuk UMKM?",
                    answer:
                        "Ya, ISO 9001 dapat diterapkan oleh bisnis skala kecil hingga besar.",
                },
            ],

            cta: "Start ISO 9001 Certification",
        },

        {
            id: 2,

            slug: "iso-14001",

            icon: Leaf,

            name: "ISO 14001",

            shortDescription:
                "Sistem Manajemen Lingkungan untuk pengelolaan dampak lingkungan.",

            image:
                "https://images.unsplash.com/photo-1497436072909-f5e4be5584d3",

            overview:
                "ISO 14001 membantu organisasi mengelola dampak lingkungan secara sistematis dan berkelanjutan.",

            benefits: [
                "Mengurangi dampak lingkungan",
                "Meningkatkan kepatuhan regulasi",
                "Meningkatkan citra perusahaan",
                "Efisiensi penggunaan sumber daya",
            ],

            targetIndustries: [
                "Manufacturing",
                "Energy",
                "Agriculture",
            ],

            certificationProcess: [
                "Gap Analysis",
                "Implementation",
                "Audit",
                "Certification",
            ],

            estimatedTimeline: "2-4 Months",

            faq: [
                {
                    question:
                        "Apakah ISO 14001 wajib?",
                    answer:
                        "Tidak wajib, namun sangat direkomendasikan untuk industri dengan dampak lingkungan.",
                },
            ],

            cta: "Get ISO 14001 Certified",
        },

        {
            id: 3,

            slug: "iso-45001",

            icon: ShieldCheck,

            name: "ISO 45001",

            shortDescription:
                "Sistem Manajemen Keselamatan dan Kesehatan Kerja.",

            image:
                "https://images.unsplash.com/photo-1504307651254-35680f356dfd",

            overview:
                "ISO 45001 membantu perusahaan menciptakan lingkungan kerja yang aman dan sehat.",

            benefits: [
                "Mengurangi risiko kecelakaan kerja",
                "Meningkatkan keselamatan karyawan",
                "Kepatuhan terhadap regulasi K3",
            ],

            targetIndustries: [
                "Construction",
                "Manufacturing",
                "Logistics",
            ],

            certificationProcess: [
                "Risk Assessment",
                "Implementation",
                "Audit",
                "Certification",
            ],

            estimatedTimeline: "2-4 Months",

            faq: [],

            cta: "Start ISO 45001 Certification",
        },

        {
            id: 4,

            slug: "iso-39001",

            icon: Truck,

            name: "ISO 39001",

            shortDescription:
                "Sistem Manajemen Keselamatan Lalu Lintas Jalan.",

            image:
                "https://images.unsplash.com/photo-1502877338535-766e1452684a",

            overview:
                "Membantu organisasi meningkatkan keselamatan transportasi dan lalu lintas jalan.",

            benefits: [
                "Mengurangi risiko kecelakaan",
                "Meningkatkan keselamatan transportasi",
            ],

            targetIndustries: [
                "Logistics",
                "Transportation",
            ],

            certificationProcess: [
                "Consultation",
                "Implementation",
                "Audit",
            ],

            estimatedTimeline: "1-2 Months",

            faq: [],

            cta: "Apply ISO 39001",
        },

        {
            id: 5,

            slug: "iso-22000",

            icon: UtensilsCrossed,

            name: "ISO 22000",

            shortDescription:
                "Sistem Manajemen Keamanan Pangan.",

            image:
                "https://images.unsplash.com/photo-1504674900247-0877df9cc836",

            overview:
                "Standar internasional untuk memastikan keamanan pangan di seluruh rantai pasok.",

            benefits: [
                "Meningkatkan keamanan pangan",
                "Meningkatkan kepercayaan pelanggan",
            ],

            targetIndustries: [
                "Food & Beverage",
                "Agriculture",
            ],

            certificationProcess: [
                "Gap Analysis",
                "Audit",
                "Certification",
            ],

            estimatedTimeline: "2-3 Months",

            faq: [],

            cta: "Get ISO 22000 Certified",
        },

        {
            id: 6,

            slug: "iso-27001",

            icon: Lock,

            name: "ISO 27001",

            shortDescription:
                "Sistem Manajemen Keamanan Informasi.",

            image:
                "https://images.unsplash.com/photo-1516321318423-f06f85e504b3",

            overview:
                "Membantu organisasi melindungi data dan sistem informasi secara efektif.",

            benefits: [
                "Perlindungan data perusahaan",
                "Mengurangi risiko kebocoran data",
            ],

            targetIndustries: [
                "Technology",
                "Banking",
                "Government",
            ],

            certificationProcess: [
                "Assessment",
                "Implementation",
                "Audit",
            ],

            estimatedTimeline: "2-4 Months",

            faq: [],

            cta: "Start ISO 27001 Certification",
        },

        {
            id: 7,
            slug: "iso-50001",
            icon: Flame,
            name: "ISO 50001",
            shortDescription:
                "Sistem Manajemen Energi.",
            image:
                "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e",
            overview:
                "Membantu organisasi meningkatkan efisiensi energi.",
            benefits: [
                "Mengurangi biaya energi",
                "Efisiensi operasional",
            ],
            targetIndustries: ["Energy", "Manufacturing"],
            certificationProcess: [
                "Consultation",
                "Audit",
            ],
            estimatedTimeline: "2-3 Months",
            faq: [],
            cta: "Get ISO 50001 Certified",
        },

        {
            id: 8,
            slug: "iso-37001",
            icon: Banknote,
            name: "ISO 37001",
            shortDescription:
                "Sistem Manajemen Anti Penyuapan.",
            image:
                "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c",
            overview:
                "Membantu organisasi mencegah praktik penyuapan.",
            benefits: [
                "Meningkatkan transparansi",
                "Mencegah korupsi",
            ],
            targetIndustries: ["Government", "Corporate"],
            certificationProcess: [
                "Assessment",
                "Audit",
            ],
            estimatedTimeline: "1-3 Months",
            faq: [],
            cta: "Apply ISO 37001",
        },

        {
            id: 9,
            slug: "iso-21000",
            icon: GraduationCap,
            name: "ISO 21000",
            shortDescription:
                "Sistem Manajemen Pendidikan.",
            image:
                "https://images.unsplash.com/photo-1523240795612-9a054b0db644",
            overview:
                "Standar manajemen untuk institusi pendidikan.",
            benefits: [
                "Meningkatkan kualitas pendidikan",
            ],
            targetIndustries: ["Education"],
            certificationProcess: [
                "Implementation",
                "Audit",
            ],
            estimatedTimeline: "2 Months",
            faq: [],
            cta: "Get ISO 21000 Certified",
        },

        {
            id: 10,
            slug: "iso-13485",
            icon: HeartPulse,
            name: "ISO 13485",
            shortDescription:
                "Sistem Manajemen Peralatan Medis.",
            image:
                "https://images.unsplash.com/photo-1586773860418-d37222d8fce3",
            overview:
                "Standar kualitas untuk industri alat kesehatan.",
            benefits: [
                "Kualitas alat medis lebih baik",
            ],
            targetIndustries: ["Healthcare"],
            certificationProcess: [
                "Audit",
                "Certification",
            ],
            estimatedTimeline: "2-4 Months",
            faq: [],
            cta: "Start ISO 13485",
        },

        {
            id: 11,
            slug: "iso-17025",
            icon: Beaker,
            name: "ISO 17025",
            shortDescription:
                "Sistem Manajemen Mutu Laboratorium.",
            image:
                "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69",
            overview:
                "Standar kompetensi laboratorium pengujian dan kalibrasi.",
            benefits: [
                "Meningkatkan kredibilitas laboratorium",
            ],
            targetIndustries: ["Laboratory"],
            certificationProcess: [
                "Assessment",
                "Audit",
            ],
            estimatedTimeline: "2-3 Months",
            faq: [],
            cta: "Apply ISO 17025",
        },

        {
            id: 12,
            slug: "haccp",
            icon: FileCheck2,
            name: "HACCP",
            shortDescription:
                "Hazard Analysis and Critical Control Points.",
            image:
                "https://images.unsplash.com/photo-1498837167922-ddd27525d352",
            overview:
                "Sistem keamanan pangan berbasis analisis risiko.",
            benefits: [
                "Keamanan pangan terjamin",
            ],
            targetIndustries: ["Food & Beverage"],
            certificationProcess: [
                "Review",
                "Audit",
            ],
            estimatedTimeline: "1-2 Months",
            faq: [],
            cta: "Start HACCP Certification",
        },

        {
            id: 13,
            slug: "gdp",
            icon: Globe,
            name: "GDP",
            shortDescription:
                "Good Distribution Product.",
            image:
                "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d",
            overview:
                "Standar distribusi produk yang baik dan aman.",
            benefits: [
                "Distribusi lebih aman",
            ],
            targetIndustries: ["Logistics", "Healthcare"],
            certificationProcess: [
                "Assessment",
                "Certification",
            ],
            estimatedTimeline: "1-2 Months",
            faq: [],
            cta: "Apply GDP Certification",
        },
    ],
};

export const industriesPageData = {
    industries: [
        {
            icon: Factory,
            name: "Manufacturing",
        },

        {
            icon: UtensilsCrossed,
            name: "Food & Beverage",
        },

        {
            icon: HeartPulse,
            name: "Healthcare",
        },

        {
            icon: GraduationCap,
            name: "Education",
        },

        {
            icon: Truck,
            name: "Logistics",
        },

        {
            icon: Building2,
            name: "Construction",
        },

        {
            icon: Flame,
            name: "Energy",
        },

        {
            icon: Beaker,
            name: "Laboratory",
        },

        {
            icon: Globe,
            name: "Government Institution",
        },

        {
            icon: Leaf,
            name: "Agriculture",
        },
    ],
};

export const processPageData = {
    intro: {
        title:
            "Transparent & Professional Certification Process",

        description:
            "QSI menjalankan proses sertifikasi secara profesional, transparan, dan sesuai standar internasional.",
    },

    timeline: [
        "Consultation",
        "Application",
        "Document Review",
        "Stage 1 Audit",
        "Stage 2 Audit",
        "Corrective Action",
        "Certification Decision",
        "Certificate Issuance",
        "Surveillance Audit",
    ],

    estimatedTimeline: [
        {
            business: "Small Business",
            duration: "1-2 Months",
        },

        {
            business: "Medium Business",
            duration: "2-4 Months",
        },

        {
            business: "Enterprise",
            duration: "4-6 Months",
        },
    ],

    cta: {
        title:
            "Start Your Certification Journey Today",

        button: "Start Consultation",
    },
};