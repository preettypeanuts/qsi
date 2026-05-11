"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

import {
    ArrowUpRight,
    Clock3,
} from "lucide-react";

import { servicesData } from "@/data/service-data";

import { Button } from "./ui/button";
import { toWhatsApp } from "@/lib/actions";

export const ServicesPreview = () => {
    const [showAll, setShowAll] = useState(false);

    const displayedServices = showAll
        ? servicesData
        : servicesData.slice(0, 6);

    return (
        <section className="spacing">
            <div className="margin">

                {/* Header */}
                <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">

                    <div className="max-w-3xl">

                        <div className="mb-5 inline-flex items-center gap-3 rounded-full bg-mainColor/10 px-4 py-2">
                            <div className="size-2 rounded-full bg-secondaryColor" />

                            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-mainColor">
                                Certification Services
                            </span>
                        </div>

                        <h2 className="text-4xl font-bold leading-none tracking-[-0.04em] text-foreground md:text-6xl">
                            Professional ISO Certification Services
                        </h2>

                        <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
                            Explore our international certification services
                            designed to improve operational quality,
                            compliance, safety, and business credibility.
                        </p>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-wrap items-center gap-3">
                        <Link
                            href="/layanan"
                        >

                            <Button
                                size={"lg"}
                                variant={"outline"}
                                className="group"
                            >
                                View All Services

                                <ArrowUpRight className="ml-2 size-4 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" />
                            </Button>
                        </Link>

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

                {/* Grid */}
                <div className="mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-3">

                    {displayedServices.map((service) => {
                        const Icon = service.icon;

                        return (
                            <Link
                                key={service.id}
                                href={`/layanan/${service.slug}`}
                                className="group relative overflow-hidden rounded-main bg-mainColor text-lightColor min-h-135"
                            >

                                {/* Image */}
                                <Image
                                    src={service.image}
                                    alt={service.name}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                                />

                                {/* Overlay */}
                                <div className="absolute inset-0 bg-linear-to-t from-black via-black/50 to-black/10" />

                                {/* Glow */}
                                <div className="absolute -bottom-32 left-0 size-72 rounded-full bg-secondaryColor/20 blur-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                                {/* Content */}
                                <div className="relative z-10 flex h-full flex-col justify-between p-6">

                                    {/* Top */}
                                    <div className="flex items-start justify-between gap-4">

                                        {/* Icon */}
                                        <div className="flex size-16 items-center justify-center rounded-[1.5rem] border border-white/10 bg-white/10 backdrop-blur-xl">
                                            <Icon className="size-7 text-secondaryColor" />
                                        </div>

                                        {/* Timeline */}
                                        <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-2 backdrop-blur-xl">
                                            <Clock3 className="size-4 text-secondaryColor" />

                                            <span className="text-xs font-medium text-white/80">
                                                {service.estimatedTimeline}
                                            </span>
                                        </div>
                                    </div>

                                    {/* Bottom */}
                                    <div>

                                        {/* Industries */}
                                        <div className="mb-5 flex flex-wrap gap-2">
                                            {service.targetIndustries
                                                .slice(0, 3)
                                                .map((industry, index) => (
                                                    <span
                                                        key={index}
                                                        className="rounded-full border border-white/10 bg-white/10 px-3 py-1 text-xs font-medium text-white/70 backdrop-blur-xl"
                                                    >
                                                        {industry}
                                                    </span>
                                                ))}
                                        </div>

                                        {/* Title */}
                                        <h3 className="text-3xl font-bold leading-tight text-white">
                                            {service.name}
                                        </h3>

                                        {/* Short */}
                                        <p className="mt-2 text-sm font-medium text-secondaryColor">
                                            {service.shortName}
                                        </p>

                                        {/* Desc */}
                                        <p className="mt-5 line-clamp-3 text-base leading-relaxed text-white/70">
                                            {service.shortDescription}
                                        </p>

                                        {/* CTA */}
                                        <div className="mt-8 flex items-center justify-between">

                                            <Button
                                                variant={"second"}
                                                className="pointer-events-none"
                                            >
                                                View Details
                                            </Button>

                                            <div className="flex size-14 items-center justify-center rounded-full border border-white/10 bg-white/10 text-white backdrop-blur-xl transition-all duration-300 group-hover:rotate-45 group-hover:bg-secondaryColor group-hover:text-mainColor">
                                                <ArrowUpRight className="size-5" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        );
                    })}

                    {/* Consultation Card */}
                    <div className="relative overflow-hidden rounded-main bg-mainColor text-lightColor min-h-135">

                        {/* Background */}
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.12),transparent_35%)]" />

                        <div className="absolute inset-0 opacity-[0.05] bg-[linear-gradient(to_right,white_1px,transparent_1px),linear-gradient(to_bottom,white_1px,transparent_1px)] bg-size-[60px_60px]" />

                        {/* Glow */}
                        <div className="absolute -top-24 right-0 size-80 rounded-full bg-secondaryColor/20 blur-3xl" />

                        {/* Content */}
                        <div className="relative z-10 flex h-full flex-col justify-between p-7">

                            {/* Top */}
                            <div>

                                <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/10 px-4 py-2 backdrop-blur-xl">
                                    <div className="size-2 rounded-full bg-secondaryColor" />

                                    <span className="text-xs font-semibold uppercase tracking-[0.25em] text-secondaryColor">
                                        Free Consultation
                                    </span>
                                </div>

                                <h3 className="mt-8 max-w-sm text-4xl font-bold leading-none tracking-[-0.04em] text-white">
                                    Not Sure Which Certification You Need?
                                </h3>

                                <p className="mt-6 max-w-md text-base leading-relaxed text-white/70">
                                    Tell us about your business and industry.
                                    Our team will help you choose the right
                                    certification based on your operational
                                    goals and compliance needs.
                                </p>

                                {/* Features */}
                                <div className="mt-8 space-y-4">
                                    {[
                                        "Free consultation session",
                                        "Recommendation based on your industry",
                                        "Guidance from professional auditors",
                                    ].map((item, index) => (
                                        <div
                                            key={index}
                                            className="flex items-center gap-3"
                                        >
                                            <div className="size-2 rounded-full bg-secondaryColor" />

                                            <p className="text-sm text-white/70">
                                                {item}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Bottom */}
                            <div className="mt-10 flex items-center justify-between">

                                <Button
                                    size={"lg"}
                                    variant={"second"}
                                    asChild
                                >
                                    <Link
                                        href={toWhatsApp}
                                        target="_blank"
                                    >
                                        Start Consultation

                                        <ArrowUpRight className="ml-2 size-4" />
                                    </Link>
                                </Button>

                                <div className="flex size-14 items-center justify-center rounded-full border border-white/10 bg-white/10 text-white backdrop-blur-xl">
                                    <ArrowUpRight className="size-5" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};