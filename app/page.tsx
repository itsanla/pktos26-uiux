import TLNav from "@/components/tl-nav";
import TLHero from "@/components/tl-hero";
import TLTicker from "@/components/tl-ticker";
import TLStory from "@/components/tl-story";
import TLGallery from "@/components/tl-gallery";
import TLTips from "@/components/tl-tips";
import TLMap from "@/components/tl-map";
import TLQuotes from "@/components/tl-quotes";
import TLFooter from "@/components/tl-footer";
import TLEffects from "@/components/tl-effects";

export default function Home() {
  return (
    <>
      <TLEffects />
      <TLNav />
      <TLHero />
      <TLTicker />
      <TLStory />
      <TLGallery />
      <TLTips />
      <TLMap />
      <TLQuotes />
      <TLFooter />
    </>
  );
}
