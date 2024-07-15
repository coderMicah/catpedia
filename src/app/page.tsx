import Feautures from "@/components/Feautures";
import HeroContent from "@/components/HeroContent";
import Marquee from "@/components/Marquee";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <HeroContent />
      <div className="relative flex h-full max-h-72 min-h-52 w-full min-w-72 max-w-max mx-auto items-center justify-center overflow-hidden bg-background flex-col">
        <Marquee>
          <Image src={"/demo.jpg"} width={300} height={300} alt="demo" />
        </Marquee>
      </div>
      <Feautures />
    </main>
  );
}
