import { IPostArticle, IPostCard } from "@/types"
import { client } from "./client"


export async function getPostsByCategory(category: { category: string }): Promise<IPostCard[]> {
  const CONTENT_QUERY = `*[_type == "post" && $category in categories[]->title] {
    mainImage {
      ...,
      asset->
    },
    gifImage {
      ...,
      asset->
    },
    "slug": slug.current,
      title,
  }
  `
  const content = await client.fetch(CONTENT_QUERY, category)
  return content
}

export async function getPostBySlug(slug: { slug: string }): Promise<IPostArticle> {
  const CONTENT_QUERY = `*[_type == "post" && $slug == slug.current][0] {
    "slug": slug.current,
    body[] {
    ...,
    _type == "image" => {
      asset-> {...}}
    }
  }
  `
  const content = await client.fetch(CONTENT_QUERY, slug)
  return content
}