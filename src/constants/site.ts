import type { NavLink } from "@/types";

export const NAV_LINKS: NavLink[] = [
  { href: "#services", label: "Services" },
  { href: "#how",      label: "How we work" },
  { href: "#work",     label: "Our work" },
  { href: "#about",    label: "About" },
];

export const GEOS = ["India", "UK", "UAE", "United States"] as const;
