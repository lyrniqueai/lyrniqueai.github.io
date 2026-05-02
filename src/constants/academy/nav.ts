import type { AcademyNavLink } from "@/types/academy";

export const PRIMARY_NAV_LINKS: AcademyNavLink[] = [
  { to: "/academy",       label: "Home" },
  { to: "/academy/about", label: "About" },
  { to: "/academy/courses", label: "Courses" },
];

export const PROGRAM_NAV_LINKS: AcademyNavLink[] = [
  { to: "/academy/for-students",      label: "For Students" },
  { to: "/academy/for-colleges",      label: "For Colleges" },
  { to: "/academy/for-organizations", label: "For Organizations" },
];

/** Flat list used in the mobile Sheet drawer */
export const ALL_NAV_LINKS: AcademyNavLink[] = [
  ...PRIMARY_NAV_LINKS,
  ...PROGRAM_NAV_LINKS,
  { to: "/academy/contact", label: "Contact" },
];

/** Paths that make the Programs dropdown appear active */
export const PROGRAMS_PATHS = PROGRAM_NAV_LINKS.map((l) => l.to);
