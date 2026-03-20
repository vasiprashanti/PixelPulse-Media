export interface Plan {
  name: string;
  description: string;
  features: string[];
}

export const plans: Plan[] = [
  {
    name: "Starter",
    description: "Best for new businesses just starting online.",
    features: [
      "Set up your website & social media profiles",
      "Basic Google search setup",
      "2 social media posts per week",
      "Monthly report on performance",
      "Email support",
    ],
  },
  {
    name: "Growth",
    description: "For businesses ready to get more customers.",
    features: [
      "Everything in Starter Pack",
      "Run small ads on Google & Facebook/Instagram",
      "4 social media posts per week",
      "Improve website to get more visitors & leads",
      "Monthly strategy call",
      "Priority email & chat support",
    ],
  },
  {
    name: "Pro",
    description: "For businesses that want serious growth.",
    features: [
      "Everything in Growth Pack",
      "Full ad management & campaigns",
      "8+ social media posts per week + blog content",
      "Advanced website & search improvements",
      "Weekly calls with your account manager",
      "24/7 support",
    ],
  },
];