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
import Image from "next/image";
import { toWhatsApp } from "@/lib/actions";

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

    useEffect(() => {
        forceClose();
        close();
    }, [pathname]);

    const NavLink = ({ href, label }: { href: string; label: string }) => {
        const isActive = pathname === href;
        return (
            <Link href={href} className="group relative flex flex-col items-center">
                <span className={`text-sm font-medium transition-colors duration-300 truncate
                    ${isActive ? "text-secondaryColor font-bold!" : "text-foreground hover:text-mainColor"}`}>
                    {label}
                </span>
                <div className={`absolute -bottom-1 h-0.75 rounded-full transition-all duration-300
                    ${isActive
                        ? "w-6 opacity-100 bg-secondaryColor"
                        : "w-0 opacity-0 group-hover:w-full group-hover:opacity-100 bg-mainColor"}`}
                />
            </Link>
        );
    };

    const isLayananActive = pathname.startsWith("/layanan");

    return (
        <>
            {/* Backdrop */}
            {(activeMega || isOpen) && (
                <div
                    onClick={() => { forceClose(); close(); }}
                    className="fixed inset-0 z-100 bg-black/20 backdrop-blur-xs"
                />
            )}

            {/* Navbar */}
            <nav className="fixed top-5 z-100 w-full px-3 md:px-5">
                <div className={`grid grid-cols-5 rounded-main border border-main px-2 py-2 backdrop-blur-xl duration-200 md:grid-cols-3
                    ${isScrolled || activeMega ? "bg-white/80 backdrop-blur-xl border border-darkColor/30" : "bg-white"}
                    ${visible ? "translate-y-0" : "translate-y-[-200%]"}
                `}>

                    {/* Logo */}
                    <Link href="/" className="justify-self-start flex items-center gap-3 col-span-4 md:col-span-1">
                        <div className="flex size-12 items-center justify-center rounded-secondary bg-white border border-border text-lg font-bold text-white shadow-md">
                            <Image
                                width={50}
                                height={50}
                                src="/logo.png"
                                alt="" />
                        </div>
                        <div className="block">
                            <h2 className="md:text-lg line-clamp-2 font-bold tracking-tight text-mainBlue leading-5">Qualified Sertifikasi Indonesia</h2>
                            <p className="text-xs text-muted-foreground md:block hidden">Professional ISO Services</p>
                        </div>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="justify-self-center hidden items-center gap-8 lg:flex">

                        <NavLink href="/" label="Beranda" />

                        {/* Layanan trigger — di antara Beranda dan Tentang Kami */}
                        <div
                            onMouseEnter={openMega}
                            onMouseLeave={closeMega}
                            className={`group relative flex cursor-pointer items-center gap-1 text-sm font-medium transition-colors duration-300
                                ${isLayananActive ? "text-secondaryColor" : "text-foreground hover:text-mainColor"}`}
                        >
                            <span>Layanan</span>
                            <ChevronDown
                                size={14}
                                className={`transition-transform duration-300 ${activeMega ? "rotate-180" : ""}`}
                            />
                            <div className={`absolute -bottom-1 left-1/2 -translate-x-1/2 h-0.75 rounded-full transition-all duration-300
                                ${isLayananActive
                                    ? "w-full opacity-100 bg-secondaryColor"
                                    : "w-0 opacity-0 group-hover:w-full group-hover:opacity-100 bg-mainColor"}`}
                            />
                        </div>

                        <NavLink href="/tentang-kami" label="Tentang Kami" />
                        <NavLink href="/cek-sertifikat" label="Cek Sertifikat" />
                        <NavLink href="/kontak" label="Kontak" />
                    </div>

                    {/* Right CTA */}
                    <div className="justify-self-end hidden items-center gap-3 lg:flex">
                        <Link href={toWhatsApp}>
                            <Button size="lg">Get Certified</Button>
                        </Link>
                    </div>

                    {/* Mobile Hamburger */}
                    <div className="justify-self-end flex items-center gap-2 lg:hidden col-span-1">
                        <button
                            onClick={toggle}
                            className="flex size-11 items-center justify-center rounded-2xl border border-border bg-background text-foreground transition-all hover:bg-muted"
                        >
                            <Menu className="size-5" />
                        </button>
                    </div>
                </div>
            </nav>

            <ServiceMegaMenu active={activeMega} onMouseEnter={openMega} onMouseLeave={closeMega} />
            <MobileMenu isOpen={isOpen} onClose={close} />
        </>
    );
};