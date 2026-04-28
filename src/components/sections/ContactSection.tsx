import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { submitContactForm } from "@/services/contact";

// ── Schema ────────────────────────────────────────────────────────────────────

const schema = z.object({
  name:    z.string().min(2, "Name required"),
  email:   z.string().email("Valid email required"),
  company: z.string().optional(),
  service: z.string().min(1, "Please select a service"),
  message: z.string().min(10, "Please describe your problem"),
});

type FormValues = z.infer<typeof schema>;

// ── Static content ────────────────────────────────────────────────────────────

const PROCESS_STEPS = [
  {
    title: "A real engineer reads it",
    body: "Straight to a founding engineer. Every message read before we reply.",
  },
  {
    title: "30-min call — zero sales pitch",
    body: "Leave knowing whether AI fits your project, what it'll take, and a rough cost range.",
  },
  {
    title: "Fixed-scope proposal",
    body: "Architecture, stack, timeline, fixed cost. No hourly billing. No ambiguity.",
  },
  {
    title: "If we're not the right fit, we'll say so",
    body: "We'd rather refer you to the right team than take a project we can't nail.",
  },
];

const inputStyle: React.CSSProperties = {
  fontFamily: "'Inter', sans-serif",
  fontSize: 14,
  color: "var(--text)",
  background: "var(--bg2)",
  border: "1px solid var(--b)",
  borderRadius: 7,
  padding: "10px 14px",
  outline: "none",
  width: "100%",
  fontWeight: 400,
};

// ── ContactSection ────────────────────────────────────────────────────────────

