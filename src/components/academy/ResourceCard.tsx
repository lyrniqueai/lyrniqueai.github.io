import { ExternalLink } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface ResourceCardProps {
  title: string;
  description?: string;
  url: string;
  level?: "Beginner" | "Intermediate" | "Advanced";
  popular?: boolean;
}

const ResourceCard = ({ title, description, url, level, popular }: ResourceCardProps) => {
  return (
    <Card className="group hover:shadow-elegant transition-all duration-300 hover:scale-[1.02] border-border/50 bg-card/50 backdrop-blur-sm">
      <CardHeader>
        <div className="flex items-start justify-between gap-2">
          <CardTitle className="text-lg group-hover:text-primary transition-colors">
            {title}
          </CardTitle>
          {popular && (
            <Badge variant="secondary" className="bg-gradient-primary text-foreground text-xs">
              Popular
            </Badge>
          )}
        </div>
        {description && (
          <CardDescription className="text-sm mt-2">{description}</CardDescription>
        )}
      </CardHeader>
      <CardContent>
        <div className="flex items-center justify-between">
          {level && (
            <Badge variant="gradient" className="text-xs">
              {level}
            </Badge>
          )}
          <Button
            variant="ghost"
            size="sm"
            className="ml-auto hover:bg-primary/10 hover:text-primary"
            asChild
          >
            <a href={url} target="_blank" rel="noopener noreferrer">
              Visit Resource
              <ExternalLink className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default ResourceCard;
