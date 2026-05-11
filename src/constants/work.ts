import type { CaseStudy } from "@/types";

export const PROJECT_ACCENTS = [
  { color: "#6366f1", glow: "rgba(99,102,241,0.4)",  bg: "rgba(99,102,241,0.08)" },   // indigo
  { color: "#f59e0b", glow: "rgba(245,158,11,0.35)", bg: "rgba(245,158,11,0.08)" },   // amber
  { color: "#10b981", glow: "rgba(16,185,129,0.35)", bg: "rgba(16,185,129,0.08)" },   // emerald
] as const;

export const CASE_STUDIES: CaseStudy[] = [
  {
    ind: "AI & Automation",
    outcome: "12 days",
    outcomeSub: "concept → production pipeline",
    title: "AI Document Intelligence System",
    desc: "Document classification and extraction pipeline with validation, confidence scoring, and human review for edge cases.",
    bullets: [
      "Multi-stage document classification pipeline",
      "Validation layer with human-in-loop review",
      "Designed for 10K documents/day throughput",
      "Structured data extraction from unstructured inputs",
      "Audit-ready output with confidence scoring",
    ],
    metrics: [
      { n: "94%",   l: "Accuracy on 5,000 test documents" },
      { n: "12 days", l: "Concept to production" },
      { n: "10K/day", l: "Document throughput capacity" },
    ],
    stack: ["Python", "FastAPI", "GPT-4", "PostgreSQL", "React"],
    timeline: "12 days",
    approach: [
      "Built multi-stage classification pipeline",
      "Implemented validation layer with human-in-loop",
      "Designed for 10K documents/day throughput",
    ],
    delay: "",
  },
  {
    ind: "Analytics & Infrastructure",
    outcome: "9 days",
    outcomeSub: "design → live dashboard",
    title: "Real-Time Analytics Dashboard",
    desc: "Operational dashboard with real-time updates, multi-source aggregation, and sub-200ms latency.",
    bullets: [
      "Event streaming architecture for real-time updates",
      "Optimised aggregation queries for performance",
      "WebSocket-based real-time update mechanism",
      "Multi-source data aggregation",
      "Role-based access and alerting system",
    ],
    metrics: [
      { n: "<200ms", l: "End-to-end latency" },
      { n: "10K/sec", l: "Event throughput" },
      { n: "9 days",  l: "Design to live" },
    ],
    stack: ["Next.js", "Node.js", "PostgreSQL", "WebSockets"],
    timeline: "9 days",
    approach: [
      "Event streaming architecture",
      "Optimised aggregation queries",
      "Real-time update mechanism",
    ],
    delay: "rd1",
  },
  {
    ind: "Internal Operations",
    outcome: "14 days",
    outcomeSub: "wireframe → deployed engine",
    title: "Workflow Automation Engine",
    desc: "Drag-and-drop workflow builder with execution, retries, monitoring, and audit trails for internal operations.",
    bullets: [
      "Drag-and-drop visual workflow interface",
      "Execution engine with error handling & retry",
      "Monitoring and structured logging system",
      "Conditional branching and parallel execution",
      "Full audit trail and rollback support",
    ],
    metrics: [
      { n: "70%",    l: "Reduction in manual process time" },
      { n: "14 days", l: "Wireframe to deployed engine" },
      { n: "0",       l: "Missed milestones" },
    ],
    stack: ["React Flow", "Node.js", "MongoDB", "Redis"],
    timeline: "14 days",
    approach: [
      "Drag-and-drop visual interface",
      "Execution engine with error handling",
      "Monitoring and logging system",
    ],
    delay: "rd2",
  },
];
