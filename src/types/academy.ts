import type { LucideIcon } from "lucide-react";

// ── Navigation ────────────────────────────────────────────────────────────────
export interface AcademyNavLink {
  to: string;
  label: string;
}

// ── Hero ──────────────────────────────────────────────────────────────────────
export interface AcademyStat {
  n: string;
  l: string;
}

export interface TrustPill {
  icon: LucideIcon;
  text: string;
}

// ── Courses ───────────────────────────────────────────────────────────────────
export type CourseLevel = "Beginner" | "Intermediate" | "Advanced";

export interface Course {
  slug: string;
  title: string;
  description: string;
  level: CourseLevel;
  duration: string;
  outcome: string;
  image?: string;
}

// ── Mentors ───────────────────────────────────────────────────────────────────
export interface Mentor {
  name: string;
  experience: string;
  projects: string;
  highlights: string;
  linkedin: string;
  company: string;
}

// ── Audience ──────────────────────────────────────────────────────────────────
export interface AudienceTier {
  icon: LucideIcon;
  title: string;
  description: string;
  color: string;
  border: string;
}

// ── What You Build ────────────────────────────────────────────────────────────
export interface BuildProject {
  icon: LucideIcon;
  title: string;
  desc: string;
}

// ── Learning Format ───────────────────────────────────────────────────────────
export interface FormatFeature {
  icon: LucideIcon;
  title: string;
  description: string;
}

// ── Blog ──────────────────────────────────────────────────────────────────────
export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  image: string;
  featured?: boolean;
}
