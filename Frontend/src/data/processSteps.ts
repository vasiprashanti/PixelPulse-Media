export interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

export const processSteps: ProcessStep[] = [
  {
    number: "01",
    title: "Discovery",
    description: "Understanding the business, market, and audience.",
  },
  {
    number: "02",
    title: "Strategy",
    description: "Developing a clear marketing roadmap.",
  },
  {
    number: "03",
    title: "Execution",
    description: "Launching campaigns and producing content.",
  },
  {
    number: "04",
    title: "Optimization",
    description: "Refining performance through ongoing analysis.",
  },
];
