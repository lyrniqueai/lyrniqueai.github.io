import AcademyLayout from "@/components/layout/AcademyLayout";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { GraduationCap, Palette, BarChart3, FlaskConical, Cpu, Briefcase, Rocket, Trophy, ArrowRight } from "lucide-react";

const ForStudents = () => {
  const disciplines = [
    { icon: Palette, title: "Arts", desc: "Build AI tools for creative workflows" },
    { icon: BarChart3, title: "Commerce", desc: "Create AI solutions for business automation" },
    { icon: FlaskConical, title: "Science", desc: "Develop AI systems for data analysis and research" },
    { icon: Cpu, title: "Engineering", desc: "Architect production-grade AI applications" },
  ];

  const outcomes = [
    { icon: Briefcase, title: "Portfolio for Internships & Jobs", desc: "3-6 real projects with GitHub + live demos" },
    { icon: Rocket, title: "Startup & Hackathon Readiness", desc: "Build AI applications independently" },
    { icon: Trophy, title: "Career Clarity in AI Roles", desc: "Understand real industry use cases" },
  ];

  return (
    <AcademyLayout>
      
      
      {/* Hero */}
      <section className="pt-32 pb-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 space-y-6 animate-fade-in">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
              <GraduationCap className="w-4 h-4" />
              For Students
            </div>
            <h1 className="text-5xl md:text-6xl font-bold">
              <span className="gradient-text">AI Skills for Every Discipline</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              You don't need to be an engineer to start. You need curiosity, intent, and the right guidance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Link to="/academy/courses">
                <Button size="lg" className="bg-gradient-primary border-0 text-foreground font-semibold text-lg px-8 py-6">
                  Explore Courses
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
              <Link to="/academy/contact">
                <Button variant="outline" size="lg" className="border-primary/50 text-primary text-lg px-8 py-6">
                  Apply for Upcoming Cohort
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* AI for Every Discipline */}
      <section className="py-16 bg-card/50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4">AI for Every Stream</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Whether you're in Arts, Commerce, Science, or Engineering—Lyrnique has a path for you.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {disciplines.map((item) => (
              <Card key={item.title} className="p-6 bg-gradient-card border-border/50 hover:border-primary/50 transition-all text-center">
                <div className="w-14 h-14 bg-primary/20 rounded-full mx-auto flex items-center justify-center mb-4">
                  <item.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* What You Walk Away With */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4">What You Walk Away With</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Practical capability, portfolio evidence, and industry readiness.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {outcomes.map((item) => (
              <Card key={item.title} className="p-8 bg-gradient-card border-border/50 hover:border-primary/50 transition-all">
                <div className="w-14 h-14 bg-primary/20 rounded-full flex items-center justify-center mb-4">
                  <item.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Programs */}
      <section className="py-16 bg-card/50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Flexible Programs for Your Learning Needs</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <Card className="p-6 border-border/50 hover:border-primary/50 transition-all">
              <h3 className="text-xl font-bold mb-2">AI Exploration Workshops</h3>
              <p className="text-primary text-sm mb-3">1-2 days</p>
              <p className="text-muted-foreground text-sm">
                Awareness + hands-on demos. Ideal for colleges & teams getting started with AI.
              </p>
            </Card>
            <Card className="p-6 border-border/50 hover:border-primary/50 transition-all">
              <h3 className="text-xl font-bold mb-2">Foundational GenAI Program</h3>
              <p className="text-primary text-sm mb-3">Multi-week</p>
              <p className="text-muted-foreground text-sm">
                Core skills + starter projects. Perfect for students and beginners.
              </p>
            </Card>
            <Card className="p-6 border-border/50 hover:border-primary/50 transition-all">
              <h3 className="text-xl font-bold mb-2">Master AI Systems Course</h3>
              <p className="text-primary text-sm mb-3">Deep technical track</p>
              <p className="text-muted-foreground text-sm">
                Production-style systems. For advanced learners ready to go deeper.
              </p>
            </Card>
            <Card className="p-6 border-border/50 hover:border-primary/50 transition-all">
              <h3 className="text-xl font-bold mb-2">Career Launch Intensive</h3>
              <p className="text-primary text-sm mb-3">Portfolio focus</p>
              <p className="text-muted-foreground text-sm">
                Job market readiness. For career changers & professionals.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Start Your <span className="gradient-text">AI Journey</span>?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join our upcoming cohort and build real-world AI skills.
          </p>
          <Link to="/academy/courses">
            <Button size="lg" className="bg-gradient-primary border-0 text-foreground font-semibold text-lg px-8 py-6">
              View All Courses
            </Button>
          </Link>
        </div>
      </section>

      
    </AcademyLayout>
  );
};

export default ForStudents;
