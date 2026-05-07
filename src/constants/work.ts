import type { CaseStudy } from "@/types";

export const CASE_STUDIES: CaseStudy[] = [
  {
    ind: "Manufacturing · Engineering Software",
    outcome: "10 wks",
    outcomeSub: "concept → production-ready",
    title: "AI-powered engineering drawing comparison engine",
    desc: "Hours of manual PDF review — eliminated. We built a proprietary AI engine that detects semantic differences across drawing revisions: geometry, dimensions, annotations. Not pixel diffs. Intelligent diffs. 80%+ accuracy. Audit-ready reports generated automatically.",
    bullets: [
      "Semantic diff — geometry, dimensions, annotations",
      "Automatic alignment correction across drawing versions",
      "5-category classification with confidence scoring",
      "Human validation layer for edge cases",
      "Audit-ready PDF reports at 50–100 comparisons/hour · varies by complexity",
    ],
    metrics: [
      { n: "80%+",  l: "Automated accuracy — replaces manual review" },
      { n: "50–100/hr", l: "Diagrams compared · varies by complexity" },
      { n: "0",     l: "Missed milestones" },
    ],
    delay: "",
  },
  {
    ind: "Consumer Tech · Food Delivery",
    outcome: "6 wks",
    outcomeSub: "design → live with paying users",
    title: "Full-stack food delivery platform + operations portal",
    desc: "Consumer app, operations portal, full backend — designed, built, and live in 6 weeks. Real-time ordering, payments, delivery tracking, vendor management, analytics. Signed contract to paying customers in under two months.",
    bullets: [
      "Consumer app — ordering, real-time tracking, payments",
      "Operations portal — vendor management, delivery assignment",
      "Analytics dashboard — volume, revenue, performance metrics",
      "Full backend API with cloud infrastructure on AWS",
      "Deployed, monitored, documented, and handed over",
    ],
    metrics: [
      { n: "2 apps", l: "Consumer + operations — fully live" },
      { n: "6 wks",  l: "Design to paying users" },
      { n: "0",      l: "Missed milestones" },
    ],
    delay: "rd1",
  },
];
