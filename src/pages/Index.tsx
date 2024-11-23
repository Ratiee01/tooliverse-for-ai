import { useState } from "react";
import { ProductCard } from "@/components/ProductCard";
import { SearchBox } from "@/components/SearchBox";
import { Categories } from "@/components/Categories";
import { useToast } from "@/components/ui/use-toast";

const CATEGORIES = [
  "Chatbot",
  "Image Generation",
  "Code Assistant",
  "Writing",
  "Audio",
  "Video",
];

const MOCK_PRODUCTS = [
  {
    id: "1",
    name: "ChatGPT",
    description: "AI-powered chatbot for natural conversations and assistance",
    imageUrl: "https://picsum.photos/200",
    votes: 1250,
    tags: ["Chatbot", "Language", "Assistant"],
    category: "Chatbot",
  },
  {
    id: "2",
    name: "Midjourney",
    description: "Create stunning artwork using AI-powered image generation",
    imageUrl: "https://picsum.photos/201",
    votes: 980,
    tags: ["Art", "Image Generation", "Creative"],
    category: "Image Generation",
  },
  {
    id: "3",
    name: "Copilot",
    description: "Your AI programming partner for faster code development",
    imageUrl: "https://picsum.photos/202",
    votes: 856,
    tags: ["Development", "Coding", "Productivity"],
    category: "Code Assistant",
  },
];

const Index = () => {
  const [products, setProducts] = useState(MOCK_PRODUCTS);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const { toast } = useToast();

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  const handleCategorySelect = (category: string) => {
    setSelectedCategory(category);
  };

  const handleVote = (productId: string) => {
    setProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.id === productId
          ? { ...product, votes: product.votes + 1 }
          : product
      )
    );

    toast({
      title: "Vote registered!",
      description: "Thank you for supporting this AI tool.",
    });
  };

  const filteredProducts = products
    .filter((product) =>
      selectedCategory === "all" ? true : product.category === selectedCategory
    )
    .filter((product) =>
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.description.toLowerCase().includes(searchQuery.toLowerCase())
    )
    .sort((a, b) => b.votes - a.votes);

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <div className="container px-4 py-16 mx-auto">
        <header className="text-center mb-16 fade-in">
          <div className="inline-block px-4 py-1 bg-coral-50 rounded-full text-coral-600 text-sm font-medium mb-4">
            Discover AI Tools
          </div>
          <h1 className="text-4xl font-bold mb-4">
            Find the Best AI Tools
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            Join our community to explore and vote for the most innovative AI tools that are shaping the future of technology
          </p>
          <SearchBox onSearch={handleSearch} />
          <Categories
            categories={CATEGORIES}
            selectedCategory={selectedCategory}
            onSelectCategory={handleCategorySelect}
          />
        </header>

        <div className="max-w-3xl mx-auto space-y-6">
          {filteredProducts.map((product, index) => (
            <div
              key={product.id}
              className="fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <ProductCard {...product} onVote={() => handleVote(product.id)} />
            </div>
          ))}
          {filteredProducts.length === 0 && (
            <div className="text-center text-gray-500 py-8">
              No AI tools found matching your criteria
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Index;