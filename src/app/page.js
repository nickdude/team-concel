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

export default function Home() {
  return (
    <main className="space-y-12 bg-brand-gray">

      <HeroSection />
      <BorderlessCardSection />
      <UspSection />
      <CountSection />
      <CardSection />
      <ProcessSection />
      <BlogCardSection />
      <StrategyCall />
      <FaqSection />
    </main>
  );
}
