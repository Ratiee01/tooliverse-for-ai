import { Link } from "react-router-dom";
import { CounterAnimation } from "@/components/CounterAnimation";

interface HeaderProps {
  productCount: number;
}

export const Header = ({ productCount }: HeaderProps) => {
  return (
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
          <CounterAnimation end={productCount} duration={1000} />
          AI Tools Available
        </div>
      </div>
    </header>
  );
};