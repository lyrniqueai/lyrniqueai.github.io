import { Zap, Shield, MessageCircle, Target } from "lucide-react";
import type { Founder, Principle } from "@/types";

export const FOUNDERS: Founder[] = [
  {
    initials: "MC",
    name: "Mithun Chandar V",
    role: "Co-Founder",
    tag: "MBA – IIM · Product Manager · 11+ yrs",
    bullets: [
      "AI-powered products shipped across healthcare, finance, and e-commerce",
      "11+ years from problem to production — not prototypes",
      "Speaks product, engineering, and business fluently",
    ],
    linkedin: "https://linkedin.com/in/mithunchandar",
  },
  {
    initials: "RK",
    name: "Ramachandran K",
    role: "Co-Founder",
    tag: "Certified ML Specialist · Senior Data Scientist · 13+ yrs",
    bullets: [
      "ML pipelines processing millions of records on AWS and GCP — in production",
      "13+ years in production AI/ML: healthcare, enterprise, finance",
      "Generative AI · Computer vision · Agentic systems · LLMs",
    ],
    linkedin: "https://linkedin.com/in/ramachandrank",
  },
];

export const PRINCIPLES: Principle[] = [
  {
    icon: Zap,
    title: "AI where it earns its place",
    body: "AI where it compresses time and improves output. Not everywhere. Not as a talking point.",
  },
  {
    icon: Shield,
    title: "The code is yours. Day one.",
    body: "Code, models, pipelines — all transferred to you on delivery. No licence fees. No retained rights. In the contract, plainly worded.",
  },
  {
    icon: MessageCircle,
    title: "Talk to the builder, not the middleman",
    body: "The engineer on your kickoff call is on your launch call. No account managers. No message relay.",
  },
  {
    icon: Target,
    title: "Scope before sprint. Zero surprises.",
    body: "Scope, timeline, and cost agreed before a single line of code. Changes? You're notified first — not invoiced first.",
  },
];
