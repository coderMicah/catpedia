import Link from "next/link";

const HeroContent = () => {
  return (
    <section>
      <div className="max-w-7xl mx-auto px-4 py-10">
        <div className="pt-10 mx-auto max-w-5xl text-center">
          <h1 className="text-4xl md:text-7xl font-bold mb-4">
            Welcome to Catpedia
          </h1>
          <p className="text-lg  md:text-2xl text-gray-700 mb-8">
            CatPedia aims to serve as a go-to resource for cat lovers of all
            levels of experience, offering valuable information and fostering a
            community around shared love for cats. Your ultimate source of
            information on everything about cats.
          </p>
          <Link
            href="#"
            className="bg-blue-500 text-white px-6 py-3 rounded-full text-lg hover:bg-blue-600"
          >
            Explore Now
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroContent;
