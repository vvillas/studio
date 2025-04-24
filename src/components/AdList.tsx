"use client";

// AdList.tsx
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useEffect, useState } from "react";

interface Ad {
  id: string;
  title: string;
  description: string;
  price: number;
  imageUrl: string;
}

const DUMMY_ADS: Ad[] = [
  {
    id: "1",
    title: "Vintage Bike",
    description: "Classic vintage bicycle in excellent condition.",
    price: 250,
    imageUrl: "https://picsum.photos/200/150",
  },
  {
    id: "2",
    title: "Leather Jacket",
    description: "Genuine leather jacket, lightly used.",
    price: 120,
    imageUrl: "https://picsum.photos/200/151",
  },
  {
    id: "3",
    title: "Coffee Maker",
    description: "High-quality coffee maker, makes delicious coffee.",
    price: 80,
    imageUrl: "https://picsum.photos/200/152",
  },
];

const AdList = () => {
  const [ads, setAds] = useState<Ad[]>([]);

  useEffect(() => {
    // In a real application, you would fetch the ads from an API endpoint here.
    // For this example, we're using dummy data.
    setAds(DUMMY_ADS);
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {ads.map((ad) => (
        <Card key={ad.id}>
          <CardHeader>
            <CardTitle>{ad.title}</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col gap-2">
            <img src={ad.imageUrl} alt={ad.title} className="rounded-md object-cover h-40 w-full" />
            <CardDescription>{ad.description}</CardDescription>
            <p className="text-sm font-medium">Price: ${ad.price}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default AdList;

