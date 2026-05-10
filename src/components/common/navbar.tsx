"use client";

import Link from "next/link";
import { Menu } from "lucide-react";
import { Button } from "../ui/button";
import { useNavbarScroll } from "./useNavbarScroll";
import { usePathname } from "next/navigation";

const navigation = [
    {
        label: "Beranda",
        href: "/",
    },
    {
        label: "Tentang Kami",
        href: "/tentang-kami",
    },
    {
        label: "Layanan",
        href: "/layanan",
    },
    {
        label: "FAQ",
        href: "/faq",
    },
    {
        label: "Kontak",
        href: "/kontak",
    },
];

export const Navbar = () => {
    const { visible, isScrolled } = useNavbarScroll(false);
    const path = usePathname()

    return (
        <nav className="fixed top-5 px-5 z-999 w-full">
            <div className={`grid grid-cols-3 border border-main px-2 py-2 backdrop-blur-xl rounded-main duration-200
                            ${isScrolled ? " bg-white/80 backdrop-blur-xl" : " bg-white"}
                ${visible ? "translate-y-0" : "translate-y-[-200%]"}
                            
                `}>

                {/* Logo */}
                <Link
                    href="/"
                    className="flex items-center gap-3 justify-self-start"
                >
                    <div className="flex size-11 items-center justify-center rounded-2xl bg-primary text-lg font-bold text-white shadow-md">
                        Q
                    </div>

                    <div className="hidden sm:block">
                        <h2 className="text-lg font-bold tracking-tight text-foreground">
                            QSI Certification
                        </h2>

                        <p className="text-xs text-muted-foreground">
                            Professional ISO Services
                        </p>
                    </div>
                </Link>

                {/* Desktop Navigation */}
                <div className="hidden items-center gap-8 lg:flex justify-self-center">
                    {navigation.map((item, index) => (
                        <Link
                            key={index}
                            href={item.href}
                            className={`text-sm font-medium transition-colors duration-300 hover:text-secondary `}
                        >
                            {item.label}
                        </Link>
                    ))}
                </div>

                {/* Right CTA */}
                <div className="hidden items-center gap-3 lg:flex justify-self-end">


                    <Button
                        size={"lg"}
                    >
                        Get Certified
                    </Button>
                </div>

                {/* Mobile Menu */}
                <button className="flex size-11 items-center justify-center rounded-2xl border border-border bg-background text-foreground transition-all hover:bg-muted lg:hidden">
                    <Menu className="size-5" />
                </button>
            </div>
        </nav>
    );
};