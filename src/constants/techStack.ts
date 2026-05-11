export interface TechCategory {
  name: string;
  items: string[];
}

export const TECH_STACK: TechCategory[] = [
  {
    name: "Frontend",
    items: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    name: "Backend",
    items: ["Node.js", "Python", "FastAPI", "PostgreSQL"],
  },
  {
    name: "AI & Automation",
    items: ["OpenAI", "Anthropic Claude", "LangChain"],
  },
  {
    name: "Infrastructure",
    items: ["Vercel", "AWS", "Supabase", "Docker"],
  },
  {
    name: "Mobile",
    items: ["React Native", "Expo"],
  },
];
