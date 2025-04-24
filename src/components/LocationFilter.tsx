"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const LocationFilter = () => {
  return (
    <div className="mb-4">
      <Select>
        <SelectTrigger className="w-full text-sm">
          <SelectValue placeholder="Filtrar por localização" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="near">Próximo a mim</SelectItem>
          <SelectItem value="city">Na minha cidade</SelectItem>
          <SelectItem value="state">No meu estado</SelectItem>
          <SelectItem value="country">No meu país</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
};

export default LocationFilter;
