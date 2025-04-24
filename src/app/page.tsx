
import AdList from '@/components/AdList';
import CategoryFilter from '@/components/CategoryFilter';
import { Button } from '@/components/ui/button';
import { Plus } from 'lucide-react';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="container mx-auto py-8">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Classifieds Lite</h1>
        <Link href="/post-ad">
          <Button>
            <Plus className="mr-2 h-4 w-4" />
            Post Ad
          </Button>
        </Link>
      </div>

      <CategoryFilter />
      <AdList />
    </div>
  );
}

