'use client';

import AdList from '@/components/AdList';
import type {Metadata} from 'next';
import {useEffect, useState} from 'react';
import {Button} from "@/components/ui/button";
import {ChevronLeft, ChevronRight} from "lucide-react";
import Link from 'next/link';
import {useIsMobile} from "@/hooks/use-mobile";
import {Card, CardContent} from "@/components/ui/card";

const FEATURED_ADS = [
  {
    id: '101',
    title: 'Smartphone de última geração',
    description: 'Novo, câmera de 200MP, 5G',
    price: 1500,
    imageUrl: 'https://picsum.photos/200/300',
    location: 'São Paulo',
  },
  {
    id: '102',
    title: 'Notebook ultrafino',
    description: 'Leve, SSD 1TB, 16GB RAM',
    price: 2500,
    imageUrl: 'https://picsum.photos/201/300',
    location: 'Rio de Janeiro',
  },
  {
    id: '103',
    title: 'Smartwatch esportivo',
    description: 'GPS, monitor cardíaco, à prova d\'água',
    price: 400,
    imageUrl: 'https://picsum.photos/202/300',
    location: 'Belo Horizonte',
  },
  {
    id: '104',
    title: 'Fones de ouvido sem fio',
    description: 'Cancelamento de ruído, Bluetooth 5.3',
    price: 250,
    imageUrl: 'https://picsum.photos/203/300',
    location: 'Porto Alegre',
  },
  {
    id: '105',
    title: 'Tablet com caneta',
    description: 'Tela 12", 8GB RAM, 256GB',
    price: 1200,
    imageUrl: 'https://picsum.photos/204/300',
    location: 'Curitiba',
  },
  {
    id: '106',
    title: 'Câmera mirrorless Sony Alpha',
    description: 'Gravação em 4K, lente intercambiável',
    price: 6000,
    imageUrl: 'https://picsum.photos/205/300',
    location: 'Manaus',
  },
  {
    id: '107',
    title: 'Drone DJI Mini 3 Pro',
    description: 'Câmera 48MP, leve e dobrável',
    price: 4500,
    imageUrl: 'https://picsum.photos/206/300',
    location: 'Salvador',
  },
  {
    id: '108',
    title: 'Impressora 3D Ender 3 V2',
    description: 'Fácil de usar, ideal para iniciantes',
    price: 1800,
    imageUrl: 'https://picsum.photos/207/300',
    location: 'Fortaleza',
  },
  {
    id: '109',
    title: 'Televisão Samsung 55" QLED',
    description: 'Imagem vibrante, resolução 4K',
    price: 3200,
    imageUrl: 'https://picsum.photos/208/300',
    location: 'Recife',
  },
  {
    id: '110',
    title: 'Console Playstation 5',
    description: 'Gráficos incríveis, jogos exclusivos',
    price: 4000,
    imageUrl: 'https://picsum.photos/209/300',
    location: 'Goiânia',
  },
  {
    id: '111',
    title: 'Apple Macbook Air M1',
    description: 'Desempenho rápido, bateria de longa duração',
    price: 7500,
    imageUrl: 'https://picsum.photos/210/300',
    location: 'Belém',
  },
    {
    id: '112',
    title: 'Câmera fotográfica profissional',
    description: 'Ideal para fotógrafos exigentes',
    price: 3800,
    imageUrl: 'https://picsum.photos/211/300',
    location: 'Florianópolis',
  },
  {
    id: '113',
    title: 'Mesa de escritório ergonômica',
    description: 'Conforto e produtividade no trabalho',
    price: 950,
    imageUrl: 'https://picsum.photos/212/300',
    location: 'Vitória',
  },
  {
    id: '114',
    title: 'Bicicleta elétrica dobrável',
    description: 'Mobilidade urbana e sustentável',
    price: 2200,
    imageUrl: 'https://picsum.photos/213/300',
    location: 'Natal',
  },
  {
    id: '115',
    title: 'Kit de ferramentas completo',
    description: 'Tudo o que você precisa para seus projetos',
    price: 320,
    imageUrl: 'https://picsum.photos/214/300',
    location: 'João Pessoa',
  },
  {
    id: '116',
    title: 'Aspirador de pó robô',
    description: 'Limpeza automática e eficiente',
    price: 780,
    imageUrl: 'https://picsum.photos/215/300',
    location: 'Maceió',
  },
  {
    id: '117',
    title: 'Panela de pressão elétrica',
    description: 'Cozinhe seus alimentos de forma rápida e segura',
    price: 299,
    imageUrl: 'https://picsum.photos/200/171',
    location: 'Cuiabá',
  }
];

