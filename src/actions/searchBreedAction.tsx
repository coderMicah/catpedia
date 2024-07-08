"use server"

import { searchCatBreedByName } from "@/services/queries";

export const searchCatBreed = async (formdata: FormData) => {
  const name = formdata.get("input")!;
  const breeds = await searchCatBreedByName(name.toString());
  console.log(breeds);
};