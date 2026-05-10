"use client";

import Link from "next/link";
import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu } from "lucide-react";
import { Button } from "../ui/button";
import { useNavbarScroll } from "./useNavbarScroll";
import { useMegaMenu } from "./useMegaMenu";
import { useMobileMenu } from "./useMobileMenu";
import { ServiceMegaMenu } from "./ServiceMegaMenu";
import { MobileMenu } from "./MobileMenu";

const navigation = [
    { label: "Beranda", href: "/" },
    { label: "Tentang Kami", href: "/tentang-kami" },
    { label: "Cek Sertifikat", href: "/cek-sertifikat" },
    { label: "Kontak", href: "/kontak" },
];

export const Navbar = () => {
    const { activeMega, openMega, closeMega, forceClose } = useMegaMenu();
    const { visible, isScrolled } = useNavbarScroll(activeMega);
    const { isOpen, toggle, close } = useMobileMenu();
    const pathname = usePathname();

    // Tutup semua menu saat pindah halaman
    useEffect(() => {
        forceClose();
        close();
    }, [pathname]);

    return (
        <>
            {/* Backdrop */}
            {(activeMega || isOpen) && (
                <div
                    onClick={() => { forceClose(); close(); }}
                    className="fixed inset-0 bg-black/20 backdrop-blur-xs z-30"
                />
            )}

            {/* Navbar */}
            <nav className="fixed top-5 px-5 z-50 w-full">
                <div className={`grid grid-cols-2 md:grid-cols-3 border border-main px-2 py-2 backdrop-blur-xl rounded-main duration-200
                    ${isScrolled || activeMega ? "bg-white/80 backdrop-blur-xl" : "bg-white"}
                    ${visible ? "translate-y-0" : "translate-y-[-200%]"}
                `}>

                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-3 justify-self-start">
                        <div className="flex size-11 items-center justify-center rounded-2xl bg-primary text-lg font-bold text-white shadow-md">
                            Q
                        </div>
                        <div className="hidden sm:block">
                            <h2 className="text-lg font-bold tracking-tight text-foreground">QSI Certification</h2>
                            <p className="text-xs text-muted-foreground">Professional ISO Services</p>
                        </div>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden items-center gap-8 lg:flex justify-self-center">
                        {navigation.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                className="text-sm font-medium transition-colors duration-300 hover:text-secondary truncate"
                            >
                                {item.label}
                            </Link>
                        ))}

                        {/* Services trigger */}
                        <div
                            onMouseEnter={openMega}
                            onMouseLeave={closeMega}
                            className="flex items-center gap-1 text-sm font-medium cursor-pointer hover:text-secondary transition-colors duration-300"
                        >
                            <span>Layanan</span>
                            <ChevronDown
                                size={14}
                                className={`transition-transform duration-300 ${activeMega ? "rotate-180" : ""}`}
                            />
                        </div>
                    </div>

                    {/* Right CTA */}
                    <div className="hidden items-center gap-3 lg:flex justify-self-end">
                        <Button size="lg">Get Certified</Button>
                    </div>

                    {/* Mobile hamburger */}
                    <div className="flex items-center gap-2 justify-self-end lg:hidden">
                        <button
                            onClick={toggle}
                            className="flex size-11 items-center justify-center rounded-2xl border border-border bg-background text-foreground transition-all hover:bg-muted"
                        >
                            <Menu className="size-5" />
                        </button>
                    </div>
                </div>
            </nav>

            {/* Mega Menu */}
            <ServiceMegaMenu
                active={activeMega}
                onMouseEnter={openMega}
                onMouseLeave={closeMega}
            />

            {/* Mobile Menu */}
            <MobileMenu isOpen={isOpen} onClose={close} />
        </>
    );
};
