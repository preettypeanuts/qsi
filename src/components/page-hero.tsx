"use client";

import Image from "next/image";
import Link from "next/link";

import {
    ArrowDown,
    ArrowUpRight,
    ChevronRight,
    Play,
} from "lucide-react";

import { Button } from "./ui/button";

interface BreadcrumbItem {
    label: string;
    href: string;
}

interface ReusablePageHeroProps {
    badge: string;
    title: string;
    description: string;
    image: string;
    breadcrumbs: BreadcrumbItem[];
}

export const ReusablePageHero = ({
    badge,
    title,
    description,
    image,
    breadcrumbs,
}: ReusablePageHeroProps) => {
    return (
        <section className="">
            <div className="">
                <div className="relative overflow-hidden min-h-[92vh] bg-mainColor text-lightColor">

                    {/* Background Image */}
                    <Image
                        src={image}
                        alt={title}
                        fill
                        priority
                        className="object-cover"
                    />

                    {/* Main Overlay */}
                    <div className="absolute inset-0 bg-black/40" />

                    {/* Left Gradient */}
                    <div className="absolute inset-y-0 left-0 w-full md:w-[65%] bg-linear-to-r from-mainColor via-mainColor/85 to-transparent" />

                    {/* Blur Layer */}
                    <div className="absolute inset-y-0 left-0 w-[45%] backdrop-blur-[6px]" />

                    {/* Ambient Glow */}
                    <div className="absolute -bottom-32 -left-20 size-112 rounded-full bg-secondaryColor/20 blur-3xl" />

                    {/* Content */}
                    <div className="relative z-10 flex min-h-[92vh] flex-col">

                        {/* Top */}
                        <div className="padding pt-30">

                            {/* Breadcrumb */}
                            <div className="mb-5 flex flex-wrap items-center gap-2 text-sm text-lightColor/40">
                                {breadcrumbs.map((item, index) => (
                                    <div
                                        key={index}
                                        className="flex items-center gap-2"
                                    >
                                        <Link
                                            href={item.href}
                                            className="transition-colors duration-300 hover:text-secondaryColor"
                                        >
                                            {item.label}
                                        </Link>

                                        {index !==
                                            breadcrumbs.length - 1 && (
                                                <ChevronRight className="size-4" />
                                            )}
                                    </div>
                                ))}
                            </div>

                            {/* Badge */}
                            <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/10 px-5 py-2 backdrop-blur-xl mb-3">
                                <div className="size-2 rounded-full bg-secondaryColor" />

                                <span className="text-xs font-semibold uppercase tracking-[0.25em] text-secondaryColor">
                                    {badge}
                                </span>
                            </div>
                        </div>

                        {/* Main Content */}
                        <div className="padding flex flex-1 items-center pb-14">

                            <div className="max-w-3xl">

                                {/* Title */}
                                <h1 className="text-5xl font-bold leading-[0.95] tracking-[-0.04em] text-white md:text-7xl">
                                    {title}
                                </h1>

                                {/* Desc */}
                                <p className="mt-8 max-w-2xl text-base leading-relaxed text-lightColor/65 md:text-xl">
                                    {description}
                                </p>

                                {/* CTA */}
                                <div className="mt-10 flex flex-wrap items-center gap-4">

                                    <Button
                                        size={"lg"}
                                        variant={"second"}
                                        className="group"
                                        asChild
                                    >
                                        <Link
                                            href="https://wa.me/6281200000000"
                                            target="_blank"
                                        >
                                            Free Consultation

                                            <ArrowUpRight className="ml-2 size-4 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" />
                                        </Link>
                                    </Button>

                                    <Button
                                        size={"lg"}
                                        variant={"outline"}
                                        className="border-white/10 bg-white/5 text-lightColor backdrop-blur-xl hover:bg-white hover:text-mainColor"
                                        onClick={() => {
                                            window.scrollTo({
                                                top: window.innerHeight,
                                                behavior: "smooth",
                                            });
                                        }}
                                    >
                                        Explore More
                                    </Button>
                                </div>


                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </section>
    );
};