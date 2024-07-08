
import Image from "next/image";

const Feautures = () => {
  return (
    <section className="py-10 md:py-20">
      <div className="max-w-7xl mx-auto px-4">
        {/* <div className="relative md:w-3/4 mx-auto">
          <Image
            src={"/cat1.jpg"}
            alt="cat"
            width={500}
            height={370}
            sizes=""
            className="hidden sm:block relative rounded-md"
          />
          <div className="sm:absolute md:top-1/2 md:left-1/2 md:-translate-y-1/2 rounded-md bg-gray-100 shadow-md p-10">
            <h3 className="text-2xl font-bold mt-4">Cat Breeds</h3>
            <p className="text-gray-600 mt-2">
              Learn about various cat breeds and their unique characteristics.
            </p>
          </div>
        </div> */}
        <div className=" max-w-4xl mx-auto">
          <h2 className="text-5xl font-semibold mb-3">
            Purr-fect Features of CatPedia
          </h2>
          <p className="text-xl text-zinc-600">
            From tracking your feline friend&apos;s health to connecting with a
            community of cat lovers, explore all the ways CatApp can enhance
            your kitty care experience.
          </p>
        </div>
        <div className="w-full md:w-[1000px] mx-auto  py-8 md:px-10 md:pt-10 grid grid-cols-1 gap-4 md:grid-cols-2">
          <div className="grid grid-cols-2 gap-2 md:gap-4">
            <div className="col-span-1 bg-gray-50 h-52 p-4 rounded-md">
              <h2 className="flex items-center justify-center h-full text-sm font-semibold text-center text-gray-700">
                Find out how to take the best care of your feline friend.
              </h2>
            </div>
            <div className="col-span-1 bg-orange-400 h-52 p-4 rounded-md">
              <h2 className="flex items-center justify-center h-full text-sm font-semibold text-center text-gray-100">
                Find out how to take the best care of your feline friend.
              </h2>
            </div>
            <div className="col-span-2 flex items-center justify-center bg-gray-100 p-4 rounded-md ">
              {" "}
              <Image src={"/cat2.png"} alt="cat" width={200} height={200} />
              <div>
                <h2 className="sm:text-xl font-bold text-center text-gray-600">
                  Find out how to take the best care of your feline friend.
                </h2>
              </div>
            </div>
          </div>

          <div className=" bg-gray-100 p-4 rounded-md">
            <h3 className="text-2xl font-bold mt-4">Health Tips</h3>
            <p className="text-gray-600 mt-2">
              Get tips on keeping your cat healthy and happy.
            </p>
            <Image src={"/cat2.png"} alt="cat" width={300} height={300} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Feautures;
