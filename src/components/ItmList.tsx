'use client';

import {Card, CardContent} from "@/components/ui/card";
import {useEffect, useState} from "react";
import {Itm} from "@/types/ad";
import {MapPin} from "lucide-react";
import Link from 'next/link';

interface ItmListProps {
    items: Itm[];
}

const ItmList = ({items}: ItmListProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {items.map((ad) => (
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

export default ItmList;
