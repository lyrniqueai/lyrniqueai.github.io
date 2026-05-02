import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { ArrowLeft, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "hsl(var(--background))",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        padding: "40px 24px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background orb */}
      <div style={{
        position: "absolute", width: 600, height: 600,
        top: "50%", left: "50%",
        transform: "translate(-50%, -50%)",
        borderRadius: "50%",
        background: "radial-gradient(circle, rgba(0,136,255,0.08), transparent 65%)",
        pointerEvents: "none",
      }} />

      <div
        className="acad-shimmer-text font-display"
        style={{ fontSize: "clamp(80px, 18vw, 160px)", fontWeight: 700, lineHeight: 1, letterSpacing: "-4px" }}
      >
        404
      </div>

      <h1
        className="font-display"
        style={{ fontSize: "clamp(20px, 3vw, 32px)", fontWeight: 600, color: "hsl(var(--foreground))", marginTop: 16, marginBottom: 12 }}
      >
        Page not found
      </h1>

      <p style={{ fontSize: 15, color: "hsl(var(--muted-foreground))", maxWidth: 360, lineHeight: 1.65, marginBottom: 36 }}>
        The page you're looking for doesn't exist or may have moved.
      </p>

      <div style={{ display: "flex", flexWrap: "wrap", gap: 12, justifyContent: "center" }}>
        <Link to="/academy">
          <Button style={{ background: "linear-gradient(135deg,#0088ff,#00ccff)", border: "none", color: "#fff", fontWeight: 600 }}>
            <ArrowLeft className="w-4 h-4 mr-2" />
            Academy Home
          </Button>
        </Link>
        <Link to="/academy/courses">
          <Button variant="outline" className="border-primary/40 text-primary hover:bg-primary/10">
            <BookOpen className="w-4 h-4 mr-2" />
            Browse Courses
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
