import {
    Award,
    BadgeCheck,
    Building2,
    ClipboardCheck,
    Factory,
    FlaskConical,
    Globe,
    GraduationCap,
    HeartPulse,
    Leaf,
    ShieldCheck,
    ShieldHalf,
    Truck,
    Users,
    Wheat,
    Zap,
} from "lucide-react";

export const servicesPageData = {
    hero: {
        title: "Professional ISO Certification Services",
        description:
            "QSI menyediakan layanan sertifikasi sistem manajemen internasional untuk membantu perusahaan meningkatkan kualitas, kepatuhan, keamanan, dan daya saing bisnis.",
        cta: {
            primary: "Free Consultation",
            secondary: "Explore Certifications",
        },
    },
};

export const servicesData = [
    {
        id: 1,
        name: "ISO 9001",
        slug: "iso-9001",
        shortName: "Quality Management System",
        icon: Award,

        image:
            "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a",

        overview:
            "Sistem Manajemen Mutu untuk meningkatkan kualitas proses, efisiensi operasional, dan kepuasan pelanggan.",

        shortDescription:
            "Meningkatkan kualitas bisnis dan kepuasan pelanggan melalui sistem manajemen mutu.",

        benefits: [
            "Meningkatkan kepuasan pelanggan",
            "Meningkatkan efisiensi operasional",
            "Mengurangi kesalahan proses",
            "Meningkatkan kredibilitas perusahaan",
        ],

        targetIndustries: [
            "Manufacturing",
            "Construction",
            "Healthcare",
            "Education",
            "Logistics",
        ],

        certificationProcess: [
            "Consultation",
            "Gap Analysis",
            "Document Review",
            "Stage 1 Audit",
            "Stage 2 Audit",
            "Certification Decision",
        ],

        estimatedTimeline: "1 - 3 Months",

        faq: [
            {
                question: "Apa manfaat ISO 9001?",
                answer:
                    "ISO 9001 membantu perusahaan meningkatkan kualitas layanan dan kepuasan pelanggan.",
            },
            {
                question: "Apakah ISO 9001 cocok untuk UMKM?",
                answer:
                    "Ya, ISO 9001 dapat diterapkan pada semua jenis organisasi termasuk UMKM.",
            },
        ],

        cta: {
            title: "Improve Your Business Quality Today",
            button: "Consult ISO 9001",
        },
    },

    {
        id: 2,
        name: "ISO 14001",
        slug: "iso-14001",
        shortName: "Environmental Management System",
        icon: Leaf,

        image:
            "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09",

        overview:
            "Sistem Manajemen Lingkungan untuk membantu organisasi mengelola dampak lingkungan secara efektif.",

        shortDescription:
            "Mengelola dampak lingkungan dengan sistem manajemen berstandar internasional.",

        benefits: [
            "Mengurangi dampak lingkungan",
            "Meningkatkan efisiensi energi",
            "Meningkatkan reputasi perusahaan",
            "Memenuhi regulasi lingkungan",
        ],

        targetIndustries: [
            "Manufacturing",
            "Energy",
            "Agriculture",
            "Construction",
        ],

        certificationProcess: [
            "Initial Consultation",
            "Environmental Review",
            "Documentation",
            "Audit Process",
            "Certification",
        ],

        estimatedTimeline: "2 - 4 Months",

        faq: [
            {
                question: "Mengapa ISO 14001 penting?",
                answer:
                    "ISO 14001 membantu perusahaan mengurangi dampak negatif terhadap lingkungan.",
            },
        ],

        cta: {
            title: "Build a Sustainable Business",
            button: "Consult ISO 14001",
        },
    },

    {
        id: 3,
        name: "ISO 45001",
        slug: "iso-45001",
        shortName: "Occupational Health & Safety",
        icon: ShieldHalf,

        image:
            "https://images.unsplash.com/photo-1504307651254-35680f356dfd",

        overview:
            "Sistem Manajemen Keselamatan dan Kesehatan Kerja untuk menciptakan lingkungan kerja yang aman.",

        shortDescription:
            "Melindungi tenaga kerja dengan sistem keselamatan dan kesehatan kerja internasional.",

        benefits: [
            "Mengurangi risiko kecelakaan kerja",
            "Meningkatkan keselamatan karyawan",
            "Meningkatkan kepatuhan regulasi",
            "Meningkatkan budaya keselamatan",
        ],

        targetIndustries: [
            "Construction",
            "Manufacturing",
            "Mining",
            "Energy",
        ],

        certificationProcess: [
            "Consultation",
            "Risk Assessment",
            "Documentation",
            "Audit",
            "Certification",
        ],

        estimatedTimeline: "2 - 5 Months",

        faq: [
            {
                question: "Apa tujuan ISO 45001?",
                answer:
                    "ISO 45001 bertujuan meningkatkan keselamatan dan kesehatan kerja di perusahaan.",
            },
        ],

        cta: {
            title: "Protect Your Workforce",
            button: "Consult ISO 45001",
        },
    },

    {
        id: 4,
        name: "ISO 39001",
        slug: "iso-39001",
        shortName: "Road Traffic Safety Management",
        icon: Truck,

        image:
            "https://images.unsplash.com/photo-1502877338535-766e1452684a",

        overview:
            "Sistem Manajemen Keselamatan Lalu Lintas Jalan untuk mengurangi risiko kecelakaan transportasi.",

        shortDescription:
            "Meningkatkan keselamatan lalu lintas dan sistem transportasi perusahaan.",

        benefits: [
            "Mengurangi risiko kecelakaan",
            "Meningkatkan keselamatan transportasi",
            "Meningkatkan kepatuhan operasional",
        ],

        targetIndustries: [
            "Logistics",
            "Transportation",
            "Distribution",
        ],

        certificationProcess: [
            "Consultation",
            "Traffic Risk Analysis",
            "Audit",
            "Certification",
        ],

        estimatedTimeline: "1 - 3 Months",

        faq: [],

        cta: {
            title: "Improve Road Safety Standards",
            button: "Consult ISO 39001",
        },
    },

    {
        id: 5,
        name: "ISO 22000",
        slug: "iso-22000",
        shortName: "Food Safety Management",
        icon: Wheat,

        image:
            "https://images.unsplash.com/photo-1506617564039-2f3b650b7010",

        overview:
            "Sistem Manajemen Keamanan Pangan untuk memastikan keamanan produk makanan.",

        shortDescription:
            "Meningkatkan keamanan pangan dengan standar internasional.",

        benefits: [
            "Menjamin keamanan pangan",
            "Meningkatkan kepercayaan pelanggan",
            "Mengurangi risiko kontaminasi",
        ],

        targetIndustries: [
            "Food & Beverage",
            "Agriculture",
            "Distribution",
        ],

        certificationProcess: [
            "Consultation",
            "Food Safety Assessment",
            "Audit",
            "Certification",
        ],

        estimatedTimeline: "2 - 4 Months",

        faq: [],

        cta: {
            title: "Ensure Food Safety Excellence",
            button: "Consult ISO 22000",
        },
    },

    {
        id: 6,
        name: "ISO 27001",
        slug: "iso-27001",
        shortName: "Information Security Management",
        icon: ShieldCheck,

        image:
            "https://images.unsplash.com/photo-1516321318423-f06f85e504b3",

        overview:
            "Sistem Manajemen Keamanan Informasi untuk melindungi data dan informasi perusahaan.",

        shortDescription:
            "Melindungi data bisnis dengan sistem keamanan informasi internasional.",

        benefits: [
            "Melindungi data perusahaan",
            "Mengurangi risiko cyber attack",
            "Meningkatkan kepercayaan client",
        ],

        targetIndustries: [
            "Technology",
            "Finance",
            "Healthcare",
            "Government",
        ],

        certificationProcess: [
            "Gap Analysis",
            "Implementation",
            "Audit",
            "Certification",
        ],

        estimatedTimeline: "2 - 6 Months",

        faq: [],

        cta: {
            title: "Secure Your Business Information",
            button: "Consult ISO 27001",
        },
    },

    {
        id: 7,
        name: "ISO 50001",
        slug: "iso-50001",
        shortName: "Energy Management System",
        icon: Zap,

        image:
            "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e",

        overview:
            "Sistem Manajemen Energi untuk meningkatkan efisiensi penggunaan energi.",

        shortDescription:
            "Mengoptimalkan penggunaan energi untuk efisiensi operasional.",

        benefits: [
            "Mengurangi biaya energi",
            "Meningkatkan efisiensi operasional",
            "Mengurangi emisi karbon",
        ],

        targetIndustries: [
            "Manufacturing",
            "Energy",
            "Industrial",
        ],

        certificationProcess: [
            "Energy Review",
            "Implementation",
            "Audit",
            "Certification",
        ],

        estimatedTimeline: "2 - 4 Months",

        faq: [],

        cta: {
            title: "Optimize Your Energy Efficiency",
            button: "Consult ISO 50001",
        },
    },

    {
        id: 8,
        name: "ISO 37001",
        slug: "iso-37001",
        shortName: "Anti-Bribery Management",
        icon: BadgeCheck,

        image:
            "https://images.unsplash.com/photo-1521791136064-7986c2920216",

        overview:
            "Sistem Manajemen Anti Penyuapan untuk meningkatkan tata kelola perusahaan.",

        shortDescription:
            "Membangun sistem anti penyuapan yang profesional dan transparan.",

        benefits: [
            "Meningkatkan integritas perusahaan",
            "Mengurangi risiko penyuapan",
            "Meningkatkan kepercayaan stakeholder",
        ],

        targetIndustries: [
            "Government",
            "Finance",
            "Corporate",
        ],

        certificationProcess: [
            "Consultation",
            "Policy Development",
            "Audit",
            "Certification",
        ],

        estimatedTimeline: "2 - 5 Months",

        faq: [],

        cta: {
            title: "Build Integrity & Transparency",
            button: "Consult ISO 37001",
        },
    },

    {
        id: 9,
        name: "ISO 21001",
        slug: "iso-21001",
        shortName: "Educational Organization Management",
        icon: GraduationCap,

        image:
            "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f",

        overview:
            "Sistem Manajemen Organisasi Pendidikan untuk meningkatkan kualitas layanan pendidikan.",

        shortDescription:
            "Meningkatkan kualitas institusi pendidikan dengan standar internasional.",

        benefits: [
            "Meningkatkan kualitas pendidikan",
            "Meningkatkan kepuasan peserta didik",
            "Meningkatkan kredibilitas institusi",
        ],

        targetIndustries: [
            "Education",
            "Training Institution",
        ],

        certificationProcess: [
            "Consultation",
            "Implementation",
            "Audit",
            "Certification",
        ],

        estimatedTimeline: "2 - 4 Months",

        faq: [],

        cta: {
            title: "Improve Educational Standards",
            button: "Consult ISO 21001",
        },
    },

    {
        id: 10,
        name: "ISO 13485",
        slug: "iso-13485",
        shortName: "Medical Devices Management",
        icon: HeartPulse,

        image:
            "https://images.unsplash.com/photo-1581595219315-a187dd40c322",

        overview:
            "Sistem Manajemen Mutu untuk industri alat kesehatan dan perangkat medis.",

        shortDescription:
            "Meningkatkan kualitas dan keamanan perangkat medis.",

        benefits: [
            "Meningkatkan kualitas alat kesehatan",
            "Memenuhi regulasi internasional",
            "Meningkatkan keamanan produk",
        ],

        targetIndustries: [
            "Healthcare",
            "Medical Device",
        ],

        certificationProcess: [
            "Gap Analysis",
            "Implementation",
            "Audit",
            "Certification",
        ],

        estimatedTimeline: "3 - 6 Months",

        faq: [],

        cta: {
            title: "Ensure Medical Device Quality",
            button: "Consult ISO 13485",
        },
    },

    {
        id: 11,
        name: "ISO 17025",
        slug: "iso-17025",
        shortName: "Laboratory Management System",
        icon: FlaskConical,

        image:
            "https://images.unsplash.com/photo-1532187643603-ba119ca4109e",

        overview:
            "Standar kompetensi laboratorium pengujian dan kalibrasi.",

        shortDescription:
            "Meningkatkan kompetensi laboratorium sesuai standar internasional.",

        benefits: [
            "Meningkatkan validitas hasil laboratorium",
            "Meningkatkan kompetensi teknis",
            "Meningkatkan kepercayaan client",
        ],

        targetIndustries: [
            "Laboratory",
            "Healthcare",
            "Research",
        ],

        certificationProcess: [
            "Technical Review",
            "Implementation",
            "Audit",
            "Certification",
        ],

        estimatedTimeline: "3 - 6 Months",

        faq: [],

        cta: {
            title: "Improve Laboratory Competency",
            button: "Consult ISO 17025",
        },
    },

    {
        id: 12,
        name: "HACCP",
        slug: "haccp",
        shortName: "Food Hazard Control",
        icon: ClipboardCheck,

        image:
            "https://images.unsplash.com/photo-1488459716781-31db52582fe9",

        overview:
            "Hazard Analysis and Critical Control Points untuk pengendalian keamanan pangan.",

        shortDescription:
            "Mengendalikan risiko keamanan pangan secara sistematis.",

        benefits: [
            "Mengurangi risiko kontaminasi",
            "Meningkatkan keamanan produk",
            "Meningkatkan kepercayaan konsumen",
        ],

        targetIndustries: [
            "Food Industry",
            "Restaurant",
            "Manufacturing",
        ],

        certificationProcess: [
            "Hazard Analysis",
            "Implementation",
            "Audit",
            "Certification",
        ],

        estimatedTimeline: "1 - 3 Months",

        faq: [],

        cta: {
            title: "Maintain Food Safety Standards",
            button: "Consult HACCP",
        },
    },

    {
        id: 13,
        name: "GDP",
        slug: "gdp",
        shortName: "Good Distribution Practice",
        icon: Truck,

        image:
            "https://images.unsplash.com/photo-1519003722824-194d4455a60c",

        overview:
            "Good Distribution Practice untuk memastikan distribusi produk yang aman dan berkualitas.",

        shortDescription:
            "Meningkatkan kualitas sistem distribusi produk.",

        benefits: [
            "Menjamin kualitas distribusi",
            "Mengurangi risiko kerusakan produk",
            "Meningkatkan kepatuhan distribusi",
        ],

        targetIndustries: [
            "Logistics",
            "Pharmaceutical",
            "Distribution",
        ],

        certificationProcess: [
            "Assessment",
            "Implementation",
            "Audit",
            "Certification",
        ],

        estimatedTimeline: "1 - 3 Months",

        faq: [],

        cta: {
            title: "Improve Distribution Quality",
            button: "Consult GDP",
        },
    },
];