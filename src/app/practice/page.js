import TagCardSection from "@/components/TagCardSection";
import StrategyCall from "@/components/StrategyCall";
import SubHeroSection from "@/components/SubHeroSection";
import CardSection from "@/components/CardSection";
import JomboCountSection from "@/components/JomboCountSection";
import FaqSection from "@/components/FaqSection";
import siteData from "@/data/siteData";
import SolutionCardSection from "@/components/SolutionCardSection";

const hero = siteData?.practicePage?.hero;
const ourSolution = siteData?.practicePage?.ourSolutionSection;
const cardSection = siteData?.practicePage?.cardSection;
const jomboCountSection = siteData?.practicePage?.jomboCountSection;
const tagCardSection = siteData?.practicePage?.tagCardSection;
const strategyCall = siteData?.practicePage?.strategyCallSection;
const faqSection = siteData?.practicePage?.faqSection;

export default function PracticePage() {
    return (
        <main className="space-y-12 bg-brand-gray">
            <SubHeroSection
                label={hero?.label}
                header={hero?.header}
                description={hero?.description}
                buttonLabel={hero?.buttonLabel}
            />
            <SolutionCardSection
                header={ourSolution?.header}
                cards={ourSolution?.cards}
            />
            <JomboCountSection
                header={jomboCountSection?.header}
                description={jomboCountSection?.description}
                counts={jomboCountSection?.counts}
            />
            <CardSection
                header={cardSection?.header}
                cards={cardSection?.cards}
            />
            <TagCardSection
                header={tagCardSection?.header}
                description={tagCardSection?.description}
                tags={tagCardSection?.tags}
            />
            <StrategyCall
                header={strategyCall?.header}
                description={strategyCall?.description}
                buttonLabel={strategyCall?.buttonLabel}
            />
            <FaqSection
                header={faqSection?.header}
                faqs={faqSection?.faqs}
                description={faqSection?.description}
            />
        </main>
    );
}
