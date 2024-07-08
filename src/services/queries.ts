import { CatBreedData, CatData } from "@/types";
import { client } from "./client"
const baseURL = process.env.BASE_URL;

export const getCatBreeds = async (page:string): Promise<CatData[]> => {
    const url = new URL(`${baseURL}/breeds`)

    url.searchParams.append("limit", "10");
    url.searchParams.append("page", page);

    const resp = await client(url);
    return resp;
}
export const getCatBreedById = async (id: string): Promise<CatBreedData> => {
    const url = new URL(`${baseURL}/breeds/${id}`)
    const resp = await client(url);
    return resp;
}



export const searchCatBreedByName = async (breedName: string):Promise<CatData[]> => {
    const url =  new URL(`${baseURL}/breeds/search`)

    url.searchParams.append("q", breedName);
    url.searchParams.append("attach_image", "1");

    const resp = await client(url);
    return resp;
}

