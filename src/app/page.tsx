import Feautures from "@/components/Feautures";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HeroContent from "@/components/HeroContent";
import Marquee from "@/components/Marquee";

export default function Home() {
  return (
    <main>
      <HeroContent />
      <Marquee/>
      <Feautures />
    </main>
  );
}
