import { Block, IImage } from "@/types";
import {PortableText} from '@portabletext/react'
import { PortableTextComponents } from "next-sanity";
import Image from "next/image";
import { urlForImage } from "@/sanity/lib/image";
import { AspectRatio } from "./ui/aspect-ratio";



const SampleImageComponent = ({value}:{value:IImage}) => {

  return (
    <AspectRatio ratio={16 / 9} className="my-8">
      <Image
        src={urlForImage(value).url()}
        alt={value.alt || ""}
        width={900}
        height={600}
        className="object-cover rounded-md"
        placeholder="blur"
        blurDataURL={value.asset.metadata.lqip}
      />
    </AspectRatio>
  );
};

const components: PortableTextComponents = {
  types: {
    image: SampleImageComponent,
  },
  block: {
    // Ex. 1: customizing common block types
    h1: ({ children }) => <h1 className="text-5xl font-semibold  mb-4">{children}</h1>,
    h2: ({ children }) => <h2 className="text-3xl font-medium">{children}</h2>,
    h3: ({ children }) => (
      <h3 className="text-2xl font-medium mt-6 mb-2 text-gray-900">{children}</h3>
    ),
    p: ({ children }) => <p className="text-lg">{children}</p>,

    blockquote: ({ children }) => (
      <blockquote className="border-l-purple-500">{children}</blockquote>
    ),

  },
};

const PortableTextToArticle = ({ value }: {value:Block[]}) => {
  return <PortableText value={value} components={components} />;
};

export default PortableTextToArticle;
