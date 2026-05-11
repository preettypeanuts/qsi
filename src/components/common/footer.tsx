// components/footer.tsx

import Link from "next/link";
import {
    ArrowUpRight,
} from "lucide-react";

import { commonData } from "@/data/common";
import { Button } from "../ui/button";
import Image from "next/image";
import { toWhatsApp } from "@/lib/actions";
import { contactPageData } from "@/data/contact-data";

export const Footer = () => {
    const t = commonData.footer;
    const c = contactPageData.contactInfo.items;


    return (
        <footer className="pt-0">
            <div className="spacing space-y-10 overflow-hidden rounded-main bg-mainColor text-lightColor">

                {/* CTA */}
                <div className="border-b border-white/10 pb-10">
                    <div className="padding flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-center">

                        <div className="">
                            <p className="text-sm font-medium uppercase tracking-[0.2em] text-secondaryColor">
                                Ready To Get Certified
                            </p>

                            <h2 className="mt-3 text-3xl font-bold leading-tight md:text-5xl">
                                {t.cta.title}
                            </h2>
                        </div>

                        <a href={toWhatsApp}>
                            <Button
                                size={"lg"}
                                variant={"second"}
                                className="group"
                            >
                                {t.cta.button}

                                <ArrowUpRight className="ml-2 size-4 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" />
                            </Button>
                        </a>
                    </div>
                </div>

                {/* Main Footer */}
                <div className="padding grid grid-cols-1 gap-12 lg:grid-cols-[1.5fr_1fr_1fr_1.2fr]">

                    {/* Company */}
                    <div>
                        <div className="flex items-center gap-3">
                            <div className="flex size-12 items-center justify-center rounded-2xl bg-secondaryColor/15">
                                <div className="flex size-12 items-center justify-center rounded-secondary bg-white border border-border text-lg font-bold text-white shadow-md">
                                    <Image
                                        width={50}
                                        height={50}
                                        src="/logo.png"
                                        alt="" />
                                </div>
                            </div>

                            <div className="hidden sm:block">
                                <h2 className="text-lg font-bold tracking-tight text-white">Qualified Sertifikasi Indonesia</h2>
                                <p className="text-xs text-muted-foreground">Professional ISO Services</p>
                            </div>
                        </div>

                        <p className="mt-6 text-base leading-relaxed text-lightColor/70">
                            {t.company.description}
                        </p>

                        <p className="mt-6 text-sm font-medium text-secondaryColor">
                            {t.company.tagline}
                        </p>
                    </div>

                    {/* Navigation */}
                    <div>
                        <h4 className="text-lg font-semibold">
                            Navigation
                        </h4>

                        <div className="mt-6 flex flex-col gap-4">
                            {t.navigation.map((item, index) => (
                                <Link
                                    key={index}
                                    href={item.href}
                                    className="text-lightColor/70 transition-colors duration-300 hover:text-secondaryColor"
                                >
                                    {item.label}
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Services */}
                    <div>
                        <h4 className="text-lg font-semibold">
                            Services
                        </h4>

                        <div className="mt-6 flex flex-col gap-4">
                            {t.services.map((item, index) => (
                                <Link
                                    key={index}
                                    href={item.href}
                                    className="text-lightColor/70 transition-colors duration-300 hover:text-secondaryColor"
                                >
                                    {item.label}
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="text-lg font-semibold">
                            Contact
                        </h4>

                        <div className="mt-6 flex flex-col gap-5">
                            {c.map((item, index) => {
                                const Icon = item.icon;

                                return (
                                    <Link
                                        key={index}
                                        href={item.href}
                                        className="group flex items-start gap-4"
                                    >
                                        <div className="flex size-11 min-w-11 items-center justify-center rounded-xl bg-white/5 text-secondaryColor transition-colors duration-300 group-hover:bg-secondaryColor/10">
                                            <Icon className="size-5" />
                                        </div>

                                        <div>
                                            <p className="text-sm text-lightColor/50">
                                                {item.title}
                                            </p>

                                            <p className="mt-1 text-sm text-lightColor/80 transition-colors duration-300 group-hover:text-secondaryColor line-clamp-2">
                                                {item.content}
                                            </p>
                                        </div>
                                    </Link>
                                );
                            })}
                        </div>
                    </div>
                </div>

                {/* Bottom */}
                <div className="border-t border-white/10 pt-10">
                    <div className="padding flex flex-col gap-5 text-sm text-lightColor/50 lg:flex-row lg:items-center lg:justify-between">

                        <p>
                            © 2026 Qualified Sertifikasi Indonesia. All rights reserved.
                        </p>

                        <div className="flex items-center gap-6">
                            {t.legal.map((item, index) => (
                                <Link
                                    key={index}
                                    href={item.href}
                                    className="transition-colors duration-300 hover:text-secondaryColor"
                                >
                                    {item.label}
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};