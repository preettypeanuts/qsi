import Image from "next/image";
import { homePageData } from "@/data/home-data";
import { Button } from "./ui/button";

export const HeroHome = () => {
    const t = homePageData.heroSection;

    return (
        <section className="spacing mt-5">
            <div className="mx-5 grid min-h-[calc(100vh-7.5rem)] grid-cols-1 gap-5 lg:grid-cols-2">

                {/* Left Content */}
                <div className="flex h-full flex-col justify-between rounded-main bg-white p-10">

                    {/* Top Content */}
                    <div className="space-y-8">
                        {/* Heading */}
                        <div className="space-y-6">
                            <h1 className="max-w-2xl text-3xl font-bold leading-[1.1] tracking-tight text-foreground lg:text-6xl">
                                {t.headline}
                            </h1>
                            <div className="flex flex-wrap gap-4">
                                <Button
                                    variant={"primary"}
                                    size={"xl"}
                                >
                                    {t.cta.primary}
                                </Button>

                                <Button
                                    variant={"outlineSecondary"}
                                    size={"xl"}
                                >
                                    {t.cta.secondary}
                                </Button>
                            </div>

                        </div>
                    </div>

                    <p className="max-w-xl text-lg leading-relaxed text-muted-foreground">
                        {t.description}
                    </p>

                </div>

                {/* Right Content */}
                <div className="relative h-full overflow-hidden rounded-main">
                    <Image
                        src={t.img}
                        alt="Professional ISO certification audit meeting"
                        fill
                        priority
                        className="object-cover"
                    />

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-black/10" />

                    {/* Floating Card */}
                    <div className="absolute bottom-6 right-6 hidden max-w-64 rounded-3xl border border-white/20 bg-white/10 p-6 backdrop-blur-xl lg:block">
                        <div className="text-5xl font-bold text-white">
                            {t.card.primer}
                        </div>

                        <p className="mt-3 text-sm leading-relaxed text-white/80">
                            {t.card.sec}
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};