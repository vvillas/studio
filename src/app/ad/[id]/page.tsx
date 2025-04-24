'use client';

import React from 'react';
import {Ad} from '@/types/ad';
import {MapPin} from 'lucide-react';
import Carousel from '@/components/ui/carousel';
import {Button} from "@/components/ui/button";

interface AdDetailPageProps {
  params: { id: string };
}

const DUMMY_ADS: Ad[] = [
  {
    id: "1",
    title: "Bicicleta Vintage clássica em excelente estado",
    description: "Bicicleta vintage clássica em excelente estado.",
    price: 250,
    imageUrl: "https://picsum.photos/200/150",
    location: "São Paulo",
    images: ['https://picsum.photos/400/300', 'https://picsum.photos/401/300'],
    videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
  },
  {
    id: "2",
    title: "Jaqueta de Couro genuíno, pouco usada",
    description: "Jaqueta de couro genuíno, pouco usada.",
    price: 120,
    imageUrl: "https://picsum.photos/200/151",
    location: "Rio de Janeiro",
  }
];


const AdDetailPage: React.FC<AdDetailPageProps> = ({params}) => {
  const ad = DUMMY_ADS.find(ad => ad.id === params.id);

  if (!ad) {
    return <div>Anúncio não encontrado.</div>;
  }

  const slides = [...(ad.images || []), ...(ad.videoUrl ? [ad.videoUrl] : [])];


  return (
    <div className="container mx-auto py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Carrossel de Imagens e Vídeos */}
        <div className="md:col-span-1">
            {slides.length > 0 ? (
              <Carousel slides={slides} />
            ) : (
              <img
                src={ad.imageUrl}
                alt={ad.title}
                className="w-full h-64 object-cover rounded-md"
              />
            )}
        </div>

        {/* Informações do Produto */}
        <div className="md:col-span-1 flex flex-col">
          <h1 className="text-2xl font-bold mb-2">{ad.title}</h1>
          <div className="flex items-center text-gray-500 mb-2">
            <MapPin className="h-4 w-4 mr-1"/>
            {ad.location}
          </div>
          <p className="mb-4">{ad.description}</p>

          <div className="mt-auto">
            <p className="text-3xl font-bold text-right mb-4">R$ {ad.price}</p>
            <p className="text-gray-600 text-sm">Formas de Pagamento: Cartão, Boleto, etc.</p>
          </div>
            <Button className='mt-4'>
              Comprar
            </Button>
        </div>
      </div>

      {/* Demais Informações */}
      <div className="mt-8">
        <h2 className="text-xl font-semibold mb-2">Mais Detalhes</h2>
        <p>Informações adicionais sobre o produto...</p>
      </div>
    </div>
  );
};

export default AdDetailPage;
