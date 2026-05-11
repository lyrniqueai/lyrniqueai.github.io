import {
  Globe, Bot, LayoutDashboard, GitMerge, Smartphone,
} from "lucide-react";
import type { Deliverable, Service } from "@/types";

export const DELIVERABLES: Deliverable[] = [
  { icon: Globe,           label: "Web Applications" },
  { icon: Smartphone,      label: "Mobile Apps" },
  { icon: Bot,             label: "AI Agents" },
  { icon: LayoutDashboard, label: "Internal Tools" },
  { icon: GitMerge,        label: "APIs & Backends" },
];

export const SERVICES: Service[] = [
  {
    num: "// 01",
    name: "Customer-Facing Products",
    line: "Web and mobile products with the core flows, data model, and launch surface in place.",
    outcome: "Launch a usable first version with room to evolve",
    stack: ["SaaS Platforms", "Mobile Apps", "Web Applications", "Progressive Experiences"],
    delay: "",
  },
  {
    num: "// 02",
    name: "AI-Powered Systems",
    line: "Automation, document intelligence, recommendations, and AI interfaces tied to real workflows.",
    outcome: "Use AI where it removes operational drag",
    stack: ["Document Intelligence", "Process Automation", "Recommendation Engines", "Conversational AI"],
    delay: "rd1",
  },
  {
    num: "// 03",
    name: "Internal Platforms",
    line: "Workflow tools, dashboards, data products, and operational systems for growing teams.",
    outcome: "Give teams clearer control over day-to-day work",
    stack: ["Workflow Automation", "Operations Dashboards", "Data Tools", "Analytics Systems"],
    delay: "rd2",
  },
  {
    num: "// 04",
    name: "API & Integration",
    line: "Backend services, integrations, and data pipelines that connect the product stack.",
    outcome: "Make the system easier to extend and operate",
    stack: ["Third-Party Integrations", "Microservices", "Backend Systems", "Data Pipelines"],
    delay: "rd3",
  },
];
