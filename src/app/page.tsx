'use client';

import AdList from '@/components/AdList';
import type {Metadata} from 'next';

export default function Home() {
  return (
    <div className="container mx-auto py-8">
      <AdList />
    </div>
  );
}
