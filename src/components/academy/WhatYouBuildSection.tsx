import { Card } from "@/components/ui/card";
import { BUILD_PROJECTS } from "@/constants/academy";

export default function WhatYouBuildSection() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">What You Learn to Build</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Project complexity varies by program and learner background.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {BUILD_PROJECTS.map((project) => (
            <Card
              key={project.title}
              className="p-6 bg-gradient-card border-border/50 hover:border-primary/50 transition-all group"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-primary/30 transition-colors">
                  <project.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-1 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">{project.desc}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
