import { GraduationCap, Briefcase, Lightbulb } from "lucide-react";
import type { AudienceTier } from "@/types/academy";

export const AUDIENCE_TIERS: AudienceTier[] = [
  {
    icon: GraduationCap,
    title: "College Students & Freshers",
    description: "Build AI skills early and stand out in the job market",
    color: "rgba(0,136,255,0.12)",
    border: "rgba(0,136,255,0.22)",
  },
  {
    icon: Briefcase,
    title: "Working Professionals",
    description: "Tech & non-tech professionals looking to upskill in AI",
    color: "rgba(0,220,255,0.10)",
    border: "rgba(0,220,255,0.2)",
  },
  {
    icon: Lightbulb,
    title: "Founders & Creators",
    description: "Entrepreneurs exploring AI to innovate and scale",
    color: "rgba(139,92,246,0.10)",
    border: "rgba(139,92,246,0.2)",
  },
];