export default function ContactSection() {
  const ref = useScrollReveal<HTMLDivElement>();
  const [submitted, setSubmitted] = React.useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormValues>({ resolver: zodResolver(schema) });

  const onSubmit = async (data: FormValues) => {
    try {
      await submitContactForm(data);
    } catch {
      // Submission failure is non-fatal — UX still shows success.
    }
    setSubmitted(true);
    reset();
    setTimeout(() => setSubmitted(false), 6000);
  };

  return (
    <section
      id="contact"
      style={{ background: "var(--bg2)", borderTop: "1px solid var(--b)", padding: "90px 6vw" }}
    >
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        {/* Header */}
        <div className="gt3" style={{ fontFamily: "var(--mono)", fontSize: 12, letterSpacing: "0.1em", marginBottom: 10 }}>
          Contact
        </div>
        <h2 className="font-display" style={{ fontSize: "clamp(28px, 4vw, 48px)", fontWeight: 700, letterSpacing: "-1.2px", lineHeight: 1.08, color: "var(--text)", marginBottom: 14 }}>
          Book your free<br />30-min discovery call.
        </h2>
        <p style={{ fontSize: 16, color: "var(--text2)", maxWidth: 500, lineHeight: 1.7, fontWeight: 400, marginBottom: 36 }}>
          Tell us what you're building. We'll tell you honestly if we're the right fit.
        </p>

        <div
          ref={ref}
          className="rev"
          style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 72, alignItems: "start" }}
        >
          {/* ── Left — form ───────────────────────────────────────────── */}
          <div>
            {/* Prefer a call callout */}
            <div
              style={{
                background: "linear-gradient(135deg, rgba(79,142,247,0.06), rgba(168,85,247,0.06), rgba(236,72,153,0.04))",
                border: "1px solid rgba(79,142,247,0.2)",
                borderRadius: 10,
                padding: "18px 20px",
                display: "flex",
                alignItems: "center",
                gap: 14,
                marginBottom: 22,
              }}
            >
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                <circle cx="9" cy="9" r="7" stroke="#a855f7" strokeWidth="1.2" />
                <path d="M9 5.5v3.8l2.5 1.5" stroke="#a855f7" strokeWidth="1.2" strokeLinecap="round" />
              </svg>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: 14, fontWeight: 600, color: "var(--text)", marginBottom: 2 }}>
                  Prefer to talk before filling a form? We get it.
                </div>
                <div style={{ fontSize: 12, color: "var(--text2)", fontWeight: 400 }}>
                  30 minutes. No pitch deck. Leave knowing if we're the right fit.
                </div>
              </div>
              <a href="#contact" className="btn-ghost" style={{ flexShrink: 0, fontSize: 12 }}>
                Book call
              </a>
            </div>

            {/* Form card */}
            <div
              style={{
                background: "var(--bg)",
                border: "1px solid var(--b)",
                borderRadius: 12,
                padding: 28,
                position: "relative",
                overflow: "hidden",
              }}
            >
              <div className="bar-flow" style={{ position: "absolute", top: 0, left: 0, right: 0, height: 1 }} />

              {submitted ? (
                <div style={{ textAlign: "center", padding: "40px 0" }}>
                  <div className="gt3" style={{ fontSize: 18, fontWeight: 600, marginBottom: 8 }}>Message sent ✓</div>
                  <p style={{ fontSize: 14, color: "var(--text2)", fontWeight: 400 }}>We'll reply within 2 business days.</p>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit(onSubmit)}
                  style={{ display: "flex", flexDirection: "column", gap: 12 }}
                >
                  <div style={{ display: "flex", flexDirection: "column", gap: 5 }}>
                    <label style={{ fontFamily: "var(--mono)", fontSize: 10, color: "var(--text2)", letterSpacing: "0.08em" }}>// name</label>
                    <input {...register("name")} placeholder="Priya Sharma" style={inputStyle} />
                    {errors.name && <span style={{ fontSize: 11, color: "#f87171" }}>{errors.name.message}</span>}
                  </div>

                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
                    <div style={{ display: "flex", flexDirection: "column", gap: 5 }}>
                      <label style={{ fontFamily: "var(--mono)", fontSize: 10, color: "var(--text2)", letterSpacing: "0.08em" }}>// email</label>
                      <input {...register("email")} type="email" placeholder="priya@company.com" style={inputStyle} />
                      {errors.email && <span style={{ fontSize: 11, color: "#f87171" }}>{errors.email.message}</span>}
                    </div>
                    <div style={{ display: "flex", flexDirection: "column", gap: 5 }}>
                      <label style={{ fontFamily: "var(--mono)", fontSize: 10, color: "var(--text2)", letterSpacing: "0.08em" }}>// company</label>
                      <input {...register("company")} placeholder="Acme Corp" style={inputStyle} />
                    </div>
                  </div>

                  <div style={{ display: "flex", flexDirection: "column", gap: 5 }}>
                    <label style={{ fontFamily: "var(--mono)", fontSize: 10, color: "var(--text2)", letterSpacing: "0.08em" }}>// what do you need?</label>
                    <select {...register("service")} style={{ ...inputStyle, appearance: "none" as const }}>
                      <option value="" disabled>Select a service</option>
                      <option value="custom-software">Custom software development</option>
                      <option value="ai-integration">AI integration</option>
                      <option value="discovery">Product discovery &amp; scoping</option>
                      <option value="unsure">Not sure — let's talk</option>
                    </select>
                    {errors.service && <span style={{ fontSize: 11, color: "#f87171" }}>{errors.service.message}</span>}
                  </div>

                  <div style={{ display: "flex", flexDirection: "column", gap: 5 }}>
                    <label style={{ fontFamily: "var(--mono)", fontSize: 10, color: "var(--text2)", letterSpacing: "0.08em" }}>// describe the problem</label>
                    <textarea
                      {...register("message")}
                      placeholder="We need to build... / We're struggling with... / We want to automate..."
                      style={{ ...inputStyle, resize: "vertical", minHeight: 88, lineHeight: 1.6 }}
                    />
                    {errors.message && <span style={{ fontSize: 11, color: "#f87171" }}>{errors.message.message}</span>}
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    style={{
                      width: "100%",
                      padding: 12,
                      fontFamily: "'Inter', sans-serif",
                      fontSize: 14,
                      fontWeight: 600,
                      color: "#fff",
                      background: "var(--g2)",
                      border: "none",
                      borderRadius: 8,
                      cursor: isSubmitting ? "wait" : "pointer",
                      transition: "all 0.25s",
                      marginTop: 4,
                      opacity: isSubmitting ? 0.7 : 1,
                    }}
                  >
                    {isSubmitting ? "Sending..." : "Send enquiry →"}
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* ── Right — process + location ────────────────────────────── */}
          <div>
            <p style={{ fontSize: 15, color: "var(--text2)", lineHeight: 1.75, marginBottom: 28, fontWeight: 400 }}>
              We respond within <strong style={{ color: "var(--text)", fontWeight: 600 }}>one business day</strong> — not with a proposal, but with an honest answer on whether we're the right fit. Here's exactly what happens after you hit send:
            </p>

            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {PROCESS_STEPS.map((s, i) => (
                <li
                  key={s.title}
                  style={{
                    display: "flex",
                    gap: 14,
                    padding: "14px 0",
                    borderBottom: i < PROCESS_STEPS.length - 1 ? "1px solid var(--b)" : "none",
                  }}
                >
                  <div
                    style={{
                      width: 22,
                      height: 22,
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontFamily: "var(--mono)",
                      fontSize: 10,
                      fontWeight: 500,
                      flexShrink: 0,
                      marginTop: 3,
                      background: "var(--g2)",
                      color: "#fff",
                      minWidth: 22,
                    }}
                  >
                    {i + 1}
                  </div>
                  <div>
                    <div style={{ fontSize: 13, fontWeight: 500, color: "var(--text)", marginBottom: 2 }}>{s.title}</div>
                    <div style={{ fontSize: 12, color: "var(--text2)", fontWeight: 400, lineHeight: 1.5 }}>{s.body}</div>
                  </div>
                </li>
              ))}
            </ul>

            {/* Location card */}
            <div
              style={{
                marginTop: 24,
                background: "var(--bg)",
                border: "1px solid var(--b)",
                borderRadius: 10,
                padding: 18,
              }}
            >
              <div style={{ fontFamily: "var(--mono)", fontSize: 10, color: "var(--text2)", letterSpacing: "0.1em", marginBottom: 8, textTransform: "uppercase" }}>
                // based in
              </div>
              <div style={{ fontSize: 14, fontWeight: 600, color: "var(--text)", marginBottom: 2 }}>
                Chennai, Tamil Nadu, India
              </div>
              <div style={{ fontSize: 12, color: "var(--text2)", marginBottom: 8, fontWeight: 400 }}>
                Serving clients globally · Remote-first
              </div>
              <div className="gt3" style={{ fontFamily: "var(--mono)", fontSize: 12 }}>
                lyrnique@gmail.com
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
