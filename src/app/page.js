import FontPreview from "@/components/FontPreview";
import ColorGrid from "@/components/ColorGrid";
import BorderLessCard from "@/components/BorderLessCard";
import BorderlessCardSection from "@/components/BorderlessCardSection";
import Card from "@/components/Card";
import CardSection from "@/components/CardSection";
import BlogCard from "@/components/BlogCard";
import BlogCardSection from "@/components/BlogCardSection";
import StrategyCall from "@/components/StrategyCall";
import ProcessSection from "@/components/ProcessSection";
import CountSection from "@/components/CountSection";
import UspSection from "@/components/UspSection";
import SubHeroSection from "@/components/SubHeroSection";
import JomboCountCard from "@/components/JomboCountCard";
import JomboCountSection from "@/components/JomboCountSection";
import TagCard from "@/components/TagCard";
import TagCardSection from "@/components/TagCardSection";
import ProcessAccordion from "@/components/ProcessAccordion";
import HeroSection from "@/components/HeroSection";
import FaqSection from "@/components/FaqSection";

import siteData from "@/data/siteData";

const hero = siteData?.homePage?.hero;
const borderlessSection = siteData?.homePage?.borderlessSection;
const uspSection = siteData?.homePage?.uspSection;
const countSection = siteData?.homePage?.countSection;
const cardSection = siteData?.homePage?.cardSection;
const processSection = siteData?.homePage?.processSection;
const blogSection = siteData?.homePage?.blogCardSection;
const strategyCall = siteData?.homePage?.strategyCallSection;
const faqSection = siteData?.homePage?.faqSection;

export default function Home() {

  return (
    <main className="space-y-12 bg-brand-gray">
      {/* <HeroSection
        label={hero?.label}
        header={hero?.header}
        description={hero?.description}
        logos={hero?.logos}
        tag={hero?.tag}
        subTag={hero?.subTag}
        buttonLabel={hero?.buttonLabel}
      />
      
      */}
      <HeroSection
        label={hero?.label}
        header={hero?.header}
        description={hero?.description}
        logos={hero?.logos}
        tag={hero?.tag}
        subTag={hero?.subTag}
        buttonLabel={hero?.buttonLabel}
      />

      <BorderlessCardSection
        header={borderlessSection?.header}
        cards={borderlessSection?.cards}
      />
      <UspSection
        header={uspSection?.header}
        description={uspSection?.description}
        points={uspSection?.points}
        uspImage={uspSection?.uspImage}
      />

      <CountSection
        header={countSection?.header}
        description={countSection?.description}
        counts={countSection?.counts}
      />
      <CardSection
        header={cardSection?.header}
        description={cardSection?.description}
        cards={cardSection?.cards}
      />
      <ProcessSection
        header={processSection?.header}
        steps={processSection?.steps}
        image={processSection?.image}
      />
      <BlogCardSection
        header={blogSection?.header}
        blogs={blogSection?.blogs}
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
    </main>
  );
}
