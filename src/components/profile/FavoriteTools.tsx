import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ProductCard } from "@/components/ProductCard";
import { MOCK_PRODUCTS } from "@/data/mockData";
import { useState } from "react";

export const FavoriteTools = () => {
  const [favoriteTools, setFavoriteTools] = useState(MOCK_PRODUCTS.slice(0, 3));

  const handleVote = (productId: string) => {
    setFavoriteTools((prevTools) =>
      prevTools.map((tool) =>
        tool.id === productId
          ? { ...tool, votes: tool.votes + 1 }
          : tool
      )
    );
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Favorite Tools</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {favoriteTools.map((tool) => (
            <ProductCard 
              key={tool.id} 
              {...tool} 
              showFavorite={false} 
              onVote={() => handleVote(tool.id)}
            />
          ))}
        </div>
      </CardContent>
    </Card>
  );
};