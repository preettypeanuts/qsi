"use client";

import { Plus } from "lucide-react";
import { useState } from "react";



export const Maps = () => {

    return (
        <>
            {/* Maps Section */}
            <section className="spacing pt-0">
                <div className="margin">

                    <div className="overflow-hidden rounded-main border border-border bg-background">

                        {/* Header */}
                        <div className="border-b border-border p-8 md:p-10">

                            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-mainColor/10 px-4 py-2">
                                <div className="size-2 rounded-full bg-secondaryColor" />

                                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-mainColor">
                                    Office Location
                                </span>
                            </div>

                            <h2 className="text-4xl font-bold leading-none tracking-[-0.04em] text-foreground md:text-5xl">
                                Visit Our Office
                            </h2>

                            <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
                                Schedule a meeting or consultation directly with our certification team at QSI office.
                            </p>
                        </div>

                        {/* Maps */}
                        <div className="relative h-125 w-full overflow-hidden">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.7519321606824!2d106.82335207499099!3d-6.296295093692803!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f3b69208f7bd%3A0x13f7eb9520cd483e!2sAD%20Premier!5e0!3m2!1sid!2sid!4v1778490162019!5m2!1sid!2sid"
                                width="100%"
                                height="100%"
                                loading="lazy"
                                allowFullScreen
                                referrerPolicy="no-referrer-when-downgrade"
                                className="border-0 grayscale-[0.1]"
                            />
                        </div>
                    </div>
                </div>
            </section>

          
        </>
    );
};

