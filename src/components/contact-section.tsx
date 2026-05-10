"use client";

import Link from "next/link";
import {
    ArrowUpRight,
    ChevronDown,
} from "lucide-react";

import { contactPageData } from "@/data/contact-data";
import { Button } from "./ui/button";

export const ContactSection = () => {
    const t = contactPageData;

    return (
        <section className="spacing">
            <div className="margin">

                <div className="grid grid-cols-1 gap-6 lg:grid-cols-[0.9fr_1.1fr]">

                    {/* Left Contact Info */}
                    <div className="relative overflow-hidden rounded-[2.5rem] bg-mainColor p-8 text-lightColor md:p-10">

                        {/* Glow */}
                        <div className="absolute -left-20 top-0 size-60 rounded-full bg-secondaryColor/20 blur-3xl" />

                        <div className="relative z-10">

                            <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 backdrop-blur-xl">
                                <div className="size-2 rounded-full bg-secondaryColor" />

                                <span className="text-xs font-semibold uppercase tracking-[0.2em]">
                                    Contact Information
                                </span>
                            </div>

                            <h2 className="max-w-md text-4xl font-bold leading-none tracking-[-0.04em] md:text-5xl">
                                {t.contactInfo.title}
                            </h2>

                            <p className="mt-5 max-w-lg text-base leading-relaxed text-lightColor/70">
                                {t.contactInfo.description}
                            </p>

                            {/* Contact Items */}
                            <div className="flex flex-col gap-2 mt-10">

                                {t.contactInfo.items.map(
                                    (item, index) => {
                                        const Icon = item.icon;

                                        const content = (
                                            <div className="group flex items-start gap-4 rounded-[2rem] border border-white/10 bg-white/5 p-5 backdrop-blur-xl transition-all duration-300 hover:bg-white/10">
                                                <div className="flex size-14 shrink-0 items-center justify-center rounded-2xl bg-secondaryColor/15 text-secondaryColor">
                                                    <Icon className="size-6" />
                                                </div>

                                                <div>
                                                    <h3 className="text-lg font-semibold">
                                                        {item.title}
                                                    </h3>

                                                    <div className="mt-2 space-y-1">
                                                        {item.content.map(
                                                            (
                                                                text,
                                                                idx
                                                            ) => (
                                                                <p
                                                                    key={
                                                                        idx
                                                                    }
                                                                    className="text-sm leading-relaxed text-lightColor/70"
                                                                >
                                                                    {
                                                                        text
                                                                    }
                                                                </p>
                                                            )
                                                        )}
                                                    </div>
                                                </div>
                                            </div>
                                        );

                                        if (item.href) {
                                            return (
                                                <Link
                                                    key={index}
                                                    href={
                                                        item.href
                                                    }
                                                    target="_blank"
                                                >
                                                    {content}
                                                </Link>
                                            );
                                        }

                                        return (
                                            <div
                                                key={index}
                                            >
                                                {content}
                                            </div>
                                        );
                                    }
                                )}
                            </div>
                        </div>
                    </div>

                    {/* Right Form */}
                    <div className="rounded-[2.5rem] border border-border bg-background p-8 md:p-10">

                        <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-mainColor/10 px-4 py-2">
                            <div className="size-2 rounded-full bg-secondaryColor" />

                            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-mainColor">
                                Contact Form
                            </span>
                        </div>

                        <h2 className="text-4xl font-bold leading-none tracking-[-0.04em] text-foreground md:text-5xl">
                            {t.contactForm.title}
                        </h2>

                        <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground">
                            {t.contactForm.description}
                        </p>

                        {/* Form */}
                        <form className="mt-10 space-y-5">

                            <div className="grid grid-cols-1 gap-5 md:grid-cols-2">

                                {t.contactForm.fields
                                    .filter(
                                        (field) =>
                                            field.type !==
                                            "textarea" &&
                                            field.type !==
                                            "select"
                                    )
                                    .map((field) => (
                                        <div
                                            key={field.name}
                                            className="space-y-2"
                                        >
                                            <label className="text-sm font-medium text-foreground">
                                                {
                                                    field.label
                                                }
                                            </label>

                                            <input
                                                type={
                                                    field.type
                                                }
                                                placeholder={
                                                    field.placeholder
                                                }
                                                className="h-14 w-full rounded-2xl border border-border bg-background px-5 text-sm outline-none transition-all duration-300 placeholder:text-muted-foreground focus:border-mainColor"
                                            />
                                        </div>
                                    ))}
                            </div>

                            {/* Select */}
                            {t.contactForm.fields
                                .filter(
                                    (field) =>
                                        field.type ===
                                        "select"
                                )
                                .map((field) => (
                                    <div
                                        key={field.name}
                                        className="space-y-2"
                                    >
                                        <label className="text-sm font-medium text-foreground">
                                            {field.label}
                                        </label>

                                        <div className="relative">
                                            <select className="h-14 w-full appearance-none rounded-2xl border border-border bg-background px-5 text-sm outline-none transition-all duration-300 focus:border-mainColor">
                                                <option>
                                                    Select certification
                                                </option>

                                                {field.options?.map(
                                                    (
                                                        option,
                                                        index
                                                    ) => (
                                                        <option
                                                            key={
                                                                index
                                                            }
                                                        >
                                                            {
                                                                option
                                                            }
                                                        </option>
                                                    )
                                                )}
                                            </select>

                                            <ChevronDown className="absolute right-5 top-1/2 size-5 -translate-y-1/2 text-muted-foreground" />
                                        </div>
                                    </div>
                                ))}

                            {/* Textarea */}
                            {t.contactForm.fields
                                .filter(
                                    (field) =>
                                        field.type ===
                                        "textarea"
                                )
                                .map((field) => (
                                    <div
                                        key={field.name}
                                        className="space-y-2"
                                    >
                                        <label className="text-sm font-medium text-foreground">
                                            {field.label}
                                        </label>

                                        <textarea
                                            placeholder={
                                                field.placeholder
                                            }
                                            rows={6}
                                            className="w-full rounded-[2rem] border border-border bg-background px-5 py-4 text-sm outline-none transition-all duration-300 placeholder:text-muted-foreground focus:border-mainColor"
                                        />
                                    </div>
                                ))}

                            <Button
                                size={"xl"}
                                className="group mt-3 w-full"
                            >
                                {
                                    t.contactForm
                                        .submitText
                                }

                                <ArrowUpRight className="ml-2 size-4 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" />
                            </Button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};