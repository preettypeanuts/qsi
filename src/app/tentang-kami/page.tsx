import { CompanyStory } from "@/components/company-story";
import { ReusablePageHero } from "@/components/page-hero";
import { VisionMission } from "@/components/visi-misi";
import { pageHeroData } from "@/data/page-hero-data";

export default function AboutUsPage() {
    const t = pageHeroData.about;
    return (
        <>
            <ReusablePageHero
                badge={t.badge}
                title={t.title}
                description={t.description}
                image={t.image}
                breadcrumbs={t.breadcrumbs}
            />
            <CompanyStory />
            <VisionMission />
        </>
    )
}