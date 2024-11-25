export const generateMockProducts = () => {
  const products = [
    {
      id: "1",
      name: "ChatGPT",
      description: "OpenAI's conversational AI model for various applications.",
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/0/04/ChatGPT_logo.svg",
      votes: 1842,
      category: "Chatbot",
    },
    {
      id: "2",
      name: "Gemini",
      description: "Google's versatile chatbot for text and spoken responses.",
      imageUrl: "https://blog.google/static/images/prod/AI_hero_1440x960.png",
      votes: 1523,
      category: "Chatbot",
    },
    {
      id: "3",
      name: "Microsoft Copilot",
      description: "AI assistant for web searches and creative tasks.",
      imageUrl: "https://blogs.microsoft.com/wp-content/uploads/prod/sites/5/2023/05/Microsoft-Copilot-1.png",
      votes: 1432,
      category: "Chatbot",
    },
    {
      id: "4",
      name: "ChatSpot",
      description: "HubSpot's CRM bot for sales and marketing tasks.",
      imageUrl: "https://www.hubspot.com/hubfs/chatspot-social.png",
      votes: 1321,
      category: "Chatbot",
    },
    {
      id: "5",
      name: "Jasper Chat",
      description: "AI tool for content creation tailored to brand voice.",
      imageUrl: "https://assets-global.website-files.com/60e5f2de011b86acebc30db7/650c4a82459a7305e0c41685_Jasper_Logomark_RGB.svg",
      votes: 1234,
      category: "Chatbot",
    },
    {
      id: "6",
      name: "Drift",
      description: "Conversational marketing platform for lead generation.",
      imageUrl: "https://www.drift.com/wp-content/uploads/2019/04/Drift-Logo.png",
      votes: 1123,
      category: "Chatbot",
    },
    {
      id: "7",
      name: "Ada",
      description: "AI chatbot designed for customer service automation.",
      imageUrl: "https://www.ada.cx/hubfs/raw_assets/public/ada-website/images/ada-logo.svg",
      votes: 987,
      category: "Chatbot",
    },
    {
      id: "8",
      name: "Tidio",
      description: "Live chat and chatbot solution for online businesses.",
      imageUrl: "https://www.tidio.com/wp-content/uploads/tidio-logo-small.svg",
      votes: 876,
      category: "Chatbot",
    },
    {
      id: "9",
      name: "Intercom",
      description: "Customer messaging platform with automated chat features.",
      imageUrl: "https://downloads.intercomcdn.com/i/o/355439/92cf57d96f4af4d46b8f13da/intercom-logo-black.png",
      votes: 765,
      category: "Chatbot",
    },
    {
      id: "10",
      name: "Botpress",
      description: "Open-source platform for building powerful chatbots.",
      imageUrl: "https://botpress.com/static/bp-logo-black.svg",
      votes: 654,
      category: "Chatbot",
    }
  ];

  return products;
};

export const MOCK_PRODUCTS = generateMockProducts();