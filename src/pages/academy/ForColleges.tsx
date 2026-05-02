import AcademyLayout from "@/components/layout/AcademyLayout";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { School, Users, BookOpen, Lightbulb, Award, ArrowRight, CheckCircle } from "lucide-react";

const ForColleges = () => {
  const partnershipModels = [
    {
      icon: Lightbulb,
      title: "Workshops & Bootcamps",
      desc: "Short-term exposure programs",
      details: "1-2 day intensive sessions introducing students to GenAI tools and concepts with hands-on demos.",
    },
    {
      icon: BookOpen,
      title: "Semester-Aligned Programs",
      desc: "Project-based learning modules",
      details: "Multi-week programs integrated with your academic calendar, featuring guided projects and assessments.",
    },
    {
      icon: Users,
      title: "Faculty Enablement",
      desc: "AI tools for teaching & research",
      details: "Train your faculty on AI tools to enhance their teaching methodology and research capabilities.",
    },
  ];

  const benefits = [
    "Industry-aligned skill exposure for students",
    "Supports NEP & placement goals",
    "Innovation culture on campus",
    "Supports internships, hackathons & project showcases",
    "Customized programs based on academic needs",
    "Certificate on completion for students",
  ];

  return (
    <AcademyLayout>
      
      
      {/* Hero */}
      <section className="pt-32 pb-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 space-y-6 animate-fade-in">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
              <School className="w-4 h-4" />
              For Colleges & Universities
            </div>
            <h1 className="text-5xl md:text-6xl font-bold">
              <span className="gradient-text">Partner with Lyrnique</span>
              <br />
              <span className="text-foreground/90">for Campus AI Programs</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Equip your students with hands-on Generative AI skills through customized workshops, semester programs, and faculty enablement sessions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Link to="/academy/contact">
                <Button size="lg" className="bg-gradient-primary border-0 text-foreground font-semibold text-lg px-8 py-6">
                  Partner With Us
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
              <Link to="/academy/workshops">
                <Button variant="outline" size="lg" className="border-primary/50 text-primary text-lg px-8 py-6">
                  View Workshop Options
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Partnership Models */}
      <section className="py-16 bg-card/50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4">How Institutions Partner With Lyrnique</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Programs are customized based on academic needs and infrastructure.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {partnershipModels.map((model) => (
              <Card key={model.title} className="p-8 bg-gradient-card border-border/50 hover:border-primary/50 transition-all">
                <div className="w-14 h-14 bg-primary/20 rounded-full flex items-center justify-center mb-4">
                  <model.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">{model.title}</h3>
                <p className="text-primary text-sm mb-3">{model.desc}</p>
                <p className="text-muted-foreground text-sm">{model.details}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div>
              <h2 className="text-4xl font-bold mb-6">Benefits for Your Institution</h2>
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
              <div className="text-center space-y-6">
                <div className="w-16 h-16 bg-primary/20 rounded-full mx-auto flex items-center justify-center">
                  <Award className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold">Early Adopter Advantage</h3>
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <div className="text-3xl font-bold gradient-text">2+</div>
                    <p className="text-muted-foreground text-sm">Colleges in Active Discussion</p>
                  </div>
                  <div>
                    <div className="text-3xl font-bold gradient-text">100+</div>
                    <p className="text-muted-foreground text-sm">Students Proposed for Workshops</p>
                  </div>
                </div>
                <p className="text-muted-foreground text-sm">
                  Programs currently in pilot and partnership-building phase
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-card/50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Let's Build <span className="gradient-text">AI Capability</span> Together
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Contact us to discuss customized AI upskilling programs for your campus.
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

export default ForColleges;
