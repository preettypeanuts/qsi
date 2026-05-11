import { ArrowUpRight } from "lucide-react";

import { homePageData } from "@/data/home-data";
import { Button } from "./ui/button";

export const WhyUs = () => {
    const t = homePageData.whyChooseQSI;

    return (
        <section className="spacing bg-white">
            <div className="padding rounded-main">

                {/* Top Section */}
                <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">

                    <div className="">
                        <div className="mb-5 inline-flex w-fit items-center rounded-full bg-mainColor/10 px-4 py-1.5 text-sm font-medium uppercase tracking-[0.2em] text-mainColor">
                            {t.eyebrow}
                        </div>

                        <h2 className="text-3xl font-bold leading-tight text-foreground md:text-5xl">
                            {t.title}
                        </h2>

                        <p className="mt-6 text-base leading-relaxed text-muted-foreground md:text-lg">
                            {t.descriptions}
                        </p>
                    </div>
                </div>

                {/* Features Grid */}
                <div className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-5">
                    {t.features.map((item, index) => {
                        const Icon = item.icon;

                        return (
                            <div
                                key={index}
                                className="group relative overflow-hidden rounded-[2rem] border border-border bg-muted/40 p-7 transition-all duration-300 hover:-translate-y-1 hover:border-mainColor/20 hover:bg-mainColor hover:text-white hover:shadow-2xl"
                            >

                                {/* Glow */}
                                <div className="absolute -right-10 -top-10 size-32 rounded-full bg-secondaryColor/10 blur-3xl transition-all duration-500 group-hover:bg-secondaryColor/20" />

                                {/* Icon */}
                                <div className="relative z-10 flex size-16 items-center justify-center rounded-2xl bg-mainColor/10 text-mainColor transition-all duration-300 group-hover:bg-white/10 group-hover:text-secondaryColor">
                                    <Icon className="size-7" />
                                </div>

                                {/* Content */}
                                <div className="relative z-10 mt-8">
                                    <h3 className="text-lg font-semibold leading-snug">
                                        {item.title}
                                    </h3>

                                    <p className="mt-4 text-sm leading-relaxed text-muted-foreground transition-colors duration-300 group-hover:text-white/70">
                                        QSI delivers professional certification
                                        services tailored for organizations seeking
                                        credibility, compliance, and sustainable
                                        operational excellence.
                                    </p>
                                </div>

                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};