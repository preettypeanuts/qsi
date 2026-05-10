"use client"
import { faqContactData } from "@/data/contact-data";
import { Plus } from "lucide-react";
import { useState } from "react";

export const FaqContact = () => {
    const [activeIndex, setActiveIndex] = useState<number | null>(0);

    return (
        <>
            {/* FAQ Section */}
            <section className="spacing pt-0">
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
                            Temukan jawaban terkait konsultasi,
                            layanan sertifikasi, proses audit,
                            dan cara menghubungi tim QSI.
                        </p>
                    </div>

                    {/* FAQ */}
                    <div className="mt-14 space-y-4">

                        {faqContactData.map((item, index) => {
                            const isActive =
                                activeIndex === index;

                            return (
                                <div
                                    key={index}
                                    className={`rounded-[2rem] border transition-all duration-300 ${isActive
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
                                        className="flex w-full items-center justify-between gap-5 p-6 md:p-8"
                                    >

                                        <h3
                                            className={`text-left text-lg font-semibold md:text-2xl ${isActive
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
        </>
    )
}