"use client";

import {
  Slider,
} from "@/components/ui/slider";
import { useState } from "react";

const PriceRangeFilter = () => {
  const [range, setRange] = useState<number[]>([0, 100]);

  return (
    <div className="mb-4">
      <div className="text-sm mb-2">
        Faixa de Preço: R$ {range[0]} - R$ {range[1]}
      </div>
      <Slider
        defaultValue={[0, 100]}
        max={1000}
        step={10}
        aria-label="range"
        onValueChange={(value) => setRange(value)}
      />
    </div>
  );
};

export default PriceRangeFilter;
