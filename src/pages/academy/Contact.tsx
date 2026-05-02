import { useState } from "react";
import AcademyLayout from "@/components/layout/AcademyLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Mail, Phone, MapPin, CheckCircle } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");
    try {
      const formspreeId = import.meta.env.VITE_FORMSPREE_CONTACT;
      if (formspreeId) {
        const res = await fetch(`https://formspree.io/f/${formspreeId}`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ ...formData, _subject: `Academy Contact: ${formData.subject}` }),
        });
        if (!res.ok) throw new Error("Submission failed");
      }
      setSubmitted(true);
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch {
      setError("Something went wrong. Please email us directly at lyrnique@gmail.com");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <AcademyLayout>
      <section className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 space-y-4 animate-fade-in">
            <h1 className="text-5xl font-bold font-display">
              Get in <span className="gradient-text">Touch</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Have questions about our courses? Want to discuss a custom training program? We'd love to hear from you.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Form */}
            <Card className="p-8 bg-gradient-card border-border/50">
              {submitted ? (
                <div className="flex flex-col items-center justify-center h-full text-center gap-4 py-12">
                  <CheckCircle className="w-12 h-12 text-primary" />
                  <h3 className="text-xl font-semibold font-display">Message sent!</h3>
                  <p className="text-muted-foreground text-sm max-w-xs">
                    Thanks for reaching out. We'll get back to you within 2 business days.
                  </p>
                  <Button variant="outline" size="sm" className="mt-2" onClick={() => setSubmitted(false)}>
                    Send another message
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-semibold">Name *</label>
                    <Input id="name" placeholder="Your full name" value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required className="bg-background/50" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-semibold">Email *</label>
                    <Input id="email" type="email" placeholder="your.email@example.com" value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required className="bg-background/50" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-semibold">Subject</label>
                    <Input id="subject" placeholder="What's this about?" value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="bg-background/50" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-semibold">Message *</label>
                    <Textarea id="message" placeholder="Tell us more about your inquiry..." rows={6}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      required className="bg-background/50" />
                  </div>
                  {error && <p className="text-red-400 text-sm">{error}</p>}
                  <Button type="submit" disabled={isSubmitting}
                    className="w-full bg-gradient-primary border-0 text-foreground font-semibold hover:opacity-90 transition-opacity">
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              )}
            </Card>

            {/* Contact info */}
            <div className="space-y-8">
              <Card className="p-6 bg-gradient-card border-border/50 hover:border-primary/50 transition-all">
                <div className="flex items-start space-x-4">
                  <div className="bg-primary/20 p-3 rounded-full">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Email Us</h3>
                    <a href="mailto:lyrnique@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
                      lyrnique@gmail.com
                    </a>
                  </div>
                </div>
              </Card>

              <Card className="p-6 bg-gradient-card border-border/50 hover:border-primary/50 transition-all">
                <div className="flex items-start space-x-4">
                  <div className="bg-primary/20 p-3 rounded-full">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Call Us</h3>
                    <a href="tel:+918667297098" className="block text-muted-foreground hover:text-primary transition-colors">+91 86672 97098</a>
                    <a href="tel:+918122739858" className="block text-muted-foreground hover:text-primary transition-colors">+91 81227 39858</a>
                    <p className="text-sm text-muted-foreground mt-1">Mon–Fri 9am–6pm IST</p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 bg-gradient-card border-border/50 hover:border-primary/50 transition-all">
                <div className="flex items-start space-x-4">
                  <div className="bg-primary/20 p-3 rounded-full">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Visit Us</h3>
                    <p className="text-muted-foreground">Workshops available in Chennai, Bangalore, Mumbai, and Delhi</p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </AcademyLayout>
  );
};

export default Contact;
