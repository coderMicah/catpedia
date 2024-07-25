import PortableTextToArticle from "@/components/PortableTextToArticle";
import { getPostBySlug } from "@/sanity/lib/groqQueries";

const TipPage = async ({ params }: { params: { slug: string } }) => {
  const tip = await getPostBySlug(params);

  return (
    <div className="pt-8 pb-16 lg:pt-16 lg:pb-24 antialiased">
      <article className="mx-auto w-full max-w-4xl ">
        <PortableTextToArticle value={tip.body} />
      </article>
    </div>
  );
};

export default TipPage;
