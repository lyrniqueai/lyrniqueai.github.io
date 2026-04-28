import { FORMAT_FEATURES } from "@/constants/academy";

export default function LearningFormatSection() {
  return (
    <section className="py-20 bg-card/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">
            How <span className="gradient-text">Learning Happens</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Our proven learning format combines live instruction, hands-on practice, and community support to ensure you master AI skills effectively.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {FORMAT_FEATURES.map((feature) => (
            <div
              key={feature.title}
              className="p-6 rounded-xl border border-border/50 bg-background/50 hover:border-primary/50 transition-all duration-300 group"
            >
              <div className="w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <feature.icon className="w-6 h-6 text-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
