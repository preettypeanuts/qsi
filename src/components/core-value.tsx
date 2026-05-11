// components/core-values.tsx

import { aboutPageData } from "@/data/about-data";

export const CoreValues = () => {
    const t = aboutPageData.coreValues;

    return (
        <section className="spacing">
            <div className="margin">

                {/* Header */}
                <div className="max-w-3xl">

                    <div className="mb-5 inline-flex items-center gap-3 rounded-full bg-mainColor/10 px-4 py-2">
                        <div className="size-2 rounded-full bg-secondaryColor" />

                        <span className="text-xs font-semibold uppercase tracking-[0.25em] text-mainColor">
                            {t.badge}
                        </span>
                    </div>

                    <h2 className="text-4xl font-bold leading-none tracking-[-0.04em] text-foreground md:text-6xl">
                        {t.title}
                    </h2>
                </div>

                {/* Values Grid */}
                <div className="mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-3">

                    {t.values.map((value, index) => {
                        const Icon = value.icon;

                        return (
                            <div
                                key={index}
                                className="group relative overflow-hidden rounded-main border border-border bg-background p-5 md:p-8 transition-all duration-500 hover:-translate-y-1 hover:border-mainColor/10 hover:shadow-2xl"
                            >

                                {/* Glow */}
                                <div className="absolute -right-20 -top-20 size-52 rounded-full bg-secondaryColor/10 blur-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                                {/* Number */}
                                <div className="absolute right-6 top-4 text-7xl font-black leading-none text-muted/20">
                                    0{index + 1}
                                </div>

                                <div className="relative">
                                    <div className="flex items-center justify-between">
                                        {/* Icon */}
                                        <div className="flex min-w-16 size-16 items-center justify-center rounded-[1.5rem] bg-mainColor text-lightColor transition-transform duration-300 group-hover:scale-105">
                                            <Icon className="size-7" />
                                        </div>

                                        <h3 className="text-xl md:text-3xl font-bold text-foreground">
                                            {value.title}
                                        </h3>
                                    </div>

                                    {/* Content */}
                                    <div className="mt-8">

                                        <p className="mt-5 text-base leading-relaxed text-muted-foreground">
                                            {value.description}
                                        </p>
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