import BioSection from "@/components/BioSection";
import BlogCardSection from "@/components/BlogCardSection";
import CardSection from "@/components/CardSection";
import FaqSection from "@/components/FaqSection";
import HeroSection from "@/components/HeroSection";
import MiniCard from "@/components/MiniCard";
import MiniCardSection from "@/components/MiniCardSection";
import OurImpactSection from "@/components/OurImpactSection";
import OurJourneySection from "@/components/OurJourneySection";
import OurMission from "@/components/OurMission";
import ProcessAccordion from "@/components/ProcessAccordion";
import StrategyCall from "@/components/StrategyCall";
import SubHeroSection from "@/components/SubHeroSection";
import TagCardSection from "@/components/TagCardSection";
import TeamCardSection from "@/components/TeamCardSection";
import UspSection from "@/components/UspSection";
import siteData from "@/data/siteData";

const hero = siteData?.aboutUsPage?.hero;
const ourMission = siteData?.aboutUsPage?.ourMissionSection;
const ourFounderSection = siteData?.aboutUsPage?.ourFounderSection;
const cardSection = siteData?.aboutUsPage?.cardSection;
const bioSection = siteData?.aboutUsPage?.bioSection;
const tagCardSection = siteData?.aboutUsPage?.tagCardSection;
const strategyCall = siteData?.aboutUsPage?.strategyCallSection;
const faqSection = siteData?.aboutUsPage?.faqSection;
const teamSection = siteData?.aboutUsPage?.teamSection;
const ourImpactSection = siteData?.aboutUsPage?.ourImpactSection;
const ourJourneySection = siteData?.aboutUsPage?.ourJourneySection;

export default function AboutUsPage() {

    return (
        <main className=" bg-brand-gray">

            <SubHeroSection
                label={hero?.label}
                header={hero?.header}
                description={hero?.description}
                buttonLabel={hero?.buttonLabel}
            />

            <UspSection
                header={ourMission?.header}
                description={ourMission?.description}
                points={ourMission?.points}
                uspImage={ourMission?.uspImage}
                breakLine={false}
            />

            <TagCardSection
                header={tagCardSection?.header}
                description={tagCardSection?.description}
                tags={tagCardSection?.tags}
            />

            <OurImpactSection
                header={ourImpactSection?.header}
                description={ourImpactSection?.description}
            />
            <OurJourneySection
                header={ourJourneySection?.header}
                description={ourJourneySection?.description}
            />

            <TeamCardSection
                header={teamSection?.header}
                description={teamSection?.description}
                cards={teamSection?.cards}
            />
            <UspSection
                header={ourFounderSection?.header}
                description={ourFounderSection?.description}
                points={ourFounderSection?.points}
                uspImage={ourFounderSection?.uspImage}
                breakLine={false}
            />

            <StrategyCall
                header={strategyCall?.header}
                description={strategyCall?.description}
                buttonLabel={strategyCall?.buttonLabel}
            />
            <FaqSection
                header={faqSection?.header}
                description={faqSection?.description}
                faqs={faqSection?.faqs}
            />


            {/* <OurMission
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
            /> */}
        </main>
    );
}
