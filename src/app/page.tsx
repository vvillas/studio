'use client';

import ItmList from '@/components/ItmList';
import type {Metadata} from 'next';
import {useEffect, useState} from 'react';
import {Button} from "@/components/ui/button";
import {ChevronLeft, ChevronRight} from "lucide-react";
import Link from 'next/link';
import {useIsMobile} from "@/hooks/use-mobile";
import {Card, CardContent} from "@/components/ui/card";
import {useIsLargeScreen} from "@/hooks/use-large-screen";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from "@/components/ui/menubar";
import {useSearchParams} from "next/navigation";

const FEATURED_ADS = [
  {
    id: '101',
    title: 'Smartphone de última geração com câmera de 200MP e 5G',
    description: 'Novo, câmera de 200MP, 5G',
    price: 1500,
    imageUrl: 'https://picsum.photos/200/300',
    location: 'São Paulo',
  },
  {
    id: '102',
    title: 'Notebook ultrafino leve com SSD 1TB e 16GB RAM',
    description: 'Leve, SSD 1TB, 16GB RAM',
    price: 2500,
    imageUrl: 'https://picsum.photos/201/300',
    location: 'Rio de Janeiro',
  },
  {
    id: '103',
    title: 'Smartwatch esportivo com GPS, monitor cardíaco e à prova d\'água',
    description: 'GPS, monitor cardíaco, à prova d\'água',
    price: 400,
    imageUrl: 'https://picsum.photos/202/300',
    location: 'Belo Horizonte',
  },
  {
    id: '104',
    title: 'Fones de ouvido sem fio com cancelamento de ruído e Bluetooth 5.3',
    description: 'Cancelamento de ruído, Bluetooth 5.3',
    price: 250,
    imageUrl: 'https://picsum.photos/203/300',
    location: 'Porto Alegre',
  },
  {
    id: '105',
    title: 'Tablet com caneta, tela 12", 8GB RAM, 256GB',
    description: 'Tela 12", 8GB RAM, 256GB',
    price: 1200,
    imageUrl: 'https://picsum.photos/204/300',
    location: 'Curitiba',
  },
  {
    id: '106',
    title: 'Câmera mirrorless Sony Alpha com gravação em 4K e lente intercambiável',
    description: 'Gravação em 4K, lente intercambiável',
    price: 6000,
    imageUrl: 'https://picsum.photos/205/300',
    location: 'Manaus',
  },
  {
    id: '107',
    title: 'Drone DJI Mini 3 Pro com câmera 48MP, leve e dobrável',
    description: 'Câmera 48MP, leve e dobrável',
    price: 4500,
    imageUrl: 'https://picsum.photos/206/300',
    location: 'Salvador',
  },
  {
    id: '108',
    title: 'Impressora 3D Ender 3 V2, fácil de usar, ideal para iniciantes',
    description: 'Fácil de usar, ideal para iniciantes',
    price: 1800,
    imageUrl: 'https://picsum.photos/207/300',
    location: 'Fortaleza',
  },
  {
    id: '109',
    title: 'Televisão Samsung 55" QLED com imagem vibrante e resolução 4K',
    description: 'Imagem vibrante, resolução 4K',
    price: 3200,
    imageUrl: 'https://picsum.photos/208/300',
    location: 'Recife',
  },
  {
    id: '110',
    title: 'Console Playstation 5 com gráficos incríveis e jogos exclusivos',
    description: 'Gráficos incríveis, jogos exclusivos',
    price: 4000,
    imageUrl: 'https://picsum.photos/209/300',
    location: 'Goiânia',
  },
  {
    id: '111',
    title: 'Apple Macbook Air M1, desempenho rápido e bateria de longa duração',
    description: 'Desempenho rápido, bateria de longa duração',
    price: 7500,
    imageUrl: 'https://picsum.photos/210/300',
    location: 'Belém',
  },
    {
    id: '112',
    title: 'Câmera fotográfica profissional, ideal para fotógrafos exigentes',
    description: 'Ideal para fotógrafos exigentes',
    price: 3800,
    imageUrl: 'https://picsum.photos/211/300',
    location: 'Florianópolis',
  },
  {
    id: '113',
    title: 'Mesa de escritório ergonômica, conforto e produtividade no trabalho',
    description: 'Conforto e produtividade no trabalho',
    price: 950,
    imageUrl: 'https://picsum.photos/212/300',
    location: 'Vitória',
  },
  {
    id: '114',
    title: 'Bicicleta elétrica dobrável, mobilidade urbana e sustentável',
    description: 'Mobilidade urbana e sustentável',
    price: 2200,
    imageUrl: 'https://picsum.photos/213/300',
    location: 'Natal',
  },
  {
    id: '115',
    title: 'Kit de ferramentas completo, tudo o que você precisa para seus projetos',
    description: 'Tudo o que você precisa para seus projetos',
    price: 320,
    imageUrl: 'https://picsum.photos/214/300',
    location: 'João Pessoa',
  },
  {
    id: '116',
    title: 'Aspirador de pó robô, limpeza automática e eficiente',
    description: 'Limpeza automática e eficiente',
    price: 780,
    imageUrl: 'https://picsum.photos/215/300',
    location: 'Maceió',
  },
  {
    id: '117',
    title: 'Panela de pressão elétrica, cozinhe seus alimentos de forma rápida e segura',
    description: 'Cozinhe seus alimentos de forma rápida e segura',
    price: 299,
    imageUrl: 'https://picsum.photos/200/171',
    location: 'Cuiabá',
  },
  {
    id: '118',
    title: 'Sanduicheira, prepare lanches rápidos e saborosos',
    description: 'Prepare lanches rápidos e saborosos',
    price: 99,
    imageUrl: 'https://picsum.photos/201/171',
    location: 'Teresina',
  },
  {
    id: '119',
    title: 'Purificador de água, água pura e cristalina sempre à disposição',
    description: 'Água pura e cristalina sempre à disposição',
    price: 450,
    imageUrl: 'https://picsum.photos/202/171',
    location: 'Rio Branco',
  },
  {
    id: '120',
    title: 'Grill elétrico, prepare churrascos deliciosos sem fumaça',
    description: 'Prepare churrascos deliciosos sem fumaça',
    price: 279,
    imageUrl: 'https://picsum.photos/203/171',
    location: 'Macapá',
  },
  {
    id: '121',
    title: 'Torradeira, comece o dia com torradas crocantes e saborosas',
    description: 'Comece o dia com torradas crocantes e saborosas',
    price: 69,
    imageUrl: 'https://picsum.photos/204/171',
    location: 'Boa Vista',
  },
  {
    id: '122',
    title: 'Fogão cooktop, design moderno e praticidade na cozinha',
    description: 'Design moderno e praticidade na cozinha',
    price: 899,
    imageUrl: 'https://picsum.photos/205/171',
    location: 'Palmas',
  },
    {
    id: '123',
    title: 'Cozinhe seus alimentos de forma rápida e segura',
    description: 'Panela de Pressão Elétrica',
    price: 299,
    imageUrl: 'https://picsum.photos/200/171',
    location: 'Cuiabá',
  },
  {
    id: '124',
    title: 'Prepare vitaminas e sucos deliciosos',
    description: 'Liquidificador',
    price: 149,
    imageUrl: 'https://picsum.photos/200/172',
    location: 'Joinville',
  },
  {
    id: '125',
    title: 'Asse bolos, pães e pizzas com facilidade',
    description: 'Forno Elétrico',
    price: 399,
    imageUrl: 'https://picsum.photos/200/173',
    location: 'Londrina',
  },
  {
    id: '126',
    title: 'Mantenha sua casa sempre limpa e organizada',
    description: 'Aspirador de Pó',
    price: 199,
    imageUrl: 'https://picsum.photos/200/174',
    location: 'Ananindeua',
  },
  {
    id: '127',
    title: 'Passe suas roupas com rapidez e eficiência',
    description: 'Ferro de Passar Roupa',
    price: 79,
    imageUrl: 'https://picsum.photos/200/175',
    location: 'Aparecida de Goiânia',
  },
  {
    id: '128',
    title: 'Prepare massas e cremes com facilidade',
    description: 'Batedeira',
    price: 129,
    imageUrl: 'https://picsum.photos/200/176',
    location: 'Serra',
  },

];


