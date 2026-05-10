// components/company-story.tsx

import Image from "next/image";

import { aboutPageData } from "@/data/about-data";

export const CompanyStory = () => {
    const t = aboutPageData.companyStory;

    return (
        <section className="spacing">
            <div className="margin">
                <div className="grid gap-10 lg:grid-cols-[1fr_520px]">

                    {/* Left Content */}
                    <div>

                        {/* Badge */}
                        <div className="mb-5 inline-flex items-center gap-3 rounded-full bg-mainColor/10 px-4 py-2">
                            <div className="size-2 rounded-full bg-secondaryColor" />

                            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-mainColor">
                                {t.badge}
                            </span>
                        </div>

                        {/* Heading */}
                        <h2 className="max-w-3xl text-4xl font-bold leading-none tracking-[-0.04em] text-foreground md:text-6xl">
                            {t.title}
                        </h2>

                        {/* Desc */}
                        <p className="mt-7 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
                            {t.description}
                        </p>

                        {/* Timeline */}
                        <div className="relative mt-14 space-y-8 border-l border-border pl-8">
                            {t.timeline.map((item, index) => (
                                <div
                                    key={index}
                                    className="relative"
                                >
                                    {/* Dot */}
                                    <div className="absolute left-[-2.15rem] top-2 size-4 rounded-full border-4 border-background bg-secondaryColor" />

                                    {/* Year */}
                                    <div className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-secondaryColor">
                                        {item.year}
                                    </div>

                                    {/* Content */}
                                    <h3 className="text-2xl font-semibold text-foreground">
                                        {item.title}
                                    </h3>

                                    <p className="mt-3 max-w-xl text-base leading-relaxed text-muted-foreground">
                                        {item.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right Image */}
                    <div className="relative overflow-hidden rounded-[2.5rem] min-h-180">
                        <Image
                            src={t.image}
                            alt={t.title}
                            fill
                            className="object-cover"
                        />

                        {/* Overlay */}
                        <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/10 to-transparent" />

                        {/* Floating Card */}
                        <div className="absolute bottom-6 left-6 right-6 rounded-[2rem] border border-white/10 bg-white/10 p-6 backdrop-blur-2xl">

                            <div className="flex items-center gap-4">
                                <div className="flex size-14 items-center justify-center rounded-2xl bg-secondaryColor text-mainColor">
                                    <span className="text-lg font-bold">
                                        QSI
                                    </span>
                                </div>

                                <div>
                                    <h3 className="text-xl font-semibold text-white">
                                        Trusted Certification Partner
                                    </h3>

                                    <p className="mt-1 text-sm text-white/70">
                                        Professional & internationally aligned
                                        certification services.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};