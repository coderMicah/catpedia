import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { Search } from "lucide-react";

const Card = () => (
  <div className="grid grid-cols-1 sm:grid-cols-4 gap-8 pb-16 sm:pb-8">
    <div className="sm:col-span-1 h-[180px] sm:h-[240px] w-full relative">
      <Skeleton className="w-full h-full" />
    </div>

    <div className="sm:col-span-3  mt-2">
      <Skeleton className="h-6 w-60" />

      <div className="space-y-1 mt-4">
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-1/2" />
      </div>

      <Skeleton className="h-4 w-32 mt-8" />
    </div>
  </div>
);

const loading = () => {
  return (
    <main className="max-w-7xl mx-auto px-4 min-h-screen">
      <div className="flex justify-between items-center gap-2 my-10">
        {/* <Skeleton className="w-[90%] h-12" /> */}

        <div className="relative flex flex-1 flex-shrink-0">
          <label htmlFor="search" className="sr-only">
            Search
          </label>
          <input
            className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
            placeholder={"Search Breed"}
            disabled
          />
          <Search className="absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
        </div>

        <div className="flex gap-2 ">
          <Button variant={"outline"} disabled>
            Prev
          </Button>
          <Button variant={"outline"} disabled>
            Next
          </Button>
        </div>
      </div>

      <h1 className="font-extrabold text-4xl my-6">Cat Breeds</h1>

      {[1, 2, 3].map((i) => (
        <Card key={i} />
      ))}
    </main>
  );
};

export default loading;
