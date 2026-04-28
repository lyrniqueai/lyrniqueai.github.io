import {
  Globe, Smartphone, Bot, FileSearch, Eye,
  TrendingUp, Sparkles, GitMerge, Server, Cloud,
} from "lucide-react";
import type { Deliverable, Service } from "@/types";

export const DELIVERABLES: Deliverable[] = [
  { icon: Globe,       label: "Web Applications" },
  { icon: Smartphone,  label: "Mobile Apps" },
  { icon: Bot,         label: "AI Agents" },
  { icon: FileSearch,  label: "Document Intelligence" },
  { icon: Eye,         label: "Computer Vision" },
  { icon: TrendingUp,  label: "Predictive Analytics" },
  { icon: Sparkles,    label: "Generative AI" },
  { icon: GitMerge,    label: "Data Pipelines" },
  { icon: Server,      label: "APIs & Backends" },
  { icon: Cloud,       label: "Cloud Deployment" },
];

export const SERVICES: Service[] = [
  {
    num: "// 01",
    name: "Custom Software Development",
    line: "Production-ready web apps, mobile apps, APIs, and admin portals — with AI embedded from day one, not added as an afterthought. Shipped in weeks, not quarters.",
    stack: ["Web Applications", "Mobile Apps", "Admin Portals", "APIs & Backends", "Cloud Deployment", "Real-time Systems"],
    delay: "",
  },
  {
    num: "// 02",
    name: "AI Integration",
    line: "We wire LLMs, AI agents, and intelligent automation directly into your existing product. No rip-and-replace. No generic chatbots. Intelligence built for your domain and your data.",
    stack: ["Document Intelligence", "Process Automation", "AI Assistants", "Image Recognition", "Predictive Analytics", "Intelligent Search"],
    delay: "rd1",
  },
  {
    num: "// 03",
    name: "Product Discovery Sprint",
    line: "Our 2-week sprint turns your idea into a precise architecture, feature roadmap, and fixed-scope estimate — so you never pay to build the wrong thing or discover problems in production.",
    stack: ["Problem framing", "Architecture", "Feature roadmap", "Fixed-scope estimate"],
    delay: "rd2",
  },
];
