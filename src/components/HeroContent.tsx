import Link from "next/link";

const HeroContent = () => {
  return (
    <section>
    
      <div>
        <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-24 space-y-8">
          <div className="max-w-4xl text-center mx-auto">
            <h1 className="block font-medium text-primary text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
              Welcome to Catpedia
            </h1>
          </div>

          <div className="max-w-3xl text-center mx-auto">
            <p className="text-lg text-primary/70">
              CatPedia aims to serve as a go-to resource for cat lovers of all
              levels of experience, offering valuable information and fostering
              a community around shared love for cats. Your ultimate source of
              information on everything about cats.
            </p>
          </div>

          <div className="text-center">
            <Link
              href="/breeds"
              className="inline-flex justify-center items-center gap-x-3 text-center bg-gradient-to-tl from-orange-600 to-red-600 shadow-lg shadow-transparent hover:shadow-orange-700/50 border border-transparent text-white text-sm font-medium rounded-full focus:outline-none focus:shadow-orange-700/50 py-3 px-6"
            >
              Get started
              <svg
                className="shrink-0 size-4"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="m9 18 6-6-6-6" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroContent;