export default function Home() {
  const [currentAdIndex, setCurrentAdIndex] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);
  const isMobile = useIsMobile();

  useEffect(() => {
    let intervalId: NodeJS.Timeout;

    if (autoPlay) {
      intervalId = setInterval(() => {
        setCurrentAdIndex(prevIndex => (prevIndex + 1) % FEATURED_ADS.length);
      }, 5000); // Troca a cada 5 segundos
    }

    return () => clearInterval(intervalId); // Limpa o intervalo no cleanup
  }, [autoPlay]);

  const goToPreviousAd = () => {
    setCurrentAdIndex(prevIndex => (prevIndex - 1 + FEATURED_ADS.length) % FEATURED_ADS.length);
  };

  const goToNextAd = () => {
    setCurrentAdIndex(prevIndex => (prevIndex + 1) % FEATURED_ADS.length);
  };

  const toggleAutoPlay = () => {
    setAutoPlay(!autoPlay);
  };

  return (
    <div className="flex">
      {/* Sidebar (visible on desktop) */}
      {!isMobile && (
        <aside className="w-64 bg-secondary p-4 hidden md:block">
          {/* Filter options here */}
          <h3 className="font-semibold mb-2">Filtros</h3>
          <Card className="mb-4">
            <CardContent>
              <h4 className="font-semibold mb-2">Categoria</h4>
              <p>Opções de filtro de categoria aqui...</p>
            </CardContent>
          </Card>

          <Card className="mb-4">
            <CardContent>
              <h4 className="font-semibold mb-2">Faixa de Preço</h4>
              <p>Opções de filtro de faixa de preço aqui...</p>
            </CardContent>
          </Card>

          <Card className="mb-4">
            <CardContent>
              <h4 className="font-semibold mb-2">Localização</h4>
              <p>Opções de filtro de localização aqui...</p>
            </CardContent>
          </Card>

          <Card className="mb-4">
            <CardContent>
              <h4 className="font-semibold mb-2">Condição</h4>
              <p>Opções de filtro de condição aqui...</p>
            </CardContent>
          </Card>
        </aside>
      )}

      <div className="flex-1">
        {/* Banner Rotativo */}
        <div className="relative w-full h-64 overflow-hidden rounded-md mb-4">
          <img
            src={FEATURED_ADS[currentAdIndex].imageUrl}
            alt={FEATURED_ADS[currentAdIndex].title}
            className="absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-500"
            style={{opacity: 1}}
          />
          <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black to-transparent text-white p-4">
            <h2 className="text-lg font-semibold">
              {FEATURED_ADS[currentAdIndex].title}
            </h2>
            <p className="text-sm">{FEATURED_ADS[currentAdIndex].description}</p>
          </div>

          {/* Controles do Banner */}
          <div className="absolute top-1/2 transform -translate-y-1/2 left-2 right-2 flex justify-between items-center">
            <Button variant="ghost" size="icon" className="bg-white/50 hover:bg-white/75" onClick={goToPreviousAd}>
              <ChevronLeft className="h-6 w-6" />
            </Button>
            <Button variant="ghost" size="icon" className="bg-white/50 hover:bg-white/75" onClick={goToNextAd}>
              <ChevronRight className="h-6 w-6" />
            </Button>
          </div>
          {/* Indicadores de slide */}
          <div className="absolute bottom-2 left-0 w-full flex justify-center items-center space-x-2">
            {FEATURED_ADS.map((ad, index) => (
              <button
                key={ad.id}
                className={`h-2 w-2 rounded-full ${index === currentAdIndex ? 'bg-white' : 'bg-gray-500'}`}
                onClick={() => {
                  setCurrentAdIndex(index);
                  setAutoPlay(false);
                }}
              />
            ))}
          </div>
        </div>

        {/* Lista de Anúncios */}
        <div className="container mx-auto py-8">
          <AdList />
        </div>
      </div>
    </div>
  );
}
