import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { Clock, ArrowRight } from "lucide-react";

interface CourseCardProps {
  title: string;
  description: string;
  cta: string;
  link?: string;
  image?: string;
  level?: "Beginner" | "Intermediate" | "Advanced";
  duration?: string;
  outcome?: string;
}

const levelColors = {
  Beginner:     "bg-emerald-500/20 text-emerald-400 border-emerald-500/30",
  Intermediate: "bg-amber-500/20 text-amber-400 border-amber-500/30",
  Advanced:     "bg-rose-500/20 text-rose-400 border-rose-500/30",
};

const levelTopLine = {
  Beginner:     "linear-gradient(90deg, #10b981, #06b6d4)",
  Intermediate: "linear-gradient(90deg, #f59e0b, #ef4444)",
  Advanced:     "linear-gradient(90deg, #8b5cf6, #ec4899)",
};

const CourseCard = ({
  title, description, cta,
  link = "/academy/courses",
  image, level = "Beginner", duration = "4 weeks", outcome,
}: CourseCardProps) => {
  return (
    <div
      className="acad-glass group overflow-hidden flex flex-col"
      style={{ borderRadius: 12, position: "relative" }}
    >
      {/* Coloured top line */}
      <div style={{ height: 2, background: levelTopLine[level], flexShrink: 0 }} />

      {image && (
        <div className="aspect-video w-full overflow-hidden" style={{ flexShrink: 0 }}>
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </div>
      )}

      <div className="p-5 flex flex-col flex-1 gap-3">
        <div className="flex items-center gap-3 text-xs text-muted-foreground">
          <Badge className={`${levelColors[level]} border text-xs font-medium`}>{level}</Badge>
          <div className="flex items-center gap-1 ml-auto">
            <Clock className="w-3.5 h-3.5" />
            <span>{duration}</span>
          </div>
        </div>

        <h3
          className="text-lg font-bold font-display group-hover:text-primary transition-colors line-clamp-2"
          style={{ letterSpacing: "-0.3px" }}
        >
          {title}
        </h3>

        {outcome && (
          <p className="text-primary/80 text-sm font-medium">{outcome}</p>
        )}

        <p className="text-muted-foreground text-sm leading-relaxed line-clamp-2 flex-1">
          {description}
        </p>

        <Link to={link} className="mt-auto pt-1">
          <Button
            variant="outline"
            className="w-full border-primary/40 text-primary hover:bg-primary hover:text-background transition-all group/btn"
          >
            {cta}
            <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default CourseCard;
