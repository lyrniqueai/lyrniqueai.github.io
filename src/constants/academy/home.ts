import { Zap, Layers, BadgeCheck } from "lucide-react";
import type { AcademyStat, TrustPill, Course, Mentor } from "@/types/academy";

// ── Hero stats ────────────────────────────────────────────────────────────────
export const ACADEMY_HERO_STATS: AcademyStat[] = [
  { n: "100+", l: "Students Trained" },
  { n: "80%",  l: "Project Completion" },
  { n: "10+",  l: "Industry Partners" },
];

// ── Hero trust pills ──────────────────────────────────────────────────────────
export const TRUST_PILLS: TrustPill[] = [
  { icon: Zap,        text: "Beginner-friendly, no coding required" },
  { icon: Layers,     text: "Real-world GenAI projects" },
  { icon: BadgeCheck, text: "Certificate on completion" },
];

// ── Quick stats (homepage section) ───────────────────────────────────────────
export const QUICK_STATS: AcademyStat[] = [
  { n: "100+", l: "Students Trained in AI and Data Science" },
  { n: "80%",  l: "Students Complete Hands-on Projects" },
  { n: "10+",  l: "Industry Leaders Partnered" },
];

// ── Featured courses (homepage subset) ───────────────────────────────────────
export const FEATURED_COURSES: Course[] = [
  {
    slug: "ai-unleashed",
    title: "AI Unleashed: Spark Your Creativity",
    description: "Unlock AI's magic—no code required: craft stories, images, and voice adventures.",
    level: "Beginner",
    duration: "2 weeks",
    outcome: "Create AI-powered content without coding",
  },
  {
    slug: "foundations-of-generative-ai",
    title: "Foundations of Generative AI",
    description: "Master Python essentials and build chatbots with ChatGPT from scratch.",
    level: "Beginner",
    duration: "6 weeks",
    outcome: "Build your first AI chatbot",
  },
  {
    slug: "agentic-ai-systems",
    title: "Mastering Agentic AI Systems",
    description: "Craft smart AI agents with memory, planning, and tools like LangChain.",
    level: "Intermediate",
    duration: "8 weeks",
    outcome: "Deploy production-ready AI agents",
  },
  {
    slug: "genai-launchpad",
    title: "GenAI Industry Launchpad",
    description: "Build and deploy a custom AI agent in a guided capstone project.",
    level: "Advanced",
    duration: "10 weeks",
    outcome: "Launch your AI career with a portfolio",
  },
];

// ── Mentors ───────────────────────────────────────────────────────────────────
export const MENTORS: Mentor[] = [
  {
    name: "Anita Sharma",
    experience: "8 years in AI development at Infosys",
    projects: "Built chatbots for e-commerce and AI ethics frameworks",
    highlights: "Trained 150+ students, speaker at India AI Summit 2024",
    linkedin: "linkedin.com/in/anitasharma",
    company: "Infosys",
  },
  {
    name: "Vikram Patel",
    experience: "10 years in Data Science at TCS",
    projects: "Developed AI models for predictive analytics in finance",
    highlights: "Mentored 200+ students, published papers on Gen AI",
    linkedin: "linkedin.com/in/vikrampatel",
    company: "TCS",
  },
  {
    name: "Priya Nair",
    experience: "6 years in Gen AI at Wipro",
    projects: "Created no-code AI tools for healthcare applications",
    highlights: "Led 5 workshops, expert in low-code platforms",
    linkedin: "linkedin.com/in/priyanair",
    company: "Wipro",
  },
];
