
import AdList from '@/components/AdList';
import CategoryFilter from '@/components/CategoryFilter';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Plus } from 'lucide-react';

export default function Home() {
  return (
    <div className="container mx-auto py-8">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Classificados Lite</h1>
        <Link href="/post-ad">
          <Button>
            <Plus className="mr-2 h-4 w-4" />
            Postar Anúncio
          </Button>
        </Link>
      </div>

      <CategoryFilter />
      <AdList />
    </div>
  );
}

