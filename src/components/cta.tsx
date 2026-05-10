import { ArrowUpRight, PhoneCall } from "lucide-react";

import { homePageData } from "@/data/home-data";
import { Button } from "./ui/button";

export const CTA = () => {
    const t = homePageData.finalCTA;

    return (
        <section className="spacing margin">
            <div className="p-10 relative overflow-hidden rounded-main bg-mainColor text-lightColor">

                {/* Glow */}
                <div className="absolute -left-20 top-0 size-72 rounded-full bg-secondaryColor/20 blur-3xl" />
                <div className="absolute -bottom-32 right-0 size-80 rounded-full bg-white/10 blur-3xl" />

                <div className="relative padding flex flex-col items-center text-center">

                    {/* Label */}
                    <div className="mb-6 inline-flex items-center rounded-full border border-white/10 bg-white/10 px-4 py-1.5 text-sm font-medium uppercase tracking-[0.2em] text-secondaryColor backdrop-blur-xl">
                        Ready To Get Certified
                    </div>

                    {/* Heading */}
                    <h2 className="max-w-4xl text-4xl font-bold leading-tight md:text-6xl">
                        {t.headline}
                    </h2>

                    {/* Description */}
                    <p className="mt-6 max-w-2xl text-base leading-relaxed text-lightColor/70 md:text-lg">
                        Connect with our professional certification team and
                        accelerate your business compliance with international
                        standards.
                    </p>

                    {/* Actions */}
                    <div className="mt-10 flex flex-wrap items-center justify-center gap-4">

                        <Button
                            size={"lg"}
                            variant={"second"}
                            className="group"
                        >
                            {t.cta.primary}

                            <ArrowUpRight className="ml-2 size-4 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" />
                        </Button>

                        <Button
                            size={"lg"}
                            variant={"outline"}
                            className="border-white/15 bg-white/5 text-lightColor backdrop-blur-xl hover:bg-white hover:text-mainColor"
                        >
                            <PhoneCall className="mr-2 size-4" />

                            {t.cta.secondary}
                        </Button>
                    </div>

                    {/* Shortcut Contact */}
                    <div className="mt-12 flex flex-wrap items-center justify-center gap-4 text-sm text-lightColor/60">
                        <span>info@qsi-certification.com</span>

                        <div className="size-1 rounded-full bg-white/20" />

                        <span>+62 812 0000 0000</span>

                        <div className="size-1 rounded-full bg-white/20" />

                        <span>Jakarta, Indonesia</span>
                    </div>
                </div>
            </div>
        </section>
    );
};