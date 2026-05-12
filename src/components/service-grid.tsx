// components/services-grid.tsx

import Link from "next/link";
import Image from "next/image";

import {
    ArrowUpRight,
    Clock3,
} from "lucide-react";

import { servicesData } from "@/data/service-data";

import { Button } from "./ui/button";

export const ServicesGrid = () => {
    return (
        <section className="spacing">
            <div className="margin">

                {/* Header */}
                <div className="max-w-3xl">

                    <div className="mb-5 inline-flex items-center gap-3 rounded-full bg-mainColor/10 px-4 py-2">
                        <div className="size-2 rounded-full bg-secondaryColor" />

                        <span className="text-xs font-semibold uppercase tracking-[0.25em] text-mainColor">
                            Certification Services
                        </span>
                    </div>

                    <h2 className="text-4xl font-bold leading-none tracking-[-0.04em] text-foreground md:text-6xl">
                        International Certification Services For Every Industry
                    </h2>

                    <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
                        Explore professional ISO certification services
                        designed to improve operational excellence,
                        compliance, safety, and business credibility.
                    </p>
                </div>

                {/* Grid */}

                <div className="mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-3">

                    {servicesData.map((service) => {
                        const Icon = service.icon;

                        return (
                            <Link
                                key={service.id}
                                href={`/layanan/${service.slug}`}
                                className="group relative min-h-135 overflow-hidden rounded-main bg-mainColor text-lightColor"
                            >

                                {/* Image */}
                                <Image
                                    src={service.image}
                                    alt={service.name}
                                    width={800}
                                    height={1000}
                                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
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
                    <div className="relative overflow-hidden rounded-main border border-mainColor/10 bg-mainColor text-lightColor min-h-135">

                        {/* Glow */}
                        <div className="absolute -top-20 right-0 size-72 rounded-full bg-secondaryColor/20 blur-3xl" />

                        {/* Pattern */}
                        <div className="absolute inset-0 opacity-[0.05] bg-[linear-gradient(to_right,white_1px,transparent_1px),linear-gradient(to_bottom,white_1px,transparent_1px)] bg-size-[60px_60px]" />

                        <div className="relative z-10 flex h-full flex-col justify-between p-8">

                            {/* Top */}
                            <div>

                                <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/10 px-4 py-2 backdrop-blur-xl">
                                    <div className="size-2 rounded-full bg-secondaryColor" />

                                    <span className="text-xs font-semibold uppercase tracking-[0.25em] text-secondaryColor">
                                        Need Help?
                                    </span>
                                </div>

                                <h3 className="mt-8 text-4xl font-bold leading-none tracking-[-0.04em] text-white">
                                    Not Sure Which Certification Fits Your Business?
                                </h3>

                                <p className="mt-6 text-base leading-relaxed text-white/70">
                                    Tell us about your business and industry. Our team
                                    will help you choose the most suitable certification
                                    based on your operational needs and goals.
                                </p>

                                {/* Points */}
                                <div className="mt-8 space-y-4">
                                    {[
                                        "Free initial consultation",
                                        "Personalized certification recommendations",
                                        "Professional guidance from expert auditors",
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
                            <div className="mt-10">

                                <Button
                                    size={"lg"}
                                    variant={"second"}
                                    className="w-full"
                                    asChild
                                >
                                    <Link
                                        href="https://wa.me/6281200000000"
                                        target="_blank"
                                    >
                                        Free Consultation

                                        <ArrowUpRight className="ml-2 size-4" />
                                    </Link>
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};