export default function Home() {
  const [currentItmIndex, setCurrentItmIndex] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);
  const isMobile = useIsMobile();
  const isLargeScreen = useIsLargeScreen();
    const searchParams = useSearchParams();

    const searchTerm = searchParams.get('search') || '';
  useEffect(() => {
    let intervalId: NodeJS.Timeout;

    if (autoPlay) {
      intervalId = setInterval(() => {
        setCurrentItmIndex(prevIndex => (prevIndex + 1) % FEATURED_ADS.length);
      }, 5000); // Troca a cada 5 segundos
    }

    return () => clearInterval(intervalId); // Limpa o intervalo no cleanup
  }, [autoPlay]);

  const goToPreviousItm = () => {
    setCurrentItmIndex(prevIndex => (prevIndex - 1 + FEATURED_ADS.length) % FEATURED_ADS.length);
  };

  const goToNextItm = () => {
    setCurrentItmIndex(prevIndex => (prevIndex + 1) % FEATURED_ADS.length);
  };

    const filteredAds = FEATURED_ADS.filter(ad =>
        ad.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

  return (
    <div className="flex">
      {/* Sidebar (visible on desktop) */}
      
        {/* Compact Menu (visible on mobile) */}
        {isMobile && (
          <Menubar>
            <MenubarMenu>
              <MenubarTrigger>Filtros</MenubarTrigger>
              <MenubarContent>
                <MenubarItem>Categoria</MenubarItem>
                <MenubarItem>Faixa de Preço</MenubarItem>
                <MenubarItem>Localização</MenubarItem>
                <MenubarItem>Condição</MenubarItem>
              </MenubarContent>
            </MenubarMenu>
          </Menubar>
        )}

      <div className="w-full">
        {/* Banner Rotativo */}
        <div className="relative w-full h-64 overflow-hidden rounded-md mb-4">
          <img
            src={FEATURED_ADS[currentItmIndex].imageUrl}
            alt={FEATURED_ADS[currentItmIndex].title}
            className="absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-500"
            style={{opacity: 1}}
          />
          <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black to-transparent text-white p-4">
            <h2 className="text-lg font-semibold">
              {FEATURED_ADS[currentItmIndex].title}
            </h2>
            <p className="text-sm">{FEATURED_ADS[currentItmIndex].description}</p>
          </div>

          {/* Controles do Banner */}
          <div className="absolute top-1/2 transform -translate-y-1/2 left-2 right-2 flex justify-between items-center">
            <Button variant="ghost" size="icon" className="bg-white/50 hover:bg-white/75" onClick={goToPreviousItm}>
              <ChevronLeft className="h-6 w-6" />
            </Button>
            <Button variant="ghost" size="icon" className="bg-white/50 hover:bg-white/75" onClick={goToNextItm}>
              <ChevronRight className="h-6 w-6" />
            </Button>
          </div>
          {/* Indicadores de slide */}
          <div className="absolute bottom-2 left-0 w-full flex justify-center items-center space-x-2">
            {FEATURED_ADS.map((ad, index) => (
              <button
                key={ad.id}
                className={`h-2 w-2 rounded-full ${index === currentItmIndex ? 'bg-white' : 'bg-gray-500'}`}
                onClick={() => {
                  setCurrentItmIndex(index);
                  setAutoPlay(false);
                }}
              />
            ))}
          </div>
        </div>

        {/* Lista de Anúncios */}
        <div className="container mx-auto py-8">
          <ItmList items={filteredAds} />
        </div>
      </div>
    </div>
  );
}
