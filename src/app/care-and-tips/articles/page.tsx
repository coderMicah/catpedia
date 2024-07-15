import TipsCard from "@/components/TipsCard";
import React from "react";

const Articles = () => {
  const articlesAndGuides = [
    {
      title: "Comprehensive Cat Care",
      description:
        "A complete guide to caring for your cat, including feeding, grooming, and health tips.",
    },
    {
      title: "Grooming Your Cat",
      description:
        "Learn the best practices for grooming your cat, from brushing to nail trimming.",
    },
    {
      title: "Feeding Your Feline",
      description:
        "Essential tips for providing a balanced diet for your cat at every life stage.",
    },
    {
      title: "Maintaining Cat Health",
      description:
        "Important information on keeping your cat healthy, from vaccinations to regular vet visits.",
    },
  ];
  return (
    <section className="mb-12">
      <h2 className="text-4xl text-gray-900 font-semibold  mb-2 ">
        Articles and Guides
      </h2>
      <p className="mb-5 text-gray-500">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum
        dolorum cumque quae, excepturi saepe au
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {articlesAndGuides.map((article, index) => (
          <TipsCard
            key={index}
            title={article.title}
            description={article.description}
          />
        ))}
      </div>
    </section>
  );
};

export default Articles;
