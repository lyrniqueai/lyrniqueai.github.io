import { useState } from "react";
import { Link } from "react-router-dom";
import AcademyLayout from "@/components/layout/AcademyLayout";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, ArrowRight, CheckCircle } from "lucide-react";
import { blogPosts, type BlogPost } from "@/data/blogPosts";

const categories = ["All", "AI Basics", "Tutorials", "Careers", "Comparisons", "Industry"];

const BlogCard = ({ post }: { post: BlogPost }) => (
  <Link to={`/academy/blog/${post.id}`} className="block group">
    <article className="h-full border border-border/50 rounded-xl overflow-hidden bg-card/50 hover:border-primary/50 transition-all duration-300">
      <div className="aspect-video overflow-hidden">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="p-6">
        <div className="flex items-center gap-3 mb-3">
          <Badge variant="secondary">{post.category}</Badge>
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <span className="flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              {post.date}
            </span>
            <span className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              {post.readTime}
            </span>
          </div>
        </div>
        <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
          {post.title}
        </h3>
        <p className="text-muted-foreground mb-4 line-clamp-2">{post.excerpt}</p>
        <span className="inline-flex items-center gap-1 text-primary text-sm font-medium">
          Read More <ArrowRight className="w-4 h-4" />
        </span>
      </div>
    </article>
  </Link>
);

const Blog = () => {
  const featuredPost = blogPosts.find((post) => post.featured);
  const regularPosts = blogPosts.filter((post) => !post.featured);

  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [nlSubmitting, setNlSubmitting] = useState(false);
  const [nlSuccess, setNlSuccess] = useState(false);
  const [nlError, setNlError] = useState("");

  const handleNewsletterSubmit = async () => {
    if (!newsletterEmail || !/\S+@\S+\.\S+/.test(newsletterEmail)) {
      setNlError("Please enter a valid email address.");
      return;
    }
    setNlError("");
    setNlSubmitting(true);
    try {
      const formspreeId = import.meta.env.VITE_FORMSPREE_NEWSLETTER;
      if (formspreeId) {
        await fetch(`https://formspree.io/f/${formspreeId}`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email: newsletterEmail, _subject: "Newsletter Signup — Lyrnique Academy" }),
        });
      }
      setNlSuccess(true);
      setNewsletterEmail("");
    } catch {
      setNlError("Something went wrong. Please try again.");
    } finally {
      setNlSubmitting(false);
    }
  };

  return (
    <AcademyLayout>
      {/* Hero */}
      <section className="pt-32 pb-12">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto animate-fade-in">
            <h1 className="text-5xl font-bold font-display mb-6">
              Lyrnique <span className="gradient-text">Blog</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Insights, tutorials, and trends in Generative AI. Learn from industry
              experts and stay ahead in the AI revolution.
            </p>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="pb-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category) => (
              <Button
                key={category}
                variant={category === "All" ? "default" : "outline"}
                size="sm"
                className={category === "All" ? "bg-gradient-primary border-0 text-foreground" : ""}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Post */}
      {featuredPost && (
        <section className="pb-12">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <Link to={`/academy/blog/${featuredPost.id}`} className="block group">
                <article className="grid md:grid-cols-2 gap-8 border border-border/50 rounded-xl overflow-hidden bg-card/50 hover:border-primary/50 transition-all duration-300">
                  <div className="aspect-video md:aspect-auto overflow-hidden">
                    <img
                      src={featuredPost.image}
                      alt={featuredPost.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6 md:p-8 flex flex-col justify-center">
                    <Badge className="w-fit mb-4 bg-primary/20 text-primary border-0">Featured</Badge>
                    <div className="flex items-center gap-3 mb-3">
                      <Badge variant="secondary">{featuredPost.category}</Badge>
                      <span className="text-sm text-muted-foreground flex items-center gap-1">
                        <Clock className="w-4 h-4" />{featuredPost.readTime}
                      </span>
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold font-display mb-4 group-hover:text-primary transition-colors">
                      {featuredPost.title}
                    </h2>
                    <p className="text-muted-foreground mb-6">{featuredPost.excerpt}</p>
                    <span className="inline-flex items-center gap-2 font-semibold text-primary w-fit">
                      Read Article <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </article>
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* Blog Grid */}
      <section className="pb-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {regularPosts.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-16 bg-card/50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold font-display mb-4">Stay Updated</h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            Get the latest AI insights, tutorials, and course updates delivered to your inbox weekly.
          </p>
          {nlSuccess ? (
            <div className="flex items-center justify-center gap-3 text-primary font-medium">
              <CheckCircle className="w-5 h-5" />
              Thanks! You're subscribed.
            </div>
          ) : (
            <div className="flex flex-col sm:flex-row gap-3 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                value={newsletterEmail}
                onChange={(e) => setNewsletterEmail(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleNewsletterSubmit()}
                className="flex-1 px-4 py-2 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary text-sm"
              />
              <Button
                onClick={handleNewsletterSubmit}
                disabled={nlSubmitting}
                className="bg-gradient-primary border-0 text-foreground font-semibold hover:opacity-90"
              >
                {nlSubmitting ? "Subscribing..." : "Subscribe"}
              </Button>
            </div>
          )}
          {nlError && <p className="text-red-400 text-sm mt-2">{nlError}</p>}
        </div>
      </section>
    </AcademyLayout>
  );
};

export default Blog;
