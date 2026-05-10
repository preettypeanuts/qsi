"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

import { servicesData } from "@/data/service-data";
import { Button } from "./ui/button";

export const ServicesPreview = () => {
    const [showAll, setShowAll] = useState(false);

    const displayedServices = showAll
        ? servicesData
        : servicesData.slice(0, 6);

    return (
        <section className="spacing margin">
            <div className="">

                {/* Header */}
                <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">

                    <div className="max-w-2xl">
                        <div className="mb-5 inline-flex w-fit items-center rounded-full bg-mainColor/10 px-4 py-1.5 text-sm font-medium uppercase tracking-[0.2em] text-mainColor">
                            Certification Services
                        </div>

                        <h2 className="text-3xl font-bold leading-tight text-foreground md:text-5xl">
                            Professional ISO Certification Services
                        </h2>

                        <p className="mt-6 text-base leading-relaxed text-muted-foreground md:text-lg">
                            Explore our international certification services
                            designed to improve operational quality,
                            compliance, safety, and business credibility.
                        </p>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-wrap items-center gap-3">
                        <Button
                            size={"lg"}
                            variant={"outline"}
                            className="group"
                        >
                            View All Services

                            <ArrowUpRight className="ml-2 size-4 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" />
                        </Button>

                        <Button
                            size={"lg"}
                            variant={"second"}
                            onClick={() => setShowAll(!showAll)}
                        >
                            {showAll
                                ? "Show Less"
                                : "Show All"}
                        </Button>
                    </div>
                </div>

                {/* Services Grid */}
                <div className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
                    {displayedServices.map((service) => {
                        const Icon = service.icon;

                        return (
                            <Link
                                key={service.id}
                                href={`/services/${service.slug}`}
                                className="group overflow-hidden rounded-[2rem] border border-border bg-background transition-all duration-300 hover:-translate-y-1 hover:border-mainColor/20 hover:shadow-2xl"
                            >

                                {/* Image */}
                                <div className="relative h-64 overflow-hidden">
                                    <Image
                                        src={service.image}
                                        alt={service.name}
                                        fill
                                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                                    />

                                    <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/10 to-transparent" />

                                    {/* Icon */}
                                    <div className="absolute left-5 top-5 flex size-14 items-center justify-center rounded-2xl bg-white/10 text-white backdrop-blur-xl">
                                        <Icon className="size-6" />
                                    </div>

                                    {/* Service Name */}
                                    <div className="absolute bottom-5 left-5 right-5">
                                        <h3 className="text-2xl font-bold text-white">
                                            {service.name}
                                        </h3>

                                        <p className="mt-1 text-sm text-white/70">
                                            {service.shortName}
                                        </p>
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="p-7">
                                    <p className="line-clamp-3 text-sm leading-relaxed text-muted-foreground">
                                        {service.shortDescription}
                                    </p>

                                    {/* Industries */}
                                    <div className="mt-6 flex flex-wrap gap-2">
                                        {service.targetIndustries
                                            .slice(0, 3)
                                            .map((industry, index) => (
                                                <span
                                                    key={index}
                                                    className="rounded-full bg-mainColor/10 px-3 py-1 text-xs font-medium text-mainColor"
                                                >
                                                    {industry}
                                                </span>
                                            ))}
                                    </div>

                                    {/* Footer */}
                                    <div className="mt-8 flex items-center justify-between border-t border-border pt-5">
                                        <div>
                                            <p className="text-xs uppercase tracking-wide text-muted-foreground">
                                                Estimated Timeline
                                            </p>

                                            <p className="mt-1 text-sm font-semibold text-foreground">
                                                {service.estimatedTimeline}
                                            </p>
                                        </div>

                                        <div className="flex size-12 items-center justify-center rounded-2xl bg-mainColor text-white transition-transform duration-300 group-hover:rotate-45">
                                            <ArrowUpRight className="size-5" />
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};