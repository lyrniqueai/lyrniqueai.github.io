import { Zap, Shield, Target } from "lucide-react";
import type { Principle } from "@/types";

export const FOUNDER_BIO = {
  paragraphs: [
    "We started Lyrnique after 10+ years building products across healthcare, finance, e-commerce, and AI. The pattern was clear: strong ideas often fail because execution is slow, expensive, or disconnected from product thinking.",
    "Our focus is simple: help ambitious teams launch useful software faster, with senior engineering discipline and no messy handoff.",
  ],
  founders: [
    { name: "Mithun Chandar V", initials: "MC", linkedin: "https://linkedin.com/in/mithunchandar" },
    { name: "Ramachandran K",   initials: "RK", linkedin: "https://linkedin.com/in/ramachandrank" },
  ],
  role: "Co-Founders · Lyrnique",
} as const;

export const WHY_LYRNIQUE: Principle[] = [
  {
    icon: Target,
    title: "Founder-Led Scope",
    body: "You speak directly with engineers who can shape the product and the build.",
  },
  {
    icon: Zap,
    title: "Lean Senior Team",
    body: "Small, experienced teams move faster without layers of account management.",
  },
  {
    icon: Shield,
    title: "Clean Ownership",
    body: "Source code, documentation, deployment access, and handoff are part of the delivery.",
  },
];

/** @deprecated kept for type compat */
export const FOUNDERS = [] as never[];
export const PRINCIPLES = WHY_LYRNIQUE;
