import PostCard from "@/components/PostCard";
import { getPostsByCategory } from "@/sanity/lib/groqQueries";

const Tips = async () => {
  const content = await getPostsByCategory({ category: "Tips" });

  return (
    <section className="mb-12">
      <h2 className="text-4xl  font-semibold mb-2 ">Tips for New Cat Owners</h2>
      <p className="mb-5 ">
        Tips for new cat owners, behavior management, and creating a
        cat-friendly environment.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {content.map((tip, index) => (
          <PostCard
            key={index}
            title={tip.title}
            mainImage={tip.mainImage}
            // gifImage={tip.gifImage}
            href={`tips/${tip.slug}`}
          />
        ))}
      </div>
    </section>
  );
};

export default Tips;
