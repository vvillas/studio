
// CategoryFilter.tsx
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const CategoryFilter = () => {
  return (
    <div className="mb-4">
      <Select>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Filter by category" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="electronics">Electronics</SelectItem>
          <SelectItem value="furniture">Furniture</SelectItem>
          <SelectItem value="clothing">Clothing</SelectItem>
          <SelectItem value="books">Books</SelectItem>
          <SelectItem value="other">Other</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
};

export default CategoryFilter;
