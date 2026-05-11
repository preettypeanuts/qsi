import type { Metadata } from "next";
import { use } from "react";
import { notFound } from "next/navigation";
import Link from "next/link";

import {
    CheckCircle2,
    Clock,
    ChevronDown,
    ArrowUpRight,
    Building2,
    TrendingUp,
} from "lucide-react";

import { servicesData } from "@/data/service-data";

import { ReusablePageHero } from "@/components/page-hero";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/animate-reveal";
import { toWhatsApp } from "@/lib/actions";

interface Props {
    params: Promise<{ slug: string }>;
}

/* =========================
   SEO METADATA
========================= */
export async function generateMetadata(
    { params }: Props
): Promise<Metadata> {

    const { slug } = await params;

    const service = servicesData.find(
        (s) => s.slug === slug
    );

    if (!service) {
        return {
            title: "Layanan Tidak Ditemukan | Qualified Sertifikasi Indonesia",
        };
    }

    const title =
        `${service.name} Certification | ${service.shortName} | Qualified Sertifikasi Indonesia`;

    const description =
        `${service.name} dari Qualified Sertifikasi Indonesia membantu perusahaan meningkatkan kualitas, kepatuhan, efisiensi, dan kredibilitas bisnis melalui standar internasional. Konsultasi sertifikasi ${service.name} sekarang.`;

    const keywords = [
        service.name,
        `${service.name} Indonesia`,
        `${service.name} Certification`,
        `${service.name} Sertifikasi`,
        `${service.shortName}`,
        "Sertifikasi ISO",
        "Konsultan ISO",
        "Audit ISO",
        "Lembaga Sertifikasi ISO",
        "Qualified Sertifikasi Indonesia",
        ...service.targetIndustries,
    ];

    return {
        title,
        description,
        keywords,

        authors: [
            {
                name: "Qualified Sertifikasi Indonesia",
            },
        ],

        creator: "Qualified Sertifikasi Indonesia",
        publisher: "Qualified Sertifikasi Indonesia",

        alternates: {
            canonical: `/layanan/${service.slug}`,
        },

        openGraph: {
            title,
            description,

            url:
                `https://qsi-certification.com/layanan/${service.slug}`,

            siteName: "Qualified Sertifikasi Indonesia",

            locale: "id_ID",

            type: "website",

            images: [
                {
                    url: service.image,
                    width: 1200,
                    height: 630,
                    alt: `${service.name} Qualified Sertifikasi Indonesia`,
                },
            ],
        },

        twitter: {
            card: "summary_large_image",
            title,
            description,
            images: [service.image],
        },

        robots: {
            index: true,
            follow: true,
            googleBot: {
                index: true,
                follow: true,
                "max-video-preview": -1,
                "max-image-preview": "large",
                "max-snippet": -1,
            },
        },

        category: "business",
    };
}

