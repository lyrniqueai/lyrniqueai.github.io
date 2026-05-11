import {
  HeartPulse, Smartphone, CreditCard, ShoppingBag, Truck,
} from "lucide-react";
import type { Stat, Industry } from "@/types";

export const VALUE_PROPS: Stat[] = [
  { n: "Faster First Version", l: "AI-native workflows shorten the path from scope to usable software" },
  { n: "Senior Execution",    l: "Founding engineers stay close to architecture, delivery, and handoff" },
  { n: "Full Ownership",      l: "Source code, documentation, and operating context stay with your team" },
];

/** @deprecated kept for type-compatibility; not used on main site */
export const HERO_STATS = VALUE_PROPS;

export const INDUSTRIES: Industry[] = [
  { label: "Fintech",       icon: CreditCard },
  { label: "SaaS",          icon: Smartphone },
  { label: "Healthcare",    icon: HeartPulse },
  { label: "E-commerce",    icon: ShoppingBag },
  { label: "Operations",    icon: Truck },
];

export const WORKFLOWS: string[] = [
  "AI-Native Build",
  "Senior Team",
  "Clean Handoff",
  "Production Launch",
];
