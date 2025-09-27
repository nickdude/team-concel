import TagCardSection from "@/components/TagCardSection";
import StrategyCall from "@/components/StrategyCall";
import SubHeroSection from "@/components/SubHeroSection";
import CardSection from "@/components/CardSection";
import JomboCountSection from "@/components/JomboCountSection";
import FaqSection from "@/components/FaqSection";

export default function PracticePage() {
    return (
        <main className="space-y-12 bg-brand-gray">
            <SubHeroSection />
            <CardSection />
            <JomboCountSection />
            <TagCardSection />
            <StrategyCall />
            <FaqSection />
        </main>
    );
}
