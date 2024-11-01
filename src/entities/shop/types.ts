export interface ISpecs {
  screen: string;
  processor: string;
  ram: string;
  storage: string;
  battery: string;
}

export interface IProduct {
  id: number;
  name: string;
  brand: string;
  price: number;
  releaseDate: string;
  specs: ISpecs;
  discount: number;
  imageUrl: string;
  rating: number;
}
