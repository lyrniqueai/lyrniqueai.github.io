import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ThemeToggle from "@/components/ui/ThemeToggle";
import { NAV_LINKS } from "@/constants";

const SECTION_IDS = ["home", "what-we-build", "process", "projects", "about"];

export default function MainNav() {
  const [scrolled, setScrolled]     = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Track which section is in viewport
  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    SECTION_IDS.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;

      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(id);
        },
        { threshold: 0.3, rootMargin: "-62px 0px 0px 0px" },
      );
      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  const closeMobile = () => setMobileOpen(false);

  const isActive = (href: string) => {
    const id = href.replace("#", "");
    return activeSection === id;
  };

  return (
    <>
      <nav
        className="main-nav"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 200,
          height: 62,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 6vw",
          backdropFilter: "blur(24px)",
          WebkitBackdropFilter: "blur(24px)",
          borderBottom: `1px solid ${scrolled ? "var(--b2)" : "var(--b)"}`,
          transition: "border-color 0.3s, background 0.3s",
        }}
      >
        {/* Logo */}
        <a
          href="#home"
          style={{ textDecoration: "none", display: "flex", flexDirection: "column", gap: 1 }}
        >
          <span style={{ fontSize: 19, fontWeight: 700, color: "var(--text)", letterSpacing: "-0.4px", lineHeight: 1.1 }}>
            Lyrni<span className="gt2">que</span>
          </span>
          <span style={{ fontFamily: "var(--mono)", fontSize: 9, color: "var(--text3)", letterSpacing: "0.06em" }}>
            Built Fast. Engineered Properly.
          </span>
        </a>

        {/* Desktop nav */}
        <ul className="hidden nav:flex" style={{ gap: 30, listStyle: "none", margin: 0, padding: 0 }}>
          {NAV_LINKS.map((l) => {
            const active = isActive(l.href);
            return (
              <li key={l.href} style={{ position: "relative" }}>
                <a
                  href={l.href}
                  style={{
                    fontSize: 13,
                    color: active ? "var(--text)" : "var(--text2)",
                    textDecoration: "none",
                    transition: "color 0.2s",
                    paddingBottom: 2,
                  }}
                  onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "var(--text)")}
                  onMouseLeave={(e) => ((e.target as HTMLElement).style.color = active ? "var(--text)" : "var(--text2)")}
                >
                  {l.label}
                </a>
                {active && (
                  <span
                    style={{
                      position: "absolute",
                      bottom: -4,
                      left: 0,
                      right: 0,
                      height: 2,
                      borderRadius: 1,
                      background: "linear-gradient(90deg, #6366f1, #a855f7)",
                      boxShadow: "0 0 8px rgba(99,102,241,0.6)",
                    }}
                  />
                )}
              </li>
            );
          })}
          <li>
            <Link
              to="/academy"
              style={{ fontSize: 13, color: "var(--text3)", textDecoration: "none", transition: "color 0.2s" }}
              onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "var(--text2)")}
              onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "var(--text3)")}
            >
              Academy
            </Link>
          </li>
        </ul>

        {/* Desktop CTAs */}
        <div className="hidden nav:flex" style={{ gap: 10, alignItems: "center" }}>
          <ThemeToggle />
          <a href="#contact" className="btn-ghost">Free scoping call</a>
          <a href="#contact" className="btn-grad">Start a project</a>
        </div>

        {/* Mobile controls */}
        <div className="flex nav:hidden" style={{ gap: 8, alignItems: "center" }}>
          <ThemeToggle size={15} />
          <button
            onClick={() => setMobileOpen((v) => !v)}
            style={{ background: "none", border: "none", color: "var(--text)", cursor: "pointer", padding: 4 }}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <line x1="2" y1="5"  x2="18" y2="5"  stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              <line x1="2" y1="10" x2="18" y2="10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              <line x1="2" y1="15" x2="18" y2="15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile dropdown */}
      {mobileOpen && (
        <div
          className="main-nav-mobile"
          style={{
            position: "fixed",
            top: 62,
            left: 0,
            right: 0,
            zIndex: 199,
            backdropFilter: "blur(24px)",
            WebkitBackdropFilter: "blur(24px)",
            borderBottom: "1px solid var(--b)",
            padding: "24px 6vw",
            display: "flex",
            flexDirection: "column",
            gap: 18,
          }}
        >
          {NAV_LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={closeMobile}
              style={{ fontSize: 15, color: isActive(l.href) ? "var(--text)" : "var(--text2)", textDecoration: "none" }}
            >
              {l.label}
            </a>
          ))}
          <Link
            to="/academy"
            onClick={closeMobile}
            style={{ fontSize: 15, color: "var(--text3)", textDecoration: "none" }}
          >
            Academy
          </Link>
          <div style={{ display: "flex", gap: 10, paddingTop: 8 }}>
            <a href="#contact" className="btn-ghost" onClick={closeMobile}>Free scoping call</a>
            <a href="#contact" className="btn-grad" onClick={closeMobile}>Start a project</a>
          </div>
        </div>
      )}
    </>
  );
}
