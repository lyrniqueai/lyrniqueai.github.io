import AcademyLayout from "@/components/layout/AcademyLayout";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Calendar, MapPin, Users } from "lucide-react";

const Workshops = () => {
  return (
    <AcademyLayout>
      
      
      <section className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 space-y-4 animate-fade-in">
            <h1 className="text-5xl font-bold">
              Our <span className="gradient-text">Workshops</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our offline workshops bring hands-on Gen AI learning to students across India, guided by industry experts. Join Lyrnique to experience practical AI skills in a collaborative environment.
            </p>
          </div>

          <div className="space-y-8 max-w-4xl mx-auto">
            <Card className="p-8 bg-gradient-card border-border/50 hover:border-primary/50 transition-all">
              <div className="space-y-6">
                <h2 className="text-3xl font-bold">Gen AI: Your New Companion</h2>
                
                <div className="flex flex-wrap gap-4">
                  <div className="flex items-center space-x-2 text-muted-foreground">
                    <MapPin className="h-5 w-5 text-primary" />
                    <span>Chennai Tech Hub, Chennai</span>
                  </div>
                  <div className="flex items-center space-x-2 text-muted-foreground">
                    <Calendar className="h-5 w-5 text-primary" />
                    <span>Completed · Jan 2025</span>
                  </div>
                  <div className="flex items-center space-x-2 text-muted-foreground">
                    <Users className="h-5 w-5 text-primary" />
                    <span>2 Days</span>
                  </div>
                </div>

                <p className="text-muted-foreground">
                  A 2-day workshop where students learned no-code AI tools to build chatbots and creative projects, guided by industry mentors.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <img 
                    src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=400&h=250&fit=crop" 
                    alt="Workshop in progress"
                    className="rounded-lg w-full h-48 object-cover"
                  />
                  <img 
                    src="https://images.unsplash.com/photo-1531482615713-2afd69097998?w=400&h=250&fit=crop" 
                    alt="Students collaborating"
                    className="rounded-lg w-full h-48 object-cover"
                  />
                </div>

                <div className="bg-background/50 p-6 rounded-lg space-y-4">
                  <h3 className="font-semibold text-lg">What Students Say:</h3>
                  <div className="space-y-3">
                    <blockquote className="border-l-2 border-primary pl-4 italic text-muted-foreground">
                      "This workshop was a game-changer – I built my first AI chatbot without coding!"
                      <footer className="text-sm mt-2 text-foreground not-italic">— Arjun Menon, B.A. Student</footer>
                    </blockquote>
                    <blockquote className="border-l-2 border-primary pl-4 italic text-muted-foreground">
                      "Fun, engaging, and perfect for beginners like me!"
                      <footer className="text-sm mt-2 text-foreground not-italic">— Sneha Reddy, B.Com Student</footer>
                    </blockquote>
                  </div>
                </div>

                <Link to="/academy/contact">
                  <Button className="w-full bg-gradient-primary border-0 text-foreground font-semibold hover:opacity-90 transition-opacity">
                    Register for Next Workshop
                  </Button>
                </Link>
              </div>
            </Card>

            <Card className="p-8 bg-gradient-card border-border/50 hover:border-primary/50 transition-all">
              <div className="space-y-6">
                <h2 className="text-3xl font-bold">AI Art Creation Workshop</h2>
                
                <div className="flex flex-wrap gap-4">
                  <div className="flex items-center space-x-2 text-muted-foreground">
                    <MapPin className="h-5 w-5 text-primary" />
                    <span>Trichy Community Center, Trichy</span>
                  </div>
                  <div className="flex items-center space-x-2 text-muted-foreground">
                    <Calendar className="h-5 w-5 text-primary" />
                    <span>April 2025</span>
                  </div>
                  <div className="flex items-center space-x-2 text-muted-foreground">
                    <Users className="h-5 w-5 text-primary" />
                    <span>2 Days</span>
                  </div>
                </div>

                <p className="text-muted-foreground">
                  Hosted with 40 students, this workshop focused on creating AI-generated art projects without any coding experience required.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <img 
                    src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=400&h=250&fit=crop" 
                    alt="Workshop presentation"
                    className="rounded-lg w-full h-48 object-cover"
                  />
                  <img 
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&h=250&fit=crop" 
                    alt="Group discussion"
                    className="rounded-lg w-full h-48 object-cover"
                  />
                </div>

                <div className="bg-background/50 p-6 rounded-lg space-y-4">
                  <h3 className="font-semibold text-lg">Student Testimonial:</h3>
                  <blockquote className="border-l-2 border-primary pl-4 italic text-muted-foreground">
                    "I never thought I could build AI art without coding – amazing experience!"
                    <footer className="text-sm mt-2 text-foreground not-italic">— Rahul Kumar, B.Sc Student</footer>
                  </blockquote>
                </div>

                <Link to="/academy/contact">
                  <Button className="w-full bg-gradient-primary border-0 text-foreground font-semibold hover:opacity-90 transition-opacity">
                    Join Upcoming Session
                  </Button>
                </Link>
              </div>
            </Card>
          </div>
        </div>
      </section>

      
    </AcademyLayout>
  );
};

export default Workshops;
