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
    title: "Bicicleta Vintage",
    description: "Bicicleta vintage clássica em excelente estado.",
    price: 250,
    imageUrl: "https://picsum.photos/200/150",
  },
  {
    id: "2",
    title: "Jaqueta de Couro",
    description: "Jaqueta de couro genuíno, pouco usada.",
    price: 120,
    imageUrl: "https://picsum.photos/200/151",
  },
  {
    id: "3",
    title: "Cafeteira",
    description: "Cafeteira de alta qualidade, faz um café delicioso.",
    price: 80,
    imageUrl: "https://picsum.photos/200/152",
  },
  {
    id: "4",
    title: "Câmera Fotográfica",
    description: "Câmera fotográfica profissional com lentes extras.",
    price: 450,
    imageUrl: "https://picsum.photos/200/153",
  },
  {
    id: "5",
    title: "Mesa de Jantar",
    description: "Mesa de jantar de madeira maciça para 6 pessoas.",
    price: 320,
    imageUrl: "https://picsum.photos/200/154",
  },
  {
    id: "6",
    title: "Livros de Coleção",
    description: "Coleção de livros raros em perfeito estado de conservação.",
    price: 180,
    imageUrl: "https://picsum.photos/200/155",
  },
  {
    id: "7",
    title: "Relógio Antigo",
    description: "Relógio de pulso antigo, revisado e funcionando.",
    price: 200,
    imageUrl: "https://picsum.photos/200/156",
  },
  {
    id: "8",
    title: "Sofá Retrátil",
    description: "Sofá retrátil e reclinável, super confortável.",
    price: 500,
    imageUrl: "https://picsum.photos/200/157",
  },
  {
    id: "9",
    title: "Tapete Persa",
    description: "Tapete persa autêntico, feito à mão.",
    price: 600,
    imageUrl: "https://picsum.photos/200/158",
  },
  {
    id: "10",
    title: "Guitarra Elétrica",
    description: "Guitarra elétrica semi nova com amplificador.",
    price: 750,
    imageUrl: "https://picsum.photos/200/159",
  },
  {
    id: "11",
    title: "Vestido de Festa",
    description: "Vestido de festa longo, ideal para formaturas e casamentos.",
    price: 380,
    imageUrl: "https://picsum.photos/200/160",
  },
  {
    id: "12",
    title: "Skate",
    description: "Skate novo, ideal para iniciantes.",
    price: 150,
    imageUrl: "https://picsum.photos/200/161",
  },
  {
    id: "13",
    title: "Tênis de Corrida",
    description: "Tênis de corrida profissional, confortável e leve.",
    price: 220,
    imageUrl: "https://picsum.photos/200/162",
  },
  {
    id: "14",
    title: "Notebook",
    description: "Notebook com processador i5, 8GB de RAM e SSD de 256GB.",
    price: 1800,
    imageUrl: "https://picsum.photos/200/163",
  },
  {
    id: "15",
    title: "Fone de Ouvido Bluetooth",
    description: "Fone de ouvido Bluetooth com cancelamento de ruído.",
    price: 120,
    imageUrl: "https://picsum.photos/200/164",
  }
];

const AdList = () => {
  const [ads, setAds] = useState<Ad[]>([]);

  useEffect(() => {
    // Em uma aplicação real, você buscaria os anúncios de um endpoint da API aqui.
    // Para este exemplo, estamos usando dados fictícios.
    setAds(DUMMY_ADS);
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {ads.map((ad) => (
        <Card key={ad.id}>
          <div className="flex flex-col">
            <img src={ad.imageUrl} alt={ad.title} className="rounded-md object-cover h-40 w-full" />
            <CardContent className="p-2">
              <CardTitle className="text-sm">{ad.title}</CardTitle>
              <CardDescription>{ad.description}</CardDescription>
              <p className="text-sm font-medium">Preço: R$ {ad.price}</p>
            </CardContent>
          </div>
        </Card>
      ))}
    </div>
  );
};

export default AdList;
