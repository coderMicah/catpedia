import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const featured = [
  {
    title: "Tips for New Cat Owners",
    description:
      "Explore Tips for new cat owners, behavior management, and creating a cat-friendly environment.",
    image: "/brownCat.jpg",
    link: "/care-and-tips/tips",
  },
  {
    title: "Explore Articles",
    description:
      "Articles and guides on cat care, grooming, feeding, and health.",
    image: "/cat1.jpg",
    link: "/care-and-tips/articles",
  },
];

const Features = () => {
  return (
    <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
      <div className="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
        <h2 className="text-2xl font-bold md:text-4xl md:leading-tight dark:text-white">
          Insights
        </h2>
        <p className="mt-1 text-gray-600 dark:text-white">
          Get insights about your feline friend from our experts
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {featured.map((feat) => (
          <Link
            key={feat.title}
            className="group flex flex-col focus:outline-none"
            href={feat.link}
          >
            <div className="relative pt-[50%] sm:pt-[70%] rounded-xl overflow-hidden">
              <Image
                className="size-full absolute top-0 start-0 object-cover group-hover:scale-105 group-focus:scale-105 transition-transform duration-500 ease-in-out rounded-xl"
                src={feat.image}
                width={300}
                height={300}
                alt="card image"
              />
            </div>

            <div className="mt-7">
              <h3 className="text-xl font-semibold text-gray-800 group-hover:text-gray-600 dark:text-white dark:group-hover:text-white ">
                {feat.title}
              </h3>
              <p className="mt-3 text-gray-800 dark:text-white line-clamp-2 hover:line-clamp-none">
                {feat.description}
              </p>
              <p className="mt-5 inline-flex items-center gap-x-1 text-sm font-medium text-orange-600 decoration-2 group-hover:underline group-focus:underline  dark:text-orange-600">
                Read More
                <ChevronRight className="h-4 w-4" />
              </p>
            </div>
          </Link>
        ))}

        <div className="group relative flex flex-col w-full min-h-60 bg-center bg-cover rounded-xl hover:shadow-lg focus:outline-none focus:shadow-lg transition">
          <div className="absolute inset-0 -z-10 bg-black dark:opacity-50 rounded-xl">
            <Image
              src={"/brown-cat.jpg"}
             fill
              alt="coverImage"
              className=" rounded-xl object-cover"
            />
          </div>
          <div className="flex-auto p-4 md:p-6">
            <h3 className="text-xl text-white/90 group-hover:text-white">
              <span className="font-bold">Catpedia</span> offers Articles or
              quick tips on various aspects of cat care, such as nutrition,
              grooming, health, and behavior.
            </h3>
          </div>
          <div className="pt-0 p-4 md:p-6">
            <Link
              href={"/care-and-tips"}
              className="inline-flex items-center gap-2 text-sm font-medium text-white group-hover:text-white/70 group-focus:text-white/70"
            >
              Explore tips & articles
              <ChevronRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
