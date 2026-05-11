"use client";

import Link from "next/link";
import { X } from "lucide-react";
import { Button } from "../ui/button";
import { servicesData } from "@/data/service-data";
import Image from "next/image";

const navigation = [
    { label: "Beranda", href: "/" },
    { label: "Semua Layanan", href: "/layanan" },
    { label: "Tentang Kami", href: "/tentang-kami" },
    { label: "Cek Sertifikat", href: "/cek-sertifikat" },
    { label: "Kontak", href: "/kontak" },
];

interface MobileMenuProps {
    isOpen: boolean;
    onClose: () => void;
}

export const MobileMenu = ({ isOpen, onClose }: MobileMenuProps) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-999 bg-white flex flex-col">
            {/* Header */}
            <div className="flex items-center justify-between px-5 h-20 border-b border-main">
                <div className="flex items-center gap-3">
                    <div className="flex size-12 items-center justify-center rounded-secondary bg-white border border-border text-lg font-bold text-white shadow-md">
                        <Image
                            width={50}
                            height={50}
                            src="/logo.png"
                            alt="Logo QSI" />
                    </div>
                    <div>
                        <h2 className="text-base font-bold tracking-tight text-foreground">Qualified Sertifikasi Indonesia</h2>
                        <p className="text-xs text-muted-foreground">Professional ISO Services</p>
                    </div>
                </div>
                <button
                    onClick={onClose}
                    className="flex size-10 items-center justify-center rounded-full border border-border hover:bg-muted transition"
                >
                    <X className="size-5" />
                </button>
            </div>

            {/* Scrollable content */}
            <div className="flex-1 overflow-y-auto px-5 py-6 space-y-8">

                {/* Main nav */}
                <div className="space-y-1">
                    {navigation.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            onClick={onClose}
                            className="block px-3 py-2.5 rounded-xl text-base font-medium text-foreground hover:bg-muted transition"
                        >
                            {item.label}
                        </Link>
                    ))}
                </div>

                {/* Services */}
                <div>
                    <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-3 px-3">
                        Layanan
                    </p>
                    <div className="grid grid-cols-1 gap-2">
                        {servicesData.map((service) => {
                            const Icon = service.icon;
                            return (
                                <Link
                                    key={service.id}
                                    href={`/layanan/${service.slug}`}
                                    onClick={onClose}
                                    className="group flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-muted transition"
                                >
                                    <div className="shrink-0 size-8 flex items-center justify-center rounded-lg bg-primary/10 text-primary">
                                        <Icon size={15} />
                                    </div>
                                    <div>
                                        <p className="text-sm font-semibold text-foreground">{service.name}</p>
                                        <p className="text-xs text-muted-foreground">{service.shortName}</p>
                                    </div>
                                </Link>
                            );
                        })}
                    </div>
                </div>

            </div>

            {/* CTA */}
            <div className="p-5 border-t border-main bg-white">
                <Link href="/kontak" onClick={onClose}>
                    <Button className="w-full" size="lg">
                        Get Certified
                    </Button>
                </Link>
            </div>
        </div>
    );
};
