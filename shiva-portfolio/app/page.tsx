import ScrollProgress from "@/components/ScrollProgress";
import HeroSection from "@/components/HeroSection";
import TableOfContents from "@/components/TableOfContents";
import IntroductionSection from "@/components/IntroductionSection";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import CreationsSection from "@/components/CreationsSection";
import ContactSection from "@/components/ContactSection";
import ThankYouSection from "@/components/ThankYouSection";

export default function Home() {
  return (
    <main>
      <ScrollProgress />
      <HeroSection />
      <TableOfContents />
      <IntroductionSection />
      <AboutSection />
      <SkillsSection />
      <CreationsSection />
      <ContactSection />
      <ThankYouSection />
    </main>
  );
}
