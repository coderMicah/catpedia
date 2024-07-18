import { client } from "./client"


export async function getPostsByCategory(category:{category:string}) {
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
      description

  }
  `
    const content = await client.fetch(CONTENT_QUERY,category)
    return content
}

export async function getPostByTitle(slug:{slug:string}) {
    const CONTENT_QUERY = `*[_type == "post" && $slug == slug.current][0] {
    mainImage {
      ...,
      asset->
    },
    "slug": slug.current,
      title,
      description,
      body,
  }
  `
    const content = await client.fetch(CONTENT_QUERY,slug)
    return content
}