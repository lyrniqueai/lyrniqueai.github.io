import AcademyLayout from "@/components/layout/AcademyLayout";
import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Clock, Video, Award, CheckCircle2, ArrowRight, ExternalLink } from "lucide-react";

// Course data - in production this would come from an API/database
const coursesData: Record<string, {
  title: string;
  tagline: string;
  description: string;
  level: "Beginner" | "Intermediate" | "Advanced";
  duration: string;
  format: string;
  tools: string[];
  image: string;
  outcomes: string[];
  syllabus: { week: string; title: string; topics: string[] }[];
  instructor: { name: string; role: string; company: string; linkedin: string; image: string };
  faqs: { question: string; answer: string }[];
}> = {
  "foundations-of-generative-ai": {
    title: "Foundations of Generative AI",
    tagline: "From Zero to AI Builder",
    description: "Jumpstart your AI journey from zero: master Python essentials and build real chatbots with ChatGPT. Ideal for non-engineers and anyone craving hands-on AI creativity.",
    level: "Beginner",
    duration: "6 weeks",
    format: "Live + Recorded",
    tools: ["Python", "ChatGPT", "OpenAI API", "Jupyter"],
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1200&h=600&fit=crop",
    outcomes: [
      "Build functional AI chatbots from scratch",
      "Master Python basics for AI development",
      "Understand how Large Language Models work",
      "Create portfolio-ready GenAI projects",
      "Use APIs to integrate AI into applications"
    ],
    syllabus: [
      { week: "Week 1", title: "Introduction to AI & Python Basics", topics: ["What is Generative AI?", "Python fundamentals", "Setting up your environment"] },
      { week: "Week 2", title: "Understanding Large Language Models", topics: ["How LLMs work", "Prompt engineering basics", "ChatGPT deep dive"] },
      { week: "Week 3", title: "Working with OpenAI API", topics: ["API authentication", "Making API calls", "Handling responses"] },
      { week: "Week 4", title: "Building Your First Chatbot", topics: ["Conversation design", "Context management", "Error handling"] },
      { week: "Week 5", title: "Advanced Prompt Engineering", topics: ["System prompts", "Few-shot learning", "Chain of thought"] },
      { week: "Week 6", title: "Capstone Project", topics: ["Project planning", "Implementation", "Presentation & feedback"] }
    ],
    instructor: {
      name: "Vikram Patel",
      role: "Senior AI Engineer",
      company: "TCS",
      linkedin: "linkedin.com/in/vikrampatel",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop"
    },
    faqs: [
      { question: "Do I need coding experience?", answer: "No! This course starts from absolute basics. We'll teach you Python from scratch." },
      { question: "Is this course beginner friendly?", answer: "Absolutely! It's designed specifically for beginners with no prior AI or coding experience." },
      { question: "Will I get a certificate?", answer: "Yes, upon successful completion you'll receive an industry-recognized certificate." },
      { question: "Is this self-paced or live?", answer: "It's a hybrid format with live sessions and recorded content you can access anytime." }
    ]
  },
  "ai-unleashed": {
    title: "AI Unleashed: Spark Your Creativity",
    tagline: "No Code, Pure Magic",
    description: "Unlock AI's magic—no code required. Craft stories, images, and voice adventures using the latest AI tools. Perfect for total beginners from any background.",
    level: "Beginner",
    duration: "2 weeks",
    format: "Workshop",
    tools: ["ChatGPT", "DALL-E", "Midjourney", "ElevenLabs"],
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=1200&h=600&fit=crop",
    outcomes: [
      "Create AI-generated images and artwork",
      "Write compelling stories with AI assistance",
      "Generate realistic voice content",
      "Understand AI tool capabilities and limitations",
      "Build a creative AI project portfolio"
    ],
    syllabus: [
      { week: "Week 1", title: "Text & Image Generation", topics: ["ChatGPT mastery", "DALL-E & Midjourney", "Creative prompting"] },
      { week: "Week 2", title: "Voice & Multimedia", topics: ["AI voice generation", "Combining modalities", "Final creative project"] }
    ],
    instructor: {
      name: "Priya Nair",
      role: "GenAI Specialist",
      company: "Wipro",
      linkedin: "linkedin.com/in/priyanair",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop"
    },
    faqs: [
      { question: "Do I need coding experience?", answer: "Not at all! This is a completely no-code workshop." },
      { question: "What will I create?", answer: "You'll create AI-generated art, stories, and voice content for a creative portfolio." },
      { question: "Will I get a certificate?", answer: "Yes, you'll receive a workshop completion certificate." },
      { question: "How long are the sessions?", answer: "Each week includes 2-3 hours of live workshop sessions plus practice time." }
    ]
  },
  "agentic-ai-systems": {
    title: "Mastering Agentic AI Systems",
    tagline: "Build Intelligent AI Agents",
    description: "Craft smart AI agents with memory, planning, and tools like LangChain. Dive into RAG bots and ethical AI builds for real-world challenges.",
    level: "Intermediate",
    duration: "8 weeks",
    format: "Live + Recorded",
    tools: ["Python", "LangChain", "ChromaDB", "OpenAI", "Pinecone"],
    image: "https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=1200&h=600&fit=crop",
    outcomes: [
      "Build autonomous AI agents with memory",
      "Implement RAG (Retrieval-Augmented Generation)",
      "Design multi-agent systems",
      "Deploy production-ready AI solutions",
      "Apply ethical AI principles"
    ],
    syllabus: [
      { week: "Week 1-2", title: "Agent Fundamentals", topics: ["Agent architectures", "Tool use & function calling", "Memory systems"] },
      { week: "Week 3-4", title: "RAG Implementation", topics: ["Vector databases", "Document processing", "Semantic search"] },
      { week: "Week 5-6", title: "Advanced Agents", topics: ["Multi-agent orchestration", "Planning & reasoning", "Error recovery"] },
      { week: "Week 7-8", title: "Production & Ethics", topics: ["Deployment strategies", "Monitoring & evaluation", "AI ethics & safety"] }
    ],
    instructor: {
      name: "Anita Sharma",
      role: "AI Architect",
      company: "Infosys",
      linkedin: "linkedin.com/in/anitasharma",
      image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=200&h=200&fit=crop"
    },
    faqs: [
      { question: "What prerequisites do I need?", answer: "Basic Python knowledge and familiarity with AI concepts. Our Foundations course is great prep!" },
      { question: "Is this course beginner friendly?", answer: "This is an intermediate course. We recommend completing Foundations of GenAI first." },
      { question: "Will I get a certificate?", answer: "Yes, plus a portfolio of deployed AI agent projects." },
      { question: "What kind of projects will I build?", answer: "You'll build RAG chatbots, research agents, and a custom multi-agent system." }
    ]
  },
  "genai-launchpad": {
    title: "GenAI Industry Launchpad",
    tagline: "Launch Your AI Career",
    description: "Build and deploy a custom AI agent in a guided capstone project. Blend case studies, ethics, and networking to launch your AI career.",
    level: "Advanced",
    duration: "10 weeks",
    format: "Cohort-based",
    tools: ["Full Stack", "Cloud Deployment", "MLOps", "Enterprise Tools"],
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&h=600&fit=crop",
    outcomes: [
      "Deploy enterprise-grade AI solutions",
      "Build an impressive AI portfolio",
      "Network with industry professionals",
      "Master AI project management",
      "Prepare for AI career opportunities"
    ],
    syllabus: [
      { week: "Week 1-3", title: "Industry Foundations", topics: ["Enterprise AI landscape", "Case study analysis", "Project scoping"] },
      { week: "Week 4-6", title: "Capstone Development", topics: ["Architecture design", "Implementation sprints", "Code reviews"] },
      { week: "Week 7-9", title: "Deployment & Scale", topics: ["Cloud deployment", "Monitoring & optimization", "Security best practices"] },
      { week: "Week 10", title: "Career Launch", topics: ["Portfolio presentation", "Industry networking", "Career guidance"] }
    ],
    instructor: {
      name: "Vikram Patel",
      role: "Senior AI Engineer",
      company: "TCS",
      linkedin: "linkedin.com/in/vikrampatel",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop"
    },
    faqs: [
      { question: "What prerequisites do I need?", answer: "Completion of our intermediate course or equivalent experience with AI agents." },
      { question: "Is there a selection process?", answer: "Yes, we review applications to ensure you're ready for the intensive program." },
      { question: "Will I get a certificate?", answer: "Yes, plus career support and networking opportunities." },
      { question: "What's the time commitment?", answer: "Expect 15-20 hours per week including projects and networking." }
    ]
  }
};

const CourseDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const course = slug ? coursesData[slug] : null;

  if (!course) {
    return (
      <AcademyLayout>
        
        <div className="container mx-auto px-4 py-32 text-center">
          <h1 className="text-4xl font-bold mb-4">Course Not Found</h1>
          <p className="text-muted-foreground mb-8">The course you're looking for doesn't exist.</p>
          <Link to="/academy/courses">
            <Button>Browse All Courses</Button>
          </Link>
        </div>

      </AcademyLayout>
    );
  }

  const levelColors = {
    Beginner: "bg-emerald-500/20 text-emerald-400 border-emerald-500/30",
    Intermediate: "bg-amber-500/20 text-amber-400 border-amber-500/30",
    Advanced: "bg-rose-500/20 text-rose-400 border-rose-500/30",
  };

  return (
    <AcademyLayout>
      
      
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <img src={course.image} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-background" />
        </div>
        
        <div className="container relative z-10 mx-auto px-4">
          <div className="max-w-4xl">
            <Badge className={`${levelColors[course.level]} border mb-4`}>
              {course.level}
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              {course.title}
            </h1>
            <p className="text-xl text-primary font-medium mb-4">{course.tagline}</p>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl">
              {course.description}
            </p>
            
            {/* Course Meta */}
            <div className="flex flex-wrap gap-4 mb-8">
              <div className="flex items-center gap-2 bg-card/50 px-4 py-2 rounded-lg border border-border/50">
                <Clock className="w-5 h-5 text-primary" />
                <span>{course.duration}</span>
              </div>
              <div className="flex items-center gap-2 bg-card/50 px-4 py-2 rounded-lg border border-border/50">
                <Video className="w-5 h-5 text-primary" />
                <span>{course.format}</span>
              </div>
              <div className="flex items-center gap-2 bg-card/50 px-4 py-2 rounded-lg border border-border/50">
                <Award className="w-5 h-5 text-primary" />
                <span>Certificate Included</span>
              </div>
            </div>
            
            {/* Tools */}
            <div className="flex flex-wrap gap-2 mb-8">
              {course.tools.map((tool) => (
                <Badge key={tool} variant="outline" className="border-border bg-card/50">
                  {tool}
                </Badge>
              ))}
            </div>
            
            {/* CTAs */}
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-gradient-primary border-0 text-foreground font-semibold">
                Enroll Now
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button size="lg" variant="outline" className="border-primary/50 text-primary hover:bg-primary/10">
                Get Syllabus
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Outcomes Section */}
      <section className="py-16 bg-card/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">What You'll Learn</h2>
          <div className="grid md:grid-cols-2 gap-4 max-w-4xl">
            {course.outcomes.map((outcome, index) => (
              <div key={index} className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-lg">{outcome}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Syllabus Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Course Syllabus</h2>
          <div className="max-w-3xl">
            <Accordion type="single" collapsible className="space-y-4">
              {course.syllabus.map((module, index) => (
                <AccordionItem 
                  key={index} 
                  value={`module-${index}`}
                  className="bg-card border border-border/50 rounded-lg px-6"
                >
                  <AccordionTrigger className="hover:no-underline">
                    <div className="flex items-center gap-4 text-left">
                      <Badge variant="outline" className="shrink-0">{module.week}</Badge>
                      <span className="font-semibold">{module.title}</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    <ul className="space-y-2 pt-2 pb-4">
                      {module.topics.map((topic, topicIndex) => (
                        <li key={topicIndex} className="flex items-center gap-2 text-muted-foreground">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                          {topic}
                        </li>
                      ))}
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>
      
      {/* Instructor Section */}
      <section className="py-16 bg-card/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Your Instructor</h2>
          <Card className="p-6 max-w-2xl bg-gradient-card border-border/50">
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
              <img 
                src={course.instructor.image} 
                alt={course.instructor.name}
                className="w-24 h-24 rounded-full object-cover border-2 border-primary/30"
              />
              <div className="text-center sm:text-left">
                <h3 className="text-xl font-bold mb-1">{course.instructor.name}</h3>
                <p className="text-primary mb-2">{course.instructor.role} at {course.instructor.company}</p>
                <a 
                  href={`https://${course.instructor.linkedin}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
                >
                  <ExternalLink className="w-4 h-4" />
                  Connect on LinkedIn
                </a>
              </div>
            </div>
          </Card>
        </div>
      </section>
      
      {/* FAQs Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Frequently Asked Questions</h2>
          <div className="max-w-3xl">
            <Accordion type="single" collapsible className="space-y-4">
              {course.faqs.map((faq, index) => (
                <AccordionItem 
                  key={index} 
                  value={`faq-${index}`}
                  className="bg-card border border-border/50 rounded-lg px-6"
                >
                  <AccordionTrigger className="hover:no-underline text-left">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-b from-card/50 to-background">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Start Your <span className="gradient-text">AI Journey</span>?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            Join thousands of learners building real-world AI skills with expert guidance.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="bg-gradient-primary border-0 text-foreground font-semibold">
              Enroll Now
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Link to="/academy/courses">
              <Button size="lg" variant="outline" className="border-primary/50 text-primary hover:bg-primary/10">
                View All Courses
              </Button>
            </Link>
          </div>
        </div>
      </section>
      
      
    </AcademyLayout>
  );
};

export default CourseDetail;
