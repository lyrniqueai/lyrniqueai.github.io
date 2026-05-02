import { MessageSquare, Database, FileText, Bot, Workflow, Plug } from "lucide-react";
import type { BuildProject } from "@/types/academy";

export const BUILD_PROJECTS: BuildProject[] = [
  {
    icon: MessageSquare,
    title: "AI Chatbots & Assistants",
    desc: "Customer support, campus helpdesks, research aides",
  },
  {
    icon: Database,
    title: "RAG-Based Knowledge Systems",
    desc: "Search over company or academic data",
  },
  {
    icon: FileText,
    title: "Document Intelligence Systems",
    desc: "Summarization, Q&A on PDFs, policy analysis",
  },
  {
    icon: Bot,
    title: "AI Agents & Task Runners",
    desc: "Multi-step problem solving workflows",
  },
  {
    icon: Workflow,
    title: "Workflow Automation",
    desc: "Email processing, data pipelines, internal tools",
  },
  {
    icon: Plug,
    title: "API-Integrated AI Apps",
    desc: "Connect AI with real products",
  },
];
