/ src/types/ad.ts
export interface Itm {
  id: string;
  title: string;
  description: string;
  price: number;
  imageUrl: string;
  location: string;
  images?: string[];
  videoUrl?: string;
}
