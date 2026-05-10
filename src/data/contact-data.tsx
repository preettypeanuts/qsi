import {
    Building2,
    Mail,
    Phone,
    Camera,
    MapPin,
    Send,
} from "lucide-react";

export const contactPageData = {
    hero: {
        badge: "Contact Us",

        title:
            "Get In Touch With QSI Certification",

        description:
            "Hubungi tim QSI untuk konsultasi sertifikasi ISO, kebutuhan audit, maupun informasi layanan profesional lainnya.",

        image:
            "https://images.unsplash.com/photo-1521791136064-7986c2920216",

        breadcrumbs: [
            {
                label: "Home",
                href: "/",
            },
            {
                label: "Contact",
            },
        ],
    },

    contactInfo: {
        title:
            "Contact Information",

        description:
            "Tim kami siap membantu kebutuhan sertifikasi organisasi Anda dengan layanan profesional dan responsif.",

        items: [
            {
                icon: MapPin,

                title: "Office Address",

                content: [
                    "Ad Premier Office Park",
                    "Jl. TB Simatupang No. 5, 5rd Floor",
                    "DKI Jakarta",
                ],
            },

            {
                icon: Phone,

                title: "Phone Number",

                content: [
                    "0821 265 8116",
                ],

                href: "https://wa.me/628212658116",
            },

            {
                icon: Mail,

                title: "Company Email",

                content: [
                    "info@qsicerti.co.id",
                ],

                href: "mailto:info@qsicerti.co.id",
            },

            {
                icon: Send,

                title: "Marketing PIC",

                content: [
                    "qsimarketing716@gmail.com",
                ],

                href: "mailto:qsimarketing716@gmail.com",
            },

            {
                icon: Camera,

                title: "Instagram",

                content: [
                    "@qsicerti.id",
                ],

                href: "https://instagram.com/qsicerti.id",
            },
        ],
    },

    contactForm: {
        title:
            "Send Us a Message",

        description:
            "Isi formulir berikut dan tim kami akan segera menghubungi Anda untuk konsultasi sertifikasi.",

        fields: [
            {
                label: "Full Name",
                name: "fullName",
                type: "text",
                placeholder: "Enter your full name",
                required: true,
            },

            {
                label: "Company Name",
                name: "companyName",
                type: "text",
                placeholder: "Enter company name",
                required: true,
            },

            {
                label: "Email Address",
                name: "email",
                type: "email",
                placeholder: "Enter your email",
                required: true,
            },

            {
                label: "Phone Number",
                name: "phone",
                type: "tel",
                placeholder: "Enter phone number",
                required: true,
            },

            {
                label: "Certification Interest",
                name: "service",
                type: "select",

                options: [
                    "ISO 9001",
                    "ISO 14001",
                    "ISO 45001",
                    "ISO 22000",
                    "ISO 27001",
                    "ISO 37001",
                    "ISO 17025",
                    "HACCP",
                    "GDP",
                    "Other",
                ],

                required: true,
            },

            {
                label: "Message",
                name: "message",
                type: "textarea",
                placeholder:
                    "Tell us about your certification needs...",
                required: true,
            },
        ],

        submitText:
            "Send Message",
    },

    maps: {
        title:
            "Our Office Location",

        description:
            "Visit our office or schedule a consultation with our certification team.",

        embedUrl:
            "https://maps.google.com/maps?q=Ad%20Premier%20Office%20Park%20Jakarta&t=&z=13&ie=UTF8&iwloc=&output=embed",
    },

    cta: {
        title:
            "Need Certification Consultation?",

        description:
            "Our team is ready to help your organization achieve international certification standards professionally and efficiently.",

        primaryButton:
            "Start Consultation",

        secondaryButton:
            "Contact Our Team",
    },
};

export const faqContactData = [
    {
        question: "Apakah konsultasi awal dikenakan biaya?",
        answer:
            "Tidak. Tim QSI menyediakan konsultasi awal secara gratis untuk membantu memahami kebutuhan sertifikasi perusahaan Anda.",
    },

    {
        question: "Berapa lama proses sertifikasi berlangsung?",
        answer:
            "Estimasi proses sertifikasi berbeda tergantung jenis standar dan kesiapan perusahaan, namun umumnya memerlukan waktu 1 hingga 6 bulan.",
    },

    {
        question: "Apakah QSI melayani perusahaan di luar Jakarta?",
        answer:
            "Ya. QSI melayani kebutuhan sertifikasi untuk berbagai perusahaan dan organisasi di seluruh Indonesia.",
    },

    {
        question: "Bagaimana cara memulai proses sertifikasi?",
        answer:
            "Anda dapat menghubungi tim kami melalui form kontak, WhatsApp, email, atau konsultasi langsung untuk mendapatkan arahan proses sertifikasi.",
    },
];