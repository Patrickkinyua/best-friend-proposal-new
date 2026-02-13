import Sparkles from "@/components/Sparkles";
import HeroSection from "@/components/HeroSection";
import TimelineSection from "@/components/TimelineSection";
import GallerySection from "@/components/GallerySection";
import LetterSection from "@/components/LetterSection";
import ReasonsSection from "@/components/ReasonsSection";
import ProposalSection from "@/components/ProposalSection";
import FooterSection from "@/components/FooterSection";

const Index = () => {
  return (
    <div className="relative min-h-screen">
      <Sparkles />
      <HeroSection />
      <TimelineSection />
      <GallerySection />
      <LetterSection />
      <ReasonsSection />
      <ProposalSection />
      <FooterSection />
    </div>
  );
};

export default Index;
