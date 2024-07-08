"use client";

import { useSearchParams, useRouter, usePathname } from "next/navigation";
import { Button } from "./ui/button";

const PaginationControls = () => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const currentPage = searchParams.get("page")! || 0;
  const router = useRouter();

  //   USE THIS WHEN U HAVE MORE QUERIES IN UR URL
  //   const createPageURL = (pageNumber: number | string) => {
  //     const params = new URLSearchParams(searchParams);
  //     params.set('page', pageNumber.toString());
  //     return `${pathname}?${params.toString()}`;
  //   };

  return (
    <div className="flex gap-2 ">
      <Button
        variant={"outline"}
        disabled={currentPage === 0}
        onClick={() =>
          router.push(`${pathname}/?page=${Number(currentPage) - 1}`)
        }
      >
        Prev
      </Button>
      <Button
        variant={"outline"}
        onClick={() =>
          router.push(`${pathname}/?page=${Number(currentPage) + 1}`)
        }
      >
        Next
      </Button>
    </div>
  );
};

export default PaginationControls;
