import AcademyLayout from "@/components/layout/AcademyLayout";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const faqs = [
  {
    category: "Getting Started",
    questions: [
      {
        q: "Do I need coding experience to join?",
        a: "Not at all! Our courses are designed for beginners from any background. We start with no-code tools and gradually introduce coding concepts. Even our 'AI Unleashed' course requires zero coding knowledge.",
      },
      {
        q: "Is this suitable for non-engineering students?",
        a: "Absolutely! We've trained students from commerce, arts, science, and management backgrounds. Our curriculum is specifically designed to make AI accessible to everyone, regardless of their academic stream.",
      },
      {
        q: "What are the prerequisites for joining?",
        a: "Just a laptop with internet connection and a willingness to learn! For advanced courses, we recommend completing our foundational courses first, but there are no strict prerequisites.",
      },
      {
        q: "How do I know which course is right for me?",
        a: "Start with 'AI Unleashed' if you're completely new to AI. If you have some exposure, 'Foundations of Generative AI' is great. For those with Python basics, jump into 'Mastering Agentic AI Systems'. Contact us for personalized guidance!",
      },
    ],
  },
  {
    category: "Learning Experience",
    questions: [
      {
        q: "Are the classes live or recorded?",
        a: "Classes are conducted live by industry experts, allowing real-time interaction and Q&A. All sessions are recorded and available for review, so you never miss anything.",
      },
      {
        q: "What is the class schedule?",
        a: "Most classes are scheduled on weekends to accommodate working professionals and students. Typical sessions are 2-3 hours, with additional time for hands-on practice.",
      },
      {
        q: "How much time do I need to dedicate weekly?",
        a: "Plan for 6-8 hours per week including live sessions, assignments, and project work. The exact time varies by course level.",
      },
      {
        q: "What if I miss a live session?",
        a: "No worries! All sessions are recorded and available within 24 hours. You can also reach out to mentors during office hours for clarification.",
      },
    ],
  },
  {
    category: "Projects & Certification",
    questions: [
      {
        q: "What kind of projects will I build?",
        a: "You'll build real-world AI applications including chatbots, RAG systems, AI agents, image generators, and more. Each project is portfolio-ready and demonstrates practical skills to employers.",
      },
      {
        q: "Do I get a certificate after completion?",
        a: "Yes! Upon successful completion of the course and final project, you receive an industry-recognized certificate from Lyrnique that validates your AI skills.",
      },
      {
        q: "Can I add these projects to my resume?",
        a: "Absolutely! All projects are yours to keep and showcase. We even help you present them effectively on LinkedIn and in job interviews.",
      },
    ],
  },
  {
    category: "Fees & Support",
    questions: [
      {
        q: "What are the course fees?",
        a: "Course fees vary by program. We offer competitive pricing with EMI options available. Contact us for detailed pricing and any ongoing discounts or scholarships.",
      },
      {
        q: "Do you offer EMI or payment plans?",
        a: "Yes! We understand budget constraints and offer flexible EMI options through our payment partners. No-cost EMI is available for select courses.",
      },
      {
        q: "Is there a refund policy?",
        a: "We offer a satisfaction guarantee. If you're not satisfied within the first week of the course, you can request a full refund. Terms and conditions apply.",
      },
      {
        q: "What support is available during the course?",
        a: "You get access to dedicated mentors, a peer community on Discord, weekly doubt-clearing sessions, and email support throughout the course duration.",
      },
    ],
  },
  {
    category: "Career & Outcomes",
    questions: [
      {
        q: "Will this help me get a job in AI?",
        a: "Our curriculum is designed with industry requirements in mind. Many of our students have landed roles in AI/ML, data science, and tech companies. We also provide career guidance and portfolio reviews.",
      },
      {
        q: "Do you provide placement assistance?",
        a: "While we don't guarantee placements, we provide comprehensive career support including resume reviews, interview preparation, and connections to our hiring partner network.",
      },
      {
        q: "Can I use AI skills in my current non-tech job?",
        a: "Definitely! AI is transforming every industry. You'll learn to automate tasks, analyze data, and build tools that make you more effective in any role—from marketing to finance to healthcare.",
      },
    ],
  },
];

const FAQ = () => {
  return (
    <AcademyLayout>
      

      {/* Hero */}
      <section className="pt-32 pb-16">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto animate-fade-in">
            <h1 className="text-5xl font-bold mb-6">
              Frequently Asked <span className="gradient-text">Questions</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Everything you need to know about our courses, learning experience,
              and how Lyrnique can help you master AI.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Sections */}
      <section className="pb-20">
        <div className="container mx-auto px-4 max-w-4xl">
          {faqs.map((section, sectionIndex) => (
            <div key={sectionIndex} className="mb-12">
              <h2 className="text-2xl font-bold mb-6 text-primary">
                {section.category}
              </h2>
              <Accordion type="single" collapsible className="space-y-4">
                {section.questions.map((faq, index) => (
                  <AccordionItem
                    key={index}
                    value={`${sectionIndex}-${index}`}
                    className="border border-border/50 rounded-lg px-6 bg-card/50"
                  >
                    <AccordionTrigger className="text-left hover:no-underline">
                      {faq.q}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      {faq.a}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          ))}
        </div>
      </section>

      {/* Still Have Questions CTA */}
      <section className="py-16 bg-card/50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Still Have Questions?</h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            Can't find what you're looking for? Our team is here to help you make
            the right decision for your AI learning journey.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/academy/contact">
              <Button className="bg-gradient-primary border-0 text-foreground font-semibold hover:opacity-90">
                Contact Us
              </Button>
            </Link>
            <Link to="/academy/courses">
              <Button variant="outline">Explore Courses</Button>
            </Link>
          </div>
        </div>
      </section>

      
    </AcademyLayout>
  );
};

export default FAQ;
