export const generateMockProducts = () => {
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

export const MOCK_PRODUCTS = generateMockProducts();