'use client';

import AdList from '@/components/AdList';
import type {Metadata} from 'next';
import {useEffect, useState} from 'react';

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
];

export default function Home() {
  const [currentAdIndex, setCurrentAdIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentAdIndex(prevIndex => (prevIndex + 1) % FEATURED_ADS.length);
    }, 5000); // Troca a cada 5 segundos

    return () => clearInterval(intervalId); // Limpa o intervalo no cleanup
  }, []);

  return (
    <div>
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
      </div>

      {/* Lista de Anúncios */}
      <div className="container mx-auto py-8">
        <AdList />
      </div>
    </div>
  );
}
