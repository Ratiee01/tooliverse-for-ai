import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Star } from "lucide-react";

interface ProductCardProps {
  id: string;
  name: string;
  description: string;
  category: string;
  votes: number;
  imageUrl: string;
  onVote?: () => void;
  isFavorite?: boolean;
  onFavorite?: () => void;
  showFavorite?: boolean;
}

export const ProductCard = ({
  name,
  description,
  category,
  votes,
  imageUrl,
  onVote,
  isFavorite,
  onFavorite,
  showFavorite = true,
}: ProductCardProps) => {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <div className="flex items-center space-x-4">
          <div className="w-16 h-16 rounded-lg overflow-hidden">
            <img
              src={imageUrl}
              alt={name}
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <CardTitle className="text-xl">{name}</CardTitle>
            <div className="text-sm text-muted-foreground">{category}</div>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          {showFavorite && (
            <Button
              variant="ghost"
              size="icon"
              onClick={onFavorite}
              className={isFavorite ? "text-yellow-500" : ""}
            >
              <Star className="h-5 w-5" />
            </Button>
          )}
          <Button variant="outline" onClick={onVote}>
            ↑ {votes}
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  );
};