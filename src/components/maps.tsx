"use client";

import { Plus } from "lucide-react";
import { useState } from "react";



export const Maps = () => {

    return (
        <>
            {/* Maps Section */}
            <section className="spacing pt-0">
                <div className="margin">

                    <div className="overflow-hidden rounded-[2.5rem] border border-border bg-background">

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
                                src="https://maps.google.com/maps?q=Ad%20Premier%20Office%20Park%20Jakarta&t=&z=13&ie=UTF8&iwloc=&output=embed"
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