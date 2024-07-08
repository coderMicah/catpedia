import { getImage } from "@/lib/getImage";
import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";

// type PlaceholderValue = "blur" | "empty" | `data:image/${string}`
// type OnLoadingComplete = (img: HTMLImageElement) => void

interface IImageProps {
  url: string;
  alt: string;
  width?: number | `${number}` | undefined;
  height?: number | `${number}` | undefined;
  fill?: boolean | undefined;
  containerClassName?: string;
  className?: string;
}

const CustomImage = async (imgProps: IImageProps) => {
  const { url, className, fill } = imgProps;
  const { base64, img } = await getImage(url);
  return (
    // <div className={cn("relative", containerClassName)}>
    <Image
      className={className}
      alt={""}
      src={img.src}
      width={img.width}
      height={img.height}
      placeholder="blur"
      blurDataURL={base64}
    />
    // </div>
  );
};

export default CustomImage;
