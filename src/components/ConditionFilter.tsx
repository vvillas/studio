"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const ConditionFilter = () => {
  return (
    <div className="mb-4">
      <Select>
        <SelectTrigger className="w-full text-sm">
          <SelectValue placeholder="Filtrar por condição" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="new">Novo</SelectItem>
          <SelectItem value="refurbished">Reembalado</SelectItem>
          <SelectItem value="remanufactured">Remanufaturado</SelectItem>
          <SelectItem value="used">Usado</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
};

export default ConditionFilter;
