import BioSection from "@/components/BioSection";
import BlogCardSection from "@/components/BlogCardSection";
import CardSection from "@/components/CardSection";
import FaqSection from "@/components/FaqSection";
import MiniCard from "@/components/MiniCard";
import MiniCardSection from "@/components/MiniCardSection";
import OurMission from "@/components/OurMission";
import ProcessAccordion from "@/components/ProcessAccordion";
import StrategyCall from "@/components/StrategyCall";
import SubHeroSection from "@/components/SubHeroSection";
import TagCardSection from "@/components/TagCardSection";
import siteData from "@/data/siteData";

const hero = siteData?.aboutUsPage?.hero;
const ourMission = siteData?.aboutUsPage?.ourMissionSection;
const cardSection = siteData?.aboutUsPage?.cardSection;
const bioSection = siteData?.aboutUsPage?.bioSection;
const tagCardSection = siteData?.aboutUsPage?.tagCardSection;
const strategyCall = siteData?.homePage?.strategyCallSection;
const faqSection = siteData?.aboutUsPage?.faqSection;

export default function AboutUsPage() {
    return (
        <main className=" bg-brand-gray">

            {/* <SubHeroSection
                label={hero?.label}
                header={hero?.header}
                description={hero?.description}
                buttonLabel={hero?.buttonLabel}
            />
            <OurMission
                header={ourMission?.header}
                points={ourMission?.points}
                description={ourMission?.description}
                image={ourMission?.image}
                buttonLabel={ourMission?.buttonLabel}
            />

           */}
            <OurMission
                header={ourMission?.header}
                points={ourMission?.points}
                description={ourMission?.description}
                image={ourMission?.image}
                buttonLabel={ourMission?.buttonLabel}
            />
            <MiniCardSection
                header={cardSection?.header}
                description={cardSection?.description}
                cards={cardSection?.cards}
            />
            <BioSection
                header={bioSection?.header}
                description={bioSection?.description}
                image={bioSection?.image}
                funFact={bioSection?.funFact}
                buttonLabel={bioSection?.buttonLabel}
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


            {/* <SubHeroSection
                label={hero?.label}
                header={hero?.header}
                description={hero?.description}
                buttonLabel={hero?.buttonLabel}
            />
            <CardSection
                header={cardSection?.header}
                cards={cardSection?.cards}
            /> */}
            {/* <TagCardSection
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
            /> */}
        </main>
    );
}
