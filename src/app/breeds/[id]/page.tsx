
import Link from "next/link";
import { getCatBreedById } from "@/services/queries";
import CustomImage from "@/components/CustomImage";


const CatBreedPage = async ({ params }: { params: { id: string } }) => {
  const catBreed = await getCatBreedById(params.id);
  const imageSrc = catBreed.reference_image_id ? `https://cdn2.thecatapi.com/images/${catBreed.reference_image_id}.jpg` : `https://fakeimg.pl/600x400?text=${catBreed.name}`;


  return (
    <div className="p-4 max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-6">{catBreed.name}</h1>
      <CustomImage
        width={300}
        height={300}
        url={imageSrc}
        alt={catBreed.name}
        className="w-full mb-4 rounded-md object-cover"
      />
      <h2 className="text-2xl mb-2 font-semibold">Description</h2>
      <p className="text-gray-700 mb-4">{catBreed.description}</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <h2 className="font-semibold">Origin</h2>
          <p>{catBreed.origin}</p>
        </div>
        <div>
          <h2 className="font-semibold">Life Span</h2>
          <p>{catBreed.life_span} years</p>
        </div>
        <div>
          <h2 className="font-semibold">Weight</h2>
          <p>
            {catBreed.weight.imperial} lbs ({catBreed.weight.metric} kg)
          </p>
        </div>
        <div>
          <h2 className="font-semibold">Temperament</h2>
          <p>{catBreed.temperament}</p>
        </div>
        <div>
          <h2 className="font-semibold">Affection Level</h2>
          <p>{catBreed.affection_level}/5</p>
        </div>
        <div>
          <h2 className="font-semibold">Child Friendly</h2>
          <p>{catBreed.child_friendly}/5</p>
        </div>
        <div>
          <h2 className="font-semibold">Dog Friendly</h2>
          <p>{catBreed.dog_friendly}/5</p>
        </div>
        <div>
          <h2 className="font-semibold">Energy Level</h2>
          <p>{catBreed.energy_level}/5</p>
        </div>
        <div>
          <h2 className="font-semibold">Grooming</h2>
          <p>{catBreed.grooming}/5</p>
        </div>
        <div>
          <h2 className="font-semibold">Health Issues</h2>
          <p>{catBreed.health_issues}/5</p>
        </div>
        <div>
          <h2 className="font-semibold">Intelligence</h2>
          <p>{catBreed.intelligence}/5</p>
        </div>
        <div>
          <h2 className="font-semibold">Shedding Level</h2>
          <p>{catBreed.shedding_level}/5</p>
        </div>
        <div>
          <h2 className="font-semibold">Social Needs</h2>
          <p>{catBreed.social_needs}/5</p>
        </div>
        <div>
          <h2 className="font-semibold">Stranger Friendly</h2>
          <p>{catBreed.stranger_friendly}/5</p>
        </div>
      </div>
      <div className="mt-4">
        {catBreed.cfa_url && (
          <Link
            href={catBreed.cfa_url}
            className="text-blue-500 underline mr-2"
          >
            CFA
          </Link>
        )}
        {catBreed.vetstreet_url && (
          <Link
            href={catBreed.vetstreet_url}
            className="text-blue-500 underline mr-2"
          >
            Vetstreet
          </Link>
        )}
        {catBreed.vcahospitals_url && (
          <Link
            href={catBreed.vcahospitals_url}
            className="text-blue-500 underline"
          >
            VCA Hospitals
          </Link>
        )}
      </div>
    </div>
  );
};

export default CatBreedPage;
