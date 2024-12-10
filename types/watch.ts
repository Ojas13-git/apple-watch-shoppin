export interface WatchCase {
  id: string;
  name: string;
  material: string;
  size: string;
  price: number;
  image: string;
}

export interface WatchBand {
  id: string;
  name: string;
  type: string;
  color: string;
  price: number;
  image: string;
}

export interface WatchCollection {
  id: string;
  name: string;
  description: string;
  cases: WatchCase[];
  bands: WatchBand[];
}

export interface WatchConfiguration {
  case: WatchCase | null;
  band: WatchBand | null;
  collection: WatchCollection | null;
}