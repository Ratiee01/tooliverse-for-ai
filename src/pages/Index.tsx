import { useState } from "react";
import { SearchBox } from "@/components/SearchBox";
import { Categories } from "@/components/Categories";
import { useToast } from "@/components/ui/use-toast";
import { MOCK_PRODUCTS } from "@/data/mockData";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ProductList } from "@/components/products/ProductList";
import { CounterAnimation } from "@/components/CounterAnimation";
import { AiBackground } from "@/components/AiBackground";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Settings, User, LogOut } from "lucide-react";
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

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <AiBackground />
      <div className="container px-4 py-16 mx-auto">
        <div className="absolute top-4 right-4 flex items-center space-x-2">
          <Button variant="outline" asChild>
            <Link to="/login">Sign In</Link>
          </Button>
          <Button asChild>
            <Link to="/signup">Sign Up</Link>
          </Button>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="rounded-full">
                <Avatar>
                  <AvatarFallback>
                    <User className="h-5 w-5" />
                  </AvatarFallback>
                </Avatar>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem asChild>
                <Link to="/profile">
                  <User className="mr-2 h-4 w-4" />
                  <span>Profile</span>
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link to="/settings">
                  <Settings className="mr-2 h-4 w-4" />
                  <span>Settings</span>
                </Link>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <LogOut className="mr-2 h-4 w-4" />
                <span>Log out</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        <header className="text-center mb-16 fade-in">
          <Link to="/" className="inline-block mb-8">
            <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
              AI-Hunt
            </h1>
          </Link>
          <h2 className="text-3xl font-bold mb-4">
            Find the Best AI Tools
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            Join our community to explore and vote for the most innovative AI tools that are shaping the future of technology
          </p>
          <div className="flex justify-center items-center mb-8">
            <div 
              className="inline-flex items-center px-4 py-1 bg-coral-50 rounded-full text-coral-600 text-sm font-medium animate-[counter_2s_ease-out]"
              style={{
                animation: 'counter 1s cubic-bezier(0.11, 0, 0.5, 0)'
              }}
            >
              <CounterAnimation end={filteredProducts.length} duration={1000} />
              AI Tools Available
            </div>
          </div>
          <SearchBox onSearch={handleSearch} />
          <Categories
            categories={CATEGORIES}
            selectedCategory={selectedCategory}
            onSelectCategory={handleCategorySelect}
          />
        </header>

        <ProductList 
          products={filteredProducts}
          currentPage={currentPage}
          itemsPerPage={ITEMS_PER_PAGE}
        />

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