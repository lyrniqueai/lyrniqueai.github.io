import AcademyLayout from "@/components/layout/AcademyLayout";
import { Card } from "@/components/ui/card";
import { Target, Eye, Heart, ExternalLink } from "lucide-react";

const About = () => {
  return (
    <AcademyLayout>
      
      
      {/* Hero */}
      <section className="pt-32 pb-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 space-y-6 animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold">
              About <span className="gradient-text">Lyrnique</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We identified a growing disconnect between academic learning and the demands of real-world AI development. Lyrnique bridges this gap with practical, responsible, and build-first education.
            </p>
          </div>
        </div>
      </section>

      {/* Vision, Mission, Values */}
      <section className="py-16 bg-card/50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="p-8 bg-gradient-card border-border/50 hover:border-primary/50 transition-all">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                  <Eye className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-2xl font-bold">Vision</h3>
              </div>
              <p className="text-muted-foreground">
                To make real-world Generative AI capability accessible to every motivated learner.
              </p>
            </Card>
            
            <Card className="p-8 bg-gradient-card border-border/50 hover:border-primary/50 transition-all">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                  <Target className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-2xl font-bold">Mission</h3>
              </div>
              <p className="text-muted-foreground">
                To help learners move beyond AI awareness and build, deploy, and reason with Generative AI systems responsibly.
              </p>
            </Card>
            
            <Card className="p-8 bg-gradient-card border-border/50 hover:border-primary/50 transition-all">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                  <Heart className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-2xl font-bold">Core Values</h3>
              </div>
              <ul className="text-muted-foreground space-y-2">
                <li>• Practical over theoretical</li>
                <li>• Depth over hype</li>
                <li>• Responsibility over shortcuts</li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* AI-Aware vs AI-Capable */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Learning AI ≠ Building with AI</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              AI knowledge is everywhere. Real AI capability is not. Most programs create awareness—careers need capability.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="p-8 border-border/50 bg-muted/30">
              <h3 className="text-2xl font-bold mb-4 text-muted-foreground">AI-Aware</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-muted-foreground rounded-full" />
                  Consumes content
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-muted-foreground rounded-full" />
                  Understands theory
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-muted-foreground rounded-full" />
                  Knows the concepts
                </li>
              </ul>
            </Card>
            
            <Card className="p-8 border-primary/50 bg-gradient-card">
              <h3 className="text-2xl font-bold mb-4 gradient-text">AI-Capable</h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-primary rounded-full" />
                  Builds and deploys
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-primary rounded-full" />
                  Architects solutions
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-primary rounded-full" />
                  Creates real products
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* How Lyrnique Works */}
      <section className="py-16 bg-card/50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">How Lyrnique Turns Learners into Builders</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {[
              { step: "1", title: "Learn", desc: "Only what's needed to build" },
              { step: "2", title: "Build", desc: "Real use cases, not demos" },
              { step: "3", title: "Deploy", desc: "APIs, hosting, workflows" },
              { step: "4", title: "Launch", desc: "Career-ready portfolio" },
            ].map((item) => (
              <div key={item.step} className="text-center space-y-4">
                <div className="w-16 h-16 bg-gradient-primary rounded-full mx-auto flex items-center justify-center text-2xl font-bold">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Founders */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Built by Practitioners</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Programs designed and delivered by industry practitioners with experience in deploying AI systems.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="p-8 bg-gradient-card border-border/50 hover:border-primary/50 transition-all">
              <div className="text-center space-y-4">
                <div className="w-24 h-24 bg-gradient-primary rounded-full mx-auto flex items-center justify-center text-3xl font-bold">
                  MC
                </div>
                <div>
                  <h3 className="text-2xl font-bold">Mithun Chandar V</h3>
                  <p className="text-primary font-medium">Co-Founder</p>
                  <p className="text-muted-foreground text-sm">MBA – IIM | Product Manager</p>
                </div>
                <ul className="text-left text-muted-foreground text-sm space-y-2">
                  <li>• 11+ years of experience in the IT industry</li>
                  <li>• Worked across Generative AI, Machine Learning, Finance, E-commerce, Healthcare</li>
                  <li>• Experience building and applying AI systems in real business contexts</li>
                </ul>
                <a 
                  href="https://linkedin.com/in/mithunchandar" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-primary hover:underline"
                >
                  <ExternalLink className="w-4 h-4" />
                  Connect on LinkedIn
                </a>
              </div>
            </Card>
            
            <Card className="p-8 bg-gradient-card border-border/50 hover:border-primary/50 transition-all">
              <div className="text-center space-y-4">
                <div className="w-24 h-24 bg-gradient-primary rounded-full mx-auto flex items-center justify-center text-3xl font-bold">
                  RK
                </div>
                <div>
                  <h3 className="text-2xl font-bold">Ramachandran K</h3>
                  <p className="text-primary font-medium">Co-Founder</p>
                  <p className="text-muted-foreground text-sm">Certified ML Specialist | Senior Data Scientist</p>
                </div>
                <ul className="text-left text-muted-foreground text-sm space-y-2">
                  <li>• 13+ years of experience in the IT industry</li>
                  <li>• Deep expertise in Generative AI, Machine Learning and Healthcare systems</li>
                  <li>• Designing and deploying ML solutions on cloud platforms</li>
                </ul>
                <a 
                  href="https://linkedin.com/in/ramachandrankrishnamoorthy" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-primary hover:underline"
                >
                  <ExternalLink className="w-4 h-4" />
                  Connect on LinkedIn
                </a>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Traction */}
      <section className="py-16 bg-card/50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Early Engagements & Growing Momentum</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <Card className="p-8 text-center bg-gradient-card border-primary/30">
              <div className="text-4xl md:text-5xl font-bold gradient-text mb-2">100+</div>
              <p className="text-muted-foreground">Students Proposed for GenAI Workshops</p>
            </Card>
            <Card className="p-8 text-center bg-gradient-card border-primary/30">
              <div className="text-4xl md:text-5xl font-bold gradient-text mb-2">2+</div>
              <p className="text-muted-foreground">Colleges in Active Discussion</p>
            </Card>
            <Card className="p-8 text-center bg-gradient-card border-primary/30">
              <div className="text-4xl md:text-5xl font-bold gradient-text mb-2">2+</div>
              <p className="text-muted-foreground">Corporate Pilot Trainings Under Planning</p>
            </Card>
          </div>
          <p className="text-center text-muted-foreground mt-6 text-sm">
            Programs currently in pilot and partnership-building phase
          </p>
        </div>
      </section>

      
    </AcademyLayout>
  );
};

export default About;
