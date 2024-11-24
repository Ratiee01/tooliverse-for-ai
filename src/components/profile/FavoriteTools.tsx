import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ProductCard } from "@/components/ProductCard";
import { MOCK_PRODUCTS } from "@/data/mockData";

export const FavoriteTools = () => {
  // In a real app, this would be fetched from an API
  const favoriteTools = MOCK_PRODUCTS.slice(0, 3);

  return (
    <Card>
      <CardHeader>
        <CardTitle>Favorite Tools</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {favoriteTools.map((tool) => (
            <ProductCard key={tool.id} {...tool} showFavorite={false} />
          ))}
        </div>
      </CardContent>
    </Card>
  );
};