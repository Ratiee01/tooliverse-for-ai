import { useState } from "react";
import { ProductCard } from "@/components/ProductCard";
import { SearchBox } from "@/components/SearchBox";
import { Categories } from "@/components/Categories";
import { useToast } from "@/components/ui/use-toast";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

const CATEGORIES = [
  "Chatbot",
  "Image Generation",
  "Code Assistant",
  "Writing",
  "Audio",
  "Video",
];

// Simulating 1500 products
const generateMockProducts = () => {
  const products = [];
  const categories = ["Chatbot", "Image Generation", "Code Assistant", "Writing", "Audio", "Video"];
  
  for (let i = 1; i <= 1500; i++) {
    products.push({
      id: i.toString(),
      name: `AI Tool ${i}`,
      description: `Description for AI Tool ${i} - An innovative solution for your needs`,
      imageUrl: `https://picsum.photos/seed/${i}/200`,
      votes: Math.floor(Math.random() * 2000),
      tags: [
        categories[Math.floor(Math.random() * categories.length)],
        "AI",
        "Technology"
      ],
      category: categories[Math.floor(Math.random() * categories.length)],
    });
  }
  return products;
};

const MOCK_PRODUCTS = generateMockProducts();
const ITEMS_PER_PAGE = 10;

const Index = () => {
  const [products, setProducts] = useState(MOCK_PRODUCTS);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const { toast } = useToast();

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    setCurrentPage(1);
  };

  const handleCategorySelect = (category: string) => {
    setSelectedCategory(category);
    setCurrentPage(1);
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

  const totalPages = Math.ceil(filteredProducts.length / ITEMS_PER_PAGE);
  const paginatedProducts = filteredProducts.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <div className="container px-4 py-16 mx-auto">
        <header className="text-center mb-16 fade-in">
          <div className="inline-block px-4 py-1 bg-coral-50 rounded-full text-coral-600 text-sm font-medium mb-4">
            {filteredProducts.length} AI Tools Available
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
          {paginatedProducts.map((product, index) => (
            <div
              key={product.id}
              className="fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <ProductCard {...product} onVote={() => handleVote(product.id)} />
            </div>
          ))}
          {paginatedProducts.length === 0 && (
            <div className="text-center text-gray-500 py-8">
              No AI tools found matching your criteria
            </div>
          )}
        </div>

        {filteredProducts.length > ITEMS_PER_PAGE && (
          <div className="mt-12">
            <Pagination>
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious
                    onClick={() => handlePageChange(Math.max(1, currentPage - 1))}
                    className={currentPage === 1 ? "pointer-events-none opacity-50" : "cursor-pointer"}
                  />
                </PaginationItem>
                {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                  const pageNumber = i + 1;
                  return (
                    <PaginationItem key={pageNumber}>
                      <PaginationLink
                        onClick={() => handlePageChange(pageNumber)}
                        isActive={currentPage === pageNumber}
                      >
                        {pageNumber}
                      </PaginationLink>
                    </PaginationItem>
                  );
                })}
                {totalPages > 5 && (
                  <>
                    <PaginationItem>
                      <PaginationLink>...</PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink
                        onClick={() => handlePageChange(totalPages)}
                        isActive={currentPage === totalPages}
                      >
                        {totalPages}
                      </PaginationLink>
                    </PaginationItem>
                  </>
                )}
                <PaginationItem>
                  <PaginationNext
                    onClick={() => handlePageChange(Math.min(totalPages, currentPage + 1))}
                    className={currentPage === totalPages ? "pointer-events-none opacity-50" : "cursor-pointer"}
                  />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          </div>
        )}
      </div>
    </div>
  );
};

export default Index;