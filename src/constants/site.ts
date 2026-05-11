import type { NavLink } from "@/types";

export const NAV_LINKS: NavLink[] = [
  { href: "#what-we-build", label: "What we build" },
  { href: "#process",       label: "Our process" },
  { href: "#projects",      label: "Projects" },
  { href: "#about",         label: "About" },
];

export const GEOS = ["India", "UK", "UAE", "United States"] as const;
