import type { LucideIcon } from "lucide-react";

// ── Navigation ────────────────────────────────────────────────────────────────
export interface NavLink {
  href: string;
  label: string;
}

// ── Hero / Social Proof ───────────────────────────────────────────────────────
export interface Stat {
  n: string;
  l: string;
}

export interface Industry {
  label: string;
  icon: LucideIcon;
}

// ── Services ──────────────────────────────────────────────────────────────────
export interface Deliverable {
  icon: LucideIcon;
  label: string;
}

export interface Service {
  num: string;
  name: string;
  line: string;
  stack: string[];
  delay: string;
}

// ── Why Lyrnique ──────────────────────────────────────────────────────────────
export interface ComparisonRow {
  topic: string;
  good: string;
  bad: string;
}

// ── How We Work ───────────────────────────────────────────────────────────────
export interface Phase {
  label: string;
  short: string;
  eyebrow: string;
  title: string;
  icon: LucideIcon;
  deliverables: string[];
  traditional: string;
  tBar: number;
  withLyrnique: string;
  lBar: number;
}

// ── Case Studies ──────────────────────────────────────────────────────────────
export interface Metric {
  n: string;
  l: string;
}

export interface CaseStudy {
  ind: string;
  outcome: string;
  outcomeSub: string;
  title: string;
  desc: string;
  bullets: string[];
  metrics: Metric[];
  delay: string;
}

// ── About ─────────────────────────────────────────────────────────────────────
export interface Founder {
  initials: string;
  name: string;
  role: string;
  tag: string;
  bullets: string[];
  linkedin: string;
}

export interface Principle {
  icon: LucideIcon;
  title: string;
  body: string;
}

// ── FAQ ───────────────────────────────────────────────────────────────────────
export interface FAQItem {
  q: string;
  a: string;
}
