import {
  Factory, HeartPulse, Smartphone, CreditCard, ShoppingBag, Truck,
} from "lucide-react";
import type { Stat, Industry } from "@/types";

export const HERO_STATS: Stat[] = [
  { n: "2×",    l: "Faster delivery · AI across every phase" },
  { n: "6 wks", l: "Design to live users · food delivery platform" },
  { n: "100%",  l: "AI-native · embedded from day one" },
  { n: "0",     l: "Missed milestones · across every project shipped" },
];

export const INDUSTRIES: Industry[] = [
  { label: "Manufacturing",  icon: Factory },
  { label: "Healthcare",     icon: HeartPulse },
  { label: "Consumer Tech",  icon: Smartphone },
  { label: "Fintech",        icon: CreditCard },
  { label: "E-commerce",     icon: ShoppingBag },
  { label: "Logistics",      icon: Truck },
];
