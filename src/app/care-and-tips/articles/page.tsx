
import PostCard from "@/components/PostCard";
import { getPostsByCategory } from "@/sanity/lib/groqQueries";


const Articles = async () => {
 const content = await getPostsByCategory({category:"Articles"});


  return (
    <section className="mb-12">
      <h2 className="text-4xl text-gray-900 font-semibold  mb-2 ">
        Articles and Guides
      </h2>
      <p className="mb-5 text-gray-500">
        Articles and guides on cat care, grooming, feeding, and health.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {content.map((article, index) => (
          <PostCard
            key={index}
            title={article.title}
            mainImage={article.mainImage}
            // gifImage={article.gifImage}
            href={`articles/${article.slug}`}
          />
        ))}
      </div>
    </section>
  );
};

export default Articles;
