import {
  benefitIcon1,
  benefitIcon2,
  benefitIcon3,
  benefitIcon4,
  benefitImage2,
  benefitImage3,
  benefitImage4,
  benefitImage5,
  benefitImage6,
  benefitImage7,
  chromecast,
  companyLogo1,
  companyLogo2,
  companyLogo3,
  disc02,
  discord,
  figma,
  file02,
  framer,
  homeSmile,
  notification2,
  notification3,
  notification4,
  notion,
  photoshop,
  plusSquare,
  protopie,
  raindrop,
  recording01,
  recording03,
  roadmap1,
  roadmap2,
  roadmap3,
  roadmap4,
  searchMd,
  slack,
  sliders04,
  twitter,
} from "../assets";

export const CONSTANTS = {
  API_URL_PROD: "http://localhost:4402/api",
  // API_URL_PROD: "https://api.ainexim.com/api",
};

export const navigation = [
  {
    id: "0",
    title: "Features",
    url: "#features",
  },
  {
    id: "1",
    title: "How to use",
    url: "#how-to-use",
  },
  {
    id: "2",
    title: "Pricing",
    url: "#pricing",
  },
  {
    id: "3",
    title: "Roadmap",
    url: "#roadmap",
  },
  {
    id: "4",
    title: "New account",
    url: "#signup",
    onlyMobile: true,
  },
  {
    id: "5",
    title: "Join Waitlist",
    url: "/join-waitlist",
    onlyMobile: true,
  },
];

export const heroIcons = [homeSmile, file02, searchMd, plusSquare];

export const notificationImages = [notification4, notification3, notification2];

export const companyLogos = [companyLogo2, companyLogo3, companyLogo1];

export const brainmastertServices = [
  "Dynamic Task Generation",
  "Adaptive Learning",
  "Blockchain Integration",
];

export const brainmasterServicesIcons = [
  recording03,
  recording01,
  disc02,
  chromecast,
  sliders04,
];

export const roadmap = [
  {
    id: "0",
    title: "GPT-4 Task Generation",
    text: "Deploy AI for generating personalized tasks based on user needs and progress.",
    status: "done",
    imageUrl: roadmap1,
    colorful: true,
  },
  {
    id: "1",
    title: "Blockchain Badge System",
    text: "Implement blockchain-backed badge issuance for secure and verifiable achievements.",
    status: "progress",
    imageUrl: roadmap2,
  },
  {
    id: "2",
    title: "Team Collaboration Enhancements",
    text: "Improve real-time feedback and task reassignment features for better team efficiency.",
    status: "progress",
    imageUrl: roadmap3,
  },
  {
    id: "3",
    title: "User Engagement Analytics",
    text: "Enhance analytics for monitoring task progress and user performance.",
    status: "done",
    imageUrl: roadmap4,
  },
];

export const collabText =
  "AINEXIM offers a robust platform for personalized skill enhancement, team collaboration, and secure achievement tracking.";

export const collabContent = [
  {
    id: "0",
    title: "User-Centric Algorithms",
    text: collabText,
  },
  {
    id: "1",
    title: "Dynamic Task Assignment",
  },
  {
    id: "2",
    title: "Blockchain Security",
  },
];
export const collabApps = [
  {
    id: "0",
    title: "Figma",
    icon: figma,
    width: 26,
    height: 36,
  },
  {
    id: "1",
    title: "Notion",
    icon: notion,
    width: 34,
    height: 36,
  },
  {
    id: "2",
    title: "Discord",
    icon: discord,
    width: 36,
    height: 28,
  },
  {
    id: "3",
    title: "Slack",
    icon: slack,
    width: 34,
    height: 35,
  },
  {
    id: "4",
    title: "Photoshop",
    icon: photoshop,
    width: 34,
    height: 34,
  },
  {
    id: "5",
    title: "Protopie",
    icon: protopie,
    width: 34,
    height: 34,
  },
  {
    id: "6",
    title: "Framer",
    icon: framer,
    width: 26,
    height: 34,
  },
  {
    id: "7",
    title: "Raindrop",
    icon: raindrop,
    width: 38,
    height: 32,
  },
];
export const pricing = [
  {
    id: "0",
    title: "Basic",
    description: "Experience tailored tasks and basic analytics.",
    price: "0",
    features: [
      "User-centric task generation",
      "Access to analytics dashboard",
      "Explore basic features",
    ],
  },
  {
    id: "1",
    title: "Premium",
    description: "Advanced task generation with blockchain badges.",
    price: "9.99",
    features: [
      "Advanced personalized task generation",
      "Full analytics dashboard",
      "Priority support",
    ],
  },
  {
    id: "2",
    title: "Enterprise",
    description: "Comprehensive AI features and dedicated support.",
    price: "199",
    features: [
      "Custom AI task generation",
      "Comprehensive organizational insights",
      "Dedicated account management",
    ],
  },
];

export const benefits = [
  {
    id: "0",
    title: "Personalized Task Generation",
    text: "AI generates tasks to fit real-world scenarios and user skills.",
    backgroundUrl: "./assets/benefits/card-1.svg",
    iconUrl: benefitIcon1,
    imageUrl: benefitImage2,
  },
  {
    id: "1",
    title: "Dynamic Adaptations",
    text: "Tasks adapt based on user engagement and performance.",
    backgroundUrl: "./assets/benefits/card-1.svg",
    iconUrl: benefitIcon2,
    imageUrl: benefitImage3,
    light: true,
  },
  {
    id: "2",
    title: "Secure Blockchain Storage",
    text: "User achievements are safely stored and verifiable.",
    backgroundUrl: "./assets/benefits/card-1.svg",
    iconUrl: benefitIcon3,
    imageUrl: benefitImage4,
  },
  {
    id: "3",
    title: "Real-Time Feedback",
    text: "Get instant insights on performance and improvements.",
    backgroundUrl: "./assets/benefits/card-1.svg",
    iconUrl: benefitIcon4,
    imageUrl: benefitImage5,
    light: true,
  },
  {
    id: "4",
    title: "Adapt and Improve",
    text: "Continuously tailor learning paths for growth.",
    backgroundUrl: "./assets/benefits/card-1.svg",
    iconUrl: benefitIcon1,
    imageUrl: benefitImage6,
  },
  {
    id: "5",
    title: "Engaging Challenge Integration",
    text: "Simulate real-world projects with adaptive scenarios.",
    backgroundUrl: "./assets/benefits/card-1.svg",
    iconUrl: benefitIcon2,
    imageUrl: benefitImage7,
    light: true,
  },
];

export const socials = [
  {
    id: "1",
    title: "Twitter",
    iconUrl: twitter,
    url: "#",
  },
];
