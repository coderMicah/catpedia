import Image from "next/image";
import React from "react";

const Marquee = () => {
  return (
    <div className="relative flex flex-col justify-center overflow-hidden py-6 md:py-12">
      <div className="pointer-events-none mt-10 relative flex gap-1 overflow-hidden">
        <div className="animate-marquee flex min-w-full shrink-0 items-center justify-around gap-2">
          <Image
            className="aspect-square max-w-[clamp(16rem,26vmin,20rem)] rounded-md object-cover shadow-md"
            src="/demo.jpg"
            alt=""
            width={300}
            height={300}
          />
          <Image
            className="aspect-square max-w-[clamp(16rem,26vmin,20rem)] rounded-md object-cover shadow-md"
            src="/demo.jpg"
            alt=""
            width={300}
            height={300}
          />
          <Image
            className="aspect-square max-w-[clamp(16rem,26vmin,20rem)] rounded-md object-cover shadow-md"
            src="/demo.jpg"
            alt=""
            width={300}
            height={300}
          />
          <Image
            className="aspect-square max-w-[clamp(16rem,26vmin,20rem)] rounded-md object-cover shadow-md"
            src="/demo.jpg"
            alt=""
            width={300}
            height={300}
          />
          <Image
            className="aspect-square max-w-[clamp(16rem,26vmin,20rem)] rounded-md object-cover shadow-md"
            src="/demo.jpg"
            alt=""
            width={300}
            height={300}
          />
          <Image
            className="aspect-square max-w-[clamp(16rem,26vmin,20rem)] rounded-md object-cover shadow-md"
            src="/demo.jpg"
            alt=""
            width={300}
            height={300}
          />
        </div>
        <div
          aria-hidden="true"
          className="animate-marquee flex min-w-full shrink-0 items-center justify-around gap-2"
        >
          <Image
            className="aspect-square max-w-[clamp(16rem,26vmin,20rem)] rounded-md object-cover shadow-md"
            src="/demo.jpg"
            alt=""
            width={300}
            height={300}
          />
          <Image
            className="aspect-square max-w-[clamp(16rem,26vmin,20rem)] rounded-md object-cover shadow-md"
            src="/demo.jpg"
            alt=""
            width={300}
            height={300}
          />
          <Image
            className="aspect-square max-w-[clamp(16rem,26vmin,20rem)] rounded-md object-cover shadow-md"
            src="/demo.jpg"
            alt=""
            width={300}
            height={300}
          />
          <Image
            className="aspect-square max-w-[clamp(16rem,26vmin,20rem)] rounded-md object-cover shadow-md"
            src="/demo.jpg"
            alt=""
            width={300}
            height={300}
          />
          <Image
            className="aspect-square max-w-[clamp(16rem,26vmin,20rem)] rounded-md object-cover shadow-md"
            src="/demo.jpg"
            alt=""
            width={300}
            height={300}
          />
          <Image
            className="aspect-square max-w-[clamp(16rem,26vmin,20rem)] rounded-md object-cover shadow-md"
            src="/demo.jpg"
            alt=""
            width={300}
            height={300}
          />
        </div>
      </div>
    </div>
  );
};

export default Marquee;
