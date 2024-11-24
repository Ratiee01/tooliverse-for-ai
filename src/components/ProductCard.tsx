import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Star } from "lucide-react";

interface ProductCardProps {
  id: string;
  name: string;
  description: string;
  category: string;
  votes: number;
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
  onVote,
  isFavorite,
  onFavorite,
  showFavorite = true,
}: ProductCardProps) => {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <div>
          <CardTitle className="text-xl">{name}</CardTitle>
          <div className="text-sm text-muted-foreground">{category}</div>
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