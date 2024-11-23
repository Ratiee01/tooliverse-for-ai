import { Button } from "./ui/button";
import { ArrowUpCircle } from "lucide-react";
import { Link } from "react-router-dom";

interface ProductCardProps {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
  votes: number;
  tags: string[];
  onVote: (e: React.MouseEvent) => void;
}

export const ProductCard = ({ id, name, description, imageUrl, votes, tags, onVote }: ProductCardProps) => {
  return (
    <Link to={`/product/${id}`} className="block">
      <div className="glass-card rounded-xl p-4 hover-scale">
        <div className="flex gap-4">
          <div className="flex-shrink-0 w-24 h-24">
            <img
              src={imageUrl}
              alt={name}
              className="w-full h-full object-cover rounded-lg"
              loading="lazy"
            />
          </div>
          <div className="flex-grow">
            <div className="flex items-start justify-between">
              <div>
                <h3 className="font-semibold text-lg">{name}</h3>
                <p className="text-sm text-gray-600 mt-1">{description}</p>
                <div className="flex gap-2 mt-2">
                  {tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 bg-gray-100 rounded-full text-xs text-gray-600"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <Button
                onClick={(e) => {
                  e.preventDefault();
                  onVote(e);
                }}
                variant="outline"
                className="flex items-center gap-2"
              >
                <ArrowUpCircle className="text-gray-400" size={16} />
                <span>{votes}</span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};