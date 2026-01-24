import HeroSection from '@/components/sections/HeroSection';
import ProblemSection from '@/components/sections/ProblemSection';
import ImpactSection from '@/components/sections/ImpactSection';
import OfferingsOverviewSection from '@/components/sections/OfferingsOverviewSection';
import MethodSection from '@/components/sections/MethodSection';
import SocialProofSection from '@/components/sections/SocialProofSection';
import LeadMagnetSection from '@/components/sections/LeadMagnetSection';
import FAQSection from '@/components/sections/FAQSection';
import FinalCTASection from '@/components/sections/FinalCTASection';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ProblemSection />
      <ImpactSection />
      <OfferingsOverviewSection />
      <MethodSection />
      <SocialProofSection />
      <LeadMagnetSection />
      <FAQSection />
      <FinalCTASection />
    </>
  );
}
