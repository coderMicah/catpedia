import { getPostByTitle } from "@/sanity/lib/groqQueries";


const Article = async ({ params }: { params: { slug: string } }) => {
  const post = await getPostByTitle(params);

  return (
    <div className="pt-8 pb-16 lg:pt-16 lg:pb-24 bg-white dark:bg-gray-900 antialiased">
      <div className="flex justify-between px-4 mx-auto max-w-screen-xl ">
        <article className="mx-auto w-full max-w-2xl format format-sm sm:format-base lg:format-lg format-blue dark:format-invert"></article>
      </div>
    </div>
  );
};

export default Article;
