import { useParams, Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, ArrowLeft, Bell } from "lucide-react";
import AcademyLayout from "@/components/layout/AcademyLayout";
import { blogPosts } from "@/data/blogPosts";

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = blogPosts.find((p) => p.id === slug);

  if (!post) {
    return (
      <AcademyLayout>
        <div
          style={{
            minHeight: "80vh",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            padding: "120px 24px 60px",
          }}
        >
          <div className="acad-shimmer-text font-display" style={{ fontSize: 72, fontWeight: 700, lineHeight: 1 }}>404</div>
          <p style={{ color: "hsl(var(--muted-foreground))", marginTop: 16, fontSize: 18 }}>Article not found</p>
          <Link
            to="/academy/blog"
            className="text-primary hover:underline"
            style={{ marginTop: 24, fontSize: 14, display: "inline-flex", alignItems: "center", gap: 6 }}
          >
            <ArrowLeft className="w-4 h-4" /> Back to Blog
          </Link>
        </div>
      </AcademyLayout>
    );
  }

  return (
    <AcademyLayout>
      <article style={{ maxWidth: 800, margin: "0 auto", padding: "110px 24px 80px" }}>

        {/* Back link */}
        <Link
          to="/academy/blog"
          className="text-muted-foreground hover:text-primary transition-colors"
          style={{ display: "inline-flex", alignItems: "center", gap: 6, fontSize: 13, marginBottom: 32, fontFamily: "var(--mono)" }}
        >
          <ArrowLeft className="w-4 h-4" /> All articles
        </Link>

        {/* Meta */}
        <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: 12, marginBottom: 24 }}>
          <Badge variant="secondary">{post.category}</Badge>
          <span className="text-muted-foreground" style={{ display: "flex", alignItems: "center", gap: 4, fontSize: 13 }}>
            <Calendar className="w-3.5 h-3.5" />{post.date}
          </span>
          <span className="text-muted-foreground" style={{ display: "flex", alignItems: "center", gap: 4, fontSize: 13 }}>
            <Clock className="w-3.5 h-3.5" />{post.readTime}
          </span>
        </div>

        {/* Title */}
        <h1
          className="font-display"
          style={{
            fontSize: "clamp(28px, 5vw, 48px)",
            fontWeight: 700,
            lineHeight: 1.15,
            letterSpacing: "-1px",
            marginBottom: 28,
            color: "hsl(var(--foreground))",
          }}
        >
          {post.title}
        </h1>

        {/* Featured image */}
        <div style={{ borderRadius: 12, overflow: "hidden", marginBottom: 36, border: "1px solid rgba(0,136,255,0.12)" }}>
          <img
            src={post.image}
            alt={post.title}
            style={{ width: "100%", height: "auto", display: "block", maxHeight: 420, objectFit: "cover" }}
          />
        </div>

        {/* Intro / excerpt */}
        <p
          style={{
            fontSize: 18,
            lineHeight: 1.8,
            color: "hsl(var(--muted-foreground))",
            marginBottom: 40,
            fontWeight: 400,
          }}
        >
          {post.excerpt}
        </p>

        {/* Coming soon callout */}
        <div
          className="acad-glass"
          style={{
            borderRadius: 12,
            padding: "28px 32px",
            position: "relative",
            overflow: "hidden",
            display: "flex",
            alignItems: "flex-start",
            gap: 18,
          }}
        >
          {/* Top gradient line */}
          <div style={{
            position: "absolute", top: 0, left: 0, right: 0, height: 1,
            background: "linear-gradient(90deg, #0088ff, #00ccff)",
          }} />
          <div style={{
            width: 40, height: 40, borderRadius: "50%", flexShrink: 0,
            background: "rgba(0,136,255,0.12)",
            border: "1px solid rgba(0,136,255,0.22)",
            display: "flex", alignItems: "center", justifyContent: "center",
          }}>
            <Bell style={{ width: 18, height: 18, color: "#0088ff" }} />
          </div>
          <div>
            <p
              className="font-display"
              style={{ fontWeight: 600, fontSize: 15, marginBottom: 6, color: "hsl(var(--foreground))" }}
            >
              Full article coming soon
            </p>
            <p style={{ fontSize: 13, color: "hsl(var(--muted-foreground))", lineHeight: 1.6 }}>
              We're publishing in-depth content regularly. Subscribe to the Lyrnique newsletter below to be notified when this article goes live.
            </p>
            <Link
              to="/academy/blog"
              className="text-primary hover:underline"
              style={{ fontSize: 13, display: "inline-flex", alignItems: "center", gap: 5, marginTop: 14 }}
            >
              Browse other articles <ArrowLeft className="w-3.5 h-3.5 rotate-180" />
            </Link>
          </div>
        </div>
      </article>
    </AcademyLayout>
  );
};

export default BlogPost;
