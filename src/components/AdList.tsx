"use client";

// AdList.tsx
import { Card, CardContent } from "@/components/ui/card";
import { useEffect, useState } from "react";
import { Ad } from "@/types/ad";

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
  },
  {
    id: "16",
    title: "Câmera Vintage",
    description: "Câmera antiga para colecionadores.",
    price: 300,
    imageUrl: "https://picsum.photos/200/165",
  },
  {
    id: "17",
    title: "Mesa de Escritório",
    description: "Mesa de escritório em bom estado.",
    price: 280,
    imageUrl: "https://picsum.photos/200/166",
  },
  {
    id: "18",
    title: "Luminária de Chão",
    description: "Luminária de chão moderna.",
    price: 90,
    imageUrl: "https://picsum.photos/200/167",
  },
  {
    id: "19",
    title: "Quadros Decorativos",
    description: "Conjunto de quadros para decoração de interiores.",
    price: 150,
    imageUrl: "https://picsum.photos/200/168",
  },
  {
    id: "20",
    title: "Escrivaninha",
    description: "Escrivaninha para estudo ou trabalho.",
    price: 350,
    imageUrl: "https://picsum.photos/200/169",
  },
  {
    id: "21",
    title: "Prancha de Surf",
    description: "Prancha de surf seminova.",
    price: 420,
    imageUrl: "https://picsum.photos/200/170",
  },
    {
    id: "22",
    title: "Panela de Pressão Elétrica",
    description: "Cozinhe seus alimentos de forma rápida e segura.",
    price: 299,
    imageUrl: "https://picsum.photos/200/171",
  },
  {
    id: "23",
    title: "Liquidificador",
    description: "Prepare vitaminas e sucos deliciosos.",
    price: 149,
    imageUrl: "https://picsum.photos/200/172",
  },
  {
    id: "24",
    title: "Forno Elétrico",
    description: "Asse bolos, pães e pizzas com facilidade.",
    price: 399,
    imageUrl: "https://picsum.photos/200/173",
  },
  {
    id: "25",
    title: "Aspirador de Pó",
    description: "Mantenha sua casa sempre limpa e organizada.",
    price: 199,
    imageUrl: "https://picsum.photos/200/174",
  },
  {
    id: "26",
    title: "Ferro de Passar Roupa",
    description: "Passe suas roupas com rapidez e eficiência.",
    price: 79,
    imageUrl: "https://picsum.photos/200/175",
  },
  {
    id: "27",
    title: "Batedeira",
    description: "Prepare massas e cremes com facilidade.",
    price: 129,
    imageUrl: "https://picsum.photos/200/176",
  },
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
              <p className="text-sm font-medium">{ad.description}</p>
              <p className="text-sm font-medium">Preço: R$ {ad.price}</p>
            </CardContent>
          </div>
        </Card>
      ))}
    </div>
  );
};

export default AdList;
