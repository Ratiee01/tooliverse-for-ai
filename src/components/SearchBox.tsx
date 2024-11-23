import { Input } from "./ui/input";
import { Search } from "lucide-react";

interface SearchBoxProps {
  onSearch: (query: string) => void;
}

export const SearchBox = ({ onSearch }: SearchBoxProps) => {
  return (
    <div className="relative max-w-md w-full mx-auto mb-8">
      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
      <Input
        className="pl-10 w-full"
        placeholder="Search AI tools..."
        onChange={(e) => onSearch(e.target.value)}
      />
    </div>
  );
};