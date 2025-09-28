import BlogCardSection from "@/components/BlogCardSection";
import FaqSection from "@/components/FaqSection";
import ProcessAccordion from "@/components/ProcessAccordion";
import StrategyCall from "@/components/StrategyCall";
import SubHeroSection from "@/components/SubHeroSection";
import TagCardSection from "@/components/TagCardSection";
import siteData from "@/data/siteData";

const hero = siteData?.fractionalGcPage?.hero;
const tagCardSection = siteData?.fractionalGcPage?.tagCardSection;
const processAccordion = siteData?.fractionalGcPage?.processAccordionSection;
const blogCardSection = siteData?.fractionalGcPage?.blogCardSection;
const legalExpertise = siteData?.fractionalGcPage?.legalExpertiseSection;
const faqSection = siteData?.fractionalGcPage?.faqSection;

export default function FGCSolutionsPage() {
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
