import { Card, CardContent } from "@/components/ui/card";
import { useEffect, useState } from "react";
import { Ad } from "@/types/ad";
import { MapPin } from "lucide-react";
import Link from 'next/link';

const DUMMY_ADS: Ad[] = [
  {
    id: "1",
    title: "Bicicleta Vintage clássica em excelente estado",
    description: "Bicicleta vintage clássica em excelente estado.",
    price: 250,
    imageUrl: "https://picsum.photos/200/150",
    location: "São Paulo",
  },
  {
    id: "2",
    title: "Jaqueta de Couro genuíno, pouco usada",
    description: "Jaqueta de couro genuíno, pouco usada.",
    price: 120,
    imageUrl: "https://picsum.photos/200/151",
    location: "Rio de Janeiro",
  },
  {
    id: "3",
    title: "Cafeteira de alta qualidade, faz um café delicioso",
    description: "Cafeteira de alta qualidade, faz um café delicioso.",
    price: 80,
    imageUrl: "https://picsum.photos/200/152",
    location: "Belo Horizonte",
  },
  {
    id: "4",
    title: "Câmera Fotográfica profissional com lentes extras",
    description: "Câmera fotográfica profissional com lentes extras.",
    price: 450,
    imageUrl: "https://picsum.photos/200/153",
    location: "Porto Alegre",
  },
  {
    id: "5",
    title: "Mesa de Jantar de madeira maciça para 6 pessoas",
    description: "Mesa de jantar de madeira maciça para 6 pessoas.",
    price: 320,
    imageUrl: "https://picsum.photos/200/154",
    location: "Curitiba",
  },
  {
    id: "6",
    title: "Coleção de livros raros em perfeito estado de conservação",
    description: "Coleção de livros raros em perfeito estado de conservação.",
    price: 180,
    imageUrl: "https://picsum.photos/200/155",
    location: "Salvador",
  },
  {
    id: "7",
    title: "Relógio de pulso antigo, revisado e funcionando",
    description: "Relógio de pulso antigo, revisado e funcionando",
    price: 200,
    imageUrl: "https://picsum.photos/200/156",
    location: "Fortaleza",
  },
  {
    id: "8",
    title: "Sofá retrátil e reclinável, super confortável",
    description: "Sofá retrátil e reclinável, super confortável.",
    price: 500,
    imageUrl: "https://picsum.photos/200/157",
    location: "Manaus",
  },
  {
    id: "9",
    title: "Tapete persa autêntico, feito à mão",
    description: "Tapete persa autêntico, feito à mão.",
    price: 600,
    imageUrl: "https://picsum.photos/200/158",
    location: "Recife",
  },
  {
    id: "10",
    title: "Guitarra Elétrica semi nova com amplificador",
    description: "Guitarra elétrica semi nova com amplificador.",
    price: 750,
    imageUrl: "https://picsum.photos/200/159",
    location: "Goiânia",
  },
  {
    id: "11",
    title: "Vestido de Festa longo, ideal para formaturas e casamentos",
    description: "Vestido de festa longo, ideal para formaturas e casamentos.",
    price: 380,
    imageUrl: "https://picsum.photos/200/160",
    location: "Belém",
  },
  {
    id: "12",
    title: "Skate novo, ideal para iniciantes",
    description: "Skate novo, ideal para iniciantes.",
    price: 150,
    imageUrl: "https://picsum.photos/200/161",
    location: "Campinas",
  },
    {
    id: "13",
    title: "Tênis de Corrida profissional, confortável e leve",
    description: "Tênis de corrida profissional, confortável e leve.",
    price: 220,
    imageUrl: "https://picsum.photos/200/162",
    location: "Santos",
  },
  {
    id: "14",
    title: "Notebook com processador i5, 8GB de RAM e SSD de 256GB",
    description: "Notebook com processador i5, 8GB de RAM e SSD de 256GB.",
    price: 1800,
    imageUrl: "https://picsum.photos/200/163",
    location: "Ribeirão Preto",
  },
  {
    id: "15",
    title: "Fone de Ouvido Bluetooth com cancelamento de ruído",
    description: "Fone de ouvido Bluetooth com cancelamento de ruído.",
    price: 120,
    imageUrl: "https://picsum.photos/200/164",
    location: "Uberlândia",
  },
  {
    id: "16",
    title: "Câmera antiga para colecionadores",
    description: "Câmera antiga para colecionadores.",
    price: 300,
    imageUrl: "https://picsum.photos/200/165",
    location: "São José dos Campos",
  },
  {
    id: "17",
    title: "Mesa de escritório em bom estado",
    description: "Mesa de escritório em bom estado.",
    price: 280,
    imageUrl: "https://picsum.photos/200/166",
    location: "Sorocaba",
  },
  {
    id: "18",
    title: "Luminária de chão moderna",
    description: "Luminária de chão moderna.",
    price: 90,
    imageUrl: "https://picsum.photos/200/167",
    location: "Osasco",
  },
  {
    id: "19",
    title: "Conjunto de quadros para decoração de interiores",
    description: "Conjunto de quadros para decoração de interiores.",
    price: 150,
    imageUrl: "https://picsum.photos/200/168",
    location: "Santo André",
  },
  {
    id: "20",
    title: "Escrivaninha para estudo ou trabalho",
    description: "Escrivaninha para estudo ou trabalho.",
    price: 350,
    imageUrl: "https://picsum.photos/200/169",
    location: "Contagem",
  },
  {
    id: "21",
    title: "Prancha de surf seminova",
    description: "Prancha de surf seminova.",
    price: 420,
    imageUrl: "https://picsum.photos/200/170",
    location: "Jundiaí",
  },
  {
    id: "22",
    title: "Cozinhe seus alimentos de forma rápida e segura",
    description: "Panela de Pressão Elétrica",
    price: 299,
    imageUrl: "https://picsum.photos/200/171",
    location: "Cuiabá",
  },
  {
    id: "23",
    title: "Prepare vitaminas e sucos deliciosos",
    description: "Liquidificador",
    price: 149,
    imageUrl: "https://picsum.photos/200/172",
    location: "Joinville",
  },
  {
    id: "24",
    title: "Asse bolos, pães e pizzas com facilidade",
    description: "Forno Elétrico",
    price: 399,
    imageUrl: "https://picsum.photos/200/173",
    location: "Londrina",
  },
  {
    id: "25",
    title: "Mantenha sua casa sempre limpa e organizada",
    description: "Aspirador de Pó",
    price: 199,
    imageUrl: "https://picsum.photos/200/174",
    location: "Ananindeua",
  },
  {
    id: "26",
    title: "Passe suas roupas com rapidez e eficiência",
    description: "Ferro de Passar Roupa",
    price: 79,
    imageUrl: "https://picsum.photos/200/175",
    location: "Aparecida de Goiânia",
  },
  {
    id: "27",
    title: "Prepare massas e cremes com facilidade",
    description: "Batedeira",
    price: 129,
    imageUrl: "https://picsum.photos/200/176",
    location: "Serra",
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
        <Link href={`/ad/${ad.id}`} key={ad.id}>
          <Card>
            <div className="flex flex-col">
              <img src={ad.imageUrl} alt={ad.title} className="rounded-md object-cover h-40 w-full" />
              <CardContent className="p-2">
                <p className="text-sm overflow-hidden h-10">{ad.description}</p>
                <div className="flex items-center text-xs text-gray-500">
                  <MapPin className="h-3 w-3 mr-1" />
                  {ad.location}
                </div>
                 <hr className="my-2 border-gray-200 dark:border-gray-700" />
                <div className="flex items-center justify-between">
                
                <p className="text-lg font-bold text-right">R$ {ad.price}</p>
                </div>
              </CardContent>
            </div>
          </Card>
        </Link>
      ))}
    </div>
  );
};

export default AdList;
