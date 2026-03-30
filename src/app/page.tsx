import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { HeroSection } from "@/components/sections/hero";
import { FeaturesSection } from "@/components/sections/features";
import { WorkSection } from "@/components/sections/work";
import { StackSection } from "@/components/sections/stack";
import { ContactSection } from "@/components/sections/contact";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <WorkSection />
        <FeaturesSection />
        <StackSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
