import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import AcademyLayout from "@/components/layout/AcademyLayout";
import HeroSection from "@/components/academy/HeroSection";
import AudienceSection from "@/components/academy/AudienceSection";
import WhatYouBuildSection from "@/components/academy/WhatYouBuildSection";
import LearningFormatSection from "@/components/academy/LearningFormatSection";
import LeadCaptureForm from "@/components/academy/LeadCaptureForm";
import CourseCard from "@/components/academy/CourseCard";
import StatCard from "@/components/academy/StatCard";
import MentorCard from "@/components/academy/MentorCard";
import { FEATURED_COURSES, QUICK_STATS, MENTORS } from "@/constants/academy";

export default function AcademyIndex() {
  return (
    <AcademyLayout>
      <HeroSection />
      <AudienceSection />

      {/* Featured Courses */}
      <section className="py-20 bg-card/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold font-display mb-4">Featured Courses</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Master Generative AI through hands-on projects designed for every skill level
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {FEATURED_COURSES.map((course) => (
              <CourseCard
                key={course.slug}
                title={course.title}
                description={course.description}
                cta="View Course"
                link={`/academy/courses/${course.slug}`}
                level={course.level}
                duration={course.duration}
                outcome={course.outcome}
                image={course.image}
              />
            ))}
          </div>
        </div>
      </section>

      <WhatYouBuildSection />
      <LearningFormatSection />

      {/* Why Choose Us */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold font-display mb-6">Why Lyrnique?</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Lyrnique makes AI accessible with no-code tools and expert mentors, empowering students from any background to build future-ready skills.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <LeadCaptureForm
              type="syllabus"
              buttonClassName="bg-gradient-primary border-0 text-foreground font-semibold hover:opacity-90"
            />
            <LeadCaptureForm type="workshop" buttonVariant="outline" />
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-20 bg-card/50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {QUICK_STATS.map((s) => (
              <StatCard key={s.n} number={s.n} label={s.l} />
            ))}
          </div>
        </div>
      </section>

      {/* Meet Our Mentors */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold font-display mb-4">Meet Our Mentors</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Learn from industry experts with years of experience in AI and Data Science
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {MENTORS.map((m) => (
              <MentorCard
                key={m.name}
                name={m.name}
                experience={m.experience}
                projects={m.projects}
                highlights={m.highlights}
                linkedin={m.linkedin}
                company={m.company}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-20 bg-gradient-to-b from-background to-card">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold font-display mb-6">
            Start Your <span className="gradient-text">AI Journey</span> Today
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join hundreds of students transforming their future with Generative AI
          </p>
          <Link to="/academy/courses">
            <Button
              size="lg"
              className="bg-gradient-primary border-0 text-foreground font-semibold text-lg px-8 py-6 hover:opacity-90 transition-opacity"
            >
              Explore All Courses
            </Button>
          </Link>
        </div>
      </section>
    </AcademyLayout>
  );
}
