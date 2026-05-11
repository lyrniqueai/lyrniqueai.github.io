import { Search, PenTool, Code2, Rocket } from "lucide-react";
import type { Phase } from "@/types";

export const PHASES: Phase[] = [
  {
    label: "01  Discovery & Architecture",
    short: "Discovery",
    eyebrow: "week 1",
    icon: Search,
    title: "Map the product. Design the system.",
    deliverables: [
      "Product scope",
      "System architecture",
      "Build roadmap",
    ],
    traditional: "4–6 weeks",
    tBar: 90,
    withLyrnique: "1 week",
    lBar: 16,
  },
  {
    label: "02  Foundation & Design",
    short: "Foundation",
    eyebrow: "week 1–2",
    icon: PenTool,
    title: "Dev-ready before a single line of code.",
    deliverables: [
      "Data models",
      "API contracts",
      "Dev-ready wireframes",
    ],
    traditional: "2–3 weeks",
    tBar: 72,
    withLyrnique: "48 hours",
    lBar: 20,
  },
  {
    label: "03  Rapid Engineering",
    short: "Engineering",
    eyebrow: "week 2–5",
    icon: Code2,
    title: "Same engineers. Daily progress. Modern workflows.",
    deliverables: [
      "Weekly working builds",
      "Automated checks",
      "Staging deployment",
    ],
    traditional: "Standard pace",
    tBar: 100,
    withLyrnique: "30–50% faster",
    lBar: 58,
  },
  {
    label: "04  Production Launch",
    short: "Launch",
    eyebrow: "week 5–6",
    icon: Rocket,
    title: "Code-complete to live — with full handoff.",
    deliverables: [
      "Production deployment",
      "Monitoring active",
      "Source code and docs",
    ],
    traditional: "Days of manual ops",
    tBar: 80,
    withLyrnique: "< 24 hours",
    lBar: 14,
  },
];
