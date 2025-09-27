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

export default function Home() {
  return (
    <main className="py-10 space-y-12 bg-brand-gray">
      <ProcessSection />
      <BorderlessCardSection />
      <CardSection />
      <BlogCardSection />
      <StrategyCall />
      <FontPreview />
      <ColorGrid />

    </main>
  );
}
