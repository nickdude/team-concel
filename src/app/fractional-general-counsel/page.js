import BlogCardSection from "@/components/BlogCardSection";
import FaqSection from "@/components/FaqSection";
import ProcessAccordion from "@/components/ProcessAccordion";
import StrategyCall from "@/components/StrategyCall";
import SubHeroSection from "@/components/SubHeroSection";
import TagCardSection from "@/components/TagCardSection";

export default function FGCSolutionsPage() {
    return (
        <main className="space-y-12 bg-brand-gray">
            <SubHeroSection />
            <TagCardSection />
            <ProcessAccordion />
            <BlogCardSection />
            <StrategyCall />
            <FaqSection />
        </main>
    );
}
