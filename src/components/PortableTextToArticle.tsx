import { Block, IImage } from "@/types";
import {PortableText} from '@portabletext/react'
import { PortableTextComponents } from "next-sanity";
import Image from "next/image";
import { urlForImage } from "@/sanity/lib/image";
import { AspectRatio } from "./ui/aspect-ratio";



const SampleImageComponent = ({value}:{value:IImage}) => {

  return (
   
      <Image
        src={urlForImage(value).url()}
        alt={value.alt || ""}
        width={900}
        height={600}
        className="object-cover rounded-md"
        placeholder="blur"
        blurDataURL={value.asset.metadata.lqip}
      />
   
  );
};

const components: PortableTextComponents = {
  types: {
    image: SampleImageComponent,
  },
  list: {
    bullet: ({ children }) => <ul className="mt-4 ml-8 list-disc">{children}</ul>,
    number: ({ children }) => <ol className="mt-4 ml-8 list-decimal">{children}</ol>,
    checkmarks: ({ children }) => <ol className="mt-4 ml-8 list-check">{children}</ol>,
  },
  block: {
    h1: ({ children }) => <h1 className="text-4xl sm:text-5xl font-semibold mb-6">{children}</h1>,
    h2: ({ children }) => <h2 className="text-3xl sm:text-4xl font-medium mt-8 mb-4">{children}</h2>,
    h3: ({ children }) => <h3 className="text-2xl sm:text-3xl font-semibold mt-8 mb-4">{children}</h3>,
    h4: ({ children }) => <h4 className="text-xl sm:text-2xl font-medium mt-6 mb-2">{children}</h4>,
    p: ({ children }) => <p className="text-lg sm:text-xl mb-4">{children}</p>,
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-purple-500 pl-4 italic">{children}</blockquote>
    ),
  },
};

const PortableTextToArticle = ({ value }: {value:Block[]}) => {
  return <PortableText value={value} components={components} />;
};

export default PortableTextToArticle;
