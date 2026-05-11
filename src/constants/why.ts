import { Zap, Building2, ShieldCheck } from "lucide-react";
import type { Principle } from "@/types";

export const ENGINEERING_PRINCIPLES: Principle[] = [
  {
    icon: Zap,
    title: "Launch Faster",
    body: "AI-native workflows compress build cycles without bloated teams or junior handoffs.",
  },
  {
    icon: Building2,
    title: "Build Properly",
    body: "Architecture, testing, security, deployment, and monitoring are built in from day one.",
  },
  {
    icon: ShieldCheck,
    title: "Own Everything",
    body: "You get the source code, documentation, deployment access, and a product your team can maintain.",
  },
];

/** @deprecated kept for backwards compat during transition */
export const COMPARISON_ROWS = [] as never[];
