import { CatData } from "@/types";
import { client } from "./client"
const baseURL = process.env.BASE_URL;

export const getCatBreed = async ():Promise<CatData[]> => {
    const url = new URL(`${baseURL}/breeds`)
    
    url.searchParams.append("limit","10");
    url.searchParams.append("page","0");
  
    const resp = await client(url);
    return resp;
}