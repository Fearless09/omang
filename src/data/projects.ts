import { v4 as uuidv4 } from "uuid";

export type PROJECT = {
  id: string;
  title: string;
  subtitle: string;
  mockup: string;
  tags: string[];
  platform: "mobile" | "web";
  year: string;
  client: string;
  role: string;
  category: string;
  hero: {
    img: string;
    bgColor: string;
  };
  overview: {
    heading?: string;
    decription: string;
  }[];
  challenges: {
    heading?: string;
    decription: string;
  }[];
  solutions: {
    heading?: string;
    decription: string;
  }[];
  displayImgs: {
    imgs: string[];
    bgColor: string;
  }[];
  results: {
    heading?: string;
    decription: string;
  }[];
  tech: string[];
  comingSoon?: boolean;
};

export const projects: PROJECT[] = [
  {
    id: "aae848a1-0d39-4f46-8ab7-b338a0e2cae2",
    title: "PRODUCT DETAILS PAGE",
    subtitle: "Design to simplify international money transfer",
    mockup: "/projects/product-details/mockup.png",
    tags: ["Design", "E-commerce", "Web"],
    platform: "web",
    year: "2025",
    client: "Coalition Technology",
    role: "Lead Product Designer",
    category: "Web App",
    hero: {
      img: "",
      bgColor: "",
    },
    overview: [
      {
        decription:
          "The camera product page is designed with a clean and modern layout that highlights the product's key features. At the top, there's a large, high-quality image of the camera with a zoom-in option. Below it, users can find a short product description, specifications, price, and “Add to Cart” button. A section for customer reviews and related accessories appears at the bottom. The design focuses on simplicity, easy navigation, and a visually appealing presentation to enhance the shopping experience.",
      },
    ],
    challenges: [
      {
        decription:
          "Balancing Visuals and Performance: High-quality images are essential for showcasing the camera, but large files can slow down page loading.",
      },
      {
        decription:
          "Responsive Design: Ensuring the layout looks perfect on all devices—from desktops to mobile screens—can be challenging.",
      },
      {
        decription:
          "Information Overload: Overload: Presenting technical specifications clearly without overwhelming the user requires careful organization.",
      },
      {
        decription:
          "User Engagement: Encouraging visitors to explore more (e.g., reviews, accessories) while keeping the design clean and focused.",
      },
      {
        decription:
          "Conversion Optimization: Designing call-to-action buttons and layouts that guide users smoothly toward making a purchase.",
      },
    ],
    solutions: [
      {
        decription:
          "Optimize Images: Use compressed, high-resolution images and lazy loading to maintain quality without slowing down the site.",
      },
      {
        decription:
          "Responsive Layout: Apply flexible grids and media queries to ensure the page adapts smoothly across all screen sizes.",
      },
      {
        decription:
          "Clear Information Hierarchy: Use tabs, icons, and collapsible sections to organize specs, reviews, and details neatly.",
      },
      {
        decription:
          "Interactive Features: Added user testimonials to boost engagement and trust.",
      },
      {
        decription:
          "Strong Call-to-Actions: Use clear, well-placed “Add to Cart” and “Buy Now” buttons with contrasting colors to guide users effectively.",
      },
    ],
    displayImgs: [{ imgs: [""], bgColor: "" }],
    results: [
      { decription: "85% Satisfaction Rate" },
      { decription: "60% increase in daily active users" },
      { decription: "Featured in App Store Health & Fitness category" },
    ],
    tech: ["Design", "E-commerce", "Web", "Figma"],
    comingSoon: true,
  },
  {
    id: "894972b8-d820-44e0-892a-c6fb7470c59c",
    title: "FUNPAY",
    subtitle: "Design to simplify international money transfer",
    mockup: "/projects/funpay/mockup.png",
    tags: ["Design", "Fintech", "Mobile"],
    platform: "mobile",
    year: "2025",
    client: "Fastpay",
    role: "Lead Product Designer",
    category: "Mobile App",
    hero: {
      img: "/projects/funpay/hero.png",
      bgColor: "bg-[#436CFF]",
    },
    overview: [
      {
        decription:
          "FunPay is a cutting-edge fintech mobile application designed to revolutionize peer-to-peer money transfers across the nation. Built on a foundation of speed, security, and user-centric design, FunPay enables individuals to send and receive money instantly, eliminating the traditional barriers associated with financial transactions. In an increasingly digital economy where convenience and immediacy are paramount, FunPay positions itself as the go-to solution for seamless nationwide money transfers.",
      },
    ],
    challenges: [
      {
        decription:
          "To democratize financial transactions by providing a secure, fast, and user-friendly platform that enables anyone with a smartphone to send and receive money nationwide, regardless of their banking institution or geographical location.",
      },
    ],
    solutions: [
      {
        decription:
          "FunPay addresses these challenges through a comprehensive digital platform that offers:",
      },
      {
        heading: "Instant Transfers",
        decription:
          "Real-time money movement that completes transactions in seconds rather than hours or days, enabling users to send funds for emergencies, bill splitting, or business payments without delay.",
      },
      {
        heading: "Nationwide Coverage",
        decription:
          "Seamless integration with major banking institutions across the country, allowing users to send money to anyone regardless of their bank or location.",
      },
      {
        heading: "User-Friendly Interface",
        decription:
          "An intuitive, streamlined design that makes sending money as simple as sending a text message, with minimal steps from initiation to completion.",
      },
      {
        heading: "Robust Security",
        decription:
          "Bank-level encryption, multi-factor authentication, biometric verification, and fraud detection systems that protect user data and transactions at every stage.",
      },
      {
        heading: "Transparent Pricing",
        decription:
          "Clear, upfront fee structures with competitive rates that make the service accessible for transactions of all sizes.",
      },
    ],
    displayImgs: [
      {
        imgs: [
          "/projects/funpay/1.png",
          "/projects/funpay/2.png",
          "/projects/funpay/3.png",
        ],
        bgColor: "bg-[#E6EAFB]",
      },
      {
        imgs: [
          "/projects/funpay/4.png",
          "/projects/funpay/5.png",
          "/projects/funpay/6.png",
        ],
        bgColor: "bg-[#E6EAFB]",
      },
      {
        imgs: [
          "/projects/funpay/7.png",
          "/projects/funpay/8.png",
          "/projects/funpay/9.png",
        ],
        bgColor: "bg-[#E6EAFB]",
      },
    ],
    results: [
      { decription: "85% Satisfaction Rate" },
      { decription: "65% Increase in daily Transactions" },
      { decription: "Featured in Fintech Category" },
    ],
    tech: ["Design", "Fintech", "Mobile", "Figma"],
  },
  {
    id: "da17cc17-beec-4d2d-b8b0-d524a5f1a9d9",
    title: "MEDSHOP",
    subtitle: "Building a seamless path to better cellular health",
    mockup: "/projects/medshop/mockup.png",
    tags: ["Design", "Health & Healthcare", "Mobile"],
    platform: "mobile",
    year: "2025",
    client: "Medshop",
    role: "Lead Product Designer",
    category: "Mobile App",
    hero: {
      img: "/projects/medshop/hero.png",
      bgColor: "bg-[#007EC9]",
    },
    overview: [
      {
        decription:
          "Medshop is an innovative healthcare technology application designed to revolutionize how patients, caregivers, and healthcare professionals locate and purchase medical products. By bridging the gap between consumers and pharmacies through a sophisticated search platform, Medshop solves the critical problem of medication and medical product availability. The app empowers users to quickly find essential medical supplies, compare prices across multiple pharmacies, check real-time inventory, and make informed purchasing decisions—all from the convenience of their smartphone.",
      },
    ],
    challenges: [
      {
        decription:
          "The current medical product purchasing landscape presents significant challenges:",
      },
      {
        decription:
          "Availability Uncertainty: Patients often visit multiple pharmacies only to find their required medication out of stock, wasting valuable time and delaying critical treatment.",
      },
      {
        decription:
          "Price Opacity: Without a centralized comparison tool, consumers have no way to know which pharmacy offers the best price for their medications, often overpaying significantly.",
      },
      {
        decription:
          "Information Fragmentation: Medical product information is scattered across individual pharmacy systems with no unified search capability, making it nearly impossible to find specialized or less common items.",
      },
      {
        decription:
          "Geographic Limitations: Patients in remote or underserved areas face additional challenges locating pharmacies that stock their needed products.",
      },
      {
        decription:
          "Time Sensitivity: For urgent medical needs, the time spent calling or visiting multiple pharmacies can have serious health implications.",
      },
      {
        decription:
          "Connectivity Barriers: Many users in areas with poor internet connectivity cannot access online pharmacy information when they need it the most.",
      },
    ],
    solutions: [
      {
        decription:
          "The current medical product purchasing landscape presents significant challenges:",
      },
      {
        decription:
          "Availability Uncertainty: Patients often visit multiple pharmacies only to find their required medication out of stock, wasting valuable time and delaying critical treatment.",
      },
      {
        decription:
          "Price Opacity: Without a centralized comparison tool, consumers have no way to know which pharmacy offers the best price for their medications, often overpaying significantly.",
      },
      {
        decription:
          "Information Fragmentation: Medical product information is scattered across individual pharmacy systems with no unified search capability, making it nearly impossible to find specialized or less common items.",
      },
      {
        decription:
          "Geographic Limitations: Patients in remote or underserved areas face additional challenges locating pharmacies that stock their needed products.",
      },
      {
        decription:
          "Time Sensitivity: For urgent medical needs, the time spent calling or visiting multiple pharmacies can have serious health implications.",
      },
      {
        decription:
          "Connectivity Barriers: Many users in areas with poor internet connectivity cannot access online pharmacy information when they need it the most.",
      },
    ],
    displayImgs: [
      {
        imgs: [
          "/projects/medshop/1.png",
          "/projects/medshop/2.png",
          "/projects/medshop/3.png",
        ],
        bgColor: "bg-[#0E3653]",
      },
      {
        imgs: [
          "/projects/medshop/4.png",
          "/projects/medshop/5.png",
          "/projects/medshop/6.png",
        ],
        bgColor: "bg-[#0E3653]",
      },
      {
        imgs: [
          "/projects/medshop/7.png",
          "/projects/medshop/8.png",
          "/projects/medshop/9.png",
        ],
        bgColor: "bg-[#007EC9]",
      },
      {
        imgs: [
          "/projects/medshop/10.png",
          "/projects/medshop/11.png",
          "/projects/medshop/12.png",
        ],
        bgColor: "bg-[#007EC9]",
      },
    ],
    results: [
      { decription: "85% Satisfaction Rate" },
      { decription: "60% increase in daily active users" },
      { decription: "Featured in App Store Health & Fitness category" },
    ],
    tech: ["Design", "Health & Healthcare", "Mobile", "Figma"],
  },
  {
    id: "c5cc6c83-ed12-46e4-a45f-f296d4b44e7a",
    title: "BOSTON",
    subtitle: "Design to simplify The Hailing Process",
    mockup: "/projects/boston/mockup.png",
    tags: ["Design", "Transportation", "Mobile"],
    platform: "mobile",
    year: "2024",
    client: "Boston",
    role: "Lead Product Designer",
    category: "Mobile App",
    hero: {
      img: "/projects/boston/hero.png",
      bgColor: "bg-[#32BB77]",
    },
    overview: [
      {
        decription:
          "Our hailing mobile app redefines transportation, offering a seamless, efficient, and transformative experience for users. It addresses industry challenges, providing a solution that prioritizes  convenience, safety, and reliability in the dynamic transportation landscape.",
      },
    ],
    challenges: [
      {
        decription:
          "The traditional transportation model faces inherent challenges that have spurred the demand for innovation and user-centric solutions. In identifying key pain points and inconveniences experienced by users, it becomes evident that a shift towards a more user-friendly and efficient hailing solution is imperative.",
      },
      {
        heading: "Challenges in the Traditional Transportation Model",
        decription:
          "Unpredictable Wait Times: Traditional transportation often involves uncertainty in predicting when a vehicle will be available, leading to frustration and inconvenience for passengers.",
      },
      {
        decription:
          "Lack of Accessibility: Limited accessibility options, especially in remote areas or during peak hours, create difficulties for users seeking reliable transportation.",
      },
      {
        decription:
          "Safety Concerns: Inadequate safety measures and transparency in driver identification contribute to apprehensions among passengers, impacting their overall experience.",
      },
      {
        heading: "Identification of User Pain Points and Inconveniences",
        decription:
          "Complex Booking Processes: Cumbersome booking procedures and unclear communication contribute to user dissatisfaction and a lack of trust in the transportation service.",
      },
      {
        decription:
          "Inefficient Routing: Inaccurate navigation or inefficient routing choices can lead to longer travel times, adding to the overall discomfort for passengers.",
      },
      {
        decription:
          "Payment Hassles: Traditional payment methods, such as cash transactions, may lead to inefficiencies and hinder the seamless completion of the transportation service.",
      },
    ],
    solutions: [
      {
        decription:
          "The transportation industry demands innovative solutions to overcome these challenges, there is a pressing need for a hailing solution that prioritizes user convenience, safety, and efficiency. A user-friendly application with intuitive features can significantly enhance the overall transportation experience, addressing the identified pain points and inconveniences associated with traditional models.",
      },
      {
        decription:
          "The goal is to create a hailing solution that not only optimizes the process of securing transportation but also ensures a positive and reliable experience for users, ultimately transforming the way people approach and perceive transportation services, technology to enhance the user experience, ensuring secure, hassle-free rides that empower passengers.",
      },
    ],
    displayImgs: [
      {
        imgs: [
          "/projects/boston/1.png",
          "/projects/boston/2.png",
          "/projects/boston/3.png",
        ],
        bgColor: "bg-[#9BE6C1]",
      },
      {
        imgs: [
          "/projects/boston/4.png",
          "/projects/boston/5.png",
          "/projects/boston/6.png",
        ],
        bgColor: "bg-[#9BE6C1]",
      },
      {
        imgs: [
          "/projects/boston/7.png",
          "/projects/boston/8.png",
          "/projects/boston/9.png",
        ],
        bgColor: "bg-[#9BE6C1]",
      },
    ],
    results: [
      { decription: "85% Satisfaction Rate" },
      { decription: "65% Increase in daily Transportation Users" },
      { decription: "Featured in Transportation Category" },
    ],
    tech: ["Design", "Transportation", "Mobile", "Figma"],
  },
  {
    id: "39361b4e-3860-4fcc-964c-526116c6251a",
    title: "DISWAP",
    subtitle: "A platform built to simplify the swap, stake process",
    mockup: "/projects/diswap/mockup.png",
    tags: ["Design", "Crypto", "Web"],
    platform: "mobile",
    year: "2025",
    client: "",
    role: "",
    category: "",
    hero: {
      img: "",
      bgColor: "",
    },
    overview: [{ heading: "", decription: "" }],
    challenges: [{ heading: "", decription: "" }],
    solutions: [{ heading: "", decription: "" }],
    displayImgs: [{ imgs: [""], bgColor: "" }],
    results: [{ decription: "" }],
    tech: [""],
    comingSoon: true,
  },
  {
    id: "a6f50b89-8d6d-4bb2-a4e1-882f9895d48a",
    title: "SWEEFTPAY",
    subtitle: "Design to simplify Gift card and crypto Trading",
    mockup: "/projects/sweeftpay/mockup.png",
    tags: ["Design", "Fintech", "Mobile"],
    platform: "mobile",
    year: "2025",
    client: "",
    role: "",
    category: "",
    hero: {
      img: "",
      bgColor: "",
    },
    overview: [{ heading: "", decription: "" }],
    challenges: [{ heading: "", decription: "" }],
    solutions: [{ heading: "", decription: "" }],
    displayImgs: [{ imgs: [""], bgColor: "" }],
    results: [{ heading: "", decription: "" }],
    tech: [""],
    comingSoon: true,
  },
  // {
  //   id: uuidv4(),
  //   title: "",
  //   subtitle: "",
  //   mockup: "",
  //   tags: [""],
  //   platform: "mobile",
  //   year: "",
  //   client: "",
  //   role: "",
  //   category: "",
  //   hero: {
  //     img: "",
  //     bgColor: "",
  //   },
  //   overview: [{ heading: "", decription: "" }],
  //   challenges: [{ heading: "", decription: "" }],
  //   solutions: [{ heading: "", decription: "" }],
  //   displayImgs: [{ imgs: [""], bgColor: "" }],
  //   results: [{ heading: "", decription: "" }],
  //   tech: [""],
  // },
];
