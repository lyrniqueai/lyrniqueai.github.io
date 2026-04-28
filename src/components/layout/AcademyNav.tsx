import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, ChevronDown } from "lucide-react";
import logo from "@/assets/lyrnique-logo.png";
import ThemeToggle from "@/components/ui/ThemeToggle";
import { PRIMARY_NAV_LINKS, PROGRAM_NAV_LINKS, ALL_NAV_LINKS, PROGRAMS_PATHS } from "@/constants/academy";

export default function AcademyNav() {
  const [open, setOpen]         = useState(false);
  const [dropOpen, setDropOpen] = useState(false);
  const { pathname }            = useLocation();

  const isActive = (to: string) =>
    to === "/academy" ? pathname === "/academy" : pathname.startsWith(to);

  const isProgramsActive = PROGRAMS_PATHS.some((p) => pathname.startsWith(p));

  const closeSheet = () => setOpen(false);

  return (
    <nav
      className="acad-nav fixed top-0 left-0 right-0 z-50 border-b"
      style={{ backdropFilter: "blur(16px)", WebkitBackdropFilter: "blur(16px)", borderColor: "rgba(0, 136, 255, 0.12)" }}
    >
      <div className="container mx-auto px-6">
        <div className="flex h-16 items-center justify-between gap-6">

          {/* Left — back link + logo */}
          <div className="flex items-center gap-5 shrink-0">
            <Link
              to="/"
              className="hidden sm:flex items-center gap-1 text-xs text-muted-foreground hover:text-primary transition-colors"
              style={{ fontFamily: "var(--mono)", letterSpacing: "0.04em" }}
            >
              ← Lyrnique
            </Link>
            <div style={{ width: 1, height: 20, background: "rgba(0,136,255,0.2)" }} className="hidden sm:block" />
            <Link to="/academy" className="flex items-center gap-2.5">
              <img src={logo} alt="Lyrnique Academy" className="h-8 w-8" />
              <span
                className="font-display font-bold text-xl"
                style={{ background: "linear-gradient(90deg,#0088ff,#00ccff)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}
              >
                Academy
              </span>
            </Link>
          </div>

          {/* Centre — desktop nav */}
          <div className="hidden lg:flex items-center gap-7 flex-1 justify-center">
            {PRIMARY_NAV_LINKS.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                style={{
                  fontSize: 14, fontWeight: 500, textDecoration: "none",
                  color: isActive(link.to) ? "#0088ff" : "hsl(var(--foreground) / 0.85)",
                  paddingBottom: 2,
                  borderBottom: isActive(link.to) ? "1px solid #0088ff" : "1px solid transparent",
                  transition: "color 0.2s, border-color 0.2s",
                }}
              >
                {link.label}
              </Link>
            ))}

            {/* Programs dropdown */}
            <div className="relative" onMouseEnter={() => setDropOpen(true)} onMouseLeave={() => setDropOpen(false)}>
              <button
                style={{
                  background: "none", border: "none", cursor: "pointer",
                  fontSize: 14, fontWeight: 500, display: "flex", alignItems: "center", gap: 4,
                  color: isProgramsActive ? "#0088ff" : "hsl(var(--foreground) / 0.85)",
                  paddingBottom: 2,
                  borderBottom: isProgramsActive ? "1px solid #0088ff" : "1px solid transparent",
                }}
                aria-expanded={dropOpen}
              >
                Programs
                <ChevronDown
                  className="w-3.5 h-3.5 transition-transform duration-200"
                  style={{ transform: dropOpen ? "rotate(180deg)" : "rotate(0deg)" }}
                />
              </button>

              {dropOpen && (
                <div
                  className="academy-nav-dropdown absolute top-full left-1/2 -translate-x-1/2 mt-2 py-2 rounded-xl min-w-[190px] z-50"
                  style={{ background: "rgba(0, 8, 28, 0.92)", backdropFilter: "blur(16px)", border: "1px solid rgba(0,136,255,0.18)", boxShadow: "0 16px 40px rgba(0,0,0,0.5), 0 0 0 1px rgba(0,136,255,0.06)" }}
                >
                  {PROGRAM_NAV_LINKS.map((link) => (
                    <Link
                      key={link.to}
                      to={link.to}
                      className="block px-4 py-2.5 text-sm text-foreground/75 hover:text-primary hover:bg-white/5 transition-colors"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              to="/academy/contact"
              style={{
                fontSize: 14, fontWeight: 500, textDecoration: "none",
                color: isActive("/academy/contact") ? "#0088ff" : "hsl(var(--foreground) / 0.85)",
                paddingBottom: 2,
                borderBottom: isActive("/academy/contact") ? "1px solid #0088ff" : "1px solid transparent",
                transition: "color 0.2s, border-color 0.2s",
              }}
            >
              Contact
            </Link>
          </div>

          {/* Right — CTA + hamburger */}
          <div className="flex items-center gap-3 shrink-0">
            <ThemeToggle size={15} />
            <Link to="/academy/courses" className="hidden sm:block">
              <Button
                variant="default"
                size="sm"
                className="font-semibold border-0 hover:opacity-90 transition-opacity"
                style={{ background: "linear-gradient(135deg,#0088ff,#00ccff)", color: "#fff" }}
              >
                Get Started
              </Button>
            </Link>

            {/* Mobile hamburger */}
            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger asChild className="lg:hidden">
                <Button variant="ghost" size="icon" aria-label="Toggle menu">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[350px]">
                <div className="flex flex-col gap-6 mt-8">
                  <Link to="/academy" className="flex items-center gap-3" onClick={closeSheet}>
                    <img src={logo} alt="Lyrnique Academy" className="h-9 w-9" />
                    <span className="text-xl font-bold font-display gradient-text">Academy</span>
                  </Link>
                  <div className="flex flex-col gap-1">
                    {ALL_NAV_LINKS.map((link) => (
                      <Link
                        key={link.to}
                        to={link.to}
                        className="text-base font-medium text-foreground/80 hover:text-primary transition-colors py-2.5 px-2 rounded-lg hover:bg-white/5"
                        onClick={closeSheet}
                      >
                        {link.label}
                      </Link>
                    ))}
                    <Link
                      to="/"
                      className="text-sm text-muted-foreground py-2 px-2 mt-2"
                      style={{ fontFamily: "var(--mono)" }}
                      onClick={closeSheet}
                    >
                      ← Back to Lyrnique Services
                    </Link>
                  </div>
                  <Link to="/academy/courses" onClick={closeSheet}>
                    <Button
                      className="w-full font-semibold border-0 hover:opacity-90"
                      style={{ background: "linear-gradient(135deg,#0088ff,#00ccff)", color: "#fff" }}
                    >
                      Get Started
                    </Button>
                  </Link>
                </div>
              </SheetContent>
            </Sheet>
          </div>

        </div>
      </div>
    </nav>
  );
}
