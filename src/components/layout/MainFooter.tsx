import { Link } from "react-router-dom";

export default function MainFooter() {
  return (
    <footer
      style={{
        background: "var(--bg)",
        borderTop: "1px solid var(--b)",
        padding: "50px 6vw 28px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Subtle ambient orb */}
      <div style={{
        position: "absolute",
        bottom: -60,
        left: "50%",
        transform: "translateX(-50%)",
        width: 500,
        height: 200,
        borderRadius: "50%",
        background: "radial-gradient(ellipse, rgba(99,102,241,0.07) 0%, transparent 70%)",
        pointerEvents: "none",
      }} />
      <div style={{ maxWidth: 1100, margin: "0 auto", position: "relative", zIndex: 1 }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "2fr 1fr 1fr 1fr",
            gap: 36,
            paddingBottom: 36,
            borderBottom: "1px solid var(--b)",
            marginBottom: 24,
          }}
          className="max-nav:grid-cols-1"
        >
          {/* Brand */}
          <div>
            <div style={{ fontSize: 17, fontWeight: 700, color: "var(--text)", marginBottom: 10 }}>
              Lyrni<span className="gt2">que</span>
            </div>
            <div style={{ fontSize: 13, color: "var(--text3)", lineHeight: 1.6, marginBottom: 12, fontWeight: 400 }}>
              AI-native software development — built in Chennai, delivered globally.<br />
              Same engineers, start to finish. Zero surprises.
            </div>
            <div style={{ fontFamily: "var(--mono)", fontSize: 11, color: "var(--text3)" }}>
              Chennai, Tamil Nadu, India
            </div>
          </div>

          {/* Services */}
          <div>
            <div style={{ fontFamily: "var(--mono)", fontSize: 10, letterSpacing: "0.1em", color: "var(--text3)", marginBottom: 14, textTransform: "uppercase" }}>
              Services
            </div>
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {["Custom software dev", "AI integration", "Product discovery"].map((s) => (
                <li key={s} style={{ marginBottom: 9 }}>
                  <a href="#services" style={{ fontSize: 13, color: "var(--text2)", textDecoration: "none", fontWeight: 400 }}>
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <div style={{ fontFamily: "var(--mono)", fontSize: 10, letterSpacing: "0.1em", color: "var(--text3)", marginBottom: 14, textTransform: "uppercase" }}>
              Company
            </div>
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {[
                { href: "#how", label: "How we work" },
                { href: "#work", label: "Our work" },
                { href: "#about", label: "About" },
                { href: "#contact", label: "Contact" },
              ].map((l) => (
                <li key={l.href} style={{ marginBottom: 9 }}>
                  <a href={l.href} style={{ fontSize: 13, color: "var(--text2)", textDecoration: "none", fontWeight: 400 }}>
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact + Academy */}
          <div>
            <div style={{ fontFamily: "var(--mono)", fontSize: 10, letterSpacing: "0.1em", color: "var(--text3)", marginBottom: 14, textTransform: "uppercase" }}>
              Contact
            </div>
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {[
                { href: "#contact", label: "Start a project" },
                { href: "#contact", label: "Free scoping call" },
                { href: "mailto:lyrnique@gmail.com", label: "lyrnique@gmail.com" },
              ].map((l) => (
                <li key={l.label} style={{ marginBottom: 9 }}>
                  <a href={l.href} style={{ fontSize: 13, color: "var(--text2)", textDecoration: "none", fontWeight: 400 }}>
                    {l.label}
                  </a>
                </li>
              ))}
              <li style={{ marginTop: 16, paddingTop: 16, borderTop: "1px solid var(--b)" }}>
                <Link to="/academy" style={{ fontSize: 13, color: "var(--text3)", textDecoration: "none", fontWeight: 400 }}>
                  Lyrnique Academy →
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div style={{ fontFamily: "var(--mono)", fontSize: 11, color: "var(--text3)", textAlign: "center" }}>
          © 2026 Lyrnique · AI-first software development · Chennai, India
        </div>
      </div>
    </footer>
  );
}
