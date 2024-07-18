export interface INavItem {
    href: string;
    name: string;
    ariaLabel: string;
}

export interface CatImage {
    id: string;
    width: number;
    height: number;
    url: string;
  }
  
 export interface CatData {
    weight: {
      imperial: string;
      metric: string;
    };
    id: string;
    name: string;
    temperament: string;
    origin: string;
    country_codes: string;
    country_code: string;
    description: string;
    life_span: string;
    indoor: number;
    lap: number;
    alt_names: string;
    adaptability: number;
    affection_level: number;
    child_friendly: number;
    dog_friendly: number;
    energy_level: number;
    grooming: number;
    health_issues: number;
    intelligence: number;
    shedding_level: number;
    social_needs: number;
    stranger_friendly: number;
    vocalisation: number;
    experimental: number;
    hairless: number;
    natural: number;
    rare: number;
    rex: number;
    suppressed_tail: number;
    short_legs: number;
    wikipedia_url: string;
    hypoallergenic: number;
    reference_image_id: string;
    image: CatImage;
  }
  
  // export interface CatBreed {
  //   id: number;
  //   name: string;
  //   weight: string;
  //   height: string;
  //   life_span: string;
  //   bred_for: string;
  //   breed_group: string;
  // }


  export interface CatBreedData {
    weight: { imperial: string; metric: string };
    id: string;
    name: string;
    cfa_url: string;
    vetstreet_url: string;
    vcahospitals_url: string;
    temperament: string;
    origin: string;
    country_codes: string;
    country_code: string;
    description: string;
    life_span: string;
    indoor: number;
    lap: number;
    alt_names: string;
    adaptability: number;
    affection_level: number;
    child_friendly: number;
    dog_friendly: number;
    energy_level: number;
    grooming: number;
    health_issues: number;
    intelligence: number;
    shedding_level: number;
    social_needs: number;
    stranger_friendly: number;
    vocalisation: number;
    experimental: number;
    hairless: number;
    natural: number;
    rare: number;
    rex: number;
    suppressed_tail: number;
    short_legs: number;
    wikipedia_url: string;
    hypoallergenic: number;
    reference_image_id: string;
  }
  
  export type IImage = {
    asset: object[];
    _type: string;
    alt?: string; // Optional property
  }
  
  export interface IPost {
    mainImage: IImage & { alt: string }; // Ensuring mainImage has alt property
    gifImage: IImage;
    slug: string;
    title: string;
    description: string;
  }