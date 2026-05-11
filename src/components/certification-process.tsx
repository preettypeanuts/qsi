import { ArrowRight } from "lucide-react";

import { homePageData } from "@/data/home-data";

export const CertificationProcess = () => {
    const t = homePageData.certificationProcess;

    return (
        <section className="spacing bg-mainColor">
            <div className="padding overflow-hidden rounded-main text-lightColor">

                {/* Header */}
                <div className="">
                    <div className="max-w-3xl">
                        <div className="mb-5 inline-flex w-fit items-center rounded-full bg-white/10 px-4 py-1.5 text-sm font-medium uppercase tracking-[0.2em] text-secondaryColor">
                            Certification Process
                        </div>

                        <h2 className="text-3xl font-bold leading-tight md:text-5xl">
                            Simple & Professional Certification Journey
                        </h2>

                        <p className="mt-6 text-base leading-relaxed text-lightColor/70 md:text-lg">
                            Our certification process is designed to be
                            transparent, efficient, and aligned with
                            international standards to ensure your organization
                            achieves certification smoothly.
                        </p>
                    </div>
                </div>

                {/* Timeline */}
                <div className="relative mt-5">

                    {/* Desktop Line */}
                    <div className="absolute left-0 right-0 top-1/2 hidden h-px -translate-y-1/2 bg-white/10 xl:block" />

                    <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-7">
                        {t.steps.map((step, index) => {
                            const Icon = step.icon;

                            return (
                                <div
                                    key={index}
                                    className="group relative"
                                >
                                    <div className="relative flex h-full flex-col rounded-main border border-white/10 bg-white/5 p-6 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-secondaryColor/30 hover:bg-white/10">

                                        {/* Icon */}
                                        <div className="relative z-10 flex size-16 items-center justify-center rounded-2xl bg-secondaryColor/15 text-secondaryColor">
                                            <Icon className="size-7" />
                                        </div>

                                        {/* Content */}
                                        <div className="relative z-10 mt-8">
                                            <div className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-secondaryColor">
                                                Step {index + 1}
                                            </div>

                                            <h3 className="text-xl font-bold leading-snug">
                                                {step.title}
                                            </h3>

                                        </div>

                                        {/* Arrow */}
                                        {index !== t.steps.length - 1 && (
                                            <div className="absolute -right-3 top-1/2 z-20 hidden -translate-y-1/2 xl:flex">
                                                <div className="flex size-10 items-center justify-center rounded-full border border-white/10 bg-mainColor text-secondaryColor">
                                                    <ArrowRight className="size-4" />
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
};