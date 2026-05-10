
import { FaqService } from "@/components/faq-service";
import { ReusablePageHero } from "@/components/page-hero";
import { ServicesGrid } from "@/components/service-grid";
import { pageHeroData } from "@/data/page-hero-data";

export default function LayananPage() {
    const t = pageHeroData.services;

    return (
        <>
            <ReusablePageHero
                badge={t.badge}
                title={t.title}
                description={t.description}
                image={t.image}
                breadcrumbs={t.breadcrumbs}
            />
            <ServicesGrid />
            <FaqService />
        </>
    )
}