/* =========================
   PAGE
========================= */
export default function ServiceDetail({ params }: Props) {

    const { slug } = use(params);

    const service = servicesData.find(
        (s) => s.slug === slug
    );

    if (!service) notFound();

    const Icon = service.icon;

    return (
        <>
            {/* JSON-LD */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context":
                            "https://schema.org",

                        "@type": "Service",

                        name: service.name,

                        description:
                            service.overview,

                        provider: {
                            "@type":
                                "Organization",

                            name:
                                "Qualified Sertifikasi Indonesia",

                            url:
                                "https://qsi-certification.com",
                        },

                        areaServed: {
                            "@type":
                                "Country",

                            name:
                                "Indonesia",
                        },

                        serviceType:
                            service.shortName,

                        url:
                            `https://qsi-certification.com/layanan/${service.slug}`,

                        image:
                            service.image,
                    }),
                }}
            />

            {/* HERO */}
            <ReusablePageHero
                badge={service.shortName}
                title={service.name}
                description={service.overview}
                image={service.image}
                breadcrumbs={[
                    {
                        label: "Beranda",
                        href: "/",
                    },
                    {
                        label: "Layanan",
                        href: "/layanan",
                    },
                    {
                        label: service.name,
                        href:
                            `/layanan/${service.slug}`,
                    },
                ]}
            />

            {/* STATS */}
            <Reveal variant="fade-up" delay={200}>
                <section className="border-b border-border bg-mainColor">

                    <div className="padding grid grid-cols-1 divide-y divide-white/10 py-6 sm:grid-cols-3 sm:divide-x sm:divide-y-0 sm:py-10">

                        {service.stats.map((stat, i) => (
                            <div
                                key={i}
                                className="flex flex-col gap-1 py-5 first:pt-0 last:pb-0 sm:px-6 sm:py-0 sm:first:pl-0 sm:last:pr-0"
                            >
                                <p className="text-2xl font-bold text-secondaryColor sm:text-3xl">
                                    {stat.value}
                                </p>

                                <p className="text-sm font-semibold text-white">
                                    {stat.label}
                                </p>

                                <p className="max-w-xs text-xs leading-relaxed text-white/50">
                                    {stat.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </section>
            </Reveal>

            {/* WHY + BENEFITS */}
            <Reveal variant="fade-up" delay={200}>
                <section className="padding grid items-start gap-8 py-14 md:grid-cols-3 md:gap-12 md:py-20">

                    {/* WHY */}
                    <div className="space-y-4 rounded-2xl border border-otherColorDark/40 bg-white p-5 shadow-sm sm:p-6">

                        <div className="flex size-10 items-center justify-center rounded-xl bg-otherColor text-secondaryColor">
                            <TrendingUp className="size-5" />
                        </div>

                        <p className="text-xs font-semibold uppercase tracking-widest text-secondaryColor">
                            Mengapa Perlu?
                        </p>

                        <p className="text-sm leading-relaxed text-mainColor">
                            {service.whyNeedIt}
                        </p>
                    </div>

                    {/* BENEFITS */}
                    <div className="space-y-4 md:col-span-2">

                        <p className="text-xs font-semibold uppercase tracking-widest text-thirdColor">
                            Manfaat
                        </p>

                        <h2 className="text-2xl font-bold tracking-tight text-mainColor sm:text-3xl">
                            Mengapa {service.name}?
                        </h2>

                        <p className="leading-relaxed text-mainColor/60">
                            {service.shortDescription}
                        </p>

                        <ul className="mt-6 grid gap-3 sm:grid-cols-2">

                            {service.benefits.map(
                                (benefit, i) => (
                                    <li
                                        key={i}
                                        className="flex items-start gap-3 rounded-xl border border-border bg-white p-4 shadow-sm"
                                    >
                                        <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-thirdColor" />

                                        <span className="text-sm leading-relaxed text-mainColor">
                                            {benefit}
                                        </span>
                                    </li>
                                )
                            )}
                        </ul>
                    </div>
                </section>
            </Reveal>

            {/* TARGET INDUSTRIES */}
            <Reveal variant="fade-up" delay={200}>
                <section className="padding border-y border-border bg-white py-6">

                    <div className="flex flex-col gap-5 lg:flex-row lg:flex-wrap lg:items-center">

                        <div className="flex items-center gap-2">

                            <Building2 className="size-4 text-mainColor/40" />

                            <p className="text-xs font-semibold uppercase tracking-widest text-mainColor/40">
                                Target Industri
                            </p>
                        </div>

                        <div className="flex flex-wrap gap-2">
                            {service.targetIndustries.map(
                                (industry, i) => (
                                    <span
                                        key={i}
                                        className="rounded-full border border-otherColorDark/30 bg-otherColor px-4 py-1.5 text-xs font-semibold text-secondaryColor"
                                    >
                                        {industry}
                                    </span>
                                )
                            )}
                        </div>

                        <div className="flex items-center gap-2 lg:ml-auto">

                            <Clock className="size-4 text-mainColor/40" />

                            <span className="text-sm font-bold text-mainColor">
                                {service.estimatedTimeline}
                            </span>

                            <span className="text-xs text-mainColor/40">
                                estimasi waktu
                            </span>
                        </div>
                    </div>
                </section>
            </Reveal>

            {/* CERTIFICATION PROCESS */}
            <Reveal variant="fade-up" delay={200}>
                <section className="padding border-y border-white/5 bg-mainColor py-14 sm:py-20">

                    <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-secondaryColor">
                        Proses
                    </p>

                    <h2 className="mb-10 text-2xl font-bold tracking-tight text-white sm:mb-12 sm:text-3xl">
                        Alur Sertifikasi
                    </h2>

                    <div className="relative">

                        <div className="absolute left-6 right-6 top-6 z-0 hidden h-px bg-white/10 md:block" />

                        <div
                            className="relative z-10 flex md:flex-row justify-between flex-col gap-5 md:gap-6"
                            style={{
                                gridTemplateColumns:
                                    `repeat(${service.certificationProcess.length}, 1fr)`,
                            }}
                        >

                            {service.certificationProcess.map(
                                (step, i) => (
                                    <div
                                        key={i}
                                        className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-4 text-left backdrop-blur-sm md:flex-col md:items-center md:border-0 md:bg-transparent md:p-0 md:text-center"
                                    >

                                        <div className="flex size-11 shrink-0 items-center justify-center rounded-full border-2 border-secondaryColor bg-mainColor text-sm font-bold text-secondaryColor shadow-sm">
                                            {i + 1}
                                        </div>

                                        <p className="text-sm leading-relaxed text-white/80">
                                            {step}
                                        </p>
                                    </div>
                                )
                            )}
                        </div>
                    </div>
                </section>
            </Reveal>

            {/* FAQ */}
            <Reveal variant="fade-up" delay={200}>
                {service.faq.length > 0 && (
                    <section className="padding py-14 sm:py-20">

                        <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-thirdColor">
                            FAQ
                        </p>

                        <h2 className="mb-8 text-2xl font-bold tracking-tight text-mainColor sm:text-3xl">
                            Pertanyaan Umum
                        </h2>

                        <div className="space-y-3">

                            {service.faq.map(
                                (item, i) => (
                                    <details
                                        key={i}
                                        className="group rounded-xl border border-border bg-white shadow-sm transition-all open:shadow-md"
                                    >

                                        <summary className="flex cursor-pointer list-none items-start justify-between gap-4 px-5 py-4 text-left font-medium text-mainColor sm:px-6">
                                            {item.question}

                                            <ChevronDown className="mt-1 size-4 shrink-0 text-mainColor/40 transition-transform duration-300 group-open:rotate-180" />
                                        </summary>

                                        <p className="px-5 pb-5 text-sm leading-relaxed text-mainColor/60 sm:px-6">
                                            {item.answer}
                                        </p>
                                    </details>
                                )
                            )}
                        </div>
                    </section>
                )}
            </Reveal>

            {/* CTA */}
            <Reveal variant="fade-up" delay={200}>
                <section className="margin spacing">

                    <div className="rounded-main bg-secondaryColor p-6 sm:p-8 md:p-10">

                        <div className="mb-6 flex size-14 items-center justify-center rounded-2xl border border-mainColor/10 bg-mainColor/10">
                            <Icon className="size-7 text-mainColor" />
                        </div>

                        <h2 className="mb-4 text-2xl font-bold leading-tight text-mainColor sm:text-3xl md:text-4xl">
                            {service.cta.title}
                        </h2>

                        <p className="mb-8 max-w-2xl leading-relaxed text-mainColor/60">
                            Tim konsultan kami siap membantu proses sertifikasi{" "}
                            {service.name} dari awal hingga selesai.
                        </p>

                        <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">

                            <Button
                                size="lg"
                                className="group w-full bg-mainColor text-white hover:bg-mainColor/90 sm:w-auto"
                                asChild
                            >
                                <Link
                                    href={toWhatsApp}
                                    target="_blank"
                                >
                                    {service.cta.button}

                                    <ArrowUpRight className="ml-2 size-4 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" />
                                </Link>
                            </Button>

                            <Button
                                size="lg"
                                variant="outline"
                                className="w-full border-mainColor/20 bg-white/30 text-mainColor hover:bg-white sm:w-auto"
                                asChild
                            >
                                <Link href="/layanan">
                                    Lihat Layanan Lain
                                </Link>
                            </Button>
                        </div>
                    </div>
                </section>
            </Reveal>
        </>
    );
}