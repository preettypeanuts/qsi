"use client";

import { useState } from "react";
import { Plus } from "lucide-react";

const faqData = [
    {
        question: "Apa itu sertifikasi ISO?",
        answer:
            "Sertifikasi ISO adalah standar internasional yang membantu perusahaan meningkatkan kualitas, keamanan, efisiensi, dan kredibilitas bisnis melalui sistem manajemen yang terstruktur.",
    },

    {
        question: "Berapa lama proses sertifikasi berlangsung?",
        answer:
            "Durasi proses sertifikasi tergantung pada skala dan kesiapan perusahaan, namun umumnya memerlukan waktu sekitar 1 hingga 6 bulan.",
    },

    {
        question: "Apakah QSI melayani UMKM?",
        answer:
            "Ya. QSI melayani berbagai jenis organisasi mulai dari UMKM, perusahaan berkembang, hingga perusahaan skala besar.",
    },

    {
        question: "Industri apa saja yang bisa mengajukan sertifikasi?",
        answer:
            "QSI melayani berbagai sektor industri seperti manufaktur, makanan & minuman, kesehatan, pendidikan, logistik, energi, konstruksi, dan instansi pemerintah.",
    },

    {
        question: "Bagaimana proses audit dilakukan?",
        answer:
            "Proses audit meliputi peninjauan dokumen, evaluasi implementasi sistem, audit lapangan, hingga pengambilan keputusan sertifikasi oleh auditor profesional.",
    },

    {
        question: "Apakah konsultasi awal dikenakan biaya?",
        answer:
            "Tidak. QSI menyediakan konsultasi awal secara gratis untuk membantu perusahaan memahami kebutuhan sertifikasi yang paling sesuai.",
    },
];

export const FaqService = () => {
    const [activeIndex, setActiveIndex] = useState<number | null>(0);

    return (
        <section className="spacing">
            <div className="margin">

                {/* Header */}
                <div className="max-w-3xl">

                    <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-mainColor/10 px-4 py-2">
                        <div className="size-2 rounded-full bg-secondaryColor" />

                        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-mainColor">
                            FAQ
                        </span>
                    </div>

                    <h2 className="text-4xl font-bold leading-none tracking-[-0.04em] text-foreground md:text-6xl">
                        Pertanyaan Yang Sering Ditanyakan
                    </h2>

                    <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
                        Temukan informasi seputar sertifikasi ISO,
                        proses audit, estimasi waktu, dan layanan
                        profesional dari QSI.
                    </p>
                </div>

                {/* FAQ List */}
                <div className="mt-14 space-y-4">

                    {faqData.map((item, index) => {
                        const isActive = activeIndex === index;

                        return (
                            <div
                                key={index}
                                className={`rounded-main border transition-all duration-300 ${isActive
                                        ? "border-mainColor/20 bg-mainColor text-lightColor"
                                        : "border-border bg-background"
                                    }`}
                            >

                                {/* Trigger */}
                                <button
                                    onClick={() =>
                                        setActiveIndex(
                                            isActive
                                                ? null
                                                : index
                                        )
                                    }
                                    className="flex w-full items-center justify-between gap-5 p-6 md:p-4"
                                >

                                    <h3
                                        className={`text-left text-lg font-semibold md:text-xl ${isActive
                                                ? "text-white"
                                                : "text-foreground"
                                            }`}
                                    >
                                        {item.question}
                                    </h3>

                                    <div
                                        className={`flex size-12 shrink-0 items-center justify-center rounded-full transition-all duration-300 ${isActive
                                                ? "rotate-45 bg-secondaryColor text-mainColor"
                                                : "bg-mainColor/5 text-mainColor"
                                            }`}
                                    >
                                        <Plus className="size-5" />
                                    </div>
                                </button>

                                {/* Content */}
                                <div
                                    className={`grid transition-all duration-500 ${isActive
                                            ? "grid-rows-[1fr] opacity-100"
                                            : "grid-rows-[0fr] opacity-0"
                                        }`}
                                >
                                    <div className="overflow-hidden">

                                        <div className="px-6 pb-6 md:px-8 md:pb-8">

                                            <div
                                                className={`h-px w-full ${isActive
                                                        ? "bg-white/10"
                                                        : "bg-border"
                                                    }`}
                                            />

                                            <p
                                                className={`pt-6 max-w-3xl text-base leading-relaxed md:text-lg ${isActive
                                                        ? "text-white/70"
                                                        : "text-muted-foreground"
                                                    }`}
                                            >
                                                {item.answer}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};