// Data for the entire application
export const siteData = {
  siteName: "BotConnect Portal",
  tagline: "Seamless Multi-Platform Bot Integration",
  description: "Connect, manage, and scale your business across WhatsApp, Facebook, Instagram, and Telegram with our powerful bot solutions.",
};

// Social platform data
export const socialPlatforms = [
  {
    id: 1,
    name: "WhatsApp",
    icon: "FaWhatsapp",
    color: "#25D366",
    webUrl: "https://web.whatsapp.com",
    appUrl: "whatsapp://send",
    description: "Connect with customers on WhatsApp"
  },
  {
    id: 2,
    name: "Facebook",
    icon: "FaFacebookMessenger",
    color: "#0084FF",
    webUrl: "https://www.facebook.com/messages",
    appUrl: "fb-messenger://",
    description: "Automate Facebook Messenger"
  },
  {
    id: 3,
    name: "Instagram",
    icon: "FaInstagram",
    color: "#E4405F",
    webUrl: "https://www.instagram.com/direct/inbox/",
    appUrl: "instagram://direct",
    description: "Engage on Instagram DMs"
  },
  {
    id: 4,
    name: "Telegram",
    icon: "FaTelegram",
    color: "#0088cc",
    webUrl: "https://web.telegram.org",
    appUrl: "tg://",
    description: "Powerful Telegram bots"
  }
];

// Pricing plans
export const pricingPlans = [
  {
    id: 1,
    name: "Starter",
    bots: 1,
    price: 8,
    features: [
      "1 Bot Integration",
      "5,000 messages/month",
      "Basic Analytics",
      "Email Support",
      "24/7 Uptime"
    ],
    popular: false,
    gradient: "from-blue-400 to-blue-600"
  },
  {
    id: 2,
    name: "Growth",
    bots: 3,
    price: 22,
    features: [
      "3 Bot Integrations",
      "20,000 messages/month",
      "Advanced Analytics",
      "Priority Support",
      "Custom Workflows",
      "API Access"
    ],
    popular: true,
    gradient: "from-purple-400 to-pink-600"
  },
  {
    id: 3,
    name: "Professional",
    bots: 5,
    price: 35,
    features: [
      "5 Bot Integrations",
      "50,000 messages/month",
      "Premium Analytics",
      "24/7 Priority Support",
      "Advanced Automation",
      "API Access",
      "White Label Option"
    ],
    popular: false,
    gradient: "from-pink-400 to-red-600"
  },
  {
    id: 4,
    name: "Enterprise",
    bots: 10,
    price: 65,
    features: [
      "10 Bot Integrations",
      "Unlimited messages",
      "Full Analytics Suite",
      "Dedicated Support",
      "Custom Integrations",
      "Full API Access",
      "White Label",
      "SLA Guarantee"
    ],
    popular: false,
    gradient: "from-indigo-400 to-purple-600"
  }
];

// Features
export const features = [
  {
    id: 1,
    icon: "FaClock",
    title: "24/7 Support",
    description: "Round-the-clock assistance for your business needs"
  },
  {
    id: 2,
    icon: "FaRobot",
    title: "AI-Powered Integration",
    description: "Smart automation with advanced AI capabilities"
  },
  {
    id: 3,
    icon: "FaChartLine",
    title: "Real-time Analytics",
    description: "Track performance with detailed insights"
  },
  {
    id: 4,
    icon: "FaShieldAlt",
    title: "Secure & Reliable",
    description: "Enterprise-grade security for your data"
  },
  {
    id: 5,
    icon: "FaPlug",
    title: "Easy Integration",
    description: "Connect your platforms in minutes, not hours"
  },
  {
    id: 6,
    icon: "FaGlobe",
    title: "Multi-Platform Access",
    description: "Manage all your bots from one dashboard"
  }
];

// Testimonials
export const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "CEO, TechStart",
    image: "https://i.pravatar.cc/150?img=1",
    content: "BotConnect Portal transformed our customer service. We're now handling 5x more inquiries with the same team size!",
    rating: 5
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Marketing Director, GrowthCo",
    image: "https://i.pravatar.cc/150?img=3",
    content: "The multi-platform integration is seamless. Our engagement rates increased by 300% in just two months.",
    rating: 5
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "Founder, E-Shop Plus",
    image: "https://i.pravatar.cc/150?img=5",
    content: "Best investment we've made! The automation saved us countless hours and the ROI is incredible.",
    rating: 5
  },
  {
    id: 4,
    name: "David Park",
    role: "CTO, InnovateLab",
    image: "https://i.pravatar.cc/150?img=7",
    content: "Easy to set up, powerful features, and excellent support. Highly recommend for any growing business.",
    rating: 5
  }
];

// Footer social links
export const footerSocials = [
  {
    name: "Facebook",
    icon: "FaFacebook",
    url: "https://facebook.com"
  },
  {
    name: "Twitter",
    icon: "FaTwitter",
    url: "https://twitter.com"
  },
  {
    name: "Instagram",
    icon: "FaInstagram",
    url: "https://instagram.com"
  },
  {
    name: "LinkedIn",
    icon: "FaLinkedin",
    url: "https://linkedin.com"
  },
  {
    name: "GitHub",
    icon: "FaGithub",
    url: "https://github.com"
  }
];

// Navigation links
export const navLinks = [
  { name: "Home", href: "#home" },
  { name: "Features", href: "#features" },
  { name: "Pricing", href: "#pricing" },
  { name: "Testimonials", href: "#testimonials" },
  { name: "Contact", href: "#contact" }
];
