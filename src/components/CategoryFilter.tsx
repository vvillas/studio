
// CategoryFilter.tsx
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const CategoryFilter = () => {
  return (
    <div className="mb-4">
      <Select>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Filtrar por categoria" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="electronics">Eletrônicos</SelectItem>
          <SelectItem value="furniture">Móveis</SelectItem>
          <SelectItem value="clothing">Roupas</SelectItem>
          <SelectItem value="books">Livros</SelectItem>
          <SelectItem value="other">Outros</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
};

export default CategoryFilter;
