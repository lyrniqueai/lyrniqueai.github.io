import AcademyLayout from "@/components/layout/AcademyLayout";
import CourseCard from "@/components/academy/CourseCard";
import LeadCaptureForm from "@/components/academy/LeadCaptureForm";

const Courses = () => {
  return (
    <AcademyLayout>
      <section className="pt-32 pb-20" id="learning-paths">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 space-y-4 animate-fade-in">
            <h1 className="text-5xl font-bold font-display">
              Our <span className="gradient-text">Courses</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Discover Lyrnique's AI and Data Science courses, crafted for undergrads from any stream to master Generative AI through hands-on, no-code/low-code projects. Learn from industry experts and build future-ready skills to kickstart your career.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <LeadCaptureForm
                type="syllabus"
                buttonClassName="bg-gradient-primary border-0 text-foreground font-semibold hover:opacity-90"
              />
              <LeadCaptureForm
                type="workshop"
                buttonVariant="outline"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <CourseCard
              title="AI Unleashed: Spark Your Creativity"
              description="Perfect for total beginners. Create AI stories, images, and voice adventures with no coding required."
              cta="View Course"
              link="/academy/courses/ai-unleashed"
              level="Beginner"
              duration="2 weeks"
              outcome="Create AI-powered content without coding"
            />

            <CourseCard
              title="Foundations of Generative AI"
              description="Master Python essentials and build chatbots with ChatGPT. Ideal for non-engineers starting their AI journey."
              cta="View Course"
              link="/academy/courses/foundations-of-generative-ai"
              level="Beginner"
              duration="6 weeks"
              outcome="Build your first AI chatbot"
            />

            <CourseCard
              title="Mastering Agentic AI Systems"
              description="Build AI agents with LangChain, create RAG bots, and explore ethical AI development."
              cta="View Course"
              link="/academy/courses/agentic-ai-systems"
              level="Intermediate"
              duration="8 weeks"
              outcome="Deploy production-ready AI agents"
            />

            <CourseCard
              title="GenAI Industry Launchpad"
              description="Build and deploy custom AI agents. Industry case studies, portfolio projects, and networking."
              cta="View Course"
              link="/academy/courses/genai-launchpad"
              level="Advanced"
              duration="10 weeks"
              outcome="Launch your AI career with a portfolio"
            />
          </div>
        </div>
      </section>
    </AcademyLayout>
  );
};

export default Courses;
