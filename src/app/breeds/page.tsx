import BreedCard from "@/components/BreedCard";
import PaginationControls from "@/components/PaginationControls";
import SearchInput from "@/components/SearchInput";
import { getCatBreeds, searchCatBreedByName } from "@/services/queries";

const BreedPage = async ({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) => {
  const page = searchParams["page"] ?? "0";
  const query = searchParams["query"] ?? "";

  const catBreeds = await getCatBreeds(page as string);
  const searchedCatBreeds = await searchCatBreedByName(query as string);


  

  return (
    <main className="max-w-7xl mx-auto px-4 min-h-screen">
       <div className="flex justify-between items-center gap-2 my-10">
       <SearchInput />
       <PaginationControls />
       </div>

     
      <h1 className="font-extrabold text-4xl my-6">{!query ? "Cat Breeds" : `Search Results for ${query}`}</h1>

      {catBreeds && !query &&
        catBreeds.map((breed) => <BreedCard key={breed.id} breed={breed} />)}

      {searchedCatBreeds &&
        searchedCatBreeds.map((breed) => (
          <BreedCard key={breed.id} breed={breed} />
        ))}

        {/* No results found placeholder */}
    </main>
  );
};

export default BreedPage;
