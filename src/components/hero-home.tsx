import Image from "next/image";
import { homePageData } from "@/data/home-data";
import { Button } from "./ui/button";
import { toWhatsApp } from "@/lib/actions";
import Link from "next/link";

export const HeroHome = () => {
    const t = homePageData.heroSection;

    return (
        <section className="spacing mt-15 lg:mt-5">
            <div className="mx-3 grid min-h-[calc(100vh-5rem)] grid-cols-1 gap-3 lg:mx-5 lg:min-h-[calc(100vh-7.5rem)] lg:grid-cols-2 lg:gap-5">

                {/* Left Content */}
                <div className="flex flex-col justify-between rounded-main bg-white p-6 sm:p-8 lg:p-10">

                    {/* Top */}
                    <div className="space-y-6 lg:space-y-8">

                        {/* Heading */}
                        <div className="space-y-5">

                            <h1 className="animate-fade-up-in md:max-w-2xl text-2xl font-bold leading-[1.05] tracking-tight text-foreground sm:text-5xl lg:text-6xl">
                                {t.headline}
                            </h1>

                            <p className="animate-fade-up-in-200 max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base lg:hidden">
                                {t.description}
                            </p>

                            {/* CTA */}
                            <div className="animate-fade-up-in-400 flex flex-col gap-3 pt-2 sm:flex-row sm:flex-wrap">

                                <Link
                                    href={toWhatsApp}
                                    className="w-full sm:w-auto"
                                >
                                    <Button
                                        variant={"primary"}
                                        size={"xl"}
                                        className="w-full sm:w-auto"
                                    >
                                        {t.cta.primary}
                                    </Button>
                                </Link>

                                <Link
                                    href="/layanan"
                                    className="w-full sm:w-auto"
                                >
                                    <Button
                                        variant={"outlineSecondary"}
                                        size={"xl"}
                                        className="w-full sm:w-auto"
                                    >
                                        {t.cta.secondary}
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* Bottom Description Desktop */}
                    <p className="animate-fade-up-in-400 mt-10 hidden max-w-xl text-lg leading-relaxed text-muted-foreground lg:block">
                        {t.description}
                    </p>
                </div>

                {/* Right Content */}
                <div className="animate-fade-up-in-200 relative min-h-80 overflow-hidden rounded-main sm:min-h-105 lg:min-h-full">

                    <Image
                        src={"/banner.webp"}
                        alt="Professional ISO certification audit meeting"
                        fill
                        priority
                        className="object-cover"
                    />

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-black/10" />

                    {/* Mobile Gradient */}
                    <div className="absolute inset-x-0 bottom-0 h-40 bg-linear-to-t from-black/60 to-transparent lg:hidden" />

                    {/* Floating Card */}
                    <div className="animate-fade-up-in-400 absolute bottom-4 left-4 right-4 rounded-2xl border border-white/20 bg-darkColor/10 p-4 backdrop-blur-xl sm:bottom-6 sm:left-6 sm:right-auto sm:max-w-72 sm:p-5 lg:max-w-64">

                        <div className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
                            {t.card.primer}
                        </div>

                        <p className="mt-2 text-xs leading-relaxed text-white/80 sm:mt-3 sm:text-sm">
                            {t.card.sec}
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};