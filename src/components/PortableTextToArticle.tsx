import { Block, IImage } from "@/types";
import {PortableText} from '@portabletext/react'
import { PortableTextComponents } from "next-sanity";
import Image from "next/image";
import { urlForImage } from "@/sanity/lib/image";



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
    bullet: ({ children }) => <ul className="list-disc list-outside space-y-5 ps-5 text-lg text-gray-800 dark:text-neutral-200">{children}</ul>,
    number: ({ children }) => <ol className="list-decimal list-outside space-y-5 ps-5 text-lg text-gray-800 dark:text-neutral-200">{children}</ol>,
    checkmarks: ({ children }) => <ol className="list-disc list-check space-y-5 ps-5 text-lg text-gray-800 dark:text-neutral-200">{children}</ol>,
  },
  block: {
    normal: ({ children }) => <p className="text-lg text-gray-800 dark:text-neutral-200">{children}</p>,
    h1: ({ children }) => <h1 className="text-4xl sm:text-5xl font-semibold mb-8">{children}</h1>,
    h2: ({ children }) => <h2 className="text-3xl sm:text-4xl font-medium mt-8 mb-2">{children}</h2>,
    h3: ({ children }) => <h3 className="text-2xl sm:text-3xl mt-6 mb-1 font-semibold dark:text-white">{children}</h3>,
    h4: ({ children }) => <h4 className="text-xl sm:text-2xl font-medium mt-4 mb-1">{children}</h4>,
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-purple-500 pl-4 italic">{children}</blockquote>
    ),
  },
};

const PortableTextToArticle = ({ value }: {value:Block[]}) => {
  
  return <PortableText value={value} components={components} />;
};

export default PortableTextToArticle;
