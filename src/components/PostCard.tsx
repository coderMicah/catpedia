"use client";
import Image from "next/image";
import Link from "next/link";
import { IImage } from "@/types";
import { urlForImage } from "@/sanity/lib/image";

function PostCard({
  title,
  mainImage,
  // gifImage,

  href
}: {
  title: string;
  mainImage:IImage;
  // gifImage:IImage;

  href:string;
}) {
  return (
    <div className="group relative">
    <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md h-[300px] bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
      <Image
        src={urlForImage(mainImage).url()}
        alt={title}
        className="h-full w-full object-cover object-center lg:h-full lg:w-full"
        width={200}
        height={500}
        placeholder="blur"
        blurDataURL={mainImage.asset.metadata.lqip}
      />
    </div>

    <div className="mt-4 ">
      <div>
        <h3 className="text-xl text-gray-700">
          <Link href={href}>
            <span aria-hidden="true" className="absolute inset-0" />
            {title}
          </Link>
        </h3>
        {/* <p className="mt-1 text-sm text-gray-500">Category</p> */}
      </div>
      {/* <p className="text-sm font-medium text-gray-900">{description}</p> */}
    </div>
  </div>
  );
}

export default PostCard;
