import TLNav from "@/components/tl-nav";
import TLFooter from "@/components/tl-footer";
import TLEffects from "@/components/tl-effects";

export default function EventLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <TLEffects />
      <TLNav subPage />
      {children}
      <TLFooter />
    </>
  );
}
