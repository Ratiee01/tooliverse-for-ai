import { useState } from "react";
import { Button } from "./ui/button";
import { ArrowUpCircle } from "lucide-react";

interface ProductCardProps {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
  votes: number;
  tags: string[];
}

export const ProductCard = ({ id, name, description, imageUrl, votes, tags }: ProductCardProps) => {
  const [voteCount, setVoteCount] = useState(votes);
  const [hasVoted, setHasVoted] = useState(false);

  const handleVote = () => {
    if (!hasVoted) {
      setVoteCount(prev => prev + 1);
      setHasVoted(true);
    }
  };

  return (
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
              onClick={handleVote}
              variant={hasVoted ? "secondary" : "outline"}
              className="flex items-center gap-2"
              disabled={hasVoted}
            >
              <ArrowUpCircle className={hasVoted ? "text-coral-500" : "text-gray-400"} size={16} />
              <span>{voteCount}</span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};