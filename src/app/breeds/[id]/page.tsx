import Link from "next/link";
import { getCatBreedById } from "@/services/queries";
import CustomImage from "@/components/CustomImage";


const CatBreedPage = async ({ params }: { params: { id: string } }) => {
  const catBreed = await getCatBreedById(params.id);
  const imageSrc = catBreed.reference_image_id
    ? `https://cdn2.thecatapi.com/images/${catBreed.reference_image_id}.jpg`
    : `https://fakeimg.pl/600x400?text=${catBreed.name}`;

  return (
    <div className="max-w-5xl mx-auto px-4 mt-10  lg:gap-x-8 xl:gap-x-12">
      <div >
        <CustomImage
          width={300}
          height={600}
          url={imageSrc}
          alt={catBreed.name}
          className="rounded-md object-cover"
        />
      </div>

      <div className="lg:col-span-4 mt-10 lg:mt-0">
        <h1 className="text-4xl font-bold my-6">{catBreed.name}</h1>
        <p className="mb-4">{catBreed.description}</p>

        <ul className="space-y-4">
          <li>
            <strong>Origin:</strong> {catBreed.origin}
          </li>
          <li>
            <strong>Life Span:</strong> {catBreed.life_span} years
          </li>
          <li>
            <strong>Weight:</strong> {catBreed.weight.imperial} lbs (
            {catBreed.weight.metric} kg)
          </li>
          <li>
            <strong>Temperament:</strong> {catBreed.temperament}
          </li>
        </ul>

        <div className="flex items-center flex-wrap space-x-4 my-4">
          <p>
            {" "}
            <strong>Other Links</strong>{" "}
          </p>
          {catBreed.cfa_url && (
            <Link
              href={catBreed.cfa_url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-orange-500 underline mr-2"
            >
               CFA
            </Link>
          )}
          {catBreed.vetstreet_url && (
            <Link
              href={catBreed.vetstreet_url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-orange-500 underline mr-2  gap-x-2"
            >
              Vetstreet
            </Link>
          )}
          {catBreed.vcahospitals_url && (
            <Link
              href={catBreed.vcahospitals_url}
              className="text-orange-500 underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              VCA Hospitals
            </Link>
          )}
          {catBreed.wikipedia_url && (
            <Link
              href={catBreed.wikipedia_url}
              className="text-orange-500 underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              VCA Hospitals
            </Link>
          )}
        </div>

        <div className="my-12">
          <h2 className="text-3xl font-semibold mt-12 mb-4">Characteristics</h2>
          <ul className="list-disc list-inside space-y-4">
            <li className="flex  justify-between items-center">
              <span>Indoor:</span> <StarRating rating={catBreed.indoor} />
            </li>
            <li className="flex  justify-between items-center">
              <span>Lap Cat:</span> <StarRating rating={catBreed.lap} />
            </li>
            <li className="flex  justify-between items-center">
              <span>Adaptability:</span>{" "}
              <StarRating rating={catBreed.adaptability} />
            </li>
            <li className="flex  justify-between items-center">
              <span>Affection Level:</span>{" "}
              <StarRating rating={catBreed.affection_level} />
            </li>
            <li className="flex  justify-between items-center">
              <span>Child Friendly:</span>{" "}
              <StarRating rating={catBreed.child_friendly} />
            </li>
            <li className="flex  justify-between items-center">
              <span>Dog Friendly:</span>{" "}
              <StarRating rating={catBreed.dog_friendly} />
            </li>
            <li className="flex  justify-between items-center">
              <span>Energy Level:</span>{" "}
              <StarRating rating={catBreed.energy_level} />
            </li>
            <li className="flex  justify-between items-center">
              <span>Grooming:</span> <StarRating rating={catBreed.grooming} />
            </li>
            <li className="flex  justify-between items-center">
              <span>Health Issues:</span>{" "}
              <StarRating rating={catBreed.health_issues} />
            </li>
            <li className="flex  justify-between items-center">
              <span>Intelligence:</span>{" "}
              <StarRating rating={catBreed.intelligence} />
            </li>
            <li className="flex  justify-between items-center">
              <span>Shedding Level:</span>{" "}
              <StarRating rating={catBreed.shedding_level} />
            </li>
            <li className="flex  justify-between items-center">
              <span>Social Needs:</span>{" "}
              <StarRating rating={catBreed.social_needs} />
            </li>
            <li className="flex  justify-between items-center">
              <span>Stranger Friendly:</span>{" "}
              <StarRating rating={catBreed.stranger_friendly} />
            </li>
            <li className="flex  justify-between items-center">
              <span>Vocalisation:</span>{" "}
              <StarRating rating={catBreed.vocalisation} />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

const StarRating = ({ rating }: { rating: number }) => {
  return (
    <div className="flex gap-x-2 [@media(min-width:500px)]:gap-x-6">
      {[...Array(5)].map((_, i) => (
        <div
          key={i}
          className={`w-6 [@media(min-width:500px)]:w-12 h-2 rounded-lg space-x-2 [@media(min-width:500px)]:space-x-6 ${i < rating ? "bg-orange-600" : "bg-gray-300"}`}
        ></div>
      ))}
    </div>
  );
};

export default CatBreedPage;
