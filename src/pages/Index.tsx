import { useState } from "react";
import { ProductCard } from "@/components/ProductCard";

const MOCK_PRODUCTS = [
  {
    id: "1",
    name: "ChatGPT",
    description: "AI-powered chatbot for natural conversations and assistance",
    imageUrl: "https://picsum.photos/200",
    votes: 1250,
    tags: ["Chatbot", "Language", "Assistant"],
  },
  {
    id: "2",
    name: "Midjourney",
    description: "Create stunning artwork using AI-powered image generation",
    imageUrl: "https://picsum.photos/201",
    votes: 980,
    tags: ["Art", "Image Generation", "Creative"],
  },
  {
    id: "3",
    name: "Copilot",
    description: "Your AI programming partner for faster code development",
    imageUrl: "https://picsum.photos/202",
    votes: 856,
    tags: ["Development", "Coding", "Productivity"],
  },
];

const Index = () => {
  const [products] = useState(MOCK_PRODUCTS);

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
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore and vote for the most innovative AI tools that are shaping the future of technology
          </p>
        </header>

        <div className="max-w-3xl mx-auto space-y-6">
          {products.map((product, index) => (
            <div
              key={product.id}
              className="fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <ProductCard {...product} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Index;