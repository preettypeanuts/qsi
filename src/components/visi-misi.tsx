// components/vision-mission.tsx

import { aboutPageData } from "@/data/about-data";

export const VisionMission = () => {
    const t = aboutPageData.visionMission;

    return (
        <section className="spacing">
            <div className="">
                <div className="overflow-hidden rounded-main bg-mainColor text-lightColor py-20">

                    <div className="padding">

                        {/* Header */}
                        <div className="max-w-3xl">

                            <div className="mb-5 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/10 px-4 py-2 backdrop-blur-xl">
                                <div className="size-2 rounded-full bg-secondaryColor" />

                                <span className="text-xs font-semibold uppercase tracking-[0.25em] text-secondaryColor">
                                    {t.badge}
                                </span>
                            </div>

                            <h2 className="text-4xl font-bold leading-none tracking-[-0.04em] md:text-6xl">
                                {t.title}
                            </h2>
                        </div>

                        {/* Content */}
                        <div className="mt-16 grid gap-6 lg:grid-cols-[1fr_1.2fr]">

                            {/* Vision Card */}
                            <div className="relative overflow-hidden rounded-main border border-white/10 bg-white/5 p-8 md:p-10">

                                {/* Glow */}
                                <div className="absolute -right-20 -top-20 size-56 rounded-full bg-secondaryColor/10 blur-3xl" />

                                <div className="relative">

                                    <div className="flex size-16 items-center justify-center rounded-2xl bg-secondaryColor text-mainColor">
                                        <t.vision.icon className="size-8" />
                                    </div>

                                    <div className="mt-8">
                                        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-secondaryColor">
                                            Vision
                                        </p>

                                        <h3 className="mt-3 text-3xl font-bold">
                                            {t.vision.title}
                                        </h3>

                                        <p className="mt-6 text-base leading-relaxed text-lightColor/70">
                                            {t.vision.description}
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Mission List */}
                            <div className="grid gap-5">

                                {t.missions.map((mission, index) => {
                                    const Icon = mission.icon;

                                    return (
                                        <div
                                            key={index}
                                            className="group rounded-main border border-white/10 bg-white/5 p-6 transition-all duration-300 hover:bg-white/10"
                                        >
                                            <div className="flex items-start gap-5">

                                                {/* Icon */}
                                                <div className="flex size-14 shrink-0 items-center justify-center rounded-2xl bg-white/10 text-secondaryColor transition-transform duration-300 group-hover:scale-105">
                                                    <Icon className="size-6" />
                                                </div>

                                                {/* Content */}
                                                <div>
                                                    <div className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-secondaryColor">
                                                        Mission {index + 1}
                                                    </div>

                                                    <h3 className="text-xl font-semibold leading-snug text-white">
                                                        {mission.title}
                                                    </h3>
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};