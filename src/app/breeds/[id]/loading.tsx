import { Skeleton } from "@/components/ui/skeleton";
import React from "react";

const RatingSkeleton = () => {
  return (
    <div className="flex gap-x-6">
      {[...Array(5)].map((_, i) => (
        <Skeleton key={i} className={"w-12 h-2 rounded-lg space-x-6"} />
      ))}
    </div>
  );
};

const loading = () => {
  return (
    <div className="p-4 max-w-5xl mx-auto">
      <Skeleton className="w-full h-[600px] rounded-md mb-4" />

      <Skeleton className="h-8 w-72 my-6" />

      <div className="space-y-1 mt-4">
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-1/2" />
      </div>

      <div className="space-y-6 mt-4">
        <Skeleton className="h-4 w-64" />
        <Skeleton className="h-4 w-64" />
        <Skeleton className="h-4 w-56" />
        <Skeleton className="h-4 w-96" />
        <Skeleton className="h-4 w-96" />
      </div>

      <div className="my-12">
        <h3 className="text-3xl font-semibold mt-12 mb-4">Characteristics</h3>
        <ul className="space-y-6">
          {[...Array(6)].map((_) => (
            <li key={_} className="flex justify-between">
              <Skeleton className="h-4 w-44" /> <RatingSkeleton />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default loading;
