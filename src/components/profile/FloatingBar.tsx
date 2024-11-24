import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Plus } from "lucide-react";

export const FloatingBar = () => {
  return (
    <div className="fixed bottom-8 right-8 flex items-center gap-4 p-4 bg-white/80 backdrop-blur-lg rounded-full shadow-lg border border-gray-200 animate-fade-in">
      <Button asChild className="rounded-full bg-coral-500 hover:bg-coral-600">
        <Link to="/add-product" className="flex items-center gap-2">
          <Plus className="h-4 w-4" />
          Add Product
        </Link>
      </Button>
    </div>
  );
};