import Sparkles from "@/components/Sparkles";
import HeroSection from "@/components/HeroSection";
import TimelineSection from "@/components/TimelineSection";
import GallerySection from "@/components/GallerySection";
import LetterSection from "@/components/LetterSection";
import ReasonsSection from "@/components/ReasonsSection";
import ProposalSection from "@/components/ProposalSection";
import FooterSection from "@/components/FooterSection";
import { ModeToggle } from "@/components/ModeToggle";
import StatusChip from "@/components/StatusChip";

const Index = () => {
  return (
    <div className="relative min-h-screen font-sans">
      <StatusChip />
      <Sparkles />
      <HeroSection />
      <TimelineSection />
      <GallerySection />
      <LetterSection />
      <ReasonsSection />
      <ProposalSection />
      <FooterSection />
      <ModeToggle />
    </div>
  );
};

export default Index;
