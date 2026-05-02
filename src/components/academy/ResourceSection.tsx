import type { ReactNode } from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import type { LucideIcon } from "lucide-react";

interface ResourceSectionProps {
  title: string;
  icon?: LucideIcon;
  count?: number;
  children: ReactNode;
  defaultOpen?: boolean;
}

const ResourceSection = ({ title, icon: Icon, count, children, defaultOpen = false }: ResourceSectionProps) => {
  return (
    <Accordion type="single" collapsible defaultValue={defaultOpen ? "item-1" : undefined}>
      <AccordionItem value="item-1" className="border-border/50">
        <AccordionTrigger className="hover:text-primary text-lg font-semibold">
          <div className="flex items-center gap-3">
            {Icon && <Icon className="h-5 w-5 text-primary" />}
            <span>{title}</span>
            {count !== undefined && (
              <span className="text-sm text-muted-foreground">({count})</span>
            )}
          </div>
        </AccordionTrigger>
        <AccordionContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pt-4">
            {children}
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default ResourceSection;
