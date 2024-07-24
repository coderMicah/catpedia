import { CatData } from "@/types";
import Image from "next/image";
import Link from "next/link";
import { getImage } from "@/lib/getImage";

interface IProps {
  breed: CatData;
}

const BreedCard = async ({ breed }: IProps) => {
  
  const imageSrc = breed.image ? breed.image.url : `https://fakeimg.pl/600x400?text=${breed.name}`;
  const { base64, img } = await getImage(imageSrc);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-4 gap-8 pb-16 sm:pb-8">
      <div className="sm:col-span-1 h-[180px] sm:h-[240px] w-full relative">
        <Image
          src={img.src}
          placeholder="blur"
          blurDataURL={base64}
          fill
          alt={"cat-image"}
          className="rounded-md object-cover"
        />
      </div>
      <div className="sm:col-span-3">
        <h2 className="font-extrabold text-2xl mb-2">{breed.name}</h2>
        <p className="text-lg mb-2">{breed.description}</p>
        <Link
          className="font-medium text-orange-400 hover:text-orange-600 hover:font-semibold "
          href={`/breeds/${breed.id}`}
        >
          Read More
        </Link>
      </div>
    </div>
  );
};

export default BreedCard;
