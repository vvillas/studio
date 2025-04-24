/ src/types/ad.ts
export interface Ad {
  id: string;
  title: string;
  description: string;
  price: number;
  imageUrl: string;
  location: string;
  images?: string[];
  videoUrl?: string;
}
