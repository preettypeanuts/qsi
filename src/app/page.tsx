import { CertificationProcess } from "@/components/certification-process";
import { HeroHome } from "@/components/hero-home";
import { ServicesPreview } from "@/components/service-preview";
import { ShortAbout } from "@/components/short-about";
import { WhyUs } from "@/components/why-us";


export default function Home() {
  return (
    <>
      <HeroHome />
      <ShortAbout />
      <WhyUs />
      <ServicesPreview />
      <CertificationProcess />
    </>
  );
}
