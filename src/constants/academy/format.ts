import { Video, Calendar, Wrench, Users, Clock, Award } from "lucide-react";
import type { FormatFeature } from "@/types/academy";

export const FORMAT_FEATURES: FormatFeature[] = [
  {
    icon: Video,
    title: "Live Instructor-Led Sessions",
    description: "Real-time classes with industry experts who guide you through concepts and answer questions instantly.",
  },
  {
    icon: Calendar,
    title: "Weekend-Friendly Schedule",
    description: "Classes designed for working professionals and students—learn without disrupting your weekday commitments.",
  },
  {
    icon: Wrench,
    title: "Hands-On Projects",
    description: "Build real AI applications from day one. Every module includes practical projects you can add to your portfolio.",
  },
  {
    icon: Users,
    title: "Peer Collaboration",
    description: "Learn alongside a community of motivated peers. Group projects and discussions enhance your understanding.",
  },
  {
    icon: Clock,
    title: "Flexible Pacing",
    description: "Recorded sessions available for review. Catch up on missed classes or revisit complex topics anytime.",
  },
  {
    icon: Award,
    title: "Industry-Recognized Certificate",
    description: "Earn a certificate upon completion that validates your AI skills to employers and clients.",
  },
];
