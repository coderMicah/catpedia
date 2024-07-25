
import Image from "next/image";
import Link from "next/link";
import { IImage } from "@/types";
import { urlForImage } from "@/sanity/lib/image";


function PostCard({
  title,
  mainImage,
  href,
}: {
  title: string;
  mainImage: IImage;
  href: string;
}) {
  return (
    <Link className="group flex flex-col focus:outline-none" href={href}>
      <div className="relative pt-[50%] sm:pt-[70%] rounded-xl overflow-hidden">
        <Image
          className="size-full absolute top-0 start-0 object-cover group-hover:scale-105 group-focus:scale-105 transition-transform duration-500 ease-in-out rounded-xl"
          src={urlForImage(mainImage).url()}
          width={300}
          height={300}
          placeholder="blur"
          blurDataURL={mainImage.asset.metadata.lqip}
          alt="card image"
        />
      </div>

      <div className="mt-5">
        <h3 className="text-xl font-semibold text-gray-800 group-hover:text-gray-600 dark:text-neutral-300 dark:group-hover:text-white ">
          {title}
        </h3>
      </div>
    </Link>
  );
}

export default PostCard;
