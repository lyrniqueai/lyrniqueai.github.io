import AcademyLayout from "@/components/layout/AcademyLayout";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Building2, Code, BarChart3, Settings, Zap, Users, Target, ArrowRight, CheckCircle } from "lucide-react";

const ForOrganizations = () => {
  const teamUseCases = [
    {
      icon: Code,
      title: "Engineering Teams",
      desc: "AI-assisted development, testing, documentation",
      details: "Accelerate software development with AI code assistants, automated testing, and intelligent documentation generation.",
    },
    {
      icon: BarChart3,
      title: "Business Teams",
      desc: "Automation, reporting, decision support",
      details: "Streamline business processes with AI-powered analytics, automated reporting, and data-driven insights.",
    },
    {
      icon: Settings,
      title: "Operations Teams",
      desc: "Process optimization, knowledge systems",
      details: "Build internal knowledge bases, automate workflows, and optimize operational efficiency with AI.",
    },
  ];

  const benefits = [
    "AI-assisted coding & automation for faster delivery",
    "Faster prototyping and experimentation",
    "Role-based GenAI workflows for teams",
    "Custom upskilling & productivity programs",
    "Hands-on training with real business use cases",
    "Industry practitioners as instructors",
  ];

  const outcomes = [
    { icon: Zap, title: "Faster Prototyping", desc: "Rapid AI-powered experimentation" },
    { icon: Users, title: "Team Upskilling", desc: "Build AI capability across roles" },
    { icon: Target, title: "Business Impact", desc: "Deploy AI solutions that matter" },
  ];

  return (
    <AcademyLayout>
      
      
      {/* Hero */}
      <section className="pt-32 pb-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 space-y-6 animate-fade-in">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
              <Building2 className="w-4 h-4" />
              For Organizations
            </div>
            <h1 className="text-5xl md:text-6xl font-bold">
              <span className="gradient-text">GenAI Upskilling</span>
              <br />
              <span className="text-foreground/90">for Your Teams</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Equip your teams with hands-on AI building skills. Custom programs designed for engineering, business, and operations teams.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Link to="/academy/contact">
                <Button size="lg" className="bg-gradient-primary border-0 text-foreground font-semibold text-lg px-8 py-6">
                  Contact Us
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
              <Link to="/academy/workshops">
                <Button variant="outline" size="lg" className="border-primary/50 text-primary text-lg px-8 py-6">
                  View Training Options
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* How Teams Use GenAI */}
      <section className="py-16 bg-card/50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4">How Teams Use GenAI After Training</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Programs are customized based on business functions.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {teamUseCases.map((item) => (
              <Card key={item.title} className="p-8 bg-gradient-card border-border/50 hover:border-primary/50 transition-all">
                <div className="w-14 h-14 bg-primary/20 rounded-full flex items-center justify-center mb-4">
                  <item.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-primary text-sm mb-3">{item.desc}</p>
                <p className="text-muted-foreground text-sm">{item.details}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Outcomes */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {outcomes.map((item) => (
              <Card key={item.title} className="p-6 text-center bg-gradient-card border-primary/30">
                <div className="w-12 h-12 bg-primary/20 rounded-full mx-auto flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-bold mb-1">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-card/50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div>
              <h2 className="text-4xl font-bold mb-6">Why Organizations Choose Lyrnique</h2>
              <ul className="space-y-4">
                {benefits.map((benefit) => (
                  <li key={benefit} className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-lg">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
            <Card className="p-8 bg-gradient-card border-primary/30">
              <div className="space-y-6">
                <h3 className="text-2xl font-bold">Custom AI Upskilling</h3>
                <p className="text-muted-foreground">
                  We design training programs tailored to your team's roles, tech stack, and business objectives. From half-day workshops to multi-week programs.
                </p>
                <div className="pt-4">
                  <div className="text-3xl font-bold gradient-text mb-2">2+</div>
                  <p className="text-muted-foreground text-sm">Corporate Pilot Trainings Under Planning</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to <span className="gradient-text">Upskill Your Team</span>?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Contact us for customized AI upskilling programs for your organization.
          </p>
          <Link to="/academy/contact">
            <Button size="lg" className="bg-gradient-primary border-0 text-foreground font-semibold text-lg px-8 py-6">
              Schedule a Discussion
            </Button>
          </Link>
        </div>
      </section>

      
    </AcademyLayout>
  );
};

export default ForOrganizations;
