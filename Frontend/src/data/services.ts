export interface Service {
  id: string;
  title: string;
  shortTitle: string;
  description: string;
  image: string;
}

export const services: Service[] = [
  {
    id: "seo",
    title: "Search Engine Optimization",
    shortTitle: "SEO",
    description: "Improve discoverability where customers actively search and capture high intent traffic.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
  },
  {
    id: "ads",
    title: "Performance Advertising",
    shortTitle: "Performance Ads",
    description: "Data-driven ad campaigns built to generate measurable revenue growth.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
  },
  {
    id: "content",
    title: "Content Marketing",
    shortTitle: "Content Marketing",
    description: "Authority-building content that drives organic traffic and long-term brand growth.",
    image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800&q=80",
  },
  {
    id: "social",
    title: "Social Media Marketing",
    shortTitle: "Social Media",
    description: "Strategic social media growth designed to build audience and engagement.",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&q=80",
  },
  {
    id: "creative",
    title: "Creative Production",
    shortTitle: "Creative Production",
    description: "Photography and video content tailored for high performing digital campaigns.",
    image: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=800&q=80",
  },
  {
    id: "analytics",
    title: "Analytics & Reporting",
    shortTitle: "Analytics",
    description: "Clear campaign insights and performance tracking for smarter decisions.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
  },
];
