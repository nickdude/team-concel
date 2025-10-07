import BlogCardSection from "@/components/BlogCardSection";
import FaqSection from "@/components/FaqSection";
import ProcessAccordion from "@/components/ProcessAccordion";
import StrategyCall from "@/components/StrategyCall";
import SubHeroSection from "@/components/SubHeroSection";
import TagCardSection from "@/components/TagCardSection";
import siteData from "@/data/siteData";

const hero = siteData?.caasPage?.hero;
const tagCardSection = siteData?.caasPage?.tagCardSection;
const processAccordion = siteData?.caasPage?.processAccordionSection;
const blogCardSection = siteData?.caasPage?.blogCardSection;
const legalExpertise = siteData?.caasPage?.legalExpertiseSection;
const faqSection = siteData?.caasPage?.faqSection;

export default function CaaSPage() {
    return (
        <main className="space-y-12 bg-brand-gray">
            <SubHeroSection
                label={hero?.label}
                header={hero?.header}
                description={hero?.description}
                buttonLabel={hero?.buttonLabel}
            />
            <TagCardSection
                header={tagCardSection?.header}
                description={tagCardSection?.description}
                tags={tagCardSection?.tags}
            />
            <ProcessAccordion
                header={processAccordion?.header}
                description={processAccordion?.description}
                processes={processAccordion?.processes}
                buttonLabel={processAccordion?.buttonLabel}
                image={processAccordion?.image}
            />
            <BlogCardSection
                header={blogCardSection?.header}
                blogs={blogCardSection?.blogs}
            />
            <StrategyCall
                header={legalExpertise?.header}
                description={legalExpertise?.description}
                buttonLabel={legalExpertise?.buttonLabel}
            />
            <FaqSection
                header={faqSection?.header}
                faqs={faqSection?.faqs}
                description={faqSection?.description}
            />
        </main>
    );
}
