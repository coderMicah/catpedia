import Image from "next/image";

const features = [
  {
    title: "Comprehensive Cat Care Information",
    description:
      "Catpedia offers a vast array of high-quality articles and guides designed to cover all aspects of cat care. From nutrition and health to behavior and training, our content is meticulously researched and written by experts to provide the most reliable and up-to-date information.",
  },
  {
    title: "Fostering a Passionate Cat Community",
    description:
      "We are dedicated to bringing cat owners and enthusiasts together. Beyond providing valuable information, we offer a platform for shared experiences, discussions, and support. Our forums, blogs, and events are designed to build a vibrant and connected community of cat lovers.",
  },
  {
    title: "User-Friendly and Inclusive",
    description:
      "At Catpedia, we prioritize ease of use and inclusivity. Our website is designed to be user-friendly, with a seamless browsing experience and easy access to all the resources you need. From simple navigation to comprehensive search functionalities, we strive to make finding information as effortless as possible.",
  },
  {
    title: "Tailored Advice and Expert Support",
    description:
      "We understand that every cat is unique. Catpedia provides personalized advice and expert support tailored to your specific needs. Whether you are a new cat owner or an experienced caretaker, our resources are designed to help you provide the best care for your feline friend.",
  },
  {
    title: "Commitment to Excellence",
    description:
      "Our commitment to excellence drives everything we do. From our carefully curated content to our community-focused initiatives, we aim to deliver the highest quality experience for our users. At Catpedia, we are passionate about enhancing the lives of cats and their owners.By creating an environment that celebrates the joy of cat ownership, Catpedia aspires to be the go-to resource for all things feline, ensuring that both cats and their humans can thrive together.",
  },
];

const Feautures = () => {
  return (
    <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
      <div className="max-w-4xl mx-auto">
        <div className="grid gap-12">
          <div>
            <h2 className="text-3xl text-gray-800 font-bold lg:text-4xl dark:text-white">
              Our vision
            </h2>
            <p className="mt-3 text-gray-800 dark:text-neutral-400">
              At Catpedia, we believe that every cat owner should have access to
              the best information and resources to care for their feline
              companions. Our vision is to create an all-encompassing,
              approachable space where cat enthusiasts can meet, learn, and
              share their experiences. We aim to foster a community spirit that
              brings cat lovers together in a welcoming and engaging
              environment.
            </p>
          </div>

          <div className="space-y-6 lg:space-y-10">
            {features.map((feat) => (
              <div key={feat.title} className="flex gap-x-5 sm:gap-x-8">
                <svg
                  className="shrink-0 mt-2 size-6 text-gray-800 dark:text-white"
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
                  <path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z" />
                  <path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2" />
                  <path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2" />
                  <path d="M10 6h4" />
                  <path d="M10 10h4" />
                  <path d="M10 14h4" />
                  <path d="M10 18h4" />
                </svg>
                <div className="grow">
                  <h3 className="text-base sm:text-lg font-semibold text-gray-800 dark:text-neutral-200">
                    {feat.title}
                  </h3>
                  <p className="mt-1 text-gray-600 dark:text-neutral-400">
                    {feat.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feautures;
