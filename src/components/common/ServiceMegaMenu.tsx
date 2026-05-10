"use client";

import { servicesData } from "@/data/service-data";
import Link from "next/link";

interface ServiceMegaMenuProps {
    active: boolean;
    onMouseEnter: () => void;
    onMouseLeave: () => void;
}

export const ServiceMegaMenu = ({ active, onMouseEnter, onMouseLeave }: ServiceMegaMenuProps) => {
    return (
        <div
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            className={`fixed left-0 top-0 w-full z-40 transition-all duration-300 pt-22 px-5
                ${active
                    ? "opacity-100 translate-y-0 pointer-events-auto"
                    : "opacity-0 -translate-y-2 pointer-events-none"
                }`}
        >
            <div className="bg-white border border-main rounded-main shadow-xl overflow-hidden">
                {/* Service grid */}
                <div className="grid grid-cols-5 gap-3 p-4">
                    {servicesData.map((service) => {
                        const Icon = service.icon;
                        return (
                            <Link
                                key={service.id}
                                href={`/layanan/${service.slug}`}
                                className="group flex flex-col items-start gap-3 p-3 rounded-xl border border-border bg-muted/40
                                           hover:border-primary/30 hover:bg-primary/5 hover:shadow-sm
                                           transition-all duration-200"
                            >
                                <div className="flex items-center justify-between w-full">
                                    <p className="text-md font-semibold text-foreground group-hover:text-primary transition-colors leading-tight">
                                        {service.name}
                                    </p>
                                    <div className="shrink-0 mt-0.5 size-8 flex items-center justify-center rounded-lg bg-white border border-border text-primary shadow-xs group-hover:bg-primary group-hover:text-white group-hover:border-primary transition-all duration-200">
                                        <Icon size={18} />
                                    </div>
                                </div>
                                <div>
                                    <p className="text-sm text-secondaryColor font-bold leading-snug mt-0.5">
                                        {service.shortName}
                                    </p>
                                    <p className="text-xs text-muted-foreground leading-snug mt-0.5">
                                        {service.shortDescription}
                                    </p>
                                </div>
                            </Link>
                        );
                    })}
                </div>

                {/* CTA bar */}
                <div className="border-t border-main bg-muted/40 px-6 py-4 flex items-center justify-between">
                    <p className="text-sm text-muted-foreground">
                        Tidak yakin sertifikasi mana yang tepat untuk bisnis Anda?
                    </p>
                    <Link href="/kontak">
                        <button className="px-5 py-2 rounded-full bg-primary text-white text-sm font-medium hover:opacity-90 transition">
                            Konsultasi Gratis
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};