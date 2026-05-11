import {
    Award,
    BadgeCheck,
    BookOpen,
    Briefcase,
    Building2,
    CheckCircle2,
    ClipboardCheck,
    Factory,
    FileCheck2,
    FlaskConical,
    Globe,
    GraduationCap,
    HeartPulse,
    Leaf,
    ShieldCheck,
    Truck,
    Users,
    Wheat,
    Zap,
} from "lucide-react";

export const homePageData = {

    heroSection: {
        components: [
            "Main Headline",
            "Supporting Description",
            "CTA Button",
            "Secondary CTA",
            "Hero Illustration / Corporate Image",
            "Trust Badge",
        ],

        img: "/about.webp",

        headline:
            "Professional Certification Services for Sustainable Business Excellence",

        description:
            "QSI membantu perusahaan mendapatkan sertifikasi sistem manajemen internasional melalui proses audit dan sertifikasi yang profesional, independen, dan terpercaya.",

        cta: {
            primary: "Konsultasi Gratis",
            secondary: "Explore Services",
        },

        card: {
            primer: "500+",
            sec: "Organizations certified across Indonesia in 2023."
        },

        trustHighlights: [
            {
                icon: BadgeCheck,
                text: "ISO/IEC 17021-1:2015 Standard",
            },
            {
                icon: Users,
                text: "Professional Auditor Team",
            },
            {
                icon: ShieldCheck,
                text: "Trusted Certification Process",
            },
        ],
    },

    aboutPreview: {
        components: [
            "Company Intro",
            "Image",
            "Short Story",
            "CTA Button",
        ],

        image: "/about.webp",

        content:
            "PT. Qualified Sertifikasi Indonesia (QSI) adalah lembaga penilaian kesesuaian untuk sertifikasi sistem manajemen internasional (ISO) yang berkomitmen menghadirkan layanan sertifikasi yang kredibel dan bernilai tambah.",

        cta: "Learn More About Us",
    },

    whyChooseQSI: {
        components: ["Icon List", "Illustration", "Feature Grid"],
        eyebrow: "Why Choose QSI",
        title: "Trusted Certification Solutions for Modern Industries",
        descriptions: "We help organizations achieve internationally recognized standards through professional certification services, experienced auditors, and reliable audit processes.",

        features: [
            {
                icon: ShieldCheck,
                title: "Independent & Professional Certification",
            },
            {
                icon: Zap,
                title: "Fast & Accurate Process",
            },
            {
                icon: Users,
                title: "Experienced Auditors",
            },
            {
                icon: Globe,
                title: "International Standard Services",
            },
            {
                icon: Award,
                title: "Value-added Certification Solutions",
            },
        ],
    },

    certificationProcess: {
        components: [
            "Timeline",
            "Step Cards",
            "Process Illustration",
        ],

        steps: [
            {
                icon: Users,
                title: "Consultation",
            },
            {
                icon: FileCheck2,
                title: "Application Submission",
            },
            {
                icon: BookOpen,
                title: "Document Review",
            },
            {
                icon: ClipboardCheck,
                title: "Audit Process",
            },
            {
                icon: CheckCircle2,
                title: "Evaluation",
            },
            {
                icon: BadgeCheck,
                title: "Certification Issuance",
            },
            {
                icon: ShieldCheck,
                title: "Surveillance Audit",
            },
        ],
    },

    industriesWeServe: {
        components: ["Industry Cards", "Icons", "Grid Layout"],

        industries: [
            {
                icon: Factory,
                name: "Manufacturing",
            },
            {
                icon: Wheat,
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
                icon: Zap,
                name: "Energy",
            },
            {
                icon: FlaskConical,
                name: "Laboratory",
            },
            {
                icon: Briefcase,
                name: "Government",
            },
            {
                icon: Leaf,
                name: "Agriculture",
            },
        ],
    },

    testimonials: {
        components: [
            "Client Review Slider",
            "Company Logos",
            "Rating",
        ],

        items: [
            {
                company: "Manufacturing Client",
                review:
                    "QSI membantu proses sertifikasi perusahaan kami secara profesional dan efisien.",
            },
            {
                company: "Food Industry Client",
                review:
                    "Tim auditor sangat kompeten dan membantu kami memahami standar ISO dengan baik.",
            },
            {
                company: "Logistics Company Client",
                review:
                    "Proses audit berjalan lancar dengan hasil yang sangat memuaskan.",
            },
        ],
    },

    finalCTA: {
        components: [
            "Big Heading",
            "CTA Button",
            "Contact Shortcut",
        ],

        headline:
            "Start Your Certification Journey with QSI Today",

        cta: {
            primary: "Contact Us",
            secondary: "Schedule Consultation",
        },
    },
};