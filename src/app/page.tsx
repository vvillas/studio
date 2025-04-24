'use client';

import AdList from '@/components/AdList';
import type {Metadata} from 'next';

export const metadata: Metadata = {
  title: 'Classificados Lite',
  description: 'Classificados App',
};
export default function Home() {
  return (
    <div className="container mx-auto py-8">
      <AdList />
    </div>
  );
}
