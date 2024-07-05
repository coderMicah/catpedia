import { getCatBreed } from "@/services/queries";
import { LucideLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const BreedPage = async () => {
  const catBreeds = await getCatBreed();

  return (
    <main className="max-w-7xl mx-auto px-4">
      <h1 className="font-extrabold text-4xl my-6">Cat Breeds</h1>
      {catBreeds.map((breed) => {
        return (
          <div key={breed.id} className="flex flex-col min-[400px]:flex-row justify-between gap-8 pb-16 sm:pb-8">
            <Image src={breed.image.url} width={300} height={300} alt={"cat-image"} className="rounded-md" />
            <div>
              <h2 className="font-extrabold text-2xl mb-2">{breed.name}</h2>
              <p className="text-lg mb-2">{breed.description}</p>
              <Link className="text-orange-400 hover:text-orange-600 " href={breed.wikipedia_url}>Read More</Link>
            </div>
          </div>
        );
      })}

      {/* Load More Btn */}
    </main>
  );
};

export default BreedPage;
