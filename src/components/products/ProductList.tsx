import { ProductCard } from "@/components/ProductCard";
import { useState } from "react";
import { toast } from "sonner";

interface Product {
  id: string;
  name: string;
  description: string;
  category: string;
  votes: number;
  imageUrl: string;
}

interface ProductListProps {
  products: Product[];
  currentPage: number;
  itemsPerPage: number;
}

export const ProductList = ({ products, currentPage, itemsPerPage }: ProductListProps) => {
  const [favorites, setFavorites] = useState<Set<string>>(new Set());

  const handleFavorite = (productId: string) => {
    setFavorites((prev) => {
      const newFavorites = new Set(prev);
      if (newFavorites.has(productId)) {
        newFavorites.delete(productId);
        toast.success("Removed from favorites");
      } else {
        newFavorites.add(productId);
        toast.success("Added to favorites");
      }
      return newFavorites;
    });
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedProducts = products.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div className="max-w-3xl mx-auto space-y-6">
      {paginatedProducts.map((product, index) => (
        <div
          key={product.id}
          className="fade-in-up"
          style={{ animationDelay: `${index * 0.1}s` }}
        >
          <ProductCard 
            {...product} 
            onVote={() => {}} 
            isFavorite={favorites.has(product.id)}
            onFavorite={() => handleFavorite(product.id)}
            showFavorite={true}
          />
        </div>
      ))}
      {paginatedProducts.length === 0 && (
        <div className="text-center text-gray-500 py-8">
          No AI tools found matching your criteria
        </div>
      )}
    </div>
  );
};