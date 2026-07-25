import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { StatsStrip } from "@/components/StatsStrip";
import { Pillars } from "@/components/Pillars";
import { Cards } from "@/components/Cards";
import { HowToPlay } from "@/components/HowToPlay";
import { WebInAction } from "@/components/WebInAction";
import { Faq } from "@/components/Faq";
import { WaitlistCTA } from "@/components/WaitlistCTA";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <StatsStrip />
        <Pillars />
        <Cards />
        <HowToPlay />
        <WebInAction />
        <Faq />
        <WaitlistCTA />
      </main>
      <Footer />
    </>
  );
}
