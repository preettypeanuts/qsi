import Image from "next/image";
import { ArrowUpRight, BadgeCheck } from "lucide-react";

import { homePageData } from "@/data/home-data";
import { Button } from "./ui/button";

export const ShortAbout = () => {
    const t = homePageData.aboutPreview;

    return (
        <section className="spacing  bg-mainColor">
            <div className="padding overflow-hidden rounded-main text-lightColor">
                <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
                    
                    {/* Image */}
                    <div className="relative overflow-hidden rounded-main min-h-105">
                        <Image
                            src={t.image}
                            alt="about preview image qsi"
                            fill
                            className="object-cover"
                        />

                        {/* Floating Badge */}
                        <div className="absolute bottom-5 left-5 flex items-center gap-3 rounded-2xl border border-white/10 bg-white/10 px-5 py-4 backdrop-blur-xl">
                            <div className="flex size-11 items-center justify-center rounded-xl bg-secondaryColor/20 text-secondaryColor">
                                <BadgeCheck className="size-5" />
                            </div>

                            <div>
                                <p className="text-sm font-semibold">
                                    Trusted Certification
                                </p>

                                <p className="text-xs text-lightColor/70">
                                    International ISO Standards
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Content */}
                    <div className="flex flex-col justify-center">
                        
                        {/* Label */}
                        <div className="mb-5 inline-flex w-fit items-center rounded-full bg-white/10 px-4 py-1.5 text-sm font-medium uppercase tracking-[0.2em] text-secondaryColor">
                            About QSI
                        </div>

                        {/* Heading */}
                        <h2 className="max-w-xl text-3xl font-bold leading-tight md:text-5xl">
                            Professional Certification Partner for Modern Businesses
                        </h2>

                        {/* Description */}
                        <p className="mt-6 max-w-2xl text-base leading-relaxed text-lightColor/75 md:text-lg">
                            {t.content}
                        </p>

                        {/* Feature Points */}
                        <div className="mt-8 grid gap-4 sm:grid-cols-2">
                            {[
                                "Professional Auditor Team",
                                "Independent Certification Body",
                                "International Standard Process",
                                "Trusted by Various Industries",
                            ].map((item, index) => (
                                <div
                                    key={index}
                                    className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-4"
                                >
                                    <div className="flex size-9 items-center justify-center rounded-lg bg-secondaryColor/20 text-secondaryColor">
                                        <BadgeCheck className="size-4" />
                                    </div>

                                    <p className="text-sm font-medium">
                                        {item}
                                    </p>
                                </div>
                            ))}
                        </div>

                        {/* CTA */}
                        <div className="mt-10">
                            <Button
                                size={"lg"}
                                className="group"
                                variant={"second"}
                            >
                                {t.cta}

                                <ArrowUpRight className="ml-2 size-4 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" />
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};